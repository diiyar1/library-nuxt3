<template>
  <template>
    <div class=" p-2 m-3  rounded-lg">
      <h1 class="text-prup3 font-bold text-2xl mb-4">Your Favorite Books</h1>
      <div v-if="favoriteBooks" class="grid grid-cols-2 gap-4">
        <div v-for="book in favoriteBooks" :key="book.id" class="col-span-1">
          <div class="flex w-full max-w-xl h-80 bg-white p-8 rounded-md shadow-lg shadow-prup2 relative">
            <div class="pt-3">
              <img v-if="book.cover" class="rounded-md w-56 h-60 object-cover" :src="book.cover" alt="Book Cover">
              <div v-else class="rounded-md w-56 h-60 bg-gray-200"></div> <!-- Placeholder or fallback -->
             </div>
            <div class="flex flex-col justify-between pl-4 w-full text-left">
              <div>
                <p class="text-prup3 font-bold text-lg mr-20">{{ book.name }}</p>
                <p class="text-prup2 text-md">{{ book.author }}</p>
                <p class="text-gray-600 text-sm line-clamp-6 pt-6">{{ book.des }}</p>
              </div>
              <NuxtLink :to="`/books/${book.id}`" class="mt-2">
                <div class="border-2 border-rose-400 p-1 text-center text-rose-400 text-lg w-36 h-10 rounded-md hover:bg-rose-400 hover:text-indigo-50">
                  <span class="transition-colors duration-200">Read Now</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="p-2">
        <p class="text-prup3">You have no favorite books yet.</p>
      </div>
    </div>
  </template>
  
</template>

<script setup>

const favoriteBooks = ref([]);

const fetchFavoriteBooks = () => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // Remove duplicates
  const uniqueFavorites = favorites.filter((book, index, self) => index === self.findIndex((b) => b.id === book.id));
  favoriteBooks.value = uniqueFavorites;
  // Update localStorage to remove duplicates if any existed
  localStorage.setItem('favorites', JSON.stringify(uniqueFavorites));
};

onMounted(() => {
  fetchFavoriteBooks();
});
</script>

