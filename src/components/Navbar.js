import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="./logo.png" width={185} alt="Certificate Gen" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Templates</a> */}
                <Link className="nav-link" to='/template'>Templates</Link>
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
    </>
  );
}