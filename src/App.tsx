// @ts-nocheck
import { useState } from 'react';

const cardData = {
  context: {
    title: 'Context',
    subtitle: 'Where it happens',
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
    bgCard: '#eff6ff',
    borderColor: '#93c5fd',
    textColor: '#1e40af',
    tagBg: '#dbeafe',
    tagText: '#1d4ed8',
    cards: [
      {
        title: 'Office Collaboration',
        desc: 'A workplace where multiple people coordinate on shared tasks and projects',
      },
      {
        title: 'Mobile Commute',
        desc: 'User is on transit, engaging with a device in brief, fragmented sessions',
      },
      {
        title: 'Medical Clinic',
        desc: 'Doctor-patient interactions and health record management in a clinical setting',
      },
      {
        title: 'Retail Shopping',
        desc: 'In-store or online product discovery, decision-making, and purchase flow',
      },
      {
        title: 'Video Conference',
        desc: 'Remote participants collaborating in real time via a digital meeting space',
      },
      {
        title: 'Home & Daily Life',
        desc: 'User handling personal errands, chores, and routines from home',
      },
      {
        title: 'Creative Studio',
        desc: 'Designers or content creators working in a production environment',
      },
      {
        title: 'Classroom / Education',
        desc: 'Students and teachers interacting within a structured learning context',
      },
      {
        title: 'Driving / In-Vehicle',
        desc: 'User operating a vehicle — attention is limited and hands may be occupied',
      },
      {
        title: 'Public Service Counter',
        desc: 'Citizens accessing government or institutional services in person or online',
      },
      {
        title: 'Outdoor / Field Work',
        desc: 'Mobile scenarios in natural environments or city streets',
      },
      {
        title: 'Entertainment & Leisure',
        desc: 'Gaming, streaming, browsing, or social interaction during downtime',
      },
    ],
  },
  demand: {
    title: 'Demand',
    subtitle: 'What the user needs',
    icon: '💡',
    gradient: 'linear-gradient(135deg, #059669, #10b981)',
    bgCard: '#f0fdf4',
    borderColor: '#86efac',
    textColor: '#166534',
    tagBg: '#dcfce7',
    tagText: '#15803d',
    cards: [
      {
        title: 'Fast Information Retrieval',
        desc: 'Find the right answer or data point in the shortest time possible',
      },
      {
        title: 'Complex Form Completion',
        desc: 'Guide users through filling out tedious, multi-field forms accurately',
      },
      {
        title: 'Cross-App Task Coordination',
        desc: 'Orchestrate workflows that span multiple tools and platforms seamlessly',
      },
      {
        title: 'Real-Time Decision Support',
        desc: 'Surface data-driven recommendations at the exact moment of a decision',
      },
      {
        title: 'Personalized Recommendations',
        desc: 'Proactively push content or options that match individual preferences',
      },
      {
        title: 'Automation of Repetitive Tasks',
        desc: "Detect and handle routine, repetitive actions on the user's behalf",
      },
      {
        title: 'Context-Aware Reminders',
        desc: 'Deliver the right nudge at the right time and place',
      },
      {
        title: 'Collaboration Coordination',
        desc: 'Reduce friction in multi-party communication and information alignment',
      },
      {
        title: 'Data Interpretation & Viz',
        desc: 'Transform raw or complex data into clear, actionable insights',
      },
      {
        title: 'Accessibility Assistance',
        desc: 'Provide tailored interaction support for users with specific needs',
      },
      {
        title: 'Creative Inspiration',
        desc: 'Break mental blocks and supply references, ideas, or starting points',
      },
      {
        title: 'Knowledge Acquisition',
        desc: 'Help users efficiently learn, internalize, and retain new information',
      },
    ],
  },
  agentType: {
    title: 'Agent Type',
    subtitle: 'How it operates',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
    bgCard: '#faf5ff',
    borderColor: '#c4b5fd',
    textColor: '#5b21b6',
    tagBg: '#ede9fe',
    tagText: '#6d28d9',
    cards: [
      {
        title: 'Conversational Assistant',
        desc: 'Understands and executes user intent through natural language dialogue',
      },
      {
        title: 'Visual Navigation Agent',
        desc: "Reads the screen and directly manipulates UI elements on the user's behalf",
      },
      {
        title: 'Proactive Suggestion Agent',
        desc: 'Anticipates what the user needs next without being explicitly asked',
      },
      {
        title: 'Form-Filling Agent',
        desc: 'Extracts relevant info and auto-completes forms on behalf of the user',
      },
      {
        title: 'Cross-Platform Coordinator',
        desc: 'Moves data and triggers actions across different apps and systems',
      },
      {
        title: 'Context-Aware Agent',
        desc: "Senses the user's current state and adapts interaction strategy accordingly",
      },
      {
        title: 'Monitoring & Alert Agent',
        desc: 'Watches designated metrics and proactively alerts on anomalies',
      },
      {
        title: 'Learning & Tutoring Agent',
        desc: "Adapts its teaching approach based on the learner's progress and gaps",
      },
      {
        title: 'Creative Collaborator Agent',
        desc: 'Joins the creation process by providing drafts, variations, and iteration',
      },
      {
        title: 'Data Analysis Agent',
        desc: 'Processes datasets automatically and produces reports with key insights',
      },
      {
        title: 'Workflow Orchestration Agent',
        desc: 'Chains multiple sub-tasks into a complete end-to-end automated pipeline',
      },
      {
        title: 'Memory & Context Agent',
        desc: 'Remembers preferences and history across sessions for continuity',
      },
    ],
  },
  modality: {
    title: 'Modality',
    subtitle: 'How the user interacts',
    icon: '✋',
    gradient: 'linear-gradient(135deg, #c2410c, #ea580c)',
    bgCard: '#fff7ed',
    borderColor: '#fdba74',
    textColor: '#9a3412',
    tagBg: '#ffedd5',
    tagText: '#c2410c',
    cards: [
      {
        title: 'Voice Interaction',
        desc: 'Spoken commands and conversational dialogue drive agent behavior',
      },
      {
        title: 'Gesture Control',
        desc: 'Hand or body movements manipulate digital elements in space',
      },
      {
        title: 'Eye Tracking',
        desc: 'Gaze direction reveals user intent and attentional focus',
      },
      {
        title: 'Touch / Touchscreen',
        desc: 'Direct manipulation via tapping, swiping, and pinching',
      },
      {
        title: 'AR / MR Overlay',
        desc: 'Digital information layered onto the physical world in real time',
      },
      {
        title: 'Implicit Sensing',
        desc: 'No explicit input needed — behavioral patterns trigger the agent automatically',
      },
      {
        title: 'Multimodal Fusion',
        desc: 'Combines voice, touch, vision, and other channels simultaneously',
      },
      {
        title: 'Spatial Computing',
        desc: 'Immersive 3D interaction in a volumetric or mixed-reality environment',
      },
      {
        title: 'Keyboard & Mouse Enhanced',
        desc: 'Traditional input augmented with smart prediction and AI completion',
      },
      {
        title: 'Brain–Computer Interface',
        desc: 'Neural signals directly convey user intent (emerging / speculative)',
      },
      {
        title: 'Biometric Sensing',
        desc: 'Heart rate, facial expression, or other physiological signals inform the agent',
      },
      {
        title: 'Environmental Sensors',
        desc: 'Location, temperature, or ambient physical data trigger contextual responses',
      },
    ],
  },
};

const CATEGORIES = ['context', 'demand', 'agentType', 'modality'];

const cardBackStyle = {
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#1e293b',
  border: '2px solid #334155',
};

export default function UIAgentBrainstormer() {
  const [drawnCards, setDrawnCards] = useState({
    context: null,
    demand: null,
    agentType: null,
    modality: null,
  });
  const [flipped, setFlipped] = useState({
    context: false,
    demand: false,
    agentType: false,
    modality: false,
  });
  const [isDrawing, setIsDrawing] = useState(false);
  const [brainstormText, setBrainstormText] = useState('');
  const [savedIdeas, setSavedIdeas] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  const pickRandom = (category) => {
    const cards = cardData[category].cards;
    return cards[Math.floor(Math.random() * cards.length)];
  };

  const drawAll = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setFlipped({
      context: false,
      demand: false,
      agentType: false,
      modality: false,
    });

    setTimeout(() => {
      const newCards = {};
      CATEGORIES.forEach((k) => (newCards[k] = pickRandom(k)));
      setDrawnCards(newCards);
      setTimeout(() => {
        setFlipped({
          context: true,
          demand: true,
          agentType: true,
          modality: true,
        });
        setIsDrawing(false);
      }, 80);
    }, 350);
  };

  const redrawOne = (category) => {
    setFlipped((prev) => ({ ...prev, [category]: false }));
    setTimeout(() => {
      setDrawnCards((prev) => ({ ...prev, [category]: pickRandom(category) }));
      setTimeout(() => {
        setFlipped((prev) => ({ ...prev, [category]: true }));
      }, 150);
    }, 220);
  };

  const saveIdea = () => {
    if (!brainstormText.trim()) return;
    setSavedIdeas((prev) => [
      {
        id: Date.now(),
        text: brainstormText.trim(),
        snapshot: { ...drawnCards },
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
      ...prev,
    ]);
    setBrainstormText('');
  };

  const allFlipped = CATEGORIES.every((k) => flipped[k]);
  const hasCards = CATEGORIES.every((k) => drawnCards[k] !== null);

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(160deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        fontFamily: "'Inter', sans-serif",
        color: '#f1f5f9',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'rgba(15,23,42,0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(99,102,241,0.2)',
          padding: '20px 32px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 20,
                fontWeight: 700,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              🎴 UI Agent Workflow Brainstormer
            </h1>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '4px 0 0' }}>
              Draw four cards · Spark new workflow ideas · Workshop Edition
            </p>
          </div>
          {savedIdeas.length > 0 && (
            <button
              onClick={() => setShowSaved((v) => !v)}
              style={{
                background: showSaved
                  ? 'rgba(99,102,241,0.3)'
                  : 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.4)',
                color: '#a5b4fc',
                borderRadius: 10,
                padding: '8px 16px',
                fontSize: 13,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              📌 {savedIdeas.length} Saved{' '}
              {savedIdeas.length === 1 ? 'Idea' : 'Ideas'}
            </button>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
        {/* Draw Button */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <button
            onClick={drawAll}
            disabled={isDrawing}
            style={{
              background: isDrawing
                ? 'rgba(99,102,241,0.4)'
                : 'linear-gradient(135deg, #4f46e5, #7c3aed, #a855f7)',
              border: 'none',
              borderRadius: 16,
              padding: '16px 48px',
              fontSize: 18,
              fontWeight: 700,
              color: 'white',
              cursor: isDrawing ? 'not-allowed' : 'pointer',
              boxShadow: isDrawing ? 'none' : '0 0 40px rgba(139,92,246,0.45)',
              transition: 'all 0.2s',
              letterSpacing: '-0.01em',
            }}
          >
            {isDrawing
              ? '🔀  Shuffling...'
              : hasCards
              ? '🔀  Re-draw All'
              : '🎴  Draw Cards'}
          </button>
          {!hasCards && (
            <p style={{ color: '#64748b', fontSize: 13, marginTop: 12 }}>
              Click to randomly draw one card from each of the four dimensions
            </p>
          )}
        </div>

        {/* Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {CATEGORIES.map((key) => {
            const data = cardData[key];
            const card = drawnCards[key];
            const isFlipped = flipped[key];

            return (
              <div key={key}>
                {/* Category Header */}
                <div
                  style={{
                    background: 'rgba(30,41,59,0.8)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: 12,
                    padding: '10px 12px',
                    marginBottom: 10,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 2 }}>
                    {data.icon}
                  </div>
                  <div
                    style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0' }}
                  >
                    {data.title}
                  </div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>
                    {data.subtitle}
                  </div>
                </div>

                {/* 3D Card */}
                <div
                  style={{
                    perspective: '1000px',
                    height: 180,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
                      transform: isFlipped
                        ? 'rotateY(180deg)'
                        : 'rotateY(0deg)',
                    }}
                  >
                    {/* Back */}
                    <div style={cardBackStyle}>
                      <div style={{ fontSize: 36, opacity: 0.18 }}>
                        {data.icon}
                      </div>
                      <div
                        style={{ fontSize: 12, color: '#475569', marginTop: 8 }}
                      >
                        Not drawn yet
                      </div>
                    </div>

                    {/* Front */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderRadius: 16,
                        background: data.bgCard,
                        border: `2px solid ${data.borderColor}`,
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                      }}
                    >
                      {card && (
                        <>
                          <div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: data.textColor,
                                marginBottom: 8,
                                lineHeight: 1.3,
                              }}
                            >
                              {card.title}
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                color: '#64748b',
                                lineHeight: 1.6,
                              }}
                            >
                              {card.desc}
                            </div>
                          </div>
                          <button
                            onClick={() => redrawOne(key)}
                            style={{
                              background: 'transparent',
                              border: `1px solid ${data.borderColor}`,
                              borderRadius: 6,
                              padding: '4px 10px',
                              fontSize: 11,
                              color: data.textColor,
                              cursor: 'pointer',
                              alignSelf: 'flex-end',
                              opacity: 0.7,
                              fontWeight: 500,
                            }}
                          >
                            ↺ Redraw
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combination Prompt */}
        {hasCards && allFlipped && (
          <div
            style={{
              background: 'rgba(30,27,75,0.7)',
              border: '1px solid rgba(99,102,241,0.35)',
              borderRadius: 18,
              padding: '20px 24px',
              marginBottom: 20,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: '#6366f1',
                fontWeight: 700,
                marginBottom: 10,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              🔮 Your Combination Prompt
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                margin: 0,
                color: '#e2e8f0',
              }}
            >
              In a{' '}
              <span style={{ color: '#60a5fa', fontWeight: 700 }}>
                "{drawnCards.context?.title}"
              </span>{' '}
              setting, where the user needs{' '}
              <span style={{ color: '#4ade80', fontWeight: 700 }}>
                "{drawnCards.demand?.title}"
              </span>
              , a{' '}
              <span style={{ color: '#c084fc', fontWeight: 700 }}>
                "{drawnCards.agentType?.title}"
              </span>{' '}
              interacts with the user through{' '}
              <span style={{ color: '#fb923c', fontWeight: 700 }}>
                "{drawnCards.modality?.title}"
              </span>
              …
            </p>
            <div style={{ fontSize: 12, color: '#475569', marginTop: 10 }}>
              💬 What kind of UI Agent workflow does this combination unlock?
              How might it change the way users get things done?
            </div>
          </div>
        )}

        {/* Brainstorm Input */}
        {hasCards && allFlipped && (
          <div
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(51,65,85,0.8)',
              borderRadius: 18,
              padding: '20px 24px',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: '#94a3b8',
                fontWeight: 700,
                marginBottom: 12,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              ✏️ Brainstorm Notes
            </div>
            <textarea
              value={brainstormText}
              onChange={(e) => setBrainstormText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) saveIdea();
              }}
              placeholder="Describe a specific workflow scenario for this UI Agent…
→ How does the user trigger the agent?
→ What steps does the agent execute automatically?
→ What new interaction experience does this create?"
              style={{
                width: '100%',
                background: 'rgba(30,41,59,0.5)',
                border: '1px solid #334155',
                borderRadius: 12,
                padding: '14px 16px',
                color: '#f1f5f9',
                fontSize: 14,
                lineHeight: 1.7,
                resize: 'vertical',
                minHeight: 100,
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: "wrap", gap: "8px",
                marginTop: 12,
              }}
            >
              <span style={{ fontSize: 12, color: '#475569' }}>
                ⌘ / Ctrl + Enter to save quickly
              </span>
              <button
                onClick={saveIdea}
                disabled={!brainstormText.trim()}
                style={{
                  background: brainstormText.trim()
                    ? 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                    : 'rgba(51,65,85,0.5)',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 22px',
                  color: brainstormText.trim() ? 'white' : '#475569',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: brainstormText.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                }}
              >
                💾 Save This Idea
              </button>
            </div>
          </div>
        )}

        {/* Saved Ideas Panel */}
        {showSaved && savedIdeas.length > 0 && (
          <div
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(51,65,85,0.8)',
              borderRadius: 18,
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: '#94a3b8',
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              📌 Saved Ideas ({savedIdeas.length})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {savedIdeas.map((idea) => (
                <div
                  key={idea.id}
                  style={{
                    background: 'rgba(30,41,59,0.7)',
                    border: '1px solid #1e293b',
                    borderRadius: 12,
                    padding: '14px 16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: 6,
                      flexWrap: 'wrap',
                      marginBottom: 8,
                    }}
                  >
                    {CATEGORIES.map((k) => {
                      const d = cardData[k];
                      const c = idea.snapshot[k];
                      if (!c) return null;
                      return (
                        <span
                          key={k}
                          style={{
                            background: d.tagBg,
                            color: d.tagText,
                            fontSize: 11,
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: 6,
                          }}
                        >
                          {c.title}
                        </span>
                      );
                    })}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#cbd5e1',
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {idea.text}
                  </p>
                  <div style={{ fontSize: 11, color: '#475569', marginTop: 6 }}>
                    {idea.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 60,
            color: '#334155',
            fontSize: 12,
          }}
        >
          UI Agent Workflow Brainstormer · Workshop Edition ·{' '}
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
