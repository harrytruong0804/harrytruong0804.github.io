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

  <p class="kicker">Answer frameworks &middot; 7 of 7 &middot; Experience</p>
  <h1>STAR+L: Turn a Story into a Judgment</h1>
  <p class="lede">&ldquo;Tell me about a time when&hellip;&rdquo; is not a request for a story. It is a request for evidence about <em>how you decide</em>. STAR+L keeps the story, but moves the thing the story proves to the front &mdash; and that thing is a judgment, not a lesson.</p>

  <p>This is the last of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. The other six compress reasoning into a claim. This one compresses a <strong>narrative</strong> into a claim, which is harder: stories want to be told in order, and order puts the point last. The fix is to decide what the story proves before you tell a single scene of it.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">YOUR STORY?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">S &rarr; T &rarr; A &rarr; R &rarr; L</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">generalized judgment</span></div>
    </div>
    <figcaption>The router fires on intent: any question whose best output is evidence about your judgment lands here.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Situation, Task, Action, Result, Learning</h2>

  <p>STAR is the familiar part. The plus-L is what makes the story admissible as evidence: it names the reusable rule the story demonstrates. Without L, an interviewer hears an anecdote and has to guess what it says about you.</p>

  <figure>
    <div class="chain">
      <div class="chip"><span class="k">S</span><span class="w">Situation</span><span class="s">the minimum context to follow along</span></div>
      <div class="chip"><span class="k">T</span><span class="w">Task</span><span class="s">your responsibility or decision, not the team&rsquo;s</span></div>
      <div class="chip"><span class="k">A</span><span class="w">Action</span><span class="s">what you did and the reasoning behind it</span></div>
      <div class="chip"><span class="k">R</span><span class="w">Result</span><span class="s">an observable outcome</span></div>
      <div class="chip pivot"><span class="k">L</span><span class="w">Learning</span><span class="s">raised into a judgment you can reuse</span></div>
    </div>
    <figcaption>S and T are just enough to understand. A and R carry the proof. L is the pivot, and the headline is built from it.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>Which judgment does this story prove?</h2>

  <p>That is the pivot question, and it is asked <em>before</em> the story, not after. A story proves a judgment when the action shows a rule at work and the result shows the rule paid off. Take the worked example below: the situation had a stable core and uncertain edges, and the action treated the two differently. The judgment is the rule that split them.</p>

  <figure>
    <svg viewBox="0 0 640 330" role="img" aria-label="A timeline of Situation, Task, Action, Result runs along the bottom. Above it, the action is drawn as two regions: a stable core committed hard and uncertain edges kept flexible. An arrow rises from the story to a single judgment box at the top.">
      <defs>
        <marker id="st-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/>
        </marker>
        <marker id="st-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <!-- judgment on top -->
      <rect x="120" y="18" width="400" height="58" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="40" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">JUDGMENT &mdash; what the story proves</text>
      <text x="320" y="61" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">commit in proportion to how stable the assumptions are</text>
      <!-- arrow up from story -->
      <path d="M320 168 L320 84" stroke="var(--at-accent)" stroke-width="1.8" marker-end="url(#st-ah)"/>
      <text x="334" y="130" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-accent)">compress</text>
      <!-- the action drawn as two regions -->
      <rect x="40" y="176" width="240" height="64" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.3"/>
      <text x="160" y="200" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)" letter-spacing="1">STABLE CORE</text>
      <text x="160" y="220" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">agent logic &mdash; commit hard</text>
      <rect x="360" y="176" width="240" height="64" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.3" stroke-dasharray="5 4"/>
      <text x="480" y="200" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-amber)" letter-spacing="1">UNCERTAIN EDGES</text>
      <text x="480" y="220" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">integration, streaming, deploy &mdash; keep loose</text>
      <path d="M284 208 L356 208" stroke="var(--at-violet)" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="320" y="256" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-violet)">the action: split them</text>
      <!-- timeline -->
      <path d="M40 300 L600 300" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#st-ah2)"/>
      <g font-family="var(--at-font-mono)" font-size="10.5">
        <circle cx="90" cy="300" r="5" fill="var(--at-surface)" stroke="var(--at-line-strong)" stroke-width="1.3"/>
        <text x="90" y="322" text-anchor="middle" fill="var(--at-muted)">S</text>
        <circle cx="210" cy="300" r="5" fill="var(--at-surface)" stroke="var(--at-line-strong)" stroke-width="1.3"/>
        <text x="210" y="322" text-anchor="middle" fill="var(--at-muted)">T</text>
        <circle cx="320" cy="300" r="6" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.6"/>
        <text x="320" y="322" text-anchor="middle" fill="var(--at-violet)">A</text>
        <circle cx="450" cy="300" r="5" fill="var(--at-surface)" stroke="var(--at-line-strong)" stroke-width="1.3"/>
        <text x="450" y="322" text-anchor="middle" fill="var(--at-muted)">R</text>
      </g>
      <text x="560" y="290" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">the story, in order</text>
    </svg>
    <figcaption>The story runs left to right. The judgment sits above it and is said first: the action reveals the rule, the result confirms it.</figcaption>
  </figure>

  <ul class="support">
    <li><span class="k">S / T</span><span><em>Context, minimal.</em> Only what the listener needs to see why the decision was hard and why it was yours.</span></li>
    <li><span class="k">A / R</span><span><em>The proof.</em> What you did shows the rule in use; what happened shows the rule was right.</span></li>
    <li class="pivot"><span class="k">L</span><span><em>The rule.</em> Not &ldquo;I learned to communicate more&rdquo; but a condition and a response you would apply again.</span></li>
  </ul>

  <p class="kicker">Compression</p>
  <h2>The headline is not L copied out</h2>

  <p>The tempting shortcut is to say L as the headline. Resist it. Raw L is usually a local reflection (&ldquo;separate the agent from the infra&rdquo;). The headline is the <strong>whole story compressed</strong> into a judgment general enough to apply outside it: when <em>this kind of condition</em> holds, I <em>do this</em>. S, T, A and R then hang underneath as the evidence that you actually behave that way.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the generalized judgment at the apex and three support boxes beneath it: Situation and Task, Action, Result.">
      <defs>
        <marker id="st-ah3" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="150" y="22" width="340" height="66" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = story &rarr; judgment</text>
      <text x="320" y="68" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">When [condition], I [judgment rule].</text>
      <path d="M320 88 L320 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L520 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L120 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#st-ah3)"/>
      <path d="M320 118 L320 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#st-ah3)"/>
      <path d="M520 118 L520 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#st-ah3)"/>
      <rect x="40" y="146" width="160" height="80" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.2"/>
      <text x="120" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)">S / T &mdash; CONTEXT</text>
      <text x="120" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">shows the condition</text>
      <text x="120" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">actually held</text>
      <rect x="240" y="146" width="160" height="80" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="320" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">A &mdash; ACTION</text>
      <text x="320" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">shows the rule</text>
      <text x="320" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">being applied</text>
      <rect x="440" y="146" width="160" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="520" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">R &mdash; RESULT</text>
      <text x="520" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">shows the rule</text>
      <text x="520" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">paid off</text>
    </svg>
    <figcaption>The apex is a rule. Each support box is one piece of evidence that you follow it.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span>When <span class="slot">[condition]</span>, I <span class="slot">[judgment rule]</span>. I learned this when <span class="slot">[the story, briefly]</span>.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>Story &rarr; generalized judgment. Name the condition, name the response, then use S, T, A, R to show it happening once.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>Chronological story first, lesson last. The interviewer spends ninety seconds not knowing what you are demonstrating, and the lesson arrives as an afterthought.</p></div>
    </div>
    <figcaption>Same story, same lesson. The order decides whether it lands as evidence or as an anecdote.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;A decision with incomplete information&rdquo;</h2>

  <p class="ask"><b>Q:</b> Tell me about a time you had to make a technical decision with incomplete information.</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">When information is incomplete, I commit strongly only where requirements are stable and preserve flexibility where uncertainty remains high.</p></div>

  <p>Notice what the headline is not. It is not &ldquo;I once built a digital twin agent.&rdquo; It is not the raw learning either. It is a condition and a rule, and the story below exists to show the rule in action.</p>

  <ul class="support">
    <li><span class="k">S / T</span><span>A digital-twin AI agent. Production integration, streaming and deployment were still changing. I had to choose how far to prototype and what the production structure should be.</span></li>
    <li><span class="k">A</span><span>I separated the relatively stable agent logic from the integration and infrastructure that were not yet settled, and committed hard only to the first.</span></li>
    <li><span class="k">R</span><span>The team kept iterating the core agent while the surrounding system changed around it, with far less rework than a single up-front design would have cost.</span></li>
    <li class="pivot"><span class="k">L</span><span>Distinguish reversible decisions from irreversible ones, and commit in proportion to how stable the underlying assumptions are.</span></li>
  </ul>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then A and R in two sentences. Situation is one clause. Skip the task.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, then S/T in two sentences, A with its rationale, R as an observable outcome, and L restated as the rule you now carry.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open whichever branch is pulled: how you judged what was stable, what you would have done if the split had been wrong, or another time the same rule applied.</span></div>
    <figcaption>Same pyramid, three depths. The judgment never changes; only how much of the story you show.</figcaption>
  </figure>

  <p class="kicker">Self-check</p>
  <h2>Is it a judgment, or still an anecdote?</h2>

  <p>Run one test before you speak: <strong>could a different story prove the same headline?</strong> If a second episode from another project would fit under the same sentence, the headline is general enough to count as judgment. If the sentence only makes sense with this one story attached, it is still an anecdote wearing a lesson &mdash; raise it one level until it becomes a rule.</p>

  <hr class="rule">

  <p class="close">STAR+L is not a storytelling format. It is a way of <b>turning one episode into evidence</b> for a rule you would apply again. Decide the rule first, say it first, and let situation, action and result do what evidence does &mdash; support a claim the interviewer heard <span class="hl">before the story began</span>.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/ctd-compare/">Prev: CTD, Compare</a></span>
      <span><a href="/posts/seven-answer-frameworks/">Back to the overview</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
