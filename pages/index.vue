<template>
  <div class="flex">
    <div class="bg-indigo-50   p-2 m-4 ml-6 rounded-md w-fit">
      <NuxtLink to="/library">
        <div class="flex justify-between p-2">
          <h4 class=" text-prup3 font-bold text-lg">Recommended</h4>
          
          <div class="flex text-rose-400  border-2 border-rose-400 rounded-md p-1 items-center
                      hover:bg-rose-400 hover:text-indigo-50 font-semibold ">
            <span class="transition-colors duration-200">See All</span>
            <Icon name="iconamoon:arrow-right-2-duotone" 
            class="text-rose-400 hover:text-indigo-50 transition-colors duration-200" />
          </div>
          
        </div>
      </NuxtLink>
      <!-- books -->
    
          <div class="flex-col space-y-4 columns-4">
            <div v-if="error">{{ error }}</div>
            <div v-if="isLoading">Loading...</div>
            <div v-for="book in filteredBooks.slice(0,4)" :key="book.id">
              <UButton color="" @click="openSidebar(book.id)">
                <div class="bookCard max-w-44 delay-50 ">
                  <div class="w-40 h-60 mb-4 object-fit">
                    <img class="rounded-md object-cover w-full h-full" :src="book.cover" alt="Book Cover">
                  </div>
                  <div class=" truncate min-w-0 text-left">
                    <p class="truncate min-w-0 text-prup3 font-bold">{{ book.name }}</p>
                    <p class="truncate min-w-0 text-darkGreenish">{{ book.author }}</p>
                    <NuxtLink :to="`/books/${book.id}`">
                      <div class="border-2 border-rose-400 mt-2 p-1 text-rose-400 text-xs w-fit h-6 rounded-md hover:bg-rose-400 hover:text-indigo-50">
                        <span class="transition-colors duration-200">Read</span>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </UButton>
      
              <!-- Show BooksideBar -->
              <USlideover v-model="isOpen" :overlay="false">
                <BookSideBar v-if="selectedBookId" :book-id="selectedBookId" />
              </USlideover>
            </div>
          </div>
        </div>
     
  <!-- donation card -->

    <Donate class="m-3 mt-4"/>
    
  </div>
  
    <!-- Books Filtered By Category -->
  <div >
    <ByCategory/>
  </div>
</template>

<script setup lang="ts">


import  ByCategory  from '~/components/ByCategory.vue';
import { useBooksStore } from '~/composables/getBooks'; // Adjusted import path
import BookSideBar from '~/components/BookSideBar.vue';
import Donate from '~/components/Donate.vue';
    
  const {  error, isLoading, fetchBooks, filteredBooks } = useBooksStore();
    
  onMounted(() => {
      fetchBooks();
    });
    
      
  const isOpen = ref(false);
  const selectedBookId = ref<number | null>(null);
    
  const openSidebar = (id: number) => {
      selectedBookId.value = id;
      isOpen.value = true;
    };
    


</script>

