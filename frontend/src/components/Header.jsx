import React from "react";
import { Link } from "react-router-dom";




function Header() {
  const isLoggedIn = localStorage.getItem("userData");
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          
            <Link className="navbar-brand text-white" to="/">Electricity Board</Link>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                 
                  <Link className="nav-link active  text-white" to="/">Home</Link>
               
              </li>

              <li className="nav-item">
                
                  <Link className="nav-link  text-white" to="/StatisticsCollection">
                    Dashboard Statistics
                  </Link>
                
              </li>

              {isLoggedIn ? (
                <li className="nav-item">
                  
                    <Link className="nav-link" to="/logout">Logout</Link>
                
                </li>
              ) : (
                <li className="nav-item">
                 
                    <Link className="nav-link"  to="/login">Login</Link>
                  
                </li>
              )}




            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
