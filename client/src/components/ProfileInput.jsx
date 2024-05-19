import React, { useEffect, useState } from "react";

const ProfileInput = ({ title, data, setData, obj }) => {
    const handleChange = (e) => {
        let newData = data.map((element) => {
            if (element.id !== obj.id) return element;
            return { ...element, value: e.target.value };
        });
        setData(newData);
    };
    return (
        data && (
            <div className="flex flex-col mb-4">
                <label htmlFor={title} className="text-sm font-bold mb-2">
                    {title}
                </label>
                <input
                    type="text"
                    className="h-10 px-2 bg-profile-input"
                    placeholder={obj.title}
                    value={obj.value}
                    onChange={handleChange}
                />
            </div>
        )
    );
};

export default ProfileInput;
