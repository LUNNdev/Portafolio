import React from 'react';
import './App.css';
import Home from './pages/home';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';


function App() {
  return (
    <>
    <HashRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />

    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
