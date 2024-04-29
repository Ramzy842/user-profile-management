import React from "react";

const ColorPicker = () => {
    return (
        <div className="w-full flex justify-end pr-4">
            <div className="w-24 h-8 bg-cyan-400 relative drop-shadow-lg rounded-md">
                <img src="./assets/edit.svg" className="bg-black rounded-md h-full cursor-pointer" alt="edit" />
            </div>
        </div>
    );
};

export default ColorPicker;
