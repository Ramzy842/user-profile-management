import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
    const [color, setColor] = useState("#26c5c3");
    const [showPicker, setShowPicker] = useState(false);

    useEffect(() => {
        document.querySelector("body").addEventListener("keydown", (e) => {
            if (e.keyCode === 27) setShowPicker(false);
        });
        return () => {
            document
                .querySelector("body")
                .removeEventListener("keydown", () => {});
        };
    }, []);
    return (
        <div className="w-full flex justify-end items-start items-center relative mb-12">
            <div className="left-0 z-20">
                {showPicker && (
                    <ChromePicker
                        color={color}
                        onChange={(updatedColor) => setColor(updatedColor.hex)}
                    />
                )}
            </div>
            <div
                style={{ backgroundColor: color }}
                className={`w-24 h-10 drop-shadow-lg rounded-md flex items-center px-1 self-start`}
            >
                <img
                    src="./assets/edit.svg"
                    className={`bg-black rounded-md h-4/5 cursor-pointer absolute ${showPicker && 'right-0'}`}
                    alt="edit"
                    onClick={() => setShowPicker(!showPicker)}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
