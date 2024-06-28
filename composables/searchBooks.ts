// composables/searchBooks.ts
import { ref } from 'vue';
import { useBooksStore } from '~/composables/getBooks';

export function useSearchBooks() {
  const { searchQuery, filteredBooks, fetchBooks } = useBooksStore();

  const searchBooks = async (query: string) => {
    searchQuery.value = query;
    await fetchBooks(query);
  };

  return {
    searchQuery,
    filteredBooks,
    searchBooks,
  };
}
