import React from "react";

const MobileMenu = ({setShowMenu}) => {
    return (
        <div className="min-h-screen font-bold  min-w-screen bg-white absolute top-0 bottom-0 left-0 right-0">
            <div className="flex justify-end mb-4">
                <img src="./assets/x.svg" alt="close" className="w-16 h-16 m-2 cursor-pointer z-20" onClick={() => setShowMenu(false)} />
            </div>

            <div className="items-center justify-center flex flex-col absolute top-0 w-full h-full">
                <a className="text-5xl mb-8 cursor-pointer hover:text-4xl px-4">
                    Home
                </a>
                <a className="text-5xl mb-8 cursor-pointer hover:text-4xl px-4">
                    Settings
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;
