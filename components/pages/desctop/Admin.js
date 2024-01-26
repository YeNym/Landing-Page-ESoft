import React, { useState, useEffect } from 'react';
import {getAdminData, postFeedback, postLoginAndGetAnswer} from "../../scripts/api";

function Admin() {
    const [isAuto, setIsAuto] = useState(false);
    const [loginData, setLoginData] = useState({ login: '', password: '' });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await postLoginAndGetAnswer(loginData);
            console.log(result);
            setIsAuto(result);
        } catch (error) {
            console.error('Error in autho:', error);
        }
    };

    if (isAuto) {
        return <ResultOfAuto />;
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-[20rem] text-purpleBlue"
                    name="login"
                    placeholder="Логин"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="w-[20rem] border-t text-purpleBlue"
                    name="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                />
                <button type="submit" className="mt-10 border">
                    Принять
                </button>
            </form>
        </div>
    );
}


function ResultOfAuto() {
    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAdminData();
                setAdminData(result);
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className=" min-h-screen text-lg text-purpleBlue">
            <h1 className="text-4xl text-center">Последние 20 запросов</h1>

            {adminData && Array.isArray(adminData) && (
                <ul className="flex flex-row flex-wrap
                               gap-6 mx-20 my-10 ">
                    {adminData.slice(-20).reverse().map((request, index) => (
                        <RequestElement key={index} data={request} />
                    ))}

                </ul>
            )}
        </div>
    );
}



function RequestElement({ data }) {
    return (
        <div className="flex  flex-col gap-4
                        bg-pink  border border-white
                        w-auto  p-5
                        text-2xl text-white">

            <p>Дата: {data.date}</p>
            <p>Имя:{data.name}</p>
            <p>Телефон: {data.phone}</p>
            <p>Почта: {data.email}</p>
            <p>Сообщение: {data.text}</p>

\        </div>
    );
}

export default Admin;
