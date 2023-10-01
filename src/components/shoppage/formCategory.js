const FormCategory = () => {
  return (
    <form className="row align-items-center justify-content-between">
      <div className="col-xs-12 col-md-6 col-lg-4 mb-3">
        <div className="form-item ">
          <input
            className="p-2 w-100"
            type="text"
            placeholder="Enter Search Here!"
          />
        </div>
      </div>
      <div className="col-xs-12 col-md-6 col-lg-4 mb-3">
        <div className="form-item d-flex justify-content-end">
          <select>
            <option defaultValue="1">Default sorting</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Three</option>
            <option value="5">Three</option>
            <option value="6">Three</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default FormCategory;
