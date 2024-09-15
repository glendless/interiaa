import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex-center fixed p-8 z-50 w-full bg-secondary border-b border-primary text-primary'>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
                <Link href="/">
                    <Image
                        src="/interiaa.svg" alt="interiaa logo"
                        width={30}
                        height={30}
                    />
                </Link>
                <Image
                    src="/hamburger-menu.svg" alt="logo"
                    width={30}
                    height={30}
                    className='block md:hidden bg-primary'
                />

                <ul className='flex-center items-center gap-x-3 md:gap-x-10 max-md:hidden'>
                    <li className='body-text font-bold'>
                        <Link href="/about" target='_blank'>Projects</Link>
                    </li>
                    <li className='body-text font-bold'>
                        <Link href="/servives" target='_blank'>About</Link>
                    </li>
                    <li className='body-text font-bold'>
                        <Link href="/servives" target='_blank'>Our Process</Link>
                    </li>
                    <li className='body-text font-bold'>
                        <Link href="/servives" target='_blank'>Stories</Link>
                    </li>
                    <li className='body-text font-bold'>
                        <Link href="/servives" target='_blank'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;