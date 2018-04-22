import React from 'react';
import { Field } from 'react-final-form';

const SelectEntry = ({label, options, name, value, optionChanged}) =>
		<Field name={name&&name} component="select" value={value&&value} className="select_input" onChange={optionChanged}>
				{options.map((opt, i) => 
				  		<option key={i}>{opt}</option>
			  	)}
	    </Field>
	
export default SelectEntry