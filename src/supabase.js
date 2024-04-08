import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('' +
    'https://fmmpfaasqgjpjdecbtht.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbXBmYWFzcWdqcGpkZWNidGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MTQzMzksImV4cCI6MjAyNjM5MDMzOX0.Xm0x4GkYjxtBC0lawaynt_1pGv_chslCwB8qao2Oz-4')