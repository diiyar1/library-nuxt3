<template>
  <NuxtLink to="/">
    <div class="flex w-fit m-4 border-2 border-rose-400 rounded-md p-1 items-center bg-rose-400 text-indigo-50 hover:bg-indigo-50 hover:text-rose-400 font-semibold">
      <Icon name="iconamoon:arrow-left-2-duotone" class="hover:text-rose-400 text-indigo-50 text-xl transition-colors duration-200" />
      <span class="transition-colors duration-200 pr-1">Home</span>
    </div>
  </NuxtLink>
  <div class="px-4  min-h-screen ">
    <div class="p-4 rounded-lg capitalize bg-white">
    

      <div v-if="isLoading">
        <BookIDSC />
      </div>
      <div v-if="error">{{ error }}</div>

      <div v-if="book" class="flex space-x-10 bg-white w-fit p-6 rounded-md">
        <!-- left side -->
        <div class="grid gap-y-5">
          <div class="border-2 border-prup2 p-2 rounded-r-lg h-fit w-fit">
            <img class="rounded-r-lg shadow-xl h-84 w-60" :src="book.cover" alt="Book Cover">
          </div>
          <div class="grid gap-y-3">
            <button class="bg-prup3 p-2 rounded-3xl font-semibold text-3xl text-pink-100 hover:bg-prup2 hover:text-prup3">
              <USelect class="pl-12 w-full" size="sm" v-model="raedingState" :options="raedingStates" variant="none" />
            </button>
            <button class="border border-prup3 bg-prup1 p-2 rounded-3xl font-semibold text-prup3 hover:bg-prup2 hover:text-pink-100">
              Buy <span>${{book.price}}</span></button>
            <div class="flex space-x-2 mx-12">
              <Icon
                v-for="star in 5"
                :key="star"
                @click="rateBook(star)"
                class="text-2xl cursor-pointer"
                :name="star <= currentRating ? 'solar:star-bold' : 'solar:star-bold'"
                :color="star <= currentRating ? '#fcd34d' : '#b09aa7'"
              />
            </div>
            <div class="">
              <p class="text-prup3 text-center text-md font-semibold">Rate This Book</p>
              <button @click="toggleFav" class="bg-indigo-50 w-fit rounded-full p-2 mx-28 mt-2">
                <Icon :name="isFav ? 'mdi:favorite' : 'mdi:favorite'" class="text-2xl" :color="isFav ? '#fb7185' : '#b09aa7'" />
              </button>
            </div>
          </div>
        </div>
        <!-- right side -->
        <div class="space-y-4">
          <p class="text-prup3 font-semibold text-3xl">{{ book.name }}</p>
          <p class="text-prup3">{{ book.author }}</p>
          <div class="flex space-x-2">
            <div v-for="(star, index) in stars" :key="index">
              <Icon class="text-2xl" 
              :color="star ? '#fcd34d' : '#b09aa7'"
               :name="star ? 'solar:star-bold' : 'solar:star-bold'" />
            </div>
            <p class="text-prup3 text-xl font-semibold">{{ book.rate }}</p>
          </div>
          <div class="text-lg text-balance mr-10 text-prup3">
            <div v-for="(chunk, index) in descriptionChunks" :key="index" class="mb-8">
              <p v-for="line in chunk" :key="line">{{ line }}</p>
            </div> 
            </div>         
            <div class="capitalize flex space-x-3">
            <p class="">Genres</p>
            <button class="group text-prup3 font-semibold capitalize" v-for="category in book.category" :key="category">
              {{ category }}
              <div class="bg-pinky rounded-full h-0.5">
                <div class="h-1 group-hover:animate-fade mt-0.5 hidden group-hover:block bg-prup3 rounded-full"></div>
              </div>
            </button>
          </div>
          <div class="text-prup3">
            <p>{{book.pages}} <span>pages</span></p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Book not found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import BookIDSC from '~/components/skeletonCards/BookIDSC';
import { getBook } from '~/composables/getBook';

const route = useRoute();
const id = Number(route.params.id);
const { book, error, isLoading, isFav, toggleFav, fetchBook, currentRating, rateBook } = getBook(id);

const descriptionChunks = ref([]);

onMounted(() => {
  fetchBook().then(() => {
    if (book.value) {
      const lines = book.value.des.split('. ');
      for (let i = 0; i < lines.length; i += 8) {
        descriptionChunks.value.push(lines.slice(i, i + 8));
      }
    }
  });
});

const stars = computed(() => {
  const filledStars = Math.round(book.value.rate);
  return Array.from({ length: 5 }, (_, index) => index < filledStars);
});

const raedingStates = ['Want To Read', 'Currently Reading', 'Read'];
const raedingState = ref(raedingStates[0]);
</script>
