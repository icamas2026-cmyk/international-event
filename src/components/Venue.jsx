import React from "react";

export default function Venue() {
    return (
        <div
            style={{
                width: "100%",
                background: "linear-gradient(90deg,#1a237e,#1565c0,#0d47a1)",
                padding: "10px 0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Scrolling marquee text */}
            <div style={{ flex: 1, overflow: "hidden" }}>
                <div
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        animation: "venueMarquee 15s linear infinite",
                    }}
                >
                    {[0, 1].map((i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-block",
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: "clamp(0.78rem,2vw,1.05rem)",
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                padding: "0 80px",
                            }}
                        >
                            📍 VENUE : STATE BANQUET HALL,ITANAGAR &nbsp;&nbsp;•&nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {/* Static clickable button — always visible, always clickable */}
            <a
                href="https://share.google/9AisLBGSLfu9t7Ftn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    flexShrink: 0,
                    marginRight: "20px",
                    background: "#FFD600",
                    color: "#1a237e",
                    borderRadius: "6px",
                    padding: "5px 16px",
                    fontWeight: 800,
                    fontSize: "clamp(0.72rem,1.5vw,0.95rem)",
                    letterSpacing: "1.5px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    zIndex: 10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
            >
                Click Here →
            </a>

            <style>{`
        @keyframes venueMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
