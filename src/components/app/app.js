import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
    const data = [
        {name: 'William J.', salary: 1500, increase: false, id: 1},
        {name: 'Elizabeth H.', salary: 2100, increase: true, id: 2},
        {name: 'Carl S.', salary: 900, increase: false, id: 3}
    ]
    return (
        <div className='app'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;