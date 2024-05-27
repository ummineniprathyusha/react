import React from 'react'
import { useContext } from 'react'
import { context } from './App'

function Card(props) {
  let data = useContext(context)
  console.log(data)
    let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div className='p-2'>
    <img src={`${url}${props.item.info.cloudinaryImageId}`} className=" w-24 h-24"/>
    <h6 style={{maxWidth:"150px"}}>{props.item.info.name}</h6>
    <p>{props.item.info.avgRating}</p>
    <p>{props.item.info.areaName}</p>
    <p>{props.item.info.sla.slaString}</p>
    <h1>{data}</h1>
    </div>
  )
}
export default Card

export function HOC(card){
  return function(props){
    return <div>
      <card {...props}/>
      <h2 className='bg-pink-500 text-white p-1 w-11 ml-14'></h2>
    </div>
  }
}