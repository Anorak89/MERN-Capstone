import React, { useState } from "react";

const Section = ({ componentTitle, children }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="section">
      <div className="section-title">
        <strong>{showDetails ? null : componentTitle}</strong>
      </div>
      {showDetails ? (
        <>
          <div className="section-content">{children}</div>
          <button onClick={toggleDetails} className="section-button-hide">
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </>
      ) : (
        <button onClick={toggleDetails} className="section-button">
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      )}
    </div>
  );
};

export default Section;
