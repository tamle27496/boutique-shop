import styles from "../module css pages/HomePage.module.css";

// Tạo dummy data để map dữ liệu cho nhanh
const dummyServices = ["Free Shipping", "24 X 7 Service", "Festival Offer"];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className="row g-5">
          {/* Render dummy data */}
          {dummyServices.map((service) => (
            <div key={service} className="col-xs-12 col-md-6 col-lg-4">
              <h3>{service}</h3>
              <h6 className="text-body-tertiary">Free shipping worldwide</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
