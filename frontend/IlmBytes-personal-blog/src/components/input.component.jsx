import { useState } from "react";
const InputComponent = ({
  type,
  name,
  placeholder,
  value,
  icon,
  onchange,
  onblur,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  console.log(error); 
  console.log(touched);
  return (
    <>
      <div className="relative w-full mb-4">
        <div className="flex items-center">
          <input
            type={type == "password" ? (showPassword ? "text" : type) : type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            onBlur={onblur}
            className="w-[100%] rounded-md p-3 bg-gray-200 pl-12 border border-gray-200 focus:bg-transparent placeholder:text-black"
          />
          <i
            className={"fi fi-rr-" + icon + " absolute left-4 mt-1 text-black"}
          ></i>
          {type === "password" ? (
            <i
              className={
                "fi fi-rr-eye" +
                (showPassword ? "" : "-crossed") +
                " absolute right-4 mt-1 text-black"
              }
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            ></i>
          ) : null}
        </div>
       
        {touched && error ? (
            <p className="text-xs text-red-600">{error}</p>
        ) : null}
      </div>
    </>
  );
};

export default InputComponent;

// ////////////////////////////////////////
// Classic way of centering the icons in the input field
//////////////////////////////////////////
{
  /* <div className="relative w-full mb-4 flex items-center">
                <input type={type=="password" ? showPassword? "text" : type : type} name={name} placeholder={placeholder} value={value} onChange={onchange}
                    className='w-[100%] rounded-md p-3 bg-gray-200 pl-12 border border-gray-200 focus:bg-transparent placeholder:text-black' />
                <i class={"fi fi-rr-" + icon + " absolute left-4 top-1/2 -translate-y-1/2 mt-0.5 text-black"}></i>
                {type === "password" ? <i class={"fi fi-rr-eye" + (showPassword ? "" : "-crossed") + " absolute right-4 top-1/2 -translate-y-1/2 mt-0.5"} onClick={() => { setShowPassword(!showPassword) }}></i> : null}
                
            </div> */
}
