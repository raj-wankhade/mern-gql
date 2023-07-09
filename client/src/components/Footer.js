import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <div className="navbar fixed-bottom">
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
        @copyright {date.getFullYear()}
      </div>
    </div>
  );
}
