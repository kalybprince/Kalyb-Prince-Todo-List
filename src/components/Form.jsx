import React, { useState } from 'react';

const Form = (props) => {
    const [listItem, setListItem] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        props.arrayPasser({"task": listItem, "checked": false})
        setListItem("");
    }

    return(
        <form onSubmit={ submitHandler }>
            <input type="text" onChange={ (e) => setListItem(e.target.value) } value={listItem}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;