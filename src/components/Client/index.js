import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dnifkmzuljldxgpkvmyz.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaWZrbXp1bGpsZHhncGt2bXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMjQyMTQsImV4cCI6MjAyNzgwMDIxNH0.wqnQslPHQe186rLooTU4EZcwBFIpGxYHjYJr3pKtJys";

export const supabase = createClient(supabaseUrl, supabaseKey);
