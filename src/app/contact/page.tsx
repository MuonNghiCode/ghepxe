export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        If you have any questions or feedback, please reach out!
      </p>
      <form className="flex flex-col gap-4 mt-6 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded px-3 py-2 min-h-[100px] dark:bg-gray-800 dark:border-gray-700"
        />
        <button
          type="submit"
          className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}
