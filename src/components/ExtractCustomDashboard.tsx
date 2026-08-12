import { useState } from 'react';
import { Play, CheckCircle2, AlertCircle, RefreshCw, ArrowRight, Cpu, XCircle } from 'lucide-react';

export default function ExtractCustomDashboard() {
  const [selectedDoc, setSelectedDoc] = useState<'invoice' | 'contract' | 'scan'>('invoice');
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingStatus, setProcessingStatus] = useState<string>('Idle');
  const [needsReview, setNeedsReview] = useState<boolean>(false);
  const [reviewApproved, setReviewApproved] = useState<boolean>(false);

  const [editTotal, setEditTotal] = useState<string>('$1,612.50');
  const [editTax, setEditTax] = useState<string>('$112.50');
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const sampleDocs = {
    invoice: {
      name: 'Invoice_Acme_7701.pdf',
      type: 'Vendor Invoice',
      size: '124 KB',
      confidence: 99.6,
      data: {
        'Vendor Name': 'Acme Corp',
        'Invoice Date': '2026-08-01',
        'Invoice Number': 'INV-7701',
        'Subtotal': '$12,450.00',
        'Tax (8%)': '$996.00',
        'Total Amount': '$13,446.00'
      }
    },
    contract: {
      name: 'Service_Contract_AbbVie_Final.pdf',
      type: 'Service Contract',
      size: '2.4 MB',
      confidence: 99.2,
      data: {
        'Client Name': 'AbbVie Inc.',
        'Effective Date': '2026-06-01',
        'Contract Value': '$250,000.00',
        'Term': '12 Months',
        'Service Level SLA': '99.9% Uptime',
        'Authorized Signatory': 'Jane Doe'
      }
    },
    scan: {
      name: 'Scan_Vendor_Receipt_Smudge.png',
      type: 'Scanned Image Receipt',
      size: '412 KB',
      confidence: 74.5,
      data: {
        'Vendor Name': 'Logistics Solutions Inc.',
        'Invoice Date': '2026-07-28',
        'Invoice Number': 'REC-9082',
        'Subtotal': '$1,500.00',
        'Tax (Smudged)': '$112.50',
        'Total Amount': '$1,612.50'
      }
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setActiveStep(0);
    setNeedsReview(false);
    setReviewApproved(false);
    setProcessingStatus('Ingesting document...');

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < 5) {
        setActiveStep(currentStep);
        if (currentStep === 1) setProcessingStatus('Performing OCR & Layout Analysis...');
        if (currentStep === 2) setProcessingStatus('Normalizing & Structuring data...');
        if (currentStep === 3) setProcessingStatus('Applying Business validation rules...');
        if (currentStep === 4) setProcessingStatus('Constructing output payload...');
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        setProcessingStatus('Completed');
        if (selectedDoc === 'scan') {
          setNeedsReview(true);
        }
      }
    }, 400);
  };

  const handleApprove = () => {
    setReviewApproved(true);
    setNeedsReview(false);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', textAlign: 'left' }}>

      {/* CSS Keyframes for custom transitions */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin-custom {
          animation: spin 1.5s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { transform: scale(0.97); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />

      {/* Row 1: Problem & Key Design Decision */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>

        {/* Left: The Problem Card */}
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.02)',
          border: '1px solid rgba(239, 68, 68, 0.15)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <AlertCircle size={16} />
            The Problem
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Millions of financial documents were trapped in PDFs, scans and images. Manual extraction caused delays, high operational costs, errors and limited downstream analytics capability.
          </p>

          {/* Before Flowchart */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Before: Manual Process</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              overflowX: 'auto',
              padding: '10px 8px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)'
            }}>
              {[
                { name: 'Download', icon: '📥' },
                { name: 'Read', icon: '👁️' },
                { name: 'Key In', icon: '⌨️' },
                { name: 'Validate', icon: '📊' },
                { name: 'Clean', icon: '🧹' },
                { name: 'Upload', icon: '📤' }
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '6px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.1)',
                    minWidth: '58px'
                  }}>
                    <span style={{ fontSize: '1rem' }}>{step.icon}</span>
                    <span style={{ fontSize: '0.65rem', color: '#EF4444', fontWeight: 600, marginTop: '2px' }}>{step.name}</span>
                  </div>
                  {idx < 5 && <ArrowRight size={10} style={{ color: 'rgba(239, 68, 68, 0.4)' }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Why It Failed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Why It Failed</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                'High manual effort & human errors',
                'Long onboarding & implementation timelines',
                'Poor scalability across layouts',
                'Untapped analytics opportunities'
              ].map((fail, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                  <span style={{ color: '#EF4444' }}>●</span>
                  <span>{fail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Key Design Decision Card */}
        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.02)',
          border: '1px solid rgba(59, 130, 246, 0.15)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.9rem', color: '#3B82F6', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            <Cpu size={16} />
            Key Design Decision
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Template-based parsing breaks down with layout changes and requires constant manual rework. We chose layout-aware AI extraction to handle multiple layouts dynamically.
          </p>

          {/* Design Comparison Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>

            {/* Template-Based */}
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.01)',
              border: '1px solid rgba(239, 68, 68, 0.1)',
              borderRadius: '10px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase' }}>Template-Based Parsing</span>
              {[
                'Works only for fixed layouts',
                'Fragile with layout changes',
                'High manual maintenance',
                'Does not scale to new layouts'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  <XCircle size={10} style={{ color: '#EF4444', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* AI-Powered */}
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.01)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              borderRadius: '10px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10B981', textTransform: 'uppercase' }}>AI-Powered Extraction</span>
              {[
                'Handles multiple dynamic layouts',
                'Zero template creation needed',
                'Highly flexible & scalable',
                'Future-ready and adaptive'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={10} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
          <div style={{
            fontSize: '0.75rem',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '8px',
            textAlign: 'center',
            fontWeight: 500
          }}>
            "We selected Azure Form Recognizer + Python for a flexible, intelligent and reusable platform."
          </div>
        </div>

      </div>

      {/* Row 2: Ingestion & HITL Simulator */}
      <div className="glass-panel" style={{
        padding: '24px',
        background: 'rgba(9, 7, 20, 0.7)',
        border: '1px solid rgba(139, 92, 246, 0.15)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8B5CF6' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#A78BFA', letterSpacing: '0.05em' }}>EXTRACT.AI LIVE PROCESSING SANDBOX</span>
          </div>
          {/* Tabs for Selecting Doc */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { id: 'invoice', label: 'Acme Invoice', badge: 'High Conf.' },
              { id: 'contract', label: 'AbbVie Contract', badge: 'High Conf.' },
              { id: 'scan', label: 'Smudged Scan', badge: 'Low Conf.' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedDoc(tab.id as any);
                  setActiveStep(-1);
                  setNeedsReview(false);
                  setReviewApproved(false);
                  setProcessingStatus('Idle');
                }}
                disabled={isProcessing}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: selectedDoc === tab.id ? '1px solid #8B5CF6' : '1px solid rgba(255,255,255,0.05)',
                  backgroundColor: selectedDoc === tab.id ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255,255,255,0.02)',
                  color: selectedDoc === tab.id ? '#C084FC' : 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: selectedDoc === tab.id ? 700 : 500,
                  cursor: isProcessing ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{tab.label}</span>
                <span style={{
                  fontSize: '0.55rem',
                  padding: '1px 4px',
                  borderRadius: '4px',
                  backgroundColor: tab.id === 'scan' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  color: tab.id === 'scan' ? '#F59E0B' : '#10B981',
                  fontWeight: 700
                }}>{tab.badge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Doc Summary Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
          backgroundColor: 'rgba(255,255,255,0.01)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '16px',
          overflow: 'hidden'
        }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Document Name</div>
            <div style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              marginTop: '4px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }} title={sampleDocs[selectedDoc].name}>
              {sampleDocs[selectedDoc].name}
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>File Type / Size</div>
            <div style={{ 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              color: 'var(--text-secondary)', 
              marginTop: '4px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }} title={`${sampleDocs[selectedDoc].type} • ${sampleDocs[selectedDoc].size}`}>
              {sampleDocs[selectedDoc].type} • {sampleDocs[selectedDoc].size}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Base AI Confidence</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedDoc === 'scan' ? '#F59E0B' : '#10B981', marginTop: '4px' }}>
              {sampleDocs[selectedDoc].confidence}%
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <button
              onClick={handleProcess}
              disabled={isProcessing}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: isProcessing ? 'rgba(139, 92, 246, 0.2)' : '#8B5CF6',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s',
                outline: 'none'
              }}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={12} className="animate-spin-custom" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Play size={12} fill="#FFFFFF" />
                  <span>Run Extraction Pipeline</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Pipeline Visualization (Horizontal Steps) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            Pipeline State: <span style={{ color: '#A78BFA' }}>{processingStatus}</span>
          </span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid var(--border-color)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {[
              { num: 1, title: 'Ingest', desc: 'Secure Ingestion', color: '#3B82F6' },
              { num: 2, title: 'Understand', desc: 'Azure Form Rec AI', color: '#8B5CF6' },
              { num: 3, title: 'Transform', desc: 'Python parsing', color: '#10B981' },
              { num: 4, title: 'Validate', desc: 'Rules Engine', color: '#F59E0B' },
              { num: 5, title: 'Deliver', desc: 'Structured Outputs', color: '#06B6D4' }
            ].map((step, idx) => {
              const isActive = activeStep >= idx;
              const isCurrent = activeStep === idx;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: isCurrent
                    ? `${step.color}15`
                    : isActive
                      ? 'rgba(255,255,255,0.03)'
                      : 'transparent',
                  border: isCurrent
                    ? `1px solid ${step.color}`
                    : isActive
                      ? `1px solid rgba(255,255,255,0.1)`
                      : '1px solid rgba(255,255,255,0.02)',
                  transition: 'all 0.3s ease',
                  opacity: isActive || activeStep === -1 ? 1 : 0.4
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? step.color : 'rgba(255,255,255,0.1)',
                      color: isActive ? '#000000' : 'var(--text-secondary)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {step.num}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                      {step.title}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', lineHeight: 1.2 }}>{step.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Results Block */}
        {activeStep === 4 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            animation: 'fadeIn 0.5s ease'
          }}>
            {/* Extracted Data Table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Extracted Metadata Fields</span>
              <div style={{
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.01)'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                  <tbody>
                    {Object.entries(sampleDocs[selectedDoc].data).map(([key, val], idx) => {
                      const isSmudgedField = selectedDoc === 'scan' && (key.includes('Tax') || key.includes('Total'));
                      return (
                        <tr key={idx} style={{
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                          backgroundColor: isSmudgedField && needsReview ? 'rgba(245, 158, 11, 0.05)' : 'transparent'
                        }}>
                          <td style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--text-secondary)', width: '45%' }}>{key}</td>
                          <td style={{ padding: '8px 12px', color: 'var(--text-primary)', fontWeight: 700 }}>
                            {key.includes('Tax') && reviewApproved ? editTax : key.includes('Total') && reviewApproved ? editTotal : val as string}
                            {isSmudgedField && needsReview && (
                              <span style={{ marginLeft: '6px', color: '#F59E0B', fontSize: '0.6rem', fontWeight: 700, backgroundColor: 'rgba(245, 158, 11, 0.15)', padding: '1px 4px', borderRadius: '4px' }}>
                                LOW CONF
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ingestion Status & HITL Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>System Status & Ingestion Outcome</span>

              {/* High Confidence Success */}
              {selectedDoc !== 'scan' && (
                <div style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.04)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  height: '100%',
                  justifyContent: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10B981' }}>Automated Validation Passed</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Confidence: {sampleDocs[selectedDoc].confidence}% (Above 90% Threshold)</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                    The document was fully extracted, normalized via Python, validated against business rules (no duplicates, valid amounts), and pushed directly to ERP structured datasets.
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '4px', alignSelf: 'flex-start' }}>
                    STATUS: DELIVERED (JSON / CSV)
                  </span>
                </div>
              )}

              {/* Low Confidence Exception & Review UI */}
              {selectedDoc === 'scan' && needsReview && (
                <div style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(245, 158, 11, 0.04)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  height: '100%',
                  animation: 'scaleUp 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(245,158,11,0.1)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <AlertCircle size={14} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F59E0B' }}>Low Confidence Exception Flagged</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Confidence: {sampleDocs[selectedDoc].confidence}% (Requires Human Review)</div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid rgba(245, 158, 11, 0.15)'
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-primary)' }}>Human-in-the-Loop Validation Workspace</span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <label style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Tax (8%) Amount</label>
                        <input
                          type="text"
                          value={editTax}
                          onChange={(e) => setEditTax(e.target.value)}
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            color: '#FFFFFF',
                            fontSize: '0.75rem',
                            outline: 'none'
                          }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <label style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Total Amount</label>
                        <input
                          type="text"
                          value={editTotal}
                          onChange={(e) => setEditTotal(e.target.value)}
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            color: '#FFFFFF',
                            fontSize: '0.75rem',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleApprove}
                    style={{
                      padding: '8px',
                      backgroundColor: '#F59E0B',
                      border: 'none',
                      borderRadius: '6px',
                      color: '#000000',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      outline: 'none',
                      marginTop: 'auto'
                    }}
                  >
                    <CheckCircle2 size={12} />
                    <span>Confirm Smudged Values & Approve Ingestion</span>
                  </button>
                </div>
              )}

              {/* After Exception Resolved (Approved Status) */}
              {selectedDoc === 'scan' && reviewApproved && (
                <div style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(34, 197, 94, 0.04)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  height: '100%',
                  justifyContent: 'center',
                  animation: 'scaleUp 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#22C55E' }}>Approved & Pushed to Database</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Confidence: 100% (Human Verified Override)</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                    The exception was successfully resolved by manual entry. Structured data has been parsed with the verified values (Tax: {editTax}, Total: {editTotal}) and sent to ERP datasets.
                  </p>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#22C55E', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '4px 8px', borderRadius: '4px', alignSelf: 'flex-start' }}>
                    STATUS: APPROVED DATASET (JSON / CSV)
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Row 3: Solution Architecture (Full Width) */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%'
      }}>
        <h4 style={{ fontSize: '0.9rem', color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
          Solution Architecture Pipelines
        </h4>

        {/* 5-Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '16px',
          position: 'relative'
        }}>
          {[
            {
              num: '1',
              name: 'INGEST',
              desc: 'Documents ingested via secure storage and authenticated interfaces.',
              color: '#3B82F6',
              icon: '📥',
              items: ['PDF / Scan / Image', 'Invoice / Contract', 'REST API Ingestion']
            },
            {
              num: '2',
              name: 'UNDERSTAND',
              desc: 'Azure Form Recognizer uses AI to understand document layouts.',
              color: '#8B5CF6',
              icon: '🧠',
              items: ['OCR Text Extraction', 'Layout Detection', 'Table Recognition', 'Key-Value Extraction']
            },
            {
              num: '3',
              name: 'TRANSFORM',
              desc: 'Python engine parses responses and normalizes unstructured fields.',
              color: '#10B981',
              icon: '⚙️',
              items: ['Response Parsing', 'Key Normalization', 'Value Transformation', 'Structured Formats']
            },
            {
              num: '4',
              name: 'VALIDATE',
              desc: 'Business rules engine validates and enriches the data.',
              color: '#F59E0B',
              icon: '🛡️',
              items: ['Missing Fields Check', 'Duplicate Detection', 'Vendor Verification', 'Date & Amount Validation', 'Drug Brand ID Check']
            },
            {
              num: '5',
              name: 'DELIVER',
              desc: 'Structured data delivered to analytics and enterprise systems.',
              color: '#06B6D4',
              icon: '📤',
              items: ['JSON / CSV Output', 'Analytics Frameworks', 'ERP Sync APIs']
            }
          ].map((step, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(10, 11, 20, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderTop: `3px solid ${step.color}`,
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: step.color }}>{step.num}. {step.name}</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                {step.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '10px' }}>
                {step.items.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: step.color }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exceptions & Human Review Linkage */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          marginTop: '8px',
          position: 'relative',
          width: '100%'
        }}>
          {/* Connector Line from columns 2, 3, 4 down to the Review box */}
          <div style={{
            width: '45%',
            height: '16px',
            borderLeft: '1.5px dashed #F59E0B',
            borderRight: '1.5px dashed #F59E0B',
            borderBottom: '1.5px dashed #F59E0B',
            opacity: 0.4,
            marginBottom: '8px'
          }} />
          
          <div style={{
            maxWidth: '520px',
            width: '100%',
            backgroundColor: 'rgba(245, 158, 11, 0.03)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '12px',
            padding: '14px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(245, 158, 11, 0.05)'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              ⚠️ EXCEPTIONS &amp; HUMAN REVIEW
            </span>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
              Low confidence or rule-fail records routed for human verification and final approval. Pushed back into Deliver pipeline once validated.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3.5: System Operational Flow & Key Takeaways Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        
        {/* System Flow Diagram List */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h4 style={{ fontSize: '0.85rem', color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, fontWeight: 700 }}>
            System Operational Flow
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
            {[
              { step: '1', title: 'Secure Ingestion', desc: 'Invoices, contracts, and scans uploaded to S3/Blob storage via authenticated API gateway.' },
              { step: '2', title: 'AI Extraction', desc: 'Azure Form Recognizer performs layout-aware OCR, key-value recognition, and table boundary detection.' },
              { step: '3', title: 'Python Transformation', desc: 'Python core parser normalizes keys, converts dates/amounts, and structures variables.' },
              { step: '4', title: 'Business Validation', desc: 'Rules engine executes check pipelines (duplicates, compliance, matching totals, vendor lookup).' },
              { step: '5', title: 'Exception & Review Routing', desc: 'Low-confidence extracts (<90%) or rule exceptions are sent to the Human-in-the-Loop web console.' },
              { step: '6', title: 'Output Generation', desc: 'High-confidence or approved datasets generate standard structured JSON/CSV payloads.' },
              { step: '7', title: 'ERP Integration', desc: 'Outputs are synced into downstream ERP systems, databases, and analytics dashboards.' }
            ].map((f, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {f.step}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{f.title}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '1px', lineHeight: 1.3 }}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Key Takeaway Quote & 3D Layer Graphic */}
        <div style={{
          padding: '24px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div style={{ width: '100%' }}>
            <h4 style={{ fontSize: '0.85rem', color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px 0', fontWeight: 700 }}>
              Key Takeaway &amp; Impact
            </h4>
            <blockquote style={{ margin: 0, paddingLeft: '16px', borderLeft: '3px solid #8B5CF6', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 500 }}>
              "Extract.AI transformed document processing from a manual, repetitive task into a reusable intelligent capability — unlocking speed, accuracy and measurable business value ($6M+ operational savings) at enterprise scale."
            </blockquote>
          </div>

          {/* 3D Layers Graphic */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%',
            height: '140px',
            position: 'relative',
            perspective: '600px'
          }}>
            {/* Layer 1 (Bottom): Input Document */}
            <div style={{
              position: 'absolute',
              width: '140px',
              height: '80px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1.5px solid #3B82F6',
              borderRadius: '6px',
              transform: 'rotateX(55deg) rotateZ(-30deg) translateZ(-20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              color: '#3B82F6',
              fontWeight: 800,
              boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
            }}>
              📥 UNSTRUCTURED DOCS
            </div>

            {/* Layer 2 (Middle): Ingestion Process */}
            <div style={{
              position: 'absolute',
              width: '140px',
              height: '80px',
              backgroundColor: 'rgba(139, 92, 246, 0.15)',
              border: '1.5px solid #8B5CF6',
              borderRadius: '6px',
              transform: 'rotateX(55deg) rotateZ(-30deg) translateZ(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              color: '#A78BFA',
              fontWeight: 800,
              boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
            }}>
              🧠 AI EXTRACT &amp; VALIDATE
            </div>

            {/* Layer 3 (Top): Output Data */}
            <div style={{
              position: 'absolute',
              width: '140px',
              height: '80px',
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              border: '1.5px solid #10B981',
              borderRadius: '6px',
              transform: 'rotateX(55deg) rotateZ(-30deg) translateZ(40px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              color: '#10B981',
              fontWeight: 800,
              boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
            }}>
              📊 STRUCTURED INTEL
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#10B981',
          color: '#000000',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          fontWeight: 700,
          fontSize: '0.85rem',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'slideUp 0.3s ease'
        }}>
          <CheckCircle2 size={16} />
          <span>Exception Approved and structured payload pushed to database!</span>
        </div>
      )}
    </div>
  );
}
