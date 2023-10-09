import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import data from "./data/db.json";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    addProduct(product);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);

    const productData = data.find((item) => item.id === parseInt(id));

    if (productData) {
      setProduct(productData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-12 col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-12 col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) {
      return null;
    }

    return (
      <div className="row p-4">
        <div className="col-12 col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 mt-3">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.name}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="ms-2 fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead text-justify">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => handleAddToCart()}
          >
            Add to Cart
          </button>
          <NavLink
            to="/products"
            className="btn btn-outline-dark ms-2 px-2 py-2"
          >
            Continue Shopping
          </NavLink>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
          {showAlert && (
            <div className="alert alert-success mt-3" role="alert">
              {product && product.name} added to cart.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
