import React from "react";

export default function Validation(user){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // Minimum eight characters, at least one letter, one number and one special character
    const contact_pattern = /^[0-9]{10}$/ ;
    const pin_pattern = /^[0-9]{6}$/ ;
    const occupation_pattern = /(?!^\d+$)^.+$/;


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
    else if (!pin_pattern.test(user.pincode)){
        errors.pincode= "Invalid pin code"
    }

    if(user.occupation === ""){
        errors.occupation = "Occupation is Required";
    }
    else if (!occupation_pattern.test(user.occupation )){
        errors.occupation = "Invalid occupation"
    }

    if(user.email === ""){
        errors.email ="Email is Required";
    }
    else if(!email_pattern.test(user.email)){
        errors.email = "Invalid Email "
    }

    if(user.password === ""){
        errors.password ="password is Required";
    }
    else if (!password_pattern.test(user.password)){
        errors.password = "Minimum eight characters, at least one letter, one number and one special character"
    }
    else{
        errors.password ="";
    }

    if(user.repassword === ""){
        errors.repassword ="Re-enter password is Required";
    }
    else if(user.password != user.repassword) {
        
        errors.repassword = "These passwords don't match.Try Again? "
        
    }
    else{
        errors.repassword ="";
    }
    
    return errors;
}