'use client';

import { useState, useEffect } from 'react';
import {
  FavoriteJoke,
  getFavorites,
  removeFavorite,
  updateFavoriteRating,
} from '../lib/favorites';
import FavoriteItem from './FavoriteItem';
import toast, { Toaster } from 'react-hot-toast';

export default function FavoriteList() {
  const [favorites, setFavorites] = useState<FavoriteJoke[]>([]);
  const [sortDesc, setSortDesc] = useState<boolean>(false);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id: string) => {
    removeFavorite(id);
    setFavorites(getFavorites());
    toast.success('Joke removed from favorites ✅', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleRate = (id: string, rating: number) => {
    updateFavoriteRating(id, rating);
    setFavorites(getFavorites());
    toast('Rating updated ⭐️', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const sortedFavorites = [...favorites].sort((a, b) => {
    const ratingA = a.rating || 0;
    const ratingB = b.rating || 0;
    return sortDesc ? ratingB - ratingA : ratingA - ratingB;
  });

  return (
    <div className="p-8">
      <Toaster />

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setSortDesc(!sortDesc)}
          className="px-4 py-2 text-white rounded border hover:cursor-pointer"
        >
          Sort by Rating {sortDesc ? '↓' : '↑'}
        </button>
      </div>
      <div
        className={`overflow-x-auto ${sortedFavorites.length > 5 ? 'overflow-y-auto max-h-80' : ''}`}
      >
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-[#0a0a0a] z-10">
            <tr>
              <th className="p-2 border-b text-left">Joke</th>
              <th className="p-2 border-b">Rating</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedFavorites.length > 0 ? (
              sortedFavorites.map((item) => (
                <FavoriteItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onRate={handleRate}
                />
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-4 text-center">
                  No favorites found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
