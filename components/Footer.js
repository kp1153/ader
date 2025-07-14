export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-red-700 py-8 px-6 border-t border-red-200">
      <div className="max-w-3xl mx-auto space-y-4 text-sm leading-relaxed">
        <p>
          We specialize in high-quality translation services done by professional translators.
        </p>
        <p>
          At the same time, we understand the evolving needs of global companies, many of whom now prefer Machine Translation Post Editing (MTPE) for cost and speed.
        </p>
        <p>
          That&apos;s why we offer both options:<br />
          • Pure translation — handled by seasoned professionals<br />
          • MTPE — edited by skilled linguists for accuracy and natural tone
        </p>
        <p>
          Our focus is always on quality, clarity, and meeting your deadlines.
        </p>
        <div className="text-xs text-red-600 mt-4">
          &copy; {new Date().getFullYear()} Ader Global. All rights reserved.
        </div>
        <div className="text-xs mt-2">          
        </div>
      </div>
    </footer>
  );
}
