import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const FormLabel = ({ title }) => (
  <div className="col-12 col-md-2 formLabel">
    <p className="form-label-title">{title}</p>
  </div>
);

FormLabel.propTypes = {
  title: PropTypes.string
};

FormLabel.defaultProps = {
  title: ""
};

export default FormLabel;
