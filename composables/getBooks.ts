// composables/fetchBooks.ts
import { ref, computed } from 'vue';

interface Book {
  id: number;
  name: string;
  author: string;
  des: string;
  category: string[];
  rate: number;
  price: number;
  cover?: string;  // Optional cover image
}

export function useBooksStore() {
  const books = ref<Book[]>([]);
  const error = ref<string | null>(null);
  const isLoading = ref(false);
  const searchQuery = ref('');

  const fetchBooks = async (search: string = '') => {
    isLoading.value = true;
    try {
      const response = await fetch(`http://localhost:3001/books?q=${search}`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      books.value = data;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const filteredBooks = computed(() => {
    return books.value.filter(book =>
      book.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    books,
    error,
    isLoading,
    fetchBooks,
    searchQuery,
    filteredBooks,
  };
}
