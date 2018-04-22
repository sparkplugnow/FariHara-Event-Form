import React from 'react';
import ReactTable from 'react-table';
import './index.css';
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

	downloadJsonData = () => {
		if (this.state.noDataText === 'No rows found') {
			var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.data));
		    var downloadAnchorNode = document.createElement('a');
		    downloadAnchorNode.setAttribute("href",     dataStr);
		    downloadAnchorNode.setAttribute("download", "farihara_data.json");
		    downloadAnchorNode.click();
		    downloadAnchorNode.remove();
		}
	}

	render() {
		return (
				<div className="App">
				   <div className="table_container">
					   <div className="table_header">
					   		<img src={require('./images/logo.png')} alt="logo" />
				   		</div>
				   		<div className="react-table">
						<ReactTable noDataText={this.state.noDataText} data={this.state.data} columns={columns} className="-striped -highlight" filterable />
						</div>
						<div className="buttons">
							<button type="button" className="btn" onClick={this.downloadJsonData}>Download Data</button>
						</div>
					</div>
				</div>
		)
	}
}

export default InfoTable