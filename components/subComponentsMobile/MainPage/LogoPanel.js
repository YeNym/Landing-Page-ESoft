import React from 'react';
import '../../fonts/Kreadon-M.otf'

function LogoPanel() {
    return (
      <section className="LogoPanel flex justify-center items-center h-[14rem] w-2 border border-white">
          <img src={require("../../img/MainPage/mainLogo.png")} alt="logo" draggable="false"
               className=" pt-1 max-h-full max-w-full "/>
      </section>
    );
}
export default LogoPanel;
