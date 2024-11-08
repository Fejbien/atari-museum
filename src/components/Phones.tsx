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
                <div className="mt-6 space-y-4">
                    <h2 className="text-lg font-semibold">Filtry</h2>

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
                        <option value="">Stan (wszystkie)</option>
                        <option value="nowy">Nowy</option>
                        <option value="używany">Używany</option>
                    </select>

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
                        <option value="">-- Wybierz kraj --</option>
                        {countries.map((country: any) => (
                            <option key={country.code} value={country.code}>
                                {country.flag} {country.name}
                            </option>
                        ))}
                    </select>

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
                        <option value="">Sprawny (wszystko)</option>
                        <option value="true">Tak</option>
                        <option value="false">Nie</option>
                    </select>

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
                        <option value="">Opakowanie (wszystko)</option>
                        <option value="true">Tak</option>
                        <option value="false">Nie</option>
                    </select>

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
                        <option value="">Posiadany (wszystko)</option>
                        <option value="true">Tak</option>
                        <option value="false">Nie</option>
                    </select>

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
                            });
                            setFilters((prev) => ({
                                ...prev,
                                sprawny: undefined,
                                opakowanie: undefined,
                                posiadany: undefined,
                            }));
                        }}
                        className="w-full p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Wyczyść filtry
                    </button>
                </div>
            </div>

            {/* Phone list */}
            <div className="flex flex-row w-full h-full gap-4 flex-wrap 2xl overflow-y-auto mt-4">
                {fetchedData?.map((item) => (
                    <PhoneEntry key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Phones;
