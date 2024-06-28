
interface Book {
  id: number;
  cover: string;
  rate: number;
  price: number;
  name: string;
  author: string;
  des: string;
  category: string[];
  // Add other properties as needed
}

interface GetBookResult {
  book: Ref<Book | null>;
  error: Ref<string | null>;
  isLoading: Ref<boolean>;
  isFav: Ref<boolean>;
  currentRating: Ref<number>;
  toggleFav: () => void;
  fetchBook: () => Promise<void>;
  rateBook: (rating: number) => void;
}

export function getBook(id: number): GetBookResult {
  const book = ref<Book | null>(null);
  const error = ref<string | null>(null);
  const isLoading = ref<boolean>(false);
  const isFav = ref<boolean>(false);
  const currentRating = ref<number>(0);

  const fetchBook = async () => {
    isLoading.value = true;
    try {
      console.log(`Fetching book with ID: ${id}`);
      const response = await fetch(`http://localhost:3001/books/${id}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch book');
      }
      const data: Book = await response.json();
      book.value = data;

      isFav.value = checkIfFavorite(data.id);
      currentRating.value = getRating(data.id);
    } catch (err) {
      console.error('Error fetching book:', err);
      error.value = (err as Error).message;
    } finally {
      isLoading.value = false;
    }
  };

  const checkIfFavorite = (id: number): boolean => {
    const favorites: Book[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some(favBook => favBook.id === id);
  };

  const toggleFav = () => {
    let favorites: Book[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFav.value) {
      favorites = favorites.filter(favBook => favBook.id !== book.value?.id);
    } else {
      if (book.value && !favorites.some(favBook => favBook.id === book.value?.id)) {
        favorites.push(book.value);
      }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    isFav.value = !isFav.value;
  };

  const getRating = (id: number): number => {
    const ratings: Record<number, number> = JSON.parse(localStorage.getItem('ratings') || '{}');
    return ratings[id] || 0;
  };

  const rateBook = (rating: number) => {
    if (currentRating.value === rating) {
      rating = 0;
    }
    const ratings: Record<number, number> = JSON.parse(localStorage.getItem('ratings') || '{}');
    if (book.value) {
      ratings[book.value.id] = rating;
      localStorage.setItem('ratings', JSON.stringify(ratings));
      currentRating.value = rating;
    }
  };

  return {
    book,
    error,
    isLoading,
    isFav,
    toggleFav,
    fetchBook,
    currentRating,
    rateBook
  };
}
