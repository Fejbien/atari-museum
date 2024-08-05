import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.API_URL,
  import.meta.env.API_KEY
);