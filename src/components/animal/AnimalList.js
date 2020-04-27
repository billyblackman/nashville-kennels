import React, { useContext, useState, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AnimalForm from "./AnimalForm"

export const AnimalList = ({searchTerms}) => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [matchingAnimals, setFiltered] = useState([])

    useEffect(
        () => {
            if (searchTerms !== "") {
                const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
                setFiltered(subset)
            } else {
                setFiltered([])
            }
        },
        [searchTerms, animals]
    )

    return (
        <>
            <h2>Animals</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("kennel_customer")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Make Appointment</Button>
            <div className="animals">
                {
                    matchingAnimals.map(ani => {
                        const matchingLocation = locations.find(loc => loc.id === ani.locationId)
                        const matchingCustomer = customers.find(customer => customer.id === ani.customerId)

                        return <Animal key={ani.id} animal={ani}
                            customer={matchingCustomer}
                            location={matchingLocation} />
                    })
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Admit Animal
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggle={toggle} />
                </ModalBody>
            </Modal>

        </>
    )
}