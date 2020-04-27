import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import AnimalForm from "./AnimalForm"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (

        <>
            <div className="fakeLink href" onClick={toggle}>Admit Animal</div>

            <div className="animals">
            {
                animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id === animal.locationId)

                return <Animal key={animal.id}
                        location={clinic}
                        owner = {owner}
                        animal={animal} />
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