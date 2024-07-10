import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Productdeatil from "./components/Productdeatil";
import NoMatchfound from "./components/NoMatchfound";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NoMatchfound/>}/>

          <Route path="/product" element={<Product/>}>
          <Route path="productdetail" element={<Productdeatil/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
