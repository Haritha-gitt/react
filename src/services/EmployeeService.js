import axios from 'axios'

const baseURl = 'http://localhost:8081/api/v1/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(baseURl)
    }

    createEmployee(employee){
        return axios.post(baseURl, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(baseURl + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(baseURl + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(baseURl + '/' + employeeId);
    }
};

export default new EmployeeService();
