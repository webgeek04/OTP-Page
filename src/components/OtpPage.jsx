import { useState } from "react"
import { Button } from "./Button"
import { InputGroup } from "./InputGroup"

export const OtpPage=()=>{

const[currentOtp, setCurrentOtp]= useState('')

const handleOtpComplete=(otp)=>{
    setCurrentOtp(otp);
   
}

const handleOtpClear=()=>{
    setCurrentOtp('');
}

const handleResendOtp=()=>{
    alert("Resending OTP")
}

    return(
        <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 items-center justify-center p-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-900/10 border border-white/20 p-8 w-full max-w-md">
            <div className="text-center mb-8">
                <div className=" mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-16 h-16 flex text-white justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Enter OTP</h1>
                <p className="text-slate-600">We've sent a 6-digit code to your device</p>
            </div>
            <div className="mb-8">
            <InputGroup onClear={handleOtpClear} onComplete={handleOtpComplete}/>
            </div>
            <div className="text-center">
                <p className="text-slate-500 mb-2 text-sm">Didn't recieve the code?</p>
                <Button variant="link" className="text-sm"
                onClick={handleResendOtp}>Resend OTP</Button>
            </div>
            </div>
        </div>
    )
}