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
				{name: 'John S.', salary: 800, increase: false, rise: true, id: 1},
				{name: 'Alex D.', salary: 1200, increase: true, rise: false, id: 2},
				{name: 'Ann H.', salary: 1500, increase: false,  rise: false,id: 3}
			],
			term: ''
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => ({data: data.filter(item => item.id !== id)}))
	}

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
			rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		});
	}

	onUpdateSearch = (term) => {
		this.setState({term: term});
	}

	render() {
		const {data, term} = this.state;
		const totalEmps = data.length;
		const increasedEmps = data.filter(item => item.increase === true).length;
		const visibleData = this.searchEmp(data, term);

		return (
			<div className="app">
				<AppInfo 
					totalEmps={totalEmps}
					increasedEmps={increasedEmps}/>

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter/>
				</div>

				<EmployeesList 
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;