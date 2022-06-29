import React from "react";
import "./components/Portfolio.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import {
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Portfolio />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
