import '../../../App.css';
import React, { useEffect, useState } from 'react';
import HeadPanel from "../../subComponents/MainPage/HeadPanel";
import LeftPanel from "../../subComponents/MainPage/LeftPanel";
import RightPanel from "../../subComponents/MainPage/RightPanel";
import MainPhoto from "../../subComponents/MainPage/MainPhoto";

function MainPage() {
    const [modalActive, setModalActive] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        const updateAspectRatio = () => {
            setAspectRatio(window.innerWidth / window.innerHeight);
        };

        window.addEventListener('resize', () => {
            handleResize();
            updateAspectRatio();
        });

        // Убедимся, что aspectRatio обновляется при загрузке страницы
        updateAspectRatio();

        return () => {
            window.removeEventListener('resize', () => {
                handleResize();
                updateAspectRatio();
            });
        };
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-between
                            bg-gradient-to-b from-purpleBlue to-purple bg-no-repeat
                            overflow-y-hidden max-h-screen ">
                <section>
                    <HeadPanel/>
                    <LeftPanel/>
                </section>
                    <MainPhoto/>
                    {aspectRatio > 1.4 && (
                        <section className="border lgm:hidden border-white">
                            <RightPanel/>
                        </section>
                    )}
            </div>
        </div>
);
}

export default MainPage;
