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
.artifact-scope .xref { color: var(--at-accent); text-decoration: underline; text-underline-offset: 2px; }
.artifact-scope .kicker {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--at-accent);
    margin: 3.4rem 0 0.4rem;
  }
.artifact-scope .kicker:first-child { margin-top: 0; }
.artifact-scope h1,
.artifact-scope h2 {
    font-family: var(--at-font-display);
    font-weight: 600;
    font-size: 1.72rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0.2rem 0 1.1rem;
  }
.artifact-scope .lede {
    font-size: 1.28rem;
    line-height: 1.6;
    color: var(--at-muted);
    margin: 0.6rem 0 2rem;
  }
.artifact-scope .lede em { color: var(--at-accent); font-style: normal; }
.artifact-scope figure {
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
.artifact-scope .rule { border: none; border-top: 1px solid var(--at-line); margin: 2.6rem 0; }
.artifact-scope .close { font-size: 1.18rem; line-height: 1.62; color: var(--at-muted); }
.artifact-scope .close b { color: var(--at-text); }
.artifact-scope .close .hl { color: var(--at-accent); }

/* router strip: question cue -> framework -> headline shape */
.artifact-scope .router { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 0.6rem; align-items: center; }
@media (max-width: 620px) { .artifact-scope .router { grid-template-columns: 1fr; } .artifact-scope .router .arr { transform: rotate(90deg); } }
.artifact-scope .router .cell { padding: 0.8rem 0.9rem; border-radius: 8px; border: 1px solid var(--at-line); background: var(--at-inset); text-align: center; }
.artifact-scope .router .cell .lab { display: block; font-family: var(--at-font-mono); font-size: 0.64rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--at-faint); margin-bottom: 0.3rem; }
.artifact-scope .router .cell .v { font-family: var(--at-font-mono); font-size: 0.92rem; color: var(--at-text); }
.artifact-scope .router .cell.q { border-color: var(--at-blue); background: var(--at-blue-soft); }
.artifact-scope .router .cell.f { border-color: var(--at-violet); background: var(--at-violet-soft); }
.artifact-scope .router .cell.h { border-color: var(--at-accent); background: var(--at-accent-soft); }
.artifact-scope .router .arr { font-family: var(--at-font-mono); color: var(--at-faint); text-align: center; }

/* framework letters as a chain of chips */
.artifact-scope .chain { display: flex; flex-wrap: wrap; align-items: stretch; justify-content: center; gap: 0.5rem; }
.artifact-scope .chip { flex: 1 1 7rem; min-width: 6.5rem; padding: 0.7rem 0.6rem; border-radius: 8px; border: 1px solid var(--at-line); background: var(--at-inset); text-align: center; }
.artifact-scope .chip .k { display: block; font-family: var(--at-font-display); font-size: 1.6rem; font-weight: 600; line-height: 1; color: var(--at-violet); }
.artifact-scope .chip .w { display: block; font-family: var(--at-font-mono); font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--at-muted); margin-top: 0.4rem; }
.artifact-scope .chip .s { display: block; font-size: 0.86rem; line-height: 1.35; color: var(--at-muted); margin-top: 0.35rem; }
.artifact-scope .chip.pivot { border-color: var(--at-accent); background: var(--at-accent-soft); }
.artifact-scope .chip.pivot .k { color: var(--at-accent); }

/* the governing claim */
.artifact-scope .headline { margin: 1.4rem 0; padding: 1.1rem 1.3rem; border-left: 4px solid var(--at-accent); background: var(--at-accent-soft); border-radius: 0 10px 10px 0; }
.artifact-scope .headline .tagh { display: block; font-family: var(--at-font-mono); font-size: 0.64rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--at-accent); margin-bottom: 0.4rem; }
.artifact-scope .headline .t { font-family: var(--at-font-display); font-size: 1.28rem; line-height: 1.35; font-weight: 600; color: var(--at-text); margin: 0; }

/* the interview question */
.artifact-scope .ask { font-family: var(--at-font-mono); font-size: 0.86rem; color: var(--at-muted); padding: 0.6rem 0.9rem; border: 1px dashed var(--at-line-strong); border-radius: 8px; }
.artifact-scope .ask b { color: var(--at-blue); font-weight: 600; }

/* support rows: letter label + text */
.artifact-scope .support { margin: 0.8rem 0 0; padding: 0; list-style: none; }
.artifact-scope .support li { display: grid; grid-template-columns: 2.6rem 1fr; gap: 0.7rem; align-items: start; padding: 0.55rem 0; border-top: 1px solid var(--at-line); font-size: 0.98rem; line-height: 1.5; color: var(--at-muted); }
.artifact-scope .support li:first-child { border-top: none; }
.artifact-scope .support .k { font-family: var(--at-font-mono); font-size: 0.78rem; letter-spacing: 0.06em; color: var(--at-violet); padding-top: 0.2rem; }
.artifact-scope .support li.pivot .k { color: var(--at-accent); }
.artifact-scope .support li em { color: var(--at-text); font-style: normal; font-weight: 500; }

/* spoken template */
.artifact-scope .tmpl { font-family: var(--at-font-mono); font-size: 0.9rem; line-height: 1.5; padding: 0.8rem 1rem; border-radius: 8px; background: var(--at-inset); border: 1px solid var(--at-line); color: var(--at-text); }
.artifact-scope .tmpl .slot { color: var(--at-amber); }
.artifact-scope .tmpl .lab { display: block; font-size: 0.64rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--at-faint); margin-bottom: 0.3rem; }

/* compress vs avoid */
.artifact-scope .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) { .artifact-scope .two { grid-template-columns: 1fr; } }
.artifact-scope .box { padding: 0.9rem 1.1rem; border-radius: 8px; background: var(--at-inset); border: 1px solid var(--at-line); border-top: 3px solid var(--at-line); font-size: 0.96rem; line-height: 1.5; color: var(--at-muted); }
.artifact-scope .box .h { display: block; font-family: var(--at-font-mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.45rem; }
.artifact-scope .box.good { border-top-color: var(--at-green); }
.artifact-scope .box.good .h { color: var(--at-green); }
.artifact-scope .box.bad { border-top-color: var(--at-amber); }
.artifact-scope .box.bad .h { color: var(--at-amber); }
.artifact-scope .box.blue { border-top-color: var(--at-blue); }
.artifact-scope .box.blue .h { color: var(--at-blue); }
.artifact-scope .box.violet { border-top-color: var(--at-violet); }
.artifact-scope .box.violet .h { color: var(--at-violet); }
.artifact-scope .box p { margin: 0.3rem 0; }

/* timing: 30s vs 90s */
.artifact-scope .clock { display: grid; grid-template-columns: 5rem 1fr; gap: 0.7rem; align-items: start; padding: 0.6rem 0; border-top: 1px solid var(--at-line); font-size: 0.96rem; line-height: 1.5; color: var(--at-muted); }
.artifact-scope .clock:first-child { border-top: none; }
.artifact-scope .clock .t { font-family: var(--at-font-mono); font-size: 0.78rem; color: var(--at-amber); padding-top: 0.2rem; }
.artifact-scope .clock em { color: var(--at-text); font-style: normal; font-weight: 500; }

/* series nav */
.artifact-scope .series { margin-top: 2.2rem; padding: 1rem 1.2rem; border-radius: 10px; border: 1px solid var(--at-line); background: var(--at-surface); font-size: 0.92rem; line-height: 1.55; color: var(--at-muted); }
.artifact-scope .series .lab { display: block; font-family: var(--at-font-mono); font-size: 0.64rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--at-faint); margin-bottom: 0.4rem; }
.artifact-scope .series a { color: var(--at-accent); text-decoration: underline; text-underline-offset: 2px; }
.artifact-scope .series .nav { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; font-family: var(--at-font-mono); font-size: 0.78rem; }

.artifact-scope .crit { width: 100%; border-collapse: collapse; font-size: 0.92rem; line-height: 1.4; }
.artifact-scope .crit th { font-family: var(--at-font-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--at-faint); text-align: left; padding: 0.4rem 0.6rem; border-bottom: 1px solid var(--at-line-strong); }
.artifact-scope .crit th:nth-child(2) { color: var(--at-blue); }
.artifact-scope .crit th:nth-child(3) { color: var(--at-violet); }
.artifact-scope .crit td { padding: 0.45rem 0.6rem; border-bottom: 1px solid var(--at-line); color: var(--at-muted); vertical-align: top; }
.artifact-scope .crit td:first-child { color: var(--at-text); font-weight: 500; white-space: nowrap; }
.artifact-scope .crit tr.flip td:first-child { color: var(--at-accent); }
.artifact-scope .crit td.win { color: var(--at-text); }
.artifact-scope .crit tr.flip td { background: var(--at-accent-soft); }
@media (max-width: 620px) { .artifact-scope .crit { font-size: 0.82rem; } .artifact-scope .crit td:first-child { white-space: normal; } }
`;

export const html = `
<div class="wrap">

  <p class="kicker">Answer frameworks &middot; 6 of 7 &middot; Compare or Choose</p>
  <h1>CTD: Answer X vs Y with a Decision Rule</h1>
  <p class="lede">&ldquo;X or Y?&rdquo; invites a verdict. Give one and you have lost, because the interviewer can always name a context where the other option wins. CTD replaces the verdict with a <em>conditional rule</em> &mdash; and the condition is the whole answer.</p>

  <p>This is the sixth of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. Each one matches a question type, organizes the reasoning, and compresses into one governing sentence you say first. For the Compare type, the sentence has a fixed shape: <strong>choose X when&hellip;; otherwise Y</strong>. Everything before the &ldquo;when&rdquo; is a claim. Everything after it is what makes the claim survive follow-up.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">X VS Y?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">C &rarr; T &rarr; D</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">conditional decision rule</span></div>
    </div>
    <figcaption>The router fires on intent: any question whose best output is a decision between options lands here, however it is worded.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Criteria, Trade-offs, Decision</h2>

  <p>CTD avoids the absolute answer by construction. Pick the criteria that actually decide, show how the options differ on them, then state the decision as a function of context.</p>

  <figure>
    <div class="chain">
      <div class="chip pivot"><span class="k">C</span><span class="w">Criteria</span><span class="s">the few dimensions that actually decide</span></div>
      <div class="chip"><span class="k">T</span><span class="w">Trade-offs</span><span class="s">how the options differ, and what each gives up</span></div>
      <div class="chip"><span class="k">D</span><span class="w">Decision</span><span class="s">which option wins under which context</span></div>
    </div>
    <figcaption>C is the pivot. T and D are only as good as the criteria you chose to compare on.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>Which condition flips the choice?</h2>

  <p>Most X-vs-Y answers list eight criteria and score both options on each. That is a table, not a decision. The pivot question is narrower: <strong>of all the criteria, which one, when it changes, makes the answer change?</strong> That criterion is the &ldquo;when&rdquo; in your headline. The rest are supporting detail.</p>

  <figure>
    <svg viewBox="0 0 640 320" role="img" aria-label="A two-axis plot. Horizontal axis: speed to market and operational simplicity. Vertical axis: control, customization and data constraints. A diagonal boundary splits the plane: managed API below-right, self-host above-left. The boundary is labelled as the condition that flips the choice.">
      <defs>
        <marker id="ct-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <!-- regions -->
      <polygon points="80,40 560,40 560,270 80,270" fill="var(--at-inset)" stroke="none"/>
      <polygon points="80,40 560,40 560,110 80,270" fill="var(--at-violet-soft)" stroke="none"/>
      <polygon points="80,270 560,110 560,270" fill="var(--at-blue-soft)" stroke="none"/>
      <!-- axes -->
      <path d="M80 270 L570 270" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ct-ah)"/>
      <path d="M80 270 L80 30" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ct-ah)"/>
      <text x="325" y="296" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-muted)" letter-spacing="1">SPEED TO MARKET &middot; OPS SIMPLICITY &rarr;</text>
      <text x="60" y="155" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-muted)" letter-spacing="1" transform="rotate(-90 60 155)">CONTROL &middot; CUSTOMIZATION &middot; DATA CONSTRAINTS &rarr;</text>
      <!-- boundary -->
      <path d="M80 270 L560 110" stroke="var(--at-accent)" stroke-width="2.2" stroke-dasharray="7 5"/>
      <rect x="236" y="176" width="200" height="34" rx="6" fill="var(--at-surface)" stroke="var(--at-accent)" stroke-width="1.2"/>
      <text x="336" y="191" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-accent)" letter-spacing="1">THE CONDITION</text>
      <text x="336" y="204" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-accent)" letter-spacing="1">THAT FLIPS THE CHOICE</text>
      <!-- region labels -->
      <text x="150" y="80" font-family="var(--at-font-display)" font-size="17" font-weight="600" fill="var(--at-violet)">Self-host</text>
      <text x="150" y="100" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">control matters more than speed</text>
      <text x="548" y="232" text-anchor="end" font-family="var(--at-font-display)" font-size="17" font-weight="600" fill="var(--at-blue)">Managed API</text>
      <text x="548" y="252" text-anchor="end" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">speed matters more than control</text>
    </svg>
    <figcaption>Neither option is better. The plane is split, and the headline names the line that splits it.</figcaption>
  </figure>

  <ul class="support">
    <li class="pivot"><span class="k">C</span><span><em>Criteria.</em> The dimensions that decide: time to market, ops burden, scale, cost, latency, privacy, customization, control. Then the subset that actually moves the answer.</span></li>
    <li><span class="k">T</span><span><em>Trade-offs.</em> How X and Y differ on those criteria, and what each option pays for its advantage.</span></li>
    <li><span class="k">D</span><span><em>Decision.</em> Not &ldquo;X&rdquo;, but &ldquo;X under these conditions, Y when they reverse&rdquo;.</span></li>
  </ul>

  <p class="kicker">Compression</p>
  <h2>Three letters, one conditional</h2>

  <p>The headline is not the criteria list and not the decision alone. It fuses all three: the deciding criteria become the condition, the trade-off becomes the &ldquo;more than&rdquo;, the decision becomes the two branches. Support then expands each part.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the conditional decision rule at the apex and three support boxes beneath it: Criteria, Trade-offs, Decision.">
      <defs>
        <marker id="ct-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="130" y="22" width="380" height="66" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = C + T + D</text>
      <text x="320" y="68" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">Choose X when A matters more than B; otherwise choose Y.</text>
      <path d="M320 88 L320 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L520 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L120 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ct-ah2)"/>
      <path d="M320 118 L320 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ct-ah2)"/>
      <path d="M520 118 L520 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ct-ah2)"/>
      <rect x="40" y="146" width="160" height="80" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.2"/>
      <text x="120" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-accent)">C &mdash; CRITERIA</text>
      <text x="120" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">supplies &ldquo;A&rdquo; and &ldquo;B&rdquo;,</text>
      <text x="120" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">the when-clause</text>
      <rect x="240" y="146" width="160" height="80" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.2"/>
      <text x="320" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-amber)">T &mdash; TRADE-OFFS</text>
      <text x="320" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">justifies &ldquo;more than&rdquo;:</text>
      <text x="320" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">what each side pays</text>
      <rect x="440" y="146" width="160" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="520" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">D &mdash; DECISION</text>
      <text x="520" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">names both branches:</text>
      <text x="520" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">X here, Y there</text>
    </svg>
    <figcaption>Each letter owns one clause of the headline. If a clause has no letter behind it, the rule is unsupported.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span>Choose <span class="slot">[X]</span> when <span class="slot">[A]</span> matters more than <span class="slot">[B]</span>; otherwise choose <span class="slot">[Y]</span>.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>Fuse C + T + D into one conditional: the deciding criteria as the &ldquo;when&rdquo;, the trade-off as the &ldquo;more than&rdquo;, both options named.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>An absolute verdict (&ldquo;managed APIs are better&rdquo;). It is one counter-example away from collapse, and the interviewer has the counter-example ready.</p></div>
    </div>
    <figcaption>The absolute version is faster to say and impossible to defend.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;Managed API or self-host?&rdquo;</h2>

  <p class="ask"><b>Q:</b> When would you choose a managed model API over self-hosting an open-source model?</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">I would choose a managed API when operational simplicity and speed to market matter more than deep control over the model stack.</p></div>

  <p>Read it against the template. <em>Operational simplicity and speed to market</em> is A. <em>Deep control over the model stack</em> is B. The &ldquo;otherwise&rdquo; is implied and gets said in D. Nothing in the sentence is a verdict; all of it is a rule.</p>

  <ul class="support">
    <li class="pivot"><span class="k">C</span><span>Time to market, ops burden, scale, cost, latency, privacy, customization and control. Of these, speed-versus-control is the axis the answer turns on.</span></li>
    <li><span class="k">T</span><span>Managed removes serving, GPU and upgrade work but gives less control and can cost more at scale. Self-hosting is the mirror image: full control, full ops burden.</span></li>
    <li><span class="k">D</span><span>Self-host when data constraints, customization, control, or scale economics become the dominant factor. Until then, the managed API wins.</span></li>
  </ul>

  <figure>
    <table class="crit">
      <thead><tr><th>Criterion</th><th>Managed API</th><th>Self-host</th></tr></thead>
      <tbody>
        <tr class="flip"><td>Time to market</td><td class="win">days</td><td>weeks to months</td></tr>
        <tr class="flip"><td>Ops burden</td><td class="win">vendor&rsquo;s problem</td><td>your on-call</td></tr>
        <tr><td>Scale</td><td>elastic, metered</td><td class="win">cheaper per token at volume</td></tr>
        <tr><td>Cost</td><td>low fixed, high variable</td><td>high fixed, low variable</td></tr>
        <tr><td>Latency</td><td>network hop, shared</td><td class="win">tunable, colocated</td></tr>
        <tr class="flip"><td>Privacy</td><td>data leaves your boundary</td><td class="win">stays in your VPC</td></tr>
        <tr class="flip"><td>Customization</td><td>prompts, some fine-tuning</td><td class="win">weights, kernels, serving</td></tr>
        <tr class="flip"><td>Control</td><td>vendor cadence</td><td class="win">yours</td></tr>
      </tbody>
    </table>
    <figcaption>Eight criteria, but only the highlighted rows flip the decision. The others explain, they do not decide.</figcaption>
  </figure>

  <p>Notice that the table alone would be a bad answer. It is complete and undecided. The headline is what turns it into a decision; the table only proves the &ldquo;more than&rdquo; was earned.</p>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then the one trade-off that justifies it, then the flip condition in a clause.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, then two or three criteria with how each option pays, then the explicit &ldquo;otherwise&rdquo; branch.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open whichever criterion the interviewer pulls on: cost curves at scale, the privacy boundary, or what &ldquo;control&rdquo; buys in practice.</span></div>
    <figcaption>Same rule at three depths. The condition is always there; only the evidence behind it grows.</figcaption>
  </figure>

  <p>When a question is both a design and a comparison, the frameworks stack. <a class="xref" href="/posts/gfm-design/">GFM</a> decides the architecture; CTD justifies the technology inside it. Use the primary framework for the decision that matters most and borrow the other for support.</p>

  <p class="kicker">Self-check</p>
  <h2>Does the headline contain a &ldquo;when&rdquo;?</h2>

  <p>Run one test before you speak: <strong>is there a &ldquo;when&rdquo; in the sentence?</strong> If not, you have delivered a verdict, and the interviewer&rsquo;s next question will be the context that breaks it. Add the condition. Then run the second test: <strong>could you state the reverse case in one clause?</strong> If you cannot say when Y wins, you have not found the criterion that decides.</p>

  <hr class="rule">

  <p class="close">CTD is not a scoring table. It is a search for the <b>one criterion that flips the answer</b>, and a sentence that names it. Say the rule first, the trade-off second, the reverse case third &mdash; and the interviewer never gets to say <span class="hl">&ldquo;but what about&hellip;&rdquo;</span>, because you already did.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/ocbed-optimize/">Prev: OCBED, Optimize</a></span>
      <span><a href="/posts/star-l-experience/">Next: STAR+L, Experience</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
