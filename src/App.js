import Header from "./Header";
import Body from './Body';
import Counter from "./Counter";
import { createBrowserRouter ,Outlet} from "react-router-dom";
import Offers from "./Offers";
import Help from "./Help";
import Cart from "./Cart";
import MenuItems from "./MenuItems";
import { createContext } from "react";

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
let name = "Manu"
export let appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Provider value={name}>
                    <Body />
                </Provider>
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
            },
            {
                path:'/restaurants/:restId',
                element:<MenuItems/>
            }
        ]
    }
   
])
