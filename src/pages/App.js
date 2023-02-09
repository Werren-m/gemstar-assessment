import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import HomePage from './HomePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
