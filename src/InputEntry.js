import React from 'react';
import { Field } from 'react-final-form';

const InputEntry = ({label, type, name}) => 
	<div className="form-group">
		<label>{label}</label>
	    <Field name={name} component="input" type={type} className="form-control col-12" />
	</div>
	
export default InputEntry