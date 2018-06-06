import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

const SelectEntry = ({ options, name, value, optionChanged }) => (
  <Field
    name
    component="select"
    value
    className="selectInput"
    onChange={optionChanged}
  >
    {options.map((opt, i) => <option key={i}>{opt}</option>)}
  </Field>
);

SelectEntry.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  optionChanged: PropTypes.func
};

InputEntry.defaultProps = {
  value: "",
  optionChanged: f => f
};

export default SelectEntry;
