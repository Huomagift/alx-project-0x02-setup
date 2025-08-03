import { PostProps } from '../../interfaces';

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{content}</p>
      <span className="text-xs text-blue-600 font-medium">User ID: {userId}</span>
    </div>
  );
}
