import React, { useState } from "react";
import Info from "../components/Info";
import ColorPicker from "../components/ColorPicker";
import FavColor from "../components/FavColor";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="min-h-screen bg-light-cyan p-2 w-full relative">
            <div className="max-w-lg mx-auto">
                <div className="flex justify-between items-start mb-6">
                    <div className="pt-2 w-1/2">
                        <h1 className="font-bold text-3xl">Jon Doe</h1>
                        <h2 className="text-green-cyan  text-8xl rubik-moonrocks-regular drop-shadow-md filter mb-2">
                            23
                        </h2>
                        <p className="text-sm max-w-sm break-words">
                            This is one hell of a bio 🙃
                        </p>
                    </div>
                    <div className="flex flex-col items-end mb-2">
                        <img
                            src="./assets/menu.svg"
                            className="mb-2 w-12 h-16 cursor-pointer"
                            alt="menu"
                            onClick={handleMenu}
                        />
                        <div className="h-32 w-32 bg-cyan-500  drop-shadow-lg rounded-full mr-2"></div>
                    </div>
                </div>
                <Info />
                <FavColor />
                {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
            </div>
        </div>
    );
};

export default Home;
