<template>
  <div class="relative p-4 ml-2">
    <input 
      v-model="searchQuery" 
      class="bg-indigo-50 w-96 pl-8 h-8 text-prup3 placeholder-prup2 bg-white rounded-xl  p-2  focus:outline-none focus:ring-2 focus:ring-pinky" 
      type="text" 
      placeholder="Search Books, Authors..."
      @input="onSearch"
    >
    <div class="absolute inset-y-0 left-0 pl-5 flex items-center">
      <Icon name="iconoir:search" class="text-xl mb-4" color="#b09aa7"/>
    </div>
    <div class="z-10 absolute">

    <div v-if="searchQuery && filteredBooks.length"
     class="mt-2 bg-white border border-gray-200 rounded shadow-lg w-80">
      <div v-for="book in filteredBooks" :key="book.id" class="p-2 hover:bg-gray-100">
        <NuxtLink :to="`/books/${book.id}`" class="flex items-center">
          <img :src="book.cover" alt="Book Cover" class="w-8 h-12 mr-4 rounded">
          <div>
            <p class="font-bold text-black">{{ book.name }}</p>
            <p class="text-gray-600">{{ book.author }}</p>
          </div>
        </NuxtLink>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchBooks } from '~/composables/searchBooks';

const { searchQuery, filteredBooks, searchBooks } = useSearchBooks();

const onSearch = () => {
  searchBooks(searchQuery.value);
};
</script>
