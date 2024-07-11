import React, { useState } from "react";
import "./buynow.css";

function BuyNowPage() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(10);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    return quantity * price;
  };

  const handleBuyNow = () => {
    const totalPrice = calculateTotalPrice();
    alert(`Purchasing ${quantity} item(s) for a total of $${totalPrice}`);
  };

  return (
    <div className="buy-now-page">
      <h1>Buy Now</h1>
      <img src="product-image.jpg" alt="Product" />
      <p>Product Description</p>
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
      <p>Price: ${price} per item</p>
      <p>Total: ${calculateTotalPrice()}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default BuyNowPage;
