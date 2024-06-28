<template>
    
    <div class="   ">
        <div class="flex ">
            <!-- left side bar -->
            <SideBar />
            <div class=" w-full ">
            <!-- nav bar -->
            <!-- sticky z-50 top-0 -->
            <div class=" bg-indigo-50 flex justify-between 
                        h-20   shadow-sm shadow-prup3  ">
               <!-- search bar component -->
                <SearchBar class="absolute"/>
                <!-- Logged In -->
                 <UserName />
               
            </div>
            <!-- books -->
            <slot />
            
          </div>
          </div>      
        
    </div>
    
</template>

<script>
import SearchBar from '~/components/SearchBar.vue';
import SideBar from '~/components/SideBar.vue';
import UserName from '~/components/UserName.vue';


</script>
