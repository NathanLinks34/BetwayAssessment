import React, { useState } from "react";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAcceptCookies = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",

            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // padding: "20px",
            zIndex: 9999,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#fff", marginBottom: "20px" }}>
              <span style={{ fontSize: "12px" }}>
                SPORTS NEW CUSTOMER OFFER
              </span>
              <br />
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                Get up to £10 in Free Bets
              </span>
            </p>
          </div>
          <button
            onClick={handleAcceptCookies}
            style={{
              backgroundColor: "#00a826",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer",
              width: "200px",
              height: "50px",
            }}
          >
            Join Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CookiePopup;
