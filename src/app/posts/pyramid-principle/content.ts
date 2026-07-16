export const styles = `
.artifact-scope .wrap {
    font-family: var(--at-font-body);
    color: var(--at-text);
    font-size: 1.12rem;
    line-height: 1.72;
    max-width: 46rem;
    margin: 0 auto;
  }
.artifact-scope .wrap p { margin: 1.1rem 0; }
.artifact-scope .wrap strong { color: var(--at-text); font-weight: 600; }
.artifact-scope .kicker {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--at-accent);
    margin: 3.4rem 0 0.4rem;
  }
.artifact-scope h1,
.artifact-scope h2 {
    font-family: var(--at-font-display);
    font-weight: 600;
    font-size: 1.72rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0.2rem 0 1.1rem;
  }
.artifact-scope h3 {
    font-family: var(--at-font-display);
    font-weight: 600;
    font-size: 1.18rem;
    margin: 1.8rem 0 0.5rem;
  }
.artifact-scope .lede {
    font-size: 1.28rem;
    line-height: 1.6;
    color: var(--at-muted);
    margin: 0.6rem 0 2rem;
  }
.artifact-scope .lede em { color: var(--at-accent); font-style: normal; }
.artifact-scope /* figure shell */
  figure {
    margin: 1.9rem 0;
    padding: 1.5rem;
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 10px;
  }
.artifact-scope figcaption {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    color: var(--at-faint);
    margin-top: 1.1rem;
    text-align: center;
    letter-spacing: 0.02em;
  }
.artifact-scope svg { display: block; width: 100%; height: auto; }
.artifact-scope .mono { font-family: var(--at-font-mono); }
.artifact-scope /* before / after */
  .split { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .split { grid-template-columns: 1fr; }
}
.artifact-scope .card {
    padding: 1.1rem;
    border-radius: 8px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
  }
.artifact-scope .card .tag {
    font-family: var(--at-font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--at-faint);
    display: block;
    margin-bottom: 0.6rem;
  }
.artifact-scope .card.good { border-color: var(--at-accent); }
.artifact-scope .card.good .tag { color: var(--at-accent); }
.artifact-scope .stream { font-size: 0.98rem; line-height: 1.55; color: var(--at-muted); }
.artifact-scope .stream .line { display: block; padding: 0.15rem 0; }
.artifact-scope /* grouping chips */
  .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.artifact-scope .chip {
    font-family: var(--at-font-mono);
    font-size: 0.85rem;
    padding: 0.35rem 0.7rem;
    border-radius: 6px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    color: var(--at-muted);
  }
.artifact-scope .groups { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
@media (max-width: 620px) {
.artifact-scope .groups { grid-template-columns: 1fr; }
}
.artifact-scope .group {
    padding: 0.9rem;
    border-radius: 8px;
    border: 1px solid var(--at-line);
  }
.artifact-scope .group.g1 { background: var(--at-blue-soft); border-color: var(--at-blue); }
.artifact-scope .group.g2 { background: var(--at-green-soft); border-color: var(--at-green); }
.artifact-scope .group .label {
    font-family: var(--at-font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }
.artifact-scope .group.g1 .label { color: var(--at-blue); }
.artifact-scope .group.g2 .label { color: var(--at-green); }
.artifact-scope .group .chip { background: transparent; }
.artifact-scope /* SCQA flow */
  .scqa { display: flex; flex-direction: column; gap: 0.6rem; }
.artifact-scope .row {
    display: grid;
    grid-template-columns: 3.2rem 1fr;
    gap: 0.9rem;
    align-items: start;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    border-left: 3px solid var(--at-line);
  }
.artifact-scope .row .k {
    font-family: var(--at-font-mono);
    font-weight: 600;
    font-size: 0.95rem;
  }
.artifact-scope .row .t { font-size: 1rem; line-height: 1.5; }
.artifact-scope .row .t b { font-weight: 600; }
.artifact-scope .row .t .ex { display: block; color: var(--at-muted); font-size: 0.94rem; margin-top: 0.25rem; }
.artifact-scope .row.s { border-left-color: var(--at-blue); }
.artifact-scope .row.s .k { color: var(--at-blue); }
.artifact-scope .row.c { border-left-color: var(--at-amber); }
.artifact-scope .row.c .k { color: var(--at-amber); }
.artifact-scope .row.q { border-left-color: var(--at-faint); }
.artifact-scope .row.q .k { color: var(--at-faint); }
.artifact-scope .row.a {
    border-left-color: var(--at-accent);
    background: var(--at-accent-soft);
    border-color: var(--at-accent);
  }
.artifact-scope .row.a .k { color: var(--at-accent); }
.artifact-scope .apex-note {
    text-align: center;
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    color: var(--at-accent);
    margin-top: 0.7rem;
  }
.artifact-scope /* deductive vs inductive */
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .two { grid-template-columns: 1fr; }
}
.artifact-scope .col .h {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--at-faint);
    margin-bottom: 0.7rem;
  }
.artifact-scope .step {
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    font-size: 0.92rem;
    line-height: 1.45;
    margin-bottom: 0.4rem;
  }
.artifact-scope .arrow-down {
    text-align: center;
    color: var(--at-faint);
    font-family: var(--at-font-mono);
    font-size: 0.8rem;
    margin: 0.1rem 0;
  }
.artifact-scope .concl {
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: var(--at-accent-soft);
    border: 1px solid var(--at-accent);
    color: var(--at-text);
    font-size: 0.92rem;
    line-height: 1.45;
    font-weight: 500;
  }
.artifact-scope .fan { display: flex; flex-direction: column; gap: 0.4rem; }
.artifact-scope .reason {
    padding: 0.55rem 0.8rem;
    border-radius: 6px;
    background: var(--at-blue-soft);
    border: 1px solid var(--at-blue);
    font-size: 0.9rem;
    line-height: 1.4;
  }
.artifact-scope /* build process */
  .proc { display: flex; flex-direction: column; gap: 0.5rem; }
.artifact-scope .pstep { display: grid; grid-template-columns: 2rem 1fr; gap: 0.9rem; align-items: baseline; }
.artifact-scope .pstep .n {
    font-family: var(--at-font-mono);
    font-weight: 600;
    color: var(--at-accent);
    font-size: 0.9rem;
  }
.artifact-scope .pstep .b { font-size: 1rem; line-height: 1.5; }
.artifact-scope .pstep .b b { font-weight: 600; }
.artifact-scope .dirband {
    display: flex; justify-content: space-between;
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    color: var(--at-faint);
    margin: 0.4rem 0 1rem;
    border-top: 1px dashed var(--at-line);
    padding-top: 0.6rem;
  }
.artifact-scope /* practice callout */
  .practice {
    margin: 2.4rem 0;
    padding: 1.4rem 1.5rem;
    border-left: 3px solid var(--at-accent);
    background: var(--at-accent-soft);
    border-radius: 0 8px 8px 0;
  }
.artifact-scope .practice .h {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--at-accent);
    margin-bottom: 0.6rem;
  }
.artifact-scope .practice ol { margin: 0.4rem 0 0; padding-left: 1.2rem; }
.artifact-scope .practice li { margin: 0.4rem 0; line-height: 1.55; }
.artifact-scope .rule { border: none; border-top: 1px solid var(--at-line); margin: 2.6rem 0; }
.artifact-scope .close {
    font-size: 1.15rem;
    line-height: 1.62;
    color: var(--at-muted);
  }
.artifact-scope .close b { color: var(--at-text); }
`;

export const html = `
<div class="wrap">

  <p class="kicker">Communication</p>
  <h1>The Pyramid Principle: Answer First</h1>
  <p class="lede">Your brain files ideas as a <em>hierarchy</em>, not a timeline. So put the conclusion on top and let the support hang beneath it &mdash; the structure consultants use for every report, email, and talk.</p>

  <p>Picture the status update most of us give:</p>

  <figure>
    <div class="split">
      <div class="card">
        <span class="tag">How we tend to report</span>
        <div class="stream">
          <span class="line">&ldquo;Yesterday I called client A.</span>
          <span class="line">Then I re-checked the March numbers &mdash; small gap.</span>
          <span class="line">I also talked to engineering about that bug.</span>
          <span class="line">And I reviewed B&rsquo;s contract&hellip;&rdquo;</span>
        </div>
      </div>
      <div class="card good">
        <span class="tag">What the listener needs</span>
        <div class="stream">
          <span class="line" style="color:var(--at-accent);font-weight:600;">&ldquo;We should delay the B deal by a week.</span>
          <span class="line">Three things changed this week&hellip;&rdquo;</span>
        </div>
      </div>
    </div>
    <figcaption>Told in time order, the point arrives last &mdash; and the listener rebuilds your structure for you.</figcaption>
  </figure>

  <p>The reader sits there assembling fragments, guessing at one thing: <strong>what are you actually telling me?</strong> That reconstruction is pure cognitive load, and it&rsquo;s avoidable. Barbara Minto &mdash; the first woman McKinsey hired as a consultant &mdash; noticed the fix in the late 1960s and turned it into the <strong>Pyramid Principle</strong>, still required reading at McKinsey, BCG, and Bain.</p>

  <p class="kicker">Why a pyramid</p>
  <h2>The mind groups, then summarizes</h2>

  <p>Give someone a flat list and watch what happens. Read these eight words, then look away for ten seconds:</p>

  <figure>
    <div class="chips">
      <span class="chip">apple</span><span class="chip">knife</span><span class="chip">orange</span><span class="chip">board</span><span class="chip">banana</span><span class="chip">pot</span><span class="chip">pear</span><span class="chip">pan</span>
    </div>
    <div class="groups">
      <div class="group g1">
        <span class="label">Fruit</span>
        <div class="chips" style="justify-content:flex-start;">
          <span class="chip">apple</span><span class="chip">orange</span><span class="chip">banana</span><span class="chip">pear</span>
        </div>
      </div>
      <div class="group g2">
        <span class="label">Kitchen tools</span>
        <div class="chips" style="justify-content:flex-start;">
          <span class="chip">knife</span><span class="chip">board</span><span class="chip">pot</span><span class="chip">pan</span>
        </div>
      </div>
    </div>
    <figcaption>Nobody told you the categories. The mind invents them to survive the list.</figcaption>
  </figure>

  <p>You almost certainly recalled them as <em>fruit</em> and <em>kitchen tools</em> &mdash; categories nobody handed you. That&rsquo;s the whole mechanism. Working memory holds only about four to seven items at once (Miller, 1956), so the mind copes by clustering ideas and labeling each cluster with one higher idea. Present information already in that shape and the listener skips the reconstruction entirely.</p>

  <p>Two consequences fall straight out: keep <strong>three to five points per level</strong>, and make the top of each cluster a real <strong>summary</strong> of what sits below.</p>

  <p class="kicker">The structure</p>
  <h2>One answer on top, support beneath</h2>

  <p>A pyramid has one governing idea at the apex &mdash; not a topic, a <strong>conclusion</strong> &mdash; and every level below it exists to support the level above.</p>

  <figure>
    <svg viewBox="0 0 640 300" role="img" aria-label="A pyramid: one answer at the apex, three grouped reasons below, supporting detail at the base.">
      <!-- apex -->
      <rect x="248" y="20" width="144" height="46" rx="7" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/>
      <text x="320" y="41" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" fill="var(--at-accent)">ANSWER</text>
      <text x="320" y="57" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">the one conclusion</text>
      <!-- connectors to level 2 -->
      <path d="M320 66 L150 118 M320 66 L320 118 M320 66 L490 118" stroke="var(--at-line-strong)" stroke-width="1.2" fill="none"/>
      <!-- level 2 -->
      <rect x="78" y="118" width="144" height="46" rx="7" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
      <text x="150" y="139" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-blue)">REASON 1</text>
      <text x="150" y="155" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">supports the answer</text>
      <rect x="248" y="118" width="144" height="46" rx="7" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.3"/>
      <text x="320" y="139" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-amber)">REASON 2</text>
      <text x="320" y="155" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">supports the answer</text>
      <rect x="418" y="118" width="144" height="46" rx="7" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.3"/>
      <text x="490" y="139" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-violet)">REASON 3</text>
      <text x="490" y="155" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">supports the answer</text>
      <!-- connectors to base -->
      <path d="M150 164 L110 216 M150 164 L190 216 M320 164 L280 216 M320 164 L360 216 M490 164 L450 216 M490 164 L530 216" stroke="var(--at-line)" stroke-width="1" fill="none"/>
      <!-- base -->
      <g font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-faint)">
        <rect x="72" y="216" width="76" height="34" rx="5" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="110" y="237" text-anchor="middle">data</text>
        <rect x="152" y="216" width="76" height="34" rx="5" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="190" y="237" text-anchor="middle">data</text>
        <rect x="242" y="216" width="76" height="34" rx="5" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="280" y="237" text-anchor="middle">data</text>
        <rect x="322" y="216" width="76" height="34" rx="5" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="360" y="237" text-anchor="middle">data</text>
        <rect x="412" y="216" width="76" height="34" rx="5" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="450" y="237" text-anchor="middle">data</text>
        <rect x="492" y="216" width="76" height="34" rx="5" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="530" y="237" text-anchor="middle">data</text>
      </g>
      <!-- reading direction -->
      <text x="600" y="43" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)" transform="rotate(90 600 150)">present top &rarr; down</text>
    </svg>
    <figcaption>Every box summarizes the boxes below it. Read top-down; the reader never waits for the point.</figcaption>
  </figure>

  <p>The apex is a claim you could defend, not a heading you could file under:</p>

  <figure style="padding:1.1rem 1.5rem;">
    <p style="margin:0.4rem 0;color:var(--at-muted);"><span class="mono" style="color:var(--at-faint);">&#10007;&nbsp;</span> &ldquo;A report on Q3 performance.&rdquo; <span class="mono" style="font-size:0.8rem;color:var(--at-faint);">&mdash; a topic</span></p>
    <p style="margin:0.4rem 0;color:var(--at-text);"><span class="mono" style="color:var(--at-accent);">&#10003;&nbsp;</span> &ldquo;We should raise the Q4 marketing budget, for three reasons.&rdquo; <span class="mono" style="font-size:0.8rem;color:var(--at-accent);">&mdash; a conclusion</span></p>
  </figure>

  <p class="kicker">The on-ramp</p>
  <h2>SCQA: earn the answer in four lines</h2>

  <p>You can&rsquo;t open with a naked conclusion &mdash; the reader needs to feel the <em>question</em> it answers. SCQA sets that up: state a <strong>Situation</strong> they already accept, introduce the <strong>Complication</strong> that breaks it, let the <strong>Question</strong> form, then deliver the <strong>Answer</strong> &mdash; which is your apex.</p>

  <figure>
    <div class="scqa">
      <div class="row s">
        <span class="k">S</span>
        <span class="t"><b>Situation</b> &mdash; shared, uncontested ground.
          <span class="ex">We&rsquo;ve run the old CRM for five years; stable, cheap.</span></span>
      </div>
      <div class="row c">
        <span class="k">C</span>
        <span class="t"><b>Complication</b> &mdash; something changed; tension appears.
          <span class="ex">The vendor is ending support in six months, with no upgrade path.</span></span>
      </div>
      <div class="row q">
        <span class="k">Q</span>
        <span class="t"><b>Question</b> &mdash; usually unspoken, always present.
          <span class="ex">So what do we do to avoid an outage?</span></span>
      </div>
      <div class="row a">
        <span class="k">A</span>
        <span class="t"><b>Answer</b> &mdash; your recommendation, stated first.
          <span class="ex">Move to CRM X within four months &mdash; lowest switching cost, native accounting integration, IT has done it before.</span></span>
      </div>
    </div>
    <p class="apex-note">&#9650; The Answer is the apex. Its three reasons become the next level down.</p>
    <figcaption>S and C build the question in the reader&rsquo;s head; A pays it off &mdash; then the pyramid unfolds.</figcaption>
  </figure>

  <p class="kicker">Grouping rule</p>
  <h2>MECE: no gaps, no overlaps</h2>

  <p>A group only summarizes cleanly if its members are <strong>MECE</strong> &mdash; <em>mutually exclusive</em> (no overlap) and <em>collectively exhaustive</em> (nothing left out). Mix two criteria and the grouping leaks.</p>

  <figure>
    <div class="two">
      <div class="col">
        <div class="h">&#10007; Not MECE &mdash; criteria mixed</div>
        <svg viewBox="0 0 280 150" role="img" aria-label="Overlapping groups: North, South, and VIP overlap because VIP customers also live in a region.">
          <circle cx="105" cy="70" r="52" fill="var(--at-inset)" stroke="var(--at-line-strong)" stroke-width="1.3"/>
          <circle cx="175" cy="70" r="52" fill="var(--at-inset)" stroke="var(--at-line-strong)" stroke-width="1.3"/>
          <ellipse cx="140" cy="70" rx="46" ry="30" fill="none" stroke="var(--at-muted)" stroke-width="1.3" stroke-dasharray="4 3"/>
          <text x="80" y="66" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" fill="var(--at-text)">North</text>
          <text x="200" y="66" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" fill="var(--at-text)">South</text>
          <text x="140" y="112" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">VIP</text>
          <text x="140" y="76" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-faint)">?</text>
        </svg>
        <p style="font-size:0.9rem;color:var(--at-muted);margin:0.6rem 0 0;">A VIP also lives in a region &mdash; the sets overlap.</p>
      </div>
      <div class="col">
        <div class="h">&#10003; MECE &mdash; one criterion</div>
        <svg viewBox="0 0 280 150" role="img" aria-label="Clean partition: North, Central, South as three non-overlapping bands.">
          <rect x="40" y="34" width="200" height="24" rx="4" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.2"/>
          <text x="140" y="51" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11.5" fill="var(--at-blue)">North</text>
          <rect x="40" y="63" width="200" height="24" rx="4" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.2"/>
          <text x="140" y="80" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11.5" fill="var(--at-amber)">Central</text>
          <rect x="40" y="92" width="200" height="24" rx="4" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
          <text x="140" y="109" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11.5" fill="var(--at-violet)">South</text>
        </svg>
        <p style="font-size:0.9rem;color:var(--at-muted);margin:0.6rem 0 0;">Split by region <em>or</em> by tier &mdash; never both at once.</p>
      </div>
    </div>
    <figcaption>&ldquo;North / South / VIP&rdquo; leaks because VIP cuts across regions. Pick one axis per level.</figcaption>
  </figure>

  <p class="kicker">Supporting a point</p>
  <h2>Deductive chains vs inductive fans</h2>

  <p>Under any box, you support it one of two ways. A <strong>deductive</strong> chain walks premise to premise to conclusion &mdash; each line depends on the last. An <strong>inductive</strong> fan gathers independent reasons of the same kind under one claim. Minto favors induction: the reader can take each reason on its own, with no chain to hold in memory.</p>

  <figure>
    <div class="two">
      <div class="col">
        <div class="h">Deductive &mdash; a chain</div>
        <div class="step">Input costs rose 10%.</div>
        <div class="arrow-down">&darr; therefore</div>
        <div class="step">Rising costs shrink our margin unless price moves.</div>
        <div class="arrow-down">&darr; therefore</div>
        <div class="concl">Raise the sale price 5%.</div>
        <p style="font-size:0.86rem;color:var(--at-faint);margin:0.7rem 0 0;">Miss the middle link and the point is lost. Keep chains to 2&ndash;3 steps.</p>
      </div>
      <div class="col">
        <div class="h">Inductive &mdash; a fan</div>
        <div class="concl" style="margin-bottom:0.5rem;">Expand into Southeast Asia.</div>
        <div class="arrow-down">&uarr; because &mdash; three <b>reasons</b></div>
        <div class="fan">
          <div class="reason">Labor runs 30% cheaper than our current market.</div>
          <div class="reason">Demand there is growing 20% a year.</div>
          <div class="reason">The main competitor isn&rsquo;t present yet.</div>
        </div>
        <p style="font-size:0.86rem;color:var(--at-faint);margin:0.7rem 0 0;">Independent, same-kind reasons. Easier to read &mdash; and to audit.</p>
      </div>
    </div>
    <figcaption>The fan&rsquo;s reasons share one plural noun (&ldquo;three reasons&rdquo;). If they don&rsquo;t, the group isn&rsquo;t MECE yet.</figcaption>
  </figure>

  <p class="kicker">Building one</p>
  <h2>Think bottom-up, present top-down</h2>

  <p>Here&rsquo;s the move most people miss: the messy way you <em>discover</em> an answer is not the way you should <em>deliver</em> it. Explore upward from the details; present downward from the conclusion.</p>

  <figure>
    <div class="proc">
      <div class="pstep"><span class="n">1</span><span class="b"><b>Dump</b> every raw point, fact, and number &mdash; no order yet.</span></div>
      <div class="pstep"><span class="n">2</span><span class="b"><b>Group</b> the like ideas (MECE); name each group with a plural noun.</span></div>
      <div class="pstep"><span class="n">3</span><span class="b"><b>Summarize</b> each group in one sentence &mdash; that line becomes its parent.</span></div>
      <div class="pstep"><span class="n">4</span><span class="b"><b>Distill</b> the summaries into the single governing answer &mdash; the apex.</span></div>
      <div class="pstep"><span class="n">5</span><span class="b"><b>Open</b> with SCQA into that answer, then unfold the levels in logical order.</span></div>
    </div>
    <div class="dirband">
      <span>&uarr; steps 1&ndash;4: think bottom-up</span>
      <span>step 5: present top-down &darr;</span>
    </div>
    <figcaption>Order the members of each group by time, structure, or importance &mdash; whichever fits.</figcaption>
  </figure>

  <div class="practice">
    <div class="h">Try it this week</div>
    <p style="margin:0 0 0.3rem;">For every email, report, or Slack message longer than three sentences:</p>
    <ol>
      <li>Make the first sentence the conclusion or the ask.</li>
      <li>List three-to-five grouped reasons beneath it &mdash; same-kind, no overlap.</li>
      <li>Reread the opener alone: does it carry the whole point without the rest?</li>
    </ol>
  </div>

  <hr class="rule">

  <p class="close">The Pyramid Principle isn&rsquo;t a template for reports &mdash; it&rsquo;s a way to <b>organize thought</b> around how minds actually take in information: hierarchy over sequence, a handful of ideas per level, and an answer to the question already hanging in the reader&rsquo;s head. Learn the reasons and you&rsquo;ll bend the method to anything &mdash; an email, a slide, an RFC where a busy reader needs your recommendation <b>before</b> the technical detail, not after it.</p>

</div>
`;

export const script = `

`;
