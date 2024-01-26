import React, {useState} from "react";
import {postFeedback} from "../../scripts/api";
import CommonButton from "./CommonButton";

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <section
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
              <Popup />
        </section>
    );
};

function Popup({active, setActive, }){

    const handleModalClick = (e) => {
        // Предотвращаем всплытие события, чтобы оно не достигло родительских элементов
        e.stopPropagation();
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        text: '',
    });
    const [success, setSuccess] = useState(false);


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(success)
            setSuccess(true)
            const result = await postFeedback(formData);
            console.log('Post feedback result:', result);
            // Дополнительная обработка, если необходимо
        } catch (error) {
            console.error('Error posting feedback:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };
    console.log(success)

    if(!success) {
        return (
            <div onClick={handleModalClick}
                 className="Modal h-[32rem] w-[30rem] portrait:h-fit portrait:w-[70vw] bg-gradient-to-b from-[#45508E] via-[#5D1F89] to-[#7D1986] fixed self-center flex flex-col items-center justify-center m-10">
                <form onSubmit={handleSubmit} className="Content  flex flex-col gap-[2rem] items-center h-full portrait:justify-between mb-10 portrait:my-[2vh] w-full   ">
                    <p className="P text-3xl text-white pt-10  ">Связаться с нами</p>
                    <div className="flex flex-col gap-[1rem] portrait:gap-[2rem] landscape:w-full landscape:px-20  portrait:w-full portrait:px-20">
                        <input type="text" onChange={handleChange} name="name" placeholder="Имя"
                               className=" w-full h-[3rem] text-xl border-b border-white placeholderTop"/>
                        <input type="text" onChange={handleChange} name="phone" placeholder="Телефон"
                               className="w-full h-[3rem] text-xl  border-b border-white placeholderTop"/>
                        <input type="text" onChange={handleChange} name="email" placeholder="Почта"
                               className="w-full h-[3rem] text-xl  border-b border-white placeholderTop"/>
                        <textarea name="text" onChange={handleChange} placeholder="Текст сообщения"
                                  className="w-w-full h-[8rem] text-xl portrait:h-[15vh] bg-opacity-0 bg-pink  border border-white "/>
                    </div>

                    <div className="CTAsConteiner h-20 w-60 text-white v  ">
                        <CommonButton  type='submit' isCentral={true} text="Связаться"/>
                    </div>

                </form>
            </div>
        );
    }
    else{
        return (
            <div className="Modal  h-auto w-[25rem] bg-gradient-to-b from-[#45508E] via-[#5D1F89] to-[#7D1986] fixed self-center flex flex-col items-center py-10 justify-start gap-8">
                <h1 className="mt-10 text-3xl ">Спасибо за заявку</h1>

                <p className="mt-10 text-center"
                >Мы обязательно с Вами свяжемся как только её обработаем</p>
                <div className='h-14 w-[13rem] mb-10'>
                <CommonButton function={() => {}}  isCentral={true} text="ОК"/>
                </div>
            </div>
        );
    }
}

export default Modal;
