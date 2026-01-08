import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
    console.error('Missing or invalid VITE_SUPABASE_URL in .env');
}

if (!supabaseAnonKey) {
    console.error('Missing VITE_SUPABASE_ANON_KEY in .env');
}

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase Environment Variables! Check your .env file or Vercel settings.');
}

// Prevent crash if keys are missing (common in build/deployment setup)
let supabaseInstance;
try {
    if (!supabaseUrl || !supabaseAnonKey) throw new Error('Missing keys');
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} catch (e) {
    console.warn('Supabase failed to initialize. Using mock client strictly for build/render safety.');
    // Mock minimal functionality to prevent runtime crash
    supabaseInstance = {
        auth: {
            getSession: () => Promise.resolve({ data: { session: null } }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
            signUp: () => Promise.reject(new Error("Supabase not configured")),
            signInWithPassword: () => Promise.reject(new Error("Supabase not configured")),
            signOut: () => Promise.resolve(),
        }
    } as any;
}

export const supabase = supabaseInstance;
