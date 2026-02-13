"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Search Posts 🔍</h1>

      <input
        type="text"
        placeholder="Search posts..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.length === 0 ? (
        <p>No data found</p>
      ) : (
        filteredPosts.map((post) => (
          <p key={post.id} className="mb-2">
            {post.title}
          </p>
        ))
      )}
    </div>
  );
}
