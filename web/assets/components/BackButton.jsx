import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigation = useNavigate();
  return (
    <button className="back" type="button" onClick={() => navigation(-1)}>
      <span className="material-symbols-outlined">undo</span>
      Go Back
    </button>
  );
}

export default BackButton;
