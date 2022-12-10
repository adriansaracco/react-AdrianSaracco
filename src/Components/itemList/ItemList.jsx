import React from 'react'
import "./itemList.css"
import { Item } from '../item/Item'


export const ItemList = ({items}) => {

  return (
    <div className='Cards-Container'>
    {items.map((element)=>{
        return (
            <Item key={element.Id} element={element}> </Item>
        )})}
    </div>
  )
}