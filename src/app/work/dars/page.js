import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "DARS redesign — Vikram Iyer",
    description:
      "Eleven interviews, eight usability tests, and the finding that made us throw out our own navigation.",
  };
  
  export default function Dars() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="03"
          kind="UX Research"
          title="&ldquo;Unless I really read into it, it all looks the same&rdquo;"
          dek="Redesigning the degree audit system 30,000 UCLA students depend on — and discovering that the navigation we'd designed was invisible to the people using it."
          meta={[
            ["Role", "Research protocol, requirements, prototype"],
            ["Team", "6 researchers"],
            ["Participants", "11 interviews · 8 usability tests"],
            ["Timeframe", "May – June 2026"],
          ]}
        />
  
        <Step
          number="01"
          title="Context"
          annotations={[
            {
              type: "METHOD",
              text: "Two research activities over six weeks: semi-structured interviews, then moderated usability testing on a prototype built from the findings.",
            },
          ]}
        >
          <p>
            DARS is the degree audit system UCLA students use to check whether
            they are on track to graduate. Nearly everyone uses it, most people
            find it hard to read, and it is the kind of tool where a
            misinterpretation costs someone an extra quarter of tuition.
          </p>
          <p>
            Six of us redesigned it over six weeks as a UX fundamentals project.
            The work ran as two full research cycles — interviews first, then a
            prototype, then usability testing on that prototype, then a revision
            driven by what the testing found.
          </p>
          <p>
            My pieces were the interview protocol, both versions of the
            requirements list, and work on the prototype and findings. I
            interviewed two participants in the first round and ran usability
            tests with two more in the second.
          </p>
        </Step>
  
        <Step
          number="02"
          title="Interviews"
          annotations={[
            {
              type: "METHOD",
              text: "11 participants · semi-structured, 45–60 min · think-aloud tasks on real audit screenshots · recorded, transcribed, thematically coded",
            },
            {
              type: "FIGURE",
              text: "Fig. 01 — affinity diagram, thematic analysis of all interview transcripts",
            },
          ]}
        >
          <p>
            I co-wrote the protocol. Writing it well mattered more than I expected
            — the first draft was full of questions that told participants what to
            think. We rewrote them to be open-ended, and we piloted the script
            before running anything so that every interviewer asked the same
            things in the same order.
          </p>
          <p>
            The protocol also included task-based questions rather than only
            opinion questions. We handed participants a real audit screenshot and
            asked them to tell us whether the student had completed a requirement,
            and to walk us through what each unit number meant. Asking someone
            whether an interface is confusing gets you politeness. Watching them
            try to read it gets you the truth.
          </p>
          <p>
            Eleven interviews, coded into an affinity diagram. Three themes came
            out.
          </p>
          <p>
            <strong>Information clarity.</strong> Dense text, weak hierarchy, long
            undifferentiated course lists. One participant put it exactly:
            &ldquo;Unless I really read into it, it all looks the same.&rdquo;
          </p>
          <p>
            <strong>Progress and planning were disconnected.</strong> Students
            wanted DARS to answer what they had completed, what was left, and what
            to take next. It answered the first, partially.
          </p>
          <p>
            <strong>Nobody fully trusted it.</strong> Participants cross-checked
            against department websites, requirement PDFs, the class planner, and
            advisors. That is the finding I keep coming back to — the system was
            not just hard to read, it had failed to earn the confidence of people
            who had used it for years.
          </p>
          <Figure
            src="/dars-affinity.png"
            alt="Affinity diagram grouping interview quotes into themes about clarity, planning, and trust"
            caption="Thematic analysis across 11 interview transcripts"
            number="Fig. 01"
          />
        </Step>
  
        <Step
          number="03"
          title="Turning findings into requirements"
          annotations={[
            {
              type: "METHOD",
              text: "Requirements written directly from affinity clusters. Cut from 13 to 6 — anything not traceable to a user goal was removed.",
            },
          ]}
        >
          <p>
            I wrote the requirements list. The first draft had thirteen items, and
            most of them were features I thought would be nice rather than things
            the research supported. Our instructor&apos;s guidance was to stay
            under ten, and cutting forced the useful question: which of these does
            a participant&apos;s actual words justify?
          </p>
          <p>
            Six survived. Each maps to something we heard — course lists organized
            and filterable because of the clarity theme, quarter availability
            surfaced inside the audit because students were opening three tabs to
            find it, the &ldquo;what-if&rdquo; feature made visible because most
            participants did not know it existed.
          </p>
        </Step>
  
        <Step
          number="04"
          title="Usability testing"
          annotations={[
            {
              type: "METHOD",
              text: "8 participants · one-on-one, moderated · think-aloud · 4 tasks on a medium-fidelity Figma prototype",
            },
          ]}
        >
          <p>
            We built a prototype and tested it against four tasks: find your major
            requirements, plan for an upcoming quarter, explore adding a double
            major, and work out how many classes you still need for a specific
            requirement. Each task targeted a specific design decision, so a
            failure would tell us which decision was wrong.
          </p>
          <p>
            Plenty of it worked. The hover card — course description, unit count,
            quarter availability, and an add-to-planner action without leaving the
            page — was the clearest success. Colour-coded quarter availability let
            people discard irrelevant courses at a glance. The completion icons
            read correctly.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/dars-hover.png"
              alt="Hover card showing course description, units, quarter availability, and an add to class planner action"
              caption="Hover / quick view — the clearest success in testing"
              number="Fig. 02"
              wide
            />
            <Figure
              src="/dars-whatif.png"
              alt="Redesigned what-if audit screen with an explanation of what the feature does"
              caption="What-if audit, surfaced and explained"
              number="Fig. 03"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="05"
          title="The finding that changed the design"
          annotations={[
            {
              type: "DECISION",
              text: "Requirement 1 rewritten between iterations: sections behind a dropdown → separate pages navigable by tabs at the top.",
            },
            {
              type: "FINDING",
              text: "Testers who had scrolled DARS for years did not think to open a dropdown. Two independently proposed tabs.",
            },
          ]}
        >
          <p>
            We had put the navigation in a dropdown at the top of the page. It
            seemed clean. In testing, several participants simply did not see it —
            they were used to scrolling DARS, so they scrolled, found nothing, and
            only discovered the dropdown after exploring.
          </p>
          <p>
            One participant said it plainly: it was not intuitive to click the
            dropdown, and if they were looking for their major requirements they
            would not know where to find it. Then they proposed the fix themselves
            — different tabs along the top.
          </p>
          <p>
            <mark>
              So the requirement changed. Version one described sections behind a
              dropdown; version two specified separate pages navigable by tabs at
              the top of the page.
            </mark>{" "}
            We had optimised for a tidy interface and lost discoverability, which
            was one of the exact failures we had set out to fix in the original
            system.
          </p>
          <p>
            A second change came from the same session. We had put a star icon
            beside each course, and testers could not tell whether it meant
            &ldquo;favourite&rdquo; or &ldquo;add to planner.&rdquo; Rather than
            relabel it, we built the destination it implied — a Favorites List
            page with folders, notes, and a route into the class planner. One
            participant had been keeping exactly that list in a separate Google
            Sheet.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/dars-lofi-major.png"
              alt="Earlier prototype with page views hidden behind a dropdown menu"
              caption="Before — navigation behind a dropdown"
              number="Fig. 04"
              wide
            />
            <Figure
              src="/dars-final-major.png"
              alt="Revised major overview page with tab navigation across the top"
              caption="After — tabs across the top"
              number="Fig. 05"
              wide
            />
          </FigureRow>
          <FigureRow cols={2}>
            <Figure
              src="/dars-final-audit.png"
              alt="Final main audit page with sectioned requirements and status icons"
              caption="Main audit page"
              number="Fig. 06"
              wide
            />
            <Figure
              src="/dars-favorites.png"
              alt="Favorites list page with saved courses, personal notes, and add to planner actions"
              caption="Favorites list — built from a confusing icon"
              number="Fig. 07"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="06"
          title="Limitations"
          annotations={[
            {
              type: "FINDING",
              text: "Every participant was a classmate in the same UX course. Convenience sample, and an unusually design-literate one.",
            },
          ]}
        >
          <p>
            Our participants were students in our own UX fundamentals class. That
            is a convenience sample twice over — they were easy to recruit, and
            they were more fluent in interface conventions than the average DARS
            user. If anything, that makes the dropdown finding worse rather than
            better: people trained to notice interface affordances still missed
            it.
          </p>
          <p>
            We also never interviewed academic advisors, who run audits constantly
            and would likely have surfaced an entirely different set of problems.
            We named them as a user population in the proposal and then did not
            reach them.
          </p>
          <p>
            And the redesign was never built. Everything here is a prototype
            tested in a moderated session, which tells you what people
            <em> say and do</em> in front of a Figma file — not what they do
            during enrollment week at 7am with a registration slot closing.
          </p>
        </Step>
      </main>
    );
  }