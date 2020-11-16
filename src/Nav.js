import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {

    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            } else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=24"
            />
            <img
                className="nav__avatar"
                src="https://www.freepnglogos.com/uploads/discord-logo-png/anthrocon-twitter-quot-discord-user-wanna-21.png"
            />
        </div>
    )
}

export default Nav
