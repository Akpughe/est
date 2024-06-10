import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mcakbshrzdvmqxzbhmxr.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jYWtic2hyemR2bXF4emJobXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5NTAxOTEsImV4cCI6MjAzMzUyNjE5MX0.x4LUYHt9SZtraeKa-K8pRGxOvTgQttF0uiKm9Ot0vIA";

export const supabase = createClient(supabaseUrl, supabaseKey);
