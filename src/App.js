import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
