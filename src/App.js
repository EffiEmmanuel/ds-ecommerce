import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignup";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Homepage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/email/verify" element={<Homepage />} />
          <Route path="/password/reset" element={<Homepage />} />
          <Route path="/search" element={<Homepage />} />
          <Route path="/products/:pid" element={<Homepage />} />
          <Route path="/cart" element={<Homepage />} />
          <Route path="/profile" element={<Homepage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
