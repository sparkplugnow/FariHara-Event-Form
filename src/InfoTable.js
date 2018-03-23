import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import columns from './columns';


class InfoTable extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			data:  [],
			noDataText: 'No rows found'
		}
	}

	componentDidMount() {
		this.setState(prevState => {
			return {
				noDataText: 'Loading...'
			}
		}, () => {
		fetch('https://fariharaserver.now.sh/customers', {method: 'GET'})
		.then(response => response.json())
		.then(data => {
				this.setState({
					data: data,
					noDataText: 'No rows found'
			});
		})
		.catch(err => console.error(err))}
		);
	}

	render() {
		return (
				<div className="App">
				   <div className="container">
					   <div className="header">
					   		<img src={require('./images/logo.png')} alt="logo" />
				   		</div>
						<ReactTable noDataText={this.state.noDataText} data={this.state.data} columns={columns} className="-striped -highlight" filterable />
					</div>
				</div>
		)
	}
}

export default InfoTable