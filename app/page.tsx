import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Crown, GraduationCap, Heart, Sparkles, Star, Sun, CheckCircle2, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative bg-[#FFF9EF] py-14 md:py-24 px-4 overflow-hidden">
          {/* Subtle gold border bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C]/30" />
          <div className="container mx-auto">
            <div className="flex flex-col items-center text-center gap-6">
              {/* Parrot logo */}
              <Image
                src="/parrot_logo.png"
                alt="Ramalakshmi Kumar Trust Logo"
                width={120}
                height={120}
                className="h-24 w-auto md:h-32 drop-shadow-sm"
                priority
              />
              {/* Trust name */}
              <div>
                <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#181818] tracking-tight leading-tight">
                  Ramalakshmi Kumar Trust
                </h1>
                <p className="mt-3 text-base md:text-lg text-[#858483] font-playfair italic">
                  Nurturing Potential. Honoring a Legacy.
                </p>
              </div>
              {/* Tagline */}
              <p className="max-w-xl text-sm md:text-base text-[#434343] leading-relaxed">
                Founded in loving memory of{" "}
                <span className="font-semibold text-[#181818]">Smt. Ramalakshmi Kumar (1965–2024)</span>{" "}
                by{" "}
                <span className="font-semibold text-[#181818]">Kumar B</span>
                {" "}— Retired Educator, SSN MBA Department &amp; Managing Trustee — to ensure no talented child
                is ever stopped by poverty.
              </p>
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C9A84C] hover:bg-[#b89440] text-white border-0 px-8"
                >
                  <Link href="/support">Support the Trust</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#FFF9EF] bg-transparent px-8"
                >
                  <Link href="/contact">Apply for Scholarship</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Year 1 Impact ──────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">Year 1 · 2025–26</p>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#181818]">
                Real Impact. Real Lives.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#858483]">
                Every rupee goes directly to the institution — never through middlemen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Chinnathamby */}
              <div className="rounded-xl border border-[#E5E5E5] bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF9EF]">
                    <GraduationCap className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                    Engineering Scholarship
                  </span>
                </div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#181818] mb-3">
                  Chinnathamby's Story
                </h3>
                <p className="text-sm md:text-base text-[#434343] leading-relaxed mb-6">
                  From Tirunelveli. Father earns ₹15,000/month — family of five. Studied under streetlights
                  with borrowed textbooks. Scored <strong>190 engineering cutoff</strong>. Admitted to{" "}
                  <em>Sri Krishna College of Engineering & Technology, Coimbatore</em> — but fees were
                  out of reach. The Trust paid ₹3,00,000 directly to the college.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 rounded-lg bg-[#C9A84C] p-4 text-center text-white">
                    <p className="font-playfair text-3xl font-bold">9.2</p>
                    <p className="text-xs mt-1 opacity-90 font-medium">CGPA · Sem 1</p>
                    <p className="text-xs opacity-75">Class Topper</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-[#FFF9EF] border border-[#C9A84C]/25 p-4 text-center">
                    <p className="font-playfair text-2xl font-bold text-[#C9A84C]">₹3,00,000</p>
                    <p className="text-xs mt-1 text-[#858483]">Paid to college</p>
                    <p className="text-xs text-[#858483]">Zero middlemen</p>
                  </div>
                </div>
              </div>

              {/* Annadhanam */}
              <div className="rounded-xl border border-[#E5E5E5] bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF9EF]">
                    <Heart className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                    Community Nourishment
                  </span>
                </div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#181818] mb-3">
                  Annadhanam
                </h3>
                <p className="text-sm md:text-base text-[#434343] leading-relaxed mb-6">
                  February 2026 — Kadayam Village, Tenkasi District. Traditional meals served on banana leaves
                  to school students, daily wage workers, and families who often go without a full meal.
                  Paid directly to the registered welfare entity — fully documented.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 rounded-lg bg-[#C9A84C] p-4 text-center text-white">
                    <p className="font-playfair text-3xl font-bold">3,500</p>
                    <p className="text-xs mt-1 opacity-90 font-medium">People Fed</p>
                    <p className="text-xs opacity-75">Kadayam Village</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-[#FFF9EF] border border-[#C9A84C]/25 p-4 text-center">
                    <p className="font-playfair text-2xl font-bold text-[#C9A84C]">₹1,54,000</p>
                    <p className="text-xs mt-1 text-[#858483]">Paid to entity</p>
                    <p className="text-xs text-[#858483]">Fully documented</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Legacy ─────────────────────────────────────────────── */}
        <section className="bg-[#FFF9EF] py-14 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">Her Legacy</p>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#181818]">
                A Life of Grace and Purpose
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#858483]">
                Smt. Ramalakshmi Kumar's warmth, wisdom, and generosity touched countless lives.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-xl bg-white border border-[#E5E5E5] p-7 md:p-8 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF9EF]">
                  <Sun className="h-7 w-7 text-[#C9A84C]" />
                </div>
                <h3 className="mt-5 font-playfair text-xl md:text-2xl font-semibold text-[#181818]">
                  Radiant Positivity
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#858483] leading-relaxed">
                  Known for her infectious optimism, she approached every challenge with a smile that could
                  illuminate the darkest rooms. Her presence was a reminder that joy is found in perspective,
                  not circumstance.
                </p>
                <div className="mt-5 rounded-lg border border-[#C9A84C]/20 bg-[#FFF9EF] p-4 text-sm italic text-[#434343]">
                  "In her company, problems seemed smaller and possibilities endless."
                </div>
              </div>

              <div className="flex flex-col items-center rounded-xl bg-white border border-[#E5E5E5] p-7 md:p-8 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF9EF]">
                  <Heart className="h-7 w-7 text-[#C9A84C]" />
                </div>
                <h3 className="mt-5 font-playfair text-xl md:text-2xl font-semibold text-[#181818]">
                  Boundless Generosity
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#858483] leading-relaxed">
                  Her generosity knew no bounds — material support, time, or simply a listening ear. She
                  gave without expectation. Her home was open to all who needed shelter, physical or emotional.
                </p>
                <div className="mt-5 rounded-lg border border-[#C9A84C]/20 bg-[#FFF9EF] p-4 text-sm italic text-[#434343]">
                  "She taught us that true wealth is measured by what we give with an open heart."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Year 2 Goals ────────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">Year 2 · 2026–27</p>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#181818]">
                Goals: ₹5–10 Lakhs
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#858483]">
                With your continued support, here is what we aim to do next.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[
                {
                  icon: <GraduationCap className="h-5 w-5 text-[#C9A84C]" />,
                  title: "Continue Chinnathamby's Year 2",
                  desc: "Fund his second-year engineering fees at Sri Krishna College, Coimbatore.",
                },
                {
                  icon: <Star className="h-5 w-5 text-[#C9A84C]" />,
                  title: "5–6 More Scholarships",
                  desc: "Engineering, medicine, nursing, and vocational — direct to institutions.",
                },
                {
                  icon: <Heart className="h-5 w-5 text-[#C9A84C]" />,
                  title: "Expand Annadhanam",
                  desc: "More villages across Tenkasi and Tirunelveli districts.",
                },
                {
                  icon: <CheckCircle2 className="h-5 w-5 text-[#C9A84C]" />,
                  title: "100% Direct Always",
                  desc: "Every rupee to institutions — never to individuals. Always documented.",
                },
              ].map((g, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-[#E5E5E5] bg-white p-6 shadow-sm hover:border-[#C9A84C]/40 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF9EF]">
                    {g.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#181818] text-sm md:text-base">{g.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-[#858483]">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#C9A84C] hover:bg-[#b89440] text-white border-0 px-10"
              >
                <Link href="/support" className="flex items-center gap-2">
                  Support the Trust <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Values ─────────────────────────────────────────────── */}
        <section className="bg-[#FFF9EF] py-14 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                Our Foundation
              </p>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#181818]">
                The Values That Guide Us
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#858483]">
                Built upon the foundational values that defined her extraordinary life.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  icon: <Sparkles className="h-6 w-6 text-[#C9A84C]" />,
                  title: "Simplicity & Elegance",
                  desc: "She found beauty in the ordinary and grace in humility — wealth was never the measure.",
                },
                {
                  icon: <GraduationCap className="h-6 w-6 text-[#C9A84C]" />,
                  title: "Education as Liberation",
                  desc: "She believed fervently that education was the most powerful tool for transformation.",
                },
                {
                  icon: <Star className="h-6 w-6 text-[#C9A84C]" />,
                  title: "Seeing Potential",
                  desc: "She had a remarkable ability to see potential in others — often before they could see it themselves.",
                },
              ].map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#E5E5E5] shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="mt-4 font-playfair text-lg md:text-xl font-semibold text-[#181818]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-[#858483] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Mission ────────────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                Our Mission
              </p>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#181818]">
                Empowering Through Education
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#858483]">
                The Trust exists to continue her life's work — ensuring financial barriers never stop talent.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-[#E5E5E5] bg-white p-7 md:p-8 shadow-sm">
                <h3 className="font-playfair text-lg md:text-xl font-semibold text-[#181818] mb-3">
                  Identifying Meritorious Students
                </h3>
                <p className="text-sm md:text-base text-[#858483] leading-relaxed">
                  We systematically identify academically gifted students from economically disadvantaged
                  backgrounds through a transparent evaluation process — seeking those whose brilliance
                  might otherwise be dimmed by circumstance.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E5E5] bg-white p-7 md:p-8 shadow-sm">
                <h3 className="font-playfair text-lg md:text-xl font-semibold text-[#181818] mb-3">
                  Direct, Documented Support
                </h3>
                <p className="text-sm md:text-base text-[#858483] leading-relaxed">
                  Every payment goes directly to the institution or registered welfare entity — never to
                  individuals. Every receipt and payment proof is available to any donor on request. Your
                  trust is our most precious asset.
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-8 rounded-xl border border-[#C9A84C]/30 bg-[#FFF9EF] p-7 md:p-10 text-center">
              <Crown className="mx-auto h-10 w-10 text-[#C9A84C]" />
              <h3 className="mt-4 font-playfair text-xl md:text-2xl font-semibold text-[#181818]">
                A Living Legacy
              </h3>
              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-[#858483] leading-relaxed">
                Every student we support becomes part of Smt. Ramalakshmi Kumar's living legacy. As they
                rise to achieve their dreams, they carry forward her spirit of generosity — creating a ripple
                that will touch countless lives for generations to come.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-7 border-[#C9A84C] text-[#C9A84C] hover:bg-white bg-transparent"
              >
                <Link href="/founders-letter">Read the Founder's Letter</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Quote / CTA ─────────────────────────────────────────── */}
        <section className="bg-[#181818] py-14 md:py-20 px-4 text-white">
          <div className="container mx-auto text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-4 text-5xl text-[#C9A84C] font-playfair leading-none">"</div>
              <p className="font-playfair text-xl md:text-3xl font-medium italic text-white leading-snug">
                Let my life be a seed. Plant it where it can grow forests.
              </p>
              <p className="mt-4 text-sm text-[#858483]">— Smt. Ramalakshmi Kumar</p>

              {/* Founder credit */}
              <div className="mt-8 inline-flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-6 py-4">
                <Image
                  src="/parrot_logo.png"
                  alt="Trust Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto mb-1"
                />
                <p className="text-sm font-semibold text-white">Kumar B</p>
                <p className="text-xs text-[#858483]">Retired Educator, SSN MBA Department</p>
                <p className="text-xs text-[#C9A84C]">Managing Trustee, Ramalakshmi Kumar Trust</p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C9A84C] hover:bg-[#b89440] text-white border-0 px-8"
                >
                  <Link href="/support">Support the Trust</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8"
                >
                  <Link href="/contact">Apply for Scholarship</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-[#E5E5E5] bg-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#858483]">
          <div className="flex items-center gap-3">
            <Image src="/parrot_logo.png" alt="Logo" width={28} height={28} className="h-7 w-auto" />
            <span className="font-playfair text-[#181818] font-medium">Ramalakshmi Kumar Trust</span>
          </div>
          <p className="text-xs text-center md:text-right">
            Founded by{" "}
            <span className="text-[#181818] font-medium">Kumar B</span>
            {" "}— Retired Educator, SSN MBA Department &amp; Managing Trustee
            <br />
            <Link
              href="https://www.ramalakshmikumar.com"
              className="text-[#C9A84C] hover:underline mt-1 inline-block"
              target="_blank"
            >
              www.ramalakshmikumar.com
            </Link>
            {" · "}Every rupee, accounted for.
          </p>
        </div>
      </footer>
    </div>
  )
}
