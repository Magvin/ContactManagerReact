import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="Jdoe@gmail.com" phone="+3712225458" />
      </div>
    );
  }
}

export default App;
