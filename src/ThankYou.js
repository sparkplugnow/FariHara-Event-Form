import React from 'react';
import PropTypes from 'prop-types';

const ThankYou = ( {switchView} ) => 
				<div className="thankyou_main">
					<h1>Thanks for participating. Your response has been submitted.</h1>
					<div><button type="button" className="btn btn-success" onClick={switchView}>Return to Form</button></div>
				</div>

ThankYou.propTypes = {
	switchView: PropTypes.func
}

ThankYou.defaultProps = {
	switchView: e => e
}

export default ThankYou