export class EmployeeModel {
    constructor(firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.startDate = startDate;
        this.department = department;
        this.dateOfBirth = dateOfBirth;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}