"use client";

import { AiOutlineHeart } from "react-icons/ai";

const CardButton = () => {
    return (
        <div className="relative hover:opacity-100 transition cursor-pointer">
            <AiOutlineHeart className="fill-white-700 absolute -top-[2px] -right-[2px] rounded-xl bg-gray-400" size={28} />
        </div>
    );
};  

export default CardButton;