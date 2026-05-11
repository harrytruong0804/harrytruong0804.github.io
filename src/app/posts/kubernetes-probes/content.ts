export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500;600&family=Inter+Tight:wght@400;500;600&display=swap');

  .artifact-scope {
    --bg: #F5F1E8;
    --bg-card: #FAF7EE;
    --bg-code: #1C1B17;
    --ink: #1C1B17;
    --ink-muted: #5C584D;
    --ink-faint: #8B8678;
    --rule: #D8D1BD;
    --accent-amber: #C8821C;
    --accent-teal: #1D7D5C;
    --accent-coral: #C04828;
    --accent-amber-bg: #F5E4C4;
    --accent-teal-bg: #CFE9DB;
    --accent-coral-bg: #F2D6CC;

    background: var(--bg);
    color: var(--ink);
    font-family: 'Inter Tight', -apple-system, sans-serif;
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-image:
      radial-gradient(circle at 1px 1px, rgba(28,27,23,0.04) 1px, transparent 0);
    background-size: 24px 24px;
    position: relative;
    z-index: 51;
  }

  .artifact-scope * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ====== Layout ====== */
  .artifact-scope .wrap { max-width: 760px; margin: 0 auto; padding: 0 28px; }
  .artifact-scope .wide { max-width: 920px; margin: 0 auto; padding: 0 28px; }

  /* ====== Top bar ====== */
  .artifact-scope .topbar {
    border-bottom: 1px solid var(--rule);
    padding: 14px 0;
    margin-bottom: 60px;
    background: rgba(245, 241, 232, 0.92);
    backdrop-filter: blur(8px);
  }
  .artifact-scope .topbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 28px;
  }
  .artifact-scope .logo {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: var(--accent-coral);
  }
  .artifact-scope .logo a { color: inherit; text-decoration: none; border: none; }
  .artifact-scope .logo a:hover { opacity: 0.7; background: transparent; color: var(--accent-coral); }
  .artifact-scope .meta-tag {
    background: rgba(192, 72, 40, 0.08);
    border: 1px solid rgba(192, 72, 40, 0.22);
    border-radius: 999px;
    padding: 3px 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-coral);
  }

  /* ====== Header ====== */
  .artifact-scope header.hero { margin-bottom: 70px; }

  .artifact-scope .eyebrow {
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent-coral);
    font-weight: 600;
    margin-bottom: 24px;
    padding: 4px 0;
    border-bottom: 1.5px solid var(--accent-coral);
  }

  .artifact-scope h1.title {
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: clamp(38px, 6vw, 64px);
    line-height: 1.02;
    letter-spacing: -0.025em;
    margin-bottom: 28px;
    color: var(--ink);
  }
  .artifact-scope h1.title em {
    font-style: italic;
    font-weight: 400;
    color: var(--accent-coral);
  }

  .artifact-scope .deck {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    line-height: 1.45;
    color: var(--ink-muted);
    font-weight: 400;
    max-width: 620px;
    margin-bottom: 40px;
  }

  .artifact-scope .byline {
    display: flex;
    gap: 32px;
    padding: 18px 0;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    font-size: 13px;
    color: var(--ink-muted);
  }
  .artifact-scope .byline strong { color: var(--ink); font-weight: 600; }
  .artifact-scope .byline .col-label {
    display: block;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--ink-faint);
    margin-bottom: 4px;
  }

  /* ====== Body content ====== */
  .artifact-scope section { margin-bottom: 64px; }

  .artifact-scope h2 {
    font-family: 'Fraunces', serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    margin-top: 24px;
  }
  .artifact-scope h2 .num {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.15em;
    color: var(--accent-coral);
    margin-bottom: 14px;
    font-weight: 500;
    font-style: normal;
  }

  .artifact-scope h3 {
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.2;
    margin-top: 36px;
    margin-bottom: 14px;
    letter-spacing: -0.01em;
  }

  .artifact-scope p { margin-bottom: 18px; color: var(--ink); }

  .artifact-scope p .lead-cap {
    font-family: 'Fraunces', serif;
    font-weight: 600;
    float: left;
    font-size: 58px;
    line-height: 0.9;
    padding: 6px 8px 0 0;
    color: var(--accent-coral);
  }

  .artifact-scope a { color: var(--accent-coral); text-decoration: none; border-bottom: 1px solid currentColor; }
  .artifact-scope a:hover { background: var(--accent-coral); color: var(--bg); }

  .artifact-scope strong { font-weight: 600; color: var(--ink); }
  .artifact-scope em { font-style: italic; }

  .artifact-scope code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.88em;
    background: rgba(28, 27, 23, 0.06);
    padding: 2px 6px;
    border-radius: 3px;
    color: var(--ink);
  }

  /* ====== Pull quote ====== */
  .artifact-scope blockquote {
    font-family: 'Fraunces', serif;
    font-size: 26px;
    line-height: 1.35;
    font-style: italic;
    font-weight: 400;
    color: var(--ink);
    border-left: 3px solid var(--accent-coral);
    padding: 8px 0 8px 28px;
    margin: 36px 0;
    max-width: 640px;
  }
  .artifact-scope blockquote cite {
    display: block;
    font-family: 'Inter Tight', sans-serif;
    font-style: normal;
    font-size: 13px;
    color: var(--ink-faint);
    margin-top: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* ====== Code block ====== */
  .artifact-scope pre {
    background: var(--bg-code);
    color: #E8E4D6;
    padding: 24px 28px;
    border-radius: 6px;
    overflow-x: auto;
    margin: 24px 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.65;
    position: relative;
  }
  .artifact-scope pre code { background: none; padding: 0; color: inherit; }
  .artifact-scope .code-tag {
    position: absolute;
    top: 12px;
    right: 16px;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(232, 228, 214, 0.5);
  }
  .artifact-scope .tk-key { color: #E5A668; }
  .artifact-scope .tk-str { color: #A8C490; }
  .artifact-scope .tk-num { color: #D08C7B; }
  .artifact-scope .tk-com { color: #6B6859; font-style: italic; }

  /* ====== Probe cards ====== */
  .artifact-scope .probe-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 32px 0;
  }
  @media (max-width: 720px) {
    .artifact-scope .probe-grid { grid-template-columns: 1fr; }
  }
  .artifact-scope .probe-card {
    border: 1px solid var(--rule);
    background: var(--bg-card);
    padding: 24px;
    border-radius: 4px;
    position: relative;
  }
  .artifact-scope .probe-card.startup { border-top: 4px solid var(--accent-amber); }
  .artifact-scope .probe-card.readiness { border-top: 4px solid var(--accent-teal); }
  .artifact-scope .probe-card.liveness { border-top: 4px solid var(--accent-coral); }

  .artifact-scope .probe-card .label {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--ink-faint);
    margin-bottom: 8px;
    font-weight: 600;
  }
  .artifact-scope .probe-card h4 {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }
  .artifact-scope .probe-card.startup h4 { color: var(--accent-amber); }
  .artifact-scope .probe-card.readiness h4 { color: var(--accent-teal); }
  .artifact-scope .probe-card.liveness h4 { color: var(--accent-coral); }

  .artifact-scope .probe-card .question {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 16px;
    color: var(--ink-muted);
    margin-bottom: 16px;
    line-height: 1.4;
  }
  .artifact-scope .probe-card p { font-size: 14px; line-height: 1.55; color: var(--ink-muted); margin-bottom: 0;}

  /* ====== Comparison table ====== */
  .artifact-scope .table-wrap {
    margin: 32px 0;
    border: 1px solid var(--rule);
    border-radius: 4px;
    overflow-x: auto;
    background: var(--bg-card);
  }
  .artifact-scope table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    line-height: 1.5;
  }
  .artifact-scope table th {
    text-align: left;
    padding: 16px 18px;
    background: var(--bg-card);
    border-bottom: 2px solid var(--ink);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    vertical-align: bottom;
  }
  .artifact-scope table th.col-startup { color: var(--accent-amber); }
  .artifact-scope table th.col-readiness { color: var(--accent-teal); }
  .artifact-scope table th.col-liveness { color: var(--accent-coral); }

  .artifact-scope table td {
    padding: 14px 18px;
    border-bottom: 1px solid var(--rule);
    vertical-align: top;
  }
  .artifact-scope table tr:last-child td { border-bottom: none; }
  .artifact-scope table td.row-label { font-weight: 600; color: var(--ink); background: rgba(216, 209, 189, 0.2); }
  .artifact-scope table td code { font-size: 12px; }

  /* ====== Diagram caption ====== */
  .artifact-scope figure {
    margin: 40px 0;
    padding: 28px 0 0;
    border-top: 1px solid var(--rule);
  }
  .artifact-scope figure svg { display: block; width: 100%; height: auto; }
  .artifact-scope figcaption {
    font-size: 13px;
    color: var(--ink-faint);
    text-align: left;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px dotted var(--rule);
    font-style: italic;
    font-family: 'Fraunces', serif;
  }
  .artifact-scope figcaption .fig-num {
    font-family: 'JetBrains Mono', monospace;
    font-style: normal;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--accent-coral);
    text-transform: uppercase;
    margin-right: 10px;
  }

  /* ====== Key insight box ====== */
  .artifact-scope .insight {
    margin: 36px 0;
    padding: 28px 32px;
    background: var(--ink);
    color: var(--bg);
    border-radius: 4px;
    position: relative;
  }
  .artifact-scope .insight::before {
    content: "KEY INSIGHT";
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 10px;
    letter-spacing: 0.18em;
    background: var(--accent-coral);
    color: var(--bg);
    padding: 4px 10px;
    border-radius: 2px;
    font-weight: 600;
  }
  .artifact-scope .insight p { color: var(--bg); margin-bottom: 0; font-size: 17px; line-height: 1.55;}
  .artifact-scope .insight strong { color: var(--accent-amber-bg); }

  /* ====== Bullets ====== */
  .artifact-scope ul.numbered {
    list-style: none;
    counter-reset: step;
    margin: 24px 0;
  }
  .artifact-scope ul.numbered li {
    counter-increment: step;
    padding-left: 48px;
    position: relative;
    margin-bottom: 18px;
  }
  .artifact-scope ul.numbered li::before {
    content: counter(step, decimal-leading-zero);
    position: absolute;
    left: 0;
    top: 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--accent-coral);
    font-weight: 600;
    width: 36px;
    border-bottom: 1px solid var(--accent-coral);
    padding-bottom: 4px;
  }

  /* ====== Footer ====== */
  .artifact-scope .footer {
    margin-top: 100px;
    padding: 40px 0 60px;
    border-top: 1px solid var(--rule);
    font-size: 13px;
    color: var(--ink-faint);
    text-align: center;
  }
  .artifact-scope .footer p { color: var(--ink-faint); }
  .artifact-scope .footer .ornament {
    font-family: 'Fraunces', serif;
    font-size: 24px;
    color: var(--accent-coral);
    margin-bottom: 12px;
  }

  /* ====== Anchor reveal animation ====== */
  @media (prefers-reduced-motion: no-preference) {
    .artifact-scope section,
    .artifact-scope figure,
    .artifact-scope .probe-grid,
    .artifact-scope .table-wrap,
    .artifact-scope .insight,
    .artifact-scope blockquote {
      animation: artifactFadeUp 0.6s ease-out backwards;
    }
  }
  @keyframes artifactFadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ====== Inline color swatches ====== */
  .artifact-scope .swatch {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 6px;
    vertical-align: middle;
  }
  .artifact-scope .swatch.amber { background: var(--accent-amber); }
  .artifact-scope .swatch.teal { background: var(--accent-teal); }
  .artifact-scope .swatch.coral { background: var(--accent-coral); }
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">DEEP DIVE — KUBERNETES</span>
  </div>
</div>

<div class="wrap">

<header class="hero">
  <span class="eyebrow">Kubernetes Deep Dive</span>
  <h1 class="title">The Three Probes:<br>How Kubernetes <em>actually</em> decides your pod is alive.</h1>
  <p class="deck">Every Kubernetes manifest has three little health-check blocks that look almost identical. They aren't. Each one runs at a different time, asks a different question, and triggers a different reaction when it fails. Mix them up and you'll either route traffic to a dead pod, or kill a healthy one for no reason.</p>

  <div class="byline">
    <div>
      <span class="col-label">Topic</span>
      <strong>Startup, Readiness, Liveness</strong>
    </div>
    <div>
      <span class="col-label">Difficulty</span>
      <strong>Intermediate</strong>
    </div>
    <div>
      <span class="col-label">Reading time</span>
      <strong>11 minutes</strong>
    </div>
  </div>
</header>

<section>
<h2><span class="num">01 &middot; The Setup</span>A YAML block that hides a lot.</h2>

<p><span class="lead-cap">M</span>ost teams write something like the block below, copy it from a Helm chart, and move on. The fields look so similar that they feel interchangeable &mdash; same path style, same period, same threshold. They aren't. The differences are buried in the <em>consequences</em> of failure, not in the syntax.</p>

<pre><span class="code-tag">values.yaml</span><code><span class="tk-key">liveness:</span>
  <span class="tk-key">enabled:</span> <span class="tk-num">true</span>
  <span class="tk-key">path:</span> <span class="tk-str">/live</span>
  <span class="tk-key">initialDelaySeconds:</span> <span class="tk-num">10</span>
  <span class="tk-key">periodSeconds:</span> <span class="tk-num">30</span>
  <span class="tk-key">failureThreshold:</span> <span class="tk-num">3</span>
  <span class="tk-key">timeoutSeconds:</span> <span class="tk-num">10</span>

<span class="tk-key">readiness:</span>
  <span class="tk-key">enabled:</span> <span class="tk-num">true</span>
  <span class="tk-key">path:</span> <span class="tk-str">/ready</span>
  <span class="tk-key">initialDelaySeconds:</span> <span class="tk-num">10</span>
  <span class="tk-key">periodSeconds:</span> <span class="tk-num">10</span>
  <span class="tk-key">failureThreshold:</span> <span class="tk-num">3</span>
  <span class="tk-key">timeoutSeconds:</span> <span class="tk-num">10</span>

<span class="tk-key">startup:</span>
  <span class="tk-key">enabled:</span> <span class="tk-num">true</span>
  <span class="tk-key">path:</span> <span class="tk-str">/health</span>
  <span class="tk-key">initialDelaySeconds:</span> <span class="tk-num">30</span>
  <span class="tk-key">periodSeconds:</span> <span class="tk-num">10</span>
  <span class="tk-key">failureThreshold:</span> <span class="tk-num">60</span>   <span class="tk-com"># 60 &times; 10s = 10 minutes max startup window</span>
  <span class="tk-key">timeoutSeconds:</span> <span class="tk-num">5</span></code></pre>

<p>Three probes, three endpoints, three behaviors. The fastest way to understand them is to imagine your container as a new employee on their first day:</p>

<div class="probe-grid">
  <div class="probe-card startup">
    <div class="label">Probe 01</div>
    <h4>Startup</h4>
    <p class="question">"Have you arrived at the office yet?"</p>
    <p>Runs only at boot. Stops forever after the first pass. Buys time for slow-starting apps without weakening the other two probes.</p>
  </div>
  <div class="probe-card readiness">
    <div class="label">Probe 02</div>
    <h4>Readiness</h4>
    <p class="question">"Are you ready to take customers?"</p>
    <p>Runs forever, on a fixed cadence. The only probe that controls traffic. Failing it removes the pod from the Service endpoints &mdash; <em>but does not kill it</em>.</p>
  </div>
  <div class="probe-card liveness">
    <div class="label">Probe 03</div>
    <h4>Liveness</h4>
    <p class="question">"Are you still breathing?"</p>
    <p>Runs forever, on a fixed cadence. The only probe that restarts your container. Failing it means Kubernetes gives up and reboots you.</p>
  </div>
</div>

<p>Notice the asymmetry: <strong>only readiness controls traffic, only liveness and startup restart the container.</strong> That single sentence explains 80% of the confusion teams have with these probes.</p>
</section>

<section>
<h2><span class="num">02 &middot; The Lifecycle</span>When each probe runs, and what happens when it fails.</h2>

<p>The three probes operate on a timeline. Startup runs first and acts as a gate &mdash; while it's still running, the other two are blocked. Once it passes, it shuts down for good and hands control to readiness and liveness, which then tick independently for the rest of the pod's life.</p>

<figure>
<svg viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="lifecycle-title">
  <title id="lifecycle-title">Pod lifecycle showing probe sequence and failure consequences</title>
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <line x1="40" y1="100" x2="720" y2="100" stroke="#5C584D" stroke-width="1"/>
  <circle cx="40" cy="100" r="4" fill="#1C1B17"/>
  <circle cx="280" cy="100" r="4" fill="#1C1B17"/>
  <circle cx="720" cy="100" r="4" fill="#1C1B17"/>
  <text x="40" y="86" font-family="Inter Tight, sans-serif" font-size="12" fill="#5C584D">Container starts</text>
  <text x="280" y="86" font-family="Inter Tight, sans-serif" font-size="12" fill="#5C584D" text-anchor="middle">Startup passes</text>
  <text x="720" y="86" font-family="Inter Tight, sans-serif" font-size="12" fill="#5C584D" text-anchor="end">Container running</text>

  <rect x="40" y="130" width="240" height="80" rx="6" fill="#F5E4C4" stroke="#C8821C" stroke-width="0.8"/>
  <text x="160" y="160" font-family="Fraunces, serif" font-size="16" font-weight="600" fill="#7A5210" text-anchor="middle">Startup probe</text>
  <text x="160" y="180" font-family="Inter Tight, sans-serif" font-size="12" fill="#7A5210" text-anchor="middle">"Did you finish booting?"</text>
  <text x="160" y="196" font-family="Inter Tight, sans-serif" font-size="12" font-style="italic" fill="#7A5210" text-anchor="middle">Runs ONCE, then stops forever</text>

  <rect x="300" y="130" width="420" height="80" rx="6" fill="#CFE9DB" stroke="#1D7D5C" stroke-width="0.8"/>
  <text x="510" y="160" font-family="Fraunces, serif" font-size="16" font-weight="600" fill="#0E5440" text-anchor="middle">Readiness probe</text>
  <text x="510" y="180" font-family="Inter Tight, sans-serif" font-size="12" fill="#0E5440" text-anchor="middle">"Ready to serve traffic?"</text>
  <text x="510" y="196" font-family="Inter Tight, sans-serif" font-size="12" font-style="italic" fill="#0E5440" text-anchor="middle">Ticks continuously, every periodSeconds</text>

  <rect x="300" y="230" width="420" height="80" rx="6" fill="#F2D6CC" stroke="#C04828" stroke-width="0.8"/>
  <text x="510" y="260" font-family="Fraunces, serif" font-size="16" font-weight="600" fill="#8E2F18" text-anchor="middle">Liveness probe</text>
  <text x="510" y="280" font-family="Inter Tight, sans-serif" font-size="12" fill="#8E2F18" text-anchor="middle">"Still alive, not deadlocked?"</text>
  <text x="510" y="296" font-family="Inter Tight, sans-serif" font-size="12" font-style="italic" fill="#8E2F18" text-anchor="middle">Ticks continuously, every periodSeconds</text>

  <line x1="280" y1="170" x2="290" y2="170" stroke="#5C584D" stroke-width="1"/>
  <line x1="290" y1="170" x2="290" y2="270" stroke="#5C584D" stroke-width="1"/>
  <line x1="290" y1="170" x2="298" y2="170" stroke="#5C584D" stroke-width="1" marker-end="url(#ar)"/>
  <line x1="290" y1="270" x2="298" y2="270" stroke="#5C584D" stroke-width="1" marker-end="url(#ar)"/>
  <text x="290" y="120" font-family="Inter Tight, sans-serif" font-size="11" font-style="italic" fill="#5C584D" text-anchor="middle">Gate opens</text>

  <rect x="40" y="340" width="680" height="100" rx="6" fill="#FAF7EE" stroke="#D8D1BD" stroke-width="1"/>
  <text x="60" y="365" font-family="Fraunces, serif" font-size="14" font-weight="600" fill="#1C1B17">Failure consequences (this is what really separates them):</text>

  <circle cx="70" cy="390" r="4" fill="#C8821C"/>
  <text x="84" y="394" font-family="Inter Tight, sans-serif" font-size="13" fill="#1C1B17">Startup fails &rarr; container killed and restarted (per restartPolicy)</text>

  <circle cx="70" cy="412" r="4" fill="#1D7D5C"/>
  <text x="84" y="416" font-family="Inter Tight, sans-serif" font-size="13" fill="#1C1B17">Readiness fails &rarr; pod removed from Service endpoints. NO restart. Pod keeps running, just receives no traffic.</text>

  <circle cx="70" cy="434" r="4" fill="#C04828"/>
  <text x="84" y="438" font-family="Inter Tight, sans-serif" font-size="13" fill="#1C1B17">Liveness fails &rarr; container killed and restarted. This is how Kubernetes self-heals a hung app.</text>
</svg>
<figcaption><span class="fig-num">Fig. 01</span>Startup is a gate. Once it passes, it leaves the stage and the other two take over.</figcaption>
</figure>

<p>The asymmetry of consequences is the entire point. Three checks, two outcomes:</p>

<ul class="numbered">
  <li><strong>Quarantine.</strong> Only readiness can do this. Failing readiness says "I'm alive but temporarily indisposed &mdash; don't send me work." The pod stays in the cluster, keeps its IP, keeps its connections, and resumes serving as soon as it passes again.</li>
  <li><strong>Execution.</strong> Startup and liveness both do this. Failing either one says "this process is broken &mdash; reboot it." The container is killed, restart counter increments, and a fresh container takes its place.</li>
</ul>
</section>

<section>
<h2><span class="num">03 &middot; Side by Side</span>The differences that actually matter.</h2>

<p>Most blog posts list every YAML field. That's noise. Here's the comparison reduced to what changes your runtime behavior.</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th class="col-startup"><span class="swatch amber"></span>Startup</th>
      <th class="col-readiness"><span class="swatch teal"></span>Readiness</th>
      <th class="col-liveness"><span class="swatch coral"></span>Liveness</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="row-label">Question asked</td>
      <td>Has the app finished booting?</td>
      <td>Is the app ready to serve requests?</td>
      <td>Is the app alive and healthy?</td>
    </tr>
    <tr>
      <td class="row-label">When it runs</td>
      <td>Only during startup. Stops permanently after the first pass.</td>
      <td>Continuously, for the entire container lifecycle.</td>
      <td>Continuously, but only after startup has passed.</td>
    </tr>
    <tr>
      <td class="row-label">Failure consequence</td>
      <td>Container killed and restarted.</td>
      <td>Pod removed from Service endpoints. <strong>No restart.</strong></td>
      <td>Container killed and restarted.</td>
    </tr>
    <tr>
      <td class="row-label">Effect on traffic</td>
      <td>Blocks the other probes; pod receives no traffic during startup.</td>
      <td>Directly toggles traffic on and off.</td>
      <td>Indirect, via restart.</td>
    </tr>
    <tr>
      <td class="row-label">Typical endpoint</td>
      <td><code>/health</code> or <code>/startup</code></td>
      <td><code>/ready</code> &mdash; checks DB, cache, dependencies</td>
      <td><code>/live</code> &mdash; checks the app process only, never dependencies</td>
    </tr>
    <tr>
      <td class="row-label">Recommended cadence</td>
      <td>Aggressive period (5&ndash;10s), high <code>failureThreshold</code> (30&ndash;60)</td>
      <td>Medium period (5&ndash;10s)</td>
      <td>Slower period (15&ndash;30s), low <code>failureThreshold</code> (3)</td>
    </tr>
  </tbody>
</table>
</div>

<p>One row deserves special attention: <em>typical endpoint</em>. The single most common mistake teams make is pointing all three probes at the same URL. When that endpoint also checks the database and the database hiccups, liveness fails, the container gets restarted, the new container also can't reach the database, and now you have a restart loop that solves nothing. The database is still down; you've just added churn on top of it.</p>

<blockquote>
  Liveness must never depend on anything you don't control. If your <code>/live</code> endpoint touches the database, you've handed Kubernetes a loaded weapon and asked it to shoot whenever the network is bad.
  <cite>&mdash; Hard-earned production wisdom</cite>
</blockquote>
</section>

<section>
<h2><span class="num">04 &middot; The Case for Startup</span>Why a third probe exists at all.</h2>

<p>"I already have readiness and liveness &mdash; why do I need startup?" This is the most common question, and the answer is a specific race condition: <strong>apps that boot slowly get killed by their own liveness probe before they can finish starting up.</strong></p>

<p>Imagine an ML service that needs 90 seconds to load a model into memory. You configure liveness with <code>periodSeconds: 30</code>, <code>failureThreshold: 3</code> &mdash; sensible production values. Here's what happens:</p>

<figure>
<svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="race-title">
  <title id="race-title">Race condition between slow startup and aggressive liveness probe</title>
  <defs>
    <marker id="ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <text x="40" y="28" font-family="Fraunces, serif" font-size="16" font-weight="600" fill="#1C1B17">A. Without a startup probe</text>
  <text x="40" y="46" font-family="Inter Tight, sans-serif" font-size="13" fill="#5C584D">Liveness checks an app that's still loading a model</text>

  <line x1="60" y1="90" x2="720" y2="90" stroke="#5C584D" stroke-width="0.8"/>
  <text x="60" y="78" font-family="JetBrains Mono, monospace" font-size="11" fill="#5C584D">0s</text>
  <text x="225" y="78" font-family="JetBrains Mono, monospace" font-size="11" fill="#5C584D">30s</text>
  <text x="390" y="78" font-family="JetBrains Mono, monospace" font-size="11" fill="#5C584D">60s</text>
  <text x="555" y="78" font-family="JetBrains Mono, monospace" font-size="11" fill="#5C584D">90s</text>
  <text x="720" y="78" font-family="JetBrains Mono, monospace" font-size="11" fill="#5C584D" text-anchor="end">120s</text>

  <rect x="60" y="105" width="495" height="24" rx="4" fill="#F5E4C4" stroke="#C8821C" stroke-width="0.8"/>
  <text x="307" y="121" font-family="Inter Tight, sans-serif" font-size="12" fill="#7A5210" text-anchor="middle">App is loading model, warming caches, initializing connections&hellip;</text>

  <text x="60" y="160" font-family="Inter Tight, sans-serif" font-size="13" fill="#1C1B17">Liveness probe (period 30s):</text>
  <circle cx="225" cy="178" r="6" fill="#C04828"/>
  <circle cx="390" cy="178" r="6" fill="#C04828"/>
  <circle cx="555" cy="178" r="6" fill="#C04828"/>
  <text x="225" y="205" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#8E2F18" text-anchor="middle">FAIL</text>
  <text x="390" y="205" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#8E2F18" text-anchor="middle">FAIL</text>
  <text x="555" y="205" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#8E2F18" text-anchor="middle">FAIL &rarr; KILL</text>

  <line x1="555" y1="90" x2="555" y2="220" stroke="#C04828" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="575" y="230" font-family="Inter Tight, sans-serif" font-size="12" font-style="italic" fill="#8E2F18">Restart loop. Pod never reaches Ready.</text>

  <line x1="40" y1="255" x2="720" y2="255" stroke="#D8D1BD" stroke-width="1"/>

  <text x="40" y="285" font-family="Fraunces, serif" font-size="16" font-weight="600" fill="#1C1B17">B. With a startup probe</text>
  <text x="40" y="303" font-family="Inter Tight, sans-serif" font-size="13" fill="#5C584D">Startup gates liveness until the app is ready</text>

  <line x1="60" y1="340" x2="720" y2="340" stroke="#5C584D" stroke-width="0.8"/>

  <rect x="60" y="355" width="495" height="24" rx="4" fill="#F5E4C4" stroke="#C8821C" stroke-width="0.8"/>
  <text x="307" y="371" font-family="Inter Tight, sans-serif" font-size="12" fill="#7A5210" text-anchor="middle">Startup probe is checking &mdash; liveness and readiness are NOT running</text>

  <circle cx="555" cy="367" r="9" fill="#1D7D5C"/>
  <text x="572" y="372" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#0E5440">PASS</text>

  <rect x="565" y="392" width="155" height="24" rx="4" fill="#F2D6CC" stroke="#C04828" stroke-width="0.8"/>
  <text x="642" y="408" font-family="Inter Tight, sans-serif" font-size="12" fill="#8E2F18" text-anchor="middle">Liveness takes over &rarr;</text>
</svg>
<figcaption><span class="fig-num">Fig. 02</span>Startup buys time for slow-booting apps without forcing you to weaken liveness for the steady-state.</figcaption>
</figure>

<p>The startup probe exists because liveness has two competing goals: be aggressive enough to catch a hung process within seconds, but lenient enough to let a 90-second boot finish. You can't satisfy both with one probe. Startup separates the concerns &mdash; it can be patient (10 minutes of retries is fine), and liveness can stay sharp (failure within 90 seconds).</p>

<div class="insight">
<p><strong>The mental model:</strong> startup is a one-shot timer. Liveness and readiness are two independent recurring timers. They don't coordinate, they don't pause for each other, and they don't care whether the pod is healthy &mdash; they just tick.</p>
</div>
</section>

<section>
<h2><span class="num">05 &middot; Periodic Behavior</span>What "ticking continuously" actually looks like.</h2>

<p>Once the pod is healthy and all three probes have passed, the runtime behavior is often misunderstood. Specifically:</p>

<ul class="numbered">
  <li><strong>Startup stops.</strong> After the first pass, the kubelet never calls the startup endpoint again. Not after restarts of liveness, not after the pod recovers from a readiness blip &mdash; never. It only fires again if the container itself restarts.</li>
  <li><strong>Readiness and liveness run forever, on their own schedules.</strong> They are independent timers. Readiness with <code>periodSeconds: 10</code> ticks every 10 seconds. Liveness with <code>periodSeconds: 30</code> ticks every 30 seconds. They do not pause for each other or for the pod's health state.</li>
</ul>

<figure>
<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ticking-title">
  <title id="ticking-title">Periodic ticking of all three probes</title>

  <text x="40" y="28" font-family="Fraunces, serif" font-size="18" font-weight="600" fill="#1C1B17">Probe ticks once the pod is steady</text>

  <text x="80" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">0s</text>
  <text x="160" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">30s</text>
  <text x="240" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">60s</text>
  <text x="320" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">90s</text>
  <text x="400" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">120s</text>
  <text x="480" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">150s</text>
  <text x="560" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">180s</text>
  <text x="640" y="60" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">210s</text>
  <line x1="80" y1="70" x2="720" y2="70" stroke="#5C584D" stroke-width="0.5"/>

  <text x="40" y="110" font-family="Fraunces, serif" font-size="14" font-weight="600" fill="#C8821C">Startup</text>
  <text x="40" y="126" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">period 10s</text>

  <line x1="80" y1="140" x2="80" y2="170" stroke="#C8821C" stroke-width="2"/>
  <line x1="107" y1="140" x2="107" y2="170" stroke="#C8821C" stroke-width="2"/>
  <line x1="134" y1="140" x2="134" y2="170" stroke="#C8821C" stroke-width="2"/>
  <line x1="161" y1="140" x2="161" y2="170" stroke="#C8821C" stroke-width="2"/>
  <line x1="188" y1="140" x2="188" y2="170" stroke="#C8821C" stroke-width="2"/>
  <circle cx="215" cy="155" r="7" fill="#1D7D5C"/>
  <text x="215" y="192" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="#0E5440" text-anchor="middle">PASS</text>

  <rect x="232" y="143" width="488" height="24" fill="#EDEAE0" rx="3"/>
  <text x="476" y="158" font-family="Inter Tight, sans-serif" font-size="12" font-style="italic" fill="#8B8678" text-anchor="middle">silent &mdash; never runs again</text>

  <text x="40" y="235" font-family="Fraunces, serif" font-size="14" font-weight="600" fill="#1D7D5C">Readiness</text>
  <text x="40" y="251" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">period 10s</text>

  <g>
    <line x1="215" y1="265" x2="215" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="242" y1="265" x2="242" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="269" y1="265" x2="269" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="296" y1="265" x2="296" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="323" y1="265" x2="323" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="350" y1="265" x2="350" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="377" y1="265" x2="377" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="404" y1="265" x2="404" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="431" y1="265" x2="431" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="458" y1="265" x2="458" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="485" y1="265" x2="485" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="512" y1="265" x2="512" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="539" y1="265" x2="539" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="566" y1="265" x2="566" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="593" y1="265" x2="593" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="620" y1="265" x2="620" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="647" y1="265" x2="647" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="674" y1="265" x2="674" y2="295" stroke="#1D7D5C" stroke-width="2"/>
    <line x1="701" y1="265" x2="701" y2="295" stroke="#1D7D5C" stroke-width="2"/>
  </g>
  <text x="720" y="316" font-family="Inter Tight, sans-serif" font-size="11" font-style="italic" fill="#0E5440" text-anchor="end">&rarr; ticks forever, every 10s</text>

  <text x="40" y="360" font-family="Fraunces, serif" font-size="14" font-weight="600" fill="#C04828">Liveness</text>
  <text x="40" y="376" font-family="JetBrains Mono, monospace" font-size="10" fill="#5C584D">period 30s</text>

  <line x1="215" y1="390" x2="215" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <line x1="296" y1="390" x2="296" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <line x1="377" y1="390" x2="377" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <line x1="458" y1="390" x2="458" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <line x1="539" y1="390" x2="539" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <line x1="620" y1="390" x2="620" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <line x1="701" y1="390" x2="701" y2="420" stroke="#C04828" stroke-width="2.5"/>
  <text x="720" y="440" font-family="Inter Tight, sans-serif" font-size="11" font-style="italic" fill="#8E2F18" text-anchor="end">&rarr; ticks forever, every 30s</text>

  <line x1="215" y1="210" x2="215" y2="430" stroke="#5C584D" stroke-width="0.5" stroke-dasharray="3 3"/>
  <text x="215" y="465" font-family="Inter Tight, sans-serif" font-size="11" font-style="italic" fill="#8B8678" text-anchor="middle">gate opens here</text>
</svg>
<figcaption><span class="fig-num">Fig. 03</span>Startup is a one-shot. Readiness and liveness are two independent clocks ticking forever.</figcaption>
</figure>

<h3>Doing the math</h3>
<p>With the YAML at the top of this article, the kubelet makes the following calls per pod per hour, once the pod is healthy:</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>Probe</th>
      <th>Period</th>
      <th>Calls per hour</th>
      <th>Endpoint</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="row-label"><span class="swatch amber"></span>Startup</td>
      <td>10s</td>
      <td><strong>0</strong> (already passed)</td>
      <td><code>/health</code></td>
    </tr>
    <tr>
      <td class="row-label"><span class="swatch teal"></span>Readiness</td>
      <td>10s</td>
      <td><strong>360</strong> calls = ~8,640/day</td>
      <td><code>/ready</code></td>
    </tr>
    <tr>
      <td class="row-label"><span class="swatch coral"></span>Liveness</td>
      <td>30s</td>
      <td><strong>120</strong> calls = ~2,880/day</td>
      <td><code>/live</code></td>
    </tr>
  </tbody>
</table>
</div>

<p>That's <strong>~11,520 health-check requests per pod per day</strong>. Scale to 10 replicas and you're looking at 115,000 calls a day &mdash; just to confirm the pod is fine. Now you understand why your health endpoints should be the cheapest code in your service.</p>

<h3>Who actually calls the endpoint?</h3>
<p>A subtle but important detail: probes are not executed by the Kubernetes control plane. Each node's <strong>kubelet</strong> runs the probes for the containers on that same node. The implications:</p>

<ul class="numbered">
  <li>Probe requests come from <code>127.0.0.1</code> &mdash; the node's localhost. They don't traverse a Service, don't hit a load balancer, don't go through any ingress.</li>
  <li>The kubelet maintains a separate goroutine for every probe on every container. They run concurrently.</li>
  <li>If a pod is rescheduled from node A to node B, the kubelet on node B picks up probing transparently.</li>
  <li>Your health endpoints should not require authentication &mdash; the kubelet has no credentials. And you should probably suppress access logs for them, or your log volume will be dominated by probe noise.</li>
</ul>

<h3>Gotchas around timing</h3>
<p><strong>Period is not a guarantee.</strong> If <code>periodSeconds: 10</code> and your endpoint takes 8 seconds to respond, the next probe doesn't start 2 seconds after that &mdash; the kubelet waits for the response (or timeout) before counting the next period. In practice, period is the spacing between probe <em>starts</em>, but a slow probe still blocks the following one.</p>

<p><strong>Failure counters reset on pass.</strong> With <code>failureThreshold: 3</code>, two consecutive failures followed by one success resets the counter to zero. You need three failures in a row to trigger the action.</p>

<p><strong>Probes run in parallel across containers within a pod.</strong> A pod with three containers has three independent probe pipelines, each obeying its own configuration.</p>
</section>

<section>
<h2><span class="num">06 &middot; Applied to Real Config</span>Reading the YAML at the top with new eyes.</h2>

<p>Look back at the original block. With the model in place, here's what each section actually says:</p>

<pre><span class="code-tag">interpreted</span><code><span class="tk-key">startup:</span>    <span class="tk-com"># up to 60 &times; 10 = 600s (10 minutes) for the app to boot</span>
            <span class="tk-com"># kubelet calls /health every 10s during this window</span>

<span class="tk-key">readiness:</span>  <span class="tk-com"># every 10s, kubelet calls /ready</span>
            <span class="tk-com"># 3 consecutive failures (30s) &rarr; pod removed from Service endpoints</span>
            <span class="tk-com"># 1 success &rarr; back in rotation</span>

<span class="tk-key">liveness:</span>   <span class="tk-com"># every 30s, kubelet calls /live</span>
            <span class="tk-com"># 3 consecutive failures (90s) &rarr; container killed and restarted</span></code></pre>

<p>Three things to verify in any config you write:</p>

<ul class="numbered">
  <li><strong>Three distinct endpoints.</strong> <code>/health</code>, <code>/ready</code>, and <code>/live</code> doing different work. <code>/live</code> checks only the process (event loop alive, not deadlocked). <code>/ready</code> checks dependencies the pod needs to serve a request (DB, cache, downstream service). <code>/health</code> &mdash; the startup target &mdash; can be the same as <code>/ready</code> or stricter.</li>
  <li><strong>Liveness timeout is small.</strong> A <code>timeoutSeconds: 10</code> on liveness is suspicious. The endpoint should respond in milliseconds; ten seconds means you're doing too much. Aim for 1&ndash;3 seconds.</li>
  <li><strong>Startup budget matches reality.</strong> 600 seconds is a lot. Only configure it that wide if your app genuinely takes that long to boot (loading a large ML model, warming a substantial cache). For a typical API server, 60&ndash;120 seconds is more than enough.</li>
</ul>
</section>

<section>
<h2><span class="num">07 &middot; The One-Liner</span>How to keep this in your head.</h2>

<blockquote>
Startup asks <em>"are you born yet?"</em><br>
Readiness asks <em>"can I send you customers?"</em><br>
Liveness asks <em>"are you still breathing?"</em><br><br>
Fail readiness and you're quarantined. Fail liveness or startup and you're terminated and reborn.
</blockquote>

<p>The most common failure mode in production is using a single endpoint for all three probes. When the database fails, that shared endpoint fails, liveness kills the container, the new container can't reach the database either, and you've built a perpetual restart engine that does nothing useful. Splitting the endpoints lets Kubernetes respond appropriately: route traffic away when a dependency is down, but only restart when the process itself is broken.</p>

<p>That's the whole trick. Three probes, two outcomes, and one rule: <strong>never let liveness depend on anything you don't control.</strong></p>
</section>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong &middot; Kubernetes deep dive &middot; May 2026</p>
  <p style="margin-top: 8px;">Filed under: containers, orchestration, production hygiene</p>
</div>

</div>
`;

export const script = ``;
