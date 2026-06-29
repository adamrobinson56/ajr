import Image from "next/image";
import { Logo } from "@/components/Logo";
import { ContactForm } from "@/components/ContactForm";
import { HeroVideo } from "@/components/HeroVideo";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Bespoke websites and web applications, engineered on modern foundations and finished with the kind of detail that signals quality before a word is read.",
  },
  {
    number: "02",
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps designed to feel inevitable — considered interactions, careful pacing, nothing superfluous.",
  },
  {
    number: "03",
    title: "Hosting",
    description:
      "Private, monitored infrastructure with proactive maintenance and support, so the work we build for you simply stays out of the way and works.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Brand and interface design rooted in restraint — typography, space and material used deliberately, never decoration for its own sake.",
  },
  {
    number: "05",
    title: "SEO",
    description:
      "Technical and editorial SEO that compounds quietly in the background, built on substance rather than shortcuts.",
  },
  {
    number: "06",
    title: "Digital Growth",
    description:
      "Strategy across paid, organic and conversion, reported on plainly, so growth is something you can see rather than take on faith.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-50 border-b border-gold-line bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Logo className="text-2xl" />
          <nav className="hidden gap-10 text-xs font-medium uppercase tracking-[0.18em] text-ink/60 sm:flex">
            <a href="#services" className="transition hover:text-gold">
              Services
            </a>
            <a href="#about" className="transition hover:text-gold">
              About
            </a>
            <a href="#contact" className="transition hover:text-gold">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="border border-ink/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-ink transition hover:border-gold hover:text-gold"
          >
            Enquire
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-charcoal">
          <HeroVideo className="absolute inset-0 h-full w-full object-cover opacity-70 motion-reduce:hidden" />
          <Image
            src="/images/hero-poster.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-70 motion-safe:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />

          <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
              AJR Digital Solutions
            </p>
            <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
              We build the digital foundations your business grows on.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-8 text-cream/70">
              A private digital studio for businesses who want craftsmanship,
              not a template — websites, apps and growth handled as one
              connected discipline.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="border border-gold bg-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition hover:bg-gold-soft"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="border border-cream/30 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold-soft"
              >
                View services
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-28">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                What we do
              </p>
              <p className="mt-4 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Everything you need to launch and scale, under one roof.
              </p>
            </div>

            <div className="mt-16 divide-y divide-gold-line border-t border-gold-line">
              {services.map(({ number, title, description }) => (
                <div
                  key={title}
                  className="group grid gap-6 py-9 sm:grid-cols-[5rem_1fr] sm:gap-10"
                >
                  <span className="font-serif text-2xl text-gold/50 transition group-hover:text-gold">
                    {number}
                  </span>
                  <div className="grid gap-2 sm:grid-cols-[14rem_1fr] sm:gap-10">
                    <h3 className="font-serif text-xl font-medium text-ink">{title}</h3>
                    <p className="max-w-xl text-[15px] leading-7 text-ink/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-width image break */}
        <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-charcoal">
          <Image
            src="/images/monochrome-skyline.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <p className="relative max-w-2xl px-6 text-center font-serif text-3xl font-medium italic leading-snug text-cream sm:text-4xl">
            &ldquo;We build. You grow.&rdquo;
          </p>
        </section>

        {/* About */}
        <section id="about" className="bg-cream">
          <div className="mx-auto grid max-w-5xl gap-16 px-6 py-28 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/interior-dark.jpg"
                alt="AJR Digital Solutions studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                About AJR
              </p>
              <p className="mt-4 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Built quietly. Built to last.
              </p>
              <p className="mt-7 text-[15px] leading-8 text-ink/65">
                AJR Digital Solutions is a digital partner for businesses who
                want more than a website — we design and build the
                technology, design and growth engine behind it. From the
                first line of code to the campaign that brings customers
                through the door, we handle it as one connected team, not a
                string of handoffs.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-8 border-t border-gold-line pt-8">
                <div>
                  <p className="font-serif text-2xl text-ink">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink/50">
                    Tailored builds
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-ink">1 team</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink/50">
                    End to end
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-ink">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink/50">
                    Hosting support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-charcoal">
          <div className="mx-auto max-w-3xl px-6 py-28">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Let&apos;s talk
              </p>
              <p className="mt-4 font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl">
                Tell us about your project
              </p>
              <p className="mt-4 text-[15px] leading-7 text-cream/60">
                Share a few details and we&apos;ll get back to you within one
                business day.
              </p>
            </div>
            <div className="mt-16">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold-line bg-charcoal">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <Logo dark className="text-xl" />
          <p className="text-xs uppercase tracking-[0.18em] text-cream/40">
            © {new Date().getFullYear()} AJR Digital Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
