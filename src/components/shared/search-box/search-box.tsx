import { useState } from 'react';
import { TextInput } from '@/components/ui';
import { SearchIcon } from '../icons';
import Typewriter from 'typewriter-effect';

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const showTypewriter = !searchValue && !isFocused;

  return (
    <div className="relative mx-5 max-w-7xl sm:mx-auto">
      <TextInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        startIcon={<SearchIcon className="text-warning-500 size-5" />}
        endAction={
          <div className="bg-warning-500 flex h-8 w-12 cursor-pointer items-center justify-center rounded-md">
            <SearchIcon className="size-5 text-neutral-100" />
          </div>
        }
        placeholder=""
        classNames={{
          root: 'bg-secondary-900 border-none w-full sm:w-100 md:w-120 lg:w-140 xl:w-200',
          input: 'relative z-10',
        }}
      />

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
    </div>
  );
};
