import linkIcon from "../assets/linkIcon.svg";
import type { PhoneData } from "../utils/interface/PhoneData";

const PhoneEntry = ({ data }: { data: PhoneData }) => {
    return (
        <div className="bg-white border-[3px] border-black flex flex-col min-w-80 w-[24%]">
            <div className="bg-mainBgDark text-lg p-2 font-bold font-pixeledFont flex flex-row justify-between items-center">
                <h1>
                    {data.producent} {data.model}
                </h1>
                <div className="flex">
                    <a href={`/phoneDetails?id=${data.id}`}>
                        {" "}
                        <img
                            src={linkIcon.src}
                            alt="Link Icon"
                            className="w-6"
                        />{" "}
                    </a>
                </div>
            </div>
            <div className="flex flex-col p-2">
                <p>oznaczenie: {data.oznaczenie}</p>
                <p>kolor: {data.kolor}</p>
                <p>sprawny: {data.sprawny ? "tak" : "nie"}</p>
                <p>opakowanie: {data.opakowanie ? "tak" : "nie"}</p>
                <p>stan: {data.stan}</p>
                <p>kraj: {data.kraj}</p>
                <p>jezyk: {data.jezyk}</p>
                <p>
                    <span className="text-red-800">uwagi:</span> {data.uwagi}
                </p>
            </div>
        </div>
    );
};

export default PhoneEntry;
