import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const publicKey = "pk_test_e49716ad327eedc52fe251c1111873c295993682";
  const [total, setTotal] = useState(0);
  const amount = total * 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Purchase Now",
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      window.location.href = "/paymentsuccessful";
    },
    onClose: () => alert("Wait! You need this product, don't go!"),
  };

  const nigState = () => {
    const States = [
      "Abuja",
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ];

    return (
      <select className="form-select" id="state" required="">
        <option value="">Choose...</option>
        {States.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    );
  };

  const itemList = (item) => {
    const itemTotal = item.qty * item.price; // Calculate item total
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">
            {item.name}
            {/* Display Name */}
          </h6>
          <small className="text-muted">
            (NGN{item.price} x {item.qty}) =
          </small>
        </div>
        <div className="text-muted m-2">NGN{itemTotal}</div>
        {/* Display item total */}
      </li>
    );
  };

  useEffect(() => {
    // Calculate the total when the state changes
    const newTotal = state.reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0);
    setTotal(newTotal); // Update the total in local state
  }, [state]);

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-success">Your cart</span>
              <span className="badge bg-success rounded-pill">
                {state ? state.length : 0}
              </span>
            </h4>
            {state && state.length > 0 ? (
              <ul className="list-group mb-3">
                {state.map(itemList)}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (NGN)</span>
                  <strong>NGN{total.toFixed(2)}</strong>
                </li>
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <form className="card p-3 rounded-3 shadow">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="container my-5">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title text-center">Checkout</h2>

                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Address
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="text-center">
                        <PaystackButton
                          className="btn btn-success"
                          {...componentProps}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
