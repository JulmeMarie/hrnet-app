import { createSlice } from '@reduxjs/toolkit';
import actions from './action';

const employeeSlice = createSlice({
    name: "employee_state",
    initialState: {
        employees: [],
        displayModal: false
    },
    reducers: actions
});

export const { setEmployee, openModal, closeModal } = employeeSlice.actions;

export default employeeSlice.reducer;//To create store