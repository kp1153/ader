"use client";

import React, { useState, useEffect } from 'react';
import { Globe, ArrowRight, CheckCircle, Star, Users, Languages, Clock, Shield } from 'lucide-react';

const TranslationHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center p-8">
      <img
        src="/1.jpeg"
        alt="Translation Hero"
        className="w-full max-w-4xl rounded-2xl shadow-lg"
      />

      <h1 className="text-4xl font-bold mt-6 text-center">
        Welcome to Our Translation Agency
      </h1>
      <p className="text-lg text-gray-600 mt-2 text-center max-w-2xl">
        We provide high-quality certified translation services worldwide. Trusted by businesses and individuals.
      </p>
    </section>
  );
};

export default TranslationHero;
