import React from 'react'

export const ItemListContainer = (props) => {
    console.log(props);
    return (
        <>
            <h1>{props.greeting}</h1>
        </>
    )
}
