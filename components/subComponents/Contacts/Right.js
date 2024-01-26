import React, {useState} from 'react';
import CommonButton from "../Primitives/CommonButton";
import {postFeedback} from "../../scripts/api";

class Right extends React.Component {
    render() {
        return (
            <section className="w-[25rem] flex sm:hidden lg:flex ml-auto">
                <Main/>
            </section>

        )
    }
}


function Main() {
    return (
        <div className="h-full self-end
                        flex flex-col  items-center
                        lg:border border-white
                        w-full
                        pr-0
                        ">
            <H1/>
            <FormContainer/>
        </div>
    );
}

const H1 = () => {
    return (
        <div className="w-full px-2 min-h-20
                        border-b box-border border-whit
                        hidden lg:flex items-center justify-center ">
            <h1 className="text-2xl flex  text-white">Контакты</h1>
        </div>
    );
}
function FormContainer() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        text: '',
    });
    const [success, setSuccess] = useState({
        success: false,
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSuccess({success: true})
            const result = await postFeedback(formData);
            console.log('Post feedback result:', result);
            // Дополнительная обработка, если необходимо
        } catch (error) {
            console.error('Error posting feedback:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };
    if (!success.success) {
        return (
            <section className=" w-full h-full
                        flex flex-col justify-center lg:justify-between items-center
                         my-10 ">

                <p className=" text-2xl text-center ">Вопрос?<br/>Предложение?<br/>Напишите! </p>
                <form onSubmit={handleSubmit}
                      className="hidden lg:flex gap-3  justify-center flex-1 flex-col
                                 h-[500px] text-white w-full px-5">
                    <input
                        type="text"
                        className="w-full bg-white bg-opacity-0
                                   border-b border-softPurple
                                   placeholder-white text-white"
                        name="name"
                        placeholder="Имя*"
                        onChange={handleChange}
                    />
                    <input
                        className="w-full bg-white
                                    bg-opacity-0 border-b border-softPurple
                                    placeholder-white text-white"
                        placeholder="Телефон*"
                        name="phone"
                        type="text"
                        onChange={handleChange}
                    />
                    <input
                        className="w-full
                                   bg-white bg-opacity-0 border-b border-softPurple
                                   placeholder-white text-white"
                        placeholder="Почта"
                        name="email"
                        type="text"
                        onChange={handleChange}
                    />
                    <textarea
                        className="w-full h-[10rem] mt-4
                                    text-left bg-white bg-opacity-0 border border-softPurple
                                    placeholder-white"
                        name="text"
                        placeholder="Текст сообщения*"
                        onChange={handleChange}
                    ></textarea>
                    <div className="w-[10rem] min-h-12 mt-4
                                    self-center">
                        <CommonButton type="submit" text="Связаться" isCentral={true}/>
                    </div>

                </form>
                <div className="sm:hidden flex
                                w-[10rem] min-h-12 mt-4 ">
                    <CommonButton text="Связаться" isCentral={true}/>
                </div>
            </section>
        );
    }
    else{
        return (
            <div className=" w-full h-full
                            flex flex-col justify-center lg:justify-center items-center
                            my-10 ">
                <h2 className=" text-2xl text-center ">Спасибо за обращение!<br/>Мы обязательно Вам ответим!</h2>

            </div>
        );

    }
}


export default Right;
