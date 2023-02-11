
import states from '../data/states';
import departments from '../data/department';
import { EmployeeModel } from '../models/EmployeeModel';
import { columns } from '../data/columns';

export default class EmployeeService {

    getStates() {
        return states;
    }

    getDepartments() {
        return departments;
    }

    formatData(employees) {
        if (employees === null) return null;

        let employeesJSON = [];

        employees.forEach(employee => {
            employeesJSON.push(JSON.parse(employee));
        });

        return {
            columns: columns,
            data: employeesJSON
        };
    };
    isFormValid(form) {
        let formData = new FormData(form);
        let valid = true;
        formData.forEach(field => {
            if (!field) {
                valid = false;
            }
        });
        return valid;
    }

    createEmployee(form) {
        let formData = new FormData(form);
        return new EmployeeModel(
            formData.get("first-name"),
            formData.get("last-name"),
            formData.get("date-of-birth"),
            formData.get("start-date"),
            formData.get("street"),
            formData.get("city"),
            formData.get("state"),
            formData.get("zip-code"),
            formData.get("department-button")
        );
    }
} 