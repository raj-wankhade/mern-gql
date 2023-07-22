import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="mb-4">
      <Container>
        <div class="container overflow-hidden mt-4">
          <div class="row gy-5">
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
          </div>
          <div class="row gy-5">
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
            <div class="col-3">
              <div class="p-3 ">Custom column padding</div>
            </div>
          </div>
        </div>
      </Container>
      <div className="navbar fixed-bottom">
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
          @copyright {date.getFullYear()}
        </div>
      </div>
    </footer>
  );
}
