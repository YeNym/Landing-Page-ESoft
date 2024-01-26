import React, {useState} from 'react';
import ServiceHeadPanel from "../../subComponents/Service/ServiceHeadPanel";
import ServiceContentPanel from "../../subComponents/Service/ServiceContentPanel";
import chatBotCoverImageSrc from "../../img/MainCover/chatBotCover.png"

function Services(props) {
    // Используем хук useState для создания состояния
    const [myState, setMyState] = useState({
        title: 'Разработка Чат-Ботов',
        imageCover: chatBotCoverImageSrc,
        TextCover:
            ' Мы создаем умных чат-ботов, способных обрабатывать запросы, предоставлять информацию, решать проблемы и улучшать пользовательский опыт. ' +
            'Наш подход к разработке чат-ботов основан на тщательном анализе ваших потребностей, чтобы' +
            'обеспечить максимальную эффективность и удовлетворение ваших клиентов\n' +
            '\n',
    });

    const handleClick = ({ newTitle, newCoverImage, newTextCover }) => {
        setMyState({
            title: newTitle,
            imageCover: newCoverImage,
            TextCover: newTextCover
        });
    };

    return (

        <div className="
            bg-gradient-to-b  from-purpleBlue to-purple bg-no-repeat
            min-h-screen
            text-white">
            <main className="h-full">
                <ServiceHeadPanel title={myState.title}/>
                <ServiceContentPanel function={handleClick} titleCover={myState.title} imageCover={myState.imageCover}
                                     textCover={myState.TextCover}/>
            </main>
        </div>
    );
}

export default Services;