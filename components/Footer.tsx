import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='text-primary flex-between body-text w-full gap-y-10 px-20 py-12 max-md:flex-col'>
      <p>
        Copyright © 2024 Interiaa
      </p>

      <div className='flex gap-x-9'>
        <Link href='/terms-of-use'>
          Terms & Conditions
        </Link>
        <Link href='/privacy-policy'>
          Privacy Policy
        </Link>
      </div>
    </footer >
  );
};

export default Footer;