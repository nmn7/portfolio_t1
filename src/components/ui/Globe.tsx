import { useEffect, useRef, useState } from 'react';

export interface GlobeNode {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

// Single target node: Bangalore, India
const BANGALORE_NODE: GlobeNode = {
  id: 'blr',
  name: 'Bangalore',
  lat: 12.9716,
  lng: 77.5946,
};

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return { x, y, z };
}

type Matrix3 = number[];

function identityMatrix(): Matrix3 {
  return [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];
}

function multiplyMatrix(a: Matrix3, b: Matrix3): Matrix3 {
  const result = new Array(9);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[i * 3 + j] =
        a[i * 3 + 0] * b[0 * 3 + j] +
        a[i * 3 + 1] * b[1 * 3 + j] +
        a[i * 3 + 2] * b[2 * 3 + j];
    }
  }
  return result;
}

function axisAngleMatrix(axisX: number, axisY: number, axisZ: number, angle: number): Matrix3 {
  const len = Math.hypot(axisX, axisY, axisZ);
  if (len < 0.000001) return identityMatrix();
  
  const x = axisX / len;
  const y = axisY / len;
  const z = axisZ / len;
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const t = 1 - c;

  return [
    t * x * x + c,     t * x * y - s * z, t * x * z + s * y,
    t * x * y + s * z, t * y * y + c,     t * y * z - s * x,
    t * x * z - s * y, t * y * z + s * x, t * z * z + c
  ];
}

function rotateVector(v: { x: number; y: number; z: number }, m: Matrix3) {
  return {
    x: m[0] * v.x + m[1] * v.y + m[2] * v.z,
    y: m[3] * v.x + m[4] * v.y + m[5] * v.z,
    z: m[6] * v.x + m[7] * v.y + m[8] * v.z,
  };
}

function createLandMask(): { mask: Uint8Array; width: number; height: number } {
  const width = 720;
  const height = 360;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) return { mask: new Uint8Array(width * height), width, height };

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#ffffff';

  const paths = [
    // Peninsular India & South Asia
    "M 504 134 L 496 118 L 508 110 L 536 124 L 544 128 L 542 136 L 532 140 L 520 154 L 515 162 L 507.6 148 L 505.6 140 Z",
    // Sri Lanka
    "M 519 164 A 3.5 3.5 0 1 0 522 169 Z",
    // Eurasia & Russia
    "M 430 100 L 420 90 L 424 60 L 460 40 L 560 30 L 680 30 L 720 40 L 720 110 L 680 120 L 640 100 L 620 104 L 580 110 L 560 130 L 544 128 L 536 124 L 508 110 L 496 118 L 470 110 L 450 100 Z",
    // SE Asia / Indochina
    "M 544 128 L 570 136 L 576 148 L 562 174 L 556 174 L 556 150 L 542 136 Z",
    // East Asia & China
    "M 560 130 L 590 116 L 616 106 L 614 118 L 602 136 L 576 148 L 570 136 Z",
    // Japan
    "M 616 100 L 624 90 L 644 110 L 620 120 Z",
    // Indonesia & Philippines
    "M 550 174 L 570 176 L 590 196 L 560 196 Z M 590 180 L 640 190 L 640 204 L 590 200 Z M 600 140 L 612 140 L 610 164 L 596 160 Z",
    // Middle East & Arabian Peninsula
    "M 430 100 L 450 100 L 470 110 L 470 132 L 448 146 L 428 156 L 430 124 L 424 116 Z",
    // Europe
    "M 340 108 L 344 94 L 360 94 L 376 88 L 396 88 L 424 60 L 420 90 L 430 100 L 424 116 L 400 104 L 376 100 L 364 108 L 350 108 Z",
    // Iberian Peninsula
    "M 340 108 L 350 108 L 352 118 L 338 118 Z",
    // Italy
    "M 384 96 L 390 94 L 396 104 L 388 106 Z",
    // United Kingdom & Ireland
    "M 336 62 L 356 62 L 350 80 L 334 80 Z",
    // Scandinavia
    "M 370 40 L 410 36 L 424 60 L 380 70 Z",
    // Africa
    "M 326 110 L 376 100 L 400 104 L 430 124 L 462 158 L 424 220 L 396 248 L 384 240 L 340 200 L 324 170 L 326 150 Z",
    // Madagascar
    "M 446 204 L 456 204 L 452 230 L 446 230 Z",
    // Australia
    "M 586 230 L 622 204 L 644 200 L 666 240 L 662 248 L 620 244 Z",
    // New Zealand
    "M 690 250 L 700 250 L 696 270 Z",
    // North America
    "M 24 50 L 120 50 L 230 90 L 210 110 L 200 130 L 200 164 L 176 148 L 140 134 L 120 110 Z M 120 50 L 230 40 L 280 40 L 250 80 Z",
    // Greenland
    "M 260 20 L 320 20 L 300 56 L 256 50 Z",
    // South America
    "M 200 164 L 210 160 L 290 190 L 264 250 L 224 290 L 210 250 L 200 180 Z"
  ];

  for (const p of paths) {
    const path2d = new Path2D(p);
    ctx.fill(path2d);
  }

  const imgData = ctx.getImageData(0, 0, width, height);
  const mask = new Uint8Array(width * height);
  for (let i = 0; i < mask.length; i++) {
    mask[i] = imgData.data[i * 4] > 128 ? 1 : 0;
  }

  return { mask, width, height };
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  if (typeof (ctx as any).roundRect === 'function') {
    (ctx as any).roundRect(x, y, width, height, radius);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewMode, setViewMode] = useState<'both' | 'land' | 'ocean'>('both');
  const [isGrabbed, setIsGrabbed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctn = containerRef.current;
    if (!canvas || !ctn) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = ctn.offsetWidth || 400);
    let height = (canvas.height = ctn.offsetHeight || 400);

    const handleResize = () => {
      if (!canvas || !ctn) return;
      width = canvas.width = ctn.offsetWidth || 400;
      height = canvas.height = ctn.offsetHeight || 400;
      globeRadius = Math.min(width, height) * 0.4;
    };

    window.addEventListener('resize', handleResize);

    // Initial scale radius
    let globeRadius = Math.min(width, height) * 0.4;

    let currentMatrix = identityMatrix();
    
    // Initial rotation to face Bangalore directly (Lat: 12.9716, Lng: 77.5946)
    const initRotY = axisAngleMatrix(0, 1, 0, -1.35);
    const initRotX = axisAngleMatrix(1, 0, 0, 0.22);
    currentMatrix = multiplyMatrix(initRotX, initRotY);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velX = 0;
    let velY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsGrabbed(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
      velX = 0;
      velY = 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        velX = deltaX;
        velY = deltaY;

        // Convert mouse drag to 3D trackball rotation around perpendicular screen axis
        const axisX = -deltaY;
        const axisY = deltaX;
        const angle = Math.hypot(deltaX, deltaY) * 0.005;

        if (angle > 0) {
          const deltaMatrix = axisAngleMatrix(axisX, axisY, 0, angle);
          currentMatrix = multiplyMatrix(deltaMatrix, currentMatrix);
        }

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsGrabbed(false);
    };

    // Zoom on mouse wheel scroll
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.05 : 0.95;
      const minRadius = Math.min(width, height) * 0.15;
      const maxRadius = Math.min(width, height) * 0.85;
      globeRadius = Math.max(minRadius, Math.min(maxRadius, globeRadius * zoomFactor));
    };

    // Touch events
    let touchStartDist = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsGrabbed(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        velX = 0;
        velY = 0;
      } else if (e.touches.length === 2) {
        isDragging = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        velX = deltaX;
        velY = deltaY;

        const axisX = -deltaY;
        const axisY = deltaX;
        const angle = Math.hypot(deltaX, deltaY) * 0.005;

        if (angle > 0) {
          const deltaMatrix = axisAngleMatrix(axisX, axisY, 0, angle);
          currentMatrix = multiplyMatrix(deltaMatrix, currentMatrix);
        }

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = currentDist / touchStartDist;
        touchStartDist = currentDist;
        const minRadius = Math.min(width, height) * 0.15;
        const maxRadius = Math.min(width, height) * 0.85;
        globeRadius = Math.max(minRadius, Math.min(maxRadius, globeRadius * factor));
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsGrabbed(false);
      touchStartDist = 0;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    canvas.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    const { mask, width: maskW, height: maskH } = createLandMask();

    const isPointOnLand = (lat: number, lng: number): boolean => {
      const px = Math.min(maskW - 1, Math.max(0, Math.floor(((lng + 180) / 360) * maskW)));
      const py = Math.min(maskH - 1, Math.max(0, Math.floor(((90 - lat) / 180) * maskH)));
      return mask[py * maskW + px] === 1;
    };

    const landPoints: { lat: number; lng: number }[] = [];
    const oceanPoints: { lat: number; lng: number }[] = [];
    const numCandidates = 12000;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numCandidates; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numCandidates);
      const lat = 90 - (phi * 180) / Math.PI;
      const lng = (((theta * 180) / Math.PI) % 360) - 180;

      if (lat < -60) continue; // Exclude Antarctica

      if (isPointOnLand(lat, lng)) {
        landPoints.push({ lat, lng });
      } else {
        oceanPoints.push({ lat, lng });
      }
    }

    let orbitPhase = 0;

    function getRotatedPosition(
      lat: number,
      lng: number,
      rad: number,
      mat: Matrix3,
      w: number,
      h: number
    ) {
      const v = latLngToVector3(lat, lng, rad);
      const rotV = rotateVector(v, mat);

      const perspective = 800;
      const scale = perspective / (perspective + rotV.z);

      return {
        screenX: w / 2 + rotV.x * scale,
        screenY: h / 2 + rotV.y * scale,
        visible: rotV.z < 0,
        scale,
        depth: rotV.z,
      };
    }

    const render = () => {
      // Clear transparently to show the WebGL Aurora background
      ctx.clearRect(0, 0, width, height);

      // Inertia & slow auto-rotation
      if (!isDragging) {
        if (Math.abs(velX) > 0.01 || Math.abs(velY) > 0.01) {
          const axisX = -velY;
          const axisY = velX;
          const angle = Math.hypot(velX, velY) * 0.005;
          const deltaMatrix = axisAngleMatrix(axisX, axisY, 0, angle);
          currentMatrix = multiplyMatrix(deltaMatrix, currentMatrix);
          velX *= 0.95;
          velY *= 0.95;
        } else {
          // Slow continuous rotation around Y axis
          const autoMatrix = axisAngleMatrix(0, 1, 0, 0.0012);
          currentMatrix = multiplyMatrix(autoMatrix, currentMatrix);
        }
      }

      orbitPhase += 0.012;

      const centerX = width / 2;
      const centerY = height / 2;

      // Outer Contour Ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Longitude Wireframe Meridians
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 0.75;

      for (let lng = -180; lng < 180; lng += 20) {
        ctx.beginPath();
        let first = true;
        for (let lat = -85; lat <= 85; lat += 4) {
          const p = getRotatedPosition(lat, lng, globeRadius, currentMatrix, width, height);
          if (p.visible) {
            if (first) ctx.moveTo(p.screenX, p.screenY);
            else ctx.lineTo(p.screenX, p.screenY);
            first = false;
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // Render Ocean Points (Vibrant Ocean Blue)
      if (viewMode === 'both' || viewMode === 'ocean') {
        for (let i = 0; i < oceanPoints.length; i++) {
          const pt = oceanPoints[i];
          const pos = getRotatedPosition(pt.lat, pt.lng, globeRadius, currentMatrix, width, height);

          if (pos.visible) {
            const alpha = Math.max(0.15, (1 - pos.depth / globeRadius) * 0.85);
            ctx.fillStyle = '#2563eb';
            ctx.globalAlpha = alpha;
            const size = 1.2 * pos.scale;
            ctx.beginPath();
            ctx.arc(pos.screenX, pos.screenY, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Render Land Points (Emerald Green)
      if (viewMode === 'both' || viewMode === 'land') {
        for (let i = 0; i < landPoints.length; i++) {
          const pt = landPoints[i];
          const pos = getRotatedPosition(pt.lat, pt.lng, globeRadius, currentMatrix, width, height);

          if (pos.visible) {
            const alpha = Math.max(0.25, (1 - pos.depth / globeRadius) * 0.95);
            ctx.fillStyle = '#22c55e';
            ctx.globalAlpha = alpha;
            const size = 1.5 * pos.scale;
            ctx.beginPath();
            ctx.arc(pos.screenX, pos.screenY, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1.0;

      const blrPos = getRotatedPosition(
        BANGALORE_NODE.lat,
        BANGALORE_NODE.lng,
        globeRadius,
        currentMatrix,
        width,
        height
      );

      if (blrPos.visible) {
        // Orbit Ring around Bangalore
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        let first = true;
        for (let t = 0; t <= Math.PI * 2; t += 0.05) {
          const oLat = BANGALORE_NODE.lat + Math.sin(t) * 42;
          const oLng = BANGALORE_NODE.lng + Math.cos(t) * 120;
          const op = getRotatedPosition(oLat, oLng, globeRadius, currentMatrix, width, height);
          if (op.visible) {
            if (first) ctx.moveTo(op.screenX, op.screenY);
            else ctx.lineTo(op.screenX, op.screenY);
            first = false;
          } else {
            first = true;
          }
        }
        ctx.stroke();

        // White Orbit Tracer Point
        const activeT = orbitPhase % (Math.PI * 2);
        const pLat = BANGALORE_NODE.lat + Math.sin(activeT) * 42;
        const pLng = BANGALORE_NODE.lng + Math.cos(activeT) * 120;
        const activeOp = getRotatedPosition(pLat, pLng, globeRadius, currentMatrix, width, height);
        if (activeOp.visible) {
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(activeOp.screenX, activeOp.screenY, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        const pinX = blrPos.screenX;
        const pinY = blrPos.screenY;

        // White Square Pin
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(pinX - 2.5, pinY - 2.5, 5, 5);

        // White Leader Line
        const lineLen = 34;
        const labelX = pinX + 14;
        const labelY = pinY - lineLen;

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(pinX, pinY - 2.5);
        ctx.lineTo(pinX, labelY);
        ctx.lineTo(labelX, labelY);
        ctx.stroke();

        // White Badge Label "Bangalore"
        const badgeText = 'Bangalore';
        ctx.font = 'bold 12px Inter, system-ui, sans-serif';
        const textMetrics = ctx.measureText(badgeText);
        const paddingX = 10;
        const badgeWidth = textMetrics.width + paddingX * 2;
        const badgeHeight = 22;

        const bx = labelX;
        const by = labelY - badgeHeight / 2;

        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        drawRoundedRect(ctx, bx, by, badgeWidth, badgeHeight, 5);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#0f172a';
        ctx.fillText(badgeText, bx + paddingX, by + 15);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [viewMode]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        cursor: isGrabbed ? 'grabbing' : 'grab',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Floating View Mode Selector */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px',
          backgroundColor: 'rgba(23, 23, 23, 0.85)',
          border: '1px solid rgba(63, 63, 70, 0.4)',
          borderRadius: '9999px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setViewMode('both')}
          style={{
            padding: '4px 10px',
            borderRadius: '9999px',
            fontSize: '10px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: viewMode === 'both' ? 'rgba(63, 63, 70, 0.8)' : 'transparent',
            color: viewMode === 'both' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
            fontWeight: 500
          }}
        >
          All
        </button>
        <button
          onClick={() => setViewMode('land')}
          style={{
            padding: '4px 10px',
            borderRadius: '9999px',
            fontSize: '10px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: viewMode === 'land' ? 'rgba(6, 78, 59, 0.8)' : 'transparent',
            color: viewMode === 'land' ? '#34d399' : 'rgba(255, 255, 255, 0.5)',
            fontWeight: 500
          }}
        >
          Land
        </button>
        <button
          onClick={() => setViewMode('ocean')}
          style={{
            padding: '4px 10px',
            borderRadius: '9999px',
            fontSize: '10px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: viewMode === 'ocean' ? 'rgba(30, 58, 138, 0.8)' : 'transparent',
            color: viewMode === 'ocean' ? '#60a5fa' : 'rgba(255, 255, 255, 0.5)',
            fontWeight: 500
          }}
        >
          Ocean
        </button>
      </div>
    </div>
  );
}
