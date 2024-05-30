import React from "react";
import { useDispatch, useSelector} from "react-redux"
import Card from "../card/card.jsx"
import "./home.css"


const Home = ()=>{
    return(
        <div className="home-container">
            <div className="card-home">
                <Card />
            </div>
        </div>
    )
}


export default Home;