import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://zfljexksuojxmuyfvesw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbGpleGtzdW9qeG11eWZ2ZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDUyODgsImV4cCI6MjA1MzAyMTI4OH0.6Kqr2x_LpoLSpZf51Pb6pseOlYSFvUjr20URch0uWlo')

export default supabase