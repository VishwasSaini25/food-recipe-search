import React,{useState} from 'react';
import Home from "./Pages/Home";
import Cuisine from "./Pages/Cuisine";
import {BrowserRouter as Router,Route, Routes,useLocation } from "react-router-dom";
import Searched from "./Pages/Searched";
import Recipe from "./Pages/Recipe";
import { AnimatePresence } from 'framer-motion';
import Login from "./Pages/Login";
import Register from "./Pages//Register";
function App() {
  const location = useLocation();
  const [user,setLoginUser] = useState({});

  return (
    <AnimatePresence mode="wait" initial={false}>
  <Routes Location={location} key={location.pathname}>
    <Route exact path="/" element={<Register /> } />
    <Route path="/login" element ={<Login func = {setLoginUser} />} />
    <Route path="/home" element=
    {  user && user._id ? <Home user ={user} /> : <Login func = {setLoginUser}/> }  />
    <Route path="//cuisine/:type" element=
    {  user && user._id ? <Cuisine user={user} /> : <Login func = {setLoginUser}/> } />
    <Route path="/searched/:search" element={
      <Searched user={user} />} />
    <Route path="/recipe/:name" element={
      <Recipe user={user} /> } />
  </Routes>
    </AnimatePresence>
  );
}

export default App;