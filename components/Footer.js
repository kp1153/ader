export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-xl font-bold mb-2">Ader Global</h2>
          <p className="text-sm">
            Certified Sworn Translators with <strong>26 Years</strong> of Excellence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="text-sm space-y-1">
            <li>MTPE Light</li>
            <li>MTPE Full (Human Grade)</li>
            <li>Deadline-Focused Delivery</li>
            <li>Value-for-Price Rates</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">📩 aderglobal@gmail.com</p>
          <p className="text-sm mt-2">We respect your deadlines — always.</p>
          <p className="text-sm mt-1 italic">
            We offer both MTPE Full (Human Grade) and MTPE Light — based on your needs.
          </p>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-white/80">
        &copy; {new Date().getFullYear()} Ader Global. All rights reserved.
      </div>
    </footer>
  );
}
