import React from 'react'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <header>
      <Header />
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" element={<Header />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </Router>
);

export default App;
