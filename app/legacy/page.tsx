'use client'

import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import { Quote, Heart, Users, Lightbulb } from "lucide-react"

export default function LegacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-8 md:py-12 px-4">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16 text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-06%20at%2010.05.42-Ae8wlG3M6XpD6kS4LtgJQw5tw94WkI.png"
              alt="Ramalakshmi Kumar Trust Logo"
              width={150}
              height={150}
              className="mx-auto mb-8 h-24 w-auto md:h-32"
              priority
            />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">A Living Legacy</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The stories of Smt. Ramalakshmi Kumar continue to inspire and transform lives. Her legacy lives on through the voices of those whose lives she touched.
            </p>
            <div className="mt-6 flex justify-center gap-4 text-sm md:text-base font-semibold">
              <span className="text-primary">Born: 1965</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary">Reached Heaven: 2024</span>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">Her Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">1965</div>
                  <div className="w-1 h-24 bg-primary/20 mt-4"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-xl font-semibold mb-2">A Beginning Filled with Promise</h3>
                  <p className="text-muted-foreground">
                    Born into a world full of possibilities, her earliest years shaped the compassionate spirit she would become. Even then, those around her recognized her gentle nature and infectious warmth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">1980s</div>
                  <div className="w-1 h-24 bg-primary/20 mt-4"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-xl font-semibold mb-2">Building a Home, Nurturing Hearts</h3>
                  <p className="text-muted-foreground">
                    As a housewife, she transformed her home into a sanctuary of love and support. Her simple living and deep wisdom became a guiding light for family, friends, and extended community members who sought her counsel and presence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">1990s-2010s</div>
                  <div className="w-1 h-24 bg-primary/20 mt-4"></div>
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-xl font-semibold mb-2">A Quiet Force for Good</h3>
                  <p className="text-muted-foreground">
                    Through decades of humble service, she became known as someone whose doors were always open, whose ears always listened, and whose heart always cared. Her belief in the power of education and human dignity inspired countless decisions and acts of kindness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">2024</div>
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-xl font-semibold mb-2">Legacy Continues Through Action</h3>
                  <p className="text-muted-foreground">
                    Though she has reached heaven, her vision and values live on through the Ramalakshmi Kumar Trust. Every scholarship awarded, every student supported, and every life touched continues her life's work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">Stories from Those Who Knew Her</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "She had this unique ability to make everyone feel valued and heard. When times were difficult, she was always there—not with words alone, but with her presence and her unwavering belief in my potential."
                    </p>
                    <p className="font-semibold">A Student She Mentored</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "In her humble way, she taught us that true wealth is measured not by what we accumulate, but by what we give and how we lift others. Her kitchen was a place of endless warmth and generosity."
                    </p>
                    <p className="font-semibold">A Family Member</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "She had an extraordinary gift for seeing potential in people when they couldn't see it in themselves. She believed in education not as a luxury, but as a right and a path to freedom."
                    </p>
                    <p className="font-semibold">A Friend and Colleague</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "Her positivity was infectious. No matter the challenges in her own life, she carried a light that somehow made everything feel possible. She made us all want to be better versions of ourselves."
                    </p>
                    <p className="font-semibold">A Community Member</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "She lived simply, but her impact was extraordinary. In a world of noise, she was a voice of reason, compassion, and quiet strength. Everyone who met her left feeling seen and valued."
                    </p>
                    <p className="font-semibold">A Neighbor</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground italic mb-4">
                      "She taught us that being a housewife was not a limitation but a platform for infinite kindness. Her home was her kingdom, and she ruled it with love, wisdom, and generosity beyond measure."
                    </p>
                    <p className="font-semibold">A Close Relative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">Values That Define Her Legacy</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Unconditional Compassion</h3>
                <p className="text-muted-foreground text-sm">
                  Her heart recognized no boundaries—every person deserved kindness, dignity, and genuine care.
                </p>
              </div>

              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Belief in Education</h3>
                <p className="text-muted-foreground text-sm">
                  She understood that knowledge is power—the true key to breaking cycles and creating opportunity.
                </p>
              </div>

              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  She lived for others, believing that true fulfillment comes from lifting up those around us.
                </p>
              </div>

              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Infectious Positivity</h3>
                <p className="text-muted-foreground text-sm">
                  Even in hardship, she radiated hope and possibility, inspiring others to believe in better days.
                </p>
              </div>
            </div>
          </div>

          {/* Living Legacy Section */}
          <div className="mb-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-8 md:p-12">
            <h2 className="font-playfair text-3xl font-bold mb-6">A Legacy That Lives and Grows</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Smt. Ramalakshmi Kumar's life was not about grand gestures or public recognition. It was about the quiet, persistent acts of love—the meals shared, the advice given, the hands held, the dreams nurtured. Her legacy is not written in books or monuments, but in the hearts and lives of everyone she touched.
              </p>
              <p>
                The Ramalakshmi Kumar Trust exists to continue her work. Every scholarship awarded is a reflection of her belief that education changes lives. Every student supported carries forward her vision of a more equitable world. Every act of kindness inspired by her memory extends her legacy into the future.
              </p>
              <p>
                She may have reached heaven, but her presence remains—in the values we uphold, in the decisions we make with compassion, and in our commitment to seeing potential in others just as she did in each of us.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold mb-4">Be Part of Her Continuing Story</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The best way to honor her memory is to embody her values—to care deeply, to believe in education, to lift others, and to spread positivity wherever we go. Join us in continuing her legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold"
              >
                Support the Trust
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 font-semibold"
              >
                Apply for Scholarship
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
