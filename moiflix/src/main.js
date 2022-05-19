import { createApp } from 'vue'
import App from './App.vue'
import { createClient } from '@supabase/supabase-js'

const client = createClient('https://rmyhljhzbmxavumbuzgm.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZGFpZnFld2h4bHdtZG5wbHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5NzQzODEsImV4cCI6MTk2ODU1MDM4MX0.dG_9QYSzi5u_BJMjRgnH0oBFnPcJ-TXRwVyddrQD_zo');

// client.from('MESSAGES').on('*', payload => {
//     console.log('¡Cambios recibidos!', payload)
// }).subscribe()


createApp(App).mount('#app')



