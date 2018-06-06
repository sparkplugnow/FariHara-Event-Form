import React from "react";
import PropTypes from "prop-types";

const ConfirmationView = ({ switchView }) => (
  <div className="container">
    <div className="confirmationViewHeader">
      <img src={require("./images/logo.png")} alt="logo" />
    </div>
    <div className="confirmationViewMain">
      <img
        src={require("./images/ultimate-bridal-show.jpg")}
        alt="Ultimate Bridal Show"
        className="eventImg"
      />
      <p className="confirmationViewMessage">Your entry has been submitted</p>
      <div>
        <button
          type="button"
          className="btn confirmationViewButton"
          onClick={switchView}
        >
          Submit Another Entry
        </button>
      </div>
    </div>
  </div>
);

ConfirmationView.propTypes = {
  switchView: PropTypes.func
};

ConfirmationView.defaultProps = {
  switchView: e => e
};

export default ConfirmationView;
