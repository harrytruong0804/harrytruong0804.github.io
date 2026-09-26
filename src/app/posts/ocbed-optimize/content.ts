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

`;

export const html = `
<div class="wrap">

  <p class="kicker">Answer frameworks &middot; 5 of 7 &middot; Optimize</p>
  <h1>OCBED: Optimize the Bottleneck, Not the Pipeline</h1>
  <p class="lede">&ldquo;How would you make it faster?&rdquo; invites a list: cache this, batch that, shrink the model. A list proves you have read the tricks. OCBED proves you know <em>which one matters here</em> &mdash; and what you are not allowed to break while applying it.</p>

  <p>This is the fifth of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. Each one matches a question type, organizes the reasoning, and compresses into one governing sentence you say first. For the Optimize type, the sentence is a strategy: a target, a limit, and the one component that decides the outcome.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">HOW IMPROVE?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">O &rarr; C &rarr; B &rarr; E &rarr; D</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">problem frame + direction</span></div>
    </div>
    <figcaption>Any question whose best output is a better number under a limit lands here: latency, cost, throughput, recall.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Objective, Constraints, Bottleneck, Experiments, Decision</h2>

  <p>OCBED turns a bag of techniques into a procedure driven by evidence and limits. Five letters, and the third one is where the answer lives.</p>

  <figure>
    <div class="chain">
      <div class="chip"><span class="k">O</span><span class="w">Objective</span><span class="s">the metric that must move</span></div>
      <div class="chip"><span class="k">C</span><span class="w">Constraints</span><span class="s">the bar you may not drop below</span></div>
      <div class="chip pivot"><span class="k">B</span><span class="w">Bottleneck</span><span class="s">the component that dominates O</span></div>
      <div class="chip"><span class="k">E</span><span class="w">Experiments</span><span class="s">trials aimed only at B</span></div>
      <div class="chip"><span class="k">D</span><span class="w">Decision</span><span class="s">keep the best trade-off</span></div>
    </div>
    <figcaption>B is the pivot. O and C tell you what &ldquo;better&rdquo; means; E and D are how you get there.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>Which bottleneck dominates the objective under the constraint?</h2>

  <p>That is the pivot question, and it has two halves. <strong>Dominates the objective</strong> means: measured, not guessed. A p95 is a sum of stages, and one stage usually owns most of it. <strong>Under the constraint</strong> means: the fix for that stage still has to clear the bar you promised not to lower.</p>

  <figure>
    <svg viewBox="0 0 640 300" role="img" aria-label="A horizontal bar chart of p95 latency per pipeline stage: retrieval, reranking, context construction, time to first token, generation, external calls. Generation is the longest bar and is highlighted. A dashed vertical line on the right is labeled quality threshold.">
      <text x="24" y="24" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-amber)" letter-spacing="1">O &mdash; p95 LATENCY, PROFILED PER STAGE</text>
      <!-- axis -->
      <path d="M190 40 L190 262" stroke="var(--at-line-strong)" stroke-width="1.2"/>
      <!-- rows -->
      <text x="180" y="62" text-anchor="end" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">retrieval</text>
      <rect x="192" y="50" width="86" height="18" rx="3" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1"/>
      <text x="180" y="98" text-anchor="end" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">reranking</text>
      <rect x="192" y="86" width="110" height="18" rx="3" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1"/>
      <text x="180" y="134" text-anchor="end" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">context construction</text>
      <rect x="192" y="122" width="44" height="18" rx="3" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1"/>
      <text x="180" y="170" text-anchor="end" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">time to first token</text>
      <rect x="192" y="158" width="70" height="18" rx="3" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1"/>
      <text x="180" y="206" text-anchor="end" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)" font-weight="600">generation</text>
      <rect x="192" y="194" width="330" height="18" rx="3" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.6"/>
      <text x="530" y="207" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)">B &mdash; dominant</text>
      <text x="180" y="242" text-anchor="end" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">external calls</text>
      <rect x="192" y="230" width="58" height="18" rx="3" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1"/>
      <!-- constraint -->
      <path d="M596 40 L596 262" stroke="var(--at-green)" stroke-width="1.6" stroke-dasharray="5 4"/>
      <text x="596" y="284" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)" letter-spacing="1">C &mdash; QUALITY THRESHOLD</text>
      <text x="24" y="284" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">any change must stay to the left of the line on quality, whatever it does to time</text>
    </svg>
    <figcaption>Five stages are small; one is not. Optimizing the small ones is work; optimizing the big one is the answer. The dashed line is the promise you keep either way.</figcaption>
  </figure>

  <ul class="support">
    <li><span class="k">O</span><span><em>Objective.</em> The number you were asked to move. Name it precisely: p95, not &ldquo;speed.&rdquo;</span></li>
    <li><span class="k">C</span><span><em>Constraint.</em> The number you were told not to move. Also precise: answer quality, reliability, cost ceiling.</span></li>
    <li class="pivot"><span class="k">B</span><span><em>Bottleneck.</em> The stage that owns most of O. Found by profiling, never by reputation.</span></li>
    <li><span class="k">E</span><span><em>Experiments.</em> Only trials that hit B. Caching, trimming, routing and parallelism are candidates, not a plan.</span></li>
    <li><span class="k">D</span><span><em>Decision.</em> The change that moves O the most without crossing C.</span></li>
  </ul>

  <p class="kicker">Compression</p>
  <h2>O + C + B is the strategy. E and D are the execution.</h2>

  <p>The pivot is a single letter, but the headline is not. &ldquo;Generation is the bottleneck&rdquo; is a finding, not a plan. Join it to the objective and the constraint and it becomes a direction: <em>reduce p95 by attacking generation, with quality held fixed.</em> That sentence governs everything underneath. The experiments are its test cases; the decision is its verdict.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the fused Objective, Constraint and Bottleneck claim at the apex, and two support boxes beneath it: Experiments and Decision.">
      <defs>
        <marker id="oc-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="120" y="22" width="400" height="72" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = O + C + B</text>
      <text x="320" y="66" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">improve [objective] by attacking [bottleneck],</text>
      <text x="320" y="83" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">with [constraint] held as a hard limit</text>
      <path d="M320 94 L320 122" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M200 122 L440 122" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M200 122 L200 144" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#oc-ah)"/>
      <path d="M440 122 L440 144" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#oc-ah)"/>
      <rect x="100" y="150" width="200" height="80" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="200" y="176" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">E &mdash; EXPERIMENTS</text>
      <text x="200" y="196" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">trials aimed at the bottleneck,</text>
      <text x="200" y="213" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">each measured against C</text>
      <rect x="340" y="150" width="200" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="440" y="176" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">D &mdash; DECISION</text>
      <text x="440" y="196" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">keep the trial that moves O most</text>
      <text x="440" y="213" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">without crossing C</text>
    </svg>
    <figcaption>Three letters fuse into the apex. The other two prove it was the right direction.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span>I would optimize <span class="slot">[dominant bottleneck]</span> while treating <span class="slot">[constraint]</span> as a hard constraint.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>Fuse objective, constraint and bottleneck into one direction. The bottleneck is measured; the constraint is named; the objective is the number that moves.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>Opening with a list of optimization tricks. &ldquo;I&rsquo;d add caching, trim context, use a smaller model&hellip;&rdquo; is a menu, and a menu is not a decision.</p></div>
    </div>
    <figcaption>The list is not wrong. It is unranked: every item costs something, and nothing in it says which cost you accept.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;Reduce p95 without hurting quality&rdquo;</h2>

  <p class="ask"><b>Q:</b> RAG quality is good, but p95 latency is too high. How would you reduce latency without hurting quality?</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">I would optimize the dominant latency contributor rather than the whole pipeline, while treating answer quality as a hard constraint.</p></div>

  <p>Read it against O, C, B. <em>Latency</em> is the objective. <em>Answer quality as a hard constraint</em> is C. <em>The dominant contributor, not the whole pipeline</em> is B &mdash; stated as a direction even before the profile names the stage. The rest of the answer is how you find the stage and what you try there.</p>

  <ul class="support">
    <li><span class="k">O / C</span><span>Cut p95 while holding quality and reliability where they are.</span></li>
    <li class="pivot"><span class="k">B</span><span>Profile the stages: retrieval, reranking, context construction, time to first token, generation, external calls. Find the one that owns the tail.</span></li>
    <li><span class="k">E</span><span>Try caching, context trimming, model routing, candidate depth or parallelization <em>only at the measured bottleneck</em>.</span></li>
    <li><span class="k">D</span><span>Keep the change that lowers p95 the most without dropping below the quality threshold.</span></li>
  </ul>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then one sentence on profiling and one on the constraint check. No technique names yet.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, the six stages you would profile, two or three experiments you would run at the winner, and the rule for choosing.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open whichever branch the interviewer pulls on: how you measure p95 per stage, what a quality regression test looks like, or why a trick that helps p50 can hurt p95.</span></div>
    <figcaption>Same pyramid, three depths. The headline never changes.</figcaption>
  </figure>

  <p class="kicker">Self-check</p>
  <h2>Did you name a bottleneck, or a technique?</h2>

  <p>Before the sentence leaves your mouth, run one test: <strong>does the headline name a technique before it names the bottleneck?</strong> &ldquo;I&rsquo;d add a cache&rdquo; is a technique looking for a problem. If the technique comes first, you have skipped B and started a trick list. Swap the order: bottleneck, constraint, then the direction the fix must take.</p>

  <hr class="rule">

  <p class="close">OCBED looks like five steps. It is really one question &mdash; <b>which stage owns the number, and what may I not break while fixing it</b> &mdash; asked before any technique is allowed into the room. Experiments test the answer, the decision commits to it, but the interviewer heard the strategy <span class="hl">before the first trick</span>.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/hefr-diagnose/">Prev: HEFR, Diagnose</a></span>
      <span><a href="/posts/ctd-compare/">Next: CTD, Compare</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
