import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const linkClass = (path: string) =>
    `px-4 py-2 hover:text-blue-600 ${
      router.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700'
    }`;

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
      <nav className="space-x-4">
        <Link href="/home" className={linkClass('/home')}>
          Home
        </Link>
        <Link href="/about" className={linkClass('/about')}>
          About
        </Link>
        <Link href="/posts" className={linkClass('/posts')}>
          Posts
        </Link>
      </nav>
    </header>
  );
}
