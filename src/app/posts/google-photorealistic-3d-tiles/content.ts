export const styles = `
  .artifact-scope{
    --bg:#fbfbfd; --surface:#ffffff; --ink:#15171a; --ink-soft:#3a4252;
    --muted:#6b7785; --line:#e3e6eb; --line-soft:#eef0f3;
    --accent:#2563eb; --accent-soft:#eff6ff;
    --good:#16a34a; --good-soft:#f0fdf4;
    --bad:#dc2626; --bad-soft:#fef2f2;
    --warn:#d97706; --warn-soft:#fffbeb;
    --purple:#7c3aed; --purple-soft:#f5f3ff;
    background:var(--bg);color:var(--ink);
    font:17px/1.7 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .artifact-scope *{box-sizing:border-box}

  /* ====== Standard topbar (matches site) ====== */
  .artifact-scope .topbar{
    border-bottom:1px solid var(--line);padding:14px 0;
    background:rgba(251,251,253,0.92);backdrop-filter:blur(8px);
    position:sticky;top:0;z-index:10}
  .artifact-scope .topbar-inner{
    display:flex;justify-content:space-between;align-items:center;
    max-width:880px;margin:0 auto;padding:0 24px}
  .artifact-scope .logo{
    font-family:"SF Mono",Menlo,Consolas,monospace;font-weight:600;font-size:14px;
    letter-spacing:.05em;color:var(--accent)}
  .artifact-scope .logo a{color:inherit;text-decoration:none;border:none}
  .artifact-scope .logo a:hover{opacity:.7}
  .artifact-scope .meta-tag{
    background:var(--accent-soft);border:1px solid #c7dafe;border-radius:999px;
    padding:3px 12px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:11px;
    letter-spacing:.1em;text-transform:uppercase;color:var(--accent)}

  .artifact-scope article{max-width:880px;margin:0 auto;padding:56px 24px 96px}
  .artifact-scope header.post-head{border-bottom:1px solid var(--line);padding-bottom:32px;margin-bottom:8px}
  .artifact-scope .eyebrow{color:var(--accent);font-size:13px;letter-spacing:1.5px;text-transform:uppercase;
    font-weight:700;margin-bottom:14px}
  .artifact-scope h1{font-size:38px;line-height:1.2;letter-spacing:-.5px;margin:0 0 16px;font-weight:800}
  .artifact-scope .lead{font-size:20px;line-height:1.55;color:var(--ink-soft);margin:0;font-weight:400}
  .artifact-scope .byline{color:var(--muted);font-size:14px;margin-top:18px}
  .artifact-scope h2{font-size:26px;margin:64px 0 14px;font-weight:800;letter-spacing:-.3px;
    display:flex;align-items:center;gap:14px}
  .artifact-scope h2 .step{flex:0 0 36px;height:36px;background:var(--accent);color:#fff;border-radius:10px;
    display:grid;place-items:center;font-size:15px;font-weight:700}
  .artifact-scope h3{font-size:19px;margin:32px 0 8px;font-weight:700;color:var(--ink)}
  .artifact-scope p{margin:14px 0;color:var(--ink-soft)}
  .artifact-scope p strong, .artifact-scope li strong{color:var(--ink);font-weight:700}
  .artifact-scope code{background:#f1f3f5;color:#14213d;padding:2px 6px;border-radius:4px;
    font-size:.92em;font-family:"SF Mono",Menlo,Consolas,monospace}
  .artifact-scope pre{background:#0f172a;color:#e2e8f0;padding:18px 22px;border-radius:10px;overflow-x:auto;
    font-family:"SF Mono",Menlo,Consolas,monospace;font-size:13.5px;line-height:1.6;margin:18px 0}
  .artifact-scope .figure{background:var(--surface);border:1px solid var(--line);border-radius:14px;
    padding:28px;margin:24px 0}
  .artifact-scope .figure-caption{color:var(--muted);font-size:13.5px;text-align:center;margin-top:16px;
    font-style:italic}
  .artifact-scope .callout{padding:16px 20px;border-radius:8px;margin:22px 0;
    background:var(--accent-soft);border:1px solid #c7dafe;border-left:4px solid var(--accent)}
  .artifact-scope .callout.warn{background:var(--warn-soft);border-color:#fcd34d;border-left-color:var(--warn)}
  .artifact-scope .callout.good{background:var(--good-soft);border-color:#bbf7d0;border-left-color:var(--good)}
  .artifact-scope .callout.bad{background:var(--bad-soft);border-color:#fecaca;border-left-color:var(--bad)}
  .artifact-scope .callout p:first-child{margin-top:0}
  .artifact-scope .callout p:last-child{margin-bottom:0}
  .artifact-scope .callout .title{display:block;color:var(--ink);font-weight:700;margin-bottom:6px;font-size:15px}
  .artifact-scope .grid{display:grid;gap:14px;margin:18px 0}
  .artifact-scope .g2{grid-template-columns:1fr 1fr}
  .artifact-scope .g3{grid-template-columns:1fr 1fr 1fr}
  .artifact-scope .g4{grid-template-columns:1fr 1fr 1fr 1fr}
  @media(max-width:720px){.artifact-scope .g2,.artifact-scope .g3,.artifact-scope .g4{grid-template-columns:1fr}}
  .artifact-scope .box{background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:18px}
  .artifact-scope .box h4{margin:0 0 8px;font-size:15px;color:var(--ink);font-weight:700}
  .artifact-scope .box p{margin:0;font-size:14.5px;line-height:1.55}
  .artifact-scope .box .icon{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;
    color:#fff;font-weight:800;font-size:14px;margin-bottom:10px}
  .artifact-scope .box .icon.blue{background:var(--accent)}
  .artifact-scope .box .icon.green{background:var(--good)}
  .artifact-scope .box .icon.red{background:var(--bad)}
  .artifact-scope .box .icon.amber{background:var(--warn)}
  .artifact-scope .box .icon.purple{background:var(--purple)}
  .artifact-scope .tag{display:inline-block;font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;
    letter-spacing:.5px}
  .artifact-scope .tag.good{background:var(--good-soft);color:var(--good);border:1px solid #bbf7d0}
  .artifact-scope .tag.bad{background:var(--bad-soft);color:var(--bad);border:1px solid #fecaca}
  .artifact-scope .tag.warn{background:var(--warn-soft);color:var(--warn);border:1px solid #fcd34d}
  .artifact-scope .tag.muted{background:#f1f3f5;color:var(--muted);border:1px solid var(--line)}
  .artifact-scope table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}
  .artifact-scope th,.artifact-scope td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top}
  .artifact-scope th{background:#f9fafb;color:var(--ink);font-weight:700;font-size:12px;letter-spacing:.4px;
    text-transform:uppercase}
  .artifact-scope td:first-child{font-weight:600;color:var(--ink)}
  .artifact-scope svg.diagram{width:100%;height:auto;display:block}
  .artifact-scope .toc{background:var(--surface);border:1px solid var(--line);border-radius:10px;
    padding:22px 26px;margin:32px 0}
  .artifact-scope .toc h3{margin:0 0 12px;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;
    color:var(--muted);font-weight:700}
  .artifact-scope .toc ol{margin:0;padding-left:22px;color:var(--ink-soft);line-height:1.9}
  .artifact-scope .toc a{color:var(--ink);text-decoration:none;border-bottom:1px solid transparent}
  .artifact-scope .toc a:hover{color:var(--accent);border-bottom-color:var(--accent)}
  .artifact-scope .mono{font-family:"SF Mono",Menlo,Consolas,monospace}
  .artifact-scope .kbd{background:#f9fafb;border:1px solid var(--line);border-radius:5px;padding:1px 6px;
    font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.85em;color:var(--ink)}
  .artifact-scope ul.clean{list-style:none;padding:0;margin:14px 0}
  .artifact-scope ul.clean li{padding:10px 0;border-bottom:1px solid var(--line-soft);color:var(--ink-soft)}
  .artifact-scope ul.clean li:last-child{border-bottom:none}
  .artifact-scope ul.clean li strong{color:var(--ink)}
  .artifact-scope .kicker{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);
    font-weight:700;margin-bottom:6px}
  .artifact-scope .ascii{background:#f9fafb;border:1px solid var(--line);border-radius:10px;
    font-family:"SF Mono",Menlo,Consolas,monospace;font-size:13px;line-height:1.55;
    color:var(--ink);padding:18px 22px;white-space:pre;overflow-x:auto}
  .artifact-scope .ascii .c-acc{color:var(--accent);font-weight:700}
  .artifact-scope .ascii .c-muted{color:var(--muted)}
  .artifact-scope .ascii .c-good{color:var(--good);font-weight:700}
  .artifact-scope .ascii .c-bad{color:var(--bad);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--line);color:var(--muted);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--muted);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--accent);margin-bottom:10px}
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">DEEP DIVE — GEOSPATIAL 3D</span>
  </div>
</div>

<article>

<header class="post-head">
  <div class="eyebrow">Geospatial 3D · Part 3 of 5</div>
  <h1>Google Photorealistic 3D Tiles, Explained</h1>
  <p class="lead">Part 2 explained the <em>format</em>. This is the most important <em>dataset</em> in that format: Google&rsquo;s photoreal mesh of the planet, served as a single URL. Point a renderer at it and your model sits inside the real world.</p>
  <p class="byline">Geospatial 3D series · Part 3 · ~7 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#what">What it actually is</a></li>
    <li><a href="#url">The entire integration is one URL</a></li>
    <li><a href="#stage">Where it sits in your stage</a></li>
    <li><a href="#catches">The catches you must plan for</a></li>
    <li><a href="#choice">Google vs. Cesium-native datasets</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. WHAT IT IS ───────────────────────── -->
<h2 id="what"><span class="step">1</span>What it actually is</h2>

<p>Google flew planes and drove cars over the world (the same captures behind Google Earth) and turned the photos into a <strong>textured 3D mesh</strong> &mdash; buildings, terrain, trees, bridges &mdash; covering <strong>2,000+ cities</strong>. They then published that mesh in the open <strong>OGC 3D Tiles</strong> format (glTF/GLB payloads &mdash; exactly the tree-of-bubbles from Part 2), behind the <strong>Google Map Tiles API</strong>.</p>

<p>Crucially: it is <strong>not</strong> a Google-only viewer. Because it&rsquo;s standard 3D Tiles, <em>any</em> compliant renderer can consume it &mdash; CesiumJS, Cesium for Unreal, and <strong>Cesium for Omniverse</strong>. That&rsquo;s the whole reason it matters here.</p>

<div class="callout">
  <span class="title">First principle</span>
  <p>&ldquo;Photorealistic 3D Tiles&rdquo; is just a normal 3D Tiles dataset (Part 2) where the payloads happen to be photogrammetry of the real Earth, and the root lives on Google&rsquo;s servers instead of yours. Everything you learned about geometric error, screen-space error, and lazy fetching applies unchanged.</p>
</div>

<!-- ───────────────────────── 2. ONE URL ───────────────────────── -->
<h2 id="url"><span class="step">2</span>The entire integration is one URL</h2>

<p>You don&rsquo;t download anything. You point a renderer at Google&rsquo;s <strong>root tileset</strong>, and the streaming loop from Part 2 takes over:</p>

<pre>https://tile.googleapis.com/v1/3dtiles/root.json?key=YOUR_API_KEY</pre>

<p>That <code>root.json</code> is the top of the tree. The renderer reads it, computes screen-space error for the current camera, and lazily fetches GLB tiles for whatever is in view at whatever detail the screen needs. One root request is good for roughly 3 hours of tile fetching before you re-request.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 780 250" role="img" aria-label="Google root URL feeding Cesium in Omniverse">
    <defs><marker id="g3dt-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2563eb"/></marker></defs>

    <rect x="20" y="90" width="180" height="70" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
    <text x="110" y="118" fill="#15171a" font-size="12" text-anchor="middle" font-weight="700">Google Map Tiles API</text>
    <text x="110" y="138" fill="#6b7785" font-size="10" text-anchor="middle">root.json + GLB tiles</text>
    <text x="110" y="151" fill="#6b7785" font-size="10" text-anchor="middle">(planet-scale mesh)</text>

    <rect x="300" y="90" width="180" height="70" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="390" y="118" fill="#15171a" font-size="12" text-anchor="middle" font-weight="700">CesiumTileset prim</text>
    <text x="390" y="138" fill="#6b7785" font-size="10" text-anchor="middle">Cesium Native streams</text>
    <text x="390" y="151" fill="#6b7785" font-size="10" text-anchor="middle">via the Part 2 loop</text>

    <rect x="580" y="90" width="180" height="70" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="670" y="118" fill="#15171a" font-size="12" text-anchor="middle" font-weight="700">Omniverse RTX</text>
    <text x="670" y="138" fill="#6b7785" font-size="10" text-anchor="middle">your model, inside</text>
    <text x="670" y="151" fill="#6b7785" font-size="10" text-anchor="middle">the real world</text>

    <path d="M200 125 H300" stroke="#2563eb" stroke-width="2" marker-end="url(#g3dt-arrow)"/>
    <path d="M480 125 H580" stroke="#2563eb" stroke-width="2" marker-end="url(#g3dt-arrow)"/>
    <text x="206" y="80" fill="#6b7785" font-family="SF Mono,monospace" font-size="10">one URL + API key</text>
    <text x="20" y="210" fill="#3a4252" font-size="12">In Omniverse you add a CesiumTileset prim, paste the Google connection, toggle it on. Done.</text>
  </svg>
  <p class="figure-caption">Two common wiring paths: (a) direct Google API key on the tileset, or (b) via a <strong>Cesium ion</strong> &ldquo;Google Photorealistic 3D Tiles&rdquo; connection, which proxies the key and bundles attribution.</p>
</div>

<!-- ───────────────────────── 3. STAGE ───────────────────────── -->
<h2 id="stage"><span class="step">3</span>Where it sits in your stage</h2>

<p>It&rsquo;s just another layer-toggleable <code>CesiumTileset</code> &mdash; and the georeference from Part 1 is what makes it line up with your authored model:</p>

<div class="figure">
  <div class="ascii">/World
  ├── <span class="c-acc">CesiumGeoreference</span>   <span class="c-muted"># lat/lon/height anchor for /World</span>
  ├── <span class="c-acc">CesiumTileset "GooglePhotorealistic"</span>   <span class="c-muted"># ← this post</span>
  └── <span class="c-acc">YourModel</span>                <span class="c-muted"># your own authored geometry</span></div>
  <p class="figure-caption">A generic stage: a georeference prim, a Google tileset prim, and your own model under the same <code>/World</code>.</p>
</div>

<p>Because both the Google tiles and your model are positioned through the <strong>same georeference</strong>, your geometry lands in the right street. Flip the tileset&rsquo;s visibility and the real world appears or disappears around your model &mdash; a separate layer the end user can enable on demand.</p>

<!-- ───────────────────────── 4. CATCHES ───────────────────────── -->
<h2 id="catches"><span class="step">4</span>The catches you must plan for</h2>

<table>
  <tr><th>Catch</th><th>What it means in practice</th></tr>
  <tr><td>API key + billing</td><td>Google Map Tiles API is a paid Google Cloud service, metered by usage. Needs a key (or a Cesium ion connection that holds it). Budget and key management is a real task, not a checkbox.</td></tr>
  <tr><td>Attribution is mandatory</td><td>Each tile&rsquo;s glTF carries an <code>asset.copyright</code> string. You are <strong>required</strong> to aggregate, de-dupe, and display these credits <em>plus the Google logo</em>, like Google Earth does. The Cesium extension surfaces these &mdash; your UI overlay must show them or you&rsquo;re out of compliance.</td></tr>
  <tr><td>Coverage is uneven</td><td>2,000+ cities have full photoreal mesh; elsewhere you get coarse textured &ldquo;elevation-like&rdquo; terrain. Confirm your locations&rsquo; cities are covered before promising photoreal backdrops.</td></tr>
  <tr><td>Overlap with your model</td><td>Google&rsquo;s mesh <em>includes</em> a photogrammetry blob of the real building your model represents &mdash; it will clash with your authored geometry. Clip it out with a site boundary (covered in Part 2).</td></tr>
  <tr><td>It&rsquo;s transient</td><td>Streamed tiles live in <strong>Fabric</strong> at runtime, not in your <code>.usd</code> (Part 2). The viewer must have network and a key at runtime; nothing is baked into the saved file.</td></tr>
</table>

<!-- ───────────────────────── 5. CHOICE ───────────────────────── -->
<h2 id="choice"><span class="step">5</span>Google vs. Cesium-native datasets</h2>

<p>Google Photorealistic 3D Tiles and Cesium ion&rsquo;s native datasets are alternatives at the same slot. They sit in the same place in your stage; you pick one as primary, or layer both and let the user choose.</p>

<div class="grid g2">
  <div class="box">
    <h4>Cesium World Terrain + OSM Buildings</h4>
    <p>Via Cesium ion. Global coverage with simple, boxy buildings. No per-tile billing, lighter attribution duties. Consistent everywhere on Earth, but not photoreal.</p>
  </div>
  <div class="box">
    <h4>Google Photorealistic 3D Tiles</h4>
    <p>True textured reality &mdash; real buildings, trees, terrain &mdash; but only in covered cities, with usage billing and mandatory attribution + Google logo.</p>
  </div>
</div>

<div class="callout warn">
  <span class="title">Decision worth surfacing early</span>
  <p>Choosing Google vs. Cesium-native datasets is a <strong>cost / coverage / compliance</strong> trade-off, not just a visual one. Attribution UI and billing both leak into the front end and operations, not just the viewer. Pin down which source is primary before building, because consistency argues for one source while photorealism may argue for the other.</p>
</div>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2 id="tldr"><span class="step">∎</span>TL;DR</h2>

<ul class="clean">
  <li>Google Photorealistic 3D Tiles = the real planet as a <strong>standard 3D Tiles dataset</strong> (Part 2 format), served from <code>tile.googleapis.com/v1/3dtiles/root.json</code>.</li>
  <li>Integration = <strong>one root URL + API key</strong> into a <code>CesiumTileset</code> prim; the Part 2 streaming loop does the rest.</li>
  <li>The <strong>georeference</strong> (Part 1) aligns it with your model; it&rsquo;s a toggleable layer; it&rsquo;s <strong>transient</strong> (Fabric, not saved into your USD).</li>
  <li>Non-negotiables: <strong>billing</strong>, <strong>mandatory attribution + Google logo</strong>, <strong>uneven coverage</strong>, and <strong>clipping</strong> your model out of Google&rsquo;s mesh.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Geospatial 3D series · Part 3 of 5 · June 2026</p>
  <p style="margin-top:8px"><a href="/posts/gltf-jpeg-of-3d">Next → glTF: The JPEG of 3D</a></p>
</div>
`;

export const script = ``;
