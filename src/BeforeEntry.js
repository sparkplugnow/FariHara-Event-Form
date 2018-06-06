import InputEntry from "./InputEntry";
import React from "react";
import { Field } from "react-final-form";
import PropTypes from 'prop-types';

const BeforeEntry = () => (
  <div className="beforeEntry">
    <Field
      name="email"
      component="input"
      type="email"
      className="form-control col-3"
      placeholder="E-mail"
    />&nbsp;&nbsp;
    <Field
      name="phone"
      component="input"
      type="tel"
      className="form-control col-4"
      placeholder="Phone"
    />
  </div>
);

export default BeforeEntry;
