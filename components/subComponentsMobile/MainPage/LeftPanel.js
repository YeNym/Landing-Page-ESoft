import React, { useEffect, useState } from 'react';
import '../../fonts/Kreadon-M.otf';
import LogoPanel from './LogoPanel';
import CommonButton from '../Primitives/CommonButton';
import { MainRight } from './RightPanel';

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
        <main className="LeftContainer flex min-h-[calc(100vh-3.6rem)]">
            <Main windowRatio={windowDimensions.aspectRatio} />
        </main>
    );
}

function Main(props) {
    return (
        <div className="Main flex flex-col  justify-between">
            {props.windowRatio >= 1.4 ? <LogoPanel /> : <FAq />}

            <div className="ContentConteiner border border-white w-2 flex flex-col items-center   py-[2rem]">
                <div className="LeftAlign space-y-[1.5rem]">
                    <H1 />
                    <div className="CTAsConteiner h-12 w-32 text-white ">
                        <CommonButton isCentral={false} text="Связаться" />
                    </div>
                    <SocialButtons />
                </div>
            </div>
        </div>
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
        <div className="ConteinerText w-[18rem] text-base text-white place-content-center">
            <h1>
                Разработка дизайна любой сложности, магазинов, создание чат-ботов, задание общей концепции для каналов, сообществ и социальных сетей
            </h1>
        </div>
    );
}

function SocialButtons() {
    return (
        <section className="SocialButtons select-none items-center ">
            <nav className="AlignSocialButtons justify-between items-center  flex flex-row">
                <SocialButton link="https://vk.com/yenot_01">
                    <img src={require('../../img/Icons/vk.png')} className="h-5 " loading="lazy" alt="VK" />
                </SocialButton>

                <SocialButton link="https://web.telegram.org/k/">
                    <img src={require('../../img/Icons/tg.png')} className="h-[1.4rem]" loading="lazy" alt="Telegram" />
                </SocialButton>

                <SocialButton link="https://www.whatsapp.com/?lang=ru_RU">
                    <img src={require('../../img/Icons/wp.png')} className="h-[1.5rem] " loading="lazy"  alt="Whatsapp" />
                </SocialButton>

                <SocialButton link="https://mail.google.com/mail/u/0/#inbox">
                    <img src={require('../../img/Icons/mail.png')} className="h-5 " loading="lazy" alt="Gmail" />
                </SocialButton>
            </nav>
        </section>
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
