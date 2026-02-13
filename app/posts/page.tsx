import Link from "next/link";

async function getPosts() {
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>

      {posts.slice(0,10).map((post:any) => (
        <div key={post.id} className="mb-2">
            <Link href={`/posts/${post.id}`} className="text-blue-600 underline">
            {post.title}
            </Link>
        </div>
      ))}
    </div>
  );
}
