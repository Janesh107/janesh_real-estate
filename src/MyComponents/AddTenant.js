import React, {useState} from 'react';

export const AddTenant = ({addTenant}) => {
    const [name, setName] = useState("");
    const [prpname, setPrp] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!name || !prpname){
            alert("Name or Property Name cannot be blank");
        }
        else{
            addTenant(name, prpname);
            setName("");
            setPrp("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add a Tenant</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tenant Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prpname" className="form-label">Property name</label>
                    <input type="text" value={prpname} onChange={(e)=>{setPrp(e.target.value)}} class="form-control" id="prpname"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Tenant</button>
            </form>
        </div>
    )
}
