import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const InputEntry = ({ type, name, value, placeholder, min, textChanged }) => (
  <Field
    name
    component="input"
    value
    type
    placeholder
    min
    className="textInput"
    onChange={textChanged}
  />
);

InputEntry.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  textChanged: PropTypes.func
};

InputEntry.defaultProps = {
  value: "",
  placeholder: "",
  min: "",
  textChanged: f => f
};
export default InputEntry;
