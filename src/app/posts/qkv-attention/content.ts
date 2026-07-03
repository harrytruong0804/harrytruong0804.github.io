export const styles = `
  .artifact-scope, .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope {
    line-height: 1.75;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
  }

  .artifact-scope a { color: inherit; text-decoration: none; }

  .artifact-scope article {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .artifact-scope .hero {
    padding: 72px 0 48px;
    border-bottom: 1px solid var(--at-line);
    margin-bottom: 48px;
  }

  .artifact-scope .hero .tag {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--at-accent);
    margin-bottom: 20px;
  }

  .artifact-scope h1 {
    font-family: var(--at-font-display);
    font-size: clamp(36px, 5vw, 52px);
    line-height: 1.12;
    font-weight: 400;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .artifact-scope .subtitle {
    font-size: 20px;
    color: var(--at-muted);
    line-height: 1.5;
    font-weight: 300;
    max-width: 560px;
  }

  .artifact-scope .meta {
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    color: var(--at-faint);
  }

  .artifact-scope .meta .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--at-accent-soft);
    border: 1px solid var(--at-line);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    color: var(--at-accent);
  }

  .artifact-scope .meta .author-name { color: var(--at-text); font-weight: 500; }

  .artifact-scope h2 {
    font-family: var(--at-font-display);
    font-size: 30px;
    font-weight: 400;
    margin: 56px 0 20px;
    letter-spacing: -0.01em;
  }

  .artifact-scope h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 40px 0 12px;
    color: var(--at-text);
  }

  .artifact-scope p { margin-bottom: 20px; }

  .artifact-scope .lead { font-size: 19px; color: var(--at-muted); font-weight: 300; }

  .artifact-scope strong { font-weight: 600; }

  .artifact-scope code {
    font-family: var(--at-font-mono);
    font-size: 0.88em;
    background: var(--at-inset);
    padding: 2px 7px;
    border-radius: 4px;
    color: var(--at-accent);
  }

  .artifact-scope .callout {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-left: 3px solid var(--at-accent);
    border-radius: 0 8px 8px 0;
    padding: 20px 24px;
    margin: 32px 0;
    font-size: 16px;
  }

  .artifact-scope .callout .callout-title {
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--at-accent);
    margin-bottom: 8px;
  }

  /* ---- INTERACTIVE DIAGRAMS ---- */

  .artifact-scope .diagram-card {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 12px;
    margin: 36px 0;
    overflow: hidden;
  }

  .artifact-scope .diagram-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--at-faint);
    padding: 16px 24px 0;
  }

  .artifact-scope .diagram-body { padding: 8px 16px 16px; }

  .artifact-scope .diagram-body svg text {
    font-family: var(--at-font-body);
  }

  /* Projection diagram */
  .artifact-scope .proj-svg .box-q { fill: var(--at-amber-soft); stroke: var(--at-amber); }
  .artifact-scope .proj-svg .box-k { fill: var(--at-green-soft); stroke: var(--at-green); }
  .artifact-scope .proj-svg .box-v { fill: var(--at-blue-soft); stroke: var(--at-blue); }
  .artifact-scope .proj-svg .box-gray { fill: var(--at-inset); stroke: var(--at-line); }
  .artifact-scope .proj-svg .box-embed { fill: var(--at-violet-soft); stroke: var(--at-violet); }
  .artifact-scope .proj-svg .t-q { fill: var(--at-amber); }
  .artifact-scope .proj-svg .t-k { fill: var(--at-green); }
  .artifact-scope .proj-svg .t-v { fill: var(--at-blue); }
  .artifact-scope .proj-svg .t-main { fill: var(--at-text); }
  .artifact-scope .proj-svg .t-muted { fill: var(--at-muted); }
  .artifact-scope .proj-svg .t-purple { fill: var(--at-violet); }
  .artifact-scope .proj-svg .line-q { stroke: var(--at-amber); }
  .artifact-scope .proj-svg .line-k { stroke: var(--at-green); }
  .artifact-scope .proj-svg .line-v { stroke: var(--at-blue); }
  .artifact-scope .proj-svg .line-gray { stroke: var(--at-faint); }

  /* Library stepper */
  .artifact-scope .stepper-pills {
    display: flex;
    justify-content: center;
    gap: 6px;
    padding: 16px 16px 4px;
  }

  .artifact-scope .stepper-pill {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid var(--at-line);
    background: var(--at-bg);
    color: var(--at-muted);
    transition: all 0.25s;
    user-select: none;
  }

  .artifact-scope .stepper-pill.active {
    background: var(--at-violet-soft);
    border-color: var(--at-violet);
    color: var(--at-violet);
  }

  .artifact-scope .stepper-caption {
    text-align: center;
    font-size: 15px;
    color: var(--at-muted);
    padding: 8px 24px 16px;
    line-height: 1.5;
    min-height: 52px;
  }

  .artifact-scope .lib-phase { display: none; }
  .artifact-scope .lib-phase.show { display: block; }

  /* Interactive attention */
  .artifact-scope .attn-wrap { padding: 12px 16px 20px; }

  .artifact-scope .attn-tokens {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .artifact-scope .attn-tok {
    padding: 6px 16px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: 2px solid transparent;
    background: var(--at-inset);
    color: var(--at-text);
    transition: all 0.2s;
    user-select: none;
  }

  .artifact-scope .attn-tok:hover { border-color: var(--at-line); }
  .artifact-scope .attn-tok.active { background: var(--at-amber-soft); border-color: var(--at-amber); color: var(--at-amber); }

  .artifact-scope .attn-hint {
    text-align: center;
    font-size: 12px;
    color: var(--at-faint);
    margin-bottom: 8px;
  }

  .artifact-scope .bar-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0;
  }

  .artifact-scope .bar-word {
    width: 40px;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    color: var(--at-muted);
  }

  .artifact-scope .bar-track {
    flex: 1;
    height: 22px;
    background: var(--at-inset);
    border-radius: 4px;
    overflow: hidden;
  }

  .artifact-scope .bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.4s ease;
  }

  .artifact-scope .bar-pct {
    width: 38px;
    font-size: 13px;
    font-family: var(--at-font-mono);
    color: var(--at-faint);
  }

  .artifact-scope .attn-explain {
    text-align: center;
    font-size: 14px;
    color: var(--at-muted);
    margin-top: 10px;
    line-height: 1.5;
    min-height: 40px;
  }

  /* Steps section */
  .artifact-scope .step-grid {
    display: grid;
    gap: 16px;
    margin: 28px 0;
  }

  .artifact-scope .step-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .artifact-scope .step-num {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .artifact-scope .step-num.s0 { background: var(--at-inset); color: var(--at-muted); }
  .artifact-scope .step-num.s1 { background: var(--at-amber-soft); color: var(--at-amber); }
  .artifact-scope .step-num.s2 { background: var(--at-green-soft); color: var(--at-green); }
  .artifact-scope .step-num.s3 { background: var(--at-violet-soft); color: var(--at-violet); }
  .artifact-scope .step-num.s4 { background: var(--at-blue-soft); color: var(--at-blue); }

  .artifact-scope .step-text { font-size: 16px; line-height: 1.6; }
  .artifact-scope .step-text strong { font-weight: 600; }

  /* Key insight card */
  .artifact-scope .insight-card {
    background: var(--at-amber-soft);
    border: 1px solid var(--at-amber);
    border-radius: 12px;
    padding: 28px 28px;
    margin: 40px 0;
  }

  .artifact-scope .insight-card .insight-tag {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--at-amber);
    margin-bottom: 10px;
  }

  .artifact-scope .insight-card p {
    color: var(--at-amber);
    margin-bottom: 12px;
    font-size: 16px;
  }

  .artifact-scope .insight-card p:last-child { margin-bottom: 0; }

  /* Footer */
  .artifact-scope .article-footer {
    border-top: 1px solid var(--at-line);
    margin-top: 56px;
    padding: 32px 0 72px;
    text-align: center;
    color: var(--at-faint);
    font-size: 14px;
  }

  /* Animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .artifact-scope .hero,
  .artifact-scope .diagram-card,
  .artifact-scope .callout,
  .artifact-scope .insight-card {
    animation: fadeUp 0.6s ease both;
  }

  .artifact-scope .diagram-card:nth-of-type(2) { animation-delay: 0.1s; }
  .artifact-scope .diagram-card:nth-of-type(3) { animation-delay: 0.2s; }
`;

export const html = `
<article>
  <div class="hero">
    <div class="tag">Deep Dive &mdash; Transformers</div>
    <h1>Q, K, V &mdash; The Heart of LLM Attention, Explained Visually</h1>
    <p class="subtitle">Every modern LLM runs on the same mechanism: self-attention. Here's the intuition behind Query, Key, and Value.</p>
    <div class="meta">
      <div class="avatar">HT</div>
      <div>
        <div class="author-name">Harry Truong</div>
        <div>March 2026 &middot; 6 min read</div>
      </div>
    </div>
  </div>

  <h2>The Problem: Words Need Context</h2>
  <p class="lead">The word "bank" means completely different things in "river bank" vs. "bank account." A model needs a way for each word to <em>look at the other words</em> in the sentence and absorb the right meaning.</p>
  <p>That's the entire job of the <strong>attention mechanism</strong>. And at its core, attention is built on three things: <strong>Query</strong>, <strong>Key</strong>, and <strong>Value</strong>.</p>

  <h2>Step 1: One Token, Three Projections</h2>
  <p>Every token in a sentence first gets converted into an <strong>embedding</strong> &mdash; a vector of numbers that captures the word's raw meaning. That single vector is then multiplied by three separate learned weight matrices (<code>W_Q</code>, <code>W_K</code>, <code>W_V</code>) to produce three different vectors.</p>

  <div class="diagram-card">
    <div class="diagram-label">Diagram &mdash; Token Projection</div>
    <div class="diagram-body">
      <svg class="proj-svg" width="100%" viewBox="0 0 680 300">
        <rect class="box-gray" x="260" y="20" width="160" height="40" rx="8" stroke-width="1"/>
        <text class="t-main" x="340" y="44" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Token: "bank"</text>

        <line class="line-gray" x1="340" y1="60" x2="340" y2="90" stroke-width="1.5" stroke-dasharray="4 3"/>

        <rect class="box-embed" x="230" y="92" width="220" height="46" rx="8" stroke-width="1"/>
        <text class="t-purple" x="340" y="108" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Embedding</text>
        <text class="t-purple" x="340" y="126" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">[0.2, -0.5, 0.8, ...]</text>

        <line class="line-q" x1="260" y1="138" x2="140" y2="195" stroke-width="1.5" fill="none"/>
        <line class="line-k" x1="340" y1="138" x2="340" y2="195" stroke-width="1.5" fill="none"/>
        <line class="line-v" x1="420" y1="138" x2="540" y2="195" stroke-width="1.5" fill="none"/>

        <text class="t-q" x="180" y="170" text-anchor="middle" font-size="12" font-weight="500">&#xd7; W_Q</text>
        <text class="t-k" x="340" y="170" text-anchor="middle" font-size="12" font-weight="500">&#xd7; W_K</text>
        <text class="t-v" x="500" y="170" text-anchor="middle" font-size="12" font-weight="500">&#xd7; W_V</text>

        <rect class="box-q" x="60" y="198" width="160" height="56" rx="8" stroke-width="1"/>
        <text class="t-q" x="140" y="218" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Query (Q)</text>
        <text class="t-q" x="140" y="238" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">"What do I need?"</text>

        <rect class="box-k" x="260" y="198" width="160" height="56" rx="8" stroke-width="1"/>
        <text class="t-k" x="340" y="218" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Key (K)</text>
        <text class="t-k" x="340" y="238" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">"What do I offer?"</text>

        <rect class="box-v" x="460" y="198" width="160" height="56" rx="8" stroke-width="1"/>
        <text class="t-v" x="540" y="218" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Value (V)</text>
        <text class="t-v" x="540" y="238" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">"Here's my info"</text>
      </svg>
    </div>
  </div>

  <p>Think of it this way: the same person can be described by their <em>question</em> ("I'm looking for info about rivers"), their <em>label</em> ("I'm a geography book"), and their <em>content</em> ("Here are maps and facts about rivers"). Three perspectives on the same entity &mdash; each serving a different purpose.</p>

  <h2>Step 2: The Library Analogy</h2>
  <p>The best mental model for Q, K, V is a library visit. Click through each step:</p>

  <div class="diagram-card">
    <div class="diagram-label">Interactive &mdash; Library Analogy</div>
    <div class="stepper-pills">
      <div class="stepper-pill active" onclick="showLib(0)">1. You walk in</div>
      <div class="stepper-pill" onclick="showLib(1)">2. Match Q to K</div>
      <div class="stepper-pill" onclick="showLib(2)">3. Get V back</div>
    </div>
    <div class="diagram-body">
      <div class="lib-phase show" id="lp0">
        <svg class="proj-svg" width="100%" viewBox="0 0 680 240">
          <rect class="box-q" x="40" y="50" width="170" height="140" rx="12" stroke-width="1"/>
          <text class="t-q" x="125" y="84" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">You (the Query)</text>
          <text class="t-q" x="125" y="110" text-anchor="middle" font-size="13" dominant-baseline="central" opacity="0.8">"I need a book</text>
          <text class="t-q" x="125" y="128" text-anchor="middle" font-size="13" dominant-baseline="central" opacity="0.8">about rivers"</text>

          <rect x="280" y="30" width="360" height="190" rx="14" fill="none" stroke="var(--at-line)" stroke-width="1" stroke-dasharray="6 4"/>
          <text class="t-muted" x="460" y="55" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">LIBRARY</text>

          <rect class="box-k" x="300" y="75" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-k" x="365" y="94" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Index card</text>
          <text class="t-k" x="365" y="112" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Key</text>

          <rect class="box-v" x="490" y="75" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-v" x="555" y="94" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Actual book</text>
          <text class="t-v" x="555" y="112" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Value</text>

          <line x1="430" y1="100" x2="488" y2="100" stroke="var(--at-faint)" stroke-width="0.5" stroke-dasharray="3 3"/>

          <rect class="box-k" x="300" y="145" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-k" x="365" y="164" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Index card</text>
          <text class="t-k" x="365" y="182" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Key</text>

          <rect class="box-v" x="490" y="145" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-v" x="555" y="164" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Actual book</text>
          <text class="t-v" x="555" y="182" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Value</text>

          <line x1="430" y1="170" x2="488" y2="170" stroke="var(--at-faint)" stroke-width="0.5" stroke-dasharray="3 3"/>
        </svg>
      </div>

      <div class="lib-phase" id="lp1">
        <svg class="proj-svg" width="100%" viewBox="0 0 680 220">
          <rect class="box-q" x="40" y="70" width="160" height="70" rx="10" stroke-width="1"/>
          <text class="t-q" x="120" y="98" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Q: "rivers"</text>
          <text class="t-q" x="120" y="120" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">Your search</text>

          <line x1="200" y1="95" x2="278" y2="95" stroke="var(--at-amber)" stroke-width="2.5" fill="none"/>
          <polygon points="278,90 290,95 278,100" fill="var(--at-amber)"/>
          <line x1="200" y1="118" x2="278" y2="165" stroke="var(--at-amber)" stroke-width="0.8" opacity="0.3" fill="none"/>

          <rect class="box-k" x="290" y="65" width="170" height="52" rx="8" stroke-width="1.5"/>
          <text class="t-k" x="375" y="84" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">K: "Geography"</text>
          <text class="t-k" x="375" y="104" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.8">Strong match!</text>

          <rect class="box-k" x="290" y="140" width="170" height="52" rx="8" stroke-width="0.5" opacity="0.45"/>
          <text class="t-k" x="375" y="159" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central" opacity="0.5">K: "Cooking"</text>
          <text class="t-k" x="375" y="179" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.4">Weak match</text>

          <text class="t-q" x="520" y="91" font-size="14" font-weight="600" dominant-baseline="central">score = 0.9</text>
          <text class="t-muted" x="520" y="166" font-size="14" dominant-baseline="central" opacity="0.5">score = 0.1</text>
        </svg>
      </div>

      <div class="lib-phase" id="lp2">
        <svg class="proj-svg" width="100%" viewBox="0 0 680 220">
          <rect class="box-v" x="50" y="60" width="190" height="52" rx="8" stroke-width="1.5"/>
          <text class="t-v" x="145" y="80" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">V: River atlas</text>
          <text class="t-v" x="145" y="100" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">weight: 90%</text>

          <rect class="box-v" x="50" y="135" width="190" height="52" rx="8" stroke-width="0.5" opacity="0.4"/>
          <text class="t-v" x="145" y="155" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central" opacity="0.45">V: Recipe book</text>
          <text class="t-v" x="145" y="175" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.35">weight: 10%</text>

          <line x1="240" y1="86" x2="368" y2="126" stroke="var(--at-blue)" stroke-width="2.5" fill="none"/>
          <polygon points="368,121 380,126 368,131" fill="var(--at-blue)"/>
          <line x1="240" y1="161" x2="368" y2="141" stroke="var(--at-blue)" stroke-width="0.8" opacity="0.3" fill="none"/>

          <rect class="box-embed" x="380" y="108" width="250" height="52" rx="10" stroke-width="1.5"/>
          <text class="t-purple" x="505" y="128" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Output: 90% rivers</text>
          <text class="t-purple" x="505" y="148" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">+ 10% recipes = new repr.</text>
        </svg>
      </div>
    </div>
    <div class="stepper-caption" id="lib-cap">You walk into the library with a question (Query). Each book has an index card (Key) and its actual content (Value). These are three separate things.</div>
  </div>

  <h2>Step 3: See It in Action</h2>
  <p>Click any token below to make it the "questioner." Watch how the attention weights shift &mdash; each word looks at different parts of the sentence depending on what it needs.</p>

  <div class="diagram-card">
    <div class="diagram-label">Interactive &mdash; Attention Weights</div>
    <div class="attn-wrap">
      <div class="attn-hint">Click a token to see what it attends to</div>
      <div class="attn-tokens" id="attn-toks"></div>
      <svg id="attn-fan" width="100%" viewBox="0 0 680 110"></svg>
      <div id="attn-bars" style="padding: 0 8px;"></div>
      <div class="attn-explain" id="attn-exp"></div>
    </div>
  </div>

  <h2>The Complete Pipeline</h2>

  <div class="step-grid">
    <div class="step-item">
      <div class="step-num s0">0</div>
      <div class="step-text"><strong>Embedding.</strong> Each word becomes a vector of numbers &mdash; its numerical "DNA."</div>
    </div>
    <div class="step-item">
      <div class="step-num s1">1</div>
      <div class="step-text"><strong>Projection.</strong> That vector is multiplied by three learned matrices to create Q, K, and V. Same word, three different lenses.</div>
    </div>
    <div class="step-item">
      <div class="step-num s2">2</div>
      <div class="step-text"><strong>Scoring.</strong> Each token's Q is dot-producted with every other token's K. This answers: "how relevant is token j to token i?"</div>
    </div>
    <div class="step-item">
      <div class="step-num s3">3</div>
      <div class="step-text"><strong>Softmax.</strong> Raw scores are normalized into probabilities that sum to 1. This is the attention distribution.</div>
    </div>
    <div class="step-item">
      <div class="step-num s4">4</div>
      <div class="step-text"><strong>Weighted sum.</strong> Each token's V is scaled by its attention weight, then all are summed. The result is a new representation enriched with context.</div>
    </div>
  </div>

  <div class="insight-card">
    <div class="insight-tag">Key Insight</div>
    <p><strong>Why not just Q and V? Why do we need K?</strong></p>
    <p>The Key and Value are decoupled on purpose. A word's <em>relevance signal</em> (how it advertises itself to queries) is a fundamentally different thing from its <em>information content</em> (what it actually contributes). The model learns these separately.</p>
    <p>"on" might be very relevant to "sat" (Key match is high), but the actual information it passes back (Value) is about spatial relationships &mdash; a different kind of data than what made it match in the first place.</p>
    <p>It's like a librarian (Key: "yes, I have what you need") vs. the actual book (Value: the information you take away). The index card and the book content serve different functions.</p>
  </div>

  <div class="callout">
    <div class="callout-title">The formula</div>
    <p style="font-family: var(--at-font-mono); font-size: 15px; margin-bottom: 0;">Attention(Q, K, V) = softmax(Q &middot; K<sup>T</sup> / &radic;d<sub>k</sub>) &middot; V</p>
  </div>

  <p>The <code>&radic;d_k</code> scaling factor prevents the dot products from growing too large (which would push softmax into extreme 0/1 regions). It keeps the gradients healthy during training.</p>

  <p>And that's it. Every GPT, Claude, Gemini, and Llama model uses this exact mechanism &mdash; stacked dozens of times across layers and attention heads &mdash; to understand language. The magic isn't in any single Q, K, or V lookup. It's in the fact that the model learns <em>what to ask</em>, <em>how to advertise</em>, and <em>what to share</em> &mdash; all from data.</p>

  <div class="article-footer">
    &copy; 2026 harrytruong &middot; A visual explainer
  </div>
</article>
`;

export const script = `
// Library stepper
var libCaps = [
  "You walk into the library with a question (Query). Each book has an index card (Key) and its actual content (Value). These are three separate things.",
  'You compare your Query against every Key (dot product). "Geography" matches your "rivers" question strongly. "Cooking" doesn\\'t. This produces attention scores.',
  "Now you read the Values, but weighted by relevance. You get 90% of the river atlas + 10% of the recipe book. The weighted sum is your new, context-enriched representation."
];

function showLib(n) {
  document.querySelectorAll('.artifact-scope .lib-phase').forEach(function(p, i) { p.classList.toggle('show', i === n); });
  document.querySelectorAll('.artifact-scope .stepper-pill').forEach(function(p, i) { p.classList.toggle('active', i === n); });
  document.getElementById('lib-cap').textContent = libCaps[n];
}

// Interactive attention
var AW = ["The", "cat", "sat", "on", "the", "mat"];
var AS = [
  [0.05, 0.15, 0.30, 0.10, 0.05, 0.35],
  [0.08, 0.25, 0.35, 0.12, 0.05, 0.15],
  [0.05, 0.40, 0.15, 0.25, 0.05, 0.10],
  [0.05, 0.10, 0.30, 0.10, 0.10, 0.35],
  [0.05, 0.08, 0.12, 0.15, 0.10, 0.50],
  [0.04, 0.10, 0.15, 0.30, 0.06, 0.35],
];
var AE = [
  '"The" spreads attention broadly \\u2014 articles don\\'t carry much meaning alone.',
  '"cat" attends strongly to "sat" (what is the cat doing?) and itself.',
  '"sat" looks hard at "cat" (who sat?) and "on" (sat where?).',
  '"on" attends to "sat" (on what action?) and "mat" (on what surface?).',
  '"the" (second) attends heavily to "mat" \\u2014 determining which "the" it is.',
  '"mat" looks at "on" and "sat" to understand its role in the sentence.',
];
var barColors = ['var(--at-faint)', 'var(--at-green)', 'var(--at-amber)', 'var(--at-blue)', 'var(--at-faint)', 'var(--at-violet)'];
var aq = 2;

function renderAttn() {
  var tc = document.getElementById('attn-toks');
  tc.innerHTML = '';
  AW.forEach(function(w, i) {
    var d = document.createElement('div');
    d.className = 'attn-tok' + (i === aq ? ' active' : '');
    d.textContent = w;
    d.onclick = function() { aq = i; renderAttn(); };
    tc.appendChild(d);
  });

  var weights = AS[aq];
  var n = AW.length;
  var sp = 90;
  var sx = 340 - ((n - 1) / 2) * sp;
  var qx = sx + aq * sp;
  var svg = '';

  AW.forEach(function(_, i) {
    var tx = sx + i * sp;
    var lw = 1 + weights[i] * 8;
    var lo = Math.min(0.1 + weights[i] * 1.8, 1);
    svg += '<line x1="' + qx + '" y1="8" x2="' + tx + '" y2="78" stroke="var(--at-amber)" stroke-width="' + lw.toFixed(1) + '" opacity="' + lo.toFixed(2) + '" stroke-linecap="round"/>';
  });

  AW.forEach(function(w, i) {
    var tx = sx + i * sp;
    var isQ = i === aq;
    if (isQ) svg += '<rect x="' + (tx - 32) + '" y="0" width="64" height="24" rx="6" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1"/>';
    svg += '<rect x="' + (tx - 32) + '" y="76" width="64" height="24" rx="6" fill="' + (isQ ? 'var(--at-green-soft)' : 'var(--at-blue-soft)') + '" stroke="' + (isQ ? 'var(--at-green)' : 'var(--at-blue)') + '" stroke-width="0.5"/>';
    if (isQ) svg += '<text x="' + tx + '" y="12" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="600" fill="var(--at-amber)">Q</text>';
    svg += '<text x="' + tx + '" y="88" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="500" fill="' + (isQ ? 'var(--at-green)' : 'var(--at-blue)') + '">' + w + '</text>';
  });

  document.getElementById('attn-fan').innerHTML = svg;

  var bc = document.getElementById('attn-bars');
  var maxW = Math.max.apply(null, weights);
  bc.innerHTML = AW.map(function(w, i) {
    var pct = (weights[i] * 100).toFixed(0);
    var barW = (weights[i] / maxW * 100).toFixed(0);
    return '<div class="bar-row"><span class="bar-word">' + w + '</span><div class="bar-track"><div class="bar-fill" style="width:' + barW + '%;background:' + barColors[i] + ';opacity:' + (0.5 + weights[i] * 1.2) + '"></div></div><span class="bar-pct">' + pct + '%</span></div>';
  }).join('');

  document.getElementById('attn-exp').textContent = AE[aq];
}

renderAttn();
`;
