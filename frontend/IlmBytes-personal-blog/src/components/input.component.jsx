import { useState } from "react";
const InputComponent = ({ type, name, placeholder, value, icon }) => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="relative w-full mb-4">
                <input type={type=="password" ? showPassword? "text" : type : type} name={name} placeholder={placeholder} defaultValue={value}
                    className='w-[100%] rounded-md p-3 bg-gray-200 pl-12 border border-gray-200 focus:bg-transparent placeholder:text-black' />
                <i class={"fi fi-rr-" + icon + " absolute left-4 top-1/2 -translate-y-1/2 mt-0.5 text-black"}></i>
                {type === "password" ? <i class={"fi fi-rr-eye" + (showPassword ? "" : "-crossed") + " absolute right-4 top-1/2 -translate-y-1/2 mt-0.5"} onClick={() => { setShowPassword(!showPassword) }}></i> : null}
            </div>
        </>
    )
}

export default InputComponent; 