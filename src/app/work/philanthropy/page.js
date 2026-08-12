import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "Promoting Philanthropy at Theta Chi — Vikram Iyer",
    description:
      "Three fundraising events, no ad budget, and what a failed one taught me about distribution.",
  };
  
  export default function Philanthropy() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="04"
          kind="Marketing & Brand"
          title="Three fundraisers, no ad budget"
          dek="I ran promotion for Theta Chi's philanthropy events through 2025. The one that failed taught me more than the two that worked."
          meta={[
            ["Role", "Philanthropy Chair (1 of 3)"],
            ["Timeframe", "Jan – Oct 2025"],
            ["Budget", "$0 paid media"],
            ["Raised", "$7,000+ across the year"],
          ]}
        />
  
        <Step
          number="01"
          title="Context"
          annotations={[
            {
              type: "METHOD",
              text: "3 events · Jan, Jun, Oct 2025 · ~90 brothers and pledges available as distribution",
            },
          ]}
        >
          <p>
            I was one of three philanthropy chairs at Theta Chi through 2025. We
            ran three fundraising events: a week-long wildfire relief campaign in
            January, a movie night in June, and a concert in October.
          </p>
          <p>
            There was no money for promotion. Every channel available to us was
            either owned — our Instagram, our chapter house — or borrowed: the
            personal accounts of about ninety brothers and pledges, physical
            campus space, and free listing platforms.
          </p>
          <p>
            I want to be specific about what was mine. I did not design the
            graphics; another chair did. What I owned was distribution — where
            things went, when, and who was responsible for getting them there —
            along with the on-site operations at each event.
          </p>
        </Step>
  
        <Step
          number="02"
          title="January: the full stack"
          annotations={[
            {
              type: "METHOD",
              text: "GoFundMe + week-long clothing drive + physical activation + night market",
            },
            {
              type: "FIGURE",
              text: "Fig. 01–03 — event flyers, January 2025",
            },
          ]}
        >
          <p>
            The Palisades fire hit in early January. We had not planned a
            philanthropy event that early in the quarter, and we put one together
            in about two weeks.
          </p>
          <p>
            It ran as a sequence rather than a single event. A GoFundMe went up
            first, pushed through everyone&apos;s stories. A clothing drive ran
            all week at the house. On Friday we set up a slip and slide on Janss
            Steps — the highest-traffic pedestrian corridor on campus — which
            collected donations and promoted the finale. Sunday was a night
            market: student vendors, live bands, food, and every piece of donated
            clothing priced and sold.
          </p>
          <p>
            I ran the resale side: pricing, the Venmo QR code, the tags, and
            staffing a checkout so people actually paid. Leftover clothing went to
            Goodwill.
          </p>
          <FigureRow>
            <Figure
              src="/tc-clothing-drive.jpg"
              alt="Flyer for the Theta Chi clothing drive, January 20–25, at 663 Gayley Ave"
              caption="Clothing drive, Jan 20–25"
              number="Fig. 01"
              wide
            />
            <Figure
              src="/tc-slip-n-slide.jpg"
              alt="Flyer for the Slip and Slide clothing drive on Janss Steps, Friday January 24"
              caption="Janss activation, Jan 24"
              number="Fig. 02"
              wide
            />
            <Figure
              src="/tc-night-market.jpg"
              alt="Flyer for the Theta Chi Night Market, Sunday January 26, $8 entry"
              caption="Night market, Jan 26"
              number="Fig. 03"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="03"
          title="June: what happens with one channel"
          annotations={[
            {
              type: "FINDING",
              text: "One Instagram graphic. Week 10. Nobody came.",
            },
          ]}
        >
          <p>
            In June we ran a movie night at the house — food, an inflatable
            screen, a showing of Superbad. We put out a single Instagram graphic
            and did nothing else.
          </p>
          <p>
            It was week 10. Everyone was studying for finals. Turnout was bad, and
            it was bad for reasons that were entirely within our control: we
            planned late, we promoted through one channel, and we picked the worst
            week of the quarter.
          </p>
        </Step>
  
        <Step
          number="04"
          title="The decision"
          annotations={[
            {
              type: "DECISION",
              text: "After June, two changes for October: move the date out of finals week, and make internal participation mandatory instead of optional.",
            },
          ]}
        >
          <p>
            <mark>
              The failure in June changed how we ran October, in two specific
              ways.
            </mark>
          </p>
          <p>
            <strong>Timing.</strong> We scheduled the concert for week 4 — early
            enough to be ahead of midterms, and nowhere near finals. In June we
            had treated the date as a scheduling detail. After June we treated it
            as the first marketing decision.
          </p>
          <p>
            <strong>Enforcement.</strong> In June, reposting was a request.
            Roughly nobody did it. For October it became a requirement: every
            brother and pledge had to repost the graphic, every pledge had to
            distribute flyers in their dorm, and pledges were expected to attend
            and bring friends. Two flyers each across about forty pledges covered
            most of the residence halls.
          </p>
        </Step>
  
        <Step
          number="05"
          title="October: the result"
          annotations={[
            {
              type: "METHOD",
              text: "Flyers (~80, dorms) + mandatory story reposts (~90 accounts) + Poppin listing",
            },
            {
              type: "FINDING",
              text: "Poppin: 321 views, 9 RSVPs. Actual attendance 200+. The only metric I could see was measuring the wrong thing.",
            },
          ]}
        >
          <p>
            Rock Out at ΘX ran on Friday, October 24 — five student bands, $5 with
            food and drink, proceeds to the Los Angeles Mission. Over 200 people
            came, the best turnout of the year.
          </p>
          <p>
            We also listed it on Poppin, an app UCLA students use to find events
            nearby. It pulled 321 views and 9 RSVPs. That gap is worth sitting
            with: the RSVP number was off by more than an order of magnitude from
            what actually happened, so the one channel I could measure was
            measuring something close to meaningless.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/tc-rock-out.jpg"
              alt="Flyer for Rock Out at Theta Chi, Friday October 24, five student bands"
              caption="Rock Out at ΘX, Oct 24"
              number="Fig. 04"
              wide
            />
            <Figure
              src="/tc-poppin.jpg"
              alt="Poppin listing for Rock Out at Theta Chi showing 321 views and 9 attendees"
              caption="Poppin: 321 views, 9 RSVPs"
              number="Fig. 05"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="06"
          title="Outcome"
          annotations={[
            {
              type: "FINDING",
              text: "GoFundMe: $5,655. Clothing resale + night market entry: $703. The link was 89% of the money.",
            },
            {
              type: "FIGURE",
              text: "Fig. 06 — chapter recap, January totals",
            },
          ]}
        >
          <p>
            January raised $6,358. The GoFundMe accounted for $5,655 of that,
            which went to the LAFD Wildfire Emergency Fund. The clothing resale
            and night market entry together brought in $703, which went to the
            American Red Cross. Sixty-one donations were collected and the chapter
            logged over 100 volunteer hours.
          </p>
          <p>
            Nearly all of the labor went into the physical events. Nearly all of
            the money came from a link. That is not an argument for cutting the
            events — the clothing drive and the slip and slide are what gave
            people a reason to care and a reason to pass the link along. But the
            events were the story, and the GoFundMe was the revenue.
          </p>
          <p>
            October drew 200+ attendees at $5 with proceeds going to the Los
            Angeles Mission. Across the year, philanthropy under our chairs
            cleared $7,000.
          </p>
          <Figure
            src="/tc-recap.jpg"
            alt="Recap graphic: $6,358 raised, $5,655 to LAFD Wildfire Emergency Fund, $703 to American Red Cross, 61 donations, 100+ volunteer hours"
            caption="January recap totals"
            number="Fig. 06"
          />
        </Step>
  
        <Step
          number="07"
          title="Limitations"
          annotations={[
            {
              type: "FINDING",
              text: "The October date fell the weekend before Halloween. Walk-in traffic was probably a bigger driver than anything I did.",
            },
          ]}
        >
          <p>
            I cannot attribute October&apos;s turnout to my channels. It ran the
            weekend before Halloween, people were already out in costume, and a
            good share of the crowd walked past the house, heard the music, and
            came in. Timing and location likely did more than distribution did.
          </p>
          <p>
            I do not have Instagram analytics for any of this, so reach and
            engagement are unmeasured. And the ninety-account repost push is
            weaker than it sounds — those accounts are one social graph with
            heavy follower overlap, so the incremental reach is far below the
            headline number.
          </p>
          <p>
            I also did not design any of the creative. What I ran was
            distribution, timing, and operations.
          </p>
        </Step>
      </main>
    );
  }