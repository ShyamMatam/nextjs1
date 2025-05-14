export default function Loading() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <h2 className="text-xl font-semibold mt-4 text-gray-700">Loading...</h2>
      </div>
    </div>
  );
}   