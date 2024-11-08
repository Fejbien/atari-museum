import React, { useEffect, useState } from "react";
import type { PhoneData } from "../utils/interface/PhoneData";
import PhoneEntry from "./PhoneEntry";

// TODO Add filtering

function Phones() {
    const [fetchedData, setfetchedData] = useState<PhoneData[] | null>(null);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetch(`/api/phones/getPhones?page=${page}&limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                setfetchedData(data.data);
                setTotalPages(data.pagination.totalPages);
            });
    }, [page, limit]);

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className="flex justify-center flex-row h-full">
            <div className="flex flex-col w-1/6 p-4 bg-white border-[3px] border-black m-4 h-full">
                <h1 className="text-3xl font-bold">Telefony</h1>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Ilosc telefonow na stronie
                    </label>
                    <select
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    >
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={32}>32</option>
                    </select>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                    >
                        <span>&lt;</span>
                    </button>
                    <span>
                        Strona {page} z {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                    >
                        <span>&gt;</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-row w-full h-full gap-4 flex-wrap 2xl overflow-y-auto mt-4">
                {fetchedData &&
                    fetchedData.map((item: PhoneData) => {
                        return <PhoneEntry key={item.id} data={item} />;
                    })}
            </div>
        </div>
    );
}

export default Phones;
