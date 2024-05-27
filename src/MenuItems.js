import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItems from './ListItems'
import useGetData from './useGetData'

function MenuItems() {
    // let [MenuItem,setMenuItem] = useState([])
    let [showIndex,setShowIndex] = useState(null)

    let id = useParams()
    console.log(id.restId)
    let url=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id.restId}`
    //console.log(url)
    // async function getData(){
    //     let data = await fetch(url)
    //     let jsonData = await data.json()

    let jsonData = useGetData(url)

        let menuCards = jsonData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
       console.log(menuCards)
        console.log(menuCards)
        let filterMenuCards = menuCards?.filter(function(element){
            return element.card.card['@type'] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        })
        console.log(filterMenuCards)
        // setMenuItem(filterMenuCards)

    // }
    // useEffect(()=>{
    //     getData()
    // },[])


  return (
    <div>
        {filterMenuCards?.map(function(ele,index){
            let handleData =()=>{
                showIndex !== index ? setShowIndex(index) : setShowIndex(null)
            }
            return (
                <div>
                    {/* <h6 className=''>{ele.card.card.title}</h6> */}
                    {/* <h6>{MenuItem.length}</h6> */}

                    

                    <ListItems item={ele.card.card.itemCards} title={ele.card.card.title} showItem={index === showIndex ? true : false} handleData={handleData}/>
                </div>
            )
        })}
    </div>
  )
}

export default MenuItems