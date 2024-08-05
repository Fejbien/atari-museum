import binIcon from "../assets/binIcon.svg";

interface PhoneData {
    id: number;
    producent: string;
    model: string;
    oznaczenie: string;
    kolor: string;
    sprawny: boolean;
    stan: string;
    numer_seryjny: string;
    kraj: string;
    jezyk: string;
    simlock: string;
    uwagi: string;
    opakowanie: boolean;
    rok_produkcji: Date;
    zdarzenie: string;
    model_baterii: string;
    made: Date;
    life_timer: string;
    posiadany: boolean;
}

const FullPhoneEntry = ({ data }: { data: PhoneData }) => {
    return (
        <div class="bg-white border-[3px] border-black flex flex-col mt-4 min-w-80 w-[24%]">
            <div class="bg-mainBgDark text-lg p-2 font-bold font-pixeledFont flex flex-row justify-between items-center">
                <h1>{data.producent} {data.model}</h1>
            </div>
            <div class="flex flex-col p-2">
                <p>id: {data.id} </p>
                <p>producent: {data.producent}</p>
                <p>model: {data.model}</p>
                <p>oznaczenie: {data.oznaczenie}</p>
                <p>kolor: {data.kolor}</p>
                <p>sprawny: {data.sprawny ? "tak" : "nie"}</p>
                <p>stan: {data.stan}</p>
                <p>numer seryjny: {data.numer_seryjny}</p>
                <p>kraj: {data.kraj}</p>
                <p>jezyk: {data.jezyk}</p>
                <p>simlock: {data.simlock}</p>
                <p>uwagi: {data.uwagi}</p>
                <p>opakowanie: {data.opakowanie ? "tak" : "nie"}</p>
                <p>rok produkcji: {data.rok_produkcji ? data.rok_produkcji.toString() : 'N/A'}</p>
                <p>zdarzenie: {data.zdarzenie}</p>
                <p>model baterii: {data.model_baterii}</p>
                <p>made: {data.made ? data.made.toString() : 'N/A'}</p>
                <p>life_timer: {data.life_timer}</p>
                <p>posiadany: {data.posiadany ? "tak" : "nie"}</p>
                <p><span class="text-red-800">uwagi:</span> {data.uwagi}</p>
            </div>
        </div>
    );
};

export default FullPhoneEntry;