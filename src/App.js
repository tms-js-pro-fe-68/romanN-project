import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import Home from './pagers/Home';
import NotFound from './pagers/NotFound';
import Cart from './pagers/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* Главная страница */}
      </div>
    </div>
  );
}

export default App;
