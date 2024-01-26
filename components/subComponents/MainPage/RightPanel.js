import React, { useState  } from 'react';
import '../../fonts/Kreadon-M.otf'
import fetchedImgSrc from '../../img/MainPage/FAQBG.png'
function RightPanel () {
return(
        <div className="max-w-screen h-screen pb-1 border lgm:hidden border-white">
            <H2 />
            <MainRight />
        </div>
    );
}

function MainRight() {
    const faqData = [
        {name: "Зачем мне концепция?", text: "Разработка концепции - это анализ рынка и разработка УТП для Вашего бизнеса, позиционирование Вашего продукта. Многие разработчики не занимаются анализом, а просто делают лендинг или сайт на основе шаблона. ",},
        {name: "Ваши услуги?", text: "Самые разные! И все они представлены на странице наших услуг"},
        {name: "Как вы работаете?", text: "Мы анализруем потребности клиента и создаем план, которому будем следовать, а также мы даем обратную связь, чтобы клиент мог внести свои коррективы"},
        {name: "Ваши тарифы и условия?", text: "Стоимость каждого проекта индивидуальна, в зависимости от сложности реализации. Мы предлагаем услуги по самым выгодным ценам, и найдем решение под любой бюджет"},
        {name: "Какие гарантии?", text: "Мы даем клиенту возможности вносить правки в проект и руководить процессом создания своего продукта. Наши специалисты всегда могут ответить на ваши вопросы по поводу своей работы"},
        {name: "Каковы сроки?", text: "Тут все индивидуально, и зависит от потребностей клиента. В среднем работа занимает от 2 дней до 3 недель"},
        {name: "Я плох в IT", text: "Мы стараемся максимально адаптироваться под клиента, и объяснить ему все максимально простым языком"},

    ];

    const [currentExpandedIndex, setCurrentExpandedIndex] = useState(null);

    const handleToggleExpansion = (index) => {
        setCurrentExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="flex flex-col items-center">


            <article className="overflow-y-auto scrollbar-hidden scrollbar-hide
                            max-h-[87vh]" >
                {faqData.map((faq, index) => (
                    <FAQ
                        key={index}
                        index={index}
                        name={faq.name}
                        text={faq.text}
                        isExpanded={currentExpandedIndex === index}
                        onToggleExpansion={handleToggleExpansion}
                    />

                ))}
            </article>
        </div>
    );
}

function H2() {
    return (
        <div className="h-20 w-2 mb-1  border-b border-white
                        flex items-center  justify-center ">
            <h2 className=" flex flex-nowrap  text-que text-white">Вопросы и ответы</h2>
        </div>
    );
}

function FAQ({ index, name, text, isExpanded, onToggleExpansion }) {
    const [isImageRotated, setIsImageRotated] = useState(false);

    const toggleExpansion = () => {
        onToggleExpansion(index);
        setIsImageRotated(!isImageRotated);
    };

    return (
        <div className="my-2">
            <div className="w-[21rem] mt-[1rem] px-1
                            text-que flex bg-lightPurpule shadow-[5px_5px_0px_0px_rgba(141,126,189,0.5)]">
                <button className="py-[0.5rem] text-white w-full" onClick={toggleExpansion}>
                    <div className="flex justify-between items-center w-full">
                        <span>{name}</span>
                        <img
                            className={`w-[2rem] h-[1rem] ${isImageRotated ? 'rotate-180' : ''}`}
                            style={{ transition: 'transform 0.2s ease-in-out' }}
                            src={require("../../img/MainPage/arrow.png")}
                            alt="arrow"
                        />
                    </div>
                </button>
            </div>

            {isExpanded && (
                <div className="relative">
                    <div
                        className="w-[21rem] my-4 text-[0.8rem]
                                     bg-white
                                     shadow-[5px_5px_0px_0px_rgba(37,3,40,1)]"
                    >
                        <p className="px-1 py-1">{text}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RightPanel;
export {MainRight};
