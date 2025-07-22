// pages/posts.tsx
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Convert to match PostProps format
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formatted = data.map((post:any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6 space-y-4">
        <Header />
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
