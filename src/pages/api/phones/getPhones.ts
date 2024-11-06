// src/pages/api/phones/getPhones.ts
import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";

export const GET: APIRoute = async ({ request }): Promise<Response> => {
    const { data, error } = await supabase.from("telefony").select("*");

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
};

/*
// src/pages/api/phones/getPhones.ts
import type { APIRoute } from "astro";
import { supabase } from "../../../utils/supabase";

export const GET: APIRoute = async ({ request }): Promise<Response> => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const page = parseInt(url.searchParams.get('page') || '1');
    
    // Calculate range start and end
    const rangeStart = (page - 1) * limit;
    const rangeEnd = rangeStart + limit - 1;

    const { data, error, count } = await supabase
        .from("telefony")
        .select("*", { count: 'exact' })
        .range(rangeStart, rangeEnd);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }

    return new Response(JSON.stringify({
        data,
        pagination: {
            page,
            limit,
            total: count,
            totalPages: Math.ceil((count || 0) / limit)
        }
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
};
*/
