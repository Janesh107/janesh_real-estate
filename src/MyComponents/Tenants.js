import React from 'react'
import { TenantList } from './TenantList';

export const Tenants = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Tenants List</h3>
            {props.tenants.length === 0 ? "No tenants to display" :
                props.tenants.map((tenant) => {
                    return (
                        <>
                            <TenantList tenant={tenant} key={tenant.sno} onDelete={props.onDelete} /> <hr/>
                        </>
                    )

                })
            }

        </div>
    );
}
