"use client";

import React from "react";

export default function BibleTranslationPage() {
  return (
    <section className="min-h-screen px-6 py-12 md:px-20 bg-white text-gray-800">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">
        Bible Translation Services
      </h1>
      <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
        At <strong>Ader Global</strong>, we believe the Bible is far more than an ancient text — it is God&apos;s Word and
        must reach every heart in their native language. With over 1,600 languages still awaiting a full translation,
        our mission is clear: deliver accurate, faithful Bible translations that inspire, transform, and speak to the soul.
      </p>

      <p className="text-lg mb-6 text-gray-700">
        Through our experienced Christian linguists and theologians, we ensure each verse is preserved in its
        spiritual and contextual essence. We have translated numerous Bible books and Christian scripts
        with a commitment to clarity, reverence, and doctrinal integrity.
      </p>

      <p className="text-lg mb-6 text-gray-700">
        We are humbled to serve communities across the globe, ensuring God&apos;s Word is accessible and
        life-changing in every tongue. Every project we undertake passes through rigorous review,
        multiple translators, and theological experts to ensure perfection.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-600">Featured Project</h2>
      <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
        <p className="mb-2">
          <strong>Client:</strong> Dr. Edgar A. Barnett
        </p>
        <p className="mb-2">
          <strong>Translated Work:</strong> <em>The Rapid Reintegration Procedure</em>
        </p>
        <p className="mb-2">
          <strong>Languages:</strong> English → French, German
        </p>
        <p className="mb-2">
          <strong>Word Count:</strong> 51,980 words
        </p>
        <p className="mb-2">
          <strong>Pages:</strong> 175 pages
        </p>
        <p className="mb-2">
          <strong>Additional Projects:</strong> Over 10,000 pages translated for U.S. Army, Navy, and Department of
          Veterans Affairs (2021–2022) across 24+ languages, covering medical &amp; technical content.
        </p>
      </div>

      <p className="mt-8 text-lg text-gray-700">
        We are your trusted messengers — committed to delivering God&apos;s words to the world, accurately and respectfully.
      </p>
    </section>
  );
}
