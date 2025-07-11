export default function Download() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Download</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        Download our latest resources and documents below.
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
        <li>
          <a
            href="/files/sample-document.pdf"
            className="text-blue-600 dark:text-blue-400 underline"
            download
          >
            Sample Document (PDF)
          </a>
        </li>
        <li>
          <a
            href="/files/sample-image.jpg"
            className="text-blue-600 dark:text-blue-400 underline"
            download
          >
            Sample Image (JPG)
          </a>
        </li>
      </ul>
      <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
        If you need other files, please contact us.
      </p>
    </div>
  );
}
