import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Topics from './Topics'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/topics" element={<Topics count={count}/>}/>
    
      </Routes>
  );
}

export default App;