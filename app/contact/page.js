export const metadata = {
  title: "Contact | ADER GLOBAL",
  description: "Get in touch with ADER GLOBAL for translation services.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-amber-700 mb-6">Contact Us</h1>
      <p className="text-center text-gray-700 mb-10">
        Please fill out the form below to request a quotation. Our team will respond as soon as possible.
      </p>

      <form className="space-y-6 bg-white shadow-md rounded-lg p-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sourceLang" className="block text-sm font-semibold text-gray-700">Source Language</label>
            <input
              type="text"
              id="sourceLang"
              placeholder="e.g. English"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="targetLang" className="block text-sm font-semibold text-gray-700">Target Language</label>
            <input
              type="text"
              id="targetLang"
              placeholder="e.g. Hindi"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message / Requirements</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Tell us about your project..."
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button
          type="button"
          className="w-full bg-amber-700 text-white font-semibold py-2 rounded-md hover:bg-amber-800 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
