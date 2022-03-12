import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'William J.', salary: 1500, increase: false, rise: false, id: 1},
                {name: 'Elizabeth H.', salary: 2100, increase: false, rise: false, id: 2},
                {name: 'Carl S.', salary: 900, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name,salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                } return item;
            })
        }))
    }
   
    
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className='app'>
                <AppInfo
                employees={employees}
                increased={increased}
                />
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default App;