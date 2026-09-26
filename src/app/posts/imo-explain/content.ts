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

.artifact-scope table.ex { width: 100%; border-collapse: collapse; font-size: 0.92rem; line-height: 1.45; color: var(--at-muted); }
.artifact-scope table.ex th { font-family: var(--at-font-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--at-faint); text-align: left; padding: 0 0.6rem 0.5rem; border-bottom: 1px solid var(--at-line-strong); }
.artifact-scope table.ex td { padding: 0.6rem 0.6rem; border-top: 1px solid var(--at-line); vertical-align: top; }
.artifact-scope table.ex tr:first-child td { border-top: none; }
.artifact-scope table.ex td:first-child { font-weight: 500; color: var(--at-text); white-space: nowrap; }
.artifact-scope table.ex td:nth-child(2) { color: var(--at-text); }
.artifact-scope table.ex td.mono { font-family: var(--at-font-mono); font-size: 0.78rem; color: var(--at-violet); }
@media (max-width: 620px) {
.artifact-scope table.ex thead { display: none; }
.artifact-scope table.ex tr { display: block; padding: 0.6rem 0; border-top: 1px solid var(--at-line); }
.artifact-scope table.ex td { display: block; border-top: none; padding: 0.15rem 0; }
.artifact-scope table.ex td:first-child { font-family: var(--at-font-mono); font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--at-blue); }
}
`;

export const html = `
<div class="wrap">

  <p class="kicker">Answer frameworks &middot; 2 of 7 &middot; Explain</p>
  <h1>IMO: Explain with One Causal Claim</h1>
  <p class="lede">&ldquo;How does X work?&rdquo; and &ldquo;Why does X help?&rdquo; are the same question wearing two coats. Both want a <em>cause</em>. The trap is to recite the mechanism and never say what it changes. IMO forces the link, then compresses it into one sentence.</p>

  <p>This is the second of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. The Define framework got its headline for free, because a good definition already is one. Explain does not. Here you have to fuse three letters into a single causal claim before you open your mouth.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">HOW OR WHY X?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">I &rarr; M &rarr; O</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">causal claim</span></div>
    </div>
    <figcaption>The router fires on intent: if the best output is a cause, you are here, whatever verb the question used.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Input, Mechanism, Output</h2>

  <p>IMO makes a causal chain explicit: what state you start from, what acts on it, and what comes out changed. Three letters, one arrow between each.</p>

  <figure>
    <div class="chain">
      <div class="chip"><span class="k">I</span><span class="w">Input</span><span class="s">the starting state, before anything acts on it</span></div>
      <div class="chip pivot"><span class="k">M</span><span class="w">Mechanism</span><span class="s">the transformation that produces the change</span></div>
      <div class="chip"><span class="k">O</span><span class="w">Output</span><span class="s">the effect you were asked to explain</span></div>
    </div>
    <figcaption>M is the pivot. But the headline is not M alone; it is the arrow from I through M to O.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>M is where the explanation lives</h2>

  <p>Input and output are usually given by the question. &ldquo;Why does reranking improve retrieval?&rdquo; already hands you I (a retrieved candidate set) and O (better retrieval). The only thing the interviewer does not know is M. So the pivot question is:</p>

  <figure>
    <svg viewBox="0 0 640 210" role="img" aria-label="Input box on the left, output box on the right, and a highlighted mechanism box in the middle with the pivot question written above it.">
      <defs>
        <marker id="im-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <text x="320" y="30" text-anchor="middle" font-family="var(--at-font-display)" font-size="15" font-weight="600" fill="var(--at-text)">What mechanism makes the output follow the input?</text>
      <!-- input -->
      <rect x="24" y="70" width="160" height="90" rx="9" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.4"/>
      <text x="104" y="98" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)" letter-spacing="1">I &mdash; INPUT</text>
      <text x="104" y="122" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">given by the question</text>
      <text x="104" y="140" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">known to both of you</text>
      <path d="M186 115 L228 115" stroke="var(--at-line-strong)" stroke-width="1.4" marker-end="url(#im-ah)"/>
      <!-- mechanism -->
      <rect x="236" y="58" width="168" height="114" rx="10" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="2"/>
      <text x="320" y="88" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-accent)" letter-spacing="1">M &mdash; MECHANISM</text>
      <text x="320" y="114" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">the one thing</text>
      <text x="320" y="132" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">they do not know</text>
      <text x="320" y="154" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-muted)">the explanation</text>
      <path d="M406 115 L448 115" stroke="var(--at-line-strong)" stroke-width="1.4" marker-end="url(#im-ah)"/>
      <!-- output -->
      <rect x="456" y="70" width="160" height="90" rx="9" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.4"/>
      <text x="536" y="98" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)" letter-spacing="1">O &mdash; OUTPUT</text>
      <text x="536" y="122" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">given by the question</text>
      <text x="536" y="140" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">the effect to explain</text>
    </svg>
    <figcaption>The question supplies the ends of the chain. Your answer supplies the middle, and the headline must connect all three.</figcaption>
  </figure>

  <p>That is also the trap. Because M is the interesting part, the reflex is to narrate it: &ldquo;the reranker takes the top-k, applies a cross-encoder, scores each pair&hellip;&rdquo; True, and useless as a headline, because it never reaches O. A mechanism recital tells the interviewer <em>what happens</em>. A causal claim tells them <em>why the effect follows</em>.</p>

  <p class="kicker">Compression</p>
  <h2>Fuse I + M + O into one causal claim</h2>

  <p>The headline names the effect and gives the mechanism as its reason, in one sentence. Then I, M and O each expand one clause of it underneath.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the fused causal claim at the apex and three support boxes beneath it: Input, Mechanism, Output.">
      <defs>
        <marker id="im-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="150" y="22" width="340" height="66" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = I + M + O</text>
      <text x="320" y="68" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">X improves Y because [mechanism linking input to output].</text>
      <path d="M320 88 L320 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L520 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L120 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#im-ah2)"/>
      <path d="M320 118 L320 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#im-ah2)"/>
      <path d="M520 118 L520 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#im-ah2)"/>
      <rect x="40" y="146" width="160" height="80" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.2"/>
      <text x="120" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)">I &mdash; INPUT</text>
      <text x="120" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">what was wrong or</text>
      <text x="120" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">missing before</text>
      <rect x="240" y="146" width="160" height="80" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="320" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">M &mdash; MECHANISM</text>
      <text x="320" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">the transformation,</text>
      <text x="320" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">now in detail</text>
      <rect x="440" y="146" width="160" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="520" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">O &mdash; OUTPUT</text>
      <text x="520" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">the effect, and what</text>
      <text x="520" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">it buys downstream</text>
    </svg>
    <figcaption>The apex is not a copy of M. It is the reason O appears when M acts on I.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span><span class="slot">[X]</span> improves <span class="slot">[Y]</span> because <span class="slot">[mechanism linking input to output]</span>.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>I + M + O &rarr; one causal claim: why the output shows up when the mechanism acts on the input.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>Narrating the mechanism step by step and never connecting it to the effect. Accurate, and not an answer.</p></div>
    </div>
    <figcaption>The test is the word &ldquo;because&rdquo;. If your first sentence has no reason in it, it is a description, not an explanation.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;Why does reranking improve retrieval?&rdquo;</h2>

  <p class="ask"><b>Q:</b> Why does reranking improve retrieval quality in a RAG system?</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">Reranking improves retrieval because it separates fast candidate recall from more precise relevance scoring.</p></div>

  <p>The mechanism is in the sentence, but as a <em>reason</em>, not a procedure. Recall and precision are pulled apart into two stages, and that separation is what lets the second stage be expensive and accurate on a small set. Everything below expands one clause.</p>

  <ul class="support">
    <li><span class="k">I</span><span>The retriever returns a candidate set with decent recall, but the ordering inside it is not accurate.</span></li>
    <li class="pivot"><span class="k">M</span><span>The reranker applies a more precise query&ndash;document comparison, affordable only because the set is small.</span></li>
    <li><span class="k">O</span><span>The relevant evidence moves to the top, and the context handed to the LLM gets better.</span></li>
  </ul>

  <p>The same compression works on any Explain question. Four more, each with the fused logic beside it:</p>

  <figure>
    <table class="ex">
      <thead><tr><th>Topic</th><th>Causal headline</th><th>Compressed logic</th></tr></thead>
      <tbody>
        <tr><td>Hybrid search</td><td>Hybrid search improves retrieval because lexical and semantic signals cover complementary failure modes.</td><td class="mono">exact match + semantic similarity &rarr; more robust retrieval</td></tr>
        <tr><td>Reranking</td><td>Reranking separates broad candidate recall from precise relevance scoring.</td><td class="mono">fast first stage + precise second stage &rarr; better ranking</td></tr>
        <tr><td>Caching</td><td>Caching reduces latency by replacing repeated expensive computation or I/O with a much cheaper lookup.</td><td class="mono">recomputation &rarr; cache hit &rarr; less critical-path work</td></tr>
        <tr><td>Batch normalization</td><td>Batch normalization makes training easier by making optimization less sensitive to changing activation scales.</td><td class="mono">normalize + learned scale/shift &rarr; steadier updates</td></tr>
      </tbody>
    </table>
    <figcaption>Every headline has a &ldquo;because&rdquo; or a &ldquo;by&rdquo;. Every compressed logic has an arrow that ends at the effect.</figcaption>
  </figure>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then one sentence on I (what was weak) and one on O (what improves). M is already in the headline.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, then I, then M opened into its two stages, then O with what it buys the generator.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open whichever clause the interviewer pulls on: why first-stage recall is cheap, why cross-encoders are precise, or what changes downstream.</span></div>
    <figcaption>Same causal claim at every depth. Only the amount of M changes.</figcaption>
  </figure>

  <p class="kicker">Self-check</p>
  <h2>Did you explain, or did you describe?</h2>

  <p>Before the sentence leaves your mouth, run one test: <strong>delete the mechanism clause and read what is left.</strong> If the remainder is &ldquo;reranking improves retrieval&rdquo;, you restated the question. Now delete the effect instead. If what is left is a procedure with no consequence, you described. A real IMO headline breaks both ways: take out either end and the sentence stops making sense.</p>

  <hr class="rule">

  <p class="close">IMO looks like a pipeline. It is really a sentence with a <b>because</b> in it. The input and output were handed to you by the question; the mechanism is yours to supply, but only as the <span class="hl">reason the effect follows</span>, never as a tour of the machinery.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/dmei-define/">Prev: DMEI, Define</a></span>
      <span><a href="/posts/gfm-design/">Next: GFM, Design</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
