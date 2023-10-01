// Component Banner chung của các page nhận props là pathname
const BannerSection = (props) => {
  return (
    <div className="d-flex bg-light align-items-center justify-content-between p-5">
      <h1 className="text-uppercase fw-medium">{props.pathname}</h1>
      <h4 className="text-uppercase text-body-tertiary">{props.pathname}</h4>
    </div>
  );
};

export default BannerSection;
