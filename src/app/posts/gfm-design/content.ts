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

  <p class="kicker">Answer frameworks &middot; 3 of 7 &middot; Design</p>
  <h1>GFM: Design from Failure Modes, Not Components</h1>
  <p class="lede">&ldquo;How would you build X?&rdquo; invites a parts list: a queue here, a cache there, a database underneath. A parts list is not a design. GFM starts from the goal, asks <em>how the goal breaks</em>, and lets every mechanism earn its place by answering one of those breaks.</p>

  <p>This is the third of <a class="xref" href="/posts/seven-answer-frameworks/">seven answer frameworks</a>. Each one matches a question type, organizes the reasoning, and compresses into one governing sentence you say first. For the Design type, that sentence is a <strong>principle</strong> &mdash; the rule that holds the architecture together &mdash; and it is built from the failure modes, not from the boxes.</p>

  <figure>
    <div class="router">
      <div class="cell q"><span class="lab">Cue</span><span class="v">HOW BUILD X?</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell f"><span class="lab">Framework</span><span class="v">G &rarr; F &rarr; M</span></div>
      <div class="arr">&rarr;</div>
      <div class="cell h"><span class="lab">Headline shape</span><span class="v">a design principle</span></div>
    </div>
    <figcaption>Route on intent, not verb. &ldquo;How would you debug X?&rdquo; is Diagnose, not Design, even though it starts with &ldquo;how&rdquo;.</figcaption>
  </figure>

  <p class="kicker">The framework</p>
  <h2>Goal, Failure modes, Mechanisms</h2>

  <p>GFM refuses to name a component until it knows what that component is protecting. Three letters, in an order you must not skip.</p>

  <figure>
    <div class="chain">
      <div class="chip"><span class="k">G</span><span class="w">Goal</span><span class="s">the invariant the system must guarantee</span></div>
      <div class="chip pivot"><span class="k">F</span><span class="w">Failure modes</span><span class="s">every way the goal can be broken</span></div>
      <div class="chip"><span class="k">M</span><span class="w">Mechanisms</span><span class="s">one answer per failure that matters</span></div>
    </div>
    <figcaption>F is the pivot. G tells you what to protect; M is only legitimate when it traces back to an F.</figcaption>
  </figure>

  <p class="kicker">The pivot</p>
  <h2>Every mechanism must trace back to a failure</h2>

  <p>The pivot question is: <strong>what principle achieves the goal despite the failure modes?</strong> You cannot answer it by listing controls, because a control with no failure behind it is decoration. Draw the trace and the design shows its own shape.</p>

  <figure>
    <svg viewBox="0 0 640 330" role="img" aria-label="Goal at the top; three failure modes in a row beneath it, each derived from the goal; three mechanisms beneath them, each pointing back up to the failure it handles. A fourth mechanism with no failure above it is greyed out as decoration.">
      <defs>
        <marker id="gf-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
        <marker id="gf-ah-up" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-violet)"/>
        </marker>
      </defs>
      <!-- goal -->
      <rect x="170" y="18" width="300" height="52" rx="9" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"/>
      <text x="320" y="39" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)" letter-spacing="1">G &mdash; GOAL</text>
      <text x="320" y="58" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">the invariant that must hold</text>
      <!-- goal -> failures -->
      <path d="M320 70 L320 92" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M110 92 L530 92" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M110 92 L110 112" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#gf-ah)"/>
      <path d="M320 92 L320 112" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#gf-ah)"/>
      <path d="M530 92 L530 112" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#gf-ah)"/>
      <text x="600" y="100" text-anchor="end" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">how can G break?</text>
      <!-- failure modes -->
      <rect x="40" y="118" width="140" height="58" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/>
      <text x="110" y="141" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)">F1</text>
      <text x="110" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">wrong action</text>
      <rect x="250" y="118" width="140" height="58" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/>
      <text x="320" y="141" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)">F2</text>
      <text x="320" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">action repeated</text>
      <rect x="460" y="118" width="140" height="58" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/>
      <text x="530" y="141" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)">F3</text>
      <text x="530" y="160" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">no trace afterward</text>
      <!-- mechanisms pointing up to failures -->
      <path d="M110 236 L110 184" stroke="var(--at-violet)" stroke-width="1.4" marker-end="url(#gf-ah-up)"/>
      <path d="M320 236 L320 184" stroke="var(--at-violet)" stroke-width="1.4" marker-end="url(#gf-ah-up)"/>
      <path d="M530 236 L530 184" stroke="var(--at-violet)" stroke-width="1.4" marker-end="url(#gf-ah-up)"/>
      <text x="40" y="214" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">each M answers one F</text>
      <rect x="40" y="240" width="140" height="58" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.3"/>
      <text x="110" y="263" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-violet)">M1</text>
      <text x="110" y="282" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">validation + scope</text>
      <rect x="250" y="240" width="140" height="58" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.3"/>
      <text x="320" y="263" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-violet)">M2</text>
      <text x="320" y="282" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">idempotency</text>
      <rect x="460" y="240" width="140" height="58" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.3"/>
      <text x="530" y="263" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-violet)">M3</text>
      <text x="530" y="282" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">audit trail</text>
      <!-- orphan mechanism -->
      <rect x="250" y="308" width="140" height="18" rx="4" fill="none" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="320" y="321" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-faint)">M with no F above it = decoration</text>
    </svg>
    <figcaption>Read it top-down to design, bottom-up to defend. A mechanism you cannot trace to a failure mode should not be in the answer.</figcaption>
  </figure>

  <ul class="support">
    <li><span class="k">G</span><span><em>Goal.</em> The invariant, stated as something that must stay true, not as a feature. &ldquo;Actions are never unauthorized&rdquo; is a goal; &ldquo;has a permission system&rdquo; is not.</span></li>
    <li class="pivot"><span class="k">F</span><span><em>Failure modes.</em> The concrete ways the invariant gets violated. This is the list you spend your thinking time on; the mechanisms are almost read off it.</span></li>
    <li><span class="k">M</span><span><em>Mechanisms.</em> One per failure that matters. Naming the failure first is what lets you justify the mechanism when the interviewer asks &ldquo;why that?&rdquo;.</span></li>
  </ul>

  <p class="kicker">Compression</p>
  <h2>Fuse G, F and M into one principle</h2>

  <p>The headline is not the goal repeated, and it is not the mechanism list read aloud. It is the <strong>principle</strong> that, if you follow it, handles most of the failure modes at once. Find the single structural decision that most of the mechanisms hang off, and say that. A short problem frame in front of it is allowed if it makes the principle sharper.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A pyramid with the design principle at the apex and three support boxes beneath it: Goal, Failure modes, Mechanisms.">
      <defs>
        <marker id="gf-ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
      </defs>
      <rect x="150" y="22" width="340" height="66" rx="9" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="320" y="46" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-accent)" letter-spacing="1">HEADLINE = G + F + M &rarr; PRINCIPLE</text>
      <text x="320" y="68" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">The key design principle is to [architectural principle].</text>
      <path d="M320 88 L320 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L520 118" stroke="var(--at-line-strong)" stroke-width="1.3"/>
      <path d="M120 118 L120 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#gf-ah2)"/>
      <path d="M320 118 L320 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#gf-ah2)"/>
      <path d="M520 118 L520 140" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#gf-ah2)"/>
      <rect x="40" y="146" width="160" height="80" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"/>
      <text x="120" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">G &mdash; GOAL</text>
      <text x="120" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">what the principle</text>
      <text x="120" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">is protecting</text>
      <rect x="240" y="146" width="160" height="80" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.2"/>
      <text x="320" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-accent)">F &mdash; FAILURES</text>
      <text x="320" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">why the principle</text>
      <text x="320" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">is necessary</text>
      <rect x="440" y="146" width="160" height="80" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="520" y="172" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">M &mdash; MECHANISMS</text>
      <text x="520" y="192" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">how the principle</text>
      <text x="520" y="209" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-muted)">is carried out</text>
    </svg>
    <figcaption>Goal says what, failures say why, mechanisms say how. The principle at the top is the one sentence all three agree on.</figcaption>
  </figure>

  <div class="tmpl"><span class="lab">Say it like</span>The key design principle is to <span class="slot">[architectural principle]</span>.</div>

  <figure>
    <div class="two">
      <div class="box good"><span class="h">Compress</span><p>Name the structural split or rule that most mechanisms depend on. Goal, failures and mechanisms should all read as consequences of it.</p></div>
      <div class="box bad"><span class="h">Avoid</span><p>Restating the obvious goal (&ldquo;the key is to make it safe&rdquo;) or opening with a list of controls. Both are true and both say nothing the interviewer didn&rsquo;t already know.</p></div>
    </div>
    <figcaption>A principle can be argued with. A goal restatement and a control list cannot &mdash; which is exactly why they impress nobody.</figcaption>
  </figure>

  <p class="kicker">Worked example</p>
  <h2>&ldquo;Design an agent that acts safely on a user&rsquo;s behalf&rdquo;</h2>

  <p class="ask"><b>Q:</b> How would you design an AI agent that can safely execute actions on behalf of a user?</p>

  <div class="headline"><span class="tagh">Headline &mdash; said first</span><p class="t">The key is to separate agent reasoning from controlled action execution.</p></div>

  <p>One split, and most of the failure list is handled by construction. If the model only <em>proposes</em> and a separate layer <em>decides and runs</em>, then permissions, validation, approval, idempotency and audit all have a natural home &mdash; the execution layer &mdash; instead of being sprinkled through prompts.</p>

  <ul class="support">
    <li><span class="k">G</span><span>Keep the autonomy useful while preventing actions that are unauthorized, repeated, or irreversible.</span></li>
    <li class="pivot"><span class="k">F</span><span>Wrong permissions; wrong arguments; missing approval; a retry that doubles a side effect; a crash mid-action; no audit trail.</span></li>
    <li><span class="k">M</span><span>Scoped permissions; argument validation; risk-based approval; idempotency keys; durable state; an audit log. One per failure, in the same order.</span></li>
    <li><span class="k">Arch</span><span>The LLM proposes an action. The execution layer decides whether that action is allowed and how it runs.</span></li>
  </ul>

  <p>If the interviewer then asks &ldquo;managed queue or your own?&rdquo;, that is a different question type. GFM has fixed the architecture; a <a class="xref" href="/posts/ctd-compare/">CTD</a> decision rule justifies the technology inside it. Keep the primary framework for the decision and borrow the secondary one for support.</p>

  <figure>
    <div class="clock"><span class="t">30 s</span><span><em>Headline</em>, then the three worst failures and the layer that catches them. No component names beyond &ldquo;execution layer&rdquo;.</span></div>
    <div class="clock"><span class="t">60&ndash;90 s</span><span><em>Headline</em>, G in one sentence, F as a quick list, M mapped one-to-one, then the LLM-proposes / layer-decides line as the shape.</span></div>
    <div class="clock"><span class="t">Deep dive</span><span>Open one branch when pulled: how approval is risk-scored, how idempotency survives a crash, what the audit record contains.</span></div>
    <figcaption>Same principle at every depth. Only the number of failure modes you unpack changes.</figcaption>
  </figure>

  <p class="kicker">Self-check</p>
  <h2>Did you design, or did you enumerate?</h2>

  <p>Point at any mechanism in your answer and ask: <strong>which failure mode does this exist for?</strong> If you cannot name one in the same breath, either the mechanism is padding or you skipped F and went straight from goal to parts. Then run the reverse test: pick the nastiest failure on your list and check that your headline principle actually blocks it. If it does not, the principle is too soft, and the interviewer will find the gap for you.</p>

  <hr class="rule">

  <p class="close">GFM is a discipline of order. <b>Goal, then failures, then mechanisms</b> &mdash; never mechanisms first. The failure list is where the design work happens; the components are read off it; and the headline is the one <span class="hl">structural principle</span> that makes most of those failures impossible before any component is named.</p>

  <div class="series">
    <span class="lab">Series &middot; Seven answer frameworks</span>
    Overview and PDF: <a href="/posts/seven-answer-frameworks/">Seven Question Types, Seven Frameworks, One Headline</a>
    <div class="nav">
      <span>&larr; <a href="/posts/imo-explain/">Prev: IMO, Explain</a></span>
      <span><a href="/posts/hefr-diagnose/">Next: HEFR, Diagnose</a> &rarr;</span>
    </div>
  </div>

</div>
`;

export const script = `
`;
