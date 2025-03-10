import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const ids = parseInt(id);
  const [order, setOrder] = useState([]);
  let sesh = "";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
      });

    const existingOrder = JSON.parse(sessionStorage.getItem("final") || "[]");
    setOrder(existingOrder);
  }, []);

  const result = product.filter((p) => p.id === ids);

  console.log(result);

  const addToCart = (id) => {
    const existingOrder = JSON.parse(sessionStorage.getItem("final") || "[]");

    const itemExists = existingOrder.some((item) => item.id === id);

    if (itemExists) {
      alert("Item is already added to your cart!");
    } else {
      let price = document.getElementById(id + "price").innerText;
      let prod = document.getElementById(id + "title").innerText;
      let img = document.getElementById(id + "image").src;
      const updatedOrder = [
        ...existingOrder,
        { id: id, img: img, prod: prod, price: price },
      ];
      setOrder(updatedOrder);
      sessionStorage.setItem("final", JSON.stringify(updatedOrder));
    }
  };
  return (
    <>
      <div className="container shadow-sm mt-3 mb-5">
        <div className="row">
          <div className="col-md-6">
            {result.map((item) => (
              <>
                <div className="d-flex justify-content-center">
                  <img
                    src={item.images[0].replace('["', "").replace('"', "")}
                    className="shadow-sm  rounded-0 m-5"
                    id={item.id + "image"}
                    style={{ width: "400px", height: "400px" }}
                  />
                </div>
              </>
            ))}
          </div>
          <div className="col-md-6">
            {result.map((item) => (
              <>
                <div className="">
                  <h2 className="mt-5 mb-3" id={item.id + "title"}>
                    {item.title.toUpperCase()}
                  </h2>
                  <div className="d-flex ">
                    <span style={{ fontSize: "24px" }} className="me-2">
                      $
                    </span>
                    <h3 className="card-text mb-3" id={item.id + "price"}>
                      {item.price}
                    </h3>
                  </div>
                  <p className="mb-4">{item.description}</p>
                  <Link
                    className="btn btn-primary p-3 mt-4 me-4"
                    to={`/checkout/${item.id}`}
                  >
                    Buy now <i className="bi bi-bag ms-3"></i>
                  </Link>
                  <button
                    className="btn btn-warning p-3 mt-4 "
                    onClick={() => addToCart(item.id)}
                  >
                    Add to cart
                    <i className="bi bi-cart ms-3"></i>
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
