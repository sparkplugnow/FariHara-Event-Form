import React from 'react';
import InputEntry from './InputEntry';
import SelectEntry from './SelectEntry';
import PreferenceButton from './PreferenceButton';
import './index.css';
import { Form } from 'react-final-form';
import FormLabel from './FormLabel';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			switchView: false,
			data: { 
	   				phone: '',
	   				email: '',
	   				groomsname: '',
	   				bridesname: '',
	   				weddingdate: 'TBD',
	   				weddinglocation: '',
	   				weddingcolourtheme: '',
	   				bridesmaiddresscolour: '',
	   				weddingparty: 1,
	   				weddingcloth: 'Suit',
	   				colourpreference: 'Undecided',
	   				fabricline: 'Associate $475',
					year: "TBD",
					month: "TBD",
					day: "TBD",
			},
			dateData: {
				months: ["TBD"],
				days: ["TBD"],
			},
			preferenceButtonState: ["", "", "", "", "", "", "", "active"],
		}
		this.phoneTextChanged = this.phoneTextChanged.bind(this);
		this.setMonthLimits = this.setMonthLimits.bind(this);
	}

	submitForm = values => {
		console.log('Submit form button clicked');
		let finalValues = {...this.state.data, eventdate: this.makeDate()};
		if (!finalValues.weddingdate || finalValues.day === "TBD" || finalValues.month === "TBD"  || finalValues.year === "TBD") {
			finalValues.weddingdate = 'TBD';
		}

		if (finalValues.day !== "TBD" && finalValues.month !== "TBD" && finalValues.year !== "TBD") 
			finalValues.weddingdate = `${finalValues.year}-${finalValues.month}-${finalValues.day}`;

		this.setState(prevState => ({
			loading: true,
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
				switchView: !this.state.switchView,
			});

			setTimeout(() => {
				this.setState({
					data: { 
		   				phone: '',
		   				email: '',
		   				groomsname: '',
		   				bridesname: '',
		   				weddingdate: 'TBD',
		   				weddinglocation: '',
		   				weddingcolourtheme: '',
		   				bridesmaiddresscolour: '',
		   				weddingparty: 1,
		   				weddingcloth: 'Suit',
		   				colourpreference: 'Undecided',
		   				fabricline: 'Associate $475',
						year: "TBD",
						month: "TBD",
						day: "TBD",
					},
					switchView: !this.state.switchView,
					dateData: {
						months: ["TBD"],
						days: ["TBD"],
					},
					preferenceButtonState: ["", "", "", "", "", "", "", "active"],
				});
			}, 5000);
		})
		.catch(err => console.error(err))});
	}

	makeDate = () => {
		let date = new Date();
		return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
	}

	switchView = () => this.setState( {switchView: !this.state.switchView} );

	phoneTextChanged = event => {
		let val = event.target.value;
		if (!isNaN(Number(val)))
			this.setState({
				data: {
						...this.state.data,
						phone: val,
					}
			});
	}

	emailTextChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				email: val,
			}
		});
	}

	groomNameChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				groomsname: val,
			}
		});
	}

	brideNameChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				bridesname: val,
			}
		});
	}

	weddingLocationChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				weddinglocation: val,
			}
		});
	}

	weddingColourThemeChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				weddingcolourtheme: val,
			}
		});
	}

	bridesmaidColourChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				bridesmaiddresscolour: val,
			}
		});
	}

	numberOfGroomsmenChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				weddingparty: val,
			}
		});
	}

	weddingClothChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				weddingcloth: val,
			}
		});
	}

	fabricLineChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				fabricline: val,
			}
		});
	}

	setColourPreference = event => {
		let val = event.target.innerHTML, 
		colours = ['Black', 'Blue', 'Charcoal', 'Grey', 'Burgundy', 'White/Ivory', 'Patterned', 'Undecided'],
		positions = ['', '', '', '', '', '', '', '', ''];
		colours.forEach((colour, index) => {
			if (colour === val) 
				positions[index] = "active";
		});
		this.setState({
			data: {
				...this.state.data,
				colourpreference: val
			},
			preferenceButtonState: positions,
		});
	}

	yearChanged = event => {
		let val = event.target.value;
		this.setState(prevState => {
			return {
			data: {
				...this.state.data,
				year: val
			}
		}
		}, () => this.setMonthLimits());
	}

	monthChanged = event => {
		let val = event.target.value;
		this.setState(prevState => {
			return {
			data: {
				...this.state.data,
				month: val
			}
		}
		}, () => this.setDayLimits());
	}

	dayChanged = event => {
		let val = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				day: val
			}
		});
	}

	setMonthLimits = () => {
		if (this.state.data.year !== "TBD") {
			let date = new Date(), currentYear = String(date.getFullYear()), currentMonth = String(date.getMonth()+1);
			let selectedYear = this.state.data.year;
			var months = ["TBD"], x;
			if (selectedYear === currentYear) x = currentMonth;
			else x = 1;

			for (var i = x; i < 13; i++) {
				if (i < 10) months.push("0" + String(i));
				else months.push(String(i));
			}
			this.setState({
				data: {
					...this.state.data,
					month: "TBD",
					day: "TBD",
				},
				dateData: {
					...this.state.dateData,
					months: months,
				}
			});
		} else {
			this.setState({
				data: {
					...this.state.data,
					month: "TBD",
					day: "TBD",
				},
				dateData: {
					...this.state.dateData,
					months: ["TBD"],
					days: ["TBD"]
				}
			});
		}
	}

	setDayLimits = () => {
		if (this.state.data.month !== "TBD") {
			let date = new Date(), currentMonth = String(date.getMonth()+1), currentDay = String(date.getDate()), currentYear = String(date.getFullYear());
			let selectedYear = this.state.data.year, selectedMonth = this.state.data.month;
			var days = ["TBD"], x, z = currentMonth;
			if (currentMonth < 10) z = "0" + z;
			if (selectedMonth === z && selectedYear === currentYear) x = String(Number(currentDay) + 1);
			else x = 1;
			var y = (new Date(Number(selectedYear), Number(selectedMonth), 0)).getDate() + 1;
			for (var i = x; i < y; i++) {
				if (i < 10) days.push("0" + String(i));
				else days.push(String(i));
			}
			this.setState({
				data: {
					...this.state.data,
					day: "TBD",
				},
				dateData: {
					...this.state.dateData,
					days: days,
				}
			});
		} else {
			this.setState({
				data: {
					...this.state.data,
					day: "TBD",
				},
				dateData: {
					...this.state.dateData,
					days: ["TBD"]
				}
			});
		}
	}


	render() {
		return (
				<div className="App">
				   <div className="container-fluid">
					          <div className="header">
							    	<div className="top_container">
							    		<img id="icon" src={require('./images/logs.png')} alt="icon" />
								   		<img id="logo" src={require('./images/logo.png')} alt="logo" />
							   		</div>
							   	</div>
					   			{!this.state.switchView ? 
						   		<div>
							   		<Form
							   			initialValues={this.state.data}
							   			onSubmit={!this.state.loading ? this.submitForm : ()=>{}}
							   			render={( { values, handleSubmit, reset } ) => (
							   				<form onSubmit={handleSubmit}>
							   					<div className="row field">
											   		<FormLabel title="Phone" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.phoneTextChanged} value={this.state.data.phone} type="tel" name="phone" placeholder="Phone Number" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="E-mail" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.emailTextChanged} value={this.state.data.email} type="email" name="email" placeholder="E-mail" />
											   		</div>
										   		</div>
							   					<div className="row field">
											   		<FormLabel title="Groom's Name" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.groomNameChanged} value={this.state.data.groomsname} type="text" name="groomsname" placeholder="Groom's Name" />
											   		</div>
										   		</div>
											   	<div className="row field">
											   		<FormLabel title="Bride's Name" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.brideNameChanged} value={this.state.data.bridesname} type="text" name="bridesname" placeholder="Bride's Name" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Location" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.weddingLocationChanged} value={this.state.data.weddinglocation} type="text" name="weddinglocation" placeholder="Wedding Location" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Colour Theme" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.weddingColourThemeChanged} value={this.state.data.weddingcolourtheme} type="text" name="weddingcolourtheme" placeholder="Wedding Colour Theme" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Dress Colour" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.bridesmaidColourChanged} value={this.state.data.bridesmaiddresscolour} type="text" name="bridesmaiddresscolour" placeholder="Bridesmaid Dress Colour" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Number of Groomsmen" />
											   		<div className="col-12 col-md-10">
											   			<InputEntry textChanged={this.numberOfGroomsmenChanged} value={this.state.data.weddingparty} type="number" name="weddingparty" min="1" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Wedding Fabric" />
											   		<div className="col-12 col-md-10">
											   			<SelectEntry optionChanged={this.weddingClothChanged} value={this.state.data.weddingcloth} label="Wedding Fabric" options={ ['Suit', 'Tuxedo'] } name="weddingcloth" />
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Fabric Line" />
											   		<div className="col-12 col-md-10">
											   			<SelectEntry optionChanged={this.fabricLineChanged} value={this.state.data.fabricline} name="fabricline" options={ ['Associate $475', 'Professional $600', 'Executive $750', 'Presidential $1200'] }/>
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Wedding Date" />
											   		<div className="col-12 col-md-10">
											   			<div className="col-4 date">
												   			<SelectEntry optionChanged={this.yearChanged} value={this.state.data.year} name="year" options={ ["TBD", "2018", "2019", "2020", "2021", "2022"] }/>
											   			</div>
											   			<div className="col-4 date">
												   			<SelectEntry optionChanged={this.monthChanged} value={this.state.data.month} name="month" options={ this.state.dateData.months }/>
											   			</div>
											   			<div className="col-4 date">
												   			<SelectEntry optionChanged={this.dayChanged} value={this.state.data.day} name="day" options={ this.state.dateData.days }/>
											   			</div>
											   		</div>
										   		</div>
										   		<div className="row field">
											   		<FormLabel title="Colour Preference" />
											   		<div className="col-12 col-md-10 preferences">
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[0]} label="Black" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[1]} label="Blue" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[2]} label="Charcoal" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[3]} label="Grey" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[4]} label="Burgundy" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[5]} label="White/Ivory" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[6]} label="Patterned" />
											   			<PreferenceButton buttonClicked={this.setColourPreference} selectState={this.state.preferenceButtonState[7]} label="Undecided" />
											   		</div>
										   		</div>
										   		<div className="row submit">
											   		<div className="submit_button">
											   		{this.state.loading ?
											   			<button type="submit" disabled className="btn">Submit</button> 
												   		:
												   		<button type="submit" className="btn">Submit</button>
											   		}
											   		</div>
										   		</div>
											</form>
							   			)}
						   			/>
					   			</div> : <div className="thank_you"><p>Thank You</p></div> }
					</div>
				</div>
			)
	}
}

export default App