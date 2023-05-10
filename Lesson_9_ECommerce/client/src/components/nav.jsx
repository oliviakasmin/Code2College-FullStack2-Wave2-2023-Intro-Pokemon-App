import React, { useState } from "react";
import acct from "../images/acct.png";
import logo from "../images/logo.png";
import cartlogo from "../images/cartlogo.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import {  useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const fetchSearch = (searchTerm) => {
    navigate('/shopping')
    Axios.get('http://localhost:3001/api/search', { params:{ searchTerm } })
    .then( data => {
      console.log(data.data)
      props.setProducts(data.data)
    })
  }

  return (
    <>
      <div className="nav">
        <div className="nav-items">
          <img className="icons" id= 'logo'src={logo} alt=""></img>
          <input
            type="text"
            className="search-box"
            placeholder="search"
            onChange={onSearchChange}
            value={searchTerm}
          />
          <button onClick={() => fetchSearch(searchTerm)} className="search-btn">search</button>

          <img className="icons" src={acct} alt=""></img>

          <button onClick={props.cartPath} id="cart-btn">
            {" "}
            {props.length}
            <img src={cartlogo} alt=""></img>
          </button>
        </div>
        <div id="links">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/shopping">
            Shopping
          </Link>
          <Link className="navlink" to="/about">
            About Us
          </Link>
          <Link className="navlink" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

