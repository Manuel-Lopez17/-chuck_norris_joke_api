export interface FavoriteJoke {
  id: string;
  joke: string;
  rating?: number;
}

const FAVORITES_KEY = 'favoriteJokes';

export function getFavorites(): FavoriteJoke[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveFavorites(favorites: FavoriteJoke[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addFavorite(joke: FavoriteJoke) {
  const favorites = getFavorites();
  favorites.push(joke);
  saveFavorites(favorites);
}

export function removeFavorite(id: string) {
  let favorites = getFavorites();
  favorites = favorites.filter((fav) => fav.id !== id);
  saveFavorites(favorites);
}

export function updateFavoriteRating(id: string, rating: number) {
  const favorites = getFavorites();
  const updated = favorites.map((fav) => {
    if (fav.id === id) return { ...fav, rating };
    return fav;
  });
  saveFavorites(updated);
}
