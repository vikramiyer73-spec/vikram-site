import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "DARS redesign — Vikram Iyer",
    description:
      "How interviews and usability tests informed our design decisions.",
  };
  
  export default function Dars() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="03"
          kind="UX Research"
          title="Researching and Improving the UCLA DARS Interface and Experience"
          dek="Redesigning the degree audit system UCLA students depend on, and discovering that the navigation we'd designed was invisible to the people using it."
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
              text: "Two research activities over six weeks: semi-structured interviews, then usability testing on a prototype built from our findings.",
            },
          ]}
        >
          <p>
            DARS is the degree audit system UCLA students use to check whether
            they are on track to graduate. All students use it, but many
            find it hard to read. It is essential to understand the tool correctly
            in order to properly plan your courses in the upcoming quarters. 
          </p>
          <p>
            Six of us redesigned the DARS experience over six weeks as a UX fundamentals project.
            We ran two full research cycles. We started with interviews, we then created a
            prototype, then we finally conducted usability testing on that prototype, then a revision
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
            I co-wrote the protocol. Writing it well mattered more than I initially expected;
            the first draft had a lot of leading questions that told the participants what to think. 
            We rewrote them to be open-ended, and we piloted the script
            before running anything so that every interviewer asked the same
            questions in the same order.
          </p>
          <p>
            The protocol also included task-based questions rather than only
            opinion questions. We gave participants a real audit screenshot and
            asked them to tell us whether the student had completed a requirement,
            and to walk us through what each unit number meant. This was very useful 
            in determining what the unclear parts of the DARS were. 
          </p>
          <p>
            We put eleven interviews in an affinity diagram and extracted three main themes.
          </p>
          <p>
            <strong>Information clarity.</strong> The DARS had dense text, weak hierarchy, and long
            undifferentiated course lists. One participant said this:
            &ldquo;Unless I really read into it, it all looks the same.&rdquo;
          </p>
          <p>
            <strong>Progress and planning were disconnected.</strong> Students
            wanted DARS to clearly show what they had completed, what was left, and what
            to take next. While it showed clearly what classes you have taken, planning future courses 
            is harder to do.
          </p>
          <p>
            <strong>Many didn't fully trust the courses listed.</strong> Participants cross-checked
            against department websites, requirement PDFs, the class planner, and
            advisors. There are alternate courses that satisfy certain requirements that are not shown 
            on the DARS. For example, Cog Sci students can substitute three PIC classes with two CS classes,
            but this is communicated nowhere on the DARS, only on external websites. 
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
              text: "Requirements written directly from affinity clusters.",
            },
          ]}
        >
          <p>
            I wrote the requirements list. The first draft had thirteen items, and
            most of them were features based on feedback we 
            heard in our interviews. Our instructor&apos;s guidance was to stay
            under ten, weo I had to cut down the list. 
          </p>
          <p>
            We ended up with six main requirements. I cut it down by combining features
            into main themes of improvement. Some major themes included making course lists organized
            and filterable to improve clarity, including the quarter availability
            inside the audit rather than in a separate webpage, and making the &ldquo;what-if&rdquo;
            feature more visible because many participants did not know it existed.
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
            requirement. Each task aimed at targeting a specific design decision, so a
            failure would tell us which decision was wrong.
          </p>
          <p>
            Many of our added features ended up working. The hover card, which included a course description,
            unit count, quarter availability, and an add-to-planner action without leaving the
            page, was the biggest success. We also added Color-coded quarter availability, which let
            people know what classes to look for in the upcoming quarter. The completion icons also
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
          title="An unexpected finding that changed our design"
          annotations={[
            {
              type: "DECISION",
              text: "Requirement 1 rewritten between iterations: sections behind a dropdown → separate pages navigable by tabs at the top.",
            },
            {
              type: "FINDING",
              text: "Testers who had used DARS for years did not think to open a dropdown.",
            },
          ]}
        >
          <p>
            A major change we made was that we put the navigation in a dropdown menu 
            at the top of the page instead of having every section in one long page. It
            seemed clean when we designed it. In testing, however, several participants 
            did not see the dropdown menu. They were used to scrolling as soon as they entered 
            DARS, so they scrolled and found nothing, and only discovered the dropdown after exploring.
          </p>
          <p>
            One participant clearly said that it was not intuitive to click the
            dropdown, and if they were looking for their major requirements they
            would not know where to find it. They even suggested the fix themselves:
            having different tabs along the top.
          </p>
          <p>
            <mark>
              Based on the usability testing, we changed the requirement.
              Version one described sections behind a dropdown, while version 
              two specified separate pages navigable by tabs at the top of the page.
            </mark>{" "}
            We found that the added feature had the consequence of lost discoverability, which
            was one of the heuristic violations we had set out to fix in the original
            system.
          </p>
          <p>
            We also made a second change based off this session. We had put a star icon
            beside each course, and testers could not tell whether it meant
            &ldquo;favourite&rdquo; or &ldquo;add to planner.&rdquo; Instead of 
            relabeling it, we created a Favorites List page with folders, notes, 
            and a route into the class planner. One participant had even been keeping 
            exactly that list in a separate Google
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
            is a convenience sample because they were easy to recruit, and
            they were also more fluent in interface conventions than the average UCLA
            student.
          </p>
          <p>
            We also did not interview academic advisors, who run audits very often
            and could have surfaced a completely different set of problems.
            We named them as a user population in the proposal but we did not
            interview them.
          </p>
          <p>
            We never fully built the redesign. Everything here is a prototype
            tested in a moderated session, which limits you to what people
            <em> say and do</em> when presented a prototype. This could be different
            to what they actually do during their enrollment time or when planning classes.
          </p>
        </Step>
      </main>
    );
  }