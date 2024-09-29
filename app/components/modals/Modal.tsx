"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    open?:boolean;
    onClose:() => void;
    onSubmit:() => void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel?:string;
    disabled?:boolean;
    secondaryAction?:() => void;
    secondaryLabel?:string;
}

const Modal:React.FC<ModalProps> = ({
    open,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {
    const [showModal,setShowModal] = useState(open)
    useEffect(()=> {
            setShowModal(open)
    },[open])
    const handleClose = useCallback(()=> {
        if(disabled){
            return;
        }
        setShowModal(false)
        setTimeout(()=>{
            onClose();
        },300);
    },[disabled,onClose])

    const handleSubmit = useCallback(()=> {
        if(disabled){
            return;
        }
        onSubmit()
    },[disabled,onSubmit])
    const handleSecondaryAction = useCallback(()=> {
        if(disabled || !secondaryAction){
            return;
        }
        secondaryAction()
    },[disabled,secondaryAction])

    if(open){
        return null
    }
    return (
        <div>
            
        </div>
    );
};

export default Modal;