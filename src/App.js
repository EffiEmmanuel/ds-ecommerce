import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmailVerification from "./components/EmailVerification";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import Shop from "./components/Shop";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignup";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/email/verify" element={<EmailVerification />} />
          <Route path="/password/reset" element={<Homepage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:pid" element={<Homepage />} />
          <Route path="/cart" element={<Homepage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
