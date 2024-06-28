// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss:{
    plugins:{
      tailwindcss:{},
      autoprefixer:{},
      
    }
  },
  app:{
    pageTransition: {name:'page', mode: 'out-in'}
  },

  
  modules:['@nuxt/ui', 'nuxt-icon', '@pinia/nuxt', "@nuxtjs/supabase", ],
  
  supabase:{
    redirect:false
  }


  
})