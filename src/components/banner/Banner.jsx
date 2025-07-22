import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <>
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">
            High Productivity. High ROI.<br />
            Higher Satisfaction.
          </h1>
          <button className="banner-cta-button">
            Get a Demo
          </button>
        </div>
      </div>
    </section>

    <section className="banner-curve-section">
        <div className="curve-spacer"></div>
    </section>

    </>
  );
};

export default Banner;