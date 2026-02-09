import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cachedClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (!cachedClient) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Supabase environment variables are not configured.");
    }
    cachedClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return cachedClient;
}
