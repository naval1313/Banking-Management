import React from "react";
// import "./CustomerServices.css";
import { FaMapMarkerAlt, FaExchangeAlt, FaUserCheck } from "react-icons/fa"; // Importing icons

const CustomerServices = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="title">
          Services for <span>Customer Queries</span>
        </h2>
        <p className="description">
          Access essential banking services quickly and conveniently.
        </p>

        <div className="services-cards">
          {/* Change Address Card */}
          <div className="card change-address">
            <div className="icon-container">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Change Address</h3>
            <p>Update your registered address securely.</p>
            <button className="action-btn">Update Now</button>
          </div>

          {/* Account Transfer Card */}
          <div className="card account-transfer">
            <div className="icon-container">
              <FaExchangeAlt className="icon" />
            </div>
            <h3>Account Transfer</h3>
            <p>Transfer your account to another branch.</p>
            <button className="action-btn">Transfer Now</button>
          </div>

          {/* Update KYC Card */}
          <div className="card update-kyc">
            <div className="icon-container">
              <FaUserCheck className="icon" />
            </div>
            <h3>Update KYC</h3>
            <p>Keep your account active by updating KYC.</p>
            <button className="action-btn">Update Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServices;
