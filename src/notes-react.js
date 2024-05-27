import React, { Children, useContext, useMemo } from "react"

----------------------------REACT------------------------------------

// -----------------------------Basic--------------------------------
1)What is React?
React is an open-source front-end JavaScript library that is used for building user
interfaces, especially for single-page applications. It is used for handling view layer for web
and mobile apps. React was created by Jordan Walke, a software engineer working for
Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in
2012.

2)// index.js (js code)
by using js methods: js & React:

let heading = React.createElement('h1',{class:'Heading'},'Heading in React')
let para = React.createElement('p',{class:'Heading'},'para in React')
let conatiner = React.createElement('div',{},heading,para)
let heading = <h1>Heading in html</h1>
let ele = document.getElementById('root')  // this root id in html 
let rootEle = ReactDOM.createRoot(ele)     // ReactDOM is used to display the output.
// rendor -> it to define react component.
        //    rendor has only one parent element.
        //    it write only in ().
        //    after render we cant write code.. error.
        //    jsx- JavaScript XML
rootEle.render(<div>
  <h1>heading</h1>
  <p>para</p>
</div>)
//jsx- JavaScript XML



3)  User.js
// import -> to get
// export -> to send -> 2 types of export 1)default export & 2)named export
// 1)default export -> only one type of function we can export
// 2)named export ->  multiple functions we can take..the function name & calling name have to be same, 
                    //   the calling function defintely in {}.

// return -> it stops the execution of a function & returns a value.
        //    & in return only one parent element it will take.
        //  after return statement if we write any code it will not take..it shows error.
        // if we want to werite any code after return by using "()" we can write inside ().
        //  in return JSX code .

// ex-1: User.js
export default function User(){
    return(
        <div>
        <h1>Welcome to React</h1>
        <p>Lets learn about react more...</p>
        </div>
    )
}
export function Person(){
    return(
        <div>
            <p>1.js</p>
            <p>2.XML</p>
        </div>
    )

//  React : index.js: (React code)
// import -> 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
//------------------------ for render -- only 1 parent elementit will take.
//     App() -> it is a React function calling type. 
//              app() -> function call
//              App() -> first letter Caps for React function call.
rootEle.render(  
App()
)

// App.js : 
import UserOne from './User' //defalut import - we can use any type of function name here.(only one default import should take)
import {Person} from './User' //named import use {}- only particular same function name only have to use here.(multiple imports)

export default function App(){
    return UserOne()
}


4)         10-5-24
// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(
  {App()}  // while we see js code then write in  react as use {}.
)

// App.js
import User from "./User";
import { Person } from "./User";
export default function App(){
// here we can call function in 3 ways:
// 1) <User/> -> self closing tag
// 2) <User></User> ->open & close tag
// 3)  {User()}
    return (
        <User/>
    )
}

// ex-1
function sum(a,b){
    return a+b
}
sum(10,20)
sum(30,50)

// App.js
import User from "./User";
import { Person } from "./User";
export default function App(){
    return (
        <div>
        <User/>
        <User/>
</div>
    )
}

// props: it is a data , to send parent component to child component data.
App()-parent
User()-Child
import User from "./User";
import { Person } from "./User";
export default function App(){
    return (
        <div>
        <User name="Prayan" age={24}/>  //string defenetly in quotes or flower braces {}.
        <User name="Manu" age={2}/>
</div>
    )
}
// User()
// props -> data type is  object
export default function User(props){
    console.log(props)
    return(
        <div>
        <h1>{props.person.name}</h1> // {}
        <p>{props.person.age}</p>
        </div>
    )
}

// App.js : 
import User from "./User";
import { Person } from "./User";
function App(){
    let  userDetails ={
        name: "Prayan",
        age:25,
        email:"prayan@gmail.com"
    }
    return(
        <div>
            <User person={userDetails}/>
        </div>
    )
}

//  App.js
import User from "./User";
import { Person } from "./User";
function App(){
    let  userDetails =[
        {
        name: "Prayan",
        age:25,
        email:"prayan@gmail.com"
        }
        {
            name: "Manu",
            age:2,
            email:"manu@gmail.com"
        }
        ]
    // map method inside div
    // map(callback function)
    // map(function(ele,index,array)) each obj=element, index-0,1..., array[]
    return(
        <div>
{userDetails.map(function(ele){
   return <User person={ele}/>
})}
        </div>
    )
}

// Styles::
inline :
style={{color:"red"}} //{{}}

internal:
let styleList={
    color:"blue"
}

external: index.css import to ./user.js 
import to ./user.css for all it will apply .
h1{
    color: green;

}
first priority for internal ...


react-Es7/redux/react/native
rafce
rfce

// Swiggy -> inspect
Elements -> HTML Code 
Console  -> js code 
Source   -> to debug the code 
Network  -> all networks url available here . 
         -> select Fetch/XHR -> it shows only url keys . 
         -> select 1st link. link(swiggy url)
         -> copy swiggy url. 
         -> paste in body.js  

Preview  -> swiggy url backend data details are available here. 


// ---------------Project-1-----------------------------------Swiggy-----------

----------------------------SWIGGY BLOG == Project-1------------------
11-05-2024(1st day of Project)
index.js
// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import index from './index.css'

let ele = document.getElementById("root")
let rootEl= ReactDOM.createRoot(ele)
rootEl.render(
  <div>
    <App/>
  </div>
)

// App.js
import Header from "./Header";
import Body from './Body';

export default function App(){
    return (
        <div>
 <Header/>
 <Body/>
        </div>
    )
}


// Header.js
export default function Header() {
    return (
      <div className="d-flex justify-content-between">
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" weight="100px" height="60px"/>
          <ul className="d-flex">
              <li className="p-3">Home</li>
              <li className="p-3">Offers</li>
              <li className="p-3">Help</li>
              <li className="p-3">Cart</li>
          </ul>
      </div>
    )
  }
  
  
//  Body.js
import React from 'react'

const Body = () => {
async function getData(){
  let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  let jsonData = await data.json()
  let result = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  console.log(result)
}
getData()
  return (
    <div>
Body
    </div>
  )
}
export default Body 

// index.css
h1{
    color: black;
    background-color: azure;
}
li{
    list-style: none;
}

// example-1
// Counter.js
import Header from "./Header";
import Body from './Body';
import Counter from "./Counter";

export default function App(){
    return (
        <div>
 <Header/>
 <Counter/>
        </div>
    )
}
// App.js
import Header from "./Header";
import Body from './Body';
import Counter from "./Counter";

export default function App(){
    return (
        <div>
 <Header/>
 <Counter/>
        </div>
    )
}

 methods:
FETCH - async code 
promises -first empty obj 1)pending,2)resolve(success),3)reject 
await -> it brings data(data vachey varuku wait cheyali)    reject-> error(network issue , code mistake)
json -> readable 

rerendor -> values change avvali click chesinapudu
state -> component lo unna data-> data anedhi adhey component ki data aithundhi
         count anedhi counter ki state. 

props-> immutable -> change chayalem. 



useState -> it is hook , component ni rerender chesthundhi. 
Hooks ->() methods) functionality ni easy cheyataniki. 
      let [count,setCount]= useState(0)
setCount -> it is function, to change values, have to call a function.
count -> set visible fixed value first = useState(0). 


template iterals -> {} />(backticks `` use chesthundhi)
multi lines of strings rayataniki use chestham backticks matramey use cheyali ``
3 beefits ->
1)multiple lines string code by using backticks. 
2)it's ila rayalanna, quotes use cheyalanna `` back ticks use cheyali. 
3)lat a=10, b=20, console.log('a'+'b' + '=' +(a+b))->long  line of code
console.log(`a+b=${a+b}`)-> easy benefit of writing code. 


useEffect- hook -> call back function , it controlls the flow  of items
3 ways: 
1) callback function.
2)callback function, []empty Array. 
3)callback function, [count]

includes method: it checks condition. 


wordpress.. lo code samples... 


5/14/2024 
// Card.js
import React from 'react'
function Card(props) {
    let url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
  return (
    <div className='p-2'>
    <img src={`${url}${props.item.info.cloudinaryImageId}`} height='100px' width='150px' className='rounded'/>
     <h6  style={{maxWidth:'150px'}}>{props.item.info.name}</h6>
     <p>{props.item.info.avgRating}</p>
     <p>{props.item.info.areaName}</p>
     <p>{props.item.info.sla.slaString}</p>
     </div>
  )
}
export default Card

// Body.js
import React, { useState,useEffect } from 'react'
import Card from './Card'
const Body = () => {
  let [restaurantsData,setRestaurantsData]=useState([])
  let [searchItem,setSearchItem] = useState('')
  let [filteredData,setFilteredData] = useState([])
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
      <input type='text' onChange={(event)=>{
   setSearchItem(event.target.value)
      }}/>
      <button className='m-2' onClick={()=>{
        let FilteredItems =restaurantsData.filter(function(ele){
          console.log(ele)
            return ele.info.name.toUpperCase().includes(searchItem.toUpperCase())
        })
        console.log(FilteredItems)
        setFilteredData(FilteredItems)
      }}>getData</button>
 <div className='d-flex flex-wrap'>
      {filteredData.map(function(ele){
         return <Card item={ele}/>
      })}
    </div>
    </div>  
  )
}
export default Body


15th - 05- 2024:
routing:it is a library. 
install react router->command-> npm i react-router-dom (in terminal )-o/p in package.json 
app.js routing code...
1.method: input kindha only array[]->multiple objects. 
import {createBrowserRouter} from "react-router-dom"
export default App
createBrowserRouter([
    {
        path:'/',    ...........//url m kavalo 
        element:<App/> ----//inbuilt elements 
    },
    {
    path:'/offers',    
    element:<Offers/> 
    childern: it is a key. 
    }
])
Offers.js 
Cart.js 
Help.js 
import routerProvider in index.js 
it is a component 
// Header.js
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="d-flex justify-content-between">
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" weight="100px" height="60px"/>
        <ul className="d-flex">
            <li className="p-3"><Link to="/">Home</Link></li>
            <li className="p-3"><Link to="/Offers">Offers</Link></li>
            <li className="p-3"><Link to="/Help">Help</Link></li>
            <li className="p-3"><Link to="/Cart">Cart</Link></li>
        </ul>
    </div>
  )
}
// App.js
import Header from "./Header";
import Body from './Body';
import Counter from "./Counter";
import { createBrowserRouter ,Outlet} from "react-router-dom";
import Offers from "./Offers";
import Help from "./Help";
import Cart from "./Cart";

function App(){
    return (
        <div>
 <Header/>
 <Outlet/>
        </div>
    )
}
export default App 
export let appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/Offers',
                element:<Offers/>
            },
            {
                path:'/Help',
                element:<Help />
            },
            {
                path:'/Cart',
                element:<Cart/>
            }
        ]
    }
   
])
// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import index from './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App'

let ele = document.getElementById("root")
let rootEl= ReactDOM.createRoot(ele)
rootEl.render(
  <div>
  <RouterProvider router={appRouter}></RouterProvider>
  </div>
)

23-05
props drilling

methods:
useContext Hook 

Provider component 

custom Hooks:
1)useGetData 
import { useEffect, useState } from "react"
import MenuItems from "./MenuItems"
function useGetData(){
    let [data,setData] = useState([])

    async function getData(){
        let apiData = await fetch(url)
        let jsonData = await apiData.json()
        setData(jsonData)
    }
    useEffect(()=>{
        getData()
    },[])
    return data
}
export default useGetData 

useGetData in MenuItems.js 
import useGetData from 


24-05
higher order component:(HOC):
diffing algorithm react:
reconsialation:
keys:
tree shaking:
hot module management:
webpack:



25-05
Hooks:-named inputs - it is there in react libraries. 
1)useMemo: highly calculation memory, it returns a memorized value.
              it does not need to be recalculated. (within the useMemo)
           (component rerender aina eveerytime it will not execute)

2)useRef: it  allows to directly create a reference to the DOM element in the functional componenet. 
          to access the DOM element in a more efficient way as comapred to simple refs. 
          it has inbulit prop "ref". 
          tag ni easyga select chesukovalantey useRef use chestham. 
          "current.innerText" property. 
          <input type="text" ref={data} className="border-pink-500 border-2"/>
           undefined- ?
          focus: useEffect(()=>{data.current.focus()},[])

3)useReducer: it accepts any data types. 
              function lo logic 
              (state,input)=>
              return chesedhi - [variable,dispath(function)]
              useReducer(intialValue,0)


useMemo: Counter.js 
import React from 'react'
import { useState, useMemo } from 'react'

function Counter() {
  let [count, setCount]=useState(0)
  let num1 = 89765643
  let num2 = 56787653
  let value = useMemo(()=>{
    console.log(numl*num2)
    return numl*num2
  }, [num1,num2])
  console.log(numl*num2)
  return (
    <div>
      <h2>{count}/h2>
      <button onClick={()=>{
        setCount(count+=1)
      }} className='bg-green-500 p-1 text-white rounded'>increase</button>
      <h1>{value}</h1>
    </div>
  )
}
    

export default Counter


focus, useRef : counter.js:
import React from 'react'
import { useState, useRef, useEffect } from 'react'

function Counter() {
  let [count, setCount]=useState(0)
  let data = useRef()
  console.log(data?.current?.value)
    useEffect(()=>{
      data.current.focus()
    },[])
    
  return (
    <div>
      
      <button onClick={()=>{
        setCount(count+=1)
      }} >increase</button>
      <input type="text" ref={data} className='border-pink-500 border-2'/>
    </div>
  )
}
    

export default Counter


27-05--------------------- 
lazy loading:
npm run build 