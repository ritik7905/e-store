import React, { useState } from "react";

// Styles
import "./styles.scss";

const CollectionCard = ({ featureCard }) => {
  const [discount, setDiscount] = useState(false);
  return (
    <div className="feature-collection-card">
      <div className="product-img">
        <img
          src={featureCard.img}
          className="img-fluid"
          alt="collection-card"
        />
        <div className="card-details">
          <span className="product-name">{featureCard.name}</span>
          <p className="product-desc">{featureCard.desc}</p>
          Ratings
          <h5 className={featureCard.discount ? "change-color" : ""}>
            ${featureCard.amount}
            <span
              className={
                featureCard.discount ? "show-discount" : "hide-discount"
              }
            >
              ${featureCard.discountAmount}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
