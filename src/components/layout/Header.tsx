export default function Header() {
  return (
    <header className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="font-bold text-lg">My Website</span>
        {/* Thêm navigation hoặc logo ở đây nếu muốn */}
      </div>
    </header>
  );
}
