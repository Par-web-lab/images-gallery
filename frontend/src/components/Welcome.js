import React from "react";
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
  <Container className="bg-light p-5 rounded">
  <h1>Images Gallery</h1>
  <p>
    This is a simple application that retrieves photos using Unsplash API. In order to start enter any search term in the input field.
  </p>
  <p>
    <Button variant="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
  </p>
  </Container>

);

export default Welcome;