import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "Sawubona usability walkthrough — Vikram Iyer",
    description:
      "A heuristic evaluation of a partner company's mobile app, a competitive teardown of Nexudus, and the prototype that came out of both.",
  };
  
  export default function Sawubona() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="02"
          kind="UX Research / Product Strategy"
          title="It asked me to set a primary community, then let me pick three"
          dek="A full walkthrough of a partner company's app, a teardown of the category leader, and a prototype built from both."
          meta={[
            ["Role", "Product & Marketing Intern"],
            ["Method", "Heuristic evaluation, competitive analysis"],
            ["Framework", "Nielsen's 10 usability heuristics"],
            ["Output", "Findings log + Figma prototype"],
          ]}
        />
  
        <Step
          number="01"
          title="Context"
          annotations={[
            {
              type: "METHOD",
              text: "Full walkthrough of every flow from signup to community access, logged against Nielsen's 10 heuristics.",
            },
          ]}
        >
          <p>
            Sawubona is a partner company of Grad Pad, running a mobile app for
            alumni and professional communities. I was asked to evaluate it.
          </p>
          <p>
            I went through the app the way a new user would — signing up, creating
            an account, connecting a profile, joining communities, following an
            invite link — and logged every point where the interface got in my
            way, tagging each against Nielsen&apos;s usability heuristics.
          </p>
          <p>
            This was an expert evaluation, not a study. One evaluator, no
            participants. That matters for how much weight the findings carry,
            and I come back to it at the end.
          </p>
        </Step>
  
        <Step
          number="02"
          title="What the walkthrough found"
          annotations={[
            {
              type: "FINDING",
              text: "Primary community selection: label says one, interface allows many, no way to deselect, no back button, and an unexplained blue box alongside the checkmarks.",
            },
            {
              type: "FINDING",
              text: "Account creation, Google sign-in, and LinkedIn sign-in each failed with no usable error message.",
            },
          ]}
        >
          <p>
            The clearest finding was the community selection screen. It asks you
            to set your <em>primary</em> community, so I selected one. Then I
            selected another to see what would happen, and it took that one too.
            There was no way to deselect either, no back button to revisit my
            profile, and a blue box appeared alongside the checkmarks with nothing
            to explain what distinguished them.
          </p>
          <p>
            That single screen breaks three heuristics at once: user control and
            freedom, because nothing is reversible; error prevention, because the
            label and the behavior contradict each other; and visibility of system
            status, because two different selection indicators appear with no
            stated meaning.
          </p>
          <p>
            Elsewhere, account creation silently failed with no message at all.
            Google and LinkedIn sign-in both failed — LinkedIn returned an error
            that explained neither the cause nor the fix. An invite link opened
            while logged out threw a server error and broke the site. A profile
            field asked for an Instagram URL rather than a handle, which is not
            the form the information takes in the world the user lives in.
          </p>
          <p>
            Not everything was broken, and it was worth logging that too. The
            password strength indicator was genuinely good. Several error messages
            elsewhere in the flow were clear and specific — the problem was
            inconsistency, not a total absence of care.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/sw-community.png"
              alt="Community screen in the Sawubona app showing channels, events, posts, and dashboard entry points"
              caption="Community screen — the flow the walkthrough covered"
              number="Fig. 01"
              wide
            />
            <Figure
              src="/sw-nexudus-availability.png"
              alt="Nexudus availability dashboard showing hourly capacity bars for a coworking location"
              caption="Nexudus — availability reporting"
              number="Fig. 02"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="03"
          title="Splitting findings from design work"
          annotations={[
            {
              type: "DECISION",
              text: "Auth failures and the crashing invite link went to engineering as defects. Only the findings that were actually design problems went into the prototype.",
            },
          ]}
        >
          <p>
            <mark>
              Most of what the walkthrough found was not a design problem.
            </mark>{" "}
            Broken Google sign-in is a bug. A crashing invite link is a bug. No
            amount of redesign fixes either, so those went to the engineering team
            as defects rather than into a Figma file.
          </p>
          <p>
            What was left were genuine interface problems — unclear state,
            irreversible actions, missing explanation — and those informed how I
            approached the screens I did design.
          </p>
        </Step>
  
        <Step
          number="04"
          title="Competitive analysis: Nexudus"
          annotations={[
            {
              type: "METHOD",
              text: "Teardown of Nexudus, an established coworking and community management platform, focused on features absent from Sawubona.",
            },
          ]}
        >
          <p>
            Alongside the walkthrough I ran a competitive analysis of Nexudus, a
            mature platform in the adjacent coworking and community management
            space. The question was what an established product in the category
            gives operators that Sawubona did not.
          </p>
          <p>
            The gap was analytics. Nexudus gives operators availability reporting,
            revenue tracking by line item, active contract trends, and
            activity-level reporting on how spaces actually get used. Sawubona had
            community features but no equivalent view for the people running a
            community.
          </p>
          <Figure
            src="/sw-nexudus-finances.png"
            alt="Nexudus finance charts showing active contracts over time and monthly revenue"
            caption="Nexudus — contract and revenue reporting"
            number="Fig. 03"
          />
        </Step>
  
        <Step
          number="05"
          title="The prototype"
          annotations={[
            {
              type: "DECISION",
              text: "Presented the Nexudus findings to the founder and was greenlit to prototype an analytics layer for the Sawubona app.",
            },
            {
              type: "FIGURE",
              text: "Fig. 04–08 — dashboard, analytics overview, reports, trends, admin",
            },
          ]}
        >
          <p>
            I presented the competitive analysis to the founder and got approval
            to build a prototype adding an analytics layer to the app.
          </p>
          <p>
            The structure separates the operator&apos;s two jobs. A Professional
            Dashboard covers day-to-day management — memberships, bookings,
            finances, CRM. An Advanced Analytics section covers looking backward
            and forward: Reports for what has happened, Trends for revenue over
            time, and a Community Growth Forecast.
          </p>
          <p>
            The usability findings shaped how these screens are built. Every entry
            point states what it contains rather than relying on a label alone.
            Every screen has an explicit back affordance. Nothing puts the user in
            a state they cannot reverse — the specific failure that made the
            community selection screen so frustrating to use.
          </p>
          <FigureRow>
            <Figure
              src="/sw-dashboard.png"
              alt="Professional Dashboard screen with memberships, bookings, finances, and CRM sections"
              caption="Professional Dashboard"
              number="Fig. 04"
              wide
            />
            <Figure
              src="/sw-analytics.png"
              alt="Advanced Analytics overview with reports, trends, and community growth forecast"
              caption="Analytics overview"
              number="Fig. 05"
              wide
            />
            <Figure
              src="/sw-admin.png"
              alt="Admin dashboard showing reservations, spaces, members, revenue, and recent activity"
              caption="Admin dashboard"
              number="Fig. 06"
              wide
            />
          </FigureRow>
          <FigureRow cols={2}>
            <Figure
              src="/sw-reports.png"
              alt="Reports screen showing peak hours by room as bar charts"
              caption="Reports — peak hours by space"
              number="Fig. 07"
              wide
            />
            <Figure
            src="/sw-trends.png"
            alt="Trends screen showing revenue over time by membership, bookings, and individual spaces"
            caption="Trends — revenue by line item"
            number="Fig. 08"
            width={860}
            height={2840}
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
              text: "One evaluator, no participants. A heuristic evaluation predicts problems; it does not observe them.",
            },
          ]}
        >
          <p>
            This was a heuristic evaluation, not a usability study. I was the only
            evaluator and no real users were observed. Expert evaluation is good
            at surfacing candidate problems quickly and cheaply, and it is not a
            substitute for watching people fail at something. Multiple independent
            evaluators would have caught more, and testing the community selection
            screen with even five participants would have told us how much the
            confusion actually cost.
          </p>
          <p>
            The prototype was also not tested. It applies principles drawn from
            the walkthrough and features drawn from a competitor, but no one has
            confirmed the analytics layer answers questions Sawubona operators
            actually have — that would need interviews with the people running
            these communities.
          </p>
        </Step>
      </main>
    );
  }