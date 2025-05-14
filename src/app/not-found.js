import Nav from "@/components/nav";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <div className="mt-4">
          <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
