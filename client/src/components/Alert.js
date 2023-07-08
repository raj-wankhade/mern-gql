import React from "react";

export default function Alert({ type, show }) {
  return (
    show && (
      <div>
        <div className={`alert alert-${type}`} role="alert">
          {type} !
        </div>
      </div>
    )
  );
}
