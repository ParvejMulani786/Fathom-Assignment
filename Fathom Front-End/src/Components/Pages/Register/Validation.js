import React from "react";

export default function Validation(user){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; // 1 a 1 A A-z a-z 0-9  min 8
    const contact_pattern = /^[0-9]{10}$/ ;
    if(user.name === ""){
        errors.name = "Name is Required";
    }else{
        errors.name="";
    }
    if(user.contact === ""){
        errors.contact ="Contact is Required";
    }
    else if (!contact_pattern.test(user.contact)){
        errors.contact = "Invalid phone number"
    }

    if(user.address === ""){
        errors.address ="Address is Required";
    }
    if(user.pincode === ""){
        errors.pincode ="Pincode is Required";
    }
    if(user.occupation === ""){
        errors.occupation ="Occupation is Required";
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
        errors.password = "Password should contain atleast 8 charcters, 1 lowercase , 1 uppercase, 1 digit "
    }
    if(user.repassword === ""){
        errors.repassword ="Re-enter password is Required";
    }
    else if(user.password != user.repassword) {
        
        errors.repassword = "These passwords don't match.Try Again? "
        
    }
    
    return errors;
}