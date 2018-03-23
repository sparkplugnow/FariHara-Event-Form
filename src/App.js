import React from 'react';
import InputEntry from './InputEntry';
import SelectEntry from './SelectEntry';
import './index.css';
import { Form } from 'react-final-form';
import ThankYou from './ThankYou';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: '',
			loading: false,
			switchView: false,
		}
	}

	submitForm = values => {
		for (const value in values) {
			if (values[value] === "") {
				this.setState({
					errorMessage: 'Please fill in all fields'
				});
				return;
			}
		}

		let finalValues = {...values, eventdate: this.makeDate()};

		this.setState(prevState => ({
			loading: true,
			errorMessage: 'Submitting...'
		}), () => {fetch('https://fariharaserver.now.sh/customers', {
			body: JSON.stringify(finalValues),
			method: 'POST',
			headers: {
		      'content-type': 'application/json'
		    }
			})
		.then(response => response.json())
		.then(data => {
			this.setState({
				loading: false,
				errorMessage: '',
				switchView: !this.state.switchView,
			});
		})
		.catch(err => console.error(err))});
	}

	makeDate = () => {
		let date = new Date();
		return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
	}

	switchView = () => this.setState( {switchView: !this.state.switchView} );

	render() {
		return (
			!this.state.switchView ? 
				<div className="App">
				   <div className="container">
					   <div className="header">
					   		<img src={require('./images/logo.png')} alt="logo" />
				   		</div>
				   		<Form
				   			initialValues={{ 
				   				eventname: '',
				   				groomsname: '',
				   				bridesname: '',
				   				weddingdate: '',
				   				weddinglocation: '',
				   				weddingcolourtheme: '',
				   				bridesmaiddresscolour: '',
				   				weddingparty: 'Yes',
				   				weddingcloth: 'Suit',
				   				colourpreference: 'Black',
				   				fabricline: 'Associate $475',
			   				 }}
				   			onSubmit={!this.state.loading ? this.submitForm : ()=>{}}
				   			render={( { values, handleSubmit, reset } ) => (
				   				<form onSubmit={handleSubmit}>
									<InputEntry label="Event Name" type="text" name="eventname" />
									<InputEntry label="Groom's Name" type="text" name="groomsname" />
									<InputEntry label="Bride's Name" type="text" name="bridesname" />
									<InputEntry label="Wedding Date" type="date" name="weddingdate" />
									<InputEntry label="Wedding Location" type="text" name="weddinglocation" />
									<InputEntry label="Wedding Colour Theme" type="text" name="weddingcolourtheme" />
									<InputEntry label="Bridesmaid Dress Colour" type="text" name="bridesmaiddresscolour" />
									<SelectEntry label="Wedding Party?" options={ ['Yes' , 'No'] } name="weddingparty" />
									<SelectEntry label="Wedding Cloth" options={ ['Suit', 'Tuxedo'] } name="weddingcloth" />
									<SelectEntry label="Colour Preference" options={ ['Black', 'Blue', 'Grey', 'Burgundy', 'White/Ivory', 'Patterned', 'Undecided'] } name="colourpreference" />
									<SelectEntry label="Fabric Line" name="fabricline" options={ ['Associate $475', 'Professional $600', 'Executive $750', 'Presidential $1200'] }/>
									<div className="buttons">
										<button type="submit" className={`btn btn-success ${this.state.loading ? 'disabled' : 'active'}`}>Submit</button>
									</div>
								</form>
				   			)}
			   			/>
			   			<p className="errorView">{this.state.errorMessage}</p>
					</div>
				</div>
				: <ThankYou switchView={this.switchView} />
			)
	}
}

export default App