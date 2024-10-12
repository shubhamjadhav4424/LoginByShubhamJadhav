import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){
    let location=useLocation();
    let navigate=useNavigate();

    function onClickHandler(){
        navigate("/")
}

    return(
        <>
        <h1>Username:{location.state.x}</h1>
        <h1>Password:{location.state.y}</h1>
        <h1>Confirm Password:{location.state.z}</h1>
        <button onClick={()=>onClickHandler()}>Home</button>
        </>
    )
}
export default Home;
