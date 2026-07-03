export const styles = `
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
  .artifact-scope .callout.warn{background:var(--at-amber-soft);border-color:var(--at-line);border-left-color:var(--at-amber)}
  .artifact-scope .callout.good{background:var(--at-green-soft);border-color:var(--at-line);border-left-color:var(--at-green)}
  .artifact-scope .callout.bad{background:var(--at-accent-soft);border-color:var(--at-line);border-left-color:var(--at-accent)}
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
  .artifact-scope .box .icon.red{background:var(--at-accent)}
  .artifact-scope .box .icon.amber{background:var(--at-amber)}
  .artifact-scope .box .icon.purple{background:var(--at-violet)}
  .artifact-scope .tag{display:inline-block;font-family:var(--at-font-mono);font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;
    letter-spacing:.5px}
  .artifact-scope .tag.good{background:var(--at-green-soft);color:var(--at-green);border:1px solid var(--at-line)}
  .artifact-scope .tag.bad{background:var(--at-accent-soft);color:var(--at-accent);border:1px solid var(--at-line)}
  .artifact-scope .tag.warn{background:var(--at-amber-soft);color:var(--at-amber);border:1px solid var(--at-line)}
  .artifact-scope .tag.muted{background:var(--at-inset);color:var(--at-faint);border:1px solid var(--at-line)}
  .artifact-scope table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}
  .artifact-scope th,.artifact-scope td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--at-line);vertical-align:top}
  .artifact-scope th{background:var(--at-inset);color:var(--at-text);font-family:var(--at-font-mono);font-weight:700;font-size:12px;letter-spacing:.4px;
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
  .artifact-scope .kbd{background:var(--at-inset);border:1px solid var(--at-line);border-radius:5px;padding:1px 6px;
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
  .artifact-scope .ascii .c-bad{color:var(--at-accent);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--at-line);color:var(--at-muted);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--at-muted);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--at-accent);margin-bottom:10px}
`;

export const html = `
<article>

<header class="post-head">
  <div class="eyebrow">Geospatial 3D · Part 2 of 5</div>
  <h1>3D Tiles: How to Stream a Planet That Won&rsquo;t Fit in RAM</h1>
  <p class="lead">&ldquo;Photorealistic Earth&rdquo; is petabytes of data. Your GPU has a few gigabytes. <strong>3D Tiles</strong> is the open standard that bridges that gap &mdash; and it&rsquo;s the same idea that makes web maps fast. Let&rsquo;s derive it.</p>
  <p class="byline">Geospatial 3D series · Part 2 · ~8 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#problem">The problem, stated as numbers</a></li>
    <li><a href="#tree">A tree of bubbles, each labeled with its &ldquo;error&rdquo;</a></li>
    <li><a href="#disk">What&rsquo;s on disk: tileset.json + payloads</a></li>
    <li><a href="#omniverse">How Cesium for Omniverse runs this loop</a></li>
    <li><a href="#clipping">Clipping: carving a hole for your own content</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. PROBLEM ───────────────────────── -->
<h2 id="problem"><span class="step">1</span>The problem, stated as numbers</h2>

<p>A single photorealistic city is tens of gigabytes. The whole planet is petabytes. You cannot download it, can&rsquo;t fit it in VRAM, can&rsquo;t draw it. But notice two facts about how people actually look at 3D:</p>

<ul>
  <li><strong>You only see a fraction at once.</strong> The camera frustum covers a tiny slice of the world.</li>
  <li><strong>Distant things need less detail.</strong> A building 10&nbsp;km away is a few pixels &mdash; drawing its door hinges is wasted work.</li>
</ul>

<p>So the requirement becomes: <em>load only what&rsquo;s visible, and only at the detail the screen can actually show.</em> That sentence <strong>is</strong> 3D Tiles.</p>

<div class="callout">
  <span class="title">The reframe</span>
  <p>Don&rsquo;t ask &ldquo;how do I fit the planet in memory?&rdquo; Ask &ldquo;what&rsquo;s the least data I can fetch to make <em>this frame</em> look right?&rdquo; Streaming is a per-frame budget problem, not a storage problem.</p>
</div>

<!-- ───────────────────────── 2. TREE ───────────────────────── -->
<h2 id="tree"><span class="step">2</span>A tree of bubbles, each labeled with its &ldquo;error&rdquo;</h2>

<p>3D Tiles organizes the world as a <strong>bounding-volume hierarchy (BVH)</strong> &mdash; a tree where each node is a region of space (a &ldquo;bubble&rdquo;) containing a chunk of geometry, and the children subdivide that region into finer pieces.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 320" role="img" aria-label="Tileset tree from coarse root to detailed leaves">
    <!-- root -->
    <rect x="320" y="20" width="120" height="44" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
    <text x="380" y="40" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="12" text-anchor="middle" font-weight="700">ROOT</text>
    <text x="380" y="56" fill="var(--at-faint)" font-size="10" text-anchor="middle">whole planet, blurry</text>
    <!-- level 2 -->
    <rect x="140" y="120" width="120" height="44" rx="8" fill="var(--at-surface)" stroke="var(--at-violet)" stroke-width="1.5"/>
    <text x="200" y="146" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="11" text-anchor="middle">continent</text>
    <rect x="320" y="120" width="120" height="44" rx="8" fill="var(--at-surface)" stroke="var(--at-violet)" stroke-width="1.5"/>
    <text x="380" y="146" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="11" text-anchor="middle">continent</text>
    <rect x="500" y="120" width="120" height="44" rx="8" fill="var(--at-surface)" stroke="var(--at-violet)" stroke-width="1.5"/>
    <text x="560" y="146" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="11" text-anchor="middle">continent</text>
    <!-- leaves -->
    <rect x="60" y="230" width="100" height="40" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="110" y="254" fill="var(--at-blue)" font-size="10" text-anchor="middle">city block</text>
    <rect x="180" y="230" width="100" height="40" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="230" y="254" fill="var(--at-blue)" font-size="10" text-anchor="middle">city block</text>
    <rect x="330" y="230" width="100" height="40" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="380" y="254" fill="var(--at-blue)" font-size="10" text-anchor="middle">building</text>
    <rect x="500" y="230" width="100" height="40" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="550" y="254" fill="var(--at-blue)" font-size="10" text-anchor="middle">building</text>
    <!-- lines -->
    <g stroke="var(--at-violet)" stroke-width="1.5" fill="none">
      <path d="M380 64 L200 120"/><path d="M380 64 L380 120"/><path d="M380 64 L560 120"/>
      <path d="M200 164 L110 230"/><path d="M200 164 L230 230"/>
      <path d="M380 164 L380 230"/><path d="M560 164 L550 230"/>
    </g>
    <text x="650" y="44" fill="var(--at-amber)" font-size="12" font-weight="700">high geometric</text>
    <text x="650" y="60" fill="var(--at-amber)" font-size="12" font-weight="700">error (coarse)</text>
    <text x="650" y="250" fill="var(--at-green)" font-size="12" font-weight="700">error &rarr; 0</text>
    <text x="650" y="266" fill="var(--at-green)" font-size="12" font-weight="700">(full detail)</text>
  </svg>
  <p class="figure-caption">Each node carries a number called <strong>geometric error</strong> &mdash; roughly &ldquo;how wrong (in meters) does the world look if I stop here and don&rsquo;t load my children?&rdquo; Root = very wrong. Leaves &asymp; 0.</p>
</div>

<h3>The decision the engine makes every frame: screen-space error</h3>

<p>The engine walks the tree from the root. At each node it projects that node&rsquo;s geometric error onto the screen: <em>&ldquo;if I render this tile instead of its finer children, how many <strong>pixels</strong> of error would the user see?&rdquo;</em></p>

<pre>screenSpaceError = geometricError &times; (screenHeight / distanceToCamera) &times; k

if  screenSpaceError &gt; maxAllowedError (e.g. 16 px):
        &rarr; tile is too coarse for how close we are &rarr; load &amp; descend to children
else:
        &rarr; tile is good enough &rarr; render it, stop here</pre>

<p>That&rsquo;s the entire algorithm. A tile near the camera fails the test (its error blows up to many pixels) so the engine descends to detailed children. The same tile far away passes (its error shrinks to sub-pixel) so the engine stops early and saves the download. <strong>Detail follows the camera, automatically.</strong></p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 240" role="img" aria-label="Camera pulls detail toward itself">
    <!-- camera -->
    <path d="M40 120 l36 -22 l0 44 z" fill="var(--at-amber)"/>
    <text x="30" y="160" fill="var(--at-amber)" font-size="12" font-weight="700">camera</text>
    <!-- frustum -->
    <path d="M76 110 L740 30 L740 210 L76 130 Z" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-dasharray="4"/>
    <!-- near tiles fine -->
    <g fill="var(--at-blue)">
      <rect x="150" y="105" width="14" height="14"/><rect x="166" y="105" width="14" height="14"/>
      <rect x="150" y="121" width="14" height="14"/><rect x="166" y="121" width="14" height="14"/>
    </g>
    <text x="138" y="160" fill="var(--at-blue)" font-size="11" font-weight="700">near = fine tiles</text>
    <!-- mid -->
    <rect x="400" y="100" width="34" height="34" fill="var(--at-violet)"/>
    <text x="392" y="158" fill="var(--at-violet)" font-size="11" font-weight="700">mid = coarser</text>
    <!-- far -->
    <rect x="650" y="92" width="56" height="56" fill="var(--at-violet)"/>
    <text x="636" y="170" fill="var(--at-faint)" font-size="11">far = one blob</text>
  </svg>
  <p class="figure-caption">Same world, three detail levels in one frame &mdash; chosen so every tile contributes about the same pixel error. This is &ldquo;level of detail&rdquo; (LOD) done continuously.</p>
</div>

<!-- ───────────────────────── 3. DISK ───────────────────────── -->
<h2 id="disk"><span class="step">3</span>What&rsquo;s actually on disk: <code>tileset.json</code> + payloads</h2>

<p>A 3D Tiles dataset is a <strong>root <code>tileset.json</code></strong> describing the tree, plus the geometry payloads it points to. The engine fetches the root first (tiny), then lazily fetches only the tiles the screen-space-error test asks for.</p>

<pre>tileset.json
{
  "geometricError": 500000,           // root error, meters
  "root": {
    "boundingVolume": { "region": [...] },   // the "bubble"
    "geometricError": 500000,
    "refine": "REPLACE",              // children replace parent (vs ADD)
    "content": { "uri": "0/0/0.glb" },// the actual mesh (glTF/GLB)
    "children": [ { ...subtile... }, { ...subtile... } ]
  }
}</pre>

<table>
  <tr><th>Piece</th><th>What it is</th></tr>
  <tr><td><code>boundingVolume</code></td><td>The region (box, sphere, or geographic region) used for frustum-culling and distance.</td></tr>
  <tr><td><code>geometricError</code></td><td>The meters-of-error number that feeds the screen-space test.</td></tr>
  <tr><td><code>content.uri</code></td><td>Pointer to the payload &mdash; usually <strong>glTF/GLB</strong> meshes with PBR materials.</td></tr>
  <tr><td><code>refine</code></td><td><code>REPLACE</code>: child swaps out parent. <code>ADD</code>: child adds detail on top (used by point clouds).</td></tr>
  <tr><td><code>children</code></td><td>Subtiles, or an <em>external</em> <code>tileset.json</code> &mdash; trees nest, which is how a planet-scale tree stays browsable.</td></tr>
</table>

<!-- ───────────────────────── 4. OMNIVERSE ───────────────────────── -->
<h2 id="omniverse"><span class="step">4</span>How Cesium for Omniverse runs this loop</h2>

<p>Cesium Native does the streaming loop; Omniverse does the drawing:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 780 250" role="img" aria-label="Streaming loop in Omniverse">
    <rect x="20" y="40" width="170" height="70" rx="10" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
    <text x="105" y="70" fill="var(--at-violet)" font-size="12" text-anchor="middle" font-weight="700">Cesium Native</text>
    <text x="105" y="90" fill="var(--at-faint)" font-size="10" text-anchor="middle">pick tiles, fetch,</text>
    <text x="105" y="103" fill="var(--at-faint)" font-size="10" text-anchor="middle">decode glTF, cache</text>

    <rect x="300" y="40" width="170" height="70" rx="10" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="385" y="70" fill="var(--at-blue)" font-size="12" text-anchor="middle" font-weight="700">Fabric</text>
    <text x="385" y="90" fill="var(--at-faint)" font-size="10" text-anchor="middle">fast scene buffer</text>
    <text x="385" y="103" fill="var(--at-faint)" font-size="10" text-anchor="middle">(not full USD)</text>

    <rect x="580" y="40" width="170" height="70" rx="10" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"/>
    <text x="665" y="70" fill="var(--at-green)" font-size="12" text-anchor="middle" font-weight="700">RTX Renderer</text>
    <text x="665" y="90" fill="var(--at-faint)" font-size="10" text-anchor="middle">MDL materials,</text>
    <text x="665" y="103" fill="var(--at-faint)" font-size="10" text-anchor="middle">pixels on screen</text>

    <defs><marker id="tilearrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-blue)"/></marker></defs>
    <path d="M190 75 H300" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#tilearrow)"/>
    <path d="M470 75 H580" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#tilearrow)"/>

    <path d="M665 110 C665 180 105 180 105 110" stroke="var(--at-amber)" stroke-width="2" fill="none" stroke-dasharray="5" marker-end="url(#tilearrow)"/>
    <text x="300" y="200" fill="var(--at-amber)" font-size="12" font-weight="700">camera moved &rarr; recompute screen-space error &rarr; fetch new tiles</text>
  </svg>
  <p class="figure-caption">Cesium Native streams &amp; decodes; tiles are written into <strong>Fabric</strong> (Omniverse&rsquo;s high-speed runtime scene buffer) rather than slow USD authoring; glTF PBR is translated to <strong>MDL</strong> for RTX. The loop re-runs every time the camera moves.</p>
</div>

<div class="callout warn">
  <span class="title">Why Fabric, not plain USD?</span>
  <p>Streamed tiles change <em>constantly</em> as the camera moves &mdash; thousands of load/unload events per second. Authoring each into the USD stage would be far too slow and would pollute your saved scene. Fabric is a post-composed, GPU-friendly buffer for exactly this churn. Practical upshot: <strong>streamed Earth geometry is transient &mdash; it lives in Fabric at runtime and is not authored into your saved <code>.usd</code> file.</strong> Reload the scene and the tiles are re-streamed; they were never part of the persisted stage.</p>
</div>

<!-- ───────────────────────── 5. CLIPPING ───────────────────────── -->
<h2 id="clipping"><span class="step">5</span>Clipping: carving a hole for your own content</h2>

<p>When you stream the real planet around your own authored model, the photoreal tiles will <em>overlap and bury</em> it. The fix is <strong>tileset clipping</strong>: you give Cesium a polygon, and it removes tile geometry inside (or outside) that polygon &mdash; punching a clean hole where your content sits.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 240" role="img" aria-label="Clipping polygon carves a hole in streamed tiles">
    <!-- streamed terrain grid -->
    <rect x="40" y="30" width="680" height="180" rx="10" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
    <g stroke="var(--at-violet)" stroke-width="0.8" opacity="0.7">
      <line x1="40" y1="75" x2="720" y2="75"/><line x1="40" y1="120" x2="720" y2="120"/><line x1="40" y1="165" x2="720" y2="165"/>
      <line x1="160" y1="30" x2="160" y2="210"/><line x1="280" y1="30" x2="280" y2="210"/><line x1="400" y1="30" x2="400" y2="210"/>
      <line x1="520" y1="30" x2="520" y2="210"/><line x1="640" y1="30" x2="640" y2="210"/>
    </g>
    <text x="70" y="52" fill="var(--at-violet)" font-size="11" font-weight="700">streamed photoreal tiles</text>
    <!-- clip polygon (hole) -->
    <polygon points="330,90 470,80 490,160 320,170" fill="var(--at-surface)" stroke="var(--at-blue)" stroke-width="2" stroke-dasharray="5"/>
    <text x="405" y="128" fill="var(--at-blue)" font-size="11" text-anchor="middle" font-weight="700">boundary</text>
    <text x="405" y="144" fill="var(--at-blue)" font-size="11" text-anchor="middle" font-weight="700">polygon</text>
    <!-- your model inside -->
    <rect x="370" y="105" width="36" height="28" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="560" y="200" fill="var(--at-faint)" font-size="11">tiles inside the polygon are clipped away</text>
  </svg>
  <p class="figure-caption">A boundary polygon defines the footprint to clear. Cesium removes streamed tiles inside it, leaving a clean stage for your own authored geometry.</p>
</div>

<div class="callout good">
  <span class="title">The polygon is the contract</span>
  <p>Clipping is purely geometric: Cesium takes a polygon and a side (inside or outside) and culls tiles accordingly. To make this work for a specific site, you supply a <strong>boundary polygon</strong> &mdash; for example, derived from your model&rsquo;s footprint &mdash; and feed it to Cesium as the clipping shape. The quality of the clip is entirely the quality of that polygon: a tight, correct boundary gives a clean hole; a missing or sloppy one leaves photoreal tiles sitting on top of your content.</p>
</div>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2><span class="step">&#8721;</span>TL;DR</h2>

<ul class="clean">
  <li>3D Tiles answers one question per frame: <strong>&ldquo;least data to make this frame correct?&rdquo;</strong></li>
  <li>The world is a <strong>tree of bounding volumes</strong>, each tagged with <strong>geometric error</strong> (meters of wrongness if you stop there).</li>
  <li><strong>Screen-space error</strong> converts that to pixels and decides, per tile, whether to descend. Detail follows the camera automatically.</li>
  <li>On disk: <code>tileset.json</code> (the tree) + <strong>glTF/GLB</strong> payloads, fetched lazily, nesting via external tilesets.</li>
  <li>In Omniverse: Cesium&nbsp;Native streams &rarr; <strong>Fabric</strong> buffer &rarr; RTX. Streamed Earth is <em>transient</em>, not saved into your USD.</li>
  <li><strong>Clipping</strong> uses a boundary polygon to carve out space for your own content.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Geospatial 3D series · Part 2 of 5 · June 2026</p>
  <p style="margin-top:8px"><a href="/posts/google-photorealistic-3d-tiles">Next &rarr; Google Photorealistic 3D Tiles, Explained</a></p>
</div>
`;

export const script = ``;
