import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Locations.css"

export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="locations">
        {
            employees.map(emp => <Employee key={emp.id} employees={emp} />)
        }
        </div>
    )
}