// components/common/PostCard.tsx
import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-2">{content}</p>
      <span className="text-xs text-gray-500">Posted by User #{userId}</span>
    </div>
  );
}
