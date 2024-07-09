import { useState, useEffect } from "react";

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProd = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        className="form-control me-2 mt-4 shadow-sm rounded-0"
        style={{ height: "54px" }}
        type="search"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <div>
          {filteredProd.map((item) => (
            <div className="d-flex gap-3 p-2" key={item.id}>
              <div>
                <div className="pro-thumb h-25">
                  <img
                    src={(item.images || [])[0]
                      .replace('["', "")
                      .replace('"', "")}
                    alt=""
                    width={70}
                    className="flex-{grow|shrink}-0"
                  />
                </div>
              </div>
              <div>
                <p>{item.title}</p>
                <h6>$ {item.price}</h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
