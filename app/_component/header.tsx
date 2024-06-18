import Link from "next/link";

export default function Header() {
  return (
    <div className="h-14 bg-teal-700 md:px-40 lg:px-80 flex items-center gap-6 text-lg w-full fixed top-0 left-0">
      <Link href="/" className="hover:text-yellow-200">
        Home
      </Link>
      <Link href="#" className="hover:text-yellow-200">
        Contact Us
      </Link>
    </div>
  );
}
