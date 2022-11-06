import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import FullPizza from './pages/FullPizza';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
