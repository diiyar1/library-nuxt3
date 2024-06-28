<template>
  
    <div class="p-5 m-4 bg-white w-fit  grid gap-y-4 rounded-md font-serif">
      
      <div class="flex space-x-5   pr-10 ">
        <div class="rounded-full bg-gray-200 h-10 w-10 border-2 border-prup2">
          <img src="https://avatars.githubusercontent.com/u/26052038?v=4" alt="Name" class=""/>
          <!-- mdi:user-circle -->
        </div>
        <div class="grid  gap-2">
          <div>
            <label for="name">Name</label>
            <p class="capitalize text-prup3 text-lg  border-b-2 border-prup2 bg-prup1 bg-opacity-10 rounded-md w-80 p-2"> {{userStore.userProfile?.user_name}}</p>
          </div>
          <div>
            <label for="email">Email</label>
            <p class=" text-prup3 text-lg border-b-2 border-prup2 bg-prup1 bg-opacity-10 rounded-md w-80 p-2"> {{user.email}}</p>
          </div>
          <button @click="logout()" type="button" 
          class=" bg-purp hover:bg-darkPrup mt-10 hover:text-indigo-50  p-2  text-white  w-fit rounded">
            Logout
          </button>
        </div>
      </div>

     
    </div>
    
</template>

<script setup>
import { useUserStore } from '~/composables/userStore'

definePageMeta({
    middleware:['auth']
})
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUserProfile()
})

async function logout() {
  try {
    const { error } = await client.auth.signOut({
     
    })
    if (error) throw error 
    router.push('/')
    } catch (error) {
    errorMsg.value = error.message
  }
}


</script>

