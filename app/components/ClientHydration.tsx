"use client";

import React, { useEffect, useState } from "react";


type ClientProps = {
    children:React.ReactNode;
}

const ClientHydration = ({children}:ClientProps) => {

    const [mounted,setMounted] = useState(false);

    useEffect(()=> {
        setMounted(true)
    },[])
    if(!mounted){
        return null;
    }
    return (
        <>
            {children}
        </>
    );
};

export default ClientHydration;