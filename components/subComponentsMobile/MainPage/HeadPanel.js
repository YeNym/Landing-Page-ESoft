import React from 'react';
import '../../fonts/Kreadon-M.otf';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="w-2">
             <nav className= " h-20 w-2 select-none justify-center items-center  border-r flex gap-1 text-white ">
                 <Link to={"/services"}> <p className="text-base">услуги</p> </Link>
                 <Link to={"/contacts"}> <p className="text-base">контакты</p> </Link>
             </nav>
        </div>
    );
}

export default Header;
