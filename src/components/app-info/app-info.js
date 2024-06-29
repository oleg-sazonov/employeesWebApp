import './app-info.css'

const AppInfo = ({totalEmps, increasedEmps}) => {
	return (
		<div className="app-info">
			<h1>Облік співробітників у компанії N</h1>
			<h2>Загальна кількість співробітників: {totalEmps}</h2>
			<h2>Премію отримають: {increasedEmps}</h2>
		</div>
	);
};

export default AppInfo;