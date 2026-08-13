import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "Grad Pad redesign — Vikram Iyer",
    description:
      "Rebuilding a startup's lost design system, and restructuring a pricing page that was sorted by the wrong thing.",
  };
  
  export default function GradPad() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="01"
          kind="Product / UX"
          title="The pricing page was sorted by the wrong thing"
          dek="Grad Pad had shipped a live product and lost the Figma file behind it. Rebuilding every page by hand is how I found the problems."
          meta={[
            ["Role", "Product & Marketing Intern"],
            ["Timeframe", "Dec 2025 – Mar 2026"],
            ["Team", "Founder, lead designer, dev team"],
            ["Scope", "20+ customer-facing pages"],
          ]}
        />
  
        <Step
          number="01"
          title="Context"
          annotations={[
            {
              type: "METHOD",
              text: "Rebuilt 20+ live pages in Figma from scratch, matching production exactly, before changing anything.",
            },
          ]}
        >
          <p>
            Grad Pad is an early-stage startup building a platform for university
            alumni networks. I joined as a product and marketing intern for four
            months, working directly with the founder, the lead designer, and the
            engineering team.
          </p>
          <p>
            The first task was not a design task. The team had lost the original
            Figma file containing the website&apos;s screens. The site was live
            and working, but there was no source of truth behind it — every future
            change would have started from a screenshot or a guess.
          </p>
          <p>
            So I rebuilt it. Every page, reconstructed in Figma to match
            production. It was tedious, and it turned out to be the most useful
            thing I did, because reproducing a page by hand forces you to look at
            every decision in it.
          </p>
        </Step>
  
        <Step
          number="02"
          title="What the rebuild surfaced"
          annotations={[
            {
              type: "FINDING",
              text: "Pricing tiers were split by billing cadence — Monthly / Yearly — while the actual products were software subscriptions and one-off service engagements.",
            },
            {
              type: "FINDING",
              text: "The compare-plans table at the bottom of the pricing page did not work.",
            },
          ]}
        >
          <p>
            Three things stood out once I had gone through the pages closely.
          </p>
          <p>
            <strong>The pricing page was organized around the wrong axis.</strong>{" "}
            It offered a Monthly / Yearly toggle, which sorts plans by how often
            you pay. But the four tiers underneath were not four versions of one
            product — they mixed a $60/month software subscription with
            consulting-style engagements running into the thousands. The toggle
            answered a question customers ask second, and the page never answered
            the one they ask first.
          </p>
          <p>
            <strong>A feature on the page was broken.</strong> The
            &ldquo;Compare plan features&rdquo; table at the bottom did not
            function.
          </p>
          <p>
            <strong>Information was out of date.</strong> The milestones timeline
            on the About page and the launch copy on the Coming Soon page both
            described a state of the company that had moved on.
          </p>
        </Step>
  
        <Step
          number="03"
          title="The decision"
          annotations={[
            {
              type: "DECISION",
              text: "Split the pricing page by what you're buying — Software vs. Services — instead of how often you pay.",
            },
          ]}
        >
          <p>
            <mark>
              I raised the pricing structure with the founder rather than
              redesigning around it.
            </mark>{" "}
            The problem was not visual, so a visual fix would not have helped. We
            worked through a few ways of splitting the offerings and landed on
            Software and Services as the top-level division.
          </p>
          <p>
            The change means a visitor now picks what kind of thing they need
            before they look at any prices. Software shows subscription tiers.
            Services shows event planning, marketing and outreach, and custom
            engagements, priced per engagement rather than per month. Billing
            cadence became a detail inside the software tab, which is where it
            belongs.
          </p>
          <p>
            I also cut the compare-plans table instead of redesigning it. It was
            broken, it duplicated information already on the page, and removing it
            was faster and better than fixing it.
          </p>
          <FigureRow>
            <Figure
              src="/gp-pricing-before.png"
              alt="Original Grad Pad pricing page with a Monthly and Yearly toggle above four plan tiers"
              caption="Before — sorted by billing cadence"
              number="Fig. 01"
              wide
            />
            <Figure
              src="/gp-pricing-software.png"
              alt="Redesigned Grad Pad pricing page with a Software and Services toggle, showing the Software tab"
              caption="After — Software tab"
              number="Fig. 02"
              wide
            />
            <Figure
              src="/gp-pricing-services.png"
              alt="Redesigned Grad Pad pricing page showing the Services tab with per-engagement pricing"
              caption="After — Services tab"
              number="Fig. 03"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="04"
          title="The rest of the redesign"
          annotations={[
            {
              type: "DECISION",
              text: "The lead designer pushed for a lighter palette. I had kept the original deep purple; the lighter version reads better and I changed it.",
            },
            {
              type: "FIGURE",
              text: "Fig. 04–07 — About and Coming Soon, before and after",
            },
          ]}
        >
          <p>
            On the About page I rebuilt the milestones timeline with current
            entries and rebalanced the layout so the mission, values, and vision
            sections carried clearer hierarchy. The Coming Soon page had copy
            describing a launch that had already been superseded, plus a signup
            field that read as inactive.
          </p>
          <p>
            The palette change came from the lead designer, not from me. I had
            reproduced the original deep purple because I was matching production.
            He argued for something lighter, and he was right — the heavy purple
            bands were flattening the content underneath them.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/gp-about-before.png"
              alt="Original Grad Pad About Us page with a dark purple mission band"
              caption="About — before"
              number="Fig. 04"
              wide
            />
            <Figure
              src="/gp-about-after.png"
              alt="Redesigned Grad Pad About Us page with a lighter palette and updated milestones"
              caption="About — after"
              number="Fig. 05"
              wide
            />
          </FigureRow>
          <FigureRow cols={2}>
            <Figure
              src="/gp-coming-soon-before.png"
              alt="Original Grad Pad Coming Soon page with outdated launch copy"
              caption="Coming Soon — before"
              number="Fig. 06"
              wide
            />
            <Figure
              src="/gp-coming-soon-after.png"
              alt="Redesigned Grad Pad Coming Soon page with updated copy and an active signup field"
              caption="Coming Soon — after"
              number="Fig. 07"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="05"
          title="Review"
          annotations={[
            {
              type: "METHOD",
              text: "Presented screens to the founder, lead designer, and engineers together. Feasibility was part of the conversation, not an afterthought.",
            },
          ]}
        >
          <p>
            I presented the screens to the whole team — founder, designer, and
            developers in the same room. Some of the discussion was about whether
            particular animations and interactions were realistic to build, which
            is a useful constraint to hear before a design is finished rather
            than after.
          </p>
          <p>
            Not everything suggested got made. One proposal was to convert the
            milestones timeline from a long vertical scroll to a horizontal one.
            We did not implement it.
          </p>
        </Step>
  
        <Step
          number="06"
          title="Outcome and limitations"
          annotations={[
            {
              type: "FINDING",
              text: "Many of the redesigned screens shipped to the live site. I have no engagement data on whether they performed better.",
            },
          ]}
        >
          <p>
            A good portion of what I designed was implemented on the live site,
            and the team&apos;s feedback was positive. The rebuilt Figma file also
            gave them the design source of truth they had been missing.
          </p>
          <p>
            I cannot say whether any of it improved engagement. I did not have
            access to analytics before or after, and no test was run on the
            redesign — so the case for the pricing restructure rests on the
            argument, not on measured behavior.
          </p>
          <p>
            It is also worth being clear about what was mine. The founder
            specified a number of changes he wanted and I executed them. The
            pricing restructure, the removal of the broken comparison table, and
            the hierarchy problems I flagged were things I brought to him. The
            lighter palette was the lead designer&apos;s call.
          </p>
        </Step>
      </main>
    );
  }