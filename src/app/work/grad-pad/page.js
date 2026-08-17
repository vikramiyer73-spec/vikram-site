import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "Grad Pad redesign — Vikram Iyer",
    description:
      "Rebuilding Grad Pad's lost design system, and what reproducing 20+ pages surfaced.",
  };
  
  export default function GradPad() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="01"
          kind="Product / UX"
          title="Rebuilding and Improving Grad Pad's Website Design"
          dek="Grad Pad had shipped a live product but lost track of the Figma file behind it. I was tasked with rebuilding and improving the web pages"
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
              text: "Rebuilt 20+ live pages in Figma from scratch, matching the existing designs while making improvements.",
            },
          ]}
        >
          <p>
            Grad Pad is a startup building a platform for university
            alumni networks. I joined as a product and marketing intern for four
            months, working directly with the founder, the lead designer, and the
            engineering team.
          </p>
          <p>
            My first task gave me a lot of valuable practice using Figma. The team had lost the original
            Figma file containing the website&apos;s screens, so even though the site was live
            and working, every future change to the website design would have had to be started from 
            a screenshot of the website.
          </p>
          <p>
            I was tasked with rebuilding every page in Figma to match the production. 
            It took a while and was tedious at times, but it sharpened my Figma and design 
            skills in general, and it also helped me understand the design choices of the site. 
            I wasn't just tasked with recreating the pages, I also improved some of them.
          </p>
        </Step>
  
        <Step
          number="02"
          title="What the rebuild surfaced"
          annotations={[
            {
              type: "FINDING",
              text: "Pricing tiers were split by billing cadence (Monthly / Yearly) while the actual products were software subscriptions and service engagements.",
            },
            {
              type: "FINDING",
              text: "The compare-plans table at the bottom of the pricing page did not work.",
            },
          ]}
        >
          <p>
            Three things had stood out once I had gone through the pages closely.
          </p>
          <p>
            <strong>The pricing page could have been organized around a different axis.</strong>{" "}
            It offered a Monthly / Yearly toggle, which sorts plans by how often
            you pay. But the four tiers underneath were not four versions of one
            product. They instead mixed a $60/month software subscription with more expensive
            consulting-style services.
          </p>
          <p>
            <strong>A feature on the page was broken.</strong> The
            &ldquo;Compare plan features&rdquo; table at the bottom did not
            work.
          </p>
          <p>
            <strong>Information was out of date.</strong> The milestones timeline
            on the About page and the launch copy on the Coming Soon page were both
            out of date, and many more milestones could be added to them.
          </p>
        </Step>
  
        <Step
          number="03"
          title="Redesign"
          annotations={[
            {
              type: "DECISION",
              text: "Split the pricing page by Software vs. Services instead of how often you pay.",
            },
          ]}
        >
          <p>
            <mark>
              I discussed the pricing structure with the founder instead of
              redesigning around it.
            </mark>{" "}
            We worked through a few ways of splitting the offerings and landed on
            Software and Services as the best way to divide it.
          </p>
          <p>
            The change means a visitor now picks what they are looking for
            before they choose any prices. Software shows subscription tiers, while
            Services shows event planning, marketing and outreach, and custom
            engagements, priced per engagement insetad of per month.
          </p>
          <p>
            We also cut the compare-plans table from the design instead of redesigning it. It was
            broken, it repeated information already on the page, and removing it
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
              text: "We decided a lighter color palette suited the website better and I changed it.",
            },
            {
              type: "FIGURE",
              text: "Fig. 04–07 — About and Coming Soon, before and after",
            },
          ]}
        >
          <p>
            On the About page I rebuilt the milestones timeline with updated
            entries and rebalanced the layout so the mission, values, and vision
            sections had a clearer hierarchy.
          </p>
          <p>
            I had originally reproduced the original deep purple of the website because
            I was matching the existing design. After discussions with the founder and lead 
            designer, we chose a lighter color palette, which helped the content on it stand out more.
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
              text: "Presented screens to the founder, lead designer, and engineers together.",
            },
          ]}
        >
          <p>
            I presented the screens to the founder, designer, and
            developers in the same room. Some of the discussions were about whether
            particular animations and interactions were realistic to build, which I found
            was a useful constraint to hear when designing.
          </p>
          <p>
            Not everything that came up in the discussion was implemented. One proposal was to convert the
            milestones timeline from a long vertical scroll to a horizontal one, but we didn't end up implementing it.
          </p>
        </Step>
  
        <Step
          number="06"
          title="Outcome and limitations"
          annotations={[
            {
              type: "FINDING",
              text: "Many of the redesigned screens shipped to the live site, but I have don't have engagement data on whether they performed better.",
            },
          ]}
        >
          <p>
            A good portion of what I designed was implemented on the live site,
            and the team&apos;s feedback was positive. The rebuilt Figma file also
            gave them the design source they had been missing.
          </p>
          <p>
            I can't say whether the redesigns improved engagement, because I did not have
            access to analytics before or after, and no test was run on the
            redesign.
          </p>
        </Step>
      </main>
    );
  }