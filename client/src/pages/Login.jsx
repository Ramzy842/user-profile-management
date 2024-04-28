import React from "react";
import Input from "../components/Input";

const Login = () => {
    return (
        <div className="min-h-screen bg-light-cyan">
            <div className="bg-gray-300 p-8 uppercase italic tracking-widest flex justify-center items-center">
                <h1 className="text-5xl font-extrabold">Profile Manager</h1>
            </div>
            <div className="max-w-sm w-11/12 mx-auto mt-12">
                <Input title="Email" type="text" />
                <Input title="Password" type="password" />
            </div>
        </div>
    );
};

export default Login;
