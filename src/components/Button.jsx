export const Button=({children, onClick, disabled= false, className="",variant="primary", ...props})=>{
    const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-200";
    const variants={
        primary: disabled
        ? "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200"
        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 active:translate-y-0",
      secondary: "border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100",
      link: "text-blue-600 hover:text-blue-700 hover:underline bg-transparent p-0 font-medium"
    };
    return (
        <button onClick={onClick} disabled={disabled} {...props}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}