import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="d-flex justify-content-between">
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" className=" w-24 h-24"/>
        <ul className="d-flex">
            <li className="p-3"><Link to="/">Home</Link></li>
            <li className="p-3"><Link to="/Offers">Offers</Link></li>
            <li className="p-3"><Link to="/Help">Help</Link></li>
            <li className="p-3"><Link to="/Cart">Cart</Link></li>
        </ul>
    </div>
  )
}



