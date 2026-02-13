"use client";

import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Contact Page</h2>

      {source && <p className="text-green-600">You came from: {source}</p>}
    </div>
  );
}
