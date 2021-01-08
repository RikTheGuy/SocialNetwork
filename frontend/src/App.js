import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Header from './components/Header'

import QuestionScreen from './screens/QuestionScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={QuestionScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App;
