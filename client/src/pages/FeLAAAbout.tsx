// ==========================================================================
// FeLAA Atelier About Page
// Design: Soul Market — Warm Brutalist Vintage (unified with ReLove)
// ==========================================================================

import { ArrowRight } from "lucide-react";

export default function FeLAAAbout() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/felaa-hero-home-RFYR2z2AugrsBX9BUMSAMi.webp"
          alt="FeLAA Atelier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-white text-center"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            FeLAA Atelier
          </h1>
          <p className="text-white/90 text-center mt-2 max-w-2xl text-sm md:text-base">
            Handcrafted patterns, textiles, and couture pieces
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* About */}
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{
                fontFamily: "Fraunces, serif",
                color: "oklch(0.35 0.05 40)",
              }}
            >
              About FeLAA
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "oklch(0.50 0.04 55)" }}
            >
              FeLAA Atelier is a design studio dedicated to handcrafted fashion and textile work. We create digital patterns, PDF guides, and physical textiles for those who appreciate the artistry of making.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.50 0.04 55)" }}
            >
              Each pattern is professionally drafted with detailed instructions. Our guides cover couture techniques, pattern drafting, and textile methods. We believe in intentional design and sustainable practices.
            </p>
          </div>

          {/* Divider */}
          <div
            className="h-px opacity-30"
            style={{ backgroundColor: "oklch(0.35 0.05 40)" }}
          ></div>

          {/* Three Disciplines */}
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{
                fontFamily: "Fraunces, serif",
                color: "oklch(0.35 0.05 40)",
              }}
            >
              Our Disciplines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Couture Mastery",
                  desc: "Refined finishing, disciplined handling, and garment logic built through repetition.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/felaa-hero-couture-B5tNTWBaR954fDwhyjFKHY.webp",
                },
                {
                  title: "Textile Relief",
                  desc: "Material studies shaped by tactility, depth, and the quiet architecture of folded cloth.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/felaa-hero-textile-dpoRypG8gN84uaUdMRNqf8.webp",
                },
                {
                  title: "Pattern Engineering",
                  desc: "Measured transitions from sketch to structure, where proportion and movement are resolved.",
                  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663721448837/Tiz4gBHdGyBwEgDj9BYoTS/felaa-hero-pattern-mumqE4fKgtTUEC7Jozikk6.webp",
                },
              ].map((discipline) => (
                <div
                  key={discipline.title}
                  className="border-4 p-4 hover:shadow-lg transition-all hover:scale-105 hover:rotate-1"
                  style={{
                    borderColor: "oklch(0.35 0.05 40)",
                    backgroundColor: "oklch(0.97 0.02 85)",
                  }}
                >
                  <img
                    src={discipline.image}
                    alt={discipline.title}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {discipline.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.50 0.04 55)" }}
                  >
                    {discipline.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px opacity-30"
            style={{ backgroundColor: "oklch(0.35 0.05 40)" }}
          ></div>

          {/* What We Offer */}
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{
                fontFamily: "Fraunces, serif",
                color: "oklch(0.35 0.05 40)",
              }}
            >
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Digital Patterns",
                  desc: "Downloadable PDF patterns with full-size printing guides and size ranges 0-24.",
                },
                {
                  title: "Physical Patterns",
                  desc: "Pre-printed, pre-graded patterns ready to cut and use immediately.",
                },
                {
                  title: "PDF Guides",
                  desc: "In-depth guides covering couture techniques, pattern drafting, and textile methods.",
                },
                {
                  title: "Custom Services",
                  desc: "Commission custom patterns and pieces tailored to your specific needs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-4 p-6"
                  style={{
                    borderColor: "oklch(0.35 0.05 40)",
                    backgroundColor: "oklch(0.97 0.02 85)",
                  }}
                >
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "oklch(0.50 0.04 55)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <a href="/#/shop">
              <button
                className="px-8 py-3 font-bold uppercase text-sm text-white flex items-center gap-2 mx-auto"
                style={{ backgroundColor: "oklch(0.35 0.05 40)" }}
              >
                Explore FeLAA Collection <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
