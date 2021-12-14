import React from "react";
import Homepage from "./Homepage";
import Gamedetails from "./Gamedetails";
import Loginpage from "./Loginpage";
import Profilepage from "./Profilepage";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/Loginpage" element={<Loginpage />}></Route>
        <Route path="/Profilepage" element={<Profilepage />}></Route>
        <Route path="/Gamedetails/:id" element={<Gamedetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
