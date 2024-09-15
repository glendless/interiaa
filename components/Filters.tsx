'use client';

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const links = ['scandinavian', 'contemporary', 'classic', 'industrial', 'japandi'];

const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string) => {
        let newUrl = '';

        if (active === link) {
            setActive('');

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
            });
        } else {
            setActive(link);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase(),
            });
        }

        router.push(newUrl, { scroll: false });
    };

    return (
        <ul className='text-primary body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {links.map((link) => (
                <button
                    className={` ${active === link ? 'bg-primary text-white' : ''}
                        whitespace-nowrap rounded-md px-8 py-2 capitalize`}
                    key={link}
                    onClick={() => handleFilter(link)}>
                    {link}
                </button>
            ))}
        </ul>
    );
};

export default Filters;