'use client';

import { useState, useEffect, useRef } from 'react';
import { TextInput } from '@/components/ui';
import { SearchIcon } from '../icons';
import Typewriter from 'typewriter-effect';
import { useUrlParams } from '@/features/home/hooks/use-url-params';
import { TrendingMagicSectionData } from '@/features/home/components/trending-magic-section/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SearchBox = () => {
  const { searchQuery, updateSearch } = useUrlParams();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState(searchQuery);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<{ title: string; id: string | number }[]>([]);

  const inputRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery]);

  // Debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (searchValue !== searchQuery) {
        updateSearch(searchValue);
      }
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchValue, searchQuery, updateSearch]);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      const query = searchValue.toLowerCase();
      const matches = TrendingMagicSectionData.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.customerName?.toLowerCase().includes(query),
      )
        .slice(0, 5)
        .map((item) => ({ title: item.title || item.customerName || '', id: item.id }));

      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    updateSearch(searchValue);
    router.push('/browse');
    setIsFocused(false);
  };

  const handleSuggestionClick = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setIsFocused(false);
  };

  const showTypewriter = !searchValue && !isFocused;
  const showSuggestions = isFocused && searchValue.trim().length > 0 && suggestions.length > 0;

  return (
    <div ref={inputRef} className="relative mx-5 max-w-7xl sm:mx-auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          startIcon={<SearchIcon className="text-warning-500 size-5" />}
          endAction={
            <button
              type="submit"
              aria-label="Search"
              className="bg-warning-500 flex h-8 w-12 cursor-pointer items-center justify-center rounded-md transition-opacity hover:opacity-90"
            >
              <SearchIcon className="size-5 text-neutral-100" />
            </button>
          }
          placeholder=""
          classNames={{
            root: 'bg-secondary-900 border-none w-full sm:w-100 md:w-120 lg:w-140 xl:w-200',
            input: 'relative z-10',
          }}
        />
      </form>

      {showTypewriter && (
        <div className="pointer-events-none absolute inset-y-0 left-10 z-0 flex items-center text-sm text-neutral-400">
          <Typewriter
            options={{
              strings: ['psychic consultation...', 'finding your destiny...'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
      )}

      {showSuggestions && (
        <div className="bg-secondary-800 border-secondary-300 absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-xl border shadow-xl">
          <ul className="flex flex-col py-2">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <Link
                  href={`/trendingmagic/${suggestion.id}`}
                  onClick={handleSuggestionClick}
                  className="hover:bg-secondary-700 text-neutral-0 flex items-center gap-2 px-4 py-2 text-sm transition-colors"
                >
                  <SearchIcon className="text-warning-500 size-4" />
                  {suggestion.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
