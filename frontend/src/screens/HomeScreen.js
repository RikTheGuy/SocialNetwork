import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const HomeScreen = () => {
    return (
      <Container>


        <Row>
          <Col>coulmn 1</Col>
          <Col xs={6}>column 2</Col>
          <Col>column 3</Col>
        </Row>

        </Container>
    )
}

export default HomeScreen