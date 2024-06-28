<template>
  <div class="bg-indigo-50   p-2 m-4 ml-6 rounded-md w-fit">
    <div class="flex justify-between p-2">
      <h2 class="text-prup3 font-bold text-lg">Categories</h2>
      <NuxtLink to="/category">
        <Icon name="material-symbols:border-all-rounded"
          class="text-2xl border-2 border-rose-400 p-1 rounded-md text-rose-400 hover:bg-rose-400 hover:text-indigo-50 transition-colors duration-200" 
        />
      </NuxtLink>
    </div>
    <div class="flex-col space-x-5  p-1">
      <label :class="['text-prup3','font-semibold', 'p-2', 'rounded-lg', 'w-fit', 'hover:cursor-pointer','hover:bg-rose-400'
        , selectedCategories.includes(category) ? 'bg-rose-400' : 'bg-sky-300']" 
        v-for="category in categories.slice(0, 9)" :key="category">
        <input class="hidden text-prup3" type="checkbox" 
          :value="category" v-model="selectedCategories"/>
        {{ category }}
      </label>
    </div>
    <div v-if="filteredByCategory.length > 0" class="grid grid-cols-5 gap-2 py-3">

      <div v-for="book in filteredByCategory.slice(0,5)" :key="book.id"
       class=" ">
       <NuxtLink :to="`/books/${book.id}`">
            
       <!-- book card -->
        <div class="bookCard max-w-40 delay-50  rounded-md">
          <div class="w-36 h-56 mb-4 overflow-hidden rounded-md">
            <img
              class="object-cover w-full h-full"
              :src="book.cover"
              alt="Book Cover"
            />
          </div>
          <div class="truncate min-w-0 text-left">
            <p class="truncate min-w-0 text-prup3 font-bold">{{ book.name }}</p>
            <p class="truncate min-w-0 text-darkGreenish">{{ book.author }}</p>
           
          </div>
        </div>
      </NuxtLink>
      </div>
    </div>

    <div v-else>
      <p class="text-xl font-medium font-serif text-prup3 p-4 text-center">No Books Found In This Category</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~/composables/getCategories';
import { useBooksStore } from '~/composables/getBooks';

const store = useCategoriesStore();
const categories = store.categories;

const getBooks = useBooksStore();

onMounted(() => {
  getBooks.fetchBooks();
});

// Select categories
const selectedCategories = ref<string[]>([]);

const filteredByCategory = computed(() => {
  if (selectedCategories.value.includes('All') || selectedCategories.value.length === 0) {
    return getBooks.books.value;
  }

  return getBooks.books.value.filter(book => 
    book.category && selectedCategories.value.some(category => 
      book.category.some(bookCategory => bookCategory.toLowerCase() === category.toLowerCase())
    )
  );
});
</script>
