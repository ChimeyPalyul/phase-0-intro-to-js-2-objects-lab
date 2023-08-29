const employee = {}
employee.name = 'Sam'
employee.streetAddress = "123 Waterloo Lane"
function updateEmployeeWithKeyAndValue(obj,key,value){
    return{
        ...obj,
        [key]: value,
    };
    }
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(employee,key){
    return{
    ...employee,
    [key]: undefined
    }
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    employee[key] = undefined;
    return employee;
}

