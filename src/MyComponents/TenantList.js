import React from 'react'

export const TenantList = ({tenant, onDelete}) => {
    return (
        <div>
            <h4>{tenant.name}</h4>
            <p>{tenant.prpname}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(tenant)}}>Delete</button>
        </div>
    )
}
