export default function Footer() {
  return (
    <footer className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 border-t mt-8">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
}
