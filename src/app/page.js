import Image from "next/image";

const work = [
  {
    n: "01",
    title: "Rebuilding and Improving Grad Pad's Website Design",
    kind: "Product / UX",
    line: "Rebuilding Grad Pad's lost design system, and what reproducing 20+ pages surfaced.",
    href: "/work/grad-pad",
  },
  {
    n: "02",
    title: "Usability Testing and Subsequent Improvements",
    kind: "UX Research / Product Strategy",
    line: "A heuristic evaluation of the company's app, analysis of the category leader, and the prototype built from both.",
    href: "/work/sawubona",
  },
  {
    n: "03",
    title: "Researching and Improving the UCLA DARS Interface and Experience",
    kind: "UX Research",
    line: "How interviews and usability tests informed our design decisions.",
    href: "/work/dars",
  },
  {
    n: "04",
    title: "Various Philanthropy Fundraising Efforts",
    kind: "Marketing / Brand",
    line: "A year of philanthropy events at Theta Chi and what I learned from them",
    href: "/work/philanthropy",
  },
];

const additional = [
  {
    title: "SoundCloud mobile redesign",
    line: "Self-directed UI redesign of the mobile app.",
    href: "https://www.figma.com/proto/Deq3ULfPyYcm6Y60S39nyu/Soundcloud-redesign?node-id=1-2&p=f&t=wSw8324zVIlCjHhz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  },
  {
    title: "Terra & Cotta brand kit",
    line: "Identity system for a fictional pottery studio, including logo, palette, and type.",
    href: "https://www.figma.com/design/padm5wS5vEcWtagm7BftMB/Terra-and-Cotta?node-id=0-1&t=q8DiNpx46PbKau4A-1",
  },
  {
    title: "Craft beer garden brand & UI kit",
    line: "Figma file for a fictional taproom, with screens, components, and visual direction.",
    href: "https://www.figma.com/design/8Zb0o9efQIU6RmlXsDdp5a/Vikram-Ecom-V1?node-id=32-68&t=efz6pRyaV4Ymzr72-1",
  },
];

const graphics = [
  { src: "/Gradpad-badges.png", alt: "Set of twelve tiered achievement badges designed for Grad Pad", cap: "Grad Pad achievement badges" },
  { src: "/hot-ruby-chocolate.png", alt: "Promotional graphic for a hot ruby chocolate latte at Little Ones café", cap: "Little Ones — drink promo" },
  { src: "/spring-menu.png", alt: "Spring drink menu for Little Ones café with floral illustration", cap: "Little Ones — spring menu" },
  { src: "/bls-alumni-night.png", alt: "Event graphic for BLS Alumni Night hosted by Grad Pad", cap: "Grad Pad — alumni night" },
  { src: "/panel-discussion.png", alt: "Event graphic for a panel discussion and brunch featuring Peter Kelly", cap: "Grad Pad — panel & brunch" },
  { src: "/battle-of-la.png", alt: "Event graphic for a UCLA versus USC basketball watch party", cap: "Grad Pad — watch party" },
  { src: "/cki-spotlight.png", alt: "Senior spotlight graphic for UCLA Circle K International", cap: "Circle K — senior spotlight" },
  { src: "/game-night.png", alt: "Event graphic for an online game night hosted by Circle K", cap: "Circle K — game night" },
  { src: "/theta-cinema.png", alt: "Event graphic for a Theta Chi outdoor film screening", cap: "Theta Chi — film night" },
];

const skills = [
  ["Research & Strategy", "User Research · Usability Testing · Heuristic Evaluation · Competitive Analysis · Audience Analysis"],
  ["Design", "Figma · Prototyping · Wireframing · Design Systems · Photoshop · Illustrator · Premiere Pro"],
  ["Data", "SQL · Python · Power BI (DAX) · Microsoft Fabric · Excel"],
];

function Row({ item }) {
  const inner = (
    <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-10 md:grid-cols-[5rem_1fr_12rem] md:gap-x-8 md:py-14">
      <span className="annotation pt-2">{item.n}</span>
      <div>
        <h3 className="font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] md:text-[2.25rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-ink-muted">{item.line}</p>
      </div>
      <span className="label col-start-2 mt-4 md:col-start-3 md:mt-2 md:text-right">
        {item.kind}
      </span>
    </div>
  );

  if (!item.href) {
    return <li className="border-t border-rule opacity-60">{inner}</li>;
  }

  return (
    <li className="border-t border-rule">
      <a
        href={item.href}
        className="block transition-colors duration-150 hover:bg-paper-sunk"
      >
        {inner}
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 md:px-10">
      {/* Hero */}
      <section className="pt-24 pb-28 md:pt-40 md:pb-40">
        <p className="label mb-6">Portfolio · 2026</p>
        <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
          Vikram Iyer
        </h1>
        <p className="mt-8 max-w-[46ch] text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.5] text-ink-muted">
          Cognitive science at UCLA with work across UX, product, and
          marketing.
        </p>
      </section>

      {/* Selected work */}
      <section id="work" className="border-t border-rule scroll-mt-20">
        <h2 className="label py-6">Selected Work</h2>
        <ul>
          {work.map((item) => (
            <Row key={item.n} item={item} />
          ))}
        </ul>
      </section>

      {/* Additional work */}
      <section className="border-t border-rule pt-6">
        <h2 className="label py-6">Additional Work</h2>
        <ul className="border-t border-rule">
          {additional.map((item) => (
            <li key={item.title} className="border-b border-rule">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 py-6 transition-colors duration-150 hover:bg-paper-sunk md:flex-row md:items-baseline md:gap-8"
              >
                <span className="font-display text-[1.1875rem] font-semibold md:w-[22rem] md:shrink-0">
                  {item.title}
                </span>
                <span className="text-[0.9375rem] text-ink-muted">
                  {item.line}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Visual & brand design */}
      <section className="border-t border-rule pt-6">
        <h2 className="label py-6">Visual &amp; Brand Design</h2>
        <p className="mb-10 max-w-[60ch] text-ink-muted">
          Event graphics, menus, and promotional assets made for Grad Pad,
          Circle K, Theta Chi, and Little Ones.
        </p>
        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {graphics.map((g) => (
            <figure key={g.src}>
              <div className="border border-rule bg-paper-sunk">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={1000}
                  height={1250}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="annotation mt-3">{g.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-rule pt-6">
        <h2 className="label py-6">Skills</h2>
        <dl className="border-t border-rule">
          {skills.map(([cat, list]) => (
            <div
              key={cat}
              className="flex flex-col gap-1 border-b border-rule py-6 md:flex-row md:gap-8"
            >
              <dt className="label md:w-[14rem] md:shrink-0 md:pt-1">{cat}</dt>
              <dd className="max-w-[60ch]">{list}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section id="about" className="border-t border-rule pt-6 scroll-mt-20">
        <h2 className="label py-6">About</h2>
        <div className="flex flex-col gap-10 py-6 md:flex-row md:gap-14">
          <div className="shrink-0">
            <Image
              src="/headshot.jpg"
              alt="Vikram Iyer"
              width={400}
              height={500}
              className="w-[180px] border border-rule"
            />
          </div>
          <div className="max-w-[60ch] space-y-5">
            <p>
              I&apos;m a current UCLA student majoring in Cognitive Science with
              minors in Data Science Engineering and Film, Television &amp;
              Digital Media. I&apos;ve done work across UX, product, and
              marketing, and I&apos;d love to keep exploring these areas.
            </p>
            <p>I&apos;m also a big film and TV buff, and a huge sports fan.</p>
            <dl className="grid gap-5 pt-4 sm:grid-cols-2">
              <div>
                <dt className="label mb-1">Education</dt>
                <dd className="annotation text-ink">
                  B.S. Cognitive Science, UCLA — June 2027
                </dd>
              </div>
              <div>
                <dt className="label mb-1">Certifications</dt>
                <dd className="annotation text-ink">
                  Microsoft Fabric Analytics Engineer Associate (DP-600) ·
                  Microsoft Azure Fundamentals
                </dd>
              </div>
            </dl>
            <p className="pt-2">
              <a
                href="/vikram-iyer-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-connection underline underline-offset-4"
              >
                Résumé (PDF)
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="border-t border-rule py-16">
        <h2 className="label mb-6">Contact</h2>
        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
          <a
            href="mailto:vikramiyer73@gmail.com"
            className="font-display text-[1.375rem] font-semibold text-connection underline underline-offset-4"
          >
            vikramiyer73@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/vikramiyerucla/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[1.375rem] font-semibold text-connection underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}