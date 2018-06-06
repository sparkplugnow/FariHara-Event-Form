import React from "react";
import PropTypes from "prop-types";

const PreferenceButton = ({ label, buttonClicked, selectState }) => (
  <button
    type="button"
    className={`col-3 ${selectState}`}
    onClick={buttonClicked}
  >
    {label}
  </button>
);

PreferenceButton.propTypes = {
  label: PropTypes.string,
  buttonClicked: PropTypes.func,
  selectState: PropTypes.string
};

PreferenceButton.defaultProps = {
  label: "",
  buttonClicked: f => f,
  selectState: ""
};
export default PreferenceButton;
