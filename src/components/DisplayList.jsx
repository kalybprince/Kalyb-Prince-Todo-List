import React, { useState } from 'react';

const DisplayList = (props) => {
    return(
        <>
            <ul>
                {
                    props.array.map( (item, i) =>
                        <div className="d-flex flex-row">
                            {
                                (item.checked) ?
                                <li style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} key={ i }>{ item.task }</li> :
                                <li key={ i }>{ item.task }</li>
                            }
                            <input type="checkbox" checked={ item.checked } onChange={(e) => props.checkItem(e, i) } />
                            <input type="button" value="Delete" onClick={() => props.deleteItem(i) }/>
                        </div>
                    )
                }
            </ul>
        </>
    )
}

export default DisplayList;