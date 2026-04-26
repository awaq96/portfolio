import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Asher Waqar",
};

const photos = [
  { src: "/photos/hobby-1.JPG", alt: "Photo 1" },
  { src: "/photos/hobby-2.JPG", alt: "Photo 2" },
  { src: "/photos/hobby-3.JPG", alt: "Photo 3" },
  { src: "/photos/hobby-4.jpg", alt: "Photo 4" },
  { src: "/photos/hobby-5.jpg", alt: "Photo 5" },
  { src: "/photos/hobby-6.jpg", alt: "Photo 6" },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">

      {/* Intro */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-foreground/10 mb-8 ring-2 ring-foreground/10">
          {/* Replace src with your actual photo */}
          <Image
            src="/photos/profile.jpg"
            alt="Asher Waqar"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-sm text-foreground/40 mb-3 tracking-widest uppercase">
          Engineer · Student · Photographer
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Hey, I&apos;m Asher.
        </h1>
        <p className="text-foreground/60 leading-relaxed max-w-xl">
          I grew up in Houston and am shaped by the city, the heat, and the culture.
          From a young age I was obsessed with puzzles. Sudokus, Word Searches, the NYT Mini,
          anything with a clean answer hiding behind a messy problem. That same
          itch to understand the <em>how</em> and <em>why </em> behind things
          naturally pulled me toward engineering. Big, complex problems with no
          obvious solution? That&apos;s where I feel most at home.
        </p>
      </div>

      {/* Story */}
      <div className="space-y-12">
        <section>
          <p className="text-sm text-foreground/40 mb-3 tracking-widest uppercase">
            The path here
          </p>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              I studied Computer Science at the University of Houston, then headed
              to Dallas for my first real job at AT&T. The role took me out to
              Seattle for a stretch (where weekends started looking more like trails than traffic) but
              life and opportunities eventually pulled me back south.
            </p>
            <p>
              At AT&T I&apos;ve had the chance to work across a wide range of hard
              problems like telecom infrastructure, resource management, large scale
              contracts. The kind of work where the blast radius of a bad
              decision is very real.
            </p>
            <p>
              More recently, I started a Master&apos;s in CS with a focus on AI/ML
              at Georgia Tech. I wanted to go deeper on the underlying theory
              behind the field and get exposure to problems I just don&apos;t see
              at work. Most of my day to day has been backend API development,
              performance tuning, system architecture. But lately my side projects
              have been pointed squarely at the new frontier of prompting, token
              efficiency, and figuring out how to build AI powered tools that are
              actually useful.
            </p>
          </div>
        </section>

        {/* Now */}
        <section>
          <p className="text-sm text-foreground/40 mb-3 tracking-widest uppercase">
            Right now
          </p>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              At work I&apos;m leading resource management contract work and spending
              a good chunk of time mentoring junior engineers. On the side, I&apos;m
              building a tool that gives people clearer insight into their
              spending habits and helps them think smarter about their portfolio.
            </p>
          </div>
        </section>

        {/* Outside the terminal */}
        <section>
          <p className="text-sm text-foreground/40 mb-3 tracking-widest uppercase">
            Outside the terminal
          </p>
          <p className="text-foreground/70 leading-relaxed mb-10">
            When I&apos;m not at a keyboard, I&apos;m usually behind a lens. I love
            traveling, both to other countries and out into nature,
            photographing whatever I find along the way. Like many people
            in their late twenties, I&apos;ve also gotten into running and am
            aiming to run a half marathon this year.
          </p>

          {/* Photo grid — drop your images into /public/photos/ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-square rounded-lg overflow-hidden bg-foreground/10"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="pt-4 border-t border-foreground/10">
          <p className="text-foreground/60 leading-relaxed">
            Let’s connect! Collaborate, share ideas, or chat about anything.{" "}
            <a
              href="mailto:contact@waqlabs.ai"
              className="text-foreground hover:underline underline-offset-4"
            >
              contact@waqlabs.ai
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
