import React from "react";
import PhoneImg from "../assets/phone.png";
import AccessoriesImg from "../assets/accessories.png";
import LiteratureImg from "../assets/literature.png";
import StatsImg from "../assets/stats.png";

function SubPagesUI() {
    const subSites = [
        {
            name: "Telefony",
            path: "/phones",
            active: true,
            imgPath: PhoneImg.src,
        },
        {
            name: "Akcesoria",
            path: "/accessories",
            active: true,
            imgPath: AccessoriesImg.src,
        },
        {
            name: "Literatura",
            path: "/literature",
            active: true,
            imgPath: LiteratureImg.src,
        },
        {
            name: "Statystyki",
            path: "/stats",
            active: true,
            imgPath: StatsImg.src,
        },
    ];

    const subSitesHtml = subSites.map((site) => {
        if (!site.active) return;

        return (
            <div
                key={site.name}
                className="bg-white border-[3px] border-black flex flex-col mt-4 hover:bg-slate-400 transition-all duration-300 ease-in-out p-2 pt-4"
            >
                <a
                    href={site.path}
                    className="flex flex-col justify-center w-full items-center"
                >
                    <img src={site.imgPath} alt={site.name} className="h-80" />
                    <p className="text-2xl font-bold p-2">{site.name}</p>
                </a>
            </div>
        );
    });

    return (
        <div className="w-full h-full flex flex-row flex-wrap p-4 gap-4 justify-center">
            {subSitesHtml}
        </div>
    );
}

export default SubPagesUI;
