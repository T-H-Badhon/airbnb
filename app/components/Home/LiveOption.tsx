"use client";

import { AiOutlineHeart } from "react-icons/ai";

const LiveOption = () => {
    return (
        <div className="relative hover:opacity-100 transition cursor-pointer">
            <AiOutlineHeart className="fill-white-700 absolute -top-[2px] -left-[8px] rounded-xl bg-gray-400" size={28} />
        </div>
    );
};  

export default LiveOption;