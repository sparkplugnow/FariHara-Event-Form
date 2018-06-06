import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const InputEntry = ({ type, name, value, placeholder, min, textChanged }) => (
  <Field
    name={name}
    component="input"
    value={value}
    type={type}
    placeholder={placeholder}
    min={min}
    className="textInput"
    onChange={textChanged}
  />
);

InputEntry.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  textChanged: PropTypes.func
};

InputEntry.defaultProps = {
  placeholder: "",
  min: "",
  textChanged: f => f
};
export default InputEntry;
