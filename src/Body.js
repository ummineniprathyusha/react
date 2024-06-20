import React, { useState,useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { HOC } from './Card'

const Body = (props) => {
  let [restaurantsData,setRestaurantsData]=useState([])
  let [searchItem,setSearchItem] = useState('')
  let [filteredData,setFilteredData] = useState([])
  let HocCard = HOC(Card)
    async function getData(){
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        let jsonData = await data.json()
        console.log(jsonData)
        let result = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        setRestaurantsData(result)
        setFilteredData(result)
        console.log(result)
    }
useEffect(()=>{
  getData()
},[])  

  return (
    <div>
      <input className='m-2 border-pink-600 border-2 rounded-full p-1' type='text' onChange={(event)=>{
   setSearchItem(event.target.value)
      }}/>
      <button onClick={()=>{
        let FilteredItems =restaurantsData.filter(function(ele){
          console.log(ele)
            return ele.info.name.toUpperCase().includes(searchItem.toUpperCase())
        })
        console.log(FilteredItems)
         setFilteredData(FilteredItems)
      }} className="bg-blue-700 text-white p-1 rounded m-1  hover:bg-rose-300">getData</button>
 <div className='d-flex flex-wrap'>
      {filteredData.map(function(ele,index){
         return <Link to={`/restaurants/${ele.info.id}`}>{ele.info.veg?<HocCard item={ele} key={index}/> :<Card item={ele} key={index}/>}</Link>
      })}
    </div>
    </div>   
  )
}
export default Body

