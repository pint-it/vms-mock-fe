import Link from "next/link";
import About from '../about/page';

export default function Header() {
  return (
    <header className="h-10 bg-teal-700 md:px-40 lg:px-60 xl:px-80 2xl:px-96 flex items-center gap-6 text-lg w-full fixed top-0 left-0">
      <Link href="/" className="hover:text-yellow-200">
        Home
      </Link>
      <Link href="/about" className="hover:text-yellow-200">
        About
      </Link>
      <Link href="#" className="hover:text-yellow-200">
        Contact Us
      </Link>
    </header>
  );
}
