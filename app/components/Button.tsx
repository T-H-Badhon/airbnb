"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IconType } from 'react-icons';
type ButtonProps = {
    label:string;
    onClick:(e:React.MouseEvent<HTMLButtonElement>) => void;
    disabled?:boolean;
    outline?:boolean;
    small?:boolean;
    icon?:IconType
}
const Button = ({label,onCLick,disabled,outline,small,icon:Icon}:any) => {
    return (
        <button onClick={onCLick} disabled={disabled} className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
            ${outline?'bg-white' : 'bg-rose-600'} 
            ${outline?'border-black' : 'bg-rose-600'} 
            ${outline?'text-black' : 'text-white'} 
            ${small?'text-sm':'text-md'}
            ${small?'py-1':'py-3'}
            
            `}>
                {Icon && (
                    <Icon
                        size={24}
                        className="absolute left-4
                        top-3"
                    />
                )}
            {label}
        </button>
    );
};

export default Button;