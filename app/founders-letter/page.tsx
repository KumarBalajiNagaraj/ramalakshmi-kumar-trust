import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FoundersLetterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-[#FFF9EF] border-b border-[#C9A84C]/20 py-12 md:py-16 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <Image
              src="/parrot_logo.png"
              alt="Ramalakshmi Kumar Trust Logo"
              width={90}
              height={90}
              className="mx-auto mb-6 h-20 w-auto md:h-24 drop-shadow-sm"
              priority
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
              From the Managing Trustee
            </p>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#181818]">
              Founder's Letter
            </h1>
            <p className="mt-3 text-sm text-[#858483] italic">
              Written with love, by Kumar B
            </p>
          </div>
        </section>

        {/* Letter */}
        <section className="py-12 md:py-16 px-4">
          <div className="container max-w-3xl mx-auto">
            <div className="prose prose-base md:prose-lg max-w-none text-[#434343]
              prose-headings:font-playfair prose-headings:text-[#181818]
              prose-p:leading-relaxed prose-p:text-[#434343]
              prose-li:text-[#434343] prose-strong:text-[#181818]
              prose-a:text-[#C9A84C] prose-a:no-underline hover:prose-a:underline
            ">
              <p className="text-lg md:text-xl font-playfair italic text-[#181818]">
                Dear Loving World,
              </p>

              <p>
                If these words find you today, know they are written not with ink, but with the boundless love
                and hope I carry for every dreamer who dares to believe in a brighter tomorrow.
              </p>

              <p>
                My wife, <strong>Smt. Ramalakshmi Kumar (1965–2024)</strong>, was a woman of quiet strength
                and boundless compassion. She never sought recognition. She simply showed up — every day —
                for the people around her, believing deeply that every human being deserves dignity and
                opportunity, especially through education.
              </p>

              <p>
                After her passing, I founded the <strong>Ramalakshmi Kumar Trust</strong> to honour her
                spirit. To ensure that her belief — that education is every child's birthright — becomes
                action, not just words.
              </p>

              <p>
                To the students reading this: Your dreams are sacred. Do not let the weight of financial
                hardship crush your courage. Let this Trust be your ally, your silent cheerleader, as you
                climb mountains I could only imagine. When you stumble, remember:{" "}
                <em>"Fall seven times, rise eight. The world needs your light."</em>
              </p>

              <p>
                To the world: We ask not for pity, but for partnership. Join hands with this Trust to ensure
                that no mind is wasted, no ambition abandoned. Let us build bridges where there are gaps,
                and turn <em>"I cannot"</em> into <em>"I will."</em> Every rupee donated, every word of
                encouragement, every act of faith in these students is a stitch in the fabric of a fairer,
                kinder world.
              </p>

              <p>The Ramalakshmi Kumar Trust is more than scholarships. It is a covenant:</p>
              <ul>
                <li>To see potential where others see poverty.</li>
                <li>To invest in minds that will heal, innovate, and lead.</li>
                <li>To remind every child that they are worthy of every opportunity this world has to offer.</li>
              </ul>

              <p>
                She held our family close and whispered:{" "}
                <em>"Let my life be a seed. Plant it where it can grow forests."</em> Today, that seed is
                yours to nurture. Together, let us grow a forest of educated, empowered souls — each tree a
                testament to what love and collective action can achieve.
              </p>

              {/* Callout: Year 1 proof */}
              <div className="not-prose rounded-xl bg-[#FFF9EF] border border-[#C9A84C]/25 p-6 my-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                  Year 1 — Proof, Not Promise
                </p>
                <p className="text-sm text-[#434343] leading-relaxed mb-2">
                  <strong className="text-[#181818]">Chinnathamby</strong> — paid ₹3,00,000 directly to
                  Sri Krishna College of Engineering and Technology, Coimbatore. He scored{" "}
                  <strong className="text-[#C9A84C]">9.2 CGPA in Semester 1 — class topper.</strong>
                </p>
                <p className="text-sm text-[#434343] leading-relaxed">
                  <strong className="text-[#181818]">Annadhanam</strong> — fed{" "}
                  <strong className="text-[#C9A84C]">3,500 people</strong> at Kadayam Village, Tenkasi
                  (₹1,54,000 paid directly to registered welfare entity, February 2026).
                </p>
              </div>

              <p>
                With infinite hope,
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-start gap-5 p-6 rounded-xl border border-[#E5E5E5] bg-white">
              <Image
                src="/parrot_logo.png"
                alt="Trust Logo"
                width={56}
                height={56}
                className="h-14 w-auto flex-shrink-0"
              />
              <div>
                <p className="font-playfair text-xl font-bold text-[#181818]">Kumar B</p>
                <p className="text-sm text-[#434343] mt-0.5">Retired Educator, SSN MBA Department</p>
                <p className="text-sm text-[#C9A84C] font-medium mt-0.5">
                  Managing Trustee, Ramalakshmi Kumar Trust
                </p>
                <Link
                  href="https://www.ramalakshmikumar.com"
                  className="text-xs text-[#858483] hover:text-[#C9A84C] transition-colors mt-1 inline-block"
                  target="_blank"
                >
                  www.ramalakshmikumar.com
                </Link>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link href="/contact">Apply for Scholarship</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
