import React, {useState, useRef, useEffect} from "react";
import { Input } from "./Input";
import { Button } from "./Button";


export const InputGroup=({onComplete, onClear})=>{
const [otp, setOtp]= useState(['','','','','','']);
const inputRefs= useRef([])

useEffect(()=>{
    inputRefs.current= inputRefs.current.slice(0,6)
},[])

// useEffect(()=>{
//     const isComplete= otp.every(digit=> digit!='')
//     if (isComplete && onComplete) {
//         onComplete(otp.join(''));
//       }
// },[otp, onComplete])

function handleChange(index,e){
    const val= e.target.value;
    if(val.length>1)
        {return;}
    if(val && !/^\d$/.test(val)) 
        return;
    const newOtp= [...otp];
    newOtp[index]= val;
    setOtp(newOtp);
    if (val && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
}


function handleKeyDown(index, e){
    const newOtp=[...otp];
if(e.key==='Backspace')
{
    if(newOtp[index]=='')
    {
        if(index>0)
        inputRefs.current[index-1]?.focus();
    }
    else{
        newOtp[index]='';
        setOtp(newOtp);
    }
}
}

const handleClear=()=>{
 setOtp(['','','','','','',])
 inputRefs.current[0]?.focus();
 if(onClear) onClear();
}

const handlePaste=(e)=>{
    e.preventDefault();
const pastedData= e.clipboardData.getData('text').slice(0,6)
if(!/^\d+$/.test(pastedData)) return;

const newOtp= [...otp];
for(let i=0;i<6;i++)
{
    newOtp[i]= pastedData[i] || '';
}
setOtp(newOtp);
const lastIndex= Math.min(pastedData.length,5);
inputRefs.current[lastIndex]?.focus();
}

return (
  <div>
     <div className="flex justify-center gap-3 mb-6">
    {otp.map((val,index)=>(       
        <Input onChange={(e)=>handleChange(index,e)}
            onKeyDown={(e)=> handleKeyDown(index,e) }
            onPaste={(e)=>handlePaste(e)}
            value={val} key={index} 
            ref={el=>inputRefs.current[index]=el}/>)
    )}
   </div>
  <div className="flex gap-3 mb-4">
  <Button  onClick={()=>{
    if(onComplete){
    onComplete(otp.join(''))
    alert(`OTP Entered: ${otp}`);
}}}
  disabled={!otp.every(digit=>digit!='')}
  className="flex-1">
    Continue
   </Button>

   <Button variant="secondary" onClick={handleClear}>
    Clear
   </Button>
  </div>

  </div>
)
}