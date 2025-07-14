import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen pb-56"> {/* ✅ footer से बचने के लिए padding-bottom */}
      <HeroSection />
    </main>
  );
}
