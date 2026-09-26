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

.artifact-scope .dl { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin: 1.6rem 0; padding: 1rem 1.2rem; border-radius: 10px; border: 1px solid var(--at-accent); background: var(--at-accent-soft); }
.artifact-scope .dl .btn { display: inline-block; font-family: var(--at-font-mono); font-size: 0.82rem; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.55rem 0.95rem; border-radius: 6px; background: var(--at-accent); color: var(--at-bg); text-decoration: none; white-space: nowrap; }
.artifact-scope .dl .note { font-size: 0.94rem; line-height: 1.45; color: var(--at-muted); margin: 0; flex: 1 1 16rem; }
.artifact-scope .map { width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.4; }
.artifact-scope .map th { font-family: var(--at-font-mono); font-size: 0.64rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--at-faint); text-align: left; padding: 0.4rem 0.5rem; border-bottom: 1px solid var(--at-line-strong); }
.artifact-scope .map td { padding: 0.55rem 0.5rem; border-bottom: 1px solid var(--at-line); vertical-align: top; color: var(--at-muted); }
.artifact-scope .map td.cue { font-family: var(--at-font-mono); font-size: 0.78rem; color: var(--at-blue); white-space: nowrap; }
.artifact-scope .map td.fw a { font-family: var(--at-font-mono); font-size: 0.82rem; font-weight: 600; color: var(--at-accent); text-decoration: underline; text-underline-offset: 2px; white-space: nowrap; }
.artifact-scope .map td.fw .n { display: block; font-size: 0.82rem; color: var(--at-faint); font-family: var(--at-font-mono); }
.artifact-scope .map td.say { font-style: italic; color: var(--at-text); }
@media (max-width: 620px) {
  .artifact-scope .map thead { display: none; }
  .artifact-scope .map tr { display: block; padding: 0.6rem 0; border-bottom: 1px solid var(--at-line); }
  .artifact-scope .map td { display: block; border: none; padding: 0.15rem 0; }
  .artifact-scope .map td.cue { white-space: normal; }
}
.artifact-scope .stages { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; }
@media (max-width: 620px) { .artifact-scope .stages { grid-template-columns: 1fr 1fr; } }
.artifact-scope .stage { padding: 0.8rem 0.8rem; border-radius: 8px; border: 1px solid var(--at-line); background: var(--at-inset); font-size: 0.86rem; line-height: 1.4; color: var(--at-muted); }
.artifact-scope .stage .n { display: block; font-family: var(--at-font-display); font-size: 1.4rem; font-weight: 600; color: var(--at-violet); line-height: 1; }
.artifact-scope .stage .h { display: block; font-family: var(--at-font-mono); font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--at-text); margin: 0.35rem 0 0.4rem; }
.artifact-scope .stage .flow { display: block; font-family: var(--at-font-mono); font-size: 0.72rem; color: var(--at-faint); margin-bottom: 0.4rem; }
.artifact-scope .stage.last { border-color: var(--at-accent); background: var(--at-accent-soft); }
.artifact-scope .stage.last .n { color: var(--at-accent); }
.artifact-scope .samples { margin: 0; padding: 0; list-style: none; }
.artifact-scope .samples li { display: grid; grid-template-columns: 6.2rem 1fr; gap: 0.7rem; padding: 0.55rem 0; border-top: 1px solid var(--at-line); font-size: 0.96rem; line-height: 1.5; color: var(--at-text); }
.artifact-scope .samples li:first-child { border-top: none; }
.artifact-scope .samples .k { font-family: var(--at-font-mono); font-size: 0.76rem; letter-spacing: 0.06em; padding-top: 0.2rem; }
.artifact-scope .samples .k a { color: var(--at-accent); text-decoration: underline; text-underline-offset: 2px; }
.artifact-scope .final { margin: 1.4rem 0 0; padding: 1.2rem 1.4rem; border-radius: 10px; background: var(--at-accent); color: var(--at-bg); font-family: var(--at-font-display); font-size: 1.22rem; line-height: 1.4; font-weight: 600; }
`;

export const html = `
<div class="wrap">

  <p class="kicker">Answer frameworks &middot; Overview</p>
  <h1>Seven Question Types, Seven Frameworks, One Headline</h1>
  <p class="lede">Every technical interview question is asking for one of seven outputs: a definition, a cause, a design, a diagnosis, an optimization, a decision, or a judgment. Name the output, pick the matching framework, then <em>compress it into one sentence and say that first</em>.</p>

  <p>The frameworks are not the point. They are scaffolding for practice and a recovery ladder when you freeze. In the room, the goal is a headline that lands before any acronym does, with the reasoning unfolding behind it only as far as the interviewer pulls.</p>

  <div class="dl">
    <a class="btn" href="/downloads/seven-answer-frameworks.pdf" download>Download the PDF</a>
    <p class="note">The full framework in one document: router map, compression rules, the seven worked examples, the practice ladder, and a one-page cheat sheet. English, 10 pages.</p>
  </div>

  <div class="headline"><span class="tagh">The governing claim</span><p class="t">A framework is scaffolding for practice and a fallback when you get stuck. In the interview, produce the headline first and unfold the reasoning behind it.</p></div>

  <p class="kicker">Mental model</p>
  <h2>Two loops: one in your head, one out loud</h2>

  <p>The silent loop classifies the question and organizes the reasoning. The spoken loop starts only once the reasoning has been compressed. Nothing from the silent loop should leak out as a checklist.</p>

  <figure>
    <svg viewBox="0 0 640 280" role="img" aria-label="Question flows into a router, then a framework, then a compression step, which emits a headline; the headline expands into evidence, mechanism, trade-off or story. The first three steps are marked silent, the last two spoken.">
      <defs>
        <marker id="ov-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/></marker>
        <marker id="ov-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/></marker>
      </defs>
      <!-- silent band -->
      <rect x="20" y="30" width="392" height="110" rx="10" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
      <text x="36" y="52" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)" letter-spacing="1.5">IN YOUR HEAD</text>
      <rect x="36" y="70" width="100" height="50" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
      <text x="86" y="100" text-anchor="middle" font-family="var(--at-font-body)" font-size="13" fill="var(--at-text)">Question</text>
      <path d="M140 95 L162 95" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ov-ah)"/>
      <rect x="168" y="70" width="100" height="50" rx="8" fill="var(--at-surface)" stroke="var(--at-violet)" stroke-width="1.3"/>
      <text x="218" y="92" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">ROUTER</text>
      <text x="218" y="108" text-anchor="middle" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">which of 7?</text>
      <path d="M272 95 L294 95" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ov-ah)"/>
      <rect x="300" y="70" width="100" height="50" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.3"/>
      <text x="350" y="92" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">FRAMEWORK</text>
      <text x="350" y="108" text-anchor="middle" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">fill with keywords</text>
      <!-- compress -->
      <path d="M350 120 L350 158" stroke="var(--at-accent)" stroke-width="1.8" marker-end="url(#ov-ah2)"/>
      <text x="362" y="146" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">COMPRESS</text>
      <!-- spoken band -->
      <rect x="20" y="164" width="600" height="96" rx="10" fill="var(--at-surface)" stroke="var(--at-line)" stroke-width="1"/>
      <text x="36" y="186" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)" letter-spacing="1.5">OUT LOUD</text>
      <rect x="200" y="196" width="300" height="50" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="350" y="216" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-accent)" letter-spacing="1">HEADLINE</text>
      <text x="350" y="234" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">one governing sentence, said first</text>
      <path d="M504 221 L528 221" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ov-ah)"/>
      <text x="534" y="216" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">then expand:</text>
      <text x="534" y="232" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">evidence, mechanism,</text>
      <text x="534" y="248" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">trade-off or story</text>
    </svg>
    <figcaption>Router and framework stay silent. Only the compressed claim and its expansion are spoken.</figcaption>
  </figure>

  <p class="kicker">The map</p>
  <h2>Seven cues, seven frameworks, seven headline shapes</h2>

  <p>The router does not need to parse every word. It needs the question&rsquo;s main purpose. Each row below is its own post, with the framework, the compression rule, and a worked example.</p>

  <figure>
    <table class="map">
      <thead><tr><th>Cue</th><th>Framework</th><th>Headline shape</th><th>Opens with</th></tr></thead>
      <tbody>
        <tr><td class="cue">WHAT IS X?</td><td class="fw"><a href="/posts/dmei-define/">DMEI</a><span class="n">Define</span></td><td>Essence, straight from D written as category, distinction, meaning</td><td class="say">X is essentially&hellip;</td></tr>
        <tr><td class="cue">HOW OR WHY X?</td><td class="fw"><a href="/posts/imo-explain/">IMO</a><span class="n">Explain</span></td><td>Causal claim</td><td class="say">X works because&hellip;</td></tr>
        <tr><td class="cue">HOW BUILD X?</td><td class="fw"><a href="/posts/gfm-design/">GFM</a><span class="n">Design</span></td><td>Design principle</td><td class="say">The key design principle is&hellip;</td></tr>
        <tr><td class="cue">WHY FAILING?</td><td class="fw"><a href="/posts/hefr-diagnose/">HEFR</a><span class="n">Diagnose</span></td><td>Problem frame + diagnostic direction</td><td class="say">I would treat this as&hellip; and locate&hellip;</td></tr>
        <tr><td class="cue">HOW IMPROVE?</td><td class="fw"><a href="/posts/ocbed-optimize/">OCBED</a><span class="n">Optimize</span></td><td>Problem frame + optimization direction</td><td class="say">I would optimize&hellip; while&hellip;</td></tr>
        <tr><td class="cue">X VS Y?</td><td class="fw"><a href="/posts/ctd-compare/">CTD</a><span class="n">Compare or choose</span></td><td>Conditional decision rule</td><td class="say">Choose X when&hellip;; otherwise&hellip;</td></tr>
        <tr><td class="cue">YOUR STORY?</td><td class="fw"><a href="/posts/star-l-experience/">STAR+L</a><span class="n">Experience</span></td><td>Generalized judgment or takeaway</td><td class="say">When&hellip;, I&hellip;; this taught me&hellip;</td></tr>
      </tbody>
    </table>
    <figcaption>Click a framework to open its post. The cue is the intent, not the verb on the surface.</figcaption>
  </figure>

  <p><strong>When a question looks hybrid,</strong> route on the intent the interviewer wants to grade. &ldquo;How would you debug&hellip;&rdquo; is Diagnose, not Design. If a question both designs and compares, let the primary framework own the decision and borrow the second for support: GFM sets the architecture, CTD justifies the technology choice. Still unsure? Ask which output would be the best answer: a definition, a cause, a design, a diagnosis, an optimization, a decision, or evidence of judgment.</p>

  <p class="kicker">Compression</p>
  <h2>The headline is the top of the pyramid</h2>

  <p>The <a class="xref" href="/posts/pyramid-principle/">Pyramid Principle</a> says lead with the conclusion and group support beneath it. Here the top of the pyramid and the headline are one thing: the shortest sentence that still carries the framework&rsquo;s core logic and could regenerate the support below it.</p>

  <figure>
    <div class="two">
      <div class="box blue"><span class="h">Answer-first</span><p>It answers exactly what was asked. No context, no checklist, no &ldquo;there are several factors&rdquo;.</p></div>
      <div class="box violet"><span class="h">Governing</span><p>Every point below it explains, proves, or elaborates the headline. Nothing sits beside it.</p></div>
      <div class="box good"><span class="h">Generative</span><p>From the headline you can rebuild the main reasoning. Too generic means not compressed enough.</p></div>
      <div class="box bad"><span class="h">The trap</span><p>Reading the acronym out loud. The framework is how you found the sentence, not what you say.</p></div>
    </div>
    <figcaption>Three standards for the sentence, and the one way people fail all three at once.</figcaption>
  </figure>

  <p>Compression is not picking one box. Each framework has a pivot letter you remember it by, but the headline fuses a relation across boxes. OCBED pivots on the bottleneck, yet the headline must join objective, constraint and bottleneck into one strategy. IMO pivots on the mechanism, yet the headline must say why that mechanism turns the input into the output.</p>

  <figure>
    <svg viewBox="0 0 640 300" role="img" aria-label="Seven small pyramids side by side. Each has a headline at its apex, formed by fusing specific letters of its framework, with the remaining letters as support below.">
      <defs>
        <marker id="ov-ah3" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill="var(--at-accent)"/></marker>
      </defs>
      <!-- column helper: x0, letters fused, support -->
      <!-- 1 DMEI -->
      <g transform="translate(10,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">DMEI</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">D=CDM</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">M E I</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">essence</text>
      </g>
      <!-- 2 IMO -->
      <g transform="translate(98,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">IMO</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">I+M+O</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">I M O</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">causal claim</text>
      </g>
      <!-- 3 GFM -->
      <g transform="translate(186,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">GFM</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">G+F+M</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">G F M</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">principle</text>
      </g>
      <!-- 4 HEFR -->
      <g transform="translate(274,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">HEFR</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">S+H/E</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">H E F R</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">frame + where</text>
      </g>
      <!-- 5 OCBED -->
      <g transform="translate(362,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">OCBED</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">O+C+B</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">O C B E D</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">direction</text>
      </g>
      <!-- 6 CTD -->
      <g transform="translate(450,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">CTD</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">C+T+D</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">C T D</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">rule with when</text>
      </g>
      <!-- 7 STAR+L -->
      <g transform="translate(538,0)">
        <text x="40" y="26" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" font-weight="600" fill="var(--at-accent)">STAR+L</text>
        <rect x="6" y="40" width="68" height="34" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.4"/>
        <text x="40" y="61" text-anchor="middle" font-family="var(--at-font-mono)" font-size="12" font-weight="600" fill="var(--at-text)">story</text>
        <path d="M40 100 L40 80" stroke="var(--at-accent)" stroke-width="1.4" marker-end="url(#ov-ah3)"/>
        <rect x="6" y="104" width="68" height="30" rx="6" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1"/>
        <text x="40" y="123" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-muted)">S T A R L</text>
        <text x="40" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="10.5" fill="var(--at-muted)">judgment</text>
      </g>
      <!-- avoid row -->
      <path d="M20 190 L620 190" stroke="var(--at-line)" stroke-width="1"/>
      <text x="20" y="212" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-amber)" letter-spacing="1.5">AVOID</text>
      <text x="20" y="232" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">a glossary line &middot; a mechanism recital &middot; the obvious goal or a list of controls &middot; a guessed root cause</text>
      <text x="20" y="250" font-family="var(--at-font-body)" font-size="11.5" fill="var(--at-muted)">a list of tricks &middot; an absolute &ldquo;X beats Y&rdquo; &middot; the long story with the lesson at the end</text>
      <text x="20" y="280" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)">S = symptom &middot; the fused letters form the headline; the rest is support</text>
    </svg>
    <figcaption>Seven pyramids. The apex fuses specific letters; the remaining letters hold it up. The bottom row is what each framework is protecting you from.</figcaption>
  </figure>

  <p>Three questions catch a weak headline before the interviewer does. If you could say only one sentence, would this be it, and would it still explain the rest? Does it contain something the interviewer did not already know, or does it restate the question? Do the support points prove one claim, or are they a list?</p>

  <p class="kicker">Timing</p>
  <h2>Same pyramid, three depths</h2>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em> plus two supporting points.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, a condensed framework, then the implication or result.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open one branch at a time as the interviewer asks. Never dump the checklist up front.</span></div>
    <figcaption>The headline never changes. Only how many branches you open does.</figcaption>
  </figure>

  <p class="kicker">Practice</p>
  <h2>Compile the framework until it disappears</h2>

  <p>The goal is not more acronyms. The goal is a schema so compiled that hearing the question produces the claim. The scaffold comes down in four stages.</p>

  <figure>
    <div class="stages">
      <div class="stage"><span class="n">1</span><span class="h">Deliberate</span><span class="flow">Q &rarr; classify &rarr; framework &rarr; fill &rarr; compress &rarr; headline</span>Exit when you can write the right headline and say why it governs the support.</div>
      <div class="stage"><span class="n">2</span><span class="h">Assisted</span><span class="flow">Q &rarr; suggested framework &rarr; headline &rarr; expand</span>Exit when you no longer fill every box before speaking.</div>
      <div class="stage"><span class="n">3</span><span class="h">Retrieval</span><span class="flow">Q &rarr; headline &rarr; expand</span>Exit when a top-level sentence appears within seconds; the framework stays behind it.</div>
      <div class="stage last"><span class="n">4</span><span class="h">Interview</span><span class="flow">Q &rarr; answer</span>Natural and conclusion-first. The framework surfaces only for recovery.</div>
    </div>
    <figcaption>Each stage removes one visible piece of scaffolding.</figcaption>
  </figure>

  <p>The drill for any single question: say the router out loud, fill the framework with keywords rather than sentences, write one headline and check that the reasoning can be rebuilt from it, answer in 30 seconds and then in 90, drop the framework and answer naturally, and later revisit with only the question visible and produce the headline before checking your notes.</p>

  <figure>
    <div class="two">
      <div class="box blue"><span class="h">While practicing</span><p>A training scaffold. It forces reasoning that is sufficient, structured, and checkable.</p></div>
      <div class="box good"><span class="h">When answering well</span><p>Latent structure. You do not read the acronym or walk the boxes. You say the headline and expand.</p></div>
      <div class="box bad"><span class="h">When stuck</span><p>A fallback. Recall the framework and ask its pivot question: mechanism, failure, divergence, bottleneck, criterion, or judgment.</p></div>
      <div class="box violet"><span class="h">Signs you are done</span><p>One-sentence headlines without enumeration. Each probe opens one branch. Domain changes, claim type does not. 30 s or 2 min, same logic.</p></div>
    </div>
    <figcaption>Runtime target: question, compressed claim, supporting reasoning.</figcaption>
  </figure>

  <p class="kicker">Cheat sheet</p>
  <h2>Seven headlines to hear in your head</h2>

  <figure>
    <ul class="samples">
      <li><span class="k"><a href="/posts/dmei-define/">Define</a></span><span>An agent harness is the orchestration system around an LLM that manages the agent loop and turns model decisions into controlled execution.</span></li>
      <li><span class="k"><a href="/posts/imo-explain/">Explain</a></span><span>Reranking improves retrieval because it separates fast candidate recall from more precise relevance scoring.</span></li>
      <li><span class="k"><a href="/posts/gfm-design/">Design</a></span><span>The key is to separate agent reasoning from controlled action execution.</span></li>
      <li><span class="k"><a href="/posts/hefr-diagnose/">Diagnose</a></span><span>I would treat this as a production&ndash;offline divergence problem and locate the first point where the two pipelines behave differently.</span></li>
      <li><span class="k"><a href="/posts/ocbed-optimize/">Optimize</a></span><span>I would optimize the dominant latency contributor while treating answer quality as a hard constraint.</span></li>
      <li><span class="k"><a href="/posts/ctd-compare/">Choose</a></span><span>I would choose a managed API when operational simplicity and speed to market matter more than deep control.</span></li>
      <li><span class="k"><a href="/posts/star-l-experience/">Experience</a></span><span>When information is incomplete, I commit strongly only where requirements are stable and preserve flexibility elsewhere.</span></li>
    </ul>
    <figcaption>One sentence per type. Each post shows how its sentence was built and how it expands.</figcaption>
  </figure>

  <div class="final">Do not try to say the framework. Use it to find the most important sentence, say that sentence first, and let everything else prove it.</div>

  <hr class="rule">

  <p class="close">Seven question types, seven frameworks, but <b>one habit</b>: route silently, reason silently, compress, then speak. The scaffold is for the gym. In the room, the interviewer should only ever hear <span class="hl">the sentence at the top</span> and whatever holds it up.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    <a href="/posts/dmei-define/">1 DMEI, Define</a> &middot; <a href="/posts/imo-explain/">2 IMO, Explain</a> &middot; <a href="/posts/gfm-design/">3 GFM, Design</a> &middot; <a href="/posts/hefr-diagnose/">4 HEFR, Diagnose</a> &middot; <a href="/posts/ocbed-optimize/">5 OCBED, Optimize</a> &middot; <a href="/posts/ctd-compare/">6 CTD, Compare</a> &middot; <a href="/posts/star-l-experience/">7 STAR+L, Experience</a>
    <div class="nav">
      <span><a href="/downloads/seven-answer-frameworks.pdf" download>PDF, full framework</a></span>
      <span><a href="/posts/dmei-define/">Start with DMEI</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
