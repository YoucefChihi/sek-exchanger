import React from "react";

export default ({ label, value }) => (
  <div className="info-item">
    <div className="label">{label}:</div>
    <div className="value">{value.toLocaleString()}</div>
  </div>
);
