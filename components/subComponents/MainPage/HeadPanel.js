import React from 'react';
import '../../fonts/Kreadon-M.otf';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="w-2">
             <nav className= "flex justify-center items-center
                            h-20 w-2 select-none border-r  gap-1 text-white ">
                 <Link to={"/services"}> <p className="text-base">услуги</p> </Link>
                 <Link to={"/contacts"}> <p className="text-base">контакты</p> </Link>
             </nav>
        </div>
    );
}

export default Header;
