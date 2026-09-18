import {
    CaseStudyHeader,
    Step,
    Figure,
    FigureRow,
  } from "@/components/CaseStudy";
  
  export const metadata = {
    title: "What Next — Vikram Iyer",
    description:
      "Building a TV show recommender, shipping it to strangers, and constantly experimenting.",
  };
  
  function Quote({ children }) {
    return (
      <blockquote className="my-6 border-l-2 border-rule py-1 pl-5 italic text-ink-muted">
        {children}
      </blockquote>
    );
  }
  
  export default function WhatNext() {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
        <CaseStudyHeader
          number="01"
          kind="Product / Research"
          title="Building and Shipping my First Website: What Next"
          dek="Building a TV show recommender, shipping it to strangers, and constantly experimenting."
          meta={[
            ["Role", "Solo — design, build, research"],
            ["Method", "Funnel analytics, session recordings, user feedback"],
            ["Iterations", "Three versions"],
            [
              "Live",
              <a
                key="live"
                href="https://whatnextv1.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-connection underline underline-offset-4"
              >
                whatnextv1.com
              </a>,
            ],
          ]}
        />
  
        <Step
          number="01"
          title="Why I built it"
          annotations={[
            {
              type: "METHOD",
              text: "It solved a problem of mine, and I could feasibly build it",
            },
          ]}
        >
          <p>
            One problem my family and I have had has been deciding on a good TV
            show to watch together. We&apos;ll often search for close to an hour,
            going from Netflix, to Amazon Prime, to Hulu, to Apple TV, then back
            to Netflix. I wanted to create something that could drastically reduce
            this time spent searching aimlessly for our next show. That is why I
            decided to build What Next.
          </p>
          <p>
            What Next recommends shows based on specific characteristics of a
            previous show you&apos;ve watched. The idea is that if you finished
            something and want more of it, you can find shows that match on
            different dimensions of what you liked. It&apos;s different from
            scrolling Netflix because it shows you shows across all platforms, and
            the recommendations go far beyond just genre.
          </p>
          <p>
            Each recommendation is framed as &ldquo;if what you miss is X, try
            Y,&rdquo; so one show can produce several different answers depending
            on what you actually valued about it.
          </p>
        </Step>
  
        <Step
          number="02"
          title="v1 — shipping a rough draft first"
          annotations={[
            {
              type: "DECISION",
              text: "Set up PostHog funnel tracking before launch to track web flow analytics",
            },
            {
              type: "FIGURE",
              text: "Fig. 01–02 — v1 landing and results",
            },
          ]}
        >
          <p>
            I built a basic site with very little visual stimulation, basically
            just doing the bare minimum functionality. I did this to get a feel for
            how the website would work, whether it was actually functional, and
            what users thought of the overall idea, before any UX improvements.
          </p>
          <p>
            <mark>
              One thing I did do before launching was set up analytics with
              PostHog.
            </mark>{" "}
            I built a funnel to track how many users got from one step to the next:
            landing on the site, submitting a show, seeing results, and interacting
            with the profile feature. I also tracked how long the recommendations
            took to generate.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/wn-v1-home.png"
              alt="The original What Next landing page, plain text on a light background"
              caption="v1 — landing page"
              number="Fig. 01"
              wide
            />
            <Figure
              src="/wn-v1-results.png"
              alt="The original What Next results page showing text-only recommendations"
              caption="v1 — results"
              number="Fig. 02"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="03"
          title="First users"
          annotations={[
            {
              type: "METHOD",
              text: "Posted across multiple subreddits to get strangers rather than friends, who would have explored the whole site out of politeness",
            },
            {
              type: "FINDING",
              text: "300 landed · 138 submitted a show (46%) · 129 saw results · 9 clicked the profile prompt · 5 completed it",
            },
            {
              type: "FINDING",
              text: "Median 9.9 seconds to generate results, with no loading indicator",
            },
          ]}
        >
          <p>
            I posted it on multiple subreddits, hoping to get a random sample of
            people using the site, not just my friends, which would skew the
            numbers a bit because they would deliberately interact with the whole
            site.
          </p>
          <Figure
            src="/wn-funnel.png"
            alt="PostHog funnel showing 300 visitors, 138 show submissions, 129 results views, 9 profile clicks, and 5 profile completions"
            caption="The v1 funnel"
            number="Fig. 03"
          />
          <p>
            The initial engagement numbers were encouraging. 300 people visited the
            site, and 138 of them submitted a show — around 46%. But the funnel
            also showed two problems I hadn&apos;t anticipated.
          </p>
          <p>
            The first was that more than half of the people who landed never
            submitted anything at all. A reason for this may have been the
            underwhelming UI, as noted by multiple brutally honest redditors:
          </p>
          <Quote>
            &ldquo;Love this idea but the design is very very underwhelming&rdquo;
          </Quote>
          <Quote>&ldquo;Design looks like 90&apos;s website&rdquo;</Quote>
          <p>
            The second was the profile feature. I had built an option to add up to
            5 shows and generate a viewer profile, and out of 129 people who saw
            their recommendations, only 9 clicked on it. Five of those actually
            completed it.
          </p>
          <p>
            There was also a performance issue. The site took a median of 9.9
            seconds to generate results, and there was no loading animation, which
            meant users had no signal that anything was happening. One redditor
            caught this issue directly:
          </p>
          <Quote>
            &ldquo;the site took a minute to load the recs and I almost bounced,
            might want to throw a little loading animation in there&rdquo;
          </Quote>
          <p>
            I also got real questions about how this website differed from
            recommendations from streaming services like Netflix, which made me
            consider ways to signify on the website that it includes recs from
            every streaming service.
          </p>
          <p>
            Not all of the feedback I received was criticism. One piece of feedback
            made me confident in the core idea:
          </p>
          <Quote>
            &ldquo;Just threw in The Bear and it suggested Sweetbitter which is a
            deep cut but weirdly makes sense&rdquo;
          </Quote>
          <p>
            A major goal I had was to make the recommendations unique, not just
            limited to shows of the same genre, so I was glad that it was
            recommending shows differently from most streaming services.
          </p>
          <p>
            Overall, it felt great seeing the dashboard of all the people using my
            website from all over the world, and the feedback I got was truly
            helpful in informing my next steps.
          </p>
        </Step>
  
        <Step
          number="04"
          title="v2 — what I changed and why"
          annotations={[
            {
              type: "METHOD",
              text: "Session recordings, to work out why the funnel number was low",
            },
            {
              type: "FIGURE",
              text: "Fig. 04–05 — Figma prototype for the v2 redesign",
            },
            {
              type: "DECISION",
              text: "People declined the profile at two separate points, so I deleted the ask instead of moving the button",
            },
          ]}
        >
          <p>
            For v2, I first made sure to add a loading state, which was a fairly
            minor and easy fix. The underlying 9.9 second wait was still there, but
            a loading indicator was easy to add and I wanted to see how a perceived
            wait could prevent people from bouncing.
          </p>
          <p>
            I also made a prototype on Figma to build off of. I used a darker color
            theme, included posters of the shows for more visual stimulation,
            included the streaming platforms the shows were on, and included an
            option to regenerate a result if the user had already viewed a show.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/What-next-figma.png"
              alt="Figma prototype frames for the What Next redesign"
              caption="Figma prototype — v2 direction"
              number="Fig. 04"
              wide
            />
            <Figure
              src="/What-next-figma2.png"
              alt="Further Figma prototype frames for the What Next redesign"
              caption="Figma prototype — description expanded"
              number="Fig. 05"
              wide
            />
          </FigureRow>
          <p>
            The streaming platform labels were a direct response to the &ldquo;how
            is this different from Netflix&rdquo; question. Netflix can only
            recommend shows on Netflix, so showing where each recommendation was
            available made the cross-platform part of the product more visible.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/wn-v2-home.png"
              alt="Redesigned What Next landing page with a dark theme"
              caption="v2 — landing page"
              number="Fig. 06"
              wide
            />
            <Figure
              src="/wn-v2-results.png"
              alt="Redesigned results page with show posters and streaming platform labels"
              caption="v2 — results with posters and platforms"
              number="Fig. 07"
              wide
            />
          </FigureRow>
          <p>
            The bigger change I made was to the profile. The funnel told me almost
            nobody was using it, but it didn&apos;t tell me why. I went through the
            session recordings and found people were declining it at two separate
            points. Some saw the prompt and never clicked it, and some clicked it,
            saw that they had to type in five more shows, and stopped there.
          </p>
          <p>
            <mark>
              That told me it wasn&apos;t necessarily a problem with placement.
              People had already gotten what they had used the website for, so they
              left.
            </mark>{" "}
            So I changed the requirement. Instead of asking for five shows up
            front, the site now automatically generates a light profile based on
            the show you already submitted, and you can optionally add up to five
            more for a fuller read.
          </p>
          <Figure
            src="/wn-v2-profile.png"
            alt="Automatically generated viewer profile based on a single submitted show"
            caption="The profile, now generated automatically"
            number="Fig. 08"
          />
        </Step>
  
        <Step
          number="05"
          title="v2 results — the part I got wrong"
          annotations={[
            {
              type: "FINDING",
              text: "Submit rate fell from 46% to around 40%. 45 submitted, 43 saw results: only 2 bounced during the wait.",
            },
            {
              type: "FINDING",
              text: "Around 11% of people who saw results viewed the profile. Recordings showed mobile users simply weren't scrolling that far.",
            },
          ]}
        >
          <p>
            After shipping the changes and getting over 100 users, the submit rate
            actually went down to around 40%, from around 46% before.
          </p>
          <p>
            Obviously the sample size isn&apos;t very big, so this could very well
            be due to chance, but it was a surprising find for me because I
            expected the changes to measurably increase the submission rate.
            It&apos;s also worth noting that my traffic sources changed between
            versions. I was posting in different subreddits each time, so
            &ldquo;the changes didn&apos;t help&rdquo; and &ldquo;different people
            showed up&rdquo; are both plausible explanations and I can&apos;t
            separate them with the data I have.
          </p>
          <p>
            One good change is that out of the 45 people that submitted a show, 43
            saw the results, which meant only 2 people bounced from the site before
            they could see their results. I believe that this was at least partly
            due to the addition of the loading animation.
          </p>
          <p>
            Another interesting metric is that only around 11% of people who saw
            results viewed the initial profile it generated. At first, I was a bit
            confused as to why this was, because all of the results sit on one
            page. Looking at the recordings, I saw that many users were on mobile,
            and they simply didn&apos;t scroll down far enough to see the light
            profile.
          </p>
          <p>
            Of the few people that did see the profile, only 1 person actually
            added more shows to generate a fuller profile.
          </p>
          <p>
            I realized that this wasn&apos;t a huge problem, because I had marketed
            the website as a TV show generator, not a profile generator, so many of
            the users on there had simply already achieved what they wanted to.
            They came to find a show, they found one, and they left.
          </p>
        </Step>
  
        <Step
          number="06"
          title="v3 — UX feedback"
          annotations={[
            {
              type: "METHOD",
              text: "Posted to UX and web design subreddits specifically to get design critique.",
            },
          ]}
        >
          <p>
            For my final iteration, I wanted to make the UX more pleasing, so I put
            the website in a few UX and web design subreddits to see if I could get
            helpful feedback.
          </p>
          <p>
            Some consistent feedback I got was that the typography of the page was
            a bit hard to read, and that I was using too many fonts. I decided to
            change the italicized text on the cards to the same sans serif font as
            the &ldquo;if what you miss&rdquo; text.
          </p>
          <p>
            I also added more color to the sides of the cards and show names after
            getting feedback that there wasn&apos;t much color on the page. I made
            the cards wider, because there was a lot of empty space on the sides of
            the screen in v2. Due to two specific suggestions, I added the IMDb
            ratings with the shows. Finally, I made the transitions between the
            pages and the loading states smoother and made the shows fade in after
            being suggested rather than appearing in suddenly.
          </p>
          <Figure
            src="/wn-v3-results.png"
            alt="Final results page with wider cards, IMDb ratings, and consistent typography"
            caption="v3 — results"
            number="Fig. 09"
          />
        </Step>
  
        <Step
          number="07"
          title="The example output, which ended up backfiring"
          annotations={[
            {
              type: "FINDING",
              text: "Submit rate dropped to the mid 30s. People may have read the labelled example as their actual result and didn't enter anything",
            },
            {
              type: "DECISION",
              text: "Removed the example and added a bigger submit button below the textbox. Submit rate returned to around 45%",
            },
          ]}
        >
          <p>
            I also wanted to try and get the rate of people submitting shows
            higher, so I decided to add an example output of a show on the
            homescreen, thinking that it would give users an idea of what to expect
            when they input a show, making more people submit.
          </p>
          <p>To my surprise, the rate of submissions went down to mid 30%.</p>
          <p>
            I figured that the example output was what many people thought was the
            actual show recommendation, so they never inputted anything. I had
            labeled it &ldquo;EXAMPLE — NOT A REAL RESULT&rdquo; and given it its
            own container, and people were still reading it as the answer.
          </p>
          <p>
            <mark>
              I decided to take the example output out entirely, and add a bigger
              submission button below the textbox, and the submission rate returned
              to around 45%.
            </mark>
          </p>
          <p>
            I figured that since I had posted the website on many UX subreddits,
            maybe the users were judging the design of the site from the homepage
            itself. Another possible reason is that many people simply click links
            and if the homepage doesn&apos;t immediately interest them, they click
            off.
          </p>
          <FigureRow cols={2}>
            <Figure
              src="/wn-v3-home-example.png"
              alt="Landing page showing an example recommendation labelled as not a real result"
              caption="With the example, submissions fell to the mid 30s"
              number="Fig. 10"
              wide
            />
            <Figure
              src="/wn-final-home.png"
              alt="Final landing page with the example removed and a larger submit button"
              caption="Example removed, submissions back to ~45%"
              number="Fig. 11"
              wide
            />
          </FigureRow>
        </Step>
  
        <Step
          number="08"
          title="What I learned, and what I'd build next"
          annotations={[
            {
              type: "FINDING",
              text: "Both assumptions I was confident about ended up being false",
            },
          ]}
        >
          <p>
            What I learned from this whole experience is the importance of testing
            your hypotheses. I made a couple wrong assumptions in this process, and
            if I had never tested out the features I added and analyzed the data, I
            would have a less effective product. I learned to be open to surprises,
            and to back up my product decisions with data.
          </p>
          <p>
            The two assumptions I was most confident about were both wrong. I
            thought the profile feature would be something people enjoyed, and it
            turned out to be something they ignored. I thought showing an example
            on the homepage would make more people submit a show, and it made
            fewer.
          </p>
          <p>
            One thing I would want to build next comes from a suggestion I
            received: a feature that lets you pick what streaming services you
            currently have, and filters results so they&apos;re available on your
            services. This would provide more relevant shows and reduce friction
            from having to regenerate responses when you can&apos;t watch a show.
          </p>
          <p>
            I&apos;d keep it optional rather than making it the default, since
            showing results across every platform is part of what makes this
            different from a streaming service&apos;s own recommendations. But if
            you have several services, an optional filter would still surface more
            shows users can actually watch.
          </p>
        </Step>
  
        <Step
          number="09"
          title="Limitations"
          annotations={[
            {
              type: "FINDING",
              text: "~300 users on v1, 100+ on v2, ~70 on v3 — and different subreddits each time.",
            },
          ]}
        >
          <p>
            Most of the users came from Reddit users who willingly clicked on the
            site, and many of them gave feedback because I requested it, so the
            engagement numbers might be slightly inflated.
          </p>
          <p>
            My sample sizes were also small and got smaller across versions. I had
            around 300 visitors on v1, over 100 on v2, and around 70 on v3, and the
            traffic came from different subreddits each time. So when a number
            moved between versions, I can&apos;t separate whether my changes caused
            it or whether a different kind of user showed up.
          </p>
          <p>
            None of this was a controlled experiment either. Different users saw
            different versions at different times, and I usually shipped several
            changes at once, so I can&apos;t attribute any single outcome to any
            single change.
          </p>
          <p>
            I also was only able to observe user behavior through the session
            recordings, so I could only assume what motivated some user behaviors.
          </p>
        </Step>
      </main>
    );
  }