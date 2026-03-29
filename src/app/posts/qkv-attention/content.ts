export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

  .artifact-scope {
    --bg: #FAFAF8;
    --bg-card: #FFFFFF;
    --bg-code: #F4F3EF;
    --text: #1A1A1A;
    --text-muted: #6B6B6B;
    --text-dim: #9A9A9A;
    --border: #E8E6E1;
    --accent: #E8593C;
    --accent-soft: #FFF0EC;
    --q-color: #EF9F27;
    --q-bg: #FFF8EB;
    --q-text: #7A5200;
    --k-color: #1D9E75;
    --k-bg: #EDFAF4;
    --k-text: #0B5E45;
    --v-color: #378ADD;
    --v-bg: #EBF4FF;
    --v-text: #0C447C;
    --purple: #7F77DD;
    --purple-bg: #F3F2FE;
    --purple-text: #3C3489;
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'Source Sans 3', -apple-system, sans-serif;
    --mono: 'JetBrains Mono', monospace;
  }

  @media (prefers-color-scheme: dark) {
    .artifact-scope {
      --bg: #141413;
      --bg-card: #1E1E1C;
      --bg-code: #252523;
      --text: #EDEDEB;
      --text-muted: #A0A09A;
      --text-dim: #6B6B65;
      --border: #333330;
      --accent: #EF7553;
      --accent-soft: #2D1A14;
      --q-bg: #2D2210;
      --q-text: #FAC775;
      --k-bg: #0D2A20;
      --k-text: #5DCAA5;
      --v-bg: #0D1F30;
      --v-text: #85B7EB;
      --purple-bg: #1E1C38;
      --purple-text: #AFA9EC;
    }
  }

  .artifact-scope, .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--text);
    line-height: 1.75;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .artifact-scope a { color: inherit; text-decoration: none; }

  .artifact-scope .topbar {
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 12px 0;
  }

  .artifact-scope .topbar-inner {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .artifact-scope .topbar-left {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .artifact-scope .topbar-left a {
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .artifact-scope .topbar-left a:hover {
    color: var(--accent);
  }

  .artifact-scope .topbar-left .sep {
    color: var(--text-dim);
  }

  .artifact-scope .topbar-left .current {
    color: var(--accent);
  }

  .artifact-scope .top-bar {
    border-bottom: 1px solid var(--border);
    padding: 14px 0;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-align: center;
    background: var(--bg);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .artifact-scope .top-bar span { color: var(--accent); }

  .artifact-scope article {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .artifact-scope .hero {
    padding: 72px 0 48px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 48px;
  }

  .artifact-scope .hero .tag {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
  }

  .artifact-scope h1 {
    font-family: var(--serif);
    font-size: clamp(36px, 5vw, 52px);
    line-height: 1.12;
    font-weight: 400;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .artifact-scope .subtitle {
    font-size: 20px;
    color: var(--text-muted);
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
    color: var(--text-dim);
  }

  .artifact-scope .meta .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--accent-soft);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    color: var(--accent);
  }

  .artifact-scope .meta .author-name { color: var(--text); font-weight: 500; }

  .artifact-scope h2 {
    font-family: var(--serif);
    font-size: 30px;
    font-weight: 400;
    margin: 56px 0 20px;
    letter-spacing: -0.01em;
  }

  .artifact-scope h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 40px 0 12px;
    color: var(--text);
  }

  .artifact-scope p { margin-bottom: 20px; }

  .artifact-scope .lead { font-size: 19px; color: var(--text-muted); font-weight: 300; }

  .artifact-scope strong { font-weight: 600; }

  .artifact-scope code {
    font-family: var(--mono);
    font-size: 0.88em;
    background: var(--bg-code);
    padding: 2px 7px;
    border-radius: 4px;
    color: var(--accent);
  }

  .artifact-scope .callout {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
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
    color: var(--accent);
    margin-bottom: 8px;
  }

  /* ---- INTERACTIVE DIAGRAMS ---- */

  .artifact-scope .diagram-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    margin: 36px 0;
    overflow: hidden;
  }

  .artifact-scope .diagram-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 16px 24px 0;
  }

  .artifact-scope .diagram-body { padding: 8px 16px 16px; }

  .artifact-scope .diagram-body svg text {
    font-family: var(--sans);
  }

  /* Projection diagram */
  .artifact-scope .proj-svg .box-q { fill: var(--q-bg); stroke: var(--q-color); }
  .artifact-scope .proj-svg .box-k { fill: var(--k-bg); stroke: var(--k-color); }
  .artifact-scope .proj-svg .box-v { fill: var(--v-bg); stroke: var(--v-color); }
  .artifact-scope .proj-svg .box-gray { fill: var(--bg-code); stroke: var(--border); }
  .artifact-scope .proj-svg .box-embed { fill: var(--purple-bg); stroke: var(--purple); }
  .artifact-scope .proj-svg .t-q { fill: var(--q-text); }
  .artifact-scope .proj-svg .t-k { fill: var(--k-text); }
  .artifact-scope .proj-svg .t-v { fill: var(--v-text); }
  .artifact-scope .proj-svg .t-main { fill: var(--text); }
  .artifact-scope .proj-svg .t-muted { fill: var(--text-muted); }
  .artifact-scope .proj-svg .t-purple { fill: var(--purple-text); }
  .artifact-scope .proj-svg .line-q { stroke: var(--q-color); }
  .artifact-scope .proj-svg .line-k { stroke: var(--k-color); }
  .artifact-scope .proj-svg .line-v { stroke: var(--v-color); }
  .artifact-scope .proj-svg .line-gray { stroke: var(--text-dim); }

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
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text-muted);
    transition: all 0.25s;
    user-select: none;
  }

  .artifact-scope .stepper-pill.active {
    background: var(--purple-bg);
    border-color: var(--purple);
    color: var(--purple-text);
  }

  .artifact-scope .stepper-caption {
    text-align: center;
    font-size: 15px;
    color: var(--text-muted);
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
    background: var(--bg-code);
    color: var(--text);
    transition: all 0.2s;
    user-select: none;
  }

  .artifact-scope .attn-tok:hover { border-color: var(--border); }
  .artifact-scope .attn-tok.active { background: var(--q-bg); border-color: var(--q-color); color: var(--q-text); }

  .artifact-scope .attn-hint {
    text-align: center;
    font-size: 12px;
    color: var(--text-dim);
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
    color: var(--text-muted);
  }

  .artifact-scope .bar-track {
    flex: 1;
    height: 22px;
    background: var(--bg-code);
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
    font-family: var(--mono);
    color: var(--text-dim);
  }

  .artifact-scope .attn-explain {
    text-align: center;
    font-size: 14px;
    color: var(--text-muted);
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

  .artifact-scope .step-num.s0 { background: var(--bg-code); color: var(--text-muted); }
  .artifact-scope .step-num.s1 { background: var(--q-bg); color: var(--q-text); }
  .artifact-scope .step-num.s2 { background: var(--k-bg); color: var(--k-text); }
  .artifact-scope .step-num.s3 { background: var(--purple-bg); color: var(--purple-text); }
  .artifact-scope .step-num.s4 { background: var(--v-bg); color: var(--v-text); }

  .artifact-scope .step-text { font-size: 16px; line-height: 1.6; }
  .artifact-scope .step-text strong { font-weight: 600; }

  /* Key insight card */
  .artifact-scope .insight-card {
    background: var(--q-bg);
    border: 1px solid var(--q-color);
    border-radius: 12px;
    padding: 28px 28px;
    margin: 40px 0;
  }

  .artifact-scope .insight-card .insight-tag {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--q-text);
    margin-bottom: 10px;
  }

  .artifact-scope .insight-card p {
    color: var(--q-text);
    margin-bottom: 12px;
    font-size: 16px;
  }

  .artifact-scope .insight-card p:last-child { margin-bottom: 0; }

  /* Footer */
  .artifact-scope .article-footer {
    border-top: 1px solid var(--border);
    margin-top: 56px;
    padding: 32px 0 72px;
    text-align: center;
    color: var(--text-dim);
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
<div class="topbar">
  <div class="topbar-inner">
    <div class="topbar-left">
      <a href="/">harrytruong</a>
      <span class="sep">/</span>
      <span class="current">Q, K, V Attention</span>
    </div>
  </div>
</div>

<article>
  <div class="hero">
    <div class="tag">Deep Dive &mdash; Transformers</div>
    <h1>Q, K, V &mdash; The Heart of LLM Attention, Explained Visually</h1>
    <p class="subtitle">Every modern LLM runs on the same mechanism: self-attention. Here's the intuition behind Query, Key, and Value &mdash; from scratch.</p>
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

          <rect x="280" y="30" width="360" height="190" rx="14" fill="none" stroke="var(--border)" stroke-width="1" stroke-dasharray="6 4"/>
          <text class="t-muted" x="460" y="55" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">LIBRARY</text>

          <rect class="box-k" x="300" y="75" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-k" x="365" y="94" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Index card</text>
          <text class="t-k" x="365" y="112" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Key</text>

          <rect class="box-v" x="490" y="75" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-v" x="555" y="94" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Actual book</text>
          <text class="t-v" x="555" y="112" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Value</text>

          <line x1="430" y1="100" x2="488" y2="100" stroke="var(--text-dim)" stroke-width="0.5" stroke-dasharray="3 3"/>

          <rect class="box-k" x="300" y="145" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-k" x="365" y="164" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Index card</text>
          <text class="t-k" x="365" y="182" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Key</text>

          <rect class="box-v" x="490" y="145" width="130" height="50" rx="8" stroke-width="1"/>
          <text class="t-v" x="555" y="164" text-anchor="middle" font-size="13" font-weight="600" dominant-baseline="central">Actual book</text>
          <text class="t-v" x="555" y="182" text-anchor="middle" font-size="11" dominant-baseline="central" opacity="0.7">= Value</text>

          <line x1="430" y1="170" x2="488" y2="170" stroke="var(--text-dim)" stroke-width="0.5" stroke-dasharray="3 3"/>
        </svg>
      </div>

      <div class="lib-phase" id="lp1">
        <svg class="proj-svg" width="100%" viewBox="0 0 680 220">
          <rect class="box-q" x="40" y="70" width="160" height="70" rx="10" stroke-width="1"/>
          <text class="t-q" x="120" y="98" text-anchor="middle" font-size="14" font-weight="600" dominant-baseline="central">Q: "rivers"</text>
          <text class="t-q" x="120" y="120" text-anchor="middle" font-size="12" dominant-baseline="central" opacity="0.7">Your search</text>

          <line x1="200" y1="95" x2="278" y2="95" stroke="var(--q-color)" stroke-width="2.5" fill="none"/>
          <polygon points="278,90 290,95 278,100" fill="var(--q-color)"/>
          <line x1="200" y1="118" x2="278" y2="165" stroke="var(--q-color)" stroke-width="0.8" opacity="0.3" fill="none"/>

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

          <line x1="240" y1="86" x2="368" y2="126" stroke="var(--v-color)" stroke-width="2.5" fill="none"/>
          <polygon points="368,121 380,126 368,131" fill="var(--v-color)"/>
          <line x1="240" y1="161" x2="368" y2="141" stroke="var(--v-color)" stroke-width="0.8" opacity="0.3" fill="none"/>

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
    <p style="font-family: var(--mono); font-size: 15px; margin-bottom: 0;">Attention(Q, K, V) = softmax(Q &middot; K<sup>T</sup> / &radic;d<sub>k</sub>) &middot; V</p>
  </div>

  <p>The <code>&radic;d_k</code> scaling factor prevents the dot products from growing too large (which would push softmax into extreme 0/1 regions). It keeps the gradients healthy during training.</p>

  <p>And that's it. Every GPT, Claude, Gemini, and Llama model uses this exact mechanism &mdash; stacked dozens of times across layers and attention heads &mdash; to understand language. The magic isn't in any single Q, K, or V lookup. It's in the fact that the model learns <em>what to ask</em>, <em>how to advertise</em>, and <em>what to share</em> &mdash; all from data.</p>

  <div class="article-footer">
    &copy; 2026 harrytruong &middot; Visual explainer inspired by ByteByteGo style
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
var barColors = ['#B4B2A9', '#1D9E75', '#EF9F27', '#378ADD', '#B4B2A9', '#7F77DD'];
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
    svg += '<line x1="' + qx + '" y1="8" x2="' + tx + '" y2="78" stroke="var(--q-color)" stroke-width="' + lw.toFixed(1) + '" opacity="' + lo.toFixed(2) + '" stroke-linecap="round"/>';
  });

  AW.forEach(function(w, i) {
    var tx = sx + i * sp;
    var isQ = i === aq;
    if (isQ) svg += '<rect x="' + (tx - 32) + '" y="0" width="64" height="24" rx="6" fill="var(--q-bg)" stroke="var(--q-color)" stroke-width="1"/>';
    svg += '<rect x="' + (tx - 32) + '" y="76" width="64" height="24" rx="6" fill="' + (isQ ? 'var(--k-bg)' : 'var(--v-bg)') + '" stroke="' + (isQ ? 'var(--k-color)' : 'var(--v-color)') + '" stroke-width="0.5"/>';
    if (isQ) svg += '<text x="' + tx + '" y="12" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="600" fill="var(--q-text)">Q</text>';
    svg += '<text x="' + tx + '" y="88" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="500" fill="' + (isQ ? 'var(--k-text)' : 'var(--v-text)') + '">' + w + '</text>';
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
