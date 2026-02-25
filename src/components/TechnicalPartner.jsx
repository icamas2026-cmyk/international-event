import React from "react";

export default function TechnicalPartner() {
    return (
        <div
            style={{
                background: "linear-gradient(90deg, #e8f0fe, #f0f4ff, #e8f0fe)",
                borderTop: "4px solid #1a237e",
                borderBottom: "4px solid #1a237e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "28px",
                padding: "18px 32px",
                flexWrap: "wrap",
            }}
        >
            <span
                style={{
                    fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
                    fontWeight: 800,
                    color: "#1a237e",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                }}
            >
                🤝 Technical Partner
            </span>

            <div style={{ width: "2px", height: "50px", background: "#1a237e", opacity: 0.25 }} />

            <img
                src="./images/Nesac.png"
                alt="NESAC – Technical Partner"
                style={{
                    height: "clamp(55px, 9vw, 80px)",
                    objectFit: "contain",
                }}
            />
        </div>
    );
}
