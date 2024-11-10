import React, { useEffect, useState } from "react";
import type { PhoneData } from "../utils/interface/PhoneData";
import PhoneEntry from "./PhoneEntry";
import { countries } from "../utils/countries";

// TODO Add every country to the select

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

function Phones() {
    const [fetchedData, setfetchedData] = useState<PhoneData[] | null>(null);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(8);
    const [totalPages, setTotalPages] = useState<number>(1);

    const [immediateFilters, setImmediateFilters] = useState({
        producent: "",
        model: "",
        kolor: "",
        stan: "",
        kraj: "",
        jezyk: "",
        simlock: "",
        rok_produkcji: "",
    });

    const [filters, setFilters] = useState({
        ...immediateFilters,
        sprawny: undefined as boolean | undefined,
        opakowanie: undefined as boolean | undefined,
        posiadany: undefined as boolean | undefined,
    });

    // Debounce text inputs with 500ms delay
    const debouncedFilters = useDebounce(immediateFilters, 500);

    // Update filters when debounced values change
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            ...debouncedFilters,
        }));
    }, [debouncedFilters]);

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };
    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    // Update fetch with filters
    useEffect(() => {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
        });

        // Add non-empty filters to params
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== "") {
                params.append(key, value.toString());
            }
        });

        fetch(`/api/phones/getPhones?${params.toString()}`)
            .then((response) => response.json())
            .then((data) => {
                setfetchedData(data.data);
                setTotalPages(data.pagination.totalPages);
            });
    }, [page, limit, filters]);

    const scrollbarStyles = {
        scrollbarWidth: "thin",
        scrollbarColor: "#888888 #f1f1f1",

        "&::-webkit-scrollbar": {
            width: "6px",
        },

        "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb": {
            background: "#888888",
            borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb:hover": {
            background: "#555555",
        },
    };

    return (
        <div className="flex justify-center flex-row h-full">
            <div className="flex flex-col w-1/6 py-4 bg-white border-[3px] border-black m-4 h-full relative">
                <h1 className="text-3xl font-bold px-4">Telefony</h1>
                <div className="mt-4 px-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Ilosc telefonow na stronie
                    </label>
                </div>
                <div className="px-4">
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
                <div className="mt-4 flex items-center justify-between px-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                    >
                        <span>&lt;</span>
                    </button>
                    <span className="text-center">
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
                <div className="flex flex-col mt-4 h-full overflow-auto">
                    <h2 className="text-lg font-semibold px-4 mb-2">Filtry</h2>
                    <div
                        className="overflow-y-auto flex-grow space-y-4 pr-2 mb-4"
                        style={scrollbarStyles as React.CSSProperties}
                    >
                        <div className="px-4">
                            <input
                                type="text"
                                placeholder="Producent"
                                value={immediateFilters.producent}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        producent: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="px-4">
                            <input
                                type="text"
                                placeholder="Model"
                                value={immediateFilters.model}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        model: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="px-4">
                            <input
                                type="text"
                                placeholder="Kolor"
                                value={immediateFilters.kolor}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        kolor: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="px-4">
                            <select
                                value={filters.stan}
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        stan: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Stan: (wszystkie)</option>
                                <option value="nowy">Stan: Nowy</option>
                                <option value="używany">Stan: Używany</option>
                            </select>
                        </div>

                        <div className="px-4">
                            <select
                                value={filters.kraj}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        kraj: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Kraje: (Wszystkie)</option>
                                {countries.map((country: any) => (
                                    <option
                                        key={country.code}
                                        value={country.code}
                                    >
                                        {country.flag} {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="px-4">
                            <input
                                type="text"
                                placeholder="Język"
                                value={immediateFilters.jezyk}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        jezyk: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="px-4">
                            <input
                                type="text"
                                placeholder="Simlock"
                                value={immediateFilters.simlock}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        simlock: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="px-4">
                            <input
                                type="text"
                                placeholder="Rok produkcji"
                                value={immediateFilters.rok_produkcji}
                                onChange={(e) =>
                                    setImmediateFilters((prev) => ({
                                        ...prev,
                                        rok_produkcji: e.target.value,
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <div className="px-4">
                            <select
                                value={
                                    filters.sprawny === undefined
                                        ? ""
                                        : filters.sprawny.toString()
                                }
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        sprawny:
                                            e.target.value === ""
                                                ? undefined
                                                : e.target.value === "true",
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Sprawny: (wszystko)</option>
                                <option value="true">Sprawny: Tak</option>
                                <option value="false">Sprawny: Nie</option>
                            </select>
                        </div>

                        <div className="px-4">
                            <select
                                value={
                                    filters.opakowanie === undefined
                                        ? ""
                                        : filters.opakowanie.toString()
                                }
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        opakowanie:
                                            e.target.value === ""
                                                ? undefined
                                                : e.target.value === "true",
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Opakowanie: (wszystko)</option>
                                <option value="true">Opakowanie: Tak</option>
                                <option value="false">Opakowanie: Nie</option>
                            </select>
                        </div>

                        <div className="px-4">
                            <select
                                value={
                                    filters.posiadany === undefined
                                        ? ""
                                        : filters.posiadany.toString()
                                }
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        posiadany:
                                            e.target.value === ""
                                                ? undefined
                                                : e.target.value === "true",
                                    }))
                                }
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Posiadany: (wszystko)</option>
                                <option value="true">Posiadany: Tak</option>
                                <option value="false">Posiadany: Nie</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        setImmediateFilters({
                            producent: "",
                            model: "",
                            kolor: "",
                            stan: "",
                            kraj: "",
                            jezyk: "",
                            simlock: "",
                            rok_produkcji: "",
                        });
                        setFilters((prev) => ({
                            ...prev,
                            sprawny: undefined,
                            opakowanie: undefined,
                            posiadany: undefined,
                        }));
                    }}
                    className="w-auto p-2 bg-gray-200 rounded hover:bg-gray-300 mx-4"
                >
                    Wyczyść filtry
                </button>
            </div>

            <div className="flex flex-row w-full h-full gap-4 flex-wrap 2xl overflow-y-auto mt-4">
                {fetchedData?.map((item) => (
                    <PhoneEntry key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Phones;
