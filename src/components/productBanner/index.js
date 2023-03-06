import React from "react";
import { Link } from "react-router-dom";

// styles
import "./styles.scss";
const ProductBanner = ({ slideBanner }) => {
  return (
    <div className="main-banner position-relative">
      <img
        src={slideBanner.productImg}
        className="img-fluid rounded-3"
        alt="banner"
      />
      <div className="main-banner-content position-absolute">
        <h4>{slideBanner.productTag}</h4>
        <h5>{slideBanner.productName}</h5>
        <p>{slideBanner.productDesc}</p>
        <Link to="/" className="button btn-buy">
          {slideBanner.buttonTag}
        </Link>
      </div>
    </div>
  );
};

export default ProductBanner;
