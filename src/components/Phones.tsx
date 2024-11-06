import React, { useEffect, useState } from "react";
import type { PhoneData } from "../utils/interface/PhoneData";
import PhoneEntry from "./PhoneEntry";

// TODO Add filtering

function Phones() {
    const [data, setData] = useState<PhoneData[] | null>(null);

    useEffect(() => {
        fetch("/api/phones/getPhones")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="flex justify-center flex-row h-full">
            <div className="flex flex-col w-1/6 p-4 bg-white border-[3px] border-black m-4 h-full">
                <h1 className="text-3xl font-bold">Telefony</h1>
                <p className="text-lg">(tutaj bedzie filtorwanie)</p>
            </div>
            <div className="flex flex-row w-full h-full gap-4 flex-wrap 2xl overflow-y-auto mt-4">
                {data &&
                    data.map((item: PhoneData) => {
                        return <PhoneEntry key={item.id} data={item} />;
                    })}
            </div>
        </div>
    );
}

export default Phones;
