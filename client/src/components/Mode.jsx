import React, { useState } from "react";

const Mode = () => {
    const [mode, setMode] = useState("light");
    return (
        <div
            onClick={() => {
                if (mode === "light") setMode("dark");
                else setMode("light");
            }}
            className={`select-none cursor-pointer border-black ${
                mode === "light"
                    ? "bg-yellow-700 justify-end"
                    : "bg-blue-800 justify-start"
            } w-24 h-8 flex items-center rounded-full overflow-hidden`}
        >
            <img
                src={`${
                    mode === "light" ? "/assets/sun.svg" : "/assets/moon.svg"
                }`}
                className={`${
                    mode === "light" ? "bg-yellow-400" : "bg-blue-400"
                } rounded-full p-1 flex justify-center items-center`}
            />
        </div>
    );
};

export default Mode;
