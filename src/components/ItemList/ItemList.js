import React from 'react'
import Item from '../Item/Item'


const ItemList = (props) => {
   
    return (
        <div>
           {
               props.items?.map((x)=> <Item item={x}/>)
           }
        </div>
    )
}

export default ItemList
