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

  <p class="kicker">Answer frameworks &middot; 1 of 7 &middot; Define</p>
  <h1>DMEI: Define a Concept by What Makes It Different</h1>
  <p class="lede">&ldquo;What is X?&rdquo; sounds like the easiest interview question. It is the easiest one to answer badly &mdash; with a dictionary line that names X without <em>separating it from its neighbors</em>. DMEI fixes the first letter, and the headline falls out of it.</p>

  <p>This is the first of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. Each one matches a question type, organizes the reasoning, and compresses into one governing sentence you say first. For the Define type, the compression is almost free: the definition <strong>is</strong> the headline, as long as you write it the right way.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">WHAT IS X?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">D &rarr; M &rarr; E &rarr; I</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">essence, straight from D</span></div>
    </div>
    <figcaption>The router fires on intent, not wording: any question whose best output is a definition lands here.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Definition, Mechanism, Example, Implication</h2>

  <p>DMEI walks a concept from its essence to how it runs to why anyone should care. Three of the four letters are ordinary. The first one is not.</p>

  <figure>
    <div class="chain">
      <div class="chip pivot"><span class="k">D</span><span class="w">Definition</span><span class="s">written as CDM, not copied from a glossary</span></div>
      <div class="chip"><span class="k">M</span><span class="w">Mechanism</span><span class="s">the core flow that makes it work</span></div>
      <div class="chip"><span class="k">E</span><span class="w">Example</span><span class="s">one concrete case, kept short</span></div>
      <div class="chip"><span class="k">I</span><span class="w">Implication</span><span class="s">why it matters in practice</span></div>
    </div>
    <figcaption>D is the pivot. M, E and I only support what D already claims.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>D is not a definition. D is CDM.</h2>

  <p>A glossary definition tells you what X <em>is called</em>. A CDM definition tells you what X <em>is</em> by placing it against the things it gets confused with. Three moves:</p>

  <figure>
    <svg viewBox="0 0 640 300" role="img" aria-label="Category is a large box containing X and its near neighbors; Distinction is the line separating X from the neighbors; Meaning is the arrow leaving X toward what the distinction enables.">
      <defs>
        <marker id="dm-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/>
        </marker>
      </defs>
      <!-- category -->
      <rect x="24" y="40" width="392" height="230" rx="12" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.4"/>
      <text x="40" y="66" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)" letter-spacing="1">C &mdash; CATEGORY: what kind of thing X is</text>
      <!-- neighbors -->
      <rect x="44" y="96" width="140" height="56" rx="8" fill="var(--at-surface)" stroke="var(--at-line)" stroke-width="1.1"/>
      <text x="114" y="120" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">near neighbor A</text>
      <text x="114" y="138" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">same category</text>
      <rect x="44" y="184" width="140" height="56" rx="8" fill="var(--at-surface)" stroke="var(--at-line)" stroke-width="1.1"/>
      <text x="114" y="208" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">near neighbor B</text>
      <text x="114" y="226" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">same category</text>
      <!-- distinction line -->
      <path d="M214 84 L214 256" stroke="var(--at-violet)" stroke-width="2" stroke-dasharray="5 4"/>
      <text x="214" y="270" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-violet)" letter-spacing="1">D &mdash; DISTINCTION</text>
      <!-- X -->
      <rect x="244" y="126" width="150" height="76" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="319" y="158" text-anchor="middle" font-family="var(--at-font-display)" font-size="20" font-weight="600" fill="var(--at-text)">X</text>
      <text x="319" y="180" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-muted)">what it has that A, B lack</text>
      <!-- meaning arrow -->
      <path d="M396 164 L470 164" stroke="var(--at-accent)" stroke-width="1.8" marker-end="url(#dm-ah)"/>
      <rect x="478" y="122" width="140" height="84" rx="9" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.3"/>
      <text x="548" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)" letter-spacing="1">M &mdash; MEANING</text>
      <text x="548" y="172" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">what the distinction</text>
      <text x="548" y="190" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">lets X do</text>
    </svg>
    <figcaption>Category places X. Distinction separates it from its neighbors. Meaning says what that separation buys.</figcaption>
  </figure>

  <ul class="support">
    <li class="pivot"><span class="k">C</span><span><em>Category.</em> What kind of thing X belongs to. This is the noun of your sentence.</span></li>
    <li class="pivot"><span class="k">D</span><span><em>Distinction.</em> Where X differs from the things next to it in that category. This is the relative clause.</span></li>
    <li class="pivot"><span class="k">M</span><span><em>Meaning.</em> What the difference enables. This is the &ldquo;so that&rdquo; at the end.</span></li>
  </ul>

  <p>Put the three together and you get a sentence that already answers the question. That is why DMEI has no separate compression step.</p>

  <p class="kicker">Compression</p>
  <h2>D is already the top of the pyramid</h2>

  <p>Other frameworks have to fuse several letters into a claim. Here the fusion happened inside D. Mechanism, Example and Implication hang underneath as support &mdash; each one proving a part of the sentence you already said.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the CDM definition at the apex and three support boxes beneath it: Mechanism, Example, Implication.">
      <defs>
        <marker id="dm-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="150" y="22" width="340" height="66" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = D (CDM)</text>
      <text x="320" y="68" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">X is a [category] that [distinction], enabling [meaning].</text>
      <path d="M320 88 L320 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L520 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L120 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#dm-ah2)"/>
      <path d="M320 118 L320 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#dm-ah2)"/>
      <path d="M520 118 L520 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#dm-ah2)"/>
      <rect x="40" y="146" width="160" height="80" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="120" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">M &mdash; MECHANISM</text>
      <text x="120" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">proves the distinction</text>
      <text x="120" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">is real</text>
      <rect x="240" y="146" width="160" height="80" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.2"/>
      <text x="320" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)">E &mdash; EXAMPLE</text>
      <text x="320" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">shows the category</text>
      <text x="320" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">in one concrete case</text>
      <rect x="440" y="146" width="160" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="520" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">I &mdash; IMPLICATION</text>
      <text x="520" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">cashes out</text>
      <text x="520" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">the meaning</text>
    </svg>
    <figcaption>No compression function needed: the headline is the definition; the other three letters each defend one part of it.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span>X is a <span class="slot">[category]</span> that <span class="slot">[distinction]</span>, enabling <span class="slot">[meaning]</span>.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>Use D as written. Category is the noun, distinction is the clause, meaning is the payoff. One sentence.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>Repeating a vague dictionary line (&ldquo;an agent harness is a system for running agents&rdquo;) that names X without separating it from anything.</p></div>
    </div>
    <figcaption>The bad version is not wrong. It is empty: the interviewer already knew X was a system.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;What is an agent harness?&rdquo;</h2>

  <p class="ask"><b>Q:</b> What is an agent harness in an agentic AI system?</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">An agent harness is the orchestration system around an LLM that manages the agent loop and turns model decisions into controlled execution.</p></div>

  <p>Read it against CDM. <em>Orchestration system</em> is the category. <em>Around</em> the LLM, not the LLM itself, is the distinction. <em>Controlled execution</em> is what the distinction buys. Everything else in the answer expands one of those three.</p>

  <ul class="support">
    <li class="pivot"><span class="k">D / CDM</span><span>An orchestration system; it wraps the model rather than being the model; the wrapping is what makes the workflow controllable and reliable.</span></li>
    <li><span class="k">M</span><span>Build context &rarr; the LLM decides &rarr; validate and execute the tool &rarr; return the observation &rarr; loop until a stop condition.</span></li>
    <li><span class="k">E</span><span>A scheduling request becomes a tool call; the result is fed back to the model; the loop ends with a success message.</span></li>
    <li><span class="k">I</span><span>The model stops being a text generator and becomes something that can run a stateful, controlled, autonomous workflow.</span></li>
  </ul>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then M in one breath and I in one sentence. Skip the example unless asked.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, then M as a loop, E as a five-second story, I as the payoff. Still no glossary.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open whichever branch the interviewer pulls on: the loop, the validation layer, or why control matters for production.</span></div>
    <figcaption>Same pyramid, three depths. The headline never changes.</figcaption>
  </figure>

  <p class="kicker">Self-check</p>
  <h2>Did you define, or did you label?</h2>

  <p>Before the sentence leaves your mouth, run one test: <strong>could the interviewer name a near neighbor that your definition also fits?</strong> If &ldquo;the LLM itself&rdquo; or &ldquo;a plain function-calling wrapper&rdquo; satisfies your sentence, the distinction is missing and you have labeled, not defined. Add the clause that rules the neighbor out.</p>

  <hr class="rule">

  <p class="close">DMEI looks like four steps. It is really one: write <b>D as category, distinction, meaning</b>, and you have already said the most important sentence. Mechanism proves it, the example shows it, the implication sells it &mdash; but the interviewer heard the answer <span class="hl">before any of them</span>.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/seven-answer-frameworks/">Start of series</a></span>
      <span><a href="/posts/imo-explain/">Next: IMO, Explain</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
