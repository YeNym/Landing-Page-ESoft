import React from 'react';
import MainPhoto from "../../subComponents/Contacts/MainPhoto";
import Right from "../../subComponents/Contacts/Right";
import Left from "../../subComponents/Contacts/Left";

function Contacts(props) {
        return (
                <div className="h-auto  bg-gradient-to-b    from-purpleBlue to-purple bg-no-repeat    text-white
                                flex flex-row ">
                    <Left/>
                    <MainPhoto/>
                    <Right/>
                </div>
        )
}

export default Contacts;