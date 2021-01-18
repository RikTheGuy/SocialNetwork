import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Row} from 'react-bootstrap'

import { Container } from 'react-bootstrap'

import Header from './components/Header'

import QuestionScreen from './screens/QuestionScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <Row className="justify-content-md-center">Quora uses cookies to improve your experience.</Row>

      <main>
        <Container>
          <Route path="/" component={HomeScreen} />
          <Route path="/questions/:id" component={QuestionScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App;
