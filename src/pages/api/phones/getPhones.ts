import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";
import type { PhoneData } from "../../../utils/interface/PhoneData";

interface CacheItem {
    data: any;
    timestamp: number;
    count: number;
}

const cache = new Map<string, CacheItem>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

supabase
    .channel("public:telefony")
    .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "telefony" },
        () => {
            console.log("Data changed, clearing cache...");
            cache.clear();
        }
    )
    .subscribe();

export const GET: APIRoute = async ({ request }): Promise<Response> => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const page = parseInt(url.searchParams.get("page") || "1");

    const cacheKey = url.search;
    const now = Date.now();

    const cached = cache.get(cacheKey);
    if (cached && now - cached.timestamp < CACHE_TTL) {
        console.log("Cache hit!");
        return new Response(
            JSON.stringify({
                data: cached.data,
                pagination: {
                    page,
                    limit,
                    total: cached.count,
                    totalPages: Math.ceil(cached.count / limit),
                },
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "X-Cache": "HIT",
                },
            }
        );
    }

    const filters = {
        producent: url.searchParams.has("producent")
            ? url.searchParams.get("producent")
            : null,
        model: url.searchParams.has("model")
            ? url.searchParams.get("model")
            : null,
        kolor: url.searchParams.has("kolor")
            ? url.searchParams.get("kolor")
            : null,
        sprawny: url.searchParams.has("sprawny")
            ? url.searchParams.get("sprawny") === "true"
            : null,
        stan: url.searchParams.has("stan")
            ? url.searchParams.get("stan")
            : null,
        kraj: url.searchParams.has("kraj")
            ? url.searchParams.get("kraj")
            : null,
        jezyk: url.searchParams.has("jezyk")
            ? url.searchParams.get("jezyk")
            : null,
        simlock: url.searchParams.has("simlock")
            ? url.searchParams.get("simlock")
            : null,
        opakowanie: url.searchParams.has("opakowanie")
            ? url.searchParams.get("opakowanie") === "true"
            : null,
        rok_produkcji: url.searchParams.has("rok_produkcji")
            ? url.searchParams.get("rok_produkcji")
            : null,
        posiadany: url.searchParams.has("posiadany")
            ? url.searchParams.get("posiadany") === "true"
            : null,
    };

    console.log("Applied filters:", filters);
    console.log("Cache miss!");

    let query = supabase.from("telefony").select("*", { count: "exact" });

    if (filters.producent !== null)
        query = query.ilike("producent", `%${filters.producent}%`);
    if (filters.model !== null)
        query = query.ilike("model", `%${filters.model}%`);
    if (filters.kolor !== null)
        query = query.ilike("kolor", `%${filters.kolor}%`);
    if (filters.stan !== null) query = query.eq("stan", filters.stan);
    if (filters.kraj !== null) query = query.eq("kraj", filters.kraj);
    if (filters.jezyk !== null) query = query.eq("jezyk", filters.jezyk);
    if (filters.simlock !== null) query = query.eq("simlock", filters.simlock);
    if (filters.rok_produkcji !== null) {
        const year = filters.rok_produkcji;
        query = query
            .gte("rok_produkcji", `${year}-01-01`)
            .lte("rok_produkcji", `${year}-12-31`);
    }
    if (filters.sprawny !== null) query = query.eq("sprawny", filters.sprawny);
    if (filters.opakowanie !== null)
        query = query.eq("opakowanie", filters.opakowanie);
    if (filters.posiadany !== null)
        query = query.eq("posiadany", filters.posiadany);

    //console.log("Query:", query);

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await query
        .range(from, to)
        .order("id", { ascending: true });

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }

    cache.set(cacheKey, {
        data,
        timestamp: now,
        count: count || 0,
    });

    return new Response(
        JSON.stringify({
            data: data || [],
            pagination: {
                page,
                limit,
                total: count || 0,
                totalPages: Math.ceil((count || 0) / limit),
            },
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "X-Cache": "MISS",
            },
        }
    );
};
