import React from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <div className="content">
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
