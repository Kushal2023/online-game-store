import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./body.css";

const Body = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const query = `
        query Games {
            games {
            createdAt
            gameAsset
            gameDescription
            gameName
            gamePrice
            id
            publishedAt
            updatedAt
            }
        }
        `;
      axios
        .post(
          "https://api-ap-south-1.hygraph.com/v2/cles8j0y31wqt01ue75zz8ww1/master",
          { query }
        )
        .then((response) => {
          console.log(response.data.data.games);
          setItems(response.data.data.games);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllProducts();
  }, []);
  return (
    <div className="body">
      <div className="products">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
