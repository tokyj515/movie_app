import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

//라우트 컴포넌ㅌ
function App(){
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/movie-detail" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}

//component가 아니라 element로 써야함

export default App;