import React from 'react'

export const PropertyPlaces = ({property, onDelete}) => {
    return (
        <div>
            <h4>{property.place}</h4>
            <p>{property.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(property)}}>Delete</button>
        </div>
    )
}

