'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const FAVORITES_KEY = 'trending-magic-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setFavorites(parsed);
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const isFavorite = (id: string | number) => {
    return favorites.includes(String(id));
  };

  const toggleFavorite = (id: string | number) => {
    const stringId = String(id);

    const isFav = favorites.includes(stringId);

    setFavorites((prev) =>
      isFav ? prev.filter((favId) => favId !== stringId) : [...prev, stringId],
    );

    if (isFav) {
      toast.success('Removed from favorites');
    } else {
      toast.success('Added to favorites');
    }
  };

  return { favorites, isFavorite, toggleFavorite, isLoaded };
};
