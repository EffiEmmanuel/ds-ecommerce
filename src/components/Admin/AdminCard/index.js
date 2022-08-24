import React from "react";
import './index.css'

function AdminCard({ title, subtitle, figure }) {
  return (
    <div className="admin-card card m-4" style={{ width: "18rem" }}>
      <h5 className="card-title semibold-text">{title}</h5>
      <small className="card-subtitle">{subtitle}</small>
      <div className="figure">{figure}</div>
    </div>
  );
}

export default AdminCard;
