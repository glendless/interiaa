'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { formUrlQuery } from '@/sanity/utils';
import Image from 'next/image';

const SearchForm = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const [search, setSearch] = useState('');

    useEffect(() => {
        const delayDeboundFn = setTimeout(() => {
            let newUrl = '';

            if (search) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search,
                });
            } else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query'],
                })
            }

            router.push(newUrl, { scroll: false });
        }, 300)

        return () => clearTimeout(delayDeboundFn);
    }, [search]);

    return (
        <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image
                    src="/magnifying-glass.svg"
                    alt="search icon"
                    className='absolute left-8'
                    width={32}
                    height={32}>
                </Image>
                <Input
                    type='text'
                    placeholder='Search'
                    className='base-regular h-fit border-0 bg-primary py-6 pl-20 pr-8 text-white !ring-0 !ring-offset-0 placeholder:text-white'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </form>
    );
};

export default SearchForm;