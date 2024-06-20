import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteItem } from './Store'

function Cart() {
  let dispatch = useDispatch()
  let storeData = useSelector((state)=>{
    //console.log(state)
    return (state.cart.cartData)
  })
  let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div>
      {storeData.map(function(ele){
        return <div className='flex p-3 justify-around'>
        <div>
        <h6 className='text-green-500 font-bold'>{ele.card.info.name}</h6>
        <p className='text-pink-500'>{ele.card.info.price/100}</p>
        <p className='text-blue-300'>{ele.card.info.ratings.aggregatedRating.rating}</p>
        <p className="text-gray-400" style={{maxWidth:'950px'}}>{ele.card.info.description}</p>
        </div>
        <div>
        <img src={`${url}${ele.card.info.imageId}`} height="70px" width="120px" className='rounded'/>
        <button className='bg-pink-600 p-1 text-white rounded mt-2 ' onClick={()=>{
          dispatch(deleteItem(ele.card.info.id))
        }}>Remove</button>
        </div>
        </div>
      })}
    </div>
  )
}

export default Cart


