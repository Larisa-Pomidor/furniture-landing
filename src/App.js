import React from 'react'
import Header from './components/Header.jsx'
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
        <Route path="/portfolio" element={<Header />} />
        <Route path="/" element={<Header />} />
        <Route path="/#about" element={<Header />} />
      </Routes>
    </main>
    <footer>

    </footer>
  </Router>
);

export default App;
