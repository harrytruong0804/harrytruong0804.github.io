export const styles = `
  .artifact-scope {
    font-size: 17px;
    line-height: 1.65;
    font-feature-settings: "kern", "liga", "onum";
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    position: relative;
    z-index: 51;
  }

  .artifact-scope * { box-sizing: border-box; }
  .artifact-scope h1, .artifact-scope h2, .artifact-scope h3, .artifact-scope h4, .artifact-scope p, .artifact-scope ul, .artifact-scope ol, .artifact-scope dl { margin: 0; padding: 0; }

  /* ====== Page wrap ====== */
  .artifact-scope .page {
    max-width: 760px;
    margin: 0 auto;
    padding: 60px 28px 0;
  }

  /* ====== Hero (project pattern, serif feel) ====== */
  .artifact-scope header.hero {
    margin-bottom: 60px;
    padding-bottom: 28px;
    border-bottom: 2px solid var(--at-line-strong);
  }
  .artifact-scope .eyebrow {
    display: inline-block;
    font-family: var(--at-font-mono);
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--at-accent);
    font-weight: 500;
    margin-bottom: 24px;
    padding: 4px 0;
    border-bottom: 1.5px solid var(--at-accent);
  }
  .artifact-scope h1.title {
    font-family: var(--at-font-display);
    font-weight: 700;
    font-size: clamp(34px, 5.6vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    color: var(--at-text);
  }
  .artifact-scope h1.title em {
    font-style: italic;
    font-weight: 500;
    color: var(--at-accent);
  }
  .artifact-scope .deck {
    font-family: var(--at-font-display);
    font-size: 20px;
    line-height: 1.45;
    color: var(--at-muted);
    font-weight: 400;
    font-style: italic;
    max-width: 620px;
    margin-bottom: 32px;
  }
  .artifact-scope .deck code {
    font-style: normal;
    font-family: var(--at-font-mono);
    font-size: 0.82em;
    background: var(--at-inset);
    padding: 0.08em 0.35em;
    border-radius: 3px;
    color: var(--at-text);
  }
  .artifact-scope .byline {
    display: flex;
    gap: 32px;
    padding: 18px 0 0;
    border-top: 1px solid var(--at-line);
    font-size: 13px;
    color: var(--at-muted);
    font-family: var(--at-font-body);
    flex-wrap: wrap;
  }
  .artifact-scope .byline strong { color: var(--at-text); font-weight: 600; }
  .artifact-scope .byline .col-label {
    display: block;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--at-muted);
    margin-bottom: 4px;
    font-family: var(--at-font-mono);
  }

  /* ====== TOC ====== */
  .artifact-scope nav.toc {
    background: var(--at-surface);
    border-left: 3px solid var(--at-accent);
    padding: 18px 24px 22px;
    margin: 0 0 48px;
    font-size: 15px;
  }
  .artifact-scope nav.toc .toc-title {
    font-family: var(--at-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    color: var(--at-muted);
    margin-bottom: 10px;
  }
  .artifact-scope nav.toc ol { margin: 0; padding-left: 22px; }
  .artifact-scope nav.toc li { margin: 4px 0; }
  .artifact-scope nav.toc a { color: var(--at-text); text-decoration: none; border-bottom: 1px dotted var(--at-line); }
  .artifact-scope nav.toc a:hover { color: var(--at-accent); border-bottom-color: var(--at-accent); }

  /* ====== Body ====== */
  .artifact-scope h2 {
    font-family: var(--at-font-display);
    font-size: 28px;
    margin: 60px 0 16px;
    line-height: 1.2;
    letter-spacing: -0.005em;
    padding-top: 8px;
    border-top: 1px solid var(--at-line);
    font-weight: 700;
  }
  .artifact-scope h2 .secnum {
    font-family: var(--at-font-mono);
    font-size: 14px;
    color: var(--at-accent);
    margin-right: 10px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  .artifact-scope h3 {
    font-family: var(--at-font-display);
    font-size: 20px;
    margin: 30px 0 10px;
    font-weight: 700;
  }
  .artifact-scope h4 {
    font-size: 14px;
    margin: 24px 0 6px;
    font-family: var(--at-font-mono);
    color: var(--at-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }
  .artifact-scope p { margin-bottom: 16px; color: var(--at-text); }
  .artifact-scope ul, .artifact-scope ol { margin: 0 0 16px 22px; }
  .artifact-scope li { margin-bottom: 6px; }

  .artifact-scope strong { font-weight: 700; color: var(--at-text); }
  .artifact-scope em { font-style: italic; }

  .artifact-scope a { color: var(--at-accent); text-decoration: none; border-bottom: 1px solid currentColor; }
  .artifact-scope a:hover { background: var(--at-accent); color: var(--at-bg); }

  .artifact-scope code {
    font-family: var(--at-font-mono);
    background: var(--at-inset);
    padding: 0.08em 0.35em;
    border-radius: 3px;
    font-size: 0.86em;
    color: var(--at-text);
  }
  .artifact-scope pre {
    background: var(--at-inset);
    color: var(--at-text);
    padding: 16px 20px;
    overflow-x: auto;
    border-left: 3px solid var(--at-line);
    font-family: var(--at-font-mono);
    font-size: 13px;
    line-height: 1.55;
    margin: 16px 0;
    border-radius: 0;
  }
  .artifact-scope pre code { background: none; padding: 0; font-size: inherit; }

  /* ====== Aside / note callouts ====== */
  .artifact-scope aside.note {
    background: var(--at-surface);
    border-left: 3px solid var(--at-accent);
    padding: 14px 20px;
    margin: 22px 0;
    font-size: 15px;
  }
  .artifact-scope aside.note .label {
    font-family: var(--at-font-mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    color: var(--at-accent);
    margin-bottom: 6px;
    display: block;
    font-weight: 600;
  }
  .artifact-scope aside.note p { margin: 0 0 8px; }
  .artifact-scope aside.note p:last-child { margin-bottom: 0; }
  .artifact-scope aside.note ul { margin: 6px 0 0 22px; }

  /* ====== Figures ====== */
  .artifact-scope .figure {
    margin: 30px -8px;
    padding: 22px 16px;
    background: var(--at-bg);
    border: 1px solid var(--at-line);
    border-radius: 4px;
    text-align: center;
  }
  .artifact-scope .figure svg { max-width: 100%; height: auto; }
  .artifact-scope .figure figcaption {
    margin-top: 12px;
    font-size: 13px;
    color: var(--at-muted);
    font-style: italic;
    text-align: left;
    padding: 0 8px;
  }

  /* ====== Tables ====== */
  .artifact-scope table.compare {
    width: 100%;
    border-collapse: collapse;
    margin: 22px 0;
    font-size: 14px;
  }
  .artifact-scope table.compare th, .artifact-scope table.compare td {
    border-bottom: 1px solid var(--at-line);
    padding: 10px 12px;
    text-align: left;
    vertical-align: top;
  }
  .artifact-scope table.compare th {
    background: var(--at-inset);
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-family: var(--at-font-mono);
  }
  .artifact-scope table.compare td code { font-size: 0.85em; }

  /* ====== Glossary ====== */
  .artifact-scope .terms {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 4px;
    padding: 18px 22px;
    margin: 28px 0;
  }
  .artifact-scope .terms dt {
    font-family: var(--at-font-mono);
    font-weight: 700;
    color: var(--at-accent);
    margin-top: 12px;
    font-size: 14px;
  }
  .artifact-scope .terms dt:first-child { margin-top: 0; }
  .artifact-scope .terms dd {
    margin: 4px 0 0;
    font-size: 15px;
  }

  .artifact-scope hr.section-break {
    border: none;
    border-top: 1px solid var(--at-line);
    margin: 40px 0;
    text-align: center;
  }
  .artifact-scope hr.section-break::after {
    content: "\\2726 \\2726 \\2726";
    display: inline-block;
    transform: translateY(-0.7em);
    background: var(--at-bg);
    padding: 0 14px;
    color: var(--at-muted);
    letter-spacing: 0.5em;
    font-size: 10px;
  }

  /* ====== Footer (project pattern) ====== */
  .artifact-scope .footer {
    max-width: 760px;
    margin: 80px auto 0;
    padding: 36px 28px 56px;
    border-top: 1px solid var(--at-line);
    font-size: 13px;
    color: var(--at-muted);
    text-align: center;
  }
  .artifact-scope .footer p { color: var(--at-muted); margin-bottom: 0; }
  .artifact-scope .footer .ornament {
    font-family: var(--at-font-display);
    font-size: 22px;
    color: var(--at-accent);
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    .artifact-scope { font-size: 16px; }
    .artifact-scope .page { padding: 36px 18px 0; }
    .artifact-scope h1.title { font-size: 30px; }
    .artifact-scope h2 { font-size: 22px; }
    .artifact-scope .figure { margin: 22px -4px; padding: 16px 10px; }
  }
`;

export const html = `
<div class="page">

<header class="hero">
  <span class="eyebrow">3D Graphics &middot; USD Schema</span>
  <h1 class="title">Animation in <em>Omniverse</em> USD — a breakdown.</h1>
  <p class="deck">From "what is a 3D model?" all the way to <code>SkelAnimation</code>, <code>SkelRoot</code>, and <code>AnimationGraph</code> — built up one layer at a time.</p>
  <div class="byline">
    <div>
      <span class="col-label">Topic</span>
      <strong>UsdSkel &amp; Omniverse</strong>
    </div>
    <div>
      <span class="col-label">Difficulty</span>
      <strong>Intermediate</strong>
    </div>
    <div>
      <span class="col-label">Reading time</span>
      <strong>~22 minutes</strong>
    </div>
  </div>
</header>

<nav class="toc">
  <div class="toc-title">Index</div>
  <ol>
    <li><a href="#s1">Why these concepts matter</a></li>
    <li><a href="#s2">What a 3D model actually is</a></li>
    <li><a href="#s3">Animation = state over time</a></li>
    <li><a href="#s4">Two basic kinds: transform vs deformation</a></li>
    <li><a href="#s5">Why skeletal animation exists</a></li>
    <li><a href="#s6">The components of skeletal animation</a></li>
    <li><a href="#s7">How USD packages those components</a></li>
    <li><a href="#s8">What a character USD file looks like</a></li>
    <li><a href="#s9">Composition: reusing skeleton and animation</a></li>
    <li><a href="#s10">Omniverse extensions: AnimationGraph &amp; AnimationClip</a></li>
    <li><a href="#s11">PointInstancer vs one-SkelRoot-per-agent (crowds)</a></li>
    <li><a href="#s12">Quick-reference glossary</a></li>
  </ol>
</nav>

<h2 id="s1"><span class="secnum">&sect;1</span>Why these concepts matter</h2>

<p>When you open a USD file with <code>pxr.Usd</code> and see prim types like <code>SkelRoot</code>, <code>Skeleton</code>, <code>SkelAnimation</code>, <code>AnimationGraph</code>, <code>AnimationClip</code> &mdash; those aren't random Omniverse buzzwords. Each one is a discrete piece of a specific problem: <em>how do you represent a moving humanoid character efficiently and composably?</em></p>

<p>This article doesn't teach you the API. The goal is to build <strong>a mental model</strong> &mdash; from "what is a 3D model?" to "why does USD store animation that way?". Once that model is in your head, reading the spec or the Omniverse extension source becomes straightforward.</p>

<h2 id="s2"><span class="secnum">&sect;2</span>What a 3D model actually is</h2>

<p>Before talking about animation, we need to nail down what the "static state" of a model is. A 3D <strong>mesh</strong> has two ingredients:</p>

<ul>
  <li><strong>Points</strong> (vertices) &mdash; an array of <code>(x, y, z)</code> floats. This is <em>geometry</em>, the pure shape.</li>
  <li><strong>Topology</strong> &mdash; which triple of vertices forms a triangle (or quad). Stored as <code>faceVertexCounts</code> + <code>faceVertexIndices</code>.</li>
</ul>

<p>Plus a few auxiliary primvars (UVs for texturing, normals for lighting, vertex colors, etc.). That's the whole of a static mesh.</p>

<div class="figure">
<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
  <g font-family="var(--at-font-mono)" font-size="11" fill="var(--at-text)">
    <text x="20" y="20" font-weight="700">Vertices (points)</text>
    <circle cx="60" cy="50" r="3" fill="var(--at-accent)"></circle><text x="68" y="54">v0 (0,0,0)</text>
    <circle cx="60" cy="70" r="3" fill="var(--at-accent)"></circle><text x="68" y="74">v1 (1,0,0)</text>
    <circle cx="60" cy="90" r="3" fill="var(--at-accent)"></circle><text x="68" y="94">v2 (1,1,0)</text>
    <circle cx="60" cy="110" r="3" fill="var(--at-accent)"></circle><text x="68" y="114">v3 (0,1,0)</text>

    <text x="20" y="150" font-weight="700">Topology (indices)</text>
    <text x="20" y="170">faceVertexCounts = [3, 3]</text>
    <text x="20" y="185">faceVertexIndices = [0,1,2, 0,2,3]</text>

    <g transform="translate(330, 30)">
      <polygon points="0,100 100,100 100,0" fill="var(--at-accent-soft)" stroke="var(--at-text)" stroke-width="1.2"></polygon>
      <polygon points="0,100 100,0 0,0" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.2"></polygon>
      <circle cx="0" cy="100" r="4" fill="var(--at-accent)"></circle>
      <circle cx="100" cy="100" r="4" fill="var(--at-accent)"></circle>
      <circle cx="100" cy="0" r="4" fill="var(--at-accent)"></circle>
      <circle cx="0" cy="0" r="4" fill="var(--at-accent)"></circle>
      <text x="-15" y="105" font-size="10">v0</text>
      <text x="105" y="105" font-size="10">v1</text>
      <text x="105" y="-3" font-size="10">v2</text>
      <text x="-15" y="-3" font-size="10">v3</text>
      <text x="30" y="60" font-size="10" fill="var(--at-muted)">tri 1</text>
      <text x="20" y="35" font-size="10" fill="var(--at-muted)">tri 0</text>
    </g>
  </g>
</svg>
<figcaption>Figure 1 &mdash; A simple quad mesh. Points store coordinates; topology stores "which triangle uses which vertices." In USD, <code>points</code>, <code>faceVertexCounts</code>, <code>faceVertexIndices</code> are attributes on a <code>Mesh</code> prim.</figcaption>
</div>

<p>That's the starting line. Everything that follows revolves around one question: <em>how do we change these points over time, efficiently?</em></p>

<h2 id="s3"><span class="secnum">&sect;3</span>Animation = state over time</h2>

<p>"Animation" is ultimately just <strong>state varying over time</strong>. State can be the transform of an object, the coordinates of every vertex of a mesh, the intensity of a light. The storage mechanism in USD is the same in all cases: <strong>time samples</strong>.</p>

<pre><code>double xformOp:translate.timeSamples = {
    0:   (0, 0, 0),
    24:  (5, 0, 0),
    48:  (10, 0, 0),
}</code></pre>

<p>At time code 0 the object sits at (0, 0, 0). At time 24 it sits at (5, 0, 0). Between two samples, USD <em>interpolates</em> (linearly by default). That's the core.</p>

<p>Three time-related concepts in USD layer metadata:</p>

<table class="compare">
  <thead><tr><th>Field</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><code>startTimeCode</code> / <code>endTimeCode</code></td><td>The range of valid time codes in this layer. Time codes are arbitrary real numbers &mdash; the unit is determined by <code>timeCodesPerSecond</code>.</td></tr>
    <tr><td><code>timeCodesPerSecond</code></td><td>The conversion from time code to seconds. For example, <code>60</code> means time code 60 equals 1 real second.</td></tr>
    <tr><td><code>framesPerSecond</code></td><td>The "preferred" frame rate for playback. <strong>Not</strong> necessarily equal to <code>timeCodesPerSecond</code> &mdash; this is a hint to the UI.</td></tr>
  </tbody>
</table>

<p>It's perfectly normal for these two numbers to disagree: a layer may store samples at one resolution and recommend playback at another. That's a feature of the format, not a bug.</p>

<h2 id="s4"><span class="secnum">&sect;4</span>Two basic kinds: transform vs deformation</h2>

<p>This is the most important fork. When an object "moves," two completely different things can be happening:</p>

<h4>(A) Transform animation</h4>
<p>The whole object moves as a <em>rigid body</em>. Its shape (the relative positions of its vertices) <strong>doesn't change</strong>. Only the transform matrix (translate / rotate / scale) varies over time.</p>
<p>In USD this is expressed as <code>xformOp:translate</code>, <code>xformOp:rotateXYZ</code>, <code>xformOp:scale</code> time-sampled on an <code>Xform</code> prim. The simplest possible mechanism.</p>

<h4>(B) Deformation animation</h4>
<p>The shape itself <em>changes</em>. An arm bends, a face smiles and stops smiling, a flag ripples in the wind. Individual vertices need to move <strong>relative to one another</strong>.</p>

<p>The naive approach: time-sample every vertex independently. A character with 20,000 vertices, animated for 60 seconds at 30 fps &rarr; 36 million samples. Bloated, infeasible.</p>

<aside class="note">
  <span class="label">Key insight</span>
  <p>Most humanoid deformation isn't free &mdash; it's <em>constrained</em> by a biological skeleton. The elbow rotates around a joint, it doesn't distort independently. That observation gives us a dimensionality reduction: instead of storing 20,000 vertices &times; 1800 frames, store 30 joints &times; 1800 frames plus a "which vertex follows which joint" table. Skeletal animation is the technique that exploits this structure.</p>
</aside>

<h2 id="s5"><span class="secnum">&sect;5</span>Why skeletal animation exists</h2>

<p>Skeletal animation is a <strong>specialised compression scheme</strong> for deformation animation. The idea:</p>

<ol>
  <li>Build a "skeleton" &mdash; a tree of <em>joints</em>. Each joint has a position and rotation in the space of its parent joint.</li>
  <li>Each vertex of the mesh is "<em>bound</em>" to one or more joints (<strong>skinning</strong>), with weights (<strong>skin weights</strong>).</li>
  <li>To animate, you only change the transforms of the <em>joints</em>. Each frame, every vertex is recomputed as a <em>weighted average</em> of the joint transforms that influence it.</li>
</ol>

<div class="figure">
<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg">
  <g font-family="var(--at-font-mono)" font-size="10" fill="var(--at-text)">
    <text x="20" y="18" font-weight="700" font-size="11">Skeleton (joint hierarchy)</text>

    <line x1="80" y1="40" x2="80" y2="220" stroke="var(--at-violet)" stroke-width="3"></line>
    <line x1="80" y1="80" x2="50" y2="120" stroke="var(--at-violet)" stroke-width="2.5"></line>
    <line x1="50" y1="120" x2="40" y2="170" stroke="var(--at-violet)" stroke-width="2.5"></line>
    <line x1="80" y1="80" x2="110" y2="120" stroke="var(--at-violet)" stroke-width="2.5"></line>
    <line x1="110" y1="120" x2="120" y2="170" stroke="var(--at-violet)" stroke-width="2.5"></line>
    <line x1="80" y1="160" x2="65" y2="220" stroke="var(--at-violet)" stroke-width="2.5"></line>
    <line x1="80" y1="160" x2="95" y2="220" stroke="var(--at-violet)" stroke-width="2.5"></line>

    <circle cx="80" cy="40" r="5" fill="var(--at-accent)"></circle><text x="90" y="44">Head</text>
    <circle cx="80" cy="80" r="5" fill="var(--at-accent)"></circle><text x="90" y="84">Chest</text>
    <circle cx="50" cy="120" r="5" fill="var(--at-accent)"></circle><text x="15" y="124">L.Arm</text>
    <circle cx="40" cy="170" r="5" fill="var(--at-accent)"></circle><text x="3" y="174">L.Hand</text>
    <circle cx="110" cy="120" r="5" fill="var(--at-accent)"></circle><text x="118" y="124">R.Arm</text>
    <circle cx="120" cy="170" r="5" fill="var(--at-accent)"></circle><text x="128" y="174">R.Hand</text>
    <circle cx="80" cy="160" r="5" fill="var(--at-accent)"></circle><text x="90" y="164">Hips</text>
    <circle cx="65" cy="220" r="5" fill="var(--at-accent)"></circle><text x="20" y="224">L.Foot</text>
    <circle cx="95" cy="220" r="5" fill="var(--at-accent)"></circle><text x="105" y="224">R.Foot</text>

    <text x="250" y="18" font-weight="700" font-size="11">Mesh + Skinning weights</text>

    <g transform="translate(280,30)">
      <ellipse cx="60" cy="15" rx="14" ry="14" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"></ellipse>
      <rect x="40" y="30" width="40" height="65" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"></rect>
      <rect x="20" y="35" width="18" height="55" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"></rect>
      <rect x="82" y="35" width="18" height="55" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"></rect>
      <rect x="42" y="95" width="16" height="65" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"></rect>
      <rect x="62" y="95" width="16" height="65" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.2"></rect>

      <circle cx="35" cy="42" r="2.5" fill="var(--at-accent)"></circle>
      <circle cx="35" cy="60" r="2.5" fill="var(--at-accent)"></circle>
      <circle cx="60" cy="50" r="2.5" fill="var(--at-accent)"></circle>
      <circle cx="90" cy="80" r="2.5" fill="var(--at-accent)"></circle>
      <text x="180" y="50" font-size="9">vertex i:</text>
      <text x="180" y="65" font-size="9">  jointIndices = [L.Arm, Chest]</text>
      <text x="180" y="80" font-size="9">  jointWeights = [0.7, 0.3]</text>
      <line x1="170" y1="48" x2="35" y2="42" stroke="var(--at-accent)" stroke-width="0.5" stroke-dasharray="2,2"></line>
    </g>
  </g>
</svg>
<figcaption>Figure 2 &mdash; Left: the joint tree (skeleton). Right: the mesh plus a mapping of "which vertex is influenced by which joint and by how much." Each vertex is typically bound to 1&ndash;4 joints with weights summing to 1.0. This is the <em>skin binding</em>.</figcaption>
</div>

<p>When joint <em>L.Arm</em> rotates, vertex <code>i</code> (weight 0.7 with L.Arm) moves <em>mostly</em> with L.Arm. A vertex near the elbow joint has its weight split between L.Arm and Chest so that the transition is smooth &mdash; that's why weights are real-valued rather than binary 0/1.</p>

<p>The final compression: instead of 20k vertices &times; 1800 frames = 36 M samples, you store:</p>
<ul>
  <li>30 joints &times; 1800 frames = 54 K transform samples (animation data &mdash; <em>light</em>)</li>
  <li>20 k vertices &times; max 4 joint indices + 4 weights = 160 K static numbers (binding data &mdash; <em>stored once</em>)</li>
</ul>
<p>Roughly 300&times; smaller. That is the entire reason skeletal animation exists.</p>

<h2 id="s6"><span class="secnum">&sect;6</span>The components of skeletal animation</h2>

<p>There are six pieces, in two groups: <em>static binding</em> (stored once, never changes) and <em>animation</em> (varies with time):</p>

<table class="compare">
  <thead><tr><th>Component</th><th>Kind</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td>Joint hierarchy</td><td>static</td><td>List of joint names + which is the parent of which. Defines the skeleton's structure.</td></tr>
    <tr><td>Rest transforms</td><td>static</td><td>Each joint's position and rotation when not animated (the default pose). One 4&times;4 matrix per joint.</td></tr>
    <tr><td>Bind transforms</td><td>static</td><td>Joint positions <em>at the moment the mesh was bound to the skeleton</em>. Usually identical to rest pose, but not required to be.</td></tr>
    <tr><td>Mesh + skin weights</td><td>static</td><td>Mesh geometry plus the vertex&rarr;joints+weights mapping. Stored once.</td></tr>
    <tr><td>Joint animation</td><td>animated</td><td>For each joint, each frame: a transform offset from the rest pose. <strong>This is the "animation clip".</strong></td></tr>
    <tr><td>Blend shapes</td><td>animated (optional)</td><td>Extra deformation that doesn't go through joints &mdash; e.g. facial expressions. Out of scope for this post.</td></tr>
  </tbody>
</table>

<aside class="note">
  <span class="label">Why both rest pose and bind pose</span>
  <p>The bind pose is the "snapshot" the artist took when binding the mesh to the skeleton &mdash; a T-pose, for instance. The rest pose is the default pose a viewer renders when no animation is playing. Most pipelines make these identical, but the USD schema keeps them separate to support special cases (rebinding, cross-skeleton retargeting).</p>
</aside>

<h2 id="s7"><span class="secnum">&sect;7</span>How USD packages those components</h2>

<p>USD <em>did not invent</em> skeletal animation &mdash; it just defines a schema (how prims and attributes are organised) to store the six pieces above. The schema lives in the <code>UsdSkel</code> module. Four key prim types:</p>

<div class="terms">
  <dl>
    <dt>SkelRoot</dt>
    <dd>The "wrapper" for an entire skinned asset. An <code>Xform</code>-like prim that marks "this is the root of an asset with skinning inside." When USD traverses into a SkelRoot, it knows to activate the skinning pipeline.</dd>

    <dt>Skeleton</dt>
    <dd>A prim that holds the skeletal structure: <code>joints</code> (token[]), <code>bindTransforms</code>, <code>restTransforms</code>. The Skeleton itself doesn't move &mdash; it's the static rig.</dd>

    <dt>SkelAnimation</dt>
    <dd>A prim that holds animation data: per-joint <code>translations</code>, <code>rotations</code>, <code>scales</code>, time-sampled. This is a single "clip" &mdash; walk, run, idle, and so on.</dd>

    <dt>SkelBindingAPI</dt>
    <dd>Not a prim but an <em>API schema</em> applied to a Mesh prim. It adds <code>primvars:skel:jointIndices</code>, <code>primvars:skel:jointWeights</code>, and a <code>skel:skeleton</code> relationship so the mesh knows "I am bound to this skeleton, and these are the joints each vertex follows."</dd>
  </dl>
</div>

<p>On top of that there's a <code>skel:animationSource</code> relationship on the Skeleton (or SkelRoot) pointing at the SkelAnimation prim that drives it. That's the dynamic linkage into the static schema.</p>

<div class="figure">
<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L6,4 L0,8 Z" fill="var(--at-accent)"></path>
    </marker>
  </defs>
  <g font-family="var(--at-font-mono)" font-size="10" fill="var(--at-text)">
    <rect x="180" y="10" width="200" height="40" rx="4" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"></rect>
    <text x="280" y="28" text-anchor="middle" font-weight="700">SkelRoot</text>
    <text x="280" y="42" text-anchor="middle" font-size="9" fill="var(--at-muted)">"this is a skinned asset"</text>

    <line x1="220" y1="50" x2="120" y2="90" stroke="var(--at-line-strong)" stroke-width="1"></line>
    <line x1="280" y1="50" x2="280" y2="90" stroke="var(--at-line-strong)" stroke-width="1"></line>
    <line x1="340" y1="50" x2="440" y2="90" stroke="var(--at-line-strong)" stroke-width="1"></line>

    <rect x="40" y="90" width="160" height="80" rx="4" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"></rect>
    <text x="120" y="108" text-anchor="middle" font-weight="700">Skeleton</text>
    <text x="120" y="124" text-anchor="middle" font-size="9">joints: ["Hips", "Chest", ...]</text>
    <text x="120" y="138" text-anchor="middle" font-size="9">bindTransforms: [...]</text>
    <text x="120" y="152" text-anchor="middle" font-size="9">restTransforms: [...]</text>
    <text x="120" y="166" text-anchor="middle" font-size="9" fill="var(--at-muted)">&rarr; skel:animationSource</text>

    <rect x="220" y="90" width="120" height="80" rx="4" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"></rect>
    <text x="280" y="108" text-anchor="middle" font-weight="700">Mesh</text>
    <text x="280" y="122" text-anchor="middle" font-size="9">points = [...]</text>
    <text x="280" y="136" text-anchor="middle" font-size="9" fill="var(--at-muted)">+ SkelBindingAPI:</text>
    <text x="280" y="148" text-anchor="middle" font-size="9">jointIndices, jointWeights</text>
    <text x="280" y="160" text-anchor="middle" font-size="9" fill="var(--at-muted)">&rarr; rel skel:skeleton</text>

    <rect x="360" y="90" width="160" height="80" rx="4" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"></rect>
    <text x="440" y="108" text-anchor="middle" font-weight="700">SkelAnimation</text>
    <text x="440" y="124" text-anchor="middle" font-size="9">joints: [...]</text>
    <text x="440" y="138" text-anchor="middle" font-size="9">rotations.timeSamples</text>
    <text x="440" y="152" text-anchor="middle" font-size="9">translations.timeSamples</text>
    <text x="440" y="166" text-anchor="middle" font-size="9">scales.timeSamples</text>

    <line x1="200" y1="166" x2="360" y2="135" stroke="var(--at-accent)" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr)"></line>
    <line x1="280" y1="156" x2="200" y2="138" stroke="var(--at-accent)" stroke-width="1" stroke-dasharray="3,3" marker-end="url(#arr)"></line>

    <text x="280" y="200" text-anchor="middle" font-size="9" fill="var(--at-muted)">At render time:</text>
    <text x="280" y="215" text-anchor="middle" font-size="9">SkelAnimation supplies joint transforms at time t</text>
    <text x="280" y="229" text-anchor="middle" font-size="9">&rarr; Skeleton computes world-space joint matrices</text>
    <text x="280" y="243" text-anchor="middle" font-size="9">&rarr; Mesh deforms points using weighted joint transforms</text>
    <text x="280" y="257" text-anchor="middle" font-size="9" fill="var(--at-accent)" font-weight="700">&rarr; vertices land at their final positions</text>
  </g>
</svg>
<figcaption>Figure 3 &mdash; The four UsdSkel components and how they relate. SkelRoot is the container; Skeleton, Mesh, and SkelAnimation are three "sibling" prims inside it; SkelBindingAPI is a thin schema applied to the Mesh. The accent arrows are USD relationship arcs (<code>rel skel:skeleton</code>, <code>rel skel:animationSource</code>).</figcaption>
</div>

<h2 id="s8"><span class="secnum">&sect;8</span>What a character USD file looks like</h2>

<p>Here is a minimal <code>character.usda</code> &mdash; the entire machinery in a single file:</p>

<pre><code>#usda 1.0
(
    defaultPrim = "OfficeWorker"
    upAxis = "Z"
)

def SkelRoot "OfficeWorker" (
    kind = "component"
)
{
    def Skeleton "Skeleton"
    {
        uniform token[] joints = [
            "Hips",
            "Hips/Chest",
            "Hips/Chest/Head",
            "Hips/Chest/L_Arm",
            "Hips/Chest/L_Arm/L_Hand",
            "Hips/Chest/R_Arm",
            "Hips/Chest/R_Arm/R_Hand"
        ]
        uniform matrix4d[] restTransforms = [ ... 7 matrices ... ]
        uniform matrix4d[] bindTransforms = [ ... 7 matrices ... ]

        rel skel:animationSource = &lt;/OfficeWorker/WalkClip&gt;
    }

    def Mesh "Body" (
        prepend apiSchemas = ["SkelBindingAPI"]
    )
    {
        rel skel:skeleton = &lt;/OfficeWorker/Skeleton&gt;

        point3f[] points = [ ... ~20,000 points ... ]
        int[] faceVertexCounts = [ ... ]
        int[] faceVertexIndices = [ ... ]

        int[] primvars:skel:jointIndices = [ ... ] (
            interpolation = "vertex"
            elementSize = 4
        )
        float[] primvars:skel:jointWeights = [ ... ] (
            interpolation = "vertex"
            elementSize = 4
        )
        matrix4d primvars:skel:geomBindTransform = ( ... )
    }

    def SkelAnimation "WalkClip"
    {
        uniform token[] joints = [
            "Hips",
            "Hips/Chest",
            "Hips/Chest/Head",
            "Hips/Chest/L_Arm",
            "Hips/Chest/L_Arm/L_Hand",
            "Hips/Chest/R_Arm",
            "Hips/Chest/R_Arm/R_Hand"
        ]
        quatf[] rotations.timeSamples = {
            0:   [ ... 7 quaternions ... ],
            24:  [ ... 7 quaternions ... ],
            48:  [ ... 7 quaternions ... ],
        }
        float3[] translations.timeSamples = {
            0:   [ ... 7 vec3 ... ],
            24:  [ ... ],
            48:  [ ... ],
        }
    }
}</code></pre>

<p>A few things worth noting:</p>
<ul>
  <li><strong>Path-form joint names.</strong> Joint names use <code>/</code> to encode hierarchy. <code>"Hips/Chest/L_Arm"</code> means L_Arm is a child of Chest, which is a child of Hips. USD parses these paths to rebuild the tree.</li>
  <li><strong>elementSize = 4.</strong> Each vertex has 4 joint indices and 4 weights. You can drop to 2 or 1 for simpler assets, or push to 8 for high-quality work. Pure file-size vs deformation-quality tradeoff.</li>
  <li><strong>Separate rotations / translations / scales.</strong> Most joints only <em>rotate</em> (an elbow doesn't lengthen), so translations and scales typically only appear on the root joint (Hips). Separating them lets the format encode this sparsity.</li>
  <li><strong><code>quatf</code> for rotations.</strong> Quaternions interpolate better than Euler angles &mdash; no gimbal lock, and slerp gives smooth blends.</li>
  <li><strong>SkelAnimation is an <em>independent prim</em>.</strong> It has its own path (<code>/OfficeWorker/WalkClip</code>). You can place it in a separate file, in a shared animations folder, and reference it in &mdash; that's how clips get reused across characters.</li>
</ul>

<h2 id="s9"><span class="secnum">&sect;9</span>Composition: reusing skeleton and animation</h2>

<p>The elegance of USD is that those four prims don't have to live in the same file. You can split them up:</p>

<pre><code>shared/agents/office_worker.usd      Mesh + Skeleton (geometry binding)
shared/animations/walk.usd            SkelAnimation (clip data)
shared/animations/run.usd             SkelAnimation (clip data)

scene/character_01.usd:
  def SkelRoot "Character_01" (
      references = @../shared/agents/office_worker.usd@
  )
  {
      over "Skeleton" {
          rel skel:animationSource = &lt;/Character_01/WalkClip&gt;
      }
      def SkelAnimation "WalkClip" (
          references = @../shared/animations/walk.usd@
      ) {}
  }</code></pre>

<p>Common strategies:</p>
<ul>
  <li><strong>Mesh + Skeleton in one file.</strong> The asset for character A &mdash; the geometry and skeleton ship together because the mesh-to-skeleton skin weights are static and can't be cleanly separated.</li>
  <li><strong>SkelAnimation per file.</strong> Walk, run, and idle become three independent files. Switching clip = changing the <code>skel:animationSource</code> relationship.</li>
  <li><strong>Multiple instances sharing the same skeleton + mesh + clip.</strong> Reference the same character from 100 prims &mdash; USD instances the asset automatically. The memory cost of the mesh is 1&times;, not 100&times;.</li>
  <li><strong>Per-instance time offset.</strong> Trick for getting 100 characters to all walk but not in lockstep: a <code>UsdSkelAnimMapper</code> or a shader-level time offset. Not native to UsdSkel; needs a helper.</li>
</ul>

<h2 id="s10"><span class="secnum">&sect;10</span>Omniverse extensions: AnimationGraph &amp; AnimationClip</h2>

<p>The core UsdSkel schema (&sect;7) is enough to represent <em>one clip currently playing</em>. But real characters need to <strong>switch between multiple clips</strong> &mdash; idle, walk, run, sit &mdash; and to <strong>blend</strong> between them smoothly. That's the job of an <em>animation state machine</em>.</p>

<p>Core USD doesn't have one. Omniverse adds two additional schemas:</p>

<div class="terms">
  <dl>
    <dt>AnimationGraph</dt>
    <dd>An Omniverse prim type (not standard UsdSkel). It's a container for a state machine: a list of states, transitions between them, and parameter inputs that drive those transitions. The equivalent of Unity's "Animator Controller" or Unreal's "Anim Blueprint."</dd>

    <dt>AnimationClip</dt>
    <dd>An Omniverse prim type. A single state in the AnimationGraph &mdash; a wrapper around a <code>SkelAnimation</code> with extra metadata (loop flag, blend-in/out durations, playback speed). When the state machine is in this state, the AnimationClip drives the skeleton.</dd>
  </dl>
</div>

<p>A minimal AnimationGraph wrapping a single clip looks like this:</p>

<pre><code>def AnimationGraph "AnimationGraph"
{
    def "walk_loop_anim" (
        payload = @./animations/walk_loop.skelanim.usd@
    ) {}

    def AnimationClip "walk_loop_clip"
    {
        # state machine config &mdash; loop the walk clip
    }
}</code></pre>

<p>For a crowd, you can make every character <em>share one AnimationGraph</em> with <em>one AnimationClip</em>, so every character plays the same walk loop. No other states, no blending &mdash; the simplest possible setup.</p>

<aside class="note">
  <span class="label">Why Omniverse needed extra schemas</span>
  <p>USD is a <em>data interchange</em> format, not a runtime. Core UsdSkel only answers "what does the character look like at frame t?" The question "when the user presses W, switch to the run clip" belongs to <em>game engine logic</em>, not the data format. Omniverse wanted to ship assets with built-in behaviour, so it invented AnimationGraph to encode that logic inside USD. That makes it a <strong>non-portable</strong> extension &mdash; opening such a file with stock <code>usdview</code> may not render it correctly.</p>
</aside>

<h2 id="s11"><span class="secnum">&sect;11</span>PointInstancer vs one-SkelRoot-per-agent (crowds)</h2>

<p>When you need to render <em>many</em> characters at once (a crowd), there are two patterns. Both are valid; the right choice depends on scale and on what your render delegate supports.</p>

<h4>Pattern X &mdash; PointInstancer of SkelRoot prototypes</h4>
<p>One <code>PointInstancer</code> prim with <code>prototypes</code> pointing at a few SkelRoot assets. Each instance has a position, an orientation, and a prototype index. Thousands of agents collapse to a single prim.</p>
<p><strong>Strength:</strong> memory is extremely tight. The renderer sees one prim plus a handful of arrays.</p>
<p><strong>Weakness:</strong> per-instance SkelAnimation has <em>no native support</em>. All instances must play the same clip at the same time (or rely on a time-offset trick). The render delegate must understand skinned instancing &mdash; not every delegate does. This is the big gotcha.</p>

<h4>Pattern Y &mdash; One SkelRoot per agent</h4>
<p>One SkelRoot prim per character, each an Xform with its own payload. Per-agent transform animation is time-sampled on the xform op.</p>
<p><strong>Strength:</strong> every render delegate understands it. Per-agent variation (different clip, different speed, different size) is trivial.</p>
<p><strong>Weakness:</strong> large prim counts. Scene-graph traversal is more expensive, and per-prim metadata adds up. Theory says it doesn't scale past 10 k+ agents; in practice it holds up fine for a few hundred.</p>

<table class="compare">
  <thead><tr><th>Aspect</th><th>PointInstancer (X)</th><th>One-SkelRoot-per (Y)</th></tr></thead>
  <tbody>
    <tr><td>Prim count</td><td>1</td><td>N</td></tr>
    <tr><td>Per-instance clip variation</td><td>Hard (custom primvar + delegate support)</td><td>Trivial</td></tr>
    <tr><td>Render delegate support</td><td>Limited</td><td>Universal</td></tr>
    <tr><td>Scaling ceiling</td><td>10,000+ (in theory)</td><td>~500&ndash;1000 in practice</td></tr>
    <tr><td>Memory for transform animation</td><td>1 shared array</td><td>N separate arrays</td></tr>
    <tr><td>Authoring complexity</td><td>High (needs a baker)</td><td>Low (each agent is a normal Xform)</td></tr>
  </tbody>
</table>

<p>The summary: each agent in Pattern Y stacks <strong>two animations</strong> on top of one another:</p>
<ol>
  <li><strong>Transform animation</strong> (&sect;4A) &mdash; moves the agent through space. Authored on the per-agent Xform. Different for every agent.</li>
  <li><strong>Skeletal animation</strong> (&sect;4B) &mdash; body deformation for the walk loop. Authored in the SkelAnimation. <em>Shared across all agents.</em></li>
</ol>

<p>That's why a crowd scene can fit in tens of megabytes instead of gigabytes. The expensive part (per-vertex per-frame deformation) is stored once. The cheap part (six floats per frame per agent) multiplied across the crowd stays manageable.</p>

<h2 id="s12"><span class="secnum">&sect;12</span>Quick-reference glossary</h2>

<div class="terms">
<dl>
  <dt>Skeleton</dt>
  <dd>The joint tree with rest/bind transforms. Static. A prim type in UsdSkel.</dd>

  <dt>SkelRoot</dt>
  <dd>The "wrapper" for a skinned asset. Contains the Skeleton, Mesh, and SkelAnimation.</dd>

  <dt>SkelAnimation</dt>
  <dd>A single clip &mdash; per-joint rotations/translations/scales over time. A prim type in UsdSkel.</dd>

  <dt>SkelBindingAPI</dt>
  <dd>An API schema applied to a Mesh. Adds <code>jointIndices</code>, <code>jointWeights</code>, and a <code>skel:skeleton</code> rel.</dd>

  <dt>Joint</dt>
  <dd>A single "bone" in the skeleton. Not a prim &mdash; just a name and an index in the Skeleton's <code>joints</code> array.</dd>

  <dt>Bind pose</dt>
  <dd>The pose of the mesh at the moment it was bound to the skeleton (a T-pose, for example). Stored in <code>bindTransforms</code>.</dd>

  <dt>Rest pose</dt>
  <dd>The default pose when nothing is animated. Stored in <code>restTransforms</code>. Usually equals the bind pose.</dd>

  <dt>Skinning</dt>
  <dd>The mapping of vertex &rarr; joints + weights. Stored in primvars <code>skel:jointIndices</code> and <code>skel:jointWeights</code>.</dd>

  <dt>Weight</dt>
  <dd>How much a joint influences a vertex (0 to 1). Weights for a vertex sum to 1.</dd>

  <dt>Time code</dt>
  <dd>USD's "unit of time." Not necessarily seconds &mdash; divide by <code>timeCodesPerSecond</code>.</dd>

  <dt>Time sample</dt>
  <dd>A value at a specific time code. USD interpolates between samples.</dd>

  <dt>AnimationGraph</dt>
  <dd>An Omniverse extension. A state machine over clips. Not part of UsdSkel core.</dd>

  <dt>AnimationClip</dt>
  <dd>An Omniverse extension. One state in an AnimationGraph, wrapping a SkelAnimation.</dd>

  <dt>PointInstancer</dt>
  <dd>A USD prim type. Renders many instances of a small set of prototypes efficiently. Hard to combine with per-instance skeletal animation.</dd>

  <dt>Pattern Y (one-SkelRoot-per-agent)</dt>
  <dd>Each character is its own SkelRoot prim. Simple, scales to several hundred agents.</dd>
</dl>
</div>

<hr class="section-break">

<p>Two good places to go deeper:</p>
<ol>
  <li><a href="https://openusd.org/release/api/_usd_skel__intro.html">OpenUSD UsdSkel introduction</a> &mdash; Pixar's authoritative spec. Dry but accurate.</li>
  <li><a href="https://docs.omniverse.nvidia.com/extensions/latest/ext_animation_animation-graph.html">NVIDIA Omniverse Animation Graph docs</a> &mdash; the non-portable extension layer.</li>
</ol>

</div>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong &middot; Omniverse USD deep dive &middot; May 2026</p>
  <p style="margin-top: 8px;">Filed under: 3D graphics, USD schema, computer animation</p>
</div>
`;

export const script = ``;
