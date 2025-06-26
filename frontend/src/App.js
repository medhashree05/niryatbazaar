import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Create from './Pages/Create';
import Sign from './Pages/Sign';

const App = () => {
  return (
    <Router basename="/niryatbazaar/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
