"use client"

import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState, useEffect } from 'react'
import { regEx } from '../regEx'
import axios from 'axios';
// import "@/public/css/heroForm.css";

const HeroForm = () => {
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        file: ""
    });

    const [check, setCheck] = useState(false);
    const [submitDisabled, setSubmitDisbaled] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitDisabled === false) {
            try {
                setLoader(true);
                const formData = new FormData();
                for (let i = 0; i < data.file.length; i++) {
                    formData.append(`file${i}`, data.file[i]);
                }
                formData.append("name", data.name);
                formData.append("email", data.email);
                formData.append("phone", data.phone);
                formData.append("message", data.message)
                await axios.post(`${process.env.webURL}/api/heroForm`, formData);

                setSnackQ(true);
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    file: ""
                });
                setLoader(false);
                setSwalProps({
                    show: true,
                    title: 'Thank You',
                    text: 'We will get back to you soon.',
                    icon: 'success',
                });

                setNameError(false);
                setEmailError(false);
                setPhoneError(false);
                setCheck(false);
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("error");
        }
    };

    const phoneErrorFun = () => {
        if (data.phone.length > 9) {
            return false;
        } else {
            return true;
        }
    };

    const emailErrorfun = () => {
        if (!regEx[0].emailRegex.test(data.email)) {
            setEmailError(true);
            return true;
        } else {
            setEmailError(false);
            return false;
        }
    };

    useEffect(() => {
        if (check) {
            setEmailError(emailErrorfun());
            setPhoneError(phoneErrorFun());
            setNameError(data.name.length < 1);

            if (
                phoneErrorFun() === false &&
                emailErrorfun() === false &&
                data.name.length > 0
                

            ) {
                setSubmitDisbaled(false);
            } else {
                setSubmitDisbaled(true);
            }
        }
    }, [check, handleSubmit, data]);

    return (
        <form 
         onSubmit={handleSubmit}
          method="POST"
        >
            <div className="row">

                <div className="col-md-6">
                    <input
                        type="text"
                        name="name"
                        maxLength={100}
                        value={data.name}
                        onChange={(e) => {
                            setCheck(true);
                            setData({
                                ...data,
                                name: e.target.value.replace(regEx[4].textValidation, ""),
                            });
                        }}
                        //className={nameError === true ? inputErrorCss : inputCss}
                        placeholder="Enter full name"
                        required
                        className="form-control"
                    />
                </div>

                <div className="col-md-6">
                   
                    <PhoneInput
                        country={"in"}
                        placeholder="Enter your phone number"
                        value={data.phone}
                        //inputclassName="w-auto"
                        inputProps={{
                            className: "form-control w-100",
                        }}
                        onChange={(value) => {
                            setCheck(true);
                            setData({
                                ...data,
                                phone: value,
                            });
                        }}
                    />
                </div>

                <div className="col-md-12">
                    <input type="email" className="form-control"

                        name="email"
                        maxLength={50}
                        value={data.email}
                        onChange={(e) => {
                            setCheck(true);
                            setData({
                                ...data,
                                email: e.target.value.replace(
                                    regEx[3].emailTextValidation,
                                    ""
                                ),
                            });
                        }}
                        //className={emailError === true ? inputErrorCss : inputCss}
                        placeholder="name@gmail.com"
                        required
                    />
                </div>

                

                <div className="col-md-12">
                    <div className="des-attachment">
                        <textarea
                            rows="3"
                            cols="3"
                            name="message"
                            value={data.message}
                            onChange={(e) => {
                                setCheck(true);
                                setData({
                                    ...data,
                                    message: e.target.value.replace(
                                        regEx[4].textValidation,
                                        ""
                                    ),
                                });
                            }}
                            //className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                            placeholder="Write your thoughts here..."

                            className="form-control"
                        ></textarea>
                        <div className="input-file-upload position-relative">
                            <input type="file" onChange={({target})=>setData({...data,file:target.files})}  multiple />
                            <picture> <img src="assets/images/icon/upload-icon.png" alt="" /></picture>
                            <span>Add Files</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="assignment-btn-wrap text-center">
                <button type="submit" className="submit_btn">Order Now</button>
            </div>







        </form>
    )
}

export default HeroForm