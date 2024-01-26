import React from 'react';
class MainPhoto extends React.Component {
    render() {
        return (
                <img className="h-[90svmin] w-fit mx-auto shrink-0 object-cover self-end
                                hidden sm:flex "
                     src={require("../../img/MainImage/MainImageInContacts.png")} loading="lazy" alt="mainPhoto" draggable={"false"} />

        )
    }
}
export default MainPhoto;