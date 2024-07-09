import { useState, useEffect } from "react";

const Cart = () => {
  const [cost, setCost] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [cartOrders, setCartOrders] = useState([]);
  const [quantityPerItem, setQuantityPerItem] = useState({});

  useEffect(() => {
    const sesh = JSON.parse(sessionStorage.getItem("final") || []);
    setCartOrders(sesh);
    setCartItems(sesh.length);

    const initialCost = sesh.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    const initialQuantityPerItem = sesh.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {});
    setCost(Math.round(initialCost * 100) / 100);
    setQuantityPerItem(initialQuantityPerItem);
  }, []);

  const handleQuantityChange = (itemId, delta) => {
    setQuantityPerItem((prevQuantityPerItem) => {
      return {
        ...prevQuantityPerItem,
        [itemId]: Math.max(1, prevQuantityPerItem[itemId] + delta),
      };
    });

    const updatedOrders = cartOrders.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: quantityPerItem[itemId] };
      }
      return item;
    });

    setCartOrders(updatedOrders);
    updateCartTotal(updatedOrders);
  };

  const updateCartTotal = (updatedOrders) => {
    const newCost = updatedOrders.reduce(
      (acc, item) => acc + item.price * quantityPerItem[item.id],
      0
    );
    setCost(Math.round(newCost * 100) / 100);
    setCartItems(updatedOrders.length);
  };

  const handleRemoveItem = (itemId) => {
    const updatedOrders = cartOrders.filter((item) => item.id !== itemId);
    setCartOrders(updatedOrders);
    removeFromStorage(itemId);
    updateCartTotal(updatedOrders);
  };

  const removeFromStorage = (itemId) => {
    const storedItems = JSON.parse(sessionStorage.getItem("final") || []);
    const filteredItems = storedItems.filter((item) => item.id !== itemId);
    sessionStorage.setItem("final", JSON.stringify(filteredItems));
  };

  const handleCheckout = () => {
    alert(`Thank you for your order! Your total is $${cost.toFixed(2)}.`);

    setCartOrders([]);
    setCost(0);
    setCartItems(0);
    sessionStorage.removeItem("final");
  };
  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {cartOrders.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex">
                    <img
                      src={item.img}
                      className=""
                      style={{ height: "60px", width: "60px" }}
                      alt={item.prod}
                    />
                    <p className="ms-2">{item.prod}</p>
                  </div>
                </td>
                <td>$ {item.price}</td>
                <td>
                  <div className="d-flex">
                    <button
                      className="btn-sub btn-tertiary py-0"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <h5 className=""> {quantityPerItem[item.id] || 1}</h5>{" "}
                    <button
                      className="btn-add btn-tertiary py-0"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  $ {(item.price * (quantityPerItem[item.id] || 1)).toFixed(2)}
                </td>{" "}
                <td>
                  <button
                    className="btn btn-danger btn-sm bi bi-trash-fill"
                    onClick={() => handleRemoveItem(item.id)}
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <h3>Total: $ {cost.toFixed(2)}</h3>
        </div>
        <button className="btn btn-primary ms-2" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
};
export default Cart;
