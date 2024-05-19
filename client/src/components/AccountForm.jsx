import React from "react";
import ProfileInput from "./ProfileInput";
import DarkMode from "./DarkMode";
import Button from "./Button";

const AccountForm = ({ data, setData }) => {
    return (
        <form
        className="md:w-1/2"
            onSubmit={(e) => {
                e.preventDefault();
                console.log(data);
                let resetData = data.map((elem) => ({ ...elem, value: "" }));
                setData(resetData);
            }}
        >
            {data.map((obj) => {
                return (
                    <ProfileInput
                        key={obj.id}
                        id={obj.id}
                        title={obj.title}
                        obj={obj}
                        data={data}
                        setData={setData}
                    />
                );
            })}
            <DarkMode />
            <Button bgColor="bg-blue-600" textColor="white" text="Save" />
        </form>
    );
};

export default AccountForm;
