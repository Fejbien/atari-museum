import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://bulngrtrwzotkyasnwml.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bG5ncnRyd3pvdGt5YXNud21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzOTMxMDcsImV4cCI6MjAyNjk2OTEwN30.5rlOWe79b8gNHPHet3L6Le56XFU27hX_yG5BfoNdK00"
);

export { supabase as s };
