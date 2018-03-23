import React from 'react';
import { Field } from 'react-final-form';

const InputEntry = ( {label, type, name, value} ) => 
	<div className="form-group">
		<label>{label}</label>
	    <Field name={name} component="input" min={type==='number'&&1} value={value&&value} type={type} className={`form-control col-${type==="date" ? 4: type==="number" ? 2: 12}`} />
	</div>
	
export default InputEntry