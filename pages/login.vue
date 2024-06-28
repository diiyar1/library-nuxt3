<template>
    <div class="login form capitalize">
        <div class="h-screen overflow-hidden flex items-center justify-center">
            <div class="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
              <div class="bg-purp shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </div>
              <form class="p-12 md:p-24" @submit.prevent="signIn">
                <!-- user email -->
                <div class="flex items-center text-lg mb-6 md:mb-8">
                  <Icon name="ic:round-email" class="absolute ml-3 text-3xl text-gray-800"  />          
                  <input type="email" id="email" v-model="email" required fill="#4a5568"
                    class="bg-gray-200 text-prup3 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Email" />
                </div>
                <!-- user password -->
                <div class="flex items-center text-lg mb-6 md:mb-8">
                  <Icon name="mdi:password" class="absolute ml-3 text-3xl text-gray-800"  />
                  <input type="password" id="password" v-model="password" required 
                  class="bg-gray-200 text-prup3 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" 
                  placeholder="Password" />
                </div>
               <div class="flex justify-between ">
                <div class="flex space-x-2 text-rose-500  font-medium">
                  <p>Don't have an email</p>
                  <div class="group">
                    <NuxtLink to="/register" class="group hover:text-blue-800 hover:underline">register</NuxtLink>
                 
                  </div>
                </div>
                  <button type="submit" class=" bg-purp hover:bg-darkPrup  hover:text-indigo-50 w-20 h-10  font-medium p-2  text-white  rounded">
                    Login
                  </button>
               </div>
              </form>
            </div>
            <div v-if="successMsg" class="success-msg fixed top-3 bg-green-400 p-4 rounded-md ">{{ successMsg }}</div>
            <div v-if="errorMsg" class="error-msg fixed top-3 bg-red-400 p-4 rounded-md ">{{ errorMsg }}</div>
           </div>

       
    </div>
</template>

<script setup>
definePageMeta({
    layout:false
})
const client = useSupabaseClient()
const router = useRouter()

const email = ref('');
const password = ref('');
const errorMsg = ref(null);
const successMsg =ref('')


async function signIn() {
    try {
        const { data, error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (error) throw error;
        successMsg.value = 'Login successful!'
        router.push('/')
    } catch (error) {
        errorMsg.value = error.message
    }
}

</script>
