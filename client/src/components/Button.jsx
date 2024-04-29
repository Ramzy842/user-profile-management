import React from "react";

const Button = ({ text, bgColor, handler, textColor }) => {
    return <button className={`${bgColor} font-bold text-xl px-4 py-2 max-w-lg text-${textColor}`} onClick={handler} >{text}</button>;
};

export default Button;
