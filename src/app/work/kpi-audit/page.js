import { CaseStudyHeader, Step } from "@/components/CaseStudy";

export const metadata = {
  title: "Rebuilding an executive KPI sheet — Vikram Iyer",
  description:
    "A company's headline profitability metric had a percentage buried inside a dollar sum. Nobody had caught it, because in a spreadsheet a wrong number looks exactly like a right one.",
};

export default function KpiAudit() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10">
      <CaseStudyHeader
        number="02"
        kind="Product"
        title="Rebuilding an Executive KPI Sheet to Find Out If It Was Right"
        dek="The headline profitability metric had a percentage buried inside a dollar sum. It had probably been wrong since the formula was written."
        meta={[
          ["Role", "Solo build"],
          ["Client", "A multi-entity foodservice company"],
          ["Scope", "11 KPIs from a 51-tab workbook"],
          ["Built in", "One working day"],
        ]}
      />

      <Step
        number="01"
        title="The problem"
        annotations={[
          {
            type: "FINDING",
            text: "9 of the 22 value cells were typed in by hand with no upstream source at all",
          },
        ]}
      >
        <p>
          A company&apos;s headline profitability metric had a percentage buried
          inside a dollar sum. It had probably been wrong since the formula was
          written, on every monthly close. Nobody caught it, because in a
          spreadsheet a wrong number and a right number look exactly the same.
        </p>
        <p>
          I had been asked to reproduce an executive KPI sheet programmatically.
          Automation was never really the point. The problem was that nobody
          could prove the sheet was right.
        </p>
        <p>
          Every month, finance produced a 51-tab workbook. One tab was the one
          executives actually read: eleven operating KPIs, each showing a
          year-to-date actual against budget, a percentage, and a red, yellow or
          green status box. Eleven numbers on one page. The sheet you take into a
          meeting.
        </p>
        <p>
          What sat behind it was messier. Some figures came from a consolidated
          income statement several sheets away. Some came from a headcount
          worksheet. Nine were typed in by hand and came from nowhere at all.
        </p>
        <p>
          A spreadsheet rolled forward monthly for years accumulates things.
          Formula ranges that drifted. References that were never updated. Values
          pasted over what used to be a live link. None of it is visible from the
          surface. The only way to find out is to rebuild the sheet from its
          inputs and see whether the two agree.
        </p>
      </Step>

      <Step
        number="02"
        title="What I built"
        annotations={[
          {
            type: "DECISION",
            text: "Ground truth lives in its own staging tables, separate from anything the pipeline computes from",
          },
        ]}
      >
        <p>
          A Python and SQLite pipeline that extracted the workbook into a star
          schema, recomputed the eleven KPIs from source data, verified the
          reproduction cell by cell against what Excel itself had stored, traced
          every number back to its exact source coordinate, and surfaced all of
          it through a small web app.
        </p>
        <p>
          <mark>
            One decision is worth explaining. Ground truth lives in its own
            staging tables, separate from anything the pipeline computes from.
          </mark>{" "}
          If the computation read from the same place it was compared against,
          verification could not fail. That separation is what makes the whole
          thing mean anything.
        </p>
      </Step>

      <Step
        number="03"
        title="Verification, and the honest count"
        annotations={[
          {
            type: "METHOD",
            text: "44 cells compared: 11 actuals, 11 budgets, 11 percentages, 11 status colours. Two independent paths to each number.",
          },
          {
            type: "DECISION",
            text: "Reported 13 of 22 independently recomputed rather than 44 of 44 verified",
          },
        ]}
      >
        <p>
          I wrote the verification harness before the thing it verifies. Writing
          the test first forces you to define what correct means before writing
          the code that is supposed to produce it.
        </p>
        <p>
          Forty-four cells compared. On one side, values recomputed from source
          tables. On the other, the values Excel itself had cached.
        </p>
        <p>
          The honest count is the part worth dwelling on. The brief asked for
          100% verification, and &ldquo;44 of 44 verified&rdquo; would have been
          technically true. But nine of the twenty-two value cells are hardcoded
          constants with no upstream source. There is nothing to recompute them
          from, so they pass through and get compared against themselves. That is
          a cell checked against itself. It cannot fail.
        </p>
        <p>
          <mark>
            So the harness reports them separately: 13 of 22 independently
            recomputed, 9 of 22 pass-through and not independently verifiable.
          </mark>{" "}
          Thirteen of twenty-two is a weaker-sounding number and a stronger
          claim. It also makes the finding land harder, because the report can
          point at exactly which cells could not be verified and why.
        </p>
        <p>
          A verification harness that has never printed a failure has not been
          tested, it has only been run. So I corrupted a value and re-ran it,
          confirmed the error propagated into the dependent cells and exited
          nonzero, then confirmed the clean run still passed.
        </p>
      </Step>

      <Step
        number="04"
        title="What the reproduction found"
        annotations={[
          {
            type: "FINDING",
            text: "5 defects. Every one of them produces a plausible-looking number and throws no error.",
          },
        ]}
      >
        <p>
          <strong>A percentage inside a dollar sum.</strong> The adjusted
          profitability line summed a range that included a ratio sitting among
          dollar figures. The error was a few cents on several million, which is
          why nobody noticed. It was also a ratio inside a dollar total, on the
          headline profitability metric, on every monthly close.
        </p>
        <p>
          <strong>A lineage claim that was not true.</strong> One row carried a
          cell coordinate in its source metadata, so you would assume the value
          came from that cell. Comparing the two, they differed at the fifteenth
          digit. Excel stores a live formula result at full precision but caps a
          typed or pasted value at fifteen significant digits. That gap is
          exactly the tell. Somebody had pasted the number instead of linking it.
          The row carried a coordinate as text while holding a snapshot taken at
          some point and never updated. If the source moved next month, that row
          would keep the old number and still claim to be the source.
        </p>
        <p>
          I then checked all 6,700 rows for the same problem. One was wrong. I
          would not have found it without checking every one.
        </p>
        <p>
          The pattern across all five is the same. Each produces a
          plausible-looking number. None throws an error or turns a cell red. A
          stray percentage inside a sum, a reference pointing at the wrong month,
          a blank cell treated as zero, a pasted value wearing a live link&apos;s
          label. The argument for the project is not that the numbers were wrong.
          It is that until it was rebuilt, nobody could have told.
        </p>
        <p>
          The rule throughout was to reproduce the number exactly and report the
          defect separately. Fixing a defect would have broken verification, and
          a reproduction that quietly corrects its source is not a reproduction.
        </p>
      </Step>

      <Step
        number="05"
        title="The hardest thing to work out"
        annotations={[
          {
            type: "FINDING",
            text: "Each KPI carries two independent percentages. One gets displayed, one decides the colour. They agree on 8 of 11.",
          },
        ]}
      >
        <p>
          The status colours did not follow the percentage displayed above them.
          Applying the stated legend to the displayed percentage produced the
          wrong colour on three of the eleven KPIs.
        </p>
        <p>
          The colours actually follow a second percentage that never appears on
          the sheet. It is a direction-normalized attainment, where
          lower-is-better metrics invert the ratio. Applied that way, all fifteen
          fills reproduce exactly.
        </p>
        <p>
          So each KPI carries two independent percentages. One gets displayed and
          one decides the colour. They agree for eight of the eleven, which is
          exactly what makes collapsing them into one number so tempting and so
          wrong.
        </p>
      </Step>

      <Step
        number="06"
        title="Being honest about scope"
        annotations={[
          {
            type: "FINDING",
            text: "48-row lineage matrix. 26 chains fully traced, 13 truncated at the scope boundary and previously marked complete.",
          },
        ]}
      >
        <p>
          The lineage matrix traces every cell back toward its source, but the
          recursion stops at the ingestion boundary. The problem was that a chain
          which stopped looked exactly like a chain that ended, so a reader would
          take a truncated row for a raw input.
        </p>
        <p>
          Adding an explicit status column, marking each chain as either fully
          traced or truncated at the boundary, surfaced thirteen rows that had
          been silently marked complete.
        </p>
        <p>
          A matrix that overstates its own depth is more dangerous than one that
          admits a boundary, because a reader cannot tell which claims to trust.
        </p>
      </Step>

      <Step
        number="07"
        title="What I got wrong"
        annotations={[
          {
            type: "FINDING",
            text: "Twice on this project, a conclusion reached by inference was corrected by instrumentation.",
          },
        ]}
      >
        <p>
          I found a latent bug in a helper function, audited it, concluded the
          problematic case was unreachable, and documented it as a non-issue.
          Then I added a guard so it would fail loudly if scope ever changed. The
          guard fired immediately. The case was reachable on every run. It had
          merely been returning an empty result, which masked the mismatch.
        </p>
        <p>
          The reasoning error is worth naming. Absence of an effect got read as
          absence of a call. Twice on this project a conclusion reached by
          inference was corrected by instrumentation. That is the argument for
          adding guards you expect never to fire.
        </p>
        <p>
          Earlier I had also papered over a discrepancy with a floating-point
          tolerance. It passed, and it would have been defensible in a write-up.
          It was also six orders of magnitude looser than the difference it
          absorbed. Going after the cause instead turned a papered-over gap into
          the project&apos;s best finding, and removed the last tolerance from
          the project.
        </p>
      </Step>

      <Step number="08" title="What it did not do">
        <p>
          The project did not automate away a large recurring task. Eleven
          numbers were never the bottleneck, and I do not have a figure for
          manual effort saved. What it produced was an auditable version of a
          sheet that previously could not be checked, plus five defects in it.
        </p>
      </Step>

      <Step
        number="09"
        title="What is next"
        annotations={[
          {
            type: "METHOD",
            text: "Immutable snapshots, so a trial balance as of a given date becomes a fixed thing that can be verified the same way a cell coordinate is now",
          },
        ]}
      >
        <p>
          The next phase pulls financial data directly from the company&apos;s
          ERP rather than from the workbook. That breaks an assumption the whole
          project rests on. Every guarantee here depends on the source being
          static. Excel does not change between runs, so reproducing it exactly
          is well defined. A live database changes while you read it, and
          verification has nothing fixed to check against.
        </p>
        <p>
          The approach that preserves the model is immutable snapshots. The trial
          balance as of a given date becomes a fixed thing that can be verified
          and traced the same way a cell coordinate is now.
        </p>
      </Step>
    </main>
  );
}