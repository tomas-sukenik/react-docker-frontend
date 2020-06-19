import React from 'react'

const heroDetail = (props) => {
    return (
        <>
            <h3>Hero Detail</h3>
            <p><label>name:</label>{props.name}</p>
            <p><label>id:</label>{props.id}</p>
        </>
    )
}

export default heroDetail;