const actions = {
    setEmployee: (state, action) => {
        state.employees.push(action.payload);
        return state;
    },
    openModal: (state) => {
        state.displayModal = true;
        return state;
    },
    closeModal: (state) => {
        state.displayModal = false;
        return state;
    },
};

export default actions;