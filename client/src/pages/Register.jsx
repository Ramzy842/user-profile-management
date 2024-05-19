import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
    return (
        <div className="min-h-screen bg-light-cyan">
            <div className="bg-logo p-8 uppercase italic tracking-widest flex justify-center items-center">
                <h1 className="text-5xl font-extrabold">Profile Manager</h1>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="max-w-sm w-11/12 mx-auto mt-12"
            >
                <Input title="Username" type="text" />
                <Input title="Email" type="text" />
                <Input title="Password" type="password" />
                <Input title="Password Confirmation" type="password" />
                <p className="text-sm mb-6">
                    You have an account?{" "}
                    <a
                        href="/register"
                        className="font-semibold text-form-input border-b border-black"
                    >
                        Sign in
                    </a>
                </p>
                <div className="w-full flex justify-center items-center flex-col">
                    <Button
                        bgColor="bg-blue-700"
                        textColor="white"
                        text="Register"
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;
