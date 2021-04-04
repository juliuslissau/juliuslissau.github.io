import React from "react";
import "./portfolioItem.css";

export default function PortfolioItem({
  image,
  color,
  title,
  website = "#",
  features = [],
}) {
  return (
    <div className="portfolioItem" style={{ backgroundColor: color }}>
      <div className="container portfolioItemInner">
        <div className="portfolioImage">
          <img src={image} alt="Website 3D render" />
        </div>
        <div className="portfolioText">
          <h4>
            <a href={website} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h4>
          <p className="featureHeadline">Feature highlights</p>
          {features.length > 0 && (
            <ul className="features">
              {features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
