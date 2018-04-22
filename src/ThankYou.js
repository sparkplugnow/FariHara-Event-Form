import React from 'react';
import PropTypes from 'prop-types';

const ThankYou = ( {switchView} ) => 
					<div className="container">
					   <div className="thankyou_header">
					   		<img src={require('./images/logo.png')} alt="logo" />
				   		</div>
				   		<div className="thankyou_main">
							<img src={require('./images/ultimate-bridal-show.jpg')} alt="Ultimate Bridal Show" className="event_img" />
							<p className="thankyou_message">Your entry has been submitted</p>
							<div><button type="button" className="btn thankyou_button" onClick={switchView}>Submit Another Entry</button></div>
						</div>
					</div>
				
ThankYou.propTypes = {
	switchView: PropTypes.func
}

ThankYou.defaultProps = {
	switchView: e => e
}

export default ThankYou