import Image from 'next/image';
import logo from '~/images/logo.png';

export const Header = () => {
  return (
    <header className='container mx-auto flex items-center justify-between px-3 py-8 md:px-0 md:py-12 xl:py-16'>
      <div className='logo w-32 xl:w-44'>
        <Image src={logo} width={176} height={50} alt='Logo' />
      </div>
      <nav className='xl:text-20 flex list-none gap-6 font-body text-sm font-semibold md:gap-10 md:text-lg xl:gap-16'>
        <li>Home</li>
        <li>Work</li>
        <li>Me</li>
        <li>Fun</li>
      </nav>
    </header>
  );
};
