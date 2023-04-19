import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Apropos from './pages/Apropos/Apropos';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import resetCss from './assets/css/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<Error />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/card/:cardId" element={<Card />}/>
      <Route path="/a-propos" element={<Apropos />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
