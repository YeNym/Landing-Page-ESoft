import React from 'react';

function ServiceHeadPanel(props) {
    return (
        <div className="flex justify-between">
            <ContactsPanel title = {props.title}/>
        </div>
    );
}

function ContactsPanel(props) {
    return (
        <div className="  h-auto flex   items-center
                         w-full mt-0 justify-between
                         portrait:sm:mx-24 portrait:mx-10
                         landscape:mx-10 py-5
                         xl:justify-between ">
            <h1 className="flex items-center
                           landscape:text-2xl
                           portrait:text-3xl
                           h-full text-white border-b-2 border-white  tracking-wider justify-center shrink
                           pb-[0.5rem] w-auto
                           mr-15
                           xl:mr-0">
                {props.title}
            </h1>
            <div className="flex  border-white h-full ml-12  items-center gap-8  shrink-0
                            ">

                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../img/Icons/vk.png")} alt="logo" draggable="false"
                         className="h-7 select-none pointer-events-none"/>
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../img/Icons/tg.png")} alt="logo" draggable="false"
                         className="h-7 select-none pointer-events-none"/>
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="h=1/2 ">
                    <img src={require("../../img/Icons/wp.png")} alt="logo" draggable="false"
                         className="h-7 select-none pointer-events-none"/>
                </a>
            </div>


        </div>
    );
}


export default ServiceHeadPanel;
