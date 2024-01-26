import React, { useEffect, useState } from 'react';
import '../../fonts/Kreadon-M.otf';
import CommonButton from '../Primitives/CommonButton';
import  { MainRight } from './RightPanel';

function LeftPanel() {
    const [windowDimensions, setWindowDimensions] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                aspectRatio: window.innerWidth / window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className="flex min-h-[calc(100vh-3.6rem)]">
            <Main windowRatio={windowDimensions.aspectRatio} />
        </main>
    );
}

function Main(props) {
    return (
        <div className="flex flex-col justify-between">
            {props.windowRatio >= 1.4 ? <LogoPanel /> : <FAq />}

            <div className="border border-white w-2 flex flex-col items-center py-[2rem]">
                <div className="LeftAlign space-y-[1.5rem]">
                    <H1 />
                    <div className="h-12 w-32 text-white ">
                        <CommonButton isCentral={false} text="Связаться" />
                    </div>
                    <SocialButtons />
                </div>
            </div>
        </div>
    );
}

function LogoPanel() {
    return (
        <section className="flex justify-center items-center h-[14rem] w-2 border border-white">
            <img src={require("../../img/MainPage/mainLogo.png")} alt="logo" draggable="false"
                 className=" pt-1 max-h-full max-w-full "/>
        </section>
    );
}
function FAq() {
    return (
        <section className="h-[18rem] grow scrollbar-hidden border border-white w-2 overflow-y-auto">
            <MainRight />
        </section>
    );
}


function H1() {
    return (
        <div className="w-[18rem] text-base text-white place-content-center">
            <h1>
                Разработка дизайна любой сложности, магазинов, создание чат-ботов, задание общей концепции для каналов, сообществ и социальных сетей
            </h1>
        </div>
    );
}

function SocialButtons() {
    return (
        <div className="select-none items-center ">
            <nav className="justify-between items-center  flex flex-row">
                <SocialButton link="https://vk.com/yenot_01">
                    <img src={require('../../img/Icons/vk.png')} className="h-5 " alt="VK" />
                </SocialButton>

                <SocialButton link="https://web.telegram.org/k/">
                    <img src={require('../../img/Icons/tg.png')} className="h-[1.4rem]" alt="Telegram" />
                </SocialButton>

                <SocialButton link="https://www.whatsapp.com/?lang=ru_RU">
                    <img src={require('../../img/Icons/wp.png')} className="h-[1.5rem] " alt="Whatsapp" />
                </SocialButton>

                <SocialButton link="https://mail.google.com/mail/u/0/#inbox">
                    <img src={require('../../img/Icons/mail.png')} className="h-5 " alt="Gmail" />
                </SocialButton>
            </nav>
        </div>
    );
}

function SocialButton({ link, children }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mx-2">
            {children}
        </a>
    );
}


export default LeftPanel;
