const employee = {
    name: "Sam",
    streetAddress: "1 Apple St",
}


function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]:value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value;
    return obj;
}

function deleteFromEmployeeByKey(employee,key){
    return{
        ...employee,
        [key]: undefined,
    }
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    employee[key]= undefined;
    return employee;
}
