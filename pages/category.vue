<template>
  <!-- categories sub menu -->
  <div class="p-6 capitalize">
    <div>
      <div class="flex  flex-wrap gap-3 columns-10 p-3 bg-white rounded-md mb-10 shadow-lg">
        <label
          :class="[
            'text-prup3',
            'font-semibold',
            'px-4',
            'py-2',
            'shadow-lg',
            'rounded-lg',
            'hover:cursor-pointer',
            'hover:bg-rose-400',
            selectedCategories.includes(category) ? 'bg-rose-400' : 'bg-sky-200',
          ]"
          v-for="category in categories"
          :key="category"
        >
          <input
            class="hidden"
            type="checkbox"
            :value="category"
            v-model="selectedCategories"
          />
          {{ category }}
        </label>
      </div>

      <div v-if="filteredByCategory.length > 0" class="grid grid-cols-4 gap-6">
        <div v-for="book in filteredByCategory" :key="book.id"
         class=" ">
         <NuxtLink :to="`/books/${book.id}`">
          <div class="bookCard  p-2 delay-50 w-full rounded-md">
            <div class=" mb-4 overflow-hidden rounded-md">
              <!-- Use book.cover if available -->
              <img
                class="object-cover w-full h-96"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
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

<style scoped>

</style>
