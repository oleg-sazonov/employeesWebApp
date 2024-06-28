import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

	const elements = data.map((item) => {
		const {id, ...itemProps} = item;
		return (
			// <EmployeesListItem name={item.name} salary={item.salary}/>
			<EmployeesListItem 
				key={id} //this id is got from props -> (data -> item[index] -> id)
				{...itemProps}
				onDelete={() => onDelete(id)}
				onSubmit={() => console.log('add employee')}/> // this func'll go to EmployeesListItem 
		);
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
};

export default EmployeesList;