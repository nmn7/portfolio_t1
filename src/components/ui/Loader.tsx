import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const GREETINGS = ['Namaste', 'Hello', 'Bonjour', 'Hola', 'こんにちは'];

export default function Loader({ onComplete }: LoaderProps) {
  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Pulse animation trigger
    const pulseInterval = setInterval(() => {
      setPulse(p => !p);
    }, 400);

    // Sequence through greetings
    const greetingInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === GREETINGS.length - 1) {
          clearInterval(greetingInterval);
          // Wait briefly, then fade out
          setTimeout(() => {
            setIsFadingOut(true);
            // Wait for fade transition, then signal completion
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 320);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(greetingInterval);
    };
  }, [onComplete]);

  return (
    <div 
      className="loader-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0B0B0B',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <span 
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#F5F5F5',
            transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
            display: 'inline-block',
          }}
        >
          {GREETINGS[index]}
        </span>
        <div 
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#3B82F6',
            boxShadow: '0 0 15px #3B82F6',
            transform: pulse ? 'scale(1.3)' : 'scale(0.8)',
            transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
            opacity: pulse ? 1 : 0.6,
          }}
        />
      </div>
    </div>
  );
}
