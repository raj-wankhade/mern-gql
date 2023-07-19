import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div className="container">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
}
