import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import CommonButton from "../Primitives/CommonButton";


const Left = () => {
    return (
        <main>
            <Main />
        </main>
    );
}

const Main = () => {
    return (
        <div className="flex items-start justify-center min-h-screen
                        md:mt-20       border-white ">

            <ContactsContainer />
        </div>
    );
}


const ContactsContainer = (props) => {
    return (
        <div className="   flex gap-20 lg:gap-3 h-fit grow items-center
          portrait:text-3xl  portrait:flex-col portrait:m-15 portrait:justify-start
          landscape:flex-row     landscape:justify-between landscape:px-10 landscape:py-5 landscape:w-[100vw] ">
            <MediaContainer/>
            <section className="portrait:w-[75%] portrait:h-[50vh] portrait:justify-end
                            landscape:w-[30rem]
                            shrink flex flex-col gap-4">
                <YandexMap/>
                <p className="text-center text-xl ">
                    г. Анапа, ул. Горького, д. 78, офис 11.
                </p>
                <div className=" flex  w-[15rem] self-center
                                portrait:min-h-20
                                landscape:h-16
                                my-4">
                    <CommonButton text="Связаться" isCentral={true}/>
                </div>
            </section>


        </div>
    );
}

const YandexMap = (props) => {
    return (
        <YMaps>
            <div className="h-full w-full" style={{boxShadow: '5px 5px 0px 0px #2C143F' }}>
                <Map height="100%" width="100%" defaultState={{ center: [44.903291, 37.334352], zoom: 13 }}>
                    <Placemark geometry={[44.903291, 37.334352]} />
                </Map>
            </div>
        </YMaps>
    );
};

const MediaContainer = (props) => {
    return (
        <nav className=" h-auto w-auto pb-20 flex flex-col gap-3 items-start
                        landscape:gap-6 landscape:justify-start text-2xl">
            <MediaRow image={require("../../img/Icons/vk.png")} text="@rabotanimator_emocion" href={"https://vk.com/rabotanimator_emocion"}/>
            <MediaRow image={require("../../img/Icons/tg.png")} text="@emocion_animation" href={"https://t.me/emocion_animation"}/>
            <MediaRow image={require("../../img/Icons/wp.png")} text="+7 999 888 77 11" href={"+7 999 888 77 11"}/>
            <MediaRow image={require("../../img/Icons/phone.png")} text="+7 999 888 77 11" href={"+7 999 888 77 11"}/>
            <MediaRow image={require("../../img/Icons/mail.png")} text="emotionmail@gmail.com" href={"+7 999 888 77 11"}/>
        </nav>
    );
}

const MediaRow = (props) => {
    return (
        <div className="h-auto w-auto flex flex-row gap-8 items-center justify-start">
            <img src={props.image} alt="media" draggable="false"
                 className=" w-[2.5rem]  select-none pointer-events-none"/>
            <a href={props.href}>
                <p>{props.text}</p>
            </a>
        </div>
    );
}



export default Left;
