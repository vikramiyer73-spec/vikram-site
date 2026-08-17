import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "Promoting Philanthropy at Theta Chi — Vikram Iyer",
    description:
      "A year of philanthropy events at Theta Chi and what I learned from them.",
  };
  
  export default function Philanthropy() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="04"
          kind="Marketing & Brand"
          title="Three fundraisers, no ad budget"
          dek="I ran promotion for Theta Chi's philanthropy events through 2025, learning a lot from each one."
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
              text: "3 events · Jan, Jun, Oct 2025 · ~90 brothers available as distribution",
            },
          ]}
        >
          <p>
            I was a philanthropy chair at Theta Chi through 2025. We
            ran three fundraising events: a week-long wildfire relief campaign in
            January, a movie night in June, and a concert in October.
          </p>
          <p>
            For promotion, we didn't utilize any paid channels. We instead used our Instagram, 
            our chapter house, the personal accounts of about ninety brothers, physical
            campus space, and free listing platforms.
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
            In early January, the devastating Palisades fire struck and affected our classmates, friends,
            professors, and our community in general. During our week of virtual classes due to the fires,
            we planned a campaign to raise money for wildfire relief. We knew how pressing and close-to-home
            this issue was, and we were determined to make any difference we could.
          </p>
          <p>
            We planned a sequence of events rather than a single one. We first set up a GoFundMe and
            required that all of the brothers post it on their stories to reach as many people as possible.
            We also ran a clothing drive all week at the house. On Friday, we set up a slip and slide at Janss
            Steps, which is a very high-traffic area in the heart of campus, where we 
            collected more clothing donations and promoted our big event that weekend. On Sunday, we hosted a night
            market with student vendors, live bands, food, and all of the clothes we had received put on display and sold.
          </p>
          <p>
            On the day of the event, I personally ran the sales of the clothes. I priced them, printed out the Venmo QR code, the tags, 
            and I made sure we had people at checkout so people actually paid. I donated all of the unsold items to Goodwill.
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
            In June we ran a movie night at the house. We had food, a huge inflatable
            screen, and we were playing Superbad. The problem was that we had waited too late to 
            host the event and didn't do enough promotion.
          </p>
          <p>
            Because of our fraternity's packed social calendar, the only open slot for our event was 
            during week 10. We also didn't run nearly enough promotion as we should have, with only one 
            Instagram graphic being posted on the frat story and limited brotherhood promotion and participation.
            The turnout was expectedly not great. Most people were studying for finals, or they just didn't hear 
            about our event, and we didn't end up raising any money. While it was a tough result, I learned a lot 
            from this experience and applied those lessons to the next event.
          </p>
        </Step>
  
        <Step
          number="04"
          title="The decision"
          annotations={[
            {
              type: "DECISION",
              text: "After June, we made two changes for October: move the date out of finals week, and make brotherhood participation mandatory.",
            },
          ]}
        >
          <p>
            <mark>
              The failure in June changed how we ran our event in October in two specific
              ways.
            </mark>
          </p>
          <p>
            <strong>Timing.</strong> We scheduled the concert for week 4. This was early
            enough to be before the bulk of midterm season while obviously far away from week 10.
          </p>
          <p>
            <strong>Enforcement.</strong> In June, we didn't strictly enforce every brother to repost the event 
            flyer on their Instagram stories. In October, we made sure to emphasize that brotherhood promotion was 
            essential to the event going well, and in turn, for us to raise more money for philanthropy. We made sure 
            every brother reposted the graphic and attended the event with their friends. We also provided our 40 pledges with flyers to 
            place around their dorm buildings. 
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
              text: "Poppin: 322 views",
            },
          ]}
        >
          <p>
            Our concert, Rock Out at ΘX ran on Friday, October 24. We featured five student bands, 
            a grill with burgers and hot dogs, and drinks. All of the proceeds went to the Los Angeles Mission, an 
            organization fighting homelessness in LA. Over 200 people
            attended, which was the best turnout of the year.
          </p>
          <p>
            We also listed it on Poppin, an app many UCLA students use to find events
            nearby, and it got 322 views. It's also worth noting that we held the event on the 
            weekend before Halloween, so there were a lot of Halloween parties going on that night, 
            which we also saw listed on Poppin. On the night of the concert, we had a lot of people in 
            Halloween costumes walking by the house and deciding to come in after hearing the live music. 
            This showed me how important timing can be when planning live events.
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
              alt="Poppin listing for Rock Out at Theta Chi showing 322 views"
              caption="Poppin: 322 views"
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
              text: "GoFundMe: $5,655. Clothing resale + night market entry: $703.",
            },
            {
              type: "FIGURE",
              text: "Fig. 06 — chapter recap, January totals",
            },
          ]}
        >
          <p>
            The Wildfire Relief Week in January raised $6,358. The GoFundMe accounted for $5,655 of that,
            which went to the LAFD Wildfire Emergency Fund. The clothing resale
            and night market entry together brought in $703, which went to the
            American Red Cross. Sixty-one donations were collected and the chapter
            logged over 100 volunteer hours.
          </p>
          <p>
            Our concert in October drew 200+ attendees at $5 for a ticket with proceeds going to the Los
            Angeles Mission. Across the year, philanthropy 
            raised over $7,000.
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
              text: "Outside of the Poppin analytics, I did not collect any metrics from Instagram.",
            },
          ]}
        >
          <p>
            I did not collect any Instagram analytics for any of this, so reach and
            engagement are unmeasured. And since many of the brothers have similar social 
            followings, a lot of the outreach reached overlapping accounts.
          </p>
        </Step>
      </main>
    );
  }