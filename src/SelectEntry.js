import React from 'react';
import { Field } from 'react-final-form';

const SelectEntry = ({label, options, name}) =>
	<div className="form-group">
			<label>{label}</label>
			<Field name={name} component="select" className="form-control col-4">
				{options.map((opt,  i) => 
					  		<option value={opt.toLowerCase()} key={i}>{opt}</option>
					  	)}
		    </Field>
	</div>
	
export default SelectEntry