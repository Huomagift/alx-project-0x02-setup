// pages/users.tsx

import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  posts: UserProps[];
}

export default function UsersPage({ posts }: UsersPageProps) {
  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((user, idx) => (
            <UserCard key={idx} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
  const data = await res.json();

  const posts: UserProps[] = data.map((post: any) => ({
    name: post.title,
    email: `${post.userId}@example.com`,
    address: {
      street: `Post ID: ${post.id}`,
      suite: 'Suite A',
      city: 'Postville',
    },
  }));

  return {
    props: {
      posts, // ✅ match the expected prop name
    },
  };
};
