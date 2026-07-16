export const styles = `
  .artifact-scope{
    font-size:17px;line-height:1.7;
    -webkit-font-smoothing:antialiased;
  }
  .artifact-scope *{box-sizing:border-box}

  .artifact-scope article{max-width:880px;margin:0 auto;padding:56px 24px 96px}
  .artifact-scope header.post-head{border-bottom:1px solid var(--at-line);padding-bottom:32px;margin-bottom:8px}
  .artifact-scope .eyebrow{color:var(--at-accent);font-family:var(--at-font-mono);font-size:13px;letter-spacing:1.5px;text-transform:uppercase;
    font-weight:700;margin-bottom:14px}
  .artifact-scope h1{font-family:var(--at-font-display);font-size:38px;line-height:1.2;letter-spacing:-.5px;margin:0 0 16px;font-weight:800}
  .artifact-scope .lead{font-size:20px;line-height:1.55;color:var(--at-muted);margin:0;font-weight:400}
  .artifact-scope .byline{color:var(--at-faint);font-family:var(--at-font-mono);font-size:14px;margin-top:18px}
  .artifact-scope h2{font-family:var(--at-font-display);font-size:26px;margin:64px 0 14px;font-weight:800;letter-spacing:-.3px;
    display:flex;align-items:center;gap:14px}
  .artifact-scope h2 .step{flex:0 0 36px;height:36px;background:var(--at-accent);color:var(--at-bg);border-radius:10px;
    display:grid;place-items:center;font-family:var(--at-font-mono);font-size:15px;font-weight:700}
  .artifact-scope h3{font-family:var(--at-font-display);font-size:19px;margin:32px 0 8px;font-weight:700;color:var(--at-text)}
  .artifact-scope p{margin:14px 0;color:var(--at-muted)}
  .artifact-scope p strong, .artifact-scope li strong{color:var(--at-text);font-weight:700}
  .artifact-scope code{background:var(--at-inset);color:var(--at-text);padding:2px 6px;border-radius:4px;
    font-size:.92em;font-family:var(--at-font-mono)}
  .artifact-scope pre{background:var(--at-inset);color:var(--at-text);padding:18px 22px;border-radius:10px;overflow-x:auto;
    font-family:var(--at-font-mono);font-size:13.5px;line-height:1.6;margin:18px 0}
  .artifact-scope .figure{background:var(--at-surface);border:1px solid var(--at-line);border-radius:14px;
    padding:28px;margin:24px 0}
  .artifact-scope .figure-caption{color:var(--at-faint);font-size:13.5px;text-align:center;margin-top:16px;
    font-style:italic}
  .artifact-scope .callout{padding:16px 20px;border-radius:8px;margin:22px 0;
    background:var(--at-accent-soft);border:1px solid var(--at-line);border-left:4px solid var(--at-accent)}
  .artifact-scope .callout.warn{background:var(--at-amber-soft);border-left-color:var(--at-amber)}
  .artifact-scope .callout.good{background:var(--at-green-soft);border-left-color:var(--at-green)}
  .artifact-scope .callout.bad{background:var(--at-amber-soft);border-left-color:var(--at-amber)}
  .artifact-scope .callout p:first-child{margin-top:0}
  .artifact-scope .callout p:last-child{margin-bottom:0}
  .artifact-scope .callout .title{display:block;color:var(--at-text);font-weight:700;margin-bottom:6px;font-size:15px}
  .artifact-scope .grid{display:grid;gap:14px;margin:18px 0}
  .artifact-scope .g2{grid-template-columns:1fr 1fr}
  .artifact-scope .g3{grid-template-columns:1fr 1fr 1fr}
  .artifact-scope .g4{grid-template-columns:1fr 1fr 1fr 1fr}
  @media(max-width:720px){.artifact-scope .g2,.artifact-scope .g3,.artifact-scope .g4{grid-template-columns:1fr}}
  .artifact-scope .box{background:var(--at-surface);border:1px solid var(--at-line);border-radius:10px;padding:18px}
  .artifact-scope .box h4{margin:0 0 8px;font-size:15px;color:var(--at-text);font-weight:700}
  .artifact-scope .box p{margin:0;font-size:14.5px;line-height:1.55}
  .artifact-scope .box .icon{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;
    color:var(--at-bg);font-weight:800;font-size:14px;margin-bottom:10px}
  .artifact-scope .box .icon.blue{background:var(--at-blue)}
  .artifact-scope .box .icon.green{background:var(--at-green)}
  .artifact-scope .box .icon.red{background:var(--at-amber)}
  .artifact-scope .box .icon.amber{background:var(--at-amber)}
  .artifact-scope .box .icon.purple{background:var(--at-violet)}
  .artifact-scope .tag{display:inline-block;font-family:var(--at-font-mono);font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;
    letter-spacing:.5px}
  .artifact-scope .tag.good{background:var(--at-green-soft);color:var(--at-green);border:1px solid var(--at-green-soft)}
  .artifact-scope .tag.bad{background:var(--at-amber-soft);color:var(--at-amber);border:1px solid var(--at-amber-soft)}
  .artifact-scope .tag.warn{background:var(--at-amber-soft);color:var(--at-amber);border:1px solid var(--at-amber-soft)}
  .artifact-scope .tag.muted{background:var(--at-inset);color:var(--at-faint);border:1px solid var(--at-line)}
  .artifact-scope table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}
  .artifact-scope th,.artifact-scope td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--at-line);vertical-align:top}
  .artifact-scope th{background:var(--at-surface);color:var(--at-text);font-family:var(--at-font-mono);font-weight:700;font-size:12px;letter-spacing:.4px;
    text-transform:uppercase}
  .artifact-scope td:first-child{font-weight:600;color:var(--at-text)}
  .artifact-scope svg.diagram{width:100%;height:auto;display:block}
  .artifact-scope .toc{background:var(--at-surface);border:1px solid var(--at-line);border-radius:10px;
    padding:22px 26px;margin:32px 0}
  .artifact-scope .toc h3{margin:0 0 12px;font-family:var(--at-font-mono);font-size:12px;letter-spacing:1.2px;text-transform:uppercase;
    color:var(--at-faint);font-weight:700}
  .artifact-scope .toc ol{margin:0;padding-left:22px;color:var(--at-muted);line-height:1.9}
  .artifact-scope .toc a{color:var(--at-text);text-decoration:none;border-bottom:1px solid transparent}
  .artifact-scope .toc a:hover{color:var(--at-accent);border-bottom-color:var(--at-accent)}
  .artifact-scope .mono{font-family:var(--at-font-mono)}
  .artifact-scope .kbd{background:var(--at-surface);border:1px solid var(--at-line);border-radius:5px;padding:1px 6px;
    font-family:var(--at-font-mono);font-size:.85em;color:var(--at-text)}
  .artifact-scope ul.clean{list-style:none;padding:0;margin:14px 0}
  .artifact-scope ul.clean li{padding:10px 0;border-bottom:1px solid var(--at-line);color:var(--at-muted)}
  .artifact-scope ul.clean li:last-child{border-bottom:none}
  .artifact-scope ul.clean li strong{color:var(--at-text)}
  .artifact-scope .kicker{font-family:var(--at-font-mono);font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--at-faint);
    font-weight:700;margin-bottom:6px}
  .artifact-scope .ascii{background:var(--at-inset);border:1px solid var(--at-line);border-radius:10px;
    font-family:var(--at-font-mono);font-size:13px;line-height:1.55;
    color:var(--at-text);padding:18px 22px;white-space:pre;overflow-x:auto}
  .artifact-scope .ascii .c-acc{color:var(--at-accent);font-weight:700}
  .artifact-scope .ascii .c-muted{color:var(--at-faint)}
  .artifact-scope .ascii .c-good{color:var(--at-green);font-weight:700}
  .artifact-scope .ascii .c-bad{color:var(--at-amber);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--at-line);color:var(--at-faint);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--at-faint);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--at-accent);margin-bottom:10px}
`;

export const html = `
<article>

<header class="post-head">
  <div class="eyebrow">Geospatial 3D · Part 5 of 5</div>
  <h1>USD &rarr; Fabric &rarr; Pixel <span style="font-weight:400;color:var(--at-faint)">(it's just React. and Doom.)</span></h1>
  <p class="lead">You already understand this pipeline &mdash; you&rsquo;ve used it on the web and played it in 1993. Once you see the shared pattern, Omniverse&rsquo;s rendering architecture stops being exotic.</p>
  <p class="byline">Geospatial 3D series · Part 5 (finale) · ~9 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#pattern">The one pattern behind all three</a></li>
    <li><a href="#omniverse">The Omniverse pipeline, named</a></li>
    <li><a href="#react">It&rsquo;s React</a></li>
    <li><a href="#doom">It&rsquo;s also Doom (1993)</a></li>
    <li><a href="#table">One table to rule them all</a></li>
    <li><a href="#why">Why this mental model is useful</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. PATTERN ───────────────────────── -->
<h2 id="pattern"><span class="step">1</span>The one pattern behind all three</h2>

<p>Every system that has to stay <em>both</em> easy-to-author <em>and</em> fast-at-60fps solves the same tension the same way. It refuses to use one data structure for both jobs, and instead keeps two.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 800 250" role="img" aria-label="The universal declarative-to-runtime pattern">
    <rect x="20" y="70" width="190" height="100" rx="12" fill="var(--at-violet-soft)" stroke="var(--at-violet)"/>
    <text x="115" y="100" fill="var(--at-violet)" font-size="13" text-anchor="middle" font-family="var(--at-font-mono)" font-weight="700">DECLARATIVE</text>
    <text x="115" y="120" fill="var(--at-muted)" font-size="11" text-anchor="middle">source of truth</text>
    <text x="115" y="138" fill="var(--at-faint)" font-size="10" text-anchor="middle">easy to author,</text>
    <text x="115" y="152" fill="var(--at-faint)" font-size="10" text-anchor="middle">slow to mutate</text>

    <rect x="300" y="70" width="190" height="100" rx="12" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/>
    <text x="395" y="100" fill="var(--at-blue)" font-size="13" text-anchor="middle" font-family="var(--at-font-mono)" font-weight="700">RUNTIME MIRROR</text>
    <text x="395" y="120" fill="var(--at-muted)" font-size="11" text-anchor="middle">flattened copy</text>
    <text x="395" y="138" fill="var(--at-faint)" font-size="10" text-anchor="middle">ugly to author,</text>
    <text x="395" y="152" fill="var(--at-faint)" font-size="10" text-anchor="middle">fast per frame</text>

    <rect x="580" y="70" width="200" height="100" rx="12" fill="var(--at-green-soft)" stroke="var(--at-green)"/>
    <text x="680" y="100" fill="var(--at-green)" font-size="13" text-anchor="middle" font-family="var(--at-font-mono)" font-weight="700">PAINT BACKEND</text>
    <text x="680" y="120" fill="var(--at-muted)" font-size="11" text-anchor="middle">pluggable</text>
    <text x="680" y="138" fill="var(--at-faint)" font-size="10" text-anchor="middle">turns data</text>
    <text x="680" y="152" fill="var(--at-faint)" font-size="10" text-anchor="middle">into pixels</text>

    <defs><marker id="pat-arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-blue)"/></marker></defs>
    <path d="M210 120 H300" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#pat-arr)"/>
    <path d="M490 120 H580" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#pat-arr)"/>
    <text x="214" y="108" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="10">diff / sync</text>
    <text x="500" y="108" fill="var(--at-faint)" font-family="var(--at-font-mono)" font-size="10">feed</text>
    <text x="20" y="210" fill="var(--at-faint)" font-size="13">The trick everywhere: never recompute the source per frame. Flatten once, sync only what changed, paint the mirror.</text>
  </svg>
  <p class="figure-caption">Hold this shape in your head. The next three sections just relabel these three boxes.</p>
</div>

<!-- ───────────────────────── 2. OMNIVERSE ───────────────────────── -->
<h2 id="omniverse"><span class="step">2</span>The Omniverse pipeline, named</h2>

<p>Here is the real pipeline, with the actual component names you&rsquo;ll see in Kit and Cesium for Omniverse logs:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 330" role="img" aria-label="USD to Fabric to RTX pipeline">
    <!-- USD -->
    <rect x="20" y="30" width="200" height="110" rx="12" fill="var(--at-violet-soft)" stroke="var(--at-violet)"/>
    <text x="36" y="56" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">&#9312; USD STAGE</text>
    <text x="36" y="80" fill="var(--at-muted)" font-size="11">layers + references +</text>
    <text x="36" y="96" fill="var(--at-muted)" font-size="11">variants &rarr; composed</text>
    <text x="36" y="112" fill="var(--at-faint)" font-size="11">via LIVRPS rules</text>
    <text x="36" y="130" fill="var(--at-faint)" font-size="11">declarative, on disk</text>
    <!-- Fabric -->
    <rect x="310" y="30" width="200" height="110" rx="12" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/>
    <text x="326" y="56" fill="var(--at-blue)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">&#9313; FABRIC</text>
    <text x="326" y="80" fill="var(--at-muted)" font-size="11">flattened in-memory</text>
    <text x="326" y="96" fill="var(--at-muted)" font-size="11">arrays, GPU-friendly</text>
    <text x="326" y="112" fill="var(--at-faint)" font-size="11">(was &ldquo;Flatcache&rdquo;)</text>
    <text x="326" y="130" fill="var(--at-faint)" font-size="11">authored via USDRT</text>
    <!-- Hydra -->
    <rect x="600" y="30" width="200" height="110" rx="12" fill="var(--at-amber-soft)" stroke="var(--at-amber)"/>
    <text x="616" y="56" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">&#9314; HYDRA</text>
    <text x="616" y="80" fill="var(--at-muted)" font-size="11">Fabric Scene Delegate</text>
    <text x="616" y="96" fill="var(--at-muted)" font-size="11">&rarr; render delegate</text>
    <text x="616" y="112" fill="var(--at-faint)" font-size="11">the abstraction that</text>
    <text x="616" y="130" fill="var(--at-faint)" font-size="11">decouples scene/renderer</text>
    <!-- RTX -->
    <rect x="310" y="210" width="200" height="90" rx="12" fill="var(--at-green-soft)" stroke="var(--at-green)"/>
    <text x="326" y="238" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">&#9315; RTX RENDERER</text>
    <text x="326" y="262" fill="var(--at-muted)" font-size="11">ray tracing + MDL</text>
    <text x="326" y="280" fill="var(--at-faint)" font-size="11">&rarr; pixels on screen</text>

    <defs><marker id="omn-arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-blue)"/></marker></defs>
    <path d="M220 85 H310" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#omn-arr)"/>
    <text x="224" y="74" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="10">change-track + flatten</text>
    <path d="M510 85 H600" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#omn-arr)"/>
    <path d="M700 140 C700 210 540 240 510 250" stroke="var(--at-blue)" stroke-width="2" fill="none" marker-end="url(#omn-arr)"/>
    <text x="540" y="180" fill="var(--at-faint)" font-family="var(--at-font-mono)" font-size="10">render delegate = RTX</text>
  </svg>
  <p class="figure-caption">&#9312; USD is composed once. &#9313; Fabric is the flat, fast mirror. &#9314; Hydra&rsquo;s Fabric Scene Delegate reads Fabric and feeds a swappable <strong>render delegate</strong>. &#9315; RTX paints. Per-frame changes (animation, streaming) write to Fabric, <em>not</em> back to USD.</p>
</div>

<!-- ───────────────────────── 3. REACT ───────────────────────── -->
<h2 id="react"><span class="step">3</span>It&rsquo;s React</h2>

<p>If you&rsquo;ve written React, you already know this pipeline by other names. The match is uncanny &mdash; right down to the pluggable backends.</p>

<div class="callout">
  <span class="title">The mapping</span>
  <p>
  &bull; <strong>JSX / components</strong> = your USD authoring layers &mdash; declarative &ldquo;what the scene should be.&rdquo;<br>
  &bull; <strong>Virtual DOM</strong> (the tree <code>render()</code> produces) = the <strong>composed USD stage</strong>.<br>
  &bull; <strong>Reconciliation</strong> (React diffing old vs new VDOM) = Hydra <strong>change-tracking</strong> that decides which prims to push into Fabric.<br>
  &bull; <strong>The real DOM</strong> = <strong>Fabric</strong> &mdash; the actual, fast, mutable thing that gets drawn. You don&rsquo;t hand-write it; it&rsquo;s the committed mirror of your declaration.<br>
  &bull; <strong>react-dom / react-native / react-three-fiber</strong> = Hydra <strong>render delegates</strong> (RTX, Storm, others). Same scene description, swap the paint target.
  </p>
</div>

<div class="callout">
  <span class="title">The golden-rule match</span>
  <p>React&rsquo;s #1 perf rule: <em>don&rsquo;t call <code>setState</code> on every animation frame</em> &mdash; for hot-path motion you bypass reconciliation with refs / direct DOM writes. Omniverse&rsquo;s #1 rule is identical: <em>don&rsquo;t author per-frame changes back into USD</em> &mdash; write them straight to Fabric (via USDRT). <strong>Fabric is Omniverse&rsquo;s <code>useRef</code> escape hatch for the hot loop.</strong></p>
</div>

<!-- ───────────────────────── 4. DOOM ───────────────────────── -->
<h2 id="doom"><span class="step">4</span>It&rsquo;s also Doom (1993)</h2>

<p>Doom ran on a 386 with no GPU. It could not afford to reason about raw level geometry every frame &mdash; so it precomputed a structure that made the per-frame loop trivial. Same instinct as flattening USD to Fabric.</p>

<div class="callout bad">
  <span class="title">The mapping</span>
  <p>
  &bull; <strong>WAD files</strong> (level + asset data on disk) = your <strong>USD on disk</strong> &mdash; the authored source.<br>
  &bull; <strong>BSP tree</strong>, built when the level loads = the <strong>flattening step</strong>. A messy 2D map is preprocessed into a binary space-partition tree so visibility &amp; draw-order become a cheap tree walk.<br>
  &bull; <strong>The per-frame column rasterizer</strong> walking the BSP = Hydra + RTX consuming the flat structure.<br>
  &bull; Doom <em>never</em> re-derives the BSP per frame; Omniverse <em>never</em> re-composes USD per frame. <strong>Precompute the structure so the hot loop is cheap.</strong>
  </p>
</div>

<p>Doom also teaches the <strong>retained vs immediate</strong> distinction: the level is <em>retained</em> (a persistent structure you mutate), while the frame is drawn <em>immediately</em> from it. USD is the retained scene; the RTX frame is the immediate draw.</p>

<!-- ───────────────────────── 5. TABLE ───────────────────────── -->
<h2 id="table"><span class="step">5</span>One table to rule them all</h2>

<table>
  <tr><th>Role</th><th>Omniverse</th><th>React</th><th>Doom</th></tr>
  <tr><td>Declarative source</td><td style="color:var(--at-green)">USD layers (composed stage)</td><td style="color:var(--at-blue)">JSX &rarr; Virtual DOM</td><td style="color:var(--at-amber)">WAD level data</td></tr>
  <tr><td>Flatten / compile</td><td style="color:var(--at-green)">LIVRPS composition</td><td style="color:var(--at-blue)"><code>render()</code></td><td style="color:var(--at-amber)">BSP build at load</td></tr>
  <tr><td>Fast runtime mirror</td><td style="color:var(--at-green)">Fabric (flatcache)</td><td style="color:var(--at-blue)">Real DOM / fiber tree</td><td style="color:var(--at-amber)">BSP tree + segs</td></tr>
  <tr><td>Diff / sync</td><td style="color:var(--at-green)">Hydra change-tracking</td><td style="color:var(--at-blue)">Reconciliation</td><td style="color:var(--at-amber)">per-frame visibility walk</td></tr>
  <tr><td>Pluggable backend</td><td style="color:var(--at-green)">Hydra render delegate</td><td style="color:var(--at-blue)">react-dom / -native</td><td style="color:var(--at-amber)">software rasterizer</td></tr>
  <tr><td>Pixels</td><td style="color:var(--at-green)">RTX ray trace + MDL</td><td style="color:var(--at-blue)">browser paint/composite</td><td style="color:var(--at-amber)">column draw &rarr; framebuffer</td></tr>
  <tr><td>&ldquo;Don&rsquo;t do this&rdquo;</td><td style="color:var(--at-green)">author per-frame to USD</td><td style="color:var(--at-blue)"><code>setState</code> every frame</td><td style="color:var(--at-amber)">rebuild BSP per frame</td></tr>
</table>

<p>Three more quick lenses, if they help:</p>

<ul class="clean">
  <li><strong>Compiler:</strong> USD = source code, composition = compile+link, Fabric = optimized bytecode in memory, RTX = the CPU executing it.</li>
  <li><strong>Database:</strong> USD layers = normalized source tables; the composed stage = a <code>VIEW</code>; <strong>Fabric = a materialized, denormalized view</strong> built for read speed.</li>
  <li><strong>ECS / game engines:</strong> USD&rsquo;s prim hierarchy is object-oriented; <strong>Fabric is a structure-of-arrays</strong> (ECS-style) layout &mdash; contiguous, cache-friendly, GPU-uploadable. That data-layout flip is the whole speedup.</li>
</ul>

<!-- ───────────────────────── 6. WHY ───────────────────────── -->
<h2 id="why"><span class="step">6</span>Why this mental model is useful</h2>

<div class="callout good">
  <span class="title">It explains the &ldquo;transient backdrop&rdquo; rule for streamed geospatial data</span>
  <p>Cesium for Omniverse writes streamed tiles <em>directly into Fabric</em> (the runtime mirror), deliberately skipping the USD authoring layer (the source of truth). In React terms: it&rsquo;s direct-DOM manipulation in a ref, not <code>setState</code>. So the photoreal planet renders, but it&rsquo;s <strong>never serialized into the saved <code>.usd</code></strong>. Your authored geometry is the declarative USD; the streamed geo backdrop is a Fabric-only runtime layer that vanishes when you save and reload from disk.</p>
</div>

<p>And it tells you <em>where bugs live</em>. A placement or authoring problem in your saved model is a <strong>USD-layer</strong> problem &mdash; composition, the georeference prim, the up-axis. A jitter, flicker, or per-frame perf problem in the streamed backdrop is a <strong>Fabric/Hydra-layer</strong> problem &mdash; the runtime path. Different layer, different debugging. Knowing which layer a symptom belongs to is most of the fix.</p>

<!-- ───────────────────────── CLOSING ───────────────────────── -->
<h2><span class="step">&#8718;</span>TL;DR</h2>

<ul class="clean">
  <li>One pattern: <strong>declarative source &rarr; flatten &rarr; fast runtime mirror &rarr; pluggable paint backend &rarr; pixels</strong>. Never recompute the source per frame.</li>
  <li>Omniverse: <strong>USD &rarr; (compose) &rarr; Fabric &rarr; Hydra render delegate &rarr; RTX</strong>.</li>
  <li>React: <strong>JSX &rarr; Virtual DOM &rarr; (reconcile) &rarr; real DOM &rarr; react-dom &rarr; paint</strong>. The render-delegate &asymp; React-renderer mapping is exact.</li>
  <li>Doom: <strong>WAD &rarr; BSP precompute &rarr; per-frame walk &rarr; rasterizer</strong>. Precompute so the hot loop is cheap.</li>
  <li>Payoff: streamed geo backdrops live in <strong>Fabric only</strong> (React&rsquo;s &ldquo;ref, not setState&rdquo;) &rarr; never saved into your USD. Placement bugs = USD layer; backdrop perf bugs = Fabric/Hydra layer.</li>
</ul>

<div class="callout good">
  <span class="title">If you remember one thing</span>
  <p>It&rsquo;s the same shape you already know: a slow, friendly <strong>source of truth</strong>, a fast <strong>flattened mirror</strong> you never hand-write, and a <strong>swappable backend</strong> that turns the mirror into pixels. USD/Fabric/Hydra, JSX/DOM/react-dom, WAD/BSP/rasterizer &mdash; three names for one good idea.</p>
</div>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Geospatial 3D series · Part 5 of 5 · June 2026</p>
  <p style="margin-top:8px">Series complete · <a href="/posts/cesium-on-omniverse/">Start over &rarr; How Cesium Puts a 3D Scene on Planet Earth</a></p>
</div>
`;

export const script = ``;
