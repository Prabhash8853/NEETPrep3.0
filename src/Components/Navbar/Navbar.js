import React from "react";
import { Box } from "@chakra-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="Nav">
      <Box className="flex-3">Logo</Box>
      <Box className="flex-10">
        <ul className="nav-ul">
          <li className="list-hide">
            <Link to="/">Home</Link>
          </li>

          <li className="list-hide">Contact Us</li>
          <li className="btn-mg">
            <button className="btn">Login</button>
          </li>
        </ul>
      </Box>
    </div>
  );
};

export default Navbar;
