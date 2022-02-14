// Enter Supabase Information
const SUPABASE_URL = 'https://hivhhethskjbmsiiuepr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdmhoZXRoc2tqYm1zaWl1ZXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU1ODUsImV4cCI6MTk2MDAxMTU4NX0.3tUMXfEr4bDY-62YnajMALVtGgKdGMrYB3yDPPU19qM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    
    return response.user;
}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
