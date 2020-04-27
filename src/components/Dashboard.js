import React, {useState} from "react"
import "./Kennel.css"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"


export const Dashboard = () => {
    const [searchTerms, setTerms] = useState("")
    
    return (
            <>
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>

                <h2>Locations</h2>
                <LocationProvider>
                    <LocationList />
                </LocationProvider>

                <h2>Animals</h2>
                <AnimalProvider>
                    <LocationProvider>
                        <CustomerProvider>

                        <div className="searchContainer">
                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />
                        </div>

                        </CustomerProvider>
                    </LocationProvider>
                </AnimalProvider>

                <h2>Customers</h2>
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>

                <EmployeeProvider>
                    <LocationProvider>
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </>
        )
}