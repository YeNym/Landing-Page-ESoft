import React from 'react';
import Left from "../../subComponentsMobile/Contacts/Left";
import ServiceHeadPanel from "../../subComponentsMobile//Service/ServiceHeadPanel";
import NavPanel from "../../subComponentsMobile/Primitives/NavPanel";

function ContactsMobile(props) {
        return (
            <div className="flex flex-col h-auto
               bg-gradient-to-b from-purpleBlue to-purple bg-no-repeat
               text-white">
                <ServiceHeadPanel title="Контакты"/>
                <Left/>
                <NavPanel/>
            </div>
        )
}

export default ContactsMobile;