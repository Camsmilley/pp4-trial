import { useState, useEffect } from "react";

const Category = () => {
  const url = "https://api.escuelajs.co/api/v1/categories";
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setArray(response);
      });
  }, []);
  return (
    <>
      <select
        className="form-select mt-4 shadow-sm rounded-0"
        aria-label="Default select example"
      >
        <option>Category</option>

        {array.map((item) => (
          <>
            <option value={item.id}>{item.name}</option>
          </>
        ))}
      </select>
    </>
  );
};

export default Category;
