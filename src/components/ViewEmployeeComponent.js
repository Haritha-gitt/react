import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useParams } from "react-router-dom";


const ViewEmployeeComponent = () => {

    const [employees, setEmployees] = useState('')
    const { id } = useParams();

    useEffect(() => {
        getEmployeeById();
    }, [id,getEmployeeById])

    const getEmployeeById = () => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployees(response.data)
            console.log(response.data);
            //let employeeData = response.data
        })
    }

    return (
        <div>
            <h3 className="text-center"> View Employee Details</h3><br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td> {employee.id} </td>
                                    <td> {employee.firstName} </td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewEmployeeComponent;
