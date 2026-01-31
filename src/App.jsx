

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import CardGrid from "./components/BookCard";

function App() {
   const [category, setCategory] = React.useState("fiction"); 
  return (
    <BrowserRouter>
       <Navbar setCategory={setCategory}  />
          <CardGrid category={category} />
      <Routes>
       
        <Route path="/" element={<BookCard />} />

       
        <Route path="/cart" element={<CartPage />} />

      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
