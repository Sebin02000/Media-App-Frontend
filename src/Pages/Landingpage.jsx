/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <Container>
      <Row className="p-3">
        <Col className="p-3">
          <h1 className="my-3">Media Player</h1>
          <p className="my-2" style={{ textAlign: "justify" }}>
            A media player is a software application or hardware device that can
            play multimedia files like audio, video, or both. Media players
            often support a wide range of file formats and allow users to
            control playback functions, such as play, pause, stop, fast-forward,
            rewind, and adjust volume.
          </p>
          <p style={{ textAlign: "justify" }}>
            Our Media Player Application is designed to provide users with an
            exceptional audio and video experience.
          </p>
          <div className="my-3">
            <Link to={'/home'}>
            <Button>Get Started</Button>
            </Link>
          </div>
        </Col>
        <Col className="p-3">
          <img
            className="rounded"
            style={{ width: "400px", height: "400px" }}
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWFkaXcwMHE5ZGg5NWQyaHlsMHBubXlkbmdhaWNyc2N3YXU3YnRxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vg9nxyynSvI4Sd8YCP/giphy.webp"
            alt=""
          />
        </Col>
      </Row>
      <Row className="p-3 mx-5">
        <h1 className="text-center my-5">Features</h1>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://i.gifer.com/1uUh.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card`s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://i.gifer.com/BHFO.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card`s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://i.gifer.com/fxVE.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card`s content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="m-5 p-5 border shadow rounded">
        <Col>
          <h1 className="text-center">Simple fast & powerful</h1>
          <p> <strong>Play everything : </strong>
            In today’s fast-paced world, people are constantly looking for new
            ways to stay entertained. and
            discover a variety of options that cater to different tastes and
            preferences.
          </p>
          <p> <strong>Play everything : </strong>
            In today’s fast-paced world, people are constantly looking for new
            ways to stay entertained. and
            discover a variety of options that cater to different tastes and
            preferences.
          </p>
          
        </Col>
        <Col className="pb-1">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jxCRlebiebw?si=MDk4Fa7qM2foYKwX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Landingpage;
