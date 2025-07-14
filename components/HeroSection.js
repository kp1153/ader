"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-[120vh] px-6 py-16">      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-5 text-sm leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold">
            Where Accuracy Meets Integrity in Translation
          </h1>

          <p>
            We provide high-quality translation services delivered by professional translators.
            Our offerings include both pure translation and MTPE (Machine Translation Post Editing),
            edited by skilled linguists to ensure accuracy, clarity, and consistency.
          </p>

          <p>
            MTPE offers the speed of AI with the precision of human review. Whether you need certified sworn translations
            or fast turnaround post-edited machine output, we deliver exactly what your project demands — nothing less.
          </p>

          <div className="border-t border-white/30 pt-4 space-y-3">
            <h2 className="text-xl font-semibold">Certified Sworn Translation</h2>
            <p>This term varies from country to country but generally includes:</p>

            <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
              <li>The source-language (original) text</li>
              <li>The target-language (translated) text</li>
              <li>
                A notarized statement asserting that the translation is accurate and complete — 
                known as a &ldquo;Certificate of Accuracy.&rdquo;
              </li>
            </ul>

            <p className="text-sm">
              This statement may sometimes include the translator&apos;s CV, though that&apos;s tradition, not requirement.
              Anyone can technically provide a certified translation — the Notary Public only confirms the identity
              of the signer, not the quality of the translation.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div>
          <Image
            src="/1.jpeg"
            alt="Ader Global Translator"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
