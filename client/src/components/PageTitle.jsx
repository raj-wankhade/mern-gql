import React from "react";

export default function PageTitle(props) {
  const title = props.loading ? (
    <h4 className="text-danger">Loading...</h4>
  ) : (
    <div className="container text-dark">
      <div className="p-3">
        <div className="fs-2 ">{props.title}</div>
      </div>
    </div>
  );
  return title;
}
