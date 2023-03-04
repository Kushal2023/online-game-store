import React from "react";
import "./card.css";
import { addItemToCart } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={item.gameAsset.imageURL} alt="avatar" />
      </div>
      <div className="card-info">
        <h4>{item.gameName}</h4>
        <div className="price">
          <strong>Price:</strong>
          <p>₹{item.gamePrice}</p>
        </div>
        <div className="email">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            facilisis justo lacinia sem ultrices, ac auctor nibh faucibus.
            Suspendisse finibus suscipit ex bibendum mollis. Morbi vehicula enim
            nisi, at dictum est mollis sed. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean at metus eu magna rutrum
            pellentesque. Sed nec.
          </p>
        </div>
        <button className="addtocartbtn" onClick={handleClick}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
