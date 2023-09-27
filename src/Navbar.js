import React, { Component } from "react";
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

class Navbar extends Component {

  render() {
    return (
      <>
        <Router>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="./logo.png" width={185} alt="Certificate Gen" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    {/* <Link className="nav-link" to='/'>Home</Link> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Templates</a>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="#">About us</a> */}
                    <Link className="nav-link" to='/about'>About us</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="">Contact</a> */}
                    <Link className="nav-link" to='/contact'>Contact</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  {/* <a className="btn-grad" type="submit">Login</a> */}
                  <Link className="btn-grad" to='/login'>Login</Link>
                  {/* <a className="btn btn-grad-reverse mx-3" type="submit">Sign in</a> */}
                  <Link className="btn btn-grad-reverse mx-3" to='/register'>Sign up</Link>
                </form>
              </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Signup />}></Route>
          </Routes>
        </Router >


      </>
    );
  }
}

export default Navbar