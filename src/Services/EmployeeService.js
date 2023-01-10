
import states from '../data/states';
import departments from '../data/department';
import employees from '../data/employees';

export default class EmployeeService {
    getStates() {
        return states;
    }

    getDepartments() {
        return departments;
    }
    getEmployees() {
        return JSON.parse(localStorage.getItem('employees'));
    }

    getData() {
        return employees;
    };

    addEmployee(form) {

    }
} 