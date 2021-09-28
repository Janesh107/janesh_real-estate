import React, {useState} from 'react';

export const AddProperty = ({addProperty}) => {
    const [place, setPlace] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!place || !desc){
            alert("Place or Description cannot be blank");
        }
        else{
            addProperty(place, desc);
            setPlace("");
            setDesc("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add a Place</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Place</label>
                    <input type="text" value={place} onChange={(e)=>{setPlace(e.target.value)}} class="form-control" id="place" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Place</button>
            </form>
        </div>
    )
}
