'use client';
import { useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { addFavorite, getFavorites } from '../lib/favorites';

export default function JokeCard() {
  const [joke, setJoke] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const hasFetched = useRef(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await res.json();
      setJoke(data.value);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to fetch joke.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchJoke();
      hasFetched.current = true;
    }
  }, []);

  const handleFavorite = (jokeObj: { id: string; joke: string }) => {
    const favorites = getFavorites();
    const duplicate = favorites.find((item) => item.joke === jokeObj.joke);
    if (duplicate) {
      toast.error('Joke already added to favorites!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    addFavorite(jokeObj);
    toast.success('Joke added to favorites!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    fetchJoke();
  };

  return (
    <div className="p-4 w-full max-w-sm border rounded shadow-md">
      <Toaster />

      <div className="p-2 min-h-32 flex flex-col items-center justify-center">
        {loading ? (
          <p className="text-center">Loading new joke...</p>
        ) : (
          <p className="text-center">{joke}</p>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={fetchJoke}
          className="px-4 py-2 border-2 text-white rounded hover:cursor-pointer disabled:cursor-progress"
          disabled={loading}
        >
          New Joke
        </button>
        <button
          onClick={() => handleFavorite({ id: Date.now().toString(), joke })}
          className="px-4 py-2 border-2 text-white rounded hover:cursor-pointer disabled:cursor-progress"
          disabled={loading}
        >
          Add favorite
        </button>
      </div>
    </div>
  );
}
