import React from "react";

export default function Validation(user){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(user.name === ""){
        errors.name ="Name is Required";
    }
    if(user.username === ""){
        errors.username ="Username is Required";
    }
    else if(!email_pattern.test(user.username)){
        errors.username = "Invalid Email "
    }

    if(user.password === ""){
        errors.password ="password is Required";
    }
    else if (!password_pattern.test(user.password)){
        errors.password = "Weak password "
    }
    
}