
import states from '../data/states';
import departments from '../data/department';

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
        return {
            data: [
                {
                    lastName: 'JULME',
                    firstName: 'Wilnie',
                    startDate: '08/01/2023',
                    department: 'ALASKA'
                },
                {
                    firstName: 'Samano',
                    lastName: 'CASTRE'
                },
                {
                    firstName: 'Victoria',
                    lastName: 'CASTRE'
                },
                {
                    firstName: 'Mika',
                    lastName: 'JULME'
                },
                {
                    firstName: 'Roland',
                    lastName: 'PIERRE'
                },
                {
                    firstName: 'La cayenne',
                    lastName: 'Demos'
                },
                {
                    firstName: 'Anderson',
                    lastName: 'PIERRE'
                },
                {
                    firstName: 'Wilkyt',
                    lastName: 'CASTOR'
                },
                {
                    firstName: 'Aline',
                    lastName: 'JULME'
                },
            ],
            columns: [
                { title: 'First Name', data: 'firstName' },
                { title: 'Last Name', data: 'lastName' },
                { title: 'Start Date', data: 'startDate' },
                { title: 'Department', data: 'department' },
                { title: 'Date of Birth', data: 'dateOfBirth' },
                { title: 'Street', data: 'street' },
                { title: 'City', data: 'city' },
                { title: 'State', data: 'state' },
                { title: 'Zip Code', data: 'zipCode' },
            ]
        }
    };

    addEmployee(form) {

    }
} 