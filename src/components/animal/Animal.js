import React from "react"

export default ({ animal, owner, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__customer">{owner.name}</div>
        <div className="animal__location">{location.name}</div>
    </section>
)