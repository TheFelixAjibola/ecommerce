import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import data from "./data/db.json";

const Products = () => {
  const [datas, setDatas] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the fetch data

    setTimeout(() => {
      setDatas(datas); // Update the data state with the local data
      setFilter(data);
      setLoading(false); // Set loading to false after data is fetched
    }, 500);
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    if (cat === "") {
      // If the category is empty, set the filter to all products
      setFilter(data);
    } else {
      const updatedList = data.filter((x) => x.category === cat);
      setFilter(updatedList);
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("")}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Men")}
          >
            Men's Shoes
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Women")}
          >
            Women's Shoes
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("Unisex")}
          >
            Unisex Shoes
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.name}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
