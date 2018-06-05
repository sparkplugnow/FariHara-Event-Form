import InputEntry from './InputEntry';
import React from 'react';
import { Field } from 'react-final-form';

const BeforeEntry = () => 
					<div className="before_entry">
							<Field 
						    name="email" component="input" type="email" 
						    className="form-control col-3" 
						    placeholder="E-mail" />&nbsp;&nbsp;
						    <Field 
						    name="phone" component="input" type="tel" 
						    className="form-control col-4" 
						    placeholder="Phone" />
						
					</div>

export default BeforeEntry