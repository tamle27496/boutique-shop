import styles from "../module css pages/HomePage.module.css";

const Subcribe = () => {
  return (
    <section className={styles.subcribe}>
      <div className="container">
        <div className="row g-3">
          <div className="col-xs-12 col-md-6 col-lg-6 ">
            <h3>Let's be Friends!</h3>
            <h6 className="text-body-tertiary">
              Nisi nisi tempor consequat laboris nisi
            </h6>
          </div>

          <div className="col-xs-12 col-lg-6">
            <form className="rows">
              <input
                placeholder="Enter your email address"
                className="col-xs-12 col-md-6 col-lg-10 p-3 fst-normal"
                type="email"
                required
              />
              <button className="col-xs-12 col-md-6 col-md-6 col-lg-2 fst-normal py-2 px-4 btn btn-page">
                Subcribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
