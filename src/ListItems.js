import React from 'react'

function ListItems(props) {
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
            return <div className='flex p-3 justify-around'>
                <div>
                <h6>{ele.card.info.name}</h6>
                <p>{ele.card.info.price/100}</p>
                <p>{ele.card.info.ratings.aggregatedRating.rating}</p>
                <p style={{maxWidth:'950px'}}>{ele.card.info.description}</p>
                </div>
                <img src={`${url}${ele.card.info.imageId}`} height="70px" width="120px" className='rounded'/>
                
                </div>
        })}
    </div>
  )
}

export default ListItems