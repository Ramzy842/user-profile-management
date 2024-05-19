import React, { useState } from "react";

const MobileMenu = ({ setShowMenu }) => {
    const [links, setLinks] = useState([
        { id: 0, link: "Home" },
        { id: 1, link: "Settings", subLinks: [{ id: 0, sublink: "Account" }] },
    ]);
    const [showSublinks, setShowSublinks] = useState(false);
    return (
        <div className="min-h-screen  text-white min-w-screen bg-form-input absolute top-0 bottom-0 left-0 right-0 z-50">
            <div className="flex justify-end mb-4">
                <img
                    src="./assets/x.svg"
                    alt="close"
                    className="w-16 h-16 m-2 cursor-pointer z-20"
                    onClick={() => setShowMenu(false)}
                />
            </div>

            <div className=" items-start flex  flex-col absolute top-64 w-full ">
                {links.map((link) => {
                    return (
                        <div
                            key={link.id}
                            className="text-3xl mb-8 px-8 py-2 cursor-pointer flex flex-col items-start"
                            onClick={(e) => {
                                if(e.target.classList.contains("link"))
                                    setShowSublinks(!showSublinks);
                            }}
                        >
                            <div className="flex items-center link">
                                <a className="mr-2 link font-medium">{link.link}</a>
                                {link.subLinks && (
                                    <img
                                        src="./assets/chevron-down.svg"
                                        alt="expand"
                                        className={`link h-8 w-8 ${
                                            showSublinks && "rotate-180"
                                        }`}
                                    />
                                )}
                            </div>

                            {link.subLinks &&
                                showSublinks &&
                                link.subLinks.map((sublink) => {
                                    return (
                                        <a
                                            className="text-sm mt-4 font-medium ml-4 sublink"
                                            key={sublink.id}
                                            
                                        >
                                            {sublink.sublink}
                                        </a>
                                    );
                                })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileMenu;
