import React, {useState} from "react";
import {postFeedback} from "../../scripts/api";
import CommonButton from "./CommonButton";

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div
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
        </div>
    );
};

function Popup(){

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
            <section onClick={handleModalClick}
                 className="h-[33rem] w-[25rem]
                            bg-gradient-to-b from-[#45508E] via-[#5D1F89] to-[#7D1986]
                            fixed self-center
                            flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[2rem] items-center ">
                    <p className="P text-que text-white ">Связаться с нами</p>
                    <div className="flex flex-col gap-[1rem]">
                        <input type="text" onChange={handleChange} name="name" placeholder="Имя"
                               className=" w-[20rem] h-[3rem] border-b border-white placeholderTop"/>
                        <input type="text" onChange={handleChange} name="phone" placeholder="Телефон"
                               className="w-[20rem] h-[3rem]  border-b border-white placeholderTop"/>
                        <input type="text" onChange={handleChange} name="email" placeholder="Почта"
                               className="w-[20rem] h-[3rem]  border-b border-white placeholderTop"/>
                        <textarea name="text" onChange={handleChange} placeholder="Текст сообщения"
                                  className="w-[20rem] h-[8rem] bg-opacity-0 bg-pink  border border-white "/>
                    </div>

                    <div className="CTAsConteiner h-12 w-32 text-white  ">
                        <CommonButton  type='submit' isCentral={false} text="Связаться"/>
                    </div>

                </form>
            </section>
        );
    }
    else{
        return (
            <section className="h-[20rem] w-[25rem]
                            bg-gradient-to-b from-[#45508E] via-[#5D1F89] to-[#7D1986]
                            fixed self-center
                            flex flex-col items-center  justify-start
                            py-10 gap-8">
                <h1 className="text-3xl ">Спасибо за заявку</h1>

                <p className="mt-10 text-center"
                >Мы обязательно с Вами свяжемся как только её обработаем</p>
                <div className='h-10 w-[10rem]'>
                <CommonButton function={() => {}}  isCentral={true} text="ОК"/>
                </div>
            </section>
        );
    }
}

export default Modal;
