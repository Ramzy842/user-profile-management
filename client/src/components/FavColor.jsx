import React from "react";
import ColorPicker from "./ColorPicker";

const FavColor = () => {
    return (
        <div className="flex flex-col items-end pr-2 py-2 relative">
            <p className="font-bold mb-1">Favorite Color</p>
            <ColorPicker />
        </div>
    );
};

export default FavColor;
