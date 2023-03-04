import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../componets/Navbar/Navbar";
import "./cart.css";
import { removeItemFromCart } from "../../redux/cartRedux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleCheckout = async (price) => {
    const res = await axios.get(`http://localhost:8080/secret/${price}`);
    navigate(`/checkout/${res.data.client_secret}`);
  };

  return (
    <div>
      <Navbar />
      <div className="cart">
        <div className="added-products">
          {cartItem.products?.map((product, index) => (
            <div className="product" key={index}>
              <img
                src={product.gameAsset.imageURL}
                alt="avatar"
                className="cart-image"
              />
              <div className="game-info">
                <strong>Game Name</strong>
                <p>{product.gameName}</p>
              </div>
              <div className="game-price-info">
                <strong>Game Price</strong>
                <p>₹{product.gamePrice}</p>
              </div>
              <button
                className="addtocartbtn"
                onClick={() => handleDelete(product)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <strong>Total Amount</strong>
          <p>₹{cartItem.total}</p>
          <button
            className="addtocartbtn"
            onClick={() => handleCheckout(cartItem.total)}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
