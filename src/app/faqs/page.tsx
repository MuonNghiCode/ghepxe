export default function FAQs() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">
        Frequently Asked Questions (FAQs)
      </h1>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">
          What services do you offer?
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We offer consulting, development, design, and support services for web
          and mobile applications.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">How can I contact you?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You can use the contact form on our Contact page or email us directly.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Where are you located?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We are a remote-first team and work with clients worldwide.
        </p>
      </div>
    </div>
  );
}
