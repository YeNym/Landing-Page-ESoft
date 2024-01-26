import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import NavPanel from "../Primitives/NavPanel";
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
        <div className="flex flex-col items-center justify-start
                        min-h-screen border border-white ">
            <NavPanel/>
            <ContactsContainer />
        </div>
    );
}


const ContactsContainer = (props) => {
    return (
        <section className="w-full h-auto grow  mt-5
                        flex flex-col justify-start items-center
                        lg:justify-between gap-6 lg:gap-3 lg:my-10">
            <h2 className="text-center text-2xl w-full  ">Мы будем рады с Вами<br/> сотрудничать!</h2>
            <div className="w-fit flex flex-col gap-4">
                <YandexMap/>
                <p className="text-center text-base">
                    г. Анапа, ул. Горького, д. 78, офис 11.
                </p>

            </div>
            <div className="hidden sm:flex lg:hidden  w-[15rem] self-center h-12 my-4">
                <CommonButton text="Связаться" isCentral={true}/>
            </div>
            <MediaContainer/>
        </section>
    );
}

const YandexMap = (props) => {
    return (
        <YMaps>
            <div className="h-[15rem]  w-[20rem]" style={{boxShadow: '5px 5px 0px 0px #2C143F' }}>
                <Map width='20rem' height="15rem" defaultState={{ center: [44.903291, 37.334352], zoom: 13 }}>
                    <Placemark geometry={[44.903291, 37.334352]} />
                </Map>
            </div>
        </YMaps>
    );
};

const MediaContainer = (props) => {
    return (
        <article className=" h-auto w-auto flex flex-col gap-2 justify-center">
            <MediaRow image={require("../../img/Icons/vk.png")} text="@rabotanimator_emocion" href={"https://vk.com/rabotanimator_emocion"}/>
            <MediaRow image={require("../../img/Icons/tg.png")} text="@emocion_animation" href={"https://t.me/emocion_animation"}/>
            <MediaRow image={require("../../img/Icons/wp.png")} text="+7 999 888 77 11" href={"+7 999 888 77 11"}/>
            <MediaRow image={require("../../img/Icons/phone.png")} text="+7 999 888 77 11" href={"+7 999 888 77 11"}/>
            <MediaRow image={require("../../img/Icons/mail.png")} text="emotionmail@gmail.com" href={"+7 999 888 77 11"}/>
        </article>
    );
}

const MediaRow = (props) => {
    return (
        <div className="h-auto w-auto flex flex-row gap-5 items-center justify-start">
            <img src={props.image} alt="media" draggable="false"
                 className=" w-[1.3rem]  select-none pointer-events-none"/>
            <a href={props.href}>
                <p>{props.text}</p>
            </a>
        </div>
    );
}



export default Left;
