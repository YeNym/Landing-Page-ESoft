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
            <nav className="fixed
                        bottom-0 bg-gradient-to-b from-[#362D61] to-[#593267]
                         w-full
                         landscape:px-52
                          portrait:px-15 h-16
                          flex justify-between items-center gap-8">

                <Link to={"/"}>
                    <img src={require("../../img/Icons/Home.png")} alt="logo" draggable="false"
                         className=" h-8 w-8   select-none pointer-events-none "/>
                </Link>
                <Link to={"/services"}>
                    <img src={require("../../img/Icons/Services.png")} alt="logo" draggable="false"
                         className="h-7 w-10   select-none pointer-events-none "/>
                </Link>
                <Link to={"/contacts"}>
                    <img src={require("../../img/Icons/Contact.png")} alt="logo" draggable="false"
                         className=" h-8 w-8   select-none pointer-events-none "/>
                </Link>

            </nav>
    );
}





export default NavPanel;