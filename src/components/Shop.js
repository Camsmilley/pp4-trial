import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Location from "../components/Location";
import Category from "../components/Category";
import Search from "../components/Search";

const Shop = () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        setProduct(response);
      });

    const existingOrder = JSON.parse(sessionStorage.getItem("final") || "[]");
    setOrder(existingOrder);
  }, []);
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
      alert("Product added to cart!");
    }
  };
  return (
    <>
      <div className="container  shadow-sm" style={{ marginTop: "2rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-12 mt-4">
            <article>
              <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded-0">
                Show result : 1-50
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {product.slice(0, 9).map((item) => (
                  <>
                    <div className="col-md-4">
                      <div
                        className="card border-0 rounded-0 shadow-sm mb-2 "
                        style={{ width: "17rem" }}
                      >
                        <img
                          src={item.images[0]
                            .replace('["', "")
                            .replace('"', "")}
                          className="card-img-top rounded-0"
                          id={item.id + "image"}
                        />
                        <div className="card-body text-center">
                          <h5
                            className="card-title mb-3"
                            id={item.id + "title"}
                          >
                            {item.title}
                          </h5>
                          <div className="d-flex justify-content-center">
                            <span style={{ fontSize: "24px" }} className="me-2">
                              $
                            </span>
                            <h3
                              className="card-text mb-3"
                              id={item.id + "price"}
                            >
                              {item.price}
                            </h3>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Link
                              class="btn btn-warning bi bi-eye-fill rounded-circle me-2"
                              style={{ color: "white" }}
                              to={`/shop/${item.id}`}
                            ></Link>

                            <button
                              class="btn btn-warning bi bi-heart-fill rounded-circle me-2"
                              style={{ color: "white" }}
                            ></button>

                            <button
                              class="btn btn-warning bi bi-cart4 rounded-circle"
                              style={{ color: "white" }}
                              onClick={() => addToCart(item.id)}
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </article>
          </div>

          <div className="col-md-4 col-12">
            <Search products={product} />
            <Category />
            <Location />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
