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

  <p class="kicker">Answer frameworks &middot; 4 of 7 &middot; Diagnose</p>
  <h1>HEFR: Frame the Failure Before You Fix It</h1>
  <p class="lede">&ldquo;Why is it failing?&rdquo; invites the worst reflex an engineer has: naming a cause in the first sentence. HEFR replaces the guess with a <em>frame and a direction</em> &mdash; a sentence that says what kind of problem this is and where the evidence will be found.</p>

  <p>This is the fourth of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. The Diagnose type is easy to misroute: &ldquo;How would you debug&hellip;&rdquo; starts with <em>how</em>, but the interviewer wants a diagnosis, not a design. Route on intent. If the best output is a located cause, you are here.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">WHY FAILING?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">H &rarr; E &rarr; F &rarr; R</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">problem frame + direction</span></div>
    </div>
    <figcaption>&ldquo;How would you debug&hellip;&rdquo; lands here too. The verb is <em>how</em>; the intent is <em>why</em>.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Hypotheses, Evidence, Fix, Re-evaluate</h2>

  <p>HEFR exists to stop you from jumping to the fix. You lay out competing causes, use evidence to tell them apart, repair the one that survives, and then prove the repair held.</p>

  <figure>
    <div class="chain">
      <div class="chip pivot"><span class="k">H</span><span class="w">Hypotheses</span><span class="s">the plausible causes that explain the symptom</span></div>
      <div class="chip pivot"><span class="k">E</span><span class="w">Evidence</span><span class="s">tests that separate one hypothesis from the rest</span></div>
      <div class="chip"><span class="k">F</span><span class="w">Fix</span><span class="s">repair the confirmed source, not the suspect</span></div>
      <div class="chip"><span class="k">R</span><span class="w">Re-evaluate</span><span class="s">replay, regression, monitoring</span></div>
    </div>
    <figcaption>H and E are the pivot pair. F and R only exist once evidence has picked a winner.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>Hypotheses compete. Evidence discriminates.</h2>

  <p>A single hypothesis is a guess wearing a lab coat. The value of H is in the plural: several causes that would each explain the symptom. The value of E is in the word <em>discriminating</em>: a test worth running is one whose result looks different under different hypotheses. Ask the pivot question: <strong>what frame makes the isolation direction obvious?</strong></p>

  <figure>
    <svg viewBox="0 0 640 330" role="img" aria-label="Two pipelines, offline and production, drawn as parallel rows of six stages. The first stage where they diverge is highlighted. Below, three hypotheses fan into two discriminating evidence tests.">
      <defs>
        <marker id="he-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
        <marker id="he-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/>
        </marker>
      </defs>
      <!-- row labels -->
      <text x="24" y="52" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)" letter-spacing="1">OFFLINE</text>
      <text x="24" y="122" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-blue)" letter-spacing="1">PROD</text>
      <!-- offline row -->
      <rect x="96" y="34" width="72" height="30" rx="6" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.1"/>
      <text x="132" y="53" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">preproc</text>
      <rect x="184" y="34" width="72" height="30" rx="6" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.1"/>
      <text x="220" y="53" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">retrieval</text>
      <rect x="272" y="34" width="72" height="30" rx="6" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.1"/>
      <text x="308" y="53" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">rerank</text>
      <rect x="360" y="34" width="72" height="30" rx="6" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.1"/>
      <text x="396" y="53" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">context</text>
      <rect x="448" y="34" width="72" height="30" rx="6" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.1"/>
      <text x="484" y="53" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">model</text>
      <rect x="536" y="34" width="72" height="30" rx="6" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.1"/>
      <text x="572" y="53" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">output</text>
      <!-- prod row -->
      <rect x="96" y="104" width="72" height="30" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.1"/>
      <text x="132" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">preproc</text>
      <rect x="184" y="104" width="72" height="30" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="220" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">retrieval</text>
      <rect x="272" y="104" width="72" height="30" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.1"/>
      <text x="308" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">rerank</text>
      <rect x="360" y="104" width="72" height="30" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.1"/>
      <text x="396" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">context</text>
      <rect x="448" y="104" width="72" height="30" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.1"/>
      <text x="484" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">model</text>
      <rect x="536" y="104" width="72" height="30" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.1"/>
      <text x="572" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">output</text>
      <!-- compare ticks -->
      <path d="M132 66 L132 102" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="3 3"/>
      <path d="M308 66 L308 102" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="3 3"/>
      <path d="M396 66 L396 102" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="3 3"/>
      <path d="M484 66 L484 102" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="3 3"/>
      <path d="M572 66 L572 102" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="132" y="88" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-green)">=</text>
      <!-- divergence -->
      <path d="M220 66 L220 102" stroke="var(--at-accent)" stroke-width="2"/>
      <text x="220" y="88" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" font-weight="600" fill="var(--at-accent)">&ne;</text>
      <path d="M220 136 L220 158" stroke="var(--at-accent)" stroke-width="1.6" marker-end="url(#he-ah2)"/>
      <text x="220" y="176" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">FIRST DIVERGENCE</text>
      <text x="220" y="190" text-anchor="middle" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">stop comparing here; everything downstream inherits it</text>
      <!-- hypotheses -> evidence -->
      <text x="24" y="232" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-violet)" letter-spacing="1">H</text>
      <rect x="44" y="216" width="120" height="26" rx="6" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.1"/>
      <text x="104" y="233" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">stale index</text>
      <rect x="44" y="254" width="120" height="26" rx="6" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.1"/>
      <text x="104" y="271" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">query shift</text>
      <rect x="44" y="292" width="120" height="26" rx="6" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.1"/>
      <text x="104" y="309" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">version mismatch</text>
      <path d="M166 229 L250 249" stroke="var(--at-line-strong)" stroke-width="1.1" marker-end="url(#he-ah)"/>
      <path d="M166 267 L250 258" stroke="var(--at-line-strong)" stroke-width="1.1" marker-end="url(#he-ah)"/>
      <path d="M166 305 L250 286" stroke="var(--at-line-strong)" stroke-width="1.1" marker-end="url(#he-ah)"/>
      <text x="270" y="232" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-amber)" letter-spacing="1">E &mdash; discriminating tests</text>
      <rect x="258" y="240" width="350" height="30" rx="6" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.1"/>
      <text x="433" y="259" text-anchor="middle" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-text)">replay the same query through both; diff the retrieved set</text>
      <rect x="258" y="278" width="350" height="30" rx="6" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.1"/>
      <text x="433" y="297" text-anchor="middle" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-text)">pin index snapshot and model version; rerun</text>
    </svg>
    <figcaption>Two pipelines, six stages. Walk them in lockstep and stop at the first &ne;. The hypotheses only earn a fix once a test has told them apart.</figcaption>
  </figure>

  <ul class="support">
    <li class="pivot"><span class="k">H</span><span><em>Plural causes.</em> If you can only think of one, you have not diagnosed; you have decided.</span></li>
    <li class="pivot"><span class="k">E</span><span><em>Discriminating tests.</em> A test that comes out the same under every hypothesis teaches nothing. Prefer the one that splits the list.</span></li>
    <li><span class="k">F</span><span><em>Fix the confirmed source.</em> Not the most likely one, not the easiest one.</span></li>
    <li><span class="k">R</span><span><em>Prove recovery.</em> Replay the failing cases, run regression, watch production. A fix without R is another hypothesis.</span></li>
  </ul>

  <p class="kicker">Compression</p>
  <h2>Symptom plus H/E becomes a frame and a direction</h2>

  <p>The headline is not a hypothesis promoted to a conclusion. It fuses the symptom with what your hypotheses have in common: the <em>kind</em> of problem this is, and the direction that isolates it fastest. F and R stay underneath; they are what you do after the evidence speaks.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the problem frame and diagnostic direction at the apex, and three support boxes beneath: Hypotheses, Evidence, Fix and Re-evaluate.">
      <defs>
        <marker id="he-ah3" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="130" y="22" width="380" height="66" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = SYMPTOM + H/E</text>
      <text x="320" y="68" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">I would treat this as [frame] and [direction].</text>
      <path d="M320 88 L320 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L520 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L120 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#he-ah3)"/>
      <path d="M320 118 L320 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#he-ah3)"/>
      <path d="M520 118 L520 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#he-ah3)"/>
      <rect x="40" y="146" width="160" height="80" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="120" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">H &mdash; HYPOTHESES</text>
      <text x="120" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">the candidates</text>
      <text x="120" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">the frame covers</text>
      <rect x="240" y="146" width="160" height="80" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.2"/>
      <text x="320" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-amber)">E &mdash; EVIDENCE</text>
      <text x="320" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">how the direction</text>
      <text x="320" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">is walked</text>
      <rect x="440" y="146" width="160" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="520" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">F / R &mdash; FIX, RECHECK</text>
      <text x="520" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">what happens once</text>
      <text x="520" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">evidence picks one</text>
    </svg>
    <figcaption>The apex commits to a frame and a direction. It commits to nothing about the cause.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span>I would treat this as <span class="slot">[problem frame]</span> and <span class="slot">[diagnostic direction]</span>.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>Symptom + H/E &rarr; a problem frame and the direction that isolates the cause. The sentence survives whichever hypothesis wins.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>Promoting a hypothesis to a conclusion before evidence: &ldquo;It&rsquo;s probably a stale index.&rdquo; If you are wrong, the rest of the answer is stranded.</p></div>
    </div>
    <figcaption>The bad version sounds decisive. It is a coin flip with a confident voice.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;Production quality dropped. Offline is fine.&rdquo;</h2>

  <p class="ask"><b>Q:</b> Production RAG quality drops, but offline evaluation remains normal. How would you investigate?</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">I would treat this as a production-offline divergence problem and locate the first point where the two pipelines behave differently.</p></div>

  <p>Read it against the frame. <em>Divergence problem</em> names the kind of failure: the same system gives two answers, so the cause is a difference, not a defect. <em>First point where they differ</em> is the direction: walk both pipelines in lockstep and stop at the first mismatch. No cause is named. Every hypothesis below still fits.</p>

  <ul class="support">
    <li class="pivot"><span class="k">H</span><span>Query distribution shifted; index is stale; a filter differs; model or embedding version mismatch; preprocessing differs; timeouts trigger a fallback path.</span></li>
    <li class="pivot"><span class="k">E</span><span>Replay the same queries through both and compare stage by stage: preprocessing, retrieval, reranking, context, model, output. The first stage with a different output is the suspect.</span></li>
    <li><span class="k">F / R</span><span>Fix the first divergence; replay the failing cases; run regression; keep watching production until the metric recovers and stays.</span></li>
  </ul>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then two or three hypotheses in one breath and the stage-by-stage replay as the test. Stop.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, the full H list grouped (data, config, version, fallback), the replay as E, and one sentence on F/R: fix the divergence, replay, regress, monitor.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open the branch the interviewer pulls: why lockstep replay beats log reading, how to pin versions, what &ldquo;recovered&rdquo; means as a metric.</span></div>
    <figcaption>Same frame, three depths. The cause is never in the headline at any depth.</figcaption>
  </figure>

  <p class="kicker">Self-check</p>
  <h2>Is that a frame, or a guess with good posture?</h2>

  <p>Before the sentence leaves your mouth, run one test: <strong>does the headline name a cause you have not verified?</strong> &ldquo;It&rsquo;s the index&rdquo; is a guess. &ldquo;It&rsquo;s a divergence; find the first mismatch&rdquo; is a frame. The frame stays true no matter which hypothesis the evidence picks. The guess is true one time in six.</p>

  <hr class="rule">

  <p class="close">HEFR looks like a debugging checklist. It is really a rule about the first sentence: <b>name the kind of problem and where to look</b>, not what broke. Hypotheses give you the candidates, evidence picks one, the fix and the recheck close it out &mdash; but the interviewer heard your judgment <span class="hl">before you had to be right</span>.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/gfm-design/">Prev: GFM, Design</a></span>
      <span><a href="/posts/ocbed-optimize/">Next: OCBED, Optimize</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
