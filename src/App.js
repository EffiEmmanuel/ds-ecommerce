import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Admin/Dashboard";
import AdminLogin from "./components/Admin/Login";
import EmailVerification from "./components/EmailVerification";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import Shop from "./components/Shop";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignup";
import CreateProduct from "./components/Admin/CreateProduct";
import ViewProducts from "./components/Admin/ViewProducts";
import Cart from "./components/Cart";
import ForgotPassword from "./components/ForgotPassword";
import CreateNewPassword from "./components/CreateNewPassword";
import UserProtectedRoutes from "./components/UserProtectedRoutes";
import AdminProtectedRoutes from "./components/Admin/AdminProtectedRoutes";
import Wishlist from "./components/Wishlist";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

export const AppContext = createContext(null);

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
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/createNewPassword" element={<CreateNewPassword />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:pid" element={<ProductDetails />} />

          {/* User Protected Routes */}
          <Route element={<UserProtectedRoutes />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          
          <Route element={<UserProtectedRoutes />}>
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>

          {/* ADMIN ROUTES */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route element={<AdminProtectedRoutes />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<AdminProtectedRoutes />}>
            <Route
              path="/admin/products/createNew"
              element={<CreateProduct />}
            />
          </Route>

          <Route element={<AdminProtectedRoutes />}>
            <Route
              path="/admin/products/viewProducts"
              element={<ViewProducts />}
            />
          </Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
