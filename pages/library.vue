<template>
    <div class="  w-full p-2 m-4  rounded-md capitalize ">
      <NuxtLink to="/">
          <div  class="flex w-fit  border-2 border-rose-400 rounded-md p-1 items-center
                       bg-rose-400 text-indigo-50 hover:bg-indigo-50 hover:text-rose-400 font-semibold ">
           <Icon name="iconamoon:arrow-left-2-duotone" 
                class="hover:text-rose-400 text-indigo-50 text-xl transition-colors duration-200" />
          <span class="transition-colors duration-200 pr-1">Home</span>
         
        </div>
      </NuxtLink>
      
      <div class="flex-col pt-4 space-y-5 columns-2 ">
        <div v-if="error">{{ error }}</div>
        <div v-if="isLoading">Loading...</div>
        <!-- <input v-model="search" class="bg-orangy w-80 rounded-xl p-4 h-8 text-prup3 placeholder-prup3" type="text" placeholder="Search Books, Authers..."> -->
        <div v-for="book in filteredBooks" :key="book.id">
         
            
              <div class="flex w-full max-w-xl h-80 bg-white p-8 rounded-md shadow-lg shadow-prup2 relative">
                <div class="pt-3 ">
                  <img class="rounded-md w-56 h-60 object-cover" :src="book.cover" alt="Book Cover">
                </div>
                <div class="flex flex-col justify-between pl-4  w-full text-left">
                  <div>
                    <p class=" text-prup3 font-bold text-lg mr-20">{{ book.name }}</p>
                    <p class=" text-prup2 text-md ">{{ book.author }}</p>
                    <p class="text-gray-600 text-sm line-clamp-6 pt-6 ">{{ book.des }}</p>
                  </div>
                  <NuxtLink :to="`/books/${book.id}`" class="mt-2">
                    <div class="border-2 border-rose-400 p-1 text-center text-rose-400 text-lg w-36 h-10 rounded-md hover:bg-rose-400 hover:text-indigo-50">
                      <span class="transition-colors duration-200 ">Read Now</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            
        </div>
      </div>  
  
    </div>
  </template>
    
  <script setup lang="ts">
  import { useBooksStore } from '~/composables/getBooks'; // Adjusted import path
  
  const {  error, isLoading, fetchBooks, filteredBooks } = useBooksStore();
  
  onMounted(() => {
    fetchBooks();
  });
  
  
  </script>
  


 
  
  
  