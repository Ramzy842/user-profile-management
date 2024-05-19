import React, { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import AccountForm from "../components/AccountForm";
import Banner from "../components/Banner";

const Account = () => {
    const [data, setData] = useState([
        { id: 0, title: "First Name", value: "" },
        { id: 1, title: "Last Name", value: "" },
        { id: 2, title: "Bio", value: "" },
        { id: 3, title: "City", value: "" },
        { id: 4, title: "Hometown", value: "" },
        { id: 5, title: "School", value: "" },
        { id: 6, title: "Major", value: "" },
        { id: 7, title: "Work", value: "" },
    ]);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="min-h-screen  bg-light-cyan p-8">
            <Banner title="Account" bgColor="bg-[#324341]" textColor="white" />
            <div className="max-w-md md:max-w-3xl mx-auto">
                <div className="flex justify-end lg:hidden ">
                    <img
                        src="./assets/menu.svg"
                        className="mb-2 w-12 h-16 cursor-pointer"
                        alt="menu"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>
                {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
                <div className="h-full w-full">
                    <h1 className="text-3xl mb-8 font-semibold">Account</h1>
                    <div className=" flex flex-col md:flex-row md:justify-between">
                        <div className="mb-6">
                            <h2 className="text-xl font-medium">Profile</h2>
                            <p className="text-sm text-[#505453]">
                                This information will be public
                            </p>
                        </div>
                        <AccountForm setData={setData} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
