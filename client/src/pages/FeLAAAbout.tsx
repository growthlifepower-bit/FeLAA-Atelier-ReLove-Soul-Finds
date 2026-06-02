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

          {/* Divider */}
          <div
            className="h-px opacity-30"
            style={{ backgroundColor: "oklch(0.35 0.05 40)" }}
          ></div>

          {/* ReLove Soul Finds — Material Philosophy */}
          <div>
            {/* Section header */}
            <div className="mb-10">
              <p
                className="text-xs uppercase tracking-[0.2em] mb-2"
                style={{
                  fontFamily: "Courier Prime, monospace",
                  color: "oklch(0.55 0.14 38)",
                }}
              >
                An Extension of FeLAA Atelier
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-3"
                style={{
                  fontFamily: "Fraunces, serif",
                  color: "oklch(0.22 0.04 40)",
                }}
              >
                ReLove Soul Finds
              </h2>
              <p
                className="text-xl italic"
                style={{
                  fontFamily: "Fraunces, serif",
                  color: "oklch(0.55 0.14 38)",
                }}
              >
                A Material Philosophy
              </p>
            </div>

            {/* Opening statement */}
            <div
              className="border-l-4 pl-6 mb-10"
              style={{ borderColor: "oklch(0.55 0.14 38)" }}
            >
              <p
                className="text-lg leading-relaxed mb-3"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "oklch(0.35 0.05 40)",
                }}
              >
                ReLove Soul Finds is not a product line.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "oklch(0.50 0.04 55)",
                }}
              >
                It is a way of relating to material. It is founded on the belief that materials already carry memory, labour, time, and dignity — and that the artist's role is not to overwrite these histories, but to listen, honour, and transform them.
              </p>
            </div>

            {/* Honour pillars */}
            <h3
              className="text-lg font-bold uppercase tracking-widest mb-6"
              style={{
                fontFamily: "Courier Prime, monospace",
                color: "oklch(0.35 0.05 40)",
              }}
            >
              ReLove Soul Finds Honours:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  word: "Preservation",
                  desc: "Keeping what already exists in circulation.",
                },
                {
                  word: "Exchange",
                  desc: "Allowing objects to move between hands, homes, and meanings.",
                },
                {
                  word: "Recycling",
                  desc: "Not as scarcity, but as respect.",
                },
                {
                  word: "Transformation",
                  desc: "Elevating the ordinary into ritual artefact.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.word}
                  className="border-4 p-5"
                  style={{
                    borderColor: "oklch(0.55 0.14 38)",
                    backgroundColor: "oklch(0.97 0.02 85)",
                  }}
                >
                  <h4
                    className="font-bold text-base mb-2"
                    style={{
                      fontFamily: "Fraunces, serif",
                      color: "oklch(0.55 0.14 38)",
                    }}
                  >
                    {pillar.word}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.50 0.04 55)" }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Manifesto */}
            <div
              className="p-8 mb-12"
              style={{
                backgroundColor: "oklch(0.22 0.04 40)",
                color: "oklch(0.93 0.04 80)",
              }}
            >
              {[
                'Nothing begins as “blank”.',
                "Everything begins as already alive.",
                "",
                "Surface is treated as language.",
                "Textile is treated as history.",
                "Clothing is treated as embodied memory.",
                "",
                "The work is slow, deliberate, and visible.",
                "Process is not hidden.",
                "Perfection is not the goal — coherence is.",
              ].map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-4" />
                ) : (
                  <p
                    key={i}
                    className="text-base md:text-lg leading-snug"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {line}
                  </p>
                )
              )}
            </div>

            {/* Economic Equanimity */}
            <div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "Fraunces, serif",
                  color: "oklch(0.35 0.05 40)",
                }}
              >
                Economic Equanimity
              </h3>
              <p
                className="text-xs uppercase tracking-[0.18em] mb-6"
                style={{
                  fontFamily: "Courier Prime, monospace",
                  color: "oklch(0.55 0.14 38)",
                }}
              >
                Foundational Ethos
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.50 0.04 55)" }}
              >
                FeLAA Atelier and ReLove Soul Finds operate on economic equanimity, not extraction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    label: "Auctions",
                    desc: "Honour rarity, time, and presence.",
                  },
                  {
                    label: "Pay-what-you-can",
                    desc: "Honour access and equity.",
                  },
                  {
                    label: "Freely offered artefacts",
                    desc: "Honour generosity and trust.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-4 p-5"
                    style={{
                      borderColor: "oklch(0.35 0.05 40)",
                      backgroundColor: "oklch(0.97 0.02 85)",
                    }}
                  >
                    <h4
                      className="font-bold text-sm mb-2"
                      style={{
                        fontFamily: "Courier Prime, monospace",
                        color: "oklch(0.35 0.05 40)",
                      }}
                    >
                      {item.label}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "oklch(0.50 0.04 55)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="border-l-4 pl-6"
                style={{ borderColor: "oklch(0.55 0.14 38)" }}
              >
                <p
                  className="text-sm leading-relaxed mb-1"
                  style={{ color: "oklch(0.50 0.04 55)" }}
                >
                  Value is not enforced — it is felt.
                </p>
                <p
                  className="text-sm leading-relaxed mb-1"
                  style={{ color: "oklch(0.50 0.04 55)" }}
                >
                  Those who can give more do. Those who cannot are not excluded.
                </p>
                <p
                  className="text-sm font-semibold mt-3"
                  style={{
                    fontFamily: "Fraunces, serif",
                    color: "oklch(0.35 0.05 40)",
                  }}
                >
                  This is not charity. This is balance in practice.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px opacity-30"
            style={{ backgroundColor: "oklch(0.35 0.05 40)" }}
          ></div>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href="https://atelier.felaaboutique.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
