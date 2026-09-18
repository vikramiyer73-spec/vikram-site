import { CaseStudyHeader, Step } from "@/components/CaseStudy";

export const metadata = {
  title: "Rebuilding an executive KPI sheet — Vikram Iyer",
  description:
    "Reproducing a monthly executive KPI sheet from its source data to find out whether it was right.",
};

export default function KpiAudit() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
      <CaseStudyHeader
        number="02"
        kind="Product"
        title="Rebuilding an Executive KPI Sheet to Find Out If It Was Right"
        dek="Reproducing a monthly executive KPI sheet from its source data, and what turned up once I could actually check it."
        meta={[
          ["Role", "Solo build"],
          ["Client", "A multi-entity foodservice company"],
          ["Scope", "11 KPIs from a 51-tab workbook"],
          ["Built in", "One working day"],
        ]}
      />

      <Step
        number="01"
        title="The task"
        annotations={[
          {
            type: "FINDING",
            text: "9 of the 22 value cells were typed in by hand with no source behind them",
          },
        ]}
      >
        <p>
          I was asked to reproduce an executive KPI sheet programmatically. Every
          month, finance at a multi-entity foodservice company puts together a
          51-tab workbook, and one tab is the one executives actually read. It
          has eleven operating KPIs, each with a year-to-date actual against
          budget, a percentage, and a red, yellow or green status box.
        </p>
        <p>
          Automation wasn&apos;t really the point, because eleven numbers
          isn&apos;t a lot of work to put together. The problem was that nobody
          could prove the sheet was right. A spreadsheet that gets rolled forward
          every month for years picks up things like formula ranges that
          drifted, references that never got updated, and values that were pasted
          over what used to be a live link. None of that is visible when you look
          at it. The only way to find out is to rebuild the sheet from its inputs
          and see whether the two agree.
        </p>
      </Step>

      <Step
        number="02"
        title="What I built"
        annotations={[
          {
            type: "DECISION",
            text: "Kept ground truth in separate staging tables, away from anything the pipeline computes from",
          },
        ]}
      >
        <p>
          I built a Python and SQLite pipeline that pulls the workbook apart into
          a star schema, recomputes the eleven KPIs from the source data, and
          checks its version against what Excel itself had stored. It also traces
          every number back to the exact cell it came from, and I put all of it
          behind a small web app so you can actually look at it.
        </p>
        <p>
          <mark>
            One decision I made early was to keep the ground truth in its own
            staging tables, away from anything the pipeline computes from.
          </mark>{" "}
          If the computation was reading from the same place it was being
          compared against, verification could never fail, and the whole thing
          would be pointless.
        </p>
      </Step>

      <Step
        number="03"
        title="Verification, and the honest count"
        annotations={[
          {
            type: "METHOD",
            text: "44 cells compared: 11 actuals, 11 budgets, 11 percentages, 11 status colors",
          },
          {
            type: "DECISION",
            text: "Reported 13 of 22 independently recomputed instead of 44 of 44 verified",
          },
        ]}
      >
        <p>
          I wrote the verification harness before I wrote the thing it verifies,
          which forced me to define what correct actually meant before writing
          the code that was supposed to produce it. On one side is my recomputed
          value, and on the other is whatever Excel had cached.
        </p>
        <p>
          The brief asked for 100% verification, and I could have reported 44 of
          44 verified, which would have been technically true. But nine of the
          twenty-two value cells are just hardcoded numbers with nothing upstream
          of them. There is nothing to recompute them from, so they pass through
          and get compared against themselves, which means they can&apos;t fail.
        </p>
        <p>
          <mark>
            So I reported it as 13 of 22 independently recomputed, and 9 of 22
            pass-through and not independently verifiable.
          </mark>{" "}
          It sounds worse and it&apos;s a stronger claim, and it lets the report
          point at exactly which cells couldn&apos;t be verified and why.
        </p>
        <p>
          I also wanted to be sure the harness could actually fail, because one
          that has never printed a failure hasn&apos;t really been tested. So I
          corrupted a value on purpose and re-ran it to confirm the error showed
          up where it should have.
        </p>
      </Step>

      <Step
        number="04"
        title="What I found"
        annotations={[
          {
            type: "FINDING",
            text: "5 defects. All of them produce a number that looks completely fine.",
          },
        ]}
      >
        <p>
          Five defects, and the one I liked most was on the headline
          profitability metric. The adjusted profitability line was summing a
          range that happened to include a percentage sitting in among the dollar
          figures. The error came out to a few cents on several million, which is
          exactly why nobody had ever caught it. But it&apos;s a ratio inside a
          dollar total on the number executives look at first, and it had
          probably been wrong since the formula was written.
        </p>
        <p>
          Another one was a row that claimed a cell coordinate as its source.
          When I compared the two values, they differed at the fifteenth digit.
          Excel stores a live formula result at full precision but caps a typed
          or pasted value at fifteen significant digits, so that gap told me
          someone had pasted the number in rather than linking it. The row was
          carrying a coordinate as text while actually holding a snapshot from
          some point in the past. If the source moved next month, the row would
          keep the old number and still claim to be pulling from the source. I
          checked all 6,700 rows for the same problem and found one more.
        </p>
        <p>
          What all five have in common is that they produce a number that looks
          completely fine. Nothing errors out and nothing turns red. The argument
          for this project is that before rebuilding it, nobody could have told
          you either way.
        </p>
        <p>
          I kept a rule throughout of reproducing the number exactly and
          reporting the defect separately. Fixing a defect would have broken
          verification, and a reproduction that quietly corrects its source
          isn&apos;t really a reproduction anymore.
        </p>
      </Step>

      <Step
        number="05"
        title="The hardest thing to work out"
        annotations={[
          {
            type: "FINDING",
            text: "Each KPI carries two percentages. One gets displayed, one decides the color. They agree on 8 of 11.",
          },
        ]}
      >
        <p>
          The status colors didn&apos;t follow the percentage displayed above
          them. Applying the stated legend to the displayed percentage gave the
          wrong color on three of the eleven KPIs.
        </p>
        <p>
          It turned out the colors follow a second percentage that never appears
          on the sheet at all, where lower-is-better metrics invert the ratio.
          Applied that way, all fifteen fills reproduce exactly. So each KPI
          carries two independent percentages, one that gets displayed and one
          that decides the color, and they happen to agree on eight of the
          eleven. That is what makes collapsing them into a single number so
          tempting and so wrong.
        </p>
      </Step>

      <Step
        number="06"
        title="What I got wrong"
        annotations={[
          {
            type: "FINDING",
            text: "Twice on this project, something I concluded by reasoning got corrected once I actually instrumented it",
          },
        ]}
      >
        <p>
          I found a bug in a helper function, looked at it, decided the
          problematic case couldn&apos;t actually be reached, and wrote it up as
          a non-issue. Then I added a guard so it would fail loudly if that ever
          changed. It fired immediately. The case was reachable on every single
          run, it had just been returning an empty result, which hid the problem.
        </p>
        <p>
          Looking back, my mistake was reading the absence of an effect as the
          absence of a call. That happened twice on this project, where something
          I had concluded by reasoning about the code got corrected once I
          actually instrumented it. It&apos;s a decent argument for adding guards
          you&apos;re confident will never fire.
        </p>
      </Step>

      <Step number="07" title="What it didn't do, and what's next">
        <p>
          This didn&apos;t automate away some huge recurring task. Eleven numbers
          were never the bottleneck, and I don&apos;t have a figure for hours
          saved. What it produced was an auditable version of a sheet that
          couldn&apos;t be checked before, plus five defects in it.
        </p>
        <p>
          The next phase pulls financial data straight from the company&apos;s
          ERP instead of the workbook, which breaks the assumption the whole
          thing rests on. Every guarantee here depends on the source being
          static. Excel doesn&apos;t change between runs, so reproducing it
          exactly is a well-defined thing to do. A live database changes while
          you&apos;re reading it, so verification has nothing fixed to check
          against. The way to keep the model working is immutable snapshots, so
          that the trial balance as of a given date becomes a fixed thing I can
          verify and trace the same way a cell coordinate works now.
        </p>
      </Step>
    </main>
  );
}