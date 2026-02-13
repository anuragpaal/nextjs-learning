"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong 😢
      </h2>

      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
