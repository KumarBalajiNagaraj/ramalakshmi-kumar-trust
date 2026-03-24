import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, BookOpen, Home, Sun, Button as Btn } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-[#FFF9EF] border-b border-[#C9A84C]/20 py-14 md:py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <Image
              src="/parrot_logo.png"
              alt="Ramalakshmi Kumar Trust Logo"
              width={80}
              height={80}
              className="mx-auto mb-6 h-16 w-auto md:h-20 drop-shadow-sm"
              priority
            />
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#181818] tracking-tight mb-4">
              Smt. Ramalakshmi Kumar
            </h1>
            <p className="font-playfair text-lg md:text-xl italic text-[#858483] mb-6">
              A Life of Quiet Strength and Boundless Love
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#434343]">
              <span className="font-semibold text-[#181818]">1965 – 2024</span>
              <br />
              A beloved mother, mentor, and beacon of positivity whose gentle spirit touched countless
              lives with compassion, wisdom, and unwavering belief in the potential of every human being.
            </p>
          </div>
        </section>

        {/* Trust Founded By */}
        <section className="py-10 px-4 bg-white border-b border-[#E5E5E5]">
          <div className="container max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-[#C9A84C]/25 bg-[#FFF9EF] p-6 md:p-8">
              <Image
                src="/parrot_logo.png"
                alt="Trust Logo"
                width={64}
                height={64}
                className="h-16 w-auto flex-shrink-0"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-1">
                  Trust Founded By
                </p>
                <p className="font-playfair text-xl font-bold text-[#181818]">Kumar B</p>
                <p className="text-sm text-[#434343] mt-0.5">Retired Educator, SSN MBA Department</p>
                <p className="text-sm text-[#C9A84C] font-medium mt-0.5">Managing Trustee, Ramalakshmi Kumar Trust</p>
                <p className="text-xs text-[#858483] mt-2 leading-relaxed">
                  After Smt. Ramalakshmi Kumar's passing in 2024, Kumar B founded this Trust in her loving
                  memory — to carry forward her belief that education is every child's birthright.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 md:py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">Her Journey</p>
              <h2 className="font-playfair text-3xl font-bold text-[#181818]">A Life Well-Lived</h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  year: "1965",
                  title: "Born with a Kind Heart",
                  desc: "A new beginning filled with potential, blessed with a nurturing spirit and infectious warmth from the very start.",
                  last: false,
                },
                {
                  year: "1980s–90s",
                  title: "A Humble Heart, An Open Home",
                  desc: "Raised and nurtured her family with unconditional love, teaching values of empathy, gratitude, and service. Her home was open to all.",
                  last: false,
                },
                {
                  year: "1990s–2010s",
                  title: "A Beacon of Positivity",
                  desc: "Her presence brought warmth and hope to everyone who knew her. She believed in seeing the best in people and inspiring them to reach their full potential.",
                  last: false,
                },
                {
                  year: "2024",
                  title: "Reached Heaven",
                  desc: "Though she is no longer with us, her legacy lives on through every life she touched, every mind she inspired, and every heart she opened to the beauty of compassion.",
                  last: true,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#C9A84C] mt-1 flex-shrink-0" />
                    {!item.last && <div className="w-px flex-1 bg-[#C9A84C]/25 my-1" style={{ minHeight: 60 }} />}
                  </div>
                  <div className="pb-10">
                    <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-playfair text-xl md:text-2xl font-semibold text-[#181818] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#858483] leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-14 md:py-20 px-4 bg-[#FFF9EF]">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                Her Character
              </p>
              <h2 className="font-playfair text-3xl font-bold text-[#181818]">
                The Essence of Who She Was
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  icon: <Heart className="h-5 w-5 text-[#C9A84C]" />,
                  title: "Boundless Compassion",
                  desc: "She had an innate ability to see the struggles of others and offer genuine support without judgment, making everyone feel heard and valued.",
                },
                {
                  icon: <Sun className="h-5 w-5 text-[#C9A84C]" />,
                  title: "Radiant Positivity",
                  desc: "Even in difficult times, she maintained an infectious optimism that uplifted those around her and inspired hope in the darkest moments.",
                },
                {
                  icon: <BookOpen className="h-5 w-5 text-[#C9A84C]" />,
                  title: "Belief in Education",
                  desc: "She deeply understood that education was the foundation for breaking barriers and creating opportunities for a better future.",
                },
                {
                  icon: <Home className="h-5 w-5 text-[#C9A84C]" />,
                  title: "Humble Strength",
                  desc: "She found strength not in grandeur but in simple living — demonstrating that the greatest impact comes from quiet, consistent acts of kindness.",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-7 rounded-xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF9EF] flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-[#181818] mb-2">{v.title}</h3>
                      <p className="text-[#858483] text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                Remembering Her
              </p>
              <h2 className="font-playfair text-3xl font-bold text-[#181818]">
                Words from Those Who Knew Her
              </h2>
              <p className="mt-3 text-[#858483] text-lg">
                Her impact is best understood through the voices of those whose lives she touched.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  quote:
                    "She had a way of making you feel like you were the most important person in the world. Her genuine interest in your well-being was not an act — it was simply who she was.",
                  attr: "— Someone who knew her closely",
                },
                {
                  quote:
                    "Despite having so little, she gave so much. She taught us that true wealth is measured by the love we share and the lives we touch.",
                  attr: "— A beneficiary of her kindness",
                },
                {
                  quote:
                    "She never made anyone feel small or insignificant. She lifted people up, believed in their potential, and gave them courage to dream bigger.",
                  attr: "— A student she inspired",
                },
                {
                  quote:
                    "What made her special was her consistency. Every single day, she showed up with grace, patience, and an unwavering commitment to making the world a better place.",
                  attr: "— A family member",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#C9A84C] border border-[#E5E5E5]"
                >
                  <p className="text-base leading-relaxed italic text-[#858483]">"{t.quote}"</p>
                  <p className="font-semibold text-[#181818] mt-3 text-sm">{t.attr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Living Legacy */}
        <section className="py-14 md:py-20 px-4 bg-[#FFF9EF]">
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
              The Continuation
            </p>
            <h2 className="font-playfair text-3xl font-bold text-[#181818] mb-8">A Living Legacy</h2>

            <div className="bg-white p-8 md:p-12 rounded-xl border border-[#E5E5E5] shadow-sm text-left space-y-5">
              <p className="text-base leading-relaxed text-[#858483]">
                Smt. Ramalakshmi Kumar's life was never about seeking recognition or accolades. It was about
                showing up for people, believing in them when they didn't believe in themselves, and creating
                a ripple of positive change that continues to expand.
              </p>
              <p className="text-base leading-relaxed text-[#858483]">
                The Ramalakshmi Kumar Trust exists to carry forward her vision — to see education as the
                bridge between poverty and opportunity, to treat every struggling student with the same
                warmth and encouragement she gave so freely.
              </p>
              <p className="text-base leading-relaxed text-[#858483]">
                Every scholarship awarded, every student supported, and every life transformed is a
                continuation of her legacy. She once said,{" "}
                <em className="text-[#181818]">
                  "Let my life be a seed. Plant it where it can grow forests."
                </em>{" "}
                Today, that forest grows through every act of compassion and every dream fulfilled.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-playfair text-2xl font-semibold text-[#181818] mb-3">Her spirit lives on.</p>
              <p className="text-[#858483] max-w-2xl mx-auto mb-8">
                In every gesture of kindness, in every student who rises above circumstance, in every life
                changed by the belief that education is the birthright of all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C9A84C] hover:bg-[#b89440] text-white border-0"
                >
                  <Link href="/support">Support the Trust</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#FFF9EF] bg-transparent"
                >
                  <Link href="/founders-letter">Read Founder's Letter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
