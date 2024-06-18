import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-10 bg-teal-700 md:px-40 lg:px-80 flex items-center justify-center gap-6 text-lg w-full absolute bottom-0 left-0">
      <span>© 2024</span>
      <Link href="/" className="hover:text-yellow-200">
        Twitter
      </Link>
      <Link href="/" className="hover:text-yellow-200">
        Facebook
      </Link>
      <Link href="/" className="hover:text-yellow-200">
        Linkedin
      </Link>
    </footer>
  );
}
