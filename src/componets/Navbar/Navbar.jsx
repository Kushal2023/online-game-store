import React from "react";
import "./navbar.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h3>Gaming Store</h3>
      </Link>

      <div className="right">
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
          <Badge
            badgeContent={cartItem.quantity}
            color="primary"
            overlap="rectangular"
          >
            <ShoppingCartIcon className="icon" />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
