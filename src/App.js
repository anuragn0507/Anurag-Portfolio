import React, { useState, useEffect, useRef } from "react";
import Pre from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import { Button } from "react-bootstrap";

function App() {
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  const [load, upadateLoad] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Redirect to="/" />
        <Navbar />
        <ScrollToTop />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Footer />

        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
