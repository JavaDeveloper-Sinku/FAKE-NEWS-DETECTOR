"use client";

import { error } from "console";
import { useState , useEffect, use} from "react";

export default function AboutPage() {

    type Post = {
        id: number;
        title: string;
        body: string;
    };

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error:", error));
    }, []);


  return (
   <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        📌 Latest Posts
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.slice(0, 6).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
   
  );
}
