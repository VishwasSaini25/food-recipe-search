import React,{useState,useEffect} from 'react';
import Home from "./Pages/Home";
import Cuisine from "./Pages/Cuisine";
import {Route, Routes,useNavigate } from "react-router-dom";
import Searched from "./Pages/Searched";
import Recipe from "./Pages/Recipe";
import { AnimatePresence } from 'framer-motion';
import Login from "./Pages/Login";
import Register from "./Pages//Register";
function App() {
  const history = useNavigate();

  // check cookie available or not
  useEffect(() => {
    if (document.cookie) {
      history("/home");
    } else {
      history("/login");
    } 
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
  <Routes>
    <Route exact path="/" element={<Register /> } />
    <Route exact path="/register" element={<Register /> } />
    <Route path="/login" element ={<Login />} />
    <Route path="/home" element=
    {<Home />}  />
    <Route path="//cuisine/:type" element=
    {<Cuisine />} />
    <Route path="/searched/:search" element={
      <Searched/>} />
    <Route path="/recipe/:name" element={
      <Recipe/> } />
  </Routes>
    </AnimatePresence>
  );
}

export default App;