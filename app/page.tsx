
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Day 6 — useRouter 🚀</h1>

        <img
        src="https://picsum.photos/300/500"
        alt="demo"
        width={300}
        height={200}
      />

        <h2>Next Image ✅</h2>
      <Image
        src="https://picsum.photos/800/500"
        width={800}
        height={500}
        alt="optimized"
      />

      <button
        onClick={() => router.push("/posts")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to Posts
      </button>

      <button
        onClick={() => router.push("/contact?source=home")

        }
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to Contact
      </button>

    </main>
  );
}
