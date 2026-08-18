import {
  CaseStudyHeader,
  Step,
  Figure,
  FigureRow,
} from "@/components/CaseStudy";

export const metadata = {
  title: "Grad Pad app — heuristic evaluation and white-label variant — Vikram Iyer",
  description:
    "A walkthrough of a live community app, a teardown of a coworking platform, and a partner variant built from both.",
};

export default function GradPadApp() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
      <CaseStudyHeader
        number="02"
        kind="UX Research / Product Strategy"
        title="Usability Testing and Subsequent Improvements"
        dek="I walked through Grad Pad's app the way a new user would, noting usability heuristic violations."
        meta={[
          ["Role", "Product & Marketing Intern"],
          ["Timeframe", "Dec 2025 – Mar 2026"],
          ["Method", "Heuristic evaluation, competitive analysis"],
          ["Output", "Findings log + Figma prototype"],
        ]}
      />

      <Step
        number="01"
        title="Context"
        annotations={[
          {
            type: "METHOD",
            text: "Full walkthrough of the live app experience, signup through community access, logged against Nielsen's 10 usability heuristics.",
          },
        ]}
      >
        <p>
          Alongside the website work, I was asked to evaluate Grad Pad&apos;s
          mobile app, which was the product itself.
        </p>
        <p>
          I went through it the way a new user would: I created an account,
          connected my social media profiles, joined a community, and followed an invite link.
          Every point where the flow broke down went into my notes, compared
          against Nielsen&apos;s usability heuristics.
        </p>
      </Step>

      <Step
        number="02"
        title="What the walkthrough found"
        annotations={[
          {
            type: "FINDING",
            text: "Primary community selection: interface allows multiple, no way to deselect, no back button, and an unexplained blue box alongside the checkmarks.",
          },
          {
            type: "FINDING",
            text: "Account creation, Google sign-in, and LinkedIn sign-in each failed with no usable error message.",
          },
        ]}
      >
        <p>
          The community selection screen in the beginning of the flow presented a violation 
          of multiple usability heuristics. It asks you to set your <em>primary</em> community, 
          so I picked one. There appeared to be a multi-select option, though, because 
          I could select other communities as well. When I tried to deselect the other communities, 
          I couldn't, and there was no back button to revisit my profile. 
          There was also a blue box alongside the checkmarks with nothing
          explaining what they meant.
        </p>
        <p>
          That screen breaks three heuristics: user control and
          freedom, because nothing was reversible; error prevention, because the
          label and the multi-select contradicted each other; and visibility of
          system status, because two selection indicators appeared with no
          stated meaning.
        </p>
        <p>
          There were also problems with the sign-in process. The Google and LinkedIn
          sign-ins both failed, with LinkedIn displaying an error that did not explain any fix. 
          When I opened an invite link while I was logged out of the app, it also took me to an error page. 
          Additionally, when trying to connect an Instagram account to my profile, it asked for the profile 
          url rather than the handle, which is less convenient for users.
        </p>
        <p>
          There were also positive features of the app. The password
          strength indicator was a good additions, and several error messages elsewhere were
          clear and specific.
        </p>
        <Figure
          src="/sw-community.png"
          alt="Community screen in the Grad Pad app showing channels, events, posts, and dashboard entry points"
          caption="Community screen — the flow the walkthrough covered"
          number="Fig. 01"
        />
      </Step>

      <Step
        number="03"
        title="Defects, not design problems"
        annotations={[
          {
            type: "DECISION",
            text: "Auth failures and the crashing invite link went to engineering as defects and didn't go into the design process.",
          },
        ]}
      >
        <p>
          <mark>
            Most of what the walkthrough found was not a design problem.
          </mark>{" "}
          The broken sign-in methods and invite link were all bugs, and they were brought up with 
          the development team as defects rather than design problems, and they have since been fixed.
        </p>
        <p>
          What I had to improve was the design interface which included unclear states,
          irreversible actions, and missing explanation. Nielsen-Norman's heuristics shaped how I
          approached the screens I went on to design.
        </p>
      </Step>

      <Step
        number="04"
        title="Building special screens for a partner company"
        annotations={[
          {
            type: "FINDING",
            text: "Sawubona is a physical co-working space. The app was built for alumni communities, so it didn't have extensive options for someone managing rooms, bookings, and space revenue.",
          },
        ]}
      >
        <p>
          Grad Pad was building a partnership with Sawubona, a
          co-working space in Venice. It was made so a Sawubona account
          would get its own version of the Grad Pad app.
        </p>
        <p>
          Sawubona has a slightly different job than alumni communities, though. 
          They need to know which rooms are booked, when the space
          is busy, and what each room earns, which were not features in the Grad Pad community channel.
        </p>
      </Step>

      <Step
        number="05"
        title="Competitive analysis: Nexudus"
        annotations={[
          {
            type: "METHOD",
            text: "Thorough analysis of Nexudus, an established coworking and space management platform, focused on the features Grad Pad's app lacked.",
          },
        ]}
      >
        <p>
          Nexudus is the leading platform built for coworking and space management, which is what Sawubona is built around. 
          I went through a demo to see what kinds of features they provide to an operator.
        </p>
        <p>
          The biggest gap I noted was the analytics and space management features. Nexudus gives operators
          availability reporting by location and hour, revenue tracking by line
          item, active contract trends, and usage reporting across spaces.
        </p>
        <FigureRow cols={2}>
          <Figure
            src="/sw-nexudus-availability.png"
            alt="Nexudus availability dashboard showing hourly capacity bars for a coworking location"
            caption="Nexudus — availability by hour"
            number="Fig. 02"
            wide
          />
          <Figure
            src="/sw-nexudus-finances.png"
            alt="Nexudus finance charts showing active contracts over time and monthly revenue"
            caption="Nexudus — contracts and revenue"
            number="Fig. 03"
            wide
          />
        </FigureRow>
      </Step>

      <Step
        number="06"
        title="The prototype"
        annotations={[
          {
            type: "DECISION",
            text: "Presented the Nexudus findings to the founder and was instructed to prototype the operator layer for the Sawubona variant.",
          },
          {
            type: "FIGURE",
            text: "Fig. 04–08 — dashboard, analytics overview, admin, reports, trends",
          },
        ]}
      >
        <p>
          I presented the competitive analysis to the founder and got approval to
          prototype an operator layer for the Sawubona version of the app.
        </p>
        <p>
          The structure splits an operator&apos;s two jobs. I created a Professional
          Dashboard to handle the day-to-day tasks like memberships, bookings, finances,
          CRM. I made an Advanced Analytics section that handles looking backward and
          forward: It included reports for peak hours by room, Trends for revenue by line
          item, and a Community Growth Forecast.
        </p>
        <p>
          The walkthrough findings heavily influenced how I designed the screens. I made sure every
          section clearly states what it contains and every screen has an explicit back affordance. 
          There are no actions that put the 
          user in a state they cannot reverse, which was a big problem I noted in the existing community screen.
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
        number="07"
        title="Limitations"
        annotations={[
          {
            type: "FINDING",
            text: "Only one evaluator and no participants.",
          },
        ]}
      >
        <p>
          This was more of a heuristic evaluation and usability test with myself, not with 
          any other participants. I was the only
          evaluator and no real users were observed. Multiple independent evaluators might
          have caught more issures, and testing the community selection screen with participants 
          could have told us what the confusion actually cost them.
        </p>
      </Step>
    </main>
  );
}