import '../../../App.css';
import React from "react";
// import React, { useEffect, useState } from 'react';
// import Header from "../subComponents/MainPage/HeadPanel";
// import LeftPanel from "../subComponents/MainPage/LeftPanel";
// import RightPanel, {MainRight} from "../subComponents/MainPage/RightPanel";
// import MainPhoto from "../subComponents/MainPage/MainPhoto";
import NavPanels from "../../subComponentsMobile/Primitives/NavPanel";
import CommonButton from "../../subComponentsMobile/Primitives/CommonButton";
import RightPanel from "../../subComponentsMobile/MainPage/RightPanel"
function MainPage(){
    return(
        <div>
            <div className="bg-no-repeat w-full  landscape:flex-row bg-gradient-to-b from-[#45508E] via-[#35295C] to-[#350C43]">

                <div className=" flex flex-end justify-center portrait:relative border-b-4 border-softPurple">

                    <div className="portrait:hidden ">
                        <MainPhotos/>
                    </div>
                    <div className="landscape:hidden ">
                        <CenterPhoto/>
                    </div>

                    <div className="landscape:flex landscape:justify-center landscape:items-center portrait:absolute portrait:top-[4rem]">
                        <Tablet/>
                    </div>
                </div>
                <RightPanel/>

            </div>
            <NavPanels/>
        </div>
    );
}

function Tablet(){
    return(
        <div className="flex  items-center">
            <div className=" flex justify-center  max-h-full  rounded-[1rem] bg-lightPurpule w-[24rem] h-[35rem] bg-opacity-14 mx-[0.5rem]
                                 portrait:p-[2rem] portrait:w-auto portrait:h-auto
                                 ">

                <div className=" flex flex-col  justify-center items-center">
                    <div className="border border-white p-[1rem] landscape:p-[1rem]
                                    text-white  rounded-[0.5rem] flex flex-col
                                    items-center gap-[1rem] justify-center">

                        <div className="flex flex-row landscape:flex-col gap-[2rem] items-center justify-center">
                            <div className="h-[8rem] w-[8rem]">
                                <img className=" min-w-[100%]" src={require("../../img/MainPage/mainLogo.png")} alt="mainPhoto"/>
                            </div>

                            <p className="w-[20rem] text-3xl portrait:w-[50vw] portrait:text-3xl">Разработка дизайна любой сложности, магазинов, создание чат-ботов, задание
                                общей концепции для каналов, сообществ и социальных сетей</p>
                        </div>

                        <div className="CTAsConteiner h-16 w-40 mb-[0.5rem] text-white ">
                            <CommonButton isCentral={true} text="Связаться" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
function MainPhotos(){
    return(
        <div className="items-end flex flex-end ">
            <div className=" w-full shrink-0 overflow-hidden ">
                <img className=" w-auto  h-screen" src={require("../../img/MainImage/MainPageMobile.png")} loading="lazy" alt="mainPhoto"/>

            </div>
        </div>
    );
}
function CenterPhoto(){
    return(
        <div>
            <div className="items-end flex h-screen grow flex-end ">
                <div className="overflow-hidden ">
                    <img className="w-[100vw] shrink-0 " src={require("../../img/MainPage/main.png")} loading="lazy" alt="mainPhoto"/>

                </div>
            </div>
        </div>
    );
}

export default MainPage;
