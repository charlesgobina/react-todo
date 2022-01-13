import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import Header from './functionBased/components/Header';
import Home from './functionBased/components/Home';
import Contact from './functionBased/components/Contact';
import './functionBased/App.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoContainer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App