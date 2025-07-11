export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Go to Home
      </a>
    </div>
  );
}
