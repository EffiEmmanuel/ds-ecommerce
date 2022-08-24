import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Admin/Dashboard";
import AdminLogin from "./components/Admin/Login";
import AdminNavbar from "./components/Admin/AdminNavbar";
import EmailVerification from "./components/EmailVerification";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import Shop from "./components/Shop";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignup";
import CreateProduct from "./components/Admin/CreateProduct";
import ViewProducts from "./components/Admin/ViewProducts";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* {window.location.href.indexOf("admin") &&
        !sessionStorage.getItem("token") ? (
          <AdminNavbar />
        ) : (
          <Navbar />
        )} */}
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

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products/createNew" element={<CreateProduct />} />
          <Route path="/admin/products/viewProducts" element={<ViewProducts />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
