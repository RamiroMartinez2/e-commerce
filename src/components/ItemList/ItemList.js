import React from 'react'
import Item from '../Item/Item'
import './ItemList.scss'


const ItemList = (props) => {
   
    return (
        <main className="main">
           {
               props.items?.map((x)=> <Item item={x}/>)
           }
        </main>
    )
}

export default ItemList
