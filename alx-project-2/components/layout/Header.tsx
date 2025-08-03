// components/layout/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">MyApp</h1>
      <nav className="space-x-4">
        <Link href="/home">
          <a className="text-gray-700 hover:text-blue-600">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-700 hover:text-blue-600">About</a>
        </Link>
      </nav>
    </header>
  );
}
