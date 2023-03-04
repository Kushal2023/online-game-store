import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import { setItemToCart } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItemToCart());
  }, [dispatch]);

  return (
    <div className="payment">
      <strong>Payment done successfully</strong>
      <button className="addtocartbtn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
