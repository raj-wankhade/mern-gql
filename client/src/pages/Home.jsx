import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <div className="">
      <div className="px-4 py-3">
        <h3>MERN-GQL</h3>
      </div>
      <section className="mt-8 min-vh-md-100 carousal">
        <Container className="p-4 ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placehold.co/800x400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p className="text-white">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placehold.co/800x400/png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placehold.co/800x400/"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p className="text-white">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <section className="mt-8 min-vh-100 position-relative">
        <Container fluid className="py-4">
          <h3>What the learners feels about the our services </h3>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Carousal 1</Card.Header>
                    <Card.Body>
                      <Card.Title>ITEM - 1</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Header>Carousal 1</Card.Header>
                    <Card.Body>
                      <Card.Title>ITEM - 1</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Carousal 2</Card.Header>
                    <Card.Body>
                      <Card.Title>ITEM - 1</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Header>Carousal 2</Card.Header>
                    <Card.Body>
                      <Card.Title>ITEM - 2</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container fluid className="mt-4">
          <h3>Featured topics by category</h3>
          <div class="container overflow-hidden mt-4">
            <div class="row gy-5">
              <div class="col-6">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-8 min-vh-100 bg-secondary position-relative">
        <Container
          fluid
          className="position-absolute top-50 start-50 translate-middle justify-content-center"
        >
          <Row className="mt-4 py-4" sm={1} md={2}>
            <Col>
              <img
                className="d-block float-md-end "
                src="https://placehold.co/300x400"
                alt="First slide"
              />
            </Col>
            <Col>
              <p className="d-block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                itaque accusamus modi hic quia cumque et voluptatum, illum ad
                quas, quisquam iusto vero officia non quis in deserunt, tempore
                cum! Porro quaerat, eum mollitia vero, explicabo repellendus
                atque repudiandae culpa.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
