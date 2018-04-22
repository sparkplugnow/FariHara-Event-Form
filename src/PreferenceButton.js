import React from 'react';

const PreferenceButton = ( {label, buttonClicked, selectState} ) =>
		<button type="button" className={`col-3 ${selectState&&selectState}`} onClick={buttonClicked}>{label}</button>
	
export default PreferenceButton