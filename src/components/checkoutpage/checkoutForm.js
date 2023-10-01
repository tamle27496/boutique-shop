const CheckoutForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="d-flex flex-column mb-4">
        <label className=" text-uppercase mb-2">Full Name:</label>
        <input
          className="p-2 border border-secondary-subtle"
          type="text"
          placeholder="Enter Your Name Here!"
        />
      </div>

      <div className="d-flex flex-column mb-4">
        <label className=" text-uppercase mb-2">Email:</label>
        <input
          className="p-2 border border-secondary-subtle"
          type="text"
          placeholder="Enter Your Email Here!"
        />
      </div>

      <div className="d-flex flex-column mb-4">
        <label className=" text-uppercase mb-2">Phone Number:</label>
        <input
          className="p-2 border border-secondary-subtle"
          type="text"
          placeholder="Enter Your Phone Number Here!"
        />
      </div>

      <div className="d-flex flex-column mb-4">
        <label className=" text-uppercase mb-2">Address:</label>
        <input
          className="p-2 border border-secondary-subtle"
          type="text"
          placeholder="Enter Your Adress Here!"
        />
      </div>

      <div>
        <button type="submit" className="btn btn-page px-4 fs-5 fw-light">
          Place order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
