import React, { useEffect } from "react";
import Homepage from "./Homepage";
import Gamedetails from "./Gamedetails";
import Profilepage from "./Profilepage";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>

        <Route path="/Profilepage" element={<Profilepage />}></Route>
        <Route path="/Gamedetails/:id" element={<Gamedetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
