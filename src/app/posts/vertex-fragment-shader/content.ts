export const styles = `
  .artifact-scope {
    font-size: 17px;
    line-height: 1.65;
    letter-spacing: -0.005em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    position: relative;
    z-index: 51;
  }

  .artifact-scope * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ====== Hero (project pattern) ====== */
  .artifact-scope .hero-wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px 60px; border-bottom: 2px solid var(--at-line-strong); }
  .artifact-scope header.hero { margin-bottom: 0; padding-top: 20px; }

  .artifact-scope .eyebrow {
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--at-accent);
    font-weight: 600;
    margin-bottom: 24px;
    padding: 4px 0;
    border-bottom: 1.5px solid var(--at-accent);
  }

  .artifact-scope h1.title {
    font-family: var(--at-font-display);
    font-weight: 800;
    font-size: clamp(40px, 7vw, 88px);
    line-height: 0.98;
    letter-spacing: -0.035em;
    margin-bottom: 28px;
    color: var(--at-text);
  }
  .artifact-scope h1.title .v { color: var(--at-blue); font-style: italic; font-weight: 800; }
  .artifact-scope h1.title .f { color: var(--at-amber); font-style: italic; font-weight: 800; }
  .artifact-scope h1.title .vs {
    font-family: var(--at-font-mono);
    font-size: 0.32em;
    vertical-align: middle;
    color: var(--at-bg);
    background: var(--at-accent);
    padding: 4px 14px;
    margin: 0 8px;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .artifact-scope .deck {
    font-family: var(--at-font-display);
    font-size: 22px;
    line-height: 1.45;
    color: var(--at-muted);
    font-weight: 400;
    font-style: italic;
    max-width: 720px;
    margin-bottom: 40px;
  }

  .artifact-scope .byline {
    display: flex;
    gap: 32px;
    padding: 18px 0;
    border-top: 1px solid var(--at-line);
    border-bottom: 1px solid var(--at-line);
    font-size: 13px;
    color: var(--at-muted);
    flex-wrap: wrap;
  }
  .artifact-scope .byline strong { color: var(--at-text); font-weight: 600; }
  .artifact-scope .byline .col-label {
    display: block;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--at-faint);
    margin-bottom: 4px;
  }

  /* ====== Main content ====== */
  .artifact-scope main { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

  .artifact-scope section { padding: 72px 0; border-bottom: 1px solid var(--at-line); }
  .artifact-scope section:last-of-type { border-bottom: none; }

  .artifact-scope .section-num {
    font-family: var(--at-font-mono);
    font-size: 12px;
    letter-spacing: 0.25em;
    color: var(--at-faint);
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .artifact-scope .section-num::before {
    content: '';
    width: 48px; height: 1px; background: var(--at-line-strong);
  }

  .artifact-scope h2 {
    font-family: var(--at-font-display);
    font-weight: 800;
    font-size: clamp(34px, 4.5vw, 56px);
    line-height: 1.05;
    letter-spacing: -0.025em;
    margin-bottom: 28px;
    max-width: 900px;
  }
  .artifact-scope h2 em { font-style: italic; color: var(--at-blue); }

  .artifact-scope h3 {
    font-family: var(--at-font-display);
    font-weight: 700;
    font-size: 24px;
    margin: 36px 0 14px;
    letter-spacing: -0.015em;
  }

  .artifact-scope p { margin-bottom: 16px; max-width: 70ch; color: var(--at-text); }
  .artifact-scope p.lead {
    font-size: 21px;
    line-height: 1.55;
    font-family: var(--at-font-display);
    font-weight: 400;
    max-width: 60ch;
    margin-bottom: 28px;
  }

  .artifact-scope strong { font-weight: 600; color: var(--at-text); }
  .artifact-scope em { font-style: italic; }

  /* ====== Two-column ====== */
  .artifact-scope .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin: 40px 0;
    border: 1px solid var(--at-line-strong);
    background: var(--at-surface);
  }
  .artifact-scope .two-col > div { padding: 36px; }
  .artifact-scope .two-col > div:first-child { border-right: 1px solid var(--at-line-strong); }
  .artifact-scope .two-col h3 { margin-top: 0; }

  .artifact-scope .col-vertex { border-top: 4px solid var(--at-blue); }
  .artifact-scope .col-fragment { border-top: 4px solid var(--at-amber); }

  .artifact-scope .label-tag {
    display: inline-block;
    font-family: var(--at-font-mono);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 10px;
    margin-bottom: 12px;
    color: var(--at-bg);
  }
  .artifact-scope .tag-vertex { background: var(--at-blue); }
  .artifact-scope .tag-fragment { background: var(--at-amber); }

  .artifact-scope ul.clean {
    list-style: none;
    padding: 0;
    margin: 12px 0;
  }
  .artifact-scope ul.clean li {
    padding: 8px 0 8px 24px;
    border-bottom: 1px dotted var(--at-line);
    position: relative;
    font-family: var(--at-font-mono);
    font-size: 14px;
  }
  .artifact-scope ul.clean li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--at-blue);
    font-weight: 700;
  }
  .artifact-scope .col-fragment ul.clean li::before { color: var(--at-amber); }

  /* ====== Formula block ====== */
  .artifact-scope .formula {
    background: var(--at-inset);
    color: var(--at-text);
    padding: 28px 32px;
    margin: 24px 0;
    font-family: var(--at-font-mono);
    font-size: 18px;
    border-left: 6px solid var(--at-accent);
    position: relative;
    overflow-x: auto;
  }
  .artifact-scope .formula .lbl {
    position: absolute;
    top: -10px;
    left: 24px;
    background: var(--at-accent);
    color: var(--at-bg);
    font-size: 10px;
    padding: 2px 8px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 700;
  }
  .artifact-scope .formula .eq {
    font-size: 24px;
    margin-bottom: 12px;
    letter-spacing: 0.02em;
  }
  .artifact-scope .formula .where {
    font-size: 13px;
    color: var(--at-muted);
  }
  .artifact-scope .formula .where span { color: var(--at-accent); }

  /* ====== Pull quote ====== */
  .artifact-scope .pull-quote {
    font-family: var(--at-font-display);
    font-style: italic;
    font-weight: 600;
    font-size: clamp(28px, 4vw, 42px);
    line-height: 1.2;
    letter-spacing: -0.02em;
    padding: 48px 0;
    max-width: 900px;
    border-top: 2px solid var(--at-line-strong);
    border-bottom: 2px solid var(--at-line-strong);
    margin: 48px 0;
    position: relative;
  }
  .artifact-scope .pull-quote::before {
    content: '“';
    font-size: 120px;
    position: absolute;
    top: -10px;
    left: -8px;
    color: var(--at-accent);
    line-height: 1;
    font-family: var(--at-font-display);
  }
  .artifact-scope .pull-quote > span { padding-left: 60px; display: block; }
  .artifact-scope .pull-quote .v { color: var(--at-blue); }
  .artifact-scope .pull-quote .f { color: var(--at-amber); }

  /* ====== Comparison table ====== */
  .artifact-scope table.compare {
    width: 100%;
    border-collapse: collapse;
    margin: 32px 0;
    background: var(--at-surface);
    border: 1px solid var(--at-line-strong);
    font-size: 15px;
  }
  .artifact-scope table.compare th, .artifact-scope table.compare td {
    padding: 18px 22px;
    text-align: left;
    border-bottom: 1px solid var(--at-line);
  }
  .artifact-scope table.compare thead th {
    background: var(--at-text);
    color: var(--at-bg);
    font-family: var(--at-font-mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .artifact-scope table.compare thead th:nth-child(2) { background: var(--at-blue); }
  .artifact-scope table.compare thead th:nth-child(3) { background: var(--at-amber); }
  .artifact-scope table.compare tbody td:first-child {
    font-family: var(--at-font-mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--at-faint);
    background: var(--at-inset);
    width: 22%;
  }
  .artifact-scope table.compare tbody tr:hover { background: var(--at-accent-soft); }

  /* ====== Diagram container ====== */
  .artifact-scope .diagram-wrap {
    background: var(--at-surface);
    border: 1px solid var(--at-line-strong);
    padding: 32px;
    margin: 32px 0;
    position: relative;
  }
  .artifact-scope .diagram-wrap .caption {
    font-family: var(--at-font-mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--at-faint);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--at-line-strong);
  }
  .artifact-scope .diagram-wrap .caption strong { color: var(--at-text); }
  .artifact-scope svg.diagram { width: 100%; height: auto; display: block; }

  /* ====== Insight callout ====== */
  .artifact-scope .insight {
    background: var(--at-accent-soft);
    color: var(--at-text);
    border: 1px solid var(--at-line-strong);
    border-left: 6px solid var(--at-accent);
    padding: 48px;
    margin: 48px 0;
    position: relative;
    overflow: hidden;
  }
  .artifact-scope .insight::before {
    content: 'KEY INSIGHT';
    position: absolute;
    top: 16px; right: 24px;
    font-family: var(--at-font-mono);
    font-size: 10px;
    letter-spacing: 0.3em;
    color: var(--at-accent);
  }
  .artifact-scope .insight h3 {
    color: var(--at-accent);
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 16px;
  }
  .artifact-scope .insight p { color: var(--at-text); max-width: none; }
  .artifact-scope .insight ul.clean li { color: var(--at-text); border-bottom-color: var(--at-line); }
  .artifact-scope .insight ul.clean li::before { color: var(--at-accent); }

  /* ====== Mental model ====== */
  .artifact-scope .mental-model {
    background: var(--at-accent-soft);
    padding: 24px 28px;
    margin: 20px 0;
    border-left: 5px solid var(--at-accent);
    font-family: var(--at-font-display);
    font-style: italic;
    font-size: 19px;
    line-height: 1.4;
  }
  .artifact-scope .mental-model::before {
    content: '◧ MENTAL MODEL';
    display: block;
    font-family: var(--at-font-mono);
    font-size: 10px;
    font-style: normal;
    letter-spacing: 0.25em;
    margin-bottom: 8px;
    color: var(--at-muted);
  }

  /* ====== Footer (project pattern) ====== */
  .artifact-scope .footer {
    margin-top: 60px;
    padding: 40px 32px 60px;
    border-top: 1px solid var(--at-line);
    font-size: 13px;
    color: var(--at-muted);
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .artifact-scope .footer p { color: var(--at-muted); max-width: none; margin-bottom: 0; }
  .artifact-scope .footer .ornament {
    font-family: var(--at-font-display);
    font-size: 24px;
    color: var(--at-accent);
    margin-bottom: 12px;
  }

  /* ====== Responsive ====== */
  @media (max-width: 720px) {
    .artifact-scope .two-col { grid-template-columns: 1fr; }
    .artifact-scope .two-col > div:first-child { border-right: none; border-bottom: 1px solid var(--at-line-strong); }
    .artifact-scope .hero-wrap, .artifact-scope main { padding-left: 20px; padding-right: 20px; }
    .artifact-scope section { padding: 48px 0; }
    .artifact-scope .insight { padding: 32px 24px; }
    .artifact-scope .pull-quote::before { font-size: 80px; }
    .artifact-scope .pull-quote > span { padding-left: 40px; }
  }
`;

export const html = `
<div class="hero-wrap">
<header class="hero">
  <span class="eyebrow">Computer Graphics</span>
  <h1 class="title">
    <span class="v">Vertex</span><span class="vs">VS</span><span class="f">Fragment</span><br>
    Shaders, explained.
  </h1>
  <p class="deck">Every 3D scene you have ever seen on a screen is the answer to two stubbornly simple questions. Where does this thing go? And what does it look like once it's there?</p>

  <div class="byline">
    <div>
      <span class="col-label">Topic</span>
      <strong>Vertex &amp; Fragment Shaders</strong>
    </div>
    <div>
      <span class="col-label">Difficulty</span>
      <strong>Intermediate</strong>
    </div>
    <div>
      <span class="col-label">Reading time</span>
      <strong>8 minutes</strong>
    </div>
  </div>
</header>
</div>

<main>

<section>
  <div class="section-num">01 / Core Idea</div>
  <h2>Rendering 3D graphics answers <em>two</em> questions.</h2>
  <p class="lead">Strip away the abstractions, the APIs, the matrix gymnastics — and what you find is a pipeline built around answering exactly two things, in exactly that order.</p>

  <div class="diagram-wrap">
    <div class="caption">FIG. 1 — <strong>The Two Fundamental Questions</strong></div>
    <svg class="diagram" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="vfs-dotgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="var(--at-line-strong)" opacity="0.15"/>
        </pattern>
      </defs>
      <rect width="800" height="240" fill="url(#vfs-dotgrid)"/>

      <g transform="translate(60, 40)">
        <rect x="0" y="0" width="280" height="160" fill="var(--at-bg)" stroke="var(--at-blue)" stroke-width="3"/>
        <text x="20" y="35" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-blue)" letter-spacing="2">QUESTION 01</text>
        <text x="20" y="85" font-family="var(--at-font-display)" font-size="36" font-weight="800" fill="var(--at-text)">Where?</text>
        <text x="20" y="115" font-family="var(--at-font-body)" font-size="14" fill="var(--at-muted)">on the screen should</text>
        <text x="20" y="133" font-family="var(--at-font-body)" font-size="14" fill="var(--at-muted)">these things appear?</text>
        <text x="20" y="148" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)" letter-spacing="1">→ VERTEX SHADER</text>
      </g>

      <g transform="translate(460, 40)">
        <rect x="0" y="0" width="280" height="160" fill="var(--at-bg)" stroke="var(--at-amber)" stroke-width="3"/>
        <text x="20" y="35" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-amber)" letter-spacing="2">QUESTION 02</text>
        <text x="20" y="85" font-family="var(--at-font-display)" font-size="36" font-weight="800" fill="var(--at-text)">What?</text>
        <text x="20" y="115" font-family="var(--at-font-body)" font-size="14" fill="var(--at-muted)">should each of those</text>
        <text x="20" y="133" font-family="var(--at-font-body)" font-size="14" fill="var(--at-muted)">things look like?</text>
        <text x="20" y="148" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)" letter-spacing="1">→ FRAGMENT SHADER</text>
      </g>

      <g transform="translate(345, 110)">
        <line x1="0" y1="10" x2="105" y2="10" stroke="var(--at-text)" stroke-width="2" stroke-dasharray="4,3"/>
        <polygon points="105,10 95,5 95,15" fill="var(--at-text)"/>
        <text x="40" y="0" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)" letter-spacing="1">THEN</text>
      </g>
    </svg>
  </div>

  <p>That mapping isn't a coincidence or a design decision — it's the natural decomposition of the problem. <strong>Position</strong> and <strong>appearance</strong> are independent enough that they deserve their own stages, their own programs, their own hardware lanes.</p>
</section>

<section>
  <div class="section-num">02 / The Graphics Pipeline</div>
  <h2>From vertices to pixels — the <em>full</em> journey.</h2>

  <div class="diagram-wrap">
    <div class="caption">FIG. 2 — <strong>The GPU Rendering Pipeline</strong> · vertex in, image out</div>
    <svg class="diagram" viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
      <g font-family="var(--at-font-body)">
        <g transform="translate(100, 20)">
          <rect width="600" height="50" fill="var(--at-text)"/>
          <text x="20" y="32" fill="var(--at-bg)" font-size="14" font-weight="600">3D VERTICES</text>
          <text x="540" y="32" fill="var(--at-bg)" opacity="0.6" font-size="11" font-family="var(--at-font-mono)" text-anchor="end">input geometry</text>
        </g>
        <line x1="400" y1="70" x2="400" y2="90" stroke="var(--at-text)" stroke-width="2"/>
        <polygon points="400,90 395,82 405,82" fill="var(--at-text)"/>

        <g transform="translate(100, 92)">
          <rect width="600" height="56" fill="var(--at-blue)"/>
          <rect x="0" y="0" width="6" height="56" fill="var(--at-accent)"/>
          <text x="20" y="26" fill="var(--at-bg)" font-size="15" font-weight="700" font-family="var(--at-font-display)">VERTEX SHADER</text>
          <text x="20" y="44" fill="var(--at-bg)" opacity="0.7" font-size="12">runs per vertex · computes position</text>
          <text x="540" y="36" fill="var(--at-bg)" opacity="0.6" font-size="11" font-family="var(--at-font-mono)" text-anchor="end">programmable</text>
        </g>
        <line x1="400" y1="148" x2="400" y2="168" stroke="var(--at-text)" stroke-width="2"/>
        <polygon points="400,168 395,160 405,160" fill="var(--at-text)"/>

        <g transform="translate(100, 170)">
          <rect width="600" height="50" fill="var(--at-green)"/>
          <text x="20" y="32" fill="var(--at-bg)" font-size="14" font-weight="600">RASTERIZATION</text>
          <text x="540" y="32" fill="var(--at-bg)" opacity="0.6" font-size="11" font-family="var(--at-font-mono)" text-anchor="end">fixed function</text>
        </g>
        <line x1="400" y1="220" x2="400" y2="240" stroke="var(--at-text)" stroke-width="2"/>
        <polygon points="400,240 395,232 405,232" fill="var(--at-text)"/>

        <g transform="translate(100, 242)">
          <rect width="600" height="50" fill="var(--at-text)"/>
          <text x="20" y="32" fill="var(--at-bg)" font-size="14" font-weight="600">FRAGMENTS / CANDIDATE PIXELS</text>
          <text x="540" y="32" fill="var(--at-bg)" opacity="0.6" font-size="11" font-family="var(--at-font-mono)" text-anchor="end">covered samples</text>
        </g>
        <line x1="400" y1="292" x2="400" y2="312" stroke="var(--at-text)" stroke-width="2"/>
        <polygon points="400,312 395,304 405,304" fill="var(--at-text)"/>

        <g transform="translate(100, 314)">
          <rect width="600" height="56" fill="var(--at-amber)"/>
          <rect x="0" y="0" width="6" height="56" fill="var(--at-accent)"/>
          <text x="20" y="26" fill="var(--at-bg)" font-size="15" font-weight="700" font-family="var(--at-font-display)">FRAGMENT SHADER</text>
          <text x="20" y="44" fill="var(--at-bg)" opacity="0.85" font-size="12">runs per pixel · computes color</text>
          <text x="540" y="36" fill="var(--at-bg)" opacity="0.6" font-size="11" font-family="var(--at-font-mono)" text-anchor="end">programmable</text>
        </g>
        <line x1="400" y1="370" x2="400" y2="390" stroke="var(--at-text)" stroke-width="2"/>
        <polygon points="400,390 395,382 405,382" fill="var(--at-text)"/>

        <g transform="translate(100, 392)">
          <rect width="600" height="20" fill="var(--at-accent)"/>
          <text x="20" y="14" fill="var(--at-bg)" font-size="12" font-weight="700" font-family="var(--at-font-mono)" letter-spacing="2">FINAL IMAGE → SCREEN</text>
        </g>
      </g>

      <text x="80" y="125" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-blue)" text-anchor="end" letter-spacing="1">YOU WRITE ↗</text>
      <text x="80" y="346" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-amber)" text-anchor="end" letter-spacing="1">YOU WRITE ↗</text>
      <text x="720" y="200" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)" letter-spacing="1">← GPU DOES IT</text>
    </svg>
  </div>

  <p>The pipeline has more stages in practice — tessellation, geometry, depth testing, blending — but these five points capture the essential rhythm. <strong>You write the two programmable stages</strong>. The GPU handles everything between and around them.</p>
</section>

<section>
  <div class="section-num">03 / Vertex Shader</div>
  <h2>Where geometry <em>goes</em>.</h2>

  <div class="two-col">
    <div class="col-vertex">
      <span class="label-tag tag-vertex">PURPOSE</span>
      <h3>One vertex at a time.</h3>
      <p>The vertex shader takes a single vertex — a point with attributes like position, normal, UV — and computes <strong>where that point lands on the screen</strong>. It runs independently for every vertex, in parallel, with no knowledge of its neighbors.</p>
    </div>
    <div class="col-vertex">
      <span class="label-tag tag-vertex">TYPICAL OPERATIONS</span>
      <h3>What you do here.</h3>
      <ul class="clean">
        <li>Translation, rotation, scaling</li>
        <li>Camera (view) transform</li>
        <li>Perspective projection</li>
        <li>Vertex animation</li>
        <li>Skeletal skinning</li>
        <li>Pass-through data to fragments</li>
      </ul>
    </div>
  </div>

  <h3 style="margin-top:48px">The core formula</h3>
  <p>Every vertex shader you'll ever write is, at its heart, a single matrix chain: take the vertex in its local model space, and push it through model, view, and projection matrices until it lands in clip space.</p>

  <div class="formula">
    <span class="lbl">MVP TRANSFORM</span>
    <div class="eq">p<sub>screen</sub> &nbsp;=&nbsp; P · V · M · p<sub>local</sub></div>
    <div class="where">
      where &nbsp;<span>M</span> = model matrix &nbsp;·&nbsp; <span>V</span> = view matrix &nbsp;·&nbsp; <span>P</span> = projection matrix
    </div>
  </div>

  <p>The vertex shader's main output is a clip-space position — but it also <strong>passes data forward</strong>: UV coordinates, normals, vertex colors, world-space positions. The rasterizer will interpolate these across the triangle, and the fragment shader will receive the interpolated values per pixel.</p>

  <div class="mental-model">
    The vertex shader decides <strong>where</strong> the geometry goes. Not how it looks — only where it lands.
  </div>
</section>

<div class="pull-quote">
  <span>Between the two shaders sits the <span class="f">rasterizer</span> — a piece of fixed-function hardware that asks one question over and over: <em>which pixels does this triangle cover?</em></span>
</div>

<section>
  <div class="section-num">04 / Rasterization</div>
  <h2>Triangles become <em>fragments</em>.</h2>

  <div class="diagram-wrap">
    <div class="caption">FIG. 3 — <strong>Triangle to Fragments</strong> · the rasterizer's job</div>
    <svg class="diagram" viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(80, 50)">
        <text x="100" y="-10" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-faint)" letter-spacing="2" text-anchor="middle">3 VERTICES</text>
        <polygon points="100,20 20,180 180,180" fill="none" stroke="var(--at-blue)" stroke-width="2"/>
        <circle cx="100" cy="20" r="8" fill="var(--at-blue)"/>
        <circle cx="20" cy="180" r="8" fill="var(--at-blue)"/>
        <circle cx="180" cy="180" r="8" fill="var(--at-blue)"/>
        <text x="100" y="14" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-text)" text-anchor="middle" dy="-8">v0</text>
        <text x="20" y="200" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-text)" text-anchor="middle">v1</text>
        <text x="180" y="200" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-text)" text-anchor="middle">v2</text>
      </g>

      <g transform="translate(300, 140)">
        <line x1="0" y1="0" x2="120" y2="0" stroke="var(--at-green)" stroke-width="3"/>
        <polygon points="120,0 108,-6 108,6" fill="var(--at-green)"/>
        <text x="60" y="-12" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-green)" text-anchor="middle" letter-spacing="2">RASTERIZE</text>
        <text x="60" y="20" font-family="var(--at-font-body)" font-size="11" fill="var(--at-faint)" text-anchor="middle" font-style="italic">"which pixels are covered?"</text>
      </g>

      <g transform="translate(500, 50)">
        <text x="100" y="-10" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-faint)" letter-spacing="2" text-anchor="middle">N FRAGMENTS</text>
        <g stroke="var(--at-line-strong)" stroke-width="0.5" opacity="0.3">
          <line x1="0" y1="20" x2="200" y2="20"/><line x1="0" y1="40" x2="200" y2="40"/>
          <line x1="0" y1="60" x2="200" y2="60"/><line x1="0" y1="80" x2="200" y2="80"/>
          <line x1="0" y1="100" x2="200" y2="100"/><line x1="0" y1="120" x2="200" y2="120"/>
          <line x1="0" y1="140" x2="200" y2="140"/><line x1="0" y1="160" x2="200" y2="160"/>
          <line x1="0" y1="180" x2="200" y2="180"/>
          <line x1="0" y1="20" x2="0" y2="180"/><line x1="20" y1="20" x2="20" y2="180"/>
          <line x1="40" y1="20" x2="40" y2="180"/><line x1="60" y1="20" x2="60" y2="180"/>
          <line x1="80" y1="20" x2="80" y2="180"/><line x1="100" y1="20" x2="100" y2="180"/>
          <line x1="120" y1="20" x2="120" y2="180"/><line x1="140" y1="20" x2="140" y2="180"/>
          <line x1="160" y1="20" x2="160" y2="180"/><line x1="180" y1="20" x2="180" y2="180"/>
          <line x1="200" y1="20" x2="200" y2="180"/>
        </g>
        <g fill="var(--at-amber)" opacity="0.85">
          <rect x="80" y="20" width="20" height="20"/>
          <rect x="100" y="20" width="20" height="20"/>
          <rect x="60" y="40" width="20" height="20"/>
          <rect x="80" y="40" width="20" height="20"/>
          <rect x="100" y="40" width="20" height="20"/>
          <rect x="120" y="40" width="20" height="20"/>
          <rect x="40" y="60" width="20" height="20"/>
          <rect x="60" y="60" width="20" height="20"/>
          <rect x="80" y="60" width="20" height="20"/>
          <rect x="100" y="60" width="20" height="20"/>
          <rect x="120" y="60" width="20" height="20"/>
          <rect x="140" y="60" width="20" height="20"/>
          <rect x="40" y="80" width="20" height="20"/>
          <rect x="20" y="80" width="20" height="20"/>
          <rect x="60" y="80" width="20" height="20"/>
          <rect x="80" y="80" width="20" height="20"/>
          <rect x="100" y="80" width="20" height="20"/>
          <rect x="120" y="80" width="20" height="20"/>
          <rect x="140" y="80" width="20" height="20"/>
          <rect x="160" y="80" width="20" height="20"/>
          <rect x="0" y="100" width="20" height="20"/>
          <rect x="20" y="100" width="20" height="20"/>
          <rect x="40" y="100" width="20" height="20"/>
          <rect x="60" y="100" width="20" height="20"/>
          <rect x="80" y="100" width="20" height="20"/>
          <rect x="100" y="100" width="20" height="20"/>
          <rect x="120" y="100" width="20" height="20"/>
          <rect x="140" y="100" width="20" height="20"/>
          <rect x="160" y="100" width="20" height="20"/>
          <rect x="180" y="100" width="20" height="20"/>
          <rect x="0" y="120" width="200" height="20"/>
          <rect x="0" y="140" width="200" height="20"/>
          <rect x="0" y="160" width="200" height="20"/>
        </g>
        <polygon points="100,20 20,180 180,180" fill="none" stroke="var(--at-text)" stroke-width="1.5" stroke-dasharray="3,2"/>
      </g>
    </svg>
  </div>

  <p>Rasterization is the bridge. It takes three screen-space vertices, figures out which pixels fall inside the triangle they form, and emits a <strong>fragment</strong> for each covered pixel — carrying with it interpolated values for every attribute the vertex shader passed through.</p>
  <p style="color:var(--at-muted); font-style:italic">A fragment isn't quite a pixel yet — it's a <em>candidate</em>. Depth tests, blending, and stencil tests still get a vote before it makes it to the framebuffer.</p>
</section>

<section>
  <div class="section-num">05 / Fragment Shader</div>
  <h2>What every pixel <em>looks like</em>.</h2>

  <div class="two-col">
    <div class="col-fragment">
      <span class="label-tag tag-fragment">PURPOSE</span>
      <h3>One fragment at a time.</h3>
      <p>For every fragment the rasterizer produces, the fragment shader runs once and produces <strong>a final color</strong>. That's its entire job. But "compute the color" is where almost all of modern computer graphics actually lives.</p>
    </div>
    <div class="col-fragment">
      <span class="label-tag tag-fragment">TYPICAL OPERATIONS</span>
      <h3>What you do here.</h3>
      <ul class="clean">
        <li>Lighting models</li>
        <li>Shadow sampling</li>
        <li>Reflections &amp; refractions</li>
        <li>Texture sampling</li>
        <li>Transparency &amp; blending</li>
        <li>PBR shading, emission</li>
      </ul>
    </div>
  </div>

  <h3 style="margin-top:48px">A starter formula — Lambert diffuse</h3>
  <p>The simplest interesting thing a fragment shader can do is light a surface. The Lambertian model says: the brightness of a surface is the cosine of the angle between the surface normal and the light direction — clamped at zero so you don't get negative light.</p>

  <div class="formula">
    <span class="lbl">LAMBERT DIFFUSE</span>
    <div class="eq">I &nbsp;=&nbsp; max( 0,&nbsp; N · L )</div>
    <div class="where">
      where &nbsp;<span>N</span> = surface normal &nbsp;·&nbsp; <span>L</span> = light direction (both unit vectors)
    </div>
  </div>

  <p>From this single dot product, you can build the entire history of real-time graphics: stack on specular highlights, swap to a BRDF, plug in textured albedo, layer roughness and metalness, add image-based ambient lighting, and you're inside a modern PBR pipeline. <strong>All of it lives in the fragment shader.</strong></p>

  <div class="mental-model">
    The fragment shader decides <strong>what each pixel looks like</strong>. Not where it is — only its appearance.
  </div>
</section>

<section>
  <div class="section-num">06 / Side by Side</div>
  <h2>The differences, at a <em>glance</em>.</h2>

  <table class="compare">
    <thead>
      <tr>
        <th>Property</th>
        <th>Vertex Shader</th>
        <th>Fragment Shader</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Runs per</td><td>vertex</td><td>pixel (fragment)</td></tr>
      <tr><td>Stage</td><td>geometry stage</td><td>appearance stage</td></tr>
      <tr><td>Computes</td><td>position in clip space</td><td>final RGBA color</td></tr>
      <tr><td>Typical load</td><td>usually lighter</td><td>usually heavier</td></tr>
      <tr><td>Reads</td><td>vertex attributes</td><td>interpolated varyings + textures</td></tr>
      <tr><td>Defining question</td><td><em>where does this go?</em></td><td><em>what does this look like?</em></td></tr>
    </tbody>
  </table>

  <p>Why is the fragment shader usually heavier? Because there are <strong>vastly more fragments than vertices</strong>. A single triangle made of 3 vertices can cover tens of thousands of pixels. Your vertex shader runs 3 times. Your fragment shader runs 30,000+. That asymmetry shapes every performance decision in real-time graphics.</p>
</section>

<section style="border-bottom:none">
  <div class="section-num">07 / Why It's Designed This Way</div>
  <h2>The pipeline is shaped by <em>parallelism</em>.</h2>

  <div class="insight">
    <h3>Independence is the whole game.</h3>
    <p>Modern GPUs are built around <strong>massive parallelism</strong> — thousands of cores running the same program on different data at the same time. That architecture only works because of one structural fact about the rendering problem:</p>
    <ul class="clean" style="margin-top:20px">
      <li><span style="color:var(--at-accent)">Vertices can be processed independently.</span> No vertex needs to wait on any other vertex.</li>
      <li><span style="color:var(--at-accent)">Pixels can be processed independently.</span> No fragment needs to wait on any other fragment.</li>
    </ul>
    <p style="margin-top:20px">This independence is what makes the GPU a GPU. The shader model isn't just convenient — it's the only thing that scales to millions of operations per frame at 60Hz. <strong>Embarrassingly parallel by design.</strong></p>
  </div>

  <h3 style="margin-top:48px">One-line summary</h3>
  <div class="mental-model">
    Vertex shader determines <strong>where</strong>. Fragment shader determines <strong>how it looks</strong>.
  </div>
</section>

</main>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong &middot; Graphics pipeline deep dive &middot; May 2026</p>
  <p style="margin-top: 8px;">Filed under: computer graphics, GPU, shaders</p>
</div>
`;

export const script = ``;
