import React, { useEffect, useState } from "react";
import moment from "moment";
const CurrentTime = () => {
    const [date, setDate] = useState(null);
    useEffect(() => {
        setInterval(() => {
            setDate({
                calendarDate: moment().format("l"),
                currenTime: moment().format("LTS"),
                fullYear: moment().format("LL"),
            });
        }, 1000);
    }, []);
    if (!date) return <div>Loading...</div>;
    return (
        date && (
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center ">
                    <p className="text-md font-bold mb-2 quantico-regular">
                        {date.calendarDate}
                    </p>
                    <p className="text-md font-bold mb-2 quantico-regular">
                        {date.fullYear}
                    </p>
                    <div className=" flex items-end mb-2 p-4">
                        <p className="text-8xl  drop-shadow-lg quantico-regular ">
                            {date.currenTime.substr(0, 4)}
                        </p>
                        <span className="text-3x quantico-regular">
                            {date.currenTime.substr(4, 4)}
                        </span>
                    </div>
                </div>
                <p className="text-8xl font-bold quantico-regular bg-black text-white py-4 px-6 drop-shadow-lg">
                    {date.currenTime.substr(8, 2)}
                </p>
            </div>
        )
    );
};

export default CurrentTime;
