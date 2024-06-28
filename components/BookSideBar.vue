<template>
  <div class="bg-rose-400 h-screen shadow-lg  py-4  items-center justify-center text-center capitalize ">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="book" class="">
      <div class="h-60 w-40 ml-40">
        <img class="object-cover w-full h-full rounded-md shadow-xl" :src="book.cover" alt="Book Cover">
      </div>
      <div class="grid gap-y-2 text-indigo-50" >
        <p class=" pt-4 capitilaize text-xl font-medium mx-20">{{ book.name }}</p>
        <p class="pb-4 text-sm mx-20">{{ book.author }} </p>
        <div class="flex space-x-2 justify-center">
          <div v-for="(star, index) in stars" :key="index">
            <Icon class="text-2xl" 
            :color="star ? '#fcd34d' : '#b09aa7'"
             :name="star ? 'solar:star-bold' : 'solar:star-bold'" />
          </div>
          <p class=" text-xl font-semibold ">{{ book.rate }}</p>
        </div>
        <div class="flex space-x-4 text-center justify-center p-3">
          <div >
            <p>{{book.pages}}</p>
            <p class="">pages</p>
          </div>
          <div class="border-l-2 border-indigo-100 pl-3">
            <p>0</p>
            <p >ratings</p>
          </div>
          <div class="border-l-2 border-indigo-100 px-3">
            <p>0</p>
            <p >reviews</p>
          </div>
        </div>
        <p class="text-lg text-balance text-center text-xs mx-3 pr-7 line-clamp-4">{{ book.des }}</p>

        <NuxtLink :to="`/books/${book.id}`" class="flex space-x-2 text-prup3 text-center mx-40 my-6 bg-indigo-50 w-40 h-10 rounded-md p-2 hover:bg-white">
          <button class="ml-5">Read more</button>
          <Icon name="mingcute:book-6-line" color="#411b2b" class="mt-1"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBook } from '~/composables/getBook';

const props = defineProps<{ bookId: number }>();

const { book, error, isLoading, fetchBook } = getBook(props.bookId);

watchEffect(() => {
  if (props.bookId) {
    fetchBook();
  }
})
const stars = computed(() => {
  const filledStars = Math.round(book.value.rate);
  return Array.from({ length: 5 }, (_, index) => index < filledStars);
})
</script>

