import React from 'react';
import NavPanel from "../../subComponents/Primitives/NavPanel";


function ServiceHeadPanel(props) {
    return (
        <div className="flex justify-between">
            <NavPanel/>
            <ContactsPanel title = {props.title}/>
        </div>
    );
}

function ContactsPanel(props) {
    return (
        <div className=" w-full h-auto flex   items-center
                         max-w-[41rem] mt-0 justify-end ml-15
                         xl:justify-between ">
            <h1 className="flex items-center    h-full text-white border-b-2 border-white  tracking-wider justify-center shrink
                           text-lg pb-0 w-auto
                           mr-15
                           xl:mr-0">
                {props.title}
            </h1>
            <div className="hidden border-b-2 border-white h-full ml-12  items-center gap-8 pr-15 shrink-0
                            xl:flex">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <p>+7 981 285 25 75 </p>
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../img/Icons/vk.png")} alt="logo" draggable="false"
                         className="h-5 select-none pointer-events-none"/>
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../img/Icons/tg.png")} alt="logo" draggable="false"
                         className="h-5 select-none pointer-events-none"/>
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="h=1/2 ">
                    <img src={require("../../img/Icons/wp.png")} alt="logo" draggable="false"
                         className="h-5 select-none pointer-events-none"/>
                </a>
            </div>


        </div>
    );
}


export default ServiceHeadPanel;