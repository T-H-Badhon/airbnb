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
import AInput from "../AInput";
import toast from "react-hot-toast";



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
        console.log(data)
        
    }
    const bodyInformation = (
        <div className="flex flex-col gap-4 ">
            <Heading
            title="Welcome to AirBnb"
            subTitle="Create An Account"
            />
            <AInput id="name" label="name" disabled={loading} register={register} errors={errors} required />
            <AInput id="email" label="email" disabled={loading} register={register} errors={errors} required />
            <AInput id="password" type="password" label="password" disabled={loading} register={register} errors={errors} required />
        </div>
    )
    return (
        <Modal  disabled={loading} open={registrationModal.open} title="Register" actionLabel="Continue"
        onClose={registrationModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyInformation}
        
         />
        
    );
};

export default RegistrationModal;