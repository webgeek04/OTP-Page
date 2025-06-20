import React, {forwardRef} from "react";

 export const Input = forwardRef(( {value, placeholder="0", onChange, onKeyDown, onPaste, className="", ...props},ref
)=>{
return (
    <input
    type="text" inputMode="numeric" maxLength="1"
    ref={ref} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} onPaste={onPaste} {...props}
    className={`
        w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition-all duration-200 ease-in-out
        placeholder:text-slate-400
        ${value 
          ? 'border-blue-500 bg-blue-50 shadow-sm ring-1 ring-blue-100' 
          : 'border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50'
        } 
        ${className}
      `}
    />
)
})