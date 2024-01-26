import CommonButton from "../Primitives/CommonButton";




function ServiceContentPanel(props) {
    return (
        <div className="mt-10 mr-15 flex justify-between flex-row h-158">
            <SideBar title = {props.titleCover} function = {props.function}/>
            <InfoPanel image = {props.imageCover} text = {props.textCover}/>
        </div>
    );
}
//"../img/chatBotCover.png"
function InfoPanel(props) {
    return (

        <section className="xl:h-[36rem] h-[35.5rem]  w-164
                        flex  items-center justify-between flex-col
                        border-0 box-border
                        mt-0 ml-8 pl-15
                        ">
            <div>
            <img loading="lazy" src={props.image} alt="chat bot side bar avatar" draggable="false"
                 className=" w-full h-auto  select-none pointer-events-none"
                 style={{ boxShadow: '5px 5px 0px 0px #2C143F' }}
            />
            <p className="mt-5">
                {props.text}</p>
            </div>
            <div className="mt-7 w-40
                            h-12 pb-0 mb-0
                            " >
                <CommonButton text="Заказать" isCentral={true}/>
            </div>
        </section>
    );
}

function SideBar(props) {

    return (

        <section className="w-80  xl:w-144 xl:h-[36rem] h-[35.5rem]
                        border-white box-border
                        flex gap-0 flex-wrap overflow-auto shrink-0
                        pr-0 mb-0 mr-0 ml-15
                        ">
            <ContentInSideBar
                src={require("../../img/SideCover/chatBotSideCover.png")}
                butText="Чат-боты"
                alt="Logo for chat-bots develop"
                function={() => props.function({
                    newTitle: "Разработка Чат-Ботов",
                    newCoverImage: require("../../img/MainCover/chatBotCover.png"),
                    newTextCover: ' Мы создаем умных чат-ботов, способных обрабатывать запросы, предоставлять информацию, решать проблемы и улучшать пользовательский опыт. ' +
                        'Наш подход к разработке чат-ботов основан на тщательном анализе ваших потребностей, чтобы' +
                        'обеспечить максимальную эффективность и удовлетворение ваших клиентов\n' +
                        '\n',
                })}
            />
            <ContentInSideBar
                src={require("../../img/SideCover/webSideCover.png")}
                butText="Веб-Сайты"
                alt="Logo for website develop"
                function={() => props.function({
                    newTitle: "Разработка Веб-Сайтов",
                    newCoverImage: require("../../img/MainCover/WebSiteCover.png"),
                    newTextCover: "Мы предлагаем услугу создания сайтов 'под ключ'." +
                        " Наш процесс работы начинается с тщательного изучения" +
                        " бизнеса клиента, затем мы создаем дизайн-концепцию, разрабатываем функциональность" +
                        " и наполняем сайт контентом. "
                })}
            />
            <ContentInSideBar
                src={require("../../img/SideCover/scriptsSideCover.png")}
                butText="Скрипты"
                alt="Logo for scripts develop"
                function={() => props.function({
                    newTitle: "Разработка Скриптов",
                    newCoverImage: require("../../img/MainCover/ScriptCover.jpg"),
                    newTextCover: "Хотите оптимизировать свои бизнес-процессы?" +
                        " Мы предлагаем услуги по созданию скриптов, которые помогут вам" +
                        " автоматизировать рутинные задачи, улучшить производительность и" +
                        " снизить вероятность ошибок. " +
                        "Наши эксперты готовы разработать индивидуальные скрипты," +
                        " адаптированные под ваши потребности"
                })}
            />
            <ContentInSideBar
                src={require("../../img/SideCover/graficSideCover.png")}
                butText="Графика"
                alt="Logo for image Developing"
                function={() => props.function({
                newTitle: "Создание Графики",
                newCoverImage: require("../../img/MainCover/graficCover.jpg"),
                newTextCover: "Мы тщательно разрабатываем дизайны разной сложности и разного предназначения:" +
                    " от простых лого и баннеров до сложных многостраничных веб-сайтов" +
                    " и интерфейсов мобильных приложений. "
            })}
            />
            <ContentInSideBar
                src={require("../../img/SideCover/TZSideCover.png")}
                butText="Тех.Задание"
                alt="Logo for scripts develop"
                function={() => props.function({
                    newTitle: "Создание Документации",
                    newCoverImage: require("../../img/MainCover/TZCover.jpg"),
                    newTextCover: "Мы предлагаем услуги по созданию профессиональной технической документации," +
                        "которая поможет вашим клиентам и пользователям" +
                        " разобраться в работе с вашим продуктом. "
                })}
            />

        </section>);
}

function ContentInSideBar(props) {
    return (
        <div className="border-white
                        flex flex-col  justify-center items-center flex-shrink-0
                        min-h-fit w-1/2
                        pr-4 mr-0 ml-0
                        ">
            <img loading="lazy" src={props.src} alt={props.alt} draggable="false"
                 onClick={props.function}
                 className=" w-full select-none pointer-events-none"
            />
            <div className="w-full min-h-12 mt-2 mb-5">
            <CommonButton text={props.butText} function = {props.function}/>
            </div>
        </div>
    );
}

export default ServiceContentPanel;