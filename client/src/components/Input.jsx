import React, { useState } from "react";

const Input = ({ title, type }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col mb-4">
            <label className="font-bold mb-2 text-xl">{title}</label>
            {type === "password" ? (
                <div className="relative bg-form-input flex">
                    <input
                        type={showPassword ? "text" : type}
                        placeholder={title}
                        className="h-12 px-2 bg-form-input placeholder:text-white text-white flex-grow outline-none"
                    />
                    {showPassword ? (
                        <img
                            src="../assets/eye.svg"
                            alt="hide password"
                            className="px-4 cursor-pointer"
                            onClick={() => setShowPassword(false)}
                        />
                    ) : (
                        <img
                            src="../assets/eye-off.svg"
                            alt="show password"
                            className="px-4 cursor-pointer"
                            onClick={() => setShowPassword(true)}
                        />
                    )}
                </div>
            ) : (
                <input
                    type={type}
                    placeholder={title}
                    className="h-12 px-2 bg-form-input placeholder:text-white text-white"
                />
            )}
        </div>
    );
};

export default Input;
