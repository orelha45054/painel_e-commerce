// ============================================================
// Credenciais do Supabase — preencha com os dados do SEU projeto
// Settings → API no painel do Supabase
// ============================================================

const SUPABASE_URL = "https://wiqwbmaaobselfxauatp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcXdibWFhb2JzZWxmeGF1YXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwODgyMTAsImV4cCI6MjA5OTY2NDIxMH0.lUFtGcFn4oJQxnH92j1dgQEVjFi5QpSj3TsGqnwKFxo";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
