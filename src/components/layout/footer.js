import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black p-5">
      <div className="container">
        <div className="row g-3">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <h5 className="text-white text-uppercase">Customer Services</h5>
            <div className="d-flex flex-column">
              <Link to="#" className="text-secondary">
                Help & Contact us
              </Link>
              <Link to="#" className="text-secondary">
                Return & Refunds
              </Link>
              <Link to="#" className="text-secondary">
                Online Store
              </Link>
              <Link to="#" className="text-secondary">
                Term & Conditions
              </Link>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <h5 className="text-white text-uppercase">Company</h5>
            <div className="d-flex flex-column">
              <Link to="#" className="text-secondary">
                What We do
              </Link>
              <Link to="#" className="text-secondary">
                Available Services
              </Link>
              <Link to="#" className="text-secondary">
                Lasted Post
              </Link>
              <Link to="#" className="text-secondary">
                FAQs
              </Link>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <h5 className="text-white text-uppercase">Social Media</h5>
            <div className="d-flex flex-column">
              <Link to="#" className="text-secondary">
                Twitter
              </Link>
              <Link to="#" className="text-secondary">
                Instagram
              </Link>
              <Link to="#" className="text-secondary">
                Facebook
              </Link>
              <Link to="#" className="text-secondary">
                Pinterest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
