<template>
  <div class="flex space-x-0 border-l-2 border-red-400 p-4 capitalize">
   
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.24/dist/full.min.css" rel="stylesheet" type="text/css" />
 


  <div class="dropdown relative ">
        <label tabindex="0" class="btn focus:btn-outline focus:text-rose-400 normal-case  ">
          <div  class="flex space-x-2">
            <img src="https://avatars.githubusercontent.com/u/26052038?v=4" alt="Name" 
            class="w-12 h-12 shrink-0 rounded-full"/> 
            <span v-if="!user" class="mt-4 ">User</span>
            <span class="mt-4 capitalize">{{ userStore.userProfile?.user_name }}</span>
          </div>
            <Icon name="ep:arrow-down-bold" class="h-3 w-3  fill-current opacity-60 inline-block"/>
        </label>
        

        <div tabindex="0" class="dropdown-content right-0 z-[1] menu p-2 w-56">      
            <div class="rounded-lg bg-base-300 p-3 drop-shadow-xl divide-y divide-neutral">
                <div class="flex space-x-2 items-center ">
                    <div class="flex mr-auto items-center space-x-2">
                        <img src="https://avatars.githubusercontent.com/u/26052038?v=4" alt="Name" class="w-16 h-16 shrink-0 rounded-full"/>
                        <div class="space-y-2 flex flex-col flex-1 truncate">
                            <div class="relative leading-tight text-gray-900">
                            <span class="flex">
                              <span v-if="!user" class="truncate relative pr-8 text-greyishTxt text-lg font-medium">User</span>
                                <span class="truncate relative pr-8 text-greyishTxt text-lg font-medium capitalize">{{ userStore.userProfile?.user_name }}</span>
                            </span>
                            </div>
                            <!-- <p class="font-normal text-base leading-tight truncate">{{user.email}}</p> -->
                        </div>
                    </div>
                </div>
                <div aria-label="navigation" class="py-2">
                    <nav class="grid gap-1 ">
                        <NuxtLink to="/profile" class="space-x-2 text-greyishTxt font-medium capitalize hover:bg-bitDarkPurp p-3 h-full hover:text-slate-200 hover:border-r-4  hover:border-rose-400">
                          <Icon name="solar:user-bold" class="sideBarIcon" />
                            <span>Profile</span>
                        </NuxtLink>
                        <NuxtLink to="/favourite" class="space-x-2 text-greyishTxt font-medium capitalize hover:bg-bitDarkPurp p-3 h-full hover:text-slate-200 hover:border-r-4  hover:border-rose-400">
                          <Icon name="mdi:favourite-border" class="sideBarIcon" />
                            <span>Favourite</span>
                        </NuxtLink>
                        <NuxtLink to="/" class="space-x-2 text-greyishTxt font-medium capitalize hover:bg-bitDarkPurp p-3 h-full hover:text-slate-200 hover:border-r-4  hover:border-rose-400">
                          <Icon name="material-symbols:download" class="sideBarIcon" />
                          <span>Download</span>
                        </NuxtLink>
                    </nav>
                </div>
                <div class="pt-2 w-full">
                  <div class="hover:bg-bitDarkPurp p-3  hover:text-slate-200 hover:border-r-4  hover:border-rose-400">
                    <button type="button" @click="logout()" v-if="user"
                    class="space-x-2 text-greyishTxt font-medium capitalize hover:text-slate-200">
                      <Icon name="material-symbols:logout" class="sideBarIcon" />
                        <span>Logout</span>
                    </button>
                  </div>
                  <div class="hover:bg-bitDarkPurp p-3  hover:text-slate-200 hover:border-r-4  hover:border-rose-400">
                    <button v-if="!user"
                    class="space-x-2 text-greyishTxt font-medium capitalize ">
                    <Icon name="material-symbols:login" class="sideBarIcon" />
                   <NuxtLink to="/login">Login</NuxtLink>
                  </button>

                  </div>
                </div>
            </div>
        </div>
    </div> 
    
    
  </div>
</template>

<script setup lang="ts">
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
    
  }
}


</script>
