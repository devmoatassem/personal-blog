import React from "react";

const ActionButton = ({ text, customClass, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={
        "whitespace-nowrap rounded-full py-2 px-6 text-xl capitalize hover:bg-opacity-70 " +
        customClass
      }
    >
      {text}
    </button>
  );
};

export default ActionButton;
