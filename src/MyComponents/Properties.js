import React from 'react'
import { PropertyPlaces } from './PropertyPlaces';

export const Properties = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Property List</h3>
            {props.properties.length === 0 ? "No Properties to display" :
                props.properties.map((property) => {
                    return (
                        <>
                            <PropertyPlaces property={property} key={property.sno} onDelete={props.onDelete} /> <hr/>
                        </>
                    )

                })
            }

        </div>
    );
}
