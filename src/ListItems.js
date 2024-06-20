import React from 'react'
import { increaseCount,addItem } from './Store'
import { useDispatch } from 'react-redux'

function ListItems(props) {
    let dispatch = useDispatch()
    let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    console.log(props.item)
  return (
    <div>
        <div className='d-flex text-danger p-3 justify-content-between'>
            <div className='flex'>
        <h6>{props.title}</h6>
        <h6>({props.item.length})</h6>
        {/* window + colon(: ;) */}
        </div>
        <p onClick={()=>{
            props.handleData()
        }}>↘️</p>
        </div>

        {props.showItem && props.item.map(function(ele){
            console.log(ele)
            return <div className='flex p-3 justify-between'>
                <div>
                <h6 className='text-green-500 font-bold'>{ele.card.info.name}</h6>
                <p className='text-pink-500'>{ele.card.info.price/100}</p>
                <p className='text-blue-300'>{ele.card.info.ratings.aggregatedRating.rating}</p>
                <p className='text-gray-400' style={{maxWidth:'950px'}}>{ele.card.info.description}</p>
                </div>
                <div>
                    {ele.card.info.imageId ?
                <img src={`${url}${ele.card.info.imageId}`} height="70px" width="120px" className='rounded'/>:''}
                <button className='bg-blue-600 p-1 text-white rounded'onClick={()=>{
                     dispatch(increaseCount(1))
                     dispatch(addItem(ele))
                }}>Add</button>
                </div>
                </div>
        })}
    </div>
  )
}

export default ListItems