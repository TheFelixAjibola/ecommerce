import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/img/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="fullname" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  placeholder="Felix Ajibola"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="msg" class="form-label">
                  Message
                </label>
                <textarea class="form-control" id="msg" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
