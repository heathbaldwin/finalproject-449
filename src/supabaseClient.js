import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yahummjutvcswczehric.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaHVtbWp1dHZjc3djemVocmljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4ODU5ODcsImV4cCI6MTk5ODQ2MTk4N30.ExB42YEkH4Jvsajn6BajqSfNujMvUCEzwfyhhXxxxDI';
export const supabase = createClient(supabaseUrl, supabaseKey);
