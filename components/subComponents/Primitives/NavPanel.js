import {Link} from "react-router-dom";
import React from "react";

function NavPanel(props) {
    return (
        <>
            <CommonMenu/>
        </>
    );
}

function CommonMenu() {
    return (
            <nav className="flex  border pr-12 h-20 border-white  items-center gap-8 shrink-0">

                <Link to={"/"}>
                    <img src={require("../../img/Icons/logo.png")} alt="logo" draggable="false"
                         className="ml-15 h-16 min-w-13.5   select-none pointer-events-none "/>
                </Link>
                <Link to={"/"}> <p className="transition duration-300 ease-in-out hover:underline underline-offset-4">главная</p> </Link>
                <Link to={"/services"}> <p className="transition duration-300 ease-in-out hover:underline underline-offset-4">услуги</p> </Link>
                <Link to={"/contacts"}> <p className="transition duration-300 ease-in-out hover:underline underline-offset-4">контакты</p> </Link>
            </nav>
    );
}





export default NavPanel;