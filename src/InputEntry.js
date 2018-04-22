import React from 'react';
import { Field } from 'react-final-form';

const InputEntry = ( {type, name, value, placeholder, min, textChanged} ) => 
	<Field name={name&&name} component="input" value={value&&value} type={type&&type}
	    placeholder={placeholder&&placeholder} min={min&&min} className="text_input" onChange={textChanged} />
	
export default InputEntry