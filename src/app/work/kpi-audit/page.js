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
        title="Rebuilding an Executive KPI Sheet to Verify Metrics"
        dek="Reproducing a monthly executive KPI sheet from its source data."
        meta={[
          ["Role", "Solo build"],
          ["Client", "A multi-entity foodservice company"],
          ["Scope", "11 KPIs from a 51-tab workbook"],
          ["Built in", "One day"],
        ]}
      />

      <Step
        number="01"
        title="The task"
        annotations={[
          {
            type: "FINDING",
            text: "9 of the 22 value cells were typed in by hand",
          },
        ]}
      >
        <p>
          My project was to reproduce an executive KPI sheet. Every
          month, the finance team at a multi-entity foodservice company puts together a
          51-tab workbook, with one tab being read by executives. It
          has eleven operating KPIs, each with a year-to-date actual against
          budget, a percentage, and a red, yellow or green status box.
        </p>
      </Step>

      <Step
        number="02"
        title="What I built"
        annotations={[
          {
            type: "DECISION",
            text: "Created separate staging tables away from what the pipeline computes from",
          },
        ]}
      >
        <p>
          I built a Python and SQLite pipeline that creates
          a star schema, recomputes the eleven KPIs from the source data, and
          checks its version against what Excel had stored. It also traces
          every number back to the cell it came from. Finally, I put all of it on an 
          easily-digestible web app.
        </p>
        <p>
          <mark>
            One decision I made early on was to keep the ground truth in its own
            staging tables, away from anything the pipeline computes from.
          </mark>{" "}
          If the computation was reading from the same place it was being
          compared against, then verification would never fail.
        </p>
      </Step>

      <Step
        number="03"
        title="Verification"
        annotations={[
          {
            type: "METHOD",
            text: "44 cells compared: 11 actuals, 11 budgets, 11 percentages, 11 status colors",
          },
          {
            type: "DECISION",
            text: "Reported 13 of 22 independently recomputed",
          },
        ]}
      >
        <p>
          One thing I found was that nine of the
          twenty-two value cells are hardcoded numbers with nothing upstream
          of them. There is nothing to recompute them from, so they pass through
          and get compared against themselves, which means they can&apos;t fail.
        </p>
        <p>
          <mark>
            I reported it as 13 of 22 independently recomputed, and 9 of 22
            pass-through and not independently verifiable.
          </mark>{" "}
          This was to show exactly which cells couldn&apos;t be verified and why.
        </p>
        <p>
          I also wanted to make sure the harness could fail, because one
          that has never printed a failure hasn&apos;t been tested. So I
          corrupted a value and re-ran it to confirm the error showed
          up where it should have.
        </p>
      </Step>

      <Step
        number="04"
        title="What I found"
        annotations={[
          {
            type: "FINDING",
            text: "There were 5 easily missable defects",
          },
        ]}
      >
        <p>
          I ended up discovering five defects. A big one was that the adjusted profitability line was summing a
          range that happened to include a percentage that was sitting among the dollar
          figures. The error only overestimated the count by a few cents, but it is still an incorrect estimate.
        </p>
        <p>
          Another error was a row that had a cell coordinate as its source.
          When I compared the two values, I saw that they differed at the fifteenth digit.
          Excel stores a live formula result at full precision but caps a pasted  
          value at fifteen significant digits, so that gap meant that 
          someone had pasted the number in rather instead linking it. So if the source moved, the row would
          keep the old number and still claim to be pulling it from the source. I
          checked all 6,700 rows for the same problem and found one more.
        </p>
      </Step>

      <Step
        number="05"
        title="The hardest thing to work out"
        annotations={[
          {
            type: "FINDING",
            text: "Each KPI contains two percentages, with one being displayed and the other determining the color.",
          },
        ]}
      >
        <p>
          The status colors didn&apos;t actually follow the percentage displayed above
          them. Applying the legend to the displayed percentage gave the
          wrong color on three of the eleven KPIs.
        </p>
        <p>
          It turned out that the colors follow a different percentage that doesn't appear 
          anywhere in the sheet, where lower-is-better metrics invert the ratio.
          Applied that way, all fifteen fills match the colors. So each KPI
          carries two independent percentages, one that gets displayed and one
          that decides the color, and they happen to agree on eight of the
          eleven.
        </p>
      </Step>

      <Step
        number="06"
        title="What I got wrong"
        annotations={[
          {
            type: "FINDING",
            text: "Twice on this project, something I concluded by reasoning got corrected once I tested it",
          },
        ]}
      >
        <p>
          I found a bug in a helper function, and decided that the
          problematic case couldn&apos;t be reached. I did, however, add a guard so it would fail if the case every did happen. 
          It ended up firing immediately, and I saw that the case was reachable on every single
          run, it had just been returning an empty result, which hid the problem.
        </p>
      </Step>
    </main>
  );
}