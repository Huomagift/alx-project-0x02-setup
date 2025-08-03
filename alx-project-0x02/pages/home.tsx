import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '../components/common/PostModal';
import Header from '../components/layout/Header';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Getting Started', content: 'Learn how to build with Next.js, TypeScript, and Tailwind CSS.' },
    { title: 'Project Structure', content: 'Understand how to structure your project using best practices.' },
    { title: 'API Integration', content: 'Fetch data from external APIs and display it dynamically.' },
  ]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen p-6 bg-gray-100 space-y-6">
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Post
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
    </div>
  );
}
