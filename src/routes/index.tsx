import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import heroImg from "@/assets/hero.jpg";
import basketballImg from "@/assets/basketball.jpg";
import cageImg from "@/assets/cage.jpg";
import carsImg from "@/assets/cars.jpg";
import loungeImg from "@/assets/lounge.jpg";
import vibe1 from "@/assets/vibe1.jpg";
import vibe2 from "@/assets/vibe2.jpg";
import vibe3 from "@/assets/vibe3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARENA 9 — Private Athletic Club, Dubai" },
      {
        name: "description",
        content:
          "A private performance club in Dubai for athletes, creators and founders. Basketball, MMA, supercars, lounge and elite networking under one roof.",
      },
      { property: "og:title", content: "ARENA 9 — Private Athletic Club, Dubai" },
      {
        property: "og:description",
        content:
          "A luxury performance club in Dubai combining basketball, combat sports, supercars and creator content.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Concept />
      <Spaces />
      <Membership />
      <Events />
      <Vibe />
      <Apply />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-display text-2xl tracking-widest">ARENA<span className="text-gold-gradient">9</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#concept" className="hover:text-foreground transition">Concept</a>
          <a href="#spaces" className="hover:text-foreground transition">Spaces</a>
          <a href="#membership" className="hover:text-foreground transition">Membership</a>
          <a href="#events" className="hover:text-foreground transition">Events</a>
          <a href="#apply" className="hover:text-foreground transition">Apply</a>
        </nav>
        <a href="#apply" className="btn-gold btn-gold-hover hidden md:inline-flex !py-3 !px-5 !text-[0.65rem]">Apply</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Interior of a dark luxury private athletic club in Dubai with basketball court, MMA cage and supercars"
          width={1920}
          height={1080}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <div className="gold-line opacity-30 animate-glow" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <Reveal>
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-gold" /> Dubai · Members Only
          </div>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="text-display text-[3.2rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[9rem] max-w-[1200px]">
            The private <span className="text-serif text-gold-gradient font-normal italic">arena</span> for
            <br /> athletes, creators
            <br /> & founders.
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A luxury performance club in Dubai combining basketball, combat sports, supercars,
            content creation and elite networking under one roof.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#apply" className="btn-gold btn-gold-hover">Apply for Membership</a>
            <a href="#apply" className="btn-ghost-gold btn-ghost-gold-hover">Book a Private Tour</a>
          </div>
        </Reveal>
        <Reveal delay={600}>
          <ul className="mt-14 flex flex-wrap gap-2.5">
            {[
              "Basketball Court",
              "MMA Cage",
              "Luxury Car Access",
              "Creator Friendly",
              "Private Members Club",
            ].map((b) => (
              <li
                key={b}
                className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/80 border border-border bg-background/40 backdrop-blur-sm px-3.5 py-2 rounded-full"
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="absolute bottom-6 right-6 md:right-10 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
        <span className="text-gold">↓</span> scroll
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="eyebrow mb-5 flex items-center gap-3">
          <span className="inline-block w-10 h-px bg-gold" /> {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{title}</h2>
      </Reveal>
      {copy && (
        <Reveal delay={200}>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">{copy}</p>
        </Reveal>
      )}
    </div>
  );
}

function Concept() {
  const items = [
    { tag: "01", title: "Train", body: "Basketball, combat, conditioning and private sessions led by elite coaches." },
    { tag: "02", title: "Create", body: "Cinematic spaces designed for influencers, athletes and brands to shoot content." },
    { tag: "03", title: "Connect", body: "A curated network of founders, creators, investors and high-status members." },
  ];
  return (
    <section id="concept" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="The Concept"
          title={<>More than a gym. <br /> A <span className="text-serif text-gold-gradient font-normal italic">social arena</span>.</>}
          copy="This is not a traditional fitness space. It is a private environment built for high-performance people who train, create, connect and build their image. Members come here to play, fight, film, network and be seen."
        />
        <div className="grid md:grid-cols-3 gap-px mt-20 bg-border">
          {items.map((it, i) => (
            <Reveal key={it.tag} delay={i * 120}>
              <div className="card-luxe p-10 h-full group">
                <div className="flex items-baseline justify-between mb-10">
                  <span className="eyebrow">{it.tag}</span>
                  <span className="text-gold text-2xl opacity-30 group-hover:opacity-100 transition">→</span>
                </div>
                <h3 className="text-display text-4xl md:text-5xl mb-4">{it.title}</h3>
                <div className="gold-line opacity-40 mb-5" />
                <p className="text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spaces() {
  const spaces = [
    {
      img: basketballImg,
      tag: "Court",
      title: "Basketball Court",
      body: "A premium indoor court for private games, creator events, competitions and athlete sessions.",
    },
    {
      img: cageImg,
      tag: "Combat",
      title: "Combat Arena",
      body: "An MMA-style cage and ring for boxing, grappling, UFC-inspired training, fight content and private coaching.",
    },
    {
      img: carsImg,
      tag: "Garage",
      title: "Luxury Car Gallery",
      body: "A premium arrival and parking experience designed for supercars, content shoots and status-driven events.",
    },
    {
      img: loungeImg,
      tag: "Social",
      title: "Lounge & Networking",
      body: "A private social zone for members, creators, founders and VIP guests.",
    },
  ];
  return (
    <section id="spaces" className="py-28 md:py-40 px-6 md:px-10 relative">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="The Venue"
          title={<>One venue. <br /> <span className="text-serif text-gold-gradient font-normal italic">Multiple</span> worlds.</>}
        />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-20">
          {spaces.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 150}>
              <article className="card-luxe group overflow-hidden">
                <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={1600}
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-5 left-5 eyebrow bg-background/50 backdrop-blur px-3 py-1.5 border border-border">
                    {s.tag}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-display text-3xl md:text-4xl mb-3">{s.title}</h3>
                  <div className="gold-line opacity-40 mb-4 w-12" />
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Membership() {
  const tiers = [
    {
      name: "Creator",
      sub: "For influencers, streamers, athletes and content creators.",
      perks: ["Cinematic shoot access", "Court & cage filming", "Brand intros"],
    },
    {
      name: "Founder",
      sub: "For entrepreneurs, investors and high-performance professionals.",
      perks: ["Curated networking", "Lounge access", "Private events"],
    },
    {
      name: "Athlete",
      sub: "For basketball players, fighters, trainers and competitive performers.",
      perks: ["Priority court time", "Combat programming", "Elite coaching"],
    },
    {
      name: "VIP Private",
      sub: "For private events, brand activations, car meets, fight nights and exclusive bookings.",
      perks: ["Full venue buyouts", "Concierge", "Bespoke production"],
      featured: true,
    },
  ];
  return (
    <section id="membership" className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="Membership"
          title={<>Built for a <span className="text-serif text-gold-gradient font-normal italic">curated</span> community.</>}
          copy="Designed for people who bring energy, ambition and presence. A place for athletes, creators, entrepreneurs and luxury lifestyle personalities who want to train in a space that matches their identity."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-20 bg-border">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`card-luxe p-8 md:p-10 h-full flex flex-col ${
                  t.featured ? "relative" : ""
                }`}
                style={
                  t.featured
                    ? { background: "linear-gradient(180deg, oklch(0.22 0.04 70 / 0.6), oklch(0.13 0.005 60))" }
                    : undefined
                }
              >
                {t.featured && (
                  <span className="absolute top-5 right-5 text-[0.6rem] uppercase tracking-[0.25em] text-gold border border-gold/40 px-2 py-1">
                    Invite Only
                  </span>
                )}
                <span className="eyebrow mb-6">Tier 0{i + 1}</span>
                <h3 className="text-display text-3xl md:text-4xl mb-3">{t.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{t.sub}</p>
                <div className="gold-line opacity-30 mb-6" />
                <ul className="space-y-3 text-sm flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="text-gold mt-1.5">◆</span>
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
                <a href="#apply" className="mt-10 text-[0.7rem] uppercase tracking-[0.25em] text-gold inline-flex items-center gap-2 group">
                  Apply <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    "Basketball Nights",
    "Fight & Sparring Sessions",
    "Supercar Meets",
    "Creator Shoots",
    "Brand Launches",
    "Private VIP Events",
  ];
  return (
    <section
      id="events"
      className="py-28 md:py-40 px-6 md:px-10 relative"
      style={{
        backgroundImage: `linear-gradient(180deg, oklch(0.1 0.005 60 / 0.9), oklch(0.13 0.005 60 / 0.95)), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="Events"
          title={
            <>
              Private games. <span className="text-serif text-gold-gradient font-normal italic">Fight nights.</span>
              <br /> Car meets. Brand activations.
            </>
          }
          copy="The venue hosts unforgettable experiences: basketball runs, sparring nights, creator collaborations, luxury car showcases, brand launches, private parties and invite-only networking."
        />
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
          {events.map((e, i) => (
            <Reveal key={e} delay={(i % 3) * 100}>
              <div className="card-luxe p-10 h-full flex items-center justify-between group hover:border-gold/50 transition">
                <div>
                  <span className="eyebrow opacity-60">Series 0{i + 1}</span>
                  <h3 className="text-display text-2xl md:text-3xl mt-3">{e}</h3>
                </div>
                <span className="text-gold text-3xl opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vibe() {
  const shots = [
    { img: vibe1, label: "Training Reels", h: "tall" },
    { img: vibe2, label: "Creator Shoots", h: "short" },
    { img: vibe3, label: "Fight Content", h: "tall" },
  ];
  return (
    <section className="py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="Made for the camera"
          title={<>A space designed to be <span className="text-serif text-gold-gradient font-normal italic">seen</span>.</>}
          copy="Every corner is built for content. From the court to the cage, from the cars to the lighting — the entire environment is engineered to look cinematic on camera."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-20">
          {shots.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className={`relative overflow-hidden card-luxe group ${i === 1 ? "md:mt-20" : ""}`}>
                <div className={`${s.h === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"} overflow-hidden`}>
                  <img
                    src={s.img}
                    alt={s.label}
                    loading="lazy"
                    width={900}
                    height={1280}
                    className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <span className="text-display text-xl md:text-2xl">{s.label}</span>
                  <span className="eyebrow opacity-80">0{i + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2.5 justify-center">
          {["Vertical Reels", "Instagram Shots", "Podcast Clips", "Training Content", "Luxury Lifestyle"].map((t) => (
            <span
              key={t}
              className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground border border-border px-4 py-2 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="apply" className="py-28 md:py-40 px-6 md:px-10 relative">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <Reveal>
            <div className="eyebrow mb-5 flex items-center justify-center gap-3">
              <span className="inline-block w-10 h-px bg-gold" /> By Application Only <span className="inline-block w-10 h-px bg-gold" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl">
              Membership is <span className="text-serif text-gold-gradient font-normal italic">by application</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              To protect the quality of the community, access is limited and curated. Apply to join the first wave of members in Dubai.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Application received. Our team will be in touch within 48 hours.");
            }}
            className="mt-16 card-luxe p-8 md:p-12"
            style={{ boxShadow: "var(--shadow-deep)" }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Name" name="name" placeholder="Full name" required />
              <Field label="Instagram / TikTok" name="social" placeholder="@handle" />
              <Field label="Profession" name="profession" placeholder="What you do" />
              <Field label="Membership Interest" name="interest" type="select" options={["Creator", "Founder", "Athlete", "VIP Private Access"]} />
              <Field label="Phone / WhatsApp" name="phone" placeholder="+971 ..." />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
              <div className="md:col-span-2">
                <Field label="Message" name="message" type="textarea" placeholder="Tell us about yourself" />
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-muted-foreground tracking-wider uppercase">
                Reviewed within 48 hours
              </p>
              <button type="submit" className="btn-gold btn-gold-hover">Apply Now →</button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}) {
  const base =
    "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition";
  return (
    <label className="block">
      <span className="eyebrow block mb-3 opacity-80">{label}</span>
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={3} className={base} />
      ) : type === "select" ? (
        <select name={name} className={`${base} appearance-none cursor-pointer`}>
          {options?.map((o) => (
            <option key={o} value={o} className="bg-card text-foreground">
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} placeholder={placeholder} required={required} className={base} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10 px-6 md:px-10 mt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-display text-5xl md:text-6xl">ARENA<span className="text-gold-gradient">9</span></h3>
            <p className="text-serif text-2xl text-muted-foreground mt-4">Train. Create. Connect.</p>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A private athletic and social club for the next generation of Dubai's athletes, creators and founders.
            </p>
          </div>
          <div>
            <span className="eyebrow block mb-5">Location</span>
            <p className="text-foreground/90">Dubai, UAE</p>
            <p className="text-muted-foreground text-sm mt-2">By private appointment</p>
          </div>
          <div>
            <span className="eyebrow block mb-5">Contact</span>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-gold transition">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition">WhatsApp</a></li>
              <li><a href="#apply" className="hover:text-gold transition">Private Membership</a></li>
              <li><a href="#events" className="hover:text-gold transition">Events</a></li>
              <li><a href="#" className="hover:text-gold transition">Partnerships</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-line opacity-30 mt-16 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} ARENA9 · Dubai</span>
          <span>Members Only · By Application</span>
        </div>
      </div>
    </footer>
  );
}
