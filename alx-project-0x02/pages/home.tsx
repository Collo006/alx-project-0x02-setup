import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [...prev, post]);
  };


    return(
       
        <div>
            <Header/>
            <h1>HOME PAGE</h1>
            <Card title="EATING" content="BAE" />
            <Card content="ChIPS" title="BOO"/>



             <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Create Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4 mt-4">
        {posts.map((post, idx) => (
          <div key={idx} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
        </div>

        
    
    )
}
