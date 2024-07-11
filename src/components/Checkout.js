import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./buynow.css";

function BuyNowPage() {
  const url = "https://api.escuelajs.co/api/v1/products";
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State to keep track of the total price
  const { id } = useParams();
  const ids = parseInt(id);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
      });
  }, []);

  const result = product.filter((p) => p.id === ids);
  console.log(result);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = (price) => {
    return quantity * price;
  };

  const handleBuyNow = () => {
    const totalPrice = calculateTotalPrice(result[0].price);
    alert(`Thank you for purchasing. Total Price: $${totalPrice}`);
    navigate(`/shop`);
  };

  useEffect(() => {
    if (result.length > 0) {
      setTotalPrice(calculateTotalPrice(result[0].price));
    }
  }, [quantity, result]);

  return (
    <div className="buy-now-page">
      <h1>Buy Now</h1>
      {result.map((item) => (
        <div key={item.id}>
          <img
            src={item.images[0].replace('["', "").replace('"', "")}
            alt="Product"
          />
          <p>{item.description}</p>
          <div className="quantity-control">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <p id="price">Price: ${item.price} per item</p>
          <p>Total: ${totalPrice}</p>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default BuyNowPage;
