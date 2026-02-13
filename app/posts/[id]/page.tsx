async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      <p className="mt-4">{post.body}</p>
    </div>
  );
}
