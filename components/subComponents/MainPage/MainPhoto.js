import React from 'react';
import '../../fonts/Kreadon-M.otf'

class MainPhoto extends React.Component {
    render() {
        return (

            <section className="max-w-screen h-screen
                            select-none pointer-events-none
                            flex  items-end grow  ">
                <div className=" max-h-full  w-full  overflow-hidden">
                    <img className=" min-w-full" src={require("../../img/MainPage/main.png")} alt="mainPhoto"/>
                </div>
            </section>
        )
    }
}
export default MainPhoto;