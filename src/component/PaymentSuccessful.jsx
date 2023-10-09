import React from "react";
import { NavLink } from "react-router-dom";

const PaymentSuccessful = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-success">Payment Successful</h2>
              <p className="card-text">
                Thank you for your payment. Your order has been successfully
                processed.
              </p>
              {/* Add more information as needed */}
              <NavLink to="/" className="btn btn-success">
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
