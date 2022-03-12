import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import {
  Button,
  Row,
  Col,
  Form,
  Container,
  Carousel,
  Card,
  ListGroup,
} from "react-bootstrap"
import GoogleMap from "../components/GoogleMap"

import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("meqnzjgn")
  if (state.succeeded) {
    return <p>Thank you! We have received your inquiry.</p>
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control id="name" name="name" placeholder="Enter name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control as="textarea" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <h1>Welcome to Hometown Plants!</h1>
      <p>
        Plant nursery featuring tropicals, succulents, shrubs, perennials,
        pottery, and gifts.
      </p>
      <Carousel>
        <Carousel.Item>
          <StaticImage
            src="../images/1.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/2.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/3.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/4.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/5.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/6.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/7.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/8.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/9.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/10.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/11.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/12.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/13.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/14.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/15.jpeg"
            width={1600}
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner"
            style={{ marginBottom: `1.45rem` }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>

    <Container>
      <Row>
        <Col md={6} style={{ height: 500 }}>
          <GoogleMap />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header as={"h4"}>Contact Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faLocationPin} />
                <Link to="https://www.google.com/maps/dir//22424+US-31+Jemison,+AL+35085/@32.9296426,-86.7288708,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x888ece16d26ce0eb:0x88938af3372f8695!2m2!1d-86.7288708!2d32.9296426">
                  {" "}
                  22424 US Highway 31, Thorsby, AL 35171
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <Link to="tel:2054468889">(205) 446-8889</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <Link to="mailto:hometownplantsnursery@gmail.com">
                  hometownplantsnursery@gmail.com
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br />
          <Card>
            <Card.Header as={"h4"}>Hours of Operation</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Monday - Friday: 8am - 5pm</ListGroup.Item>
              <ListGroup.Item>Saturday - Sunday: 9am - 4pm</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container>
      <h2>Contact Form</h2>
      <ContactForm />
    </Container>
    <br />
  </Layout>
)

export default IndexPage
