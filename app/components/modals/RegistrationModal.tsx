/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import useRegistration from "@/app/hooks/useRegistration";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
const RegistrationModal = () => {
    const registrationModal = useRegistration()
    // const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);


    const {register,handleSubmit,formState:{
        errors,
    }} = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        axios.post('/api/register',data)
        .then(()=> {
            registrationModal.onClose();
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }
    const bodyInformation = (
        <div className="flex flex-col gap-4 ">
            <Heading
            title="Welcome to AirBnb"
            subTitle="Create An Account"
            />
        </div>
    )
    return (
        <Modal disabled={loading} open={registrationModal.open} title="Register" actionLabel="Continue"
        onClose={registrationModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyInformation}
         />
    );
};

export default RegistrationModal;