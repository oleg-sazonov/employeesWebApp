import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John S.', salary: 800, increase: false, id: 1},
				{name: 'Alex D.', salary: 1200, increase: true, id: 2},
				{name: 'Ann H.', salary: 1500, increase: false, id: 3}
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => ({data: data.filter(elem => elem.id !== id)}))
	}

	render() {
		return (
			<div className="app">
				<AppInfo/>

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}
				/>
				<EmployeesAddForm/>
			</div>
		);
	}
}

export default App;