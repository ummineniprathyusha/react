import Header from "./Header";
// import Body from './Body';
import React,{Suspense,createContext} from "react"
import Counter from "./Counter";
import { createBrowserRouter ,Outlet} from "react-router-dom";
import Offers from "./Offers";
// import Help from "./Help";
import Cart from "./Cart";
import MenuItems from "./MenuItems";
// import { createContext } from "react";
let Body = React.lazy(()=>import('./Body'))
let Help = React.lazy(()=>import('./Help'))


export let context = createContext()
let {Provider} = context

function App(){
    return (
        <div>
 <Header/>
 <Outlet/>
        </div>
    )
}

export default App 
let name = "New"
export let appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Provider value={name}>
                    <Suspense fallback={<h1>Loading...</h1>}>
                    <Body />
                    </Suspense>
                </Provider>
            },
            {
                path:'/Offers',
                element:<Counter/>
            },
            {
                path:'/Help',
                element:
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Help/>
                </Suspense>
            },
            {
                path:'/Cart',
                element:<Cart/>
            },
            {
                path:'/restaurants/:restId',
                element:<MenuItems/>
            }
        ]
    }
   
])
