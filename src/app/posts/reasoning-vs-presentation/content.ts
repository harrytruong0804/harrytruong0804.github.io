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
.artifact-scope /* the confusion */
  .confuse { display: flex; align-items: center; justify-content: center; gap: 0.9rem; flex-wrap: wrap; }
.artifact-scope .quote {
    font-family: var(--at-font-mono);
    font-size: 0.82rem;
    padding: 0.55rem 0.8rem;
    border-radius: 6px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    color: var(--at-muted);
  }
.artifact-scope .eq { font-family: var(--at-font-mono); color: var(--at-faint); font-size: 1.1rem; }
.artifact-scope .wrongclaim {
    text-align: center;
    font-family: var(--at-font-mono);
    font-size: 0.85rem;
    color: var(--at-muted);
    margin-top: 1rem;
  }
.artifact-scope .wrongclaim s { color: var(--at-faint); }
.artifact-scope .wrongclaim b { color: var(--at-accent); }
.artifact-scope /* two questions */
  .qs { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .qs { grid-template-columns: 1fr; }
}
.artifact-scope .qcard {
    padding: 1.1rem 1.2rem;
    border-radius: 8px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    border-top: 3px solid var(--at-line);
  }
.artifact-scope .qcard.think { border-top-color: var(--at-blue); }
.artifact-scope .qcard.talk { border-top-color: var(--at-accent); }
.artifact-scope .qcard .tag {
    font-family: var(--at-font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }
.artifact-scope .qcard.think .tag { color: var(--at-blue); }
.artifact-scope .qcard.talk .tag { color: var(--at-accent); }
.artifact-scope .qcard .q { font-size: 1.1rem; line-height: 1.4; color: var(--at-text); font-weight: 500; }
.artifact-scope .qcard .sub { font-size: 0.92rem; color: var(--at-muted); margin-top: 0.4rem; }
.artifact-scope /* deductive vs inductive cards */
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .two { grid-template-columns: 1fr; }
}
.artifact-scope .di {
    padding: 1rem 1.1rem;
    border-radius: 8px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
  }
.artifact-scope .di .h {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }
.artifact-scope .di.d .h { color: var(--at-violet); }
.artifact-scope .di.i .h { color: var(--at-amber); }
.artifact-scope .di .line { font-size: 0.94rem; line-height: 1.5; color: var(--at-muted); margin: 0.15rem 0; }
.artifact-scope .di .concl { font-size: 0.96rem; line-height: 1.45; color: var(--at-text); font-weight: 500; margin-top: 0.4rem; padding-top: 0.4rem; border-top: 1px dashed var(--at-line); }
.artifact-scope .di .cert { font-family: var(--at-font-mono); font-size: 0.7rem; margin-top: 0.6rem; }
.artifact-scope .di.d .cert { color: var(--at-violet); }
.artifact-scope .di.i .cert { color: var(--at-amber); }
.artifact-scope /* mapping: two reasonings, .artifact-scope one pyramid */
  .maprow { display: grid; grid-template-columns: 1fr 2.2rem 1fr; align-items: center; gap: 0.7rem; margin: 0.9rem 0; }
@media (max-width: 620px) {
.artifact-scope .maprow { grid-template-columns: 1fr; }
.artifact-scope .maprow .to { transform: rotate(90deg); }
}
.artifact-scope .src {
    padding: 0.8rem 0.9rem;
    border-radius: 8px;
    font-size: 0.9rem;
    line-height: 1.45;
    border: 1px solid var(--at-line);
  }
.artifact-scope .src.i { background: var(--at-amber-soft); border-color: var(--at-amber); }
.artifact-scope .src.d { background: var(--at-violet-soft); border-color: var(--at-violet); }
.artifact-scope .src .lab { font-family: var(--at-font-mono); font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; display: block; margin-bottom: 0.35rem; }
.artifact-scope .src.i .lab { color: var(--at-amber); }
.artifact-scope .src.d .lab { color: var(--at-violet); }
.artifact-scope .to { text-align: center; font-family: var(--at-font-mono); color: var(--at-faint); font-size: 1.1rem; }
.artifact-scope .mini {
    padding: 0.7rem 0.8rem;
    border-radius: 8px;
    background: var(--at-accent-soft);
    border: 1px solid var(--at-accent);
  }
.artifact-scope .mini .apex { font-size: 0.95rem; font-weight: 600; color: var(--at-text); }
.artifact-scope .mini .apex .tagm { font-family: var(--at-font-mono); font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--at-accent); display: block; margin-bottom: 0.2rem; }
.artifact-scope .mini .sup { font-size: 0.84rem; color: var(--at-muted); margin-top: 0.35rem; padding-top: 0.35rem; border-top: 1px solid var(--at-accent); }
.artifact-scope .rule { border: none; border-top: 1px solid var(--at-line); margin: 2.6rem 0; }
.artifact-scope .close {
    font-size: 1.18rem;
    line-height: 1.62;
    color: var(--at-muted);
  }
.artifact-scope .close b { color: var(--at-text); }
.artifact-scope .close .hl { color: var(--at-accent); }
`;

export const html = `
<div class="wrap">

  <p class="kicker">Communication</p>
  <h1>How You Think Is Not How You Present</h1>
  <p class="lede">For years I thought <em>deductive reasoning</em> and the Pyramid Principle were the same thing. They answer two different questions &mdash; one about thinking, one about talking &mdash; and they sit at a right angle to each other.</p>

  <p>The mix-up had a clean cause. Guides on the <a class="xref" href="/posts/pyramid-principle/">Pyramid Principle</a> talk about a &ldquo;deductive structure,&rdquo; and in the same breath tell you to <strong>state the conclusion first</strong>. So I quietly filed them as one idea: <em>deductive means lead with the conclusion.</em></p>

  <figure>
    <div class="confuse">
      <span class="quote">&ldquo;use a deductive structure&rdquo;</span>
      <span class="eq">+</span>
      <span class="quote">&ldquo;state the conclusion first&rdquo;</span>
    </div>
    <p class="wrongclaim">&rArr; <s>&ldquo;deductive&rdquo; = &ldquo;conclusion first&rdquo;</s> &nbsp; <b>&mdash; wrong.</b></p>
    <figcaption>Two true statements, glued into one false equation.</figcaption>
  </figure>

  <p>They aren&rsquo;t the same because they answer different questions.</p>

  <p class="kicker">The split</p>
  <h2>Two questions, not one</h2>

  <figure>
    <div class="qs">
      <div class="qcard think">
        <span class="tag">Reasoning &mdash; thinking</span>
        <p class="q">How did you reach the conclusion?</p>
        <p class="sub">Deductive and inductive are the two routes your mind can take to <em>get</em> to a claim.</p>
      </div>
      <div class="qcard talk">
        <span class="tag">Pyramid Principle &mdash; communicating</span>
        <p class="q">Now that you have it, how do you present it?</p>
        <p class="sub">Once the claim exists, this decides the order you <em>say</em> it in &mdash; conclusion first, support after.</p>
      </div>
    </div>
    <figcaption>One is the logic of the brain; the other is the logic of the report.</figcaption>
  </figure>

  <p>Draw the two as flows and the independence becomes obvious &mdash; they run along <strong>perpendicular axes</strong>, meeting only at the conclusion.</p>

  <figure>
    <svg viewBox="0 0 640 300" role="img" aria-label="Reasoning flows left-to-right from premises into the conclusion; presentation flows top-down out of the conclusion into support and evidence.">
      <!-- top axis label -->
      <text x="30" y="24" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)">THINKING &mdash; how you arrived &rarr;</text>
      <!-- reasoning row -->
      <rect x="26" y="52" width="118" height="46" rx="7" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
      <text x="85" y="79" text-anchor="middle" font-family="var(--at-font-body)" font-size="13" fill="var(--at-text)">Premises</text>
      <path d="M148 75 L176 75" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ah)"/>
      <rect x="182" y="57" width="150" height="36" rx="18" fill="var(--at-surface)" stroke="var(--at-violet)" stroke-width="1.2"/>
      <text x="257" y="79" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-violet)">deductive / inductive</text>
      <path d="M336 75 L368 75" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ah)"/>
      <!-- conclusion: the hinge -->
      <rect x="374" y="49" width="188" height="52" rx="8" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
      <text x="468" y="72" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-accent)">CONCLUSION</text>
      <text x="468" y="89" text-anchor="middle" font-family="var(--at-font-body)" font-size="12" fill="var(--at-text)">what you now believe</text>
      <!-- 90 degree turn marker -->
      <path d="M468 101 L468 132" stroke="var(--at-accent)" stroke-width="1.6" marker-end="url(#ah2)"/>
      <!-- right axis label -->
      <text x="600" y="150" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-accent)" transform="rotate(90 600 150)">COMMUNICATING &mdash; how you deliver &darr;</text>
      <!-- presentation column -->
      <rect x="374" y="138" width="188" height="44" rx="7" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.2"/>
      <text x="468" y="165" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-text)">Supporting arguments</text>
      <path d="M468 182 L468 210" stroke="var(--at-line-strong)" stroke-width="1.3" marker-end="url(#ah)"/>
      <rect x="374" y="216" width="188" height="44" rx="7" fill="var(--at-inset)" stroke="var(--at-line)" stroke-width="1.1"/>
      <text x="468" y="243" text-anchor="middle" font-family="var(--at-font-body)" font-size="12.5" fill="var(--at-muted)">Evidence</text>
      <defs>
        <marker id="ah" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/>
        </marker>
        <marker id="ah2" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/>
        </marker>
      </defs>
    </svg>
    <figcaption>Reasoning runs left&rarr;right <em>into</em> the conclusion; presentation runs top&rarr;down <em>out</em> of it. Two axes, meeting at a right angle.</figcaption>
  </figure>

  <p class="kicker">The thinking axis</p>
  <h2>Deductive and inductive, quickly</h2>

  <p>These are the two routes to a conclusion. The difference is what the conclusion is <em>worth</em>.</p>

  <figure>
    <div class="two">
      <div class="di d">
        <div class="h">Deductive &mdash; rule to case</div>
        <p class="line">Every employee must wear a badge.</p>
        <p class="line">Minh is an employee.</p>
        <p class="concl">&rArr; Minh must wear a badge.</p>
        <p class="cert">True premises &rarr; the conclusion is <b>certain</b>.</p>
      </div>
      <div class="di i">
        <div class="h">Inductive &mdash; cases to pattern</div>
        <p class="line">Support tickets up 40%.</p>
        <p class="line">Support turnover up 25%.</p>
        <p class="line">Satisfaction down 15 points.</p>
        <p class="concl">&rArr; The support team is in serious trouble.</p>
        <p class="cert">Reasonable, but <b>probable</b> &mdash; not guaranteed.</p>
      </div>
    </div>
    <figcaption>Deduction inherits certainty from its premises; induction only makes a conclusion likely.</figcaption>
  </figure>

  <p class="kicker">Where they meet</p>
  <h2>Different reasoning, identical delivery</h2>

  <p>Here&rsquo;s the part that dissolves the confusion. When you report either conclusion, you <strong>don&rsquo;t retrace the reasoning</strong> &mdash; you flip it into a pyramid: claim first, support beneath. Both routes come out the same shape.</p>

  <figure>
    <div class="maprow">
      <div class="src i">
        <span class="lab">You reasoned inductively</span>
        3 observations &rarr; &ldquo;support team is in trouble&rdquo;
      </div>
      <div class="to">&rarr;</div>
      <div class="mini">
        <div class="apex"><span class="tagm">You say</span>The support team is in serious trouble.</div>
        <div class="sup">Three signs: tickets +40%, turnover +25%, satisfaction &minus;15.</div>
      </div>
    </div>
    <div class="maprow">
      <div class="src d">
        <span class="lab">You reasoned deductively</span>
        rule (&gt;30d late &rarr; escalate) + Project A is 45d late
      </div>
      <div class="to">&rarr;</div>
      <div class="mini">
        <div class="apex"><span class="tagm">You say</span>Project A must go to the board.</div>
        <div class="sup">Policy escalates anything over 30 days late; A is 45.</div>
      </div>
    </div>
    <figcaption>The reasoning on the left differs; the delivery on the right is the same pyramid. That&rsquo;s why they feel identical &mdash; and why they aren&rsquo;t.</figcaption>
  </figure>

  <p>The pyramid doesn&rsquo;t care <em>how</em> you got the conclusion. It only cares that you lead with it. Deductive or inductive, the reader still gets the claim first and the support after.</p>

  <hr class="rule">

  <p class="close">Deductive and inductive describe how the <b>brain reaches</b> a conclusion. The Pyramid Principle describes how the <b>mouth should deliver</b> it. Confusing them costs you nothing until you try to teach either one &mdash; then you realize you were holding <span class="hl">two tools, not one</span>: pick the reasoning that fits the evidence, then present the result the same way every time.</p>

</div>
`;

export const script = `

`;
