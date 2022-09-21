const employee = {
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const nondestructivelyUpdatedEmployee = { ...employee};
    nondestructivelyUpdatedEmployee[key] = value
    return nondestructivelyUpdatedEmployee;
}; 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const trimmedEmployee = {...employee};
    delete trimmedEmployee[key];
    return trimmedEmployee 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee; 
};



