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
    <span class="meta-tag">CESIUM 101 — FIRST PRINCIPLES</span>
  </div>
</div>

<article>

<header class="post-head">
  <div class="eyebrow">Cesium 101 · First Principles</div>
  <h1>Translate, Georeference, GlobeAnchor, Binding</h1>
  <p class="lead">Cesium&rsquo;s geospatial concepts look like a wall of jargon. They aren&rsquo;t. They&rsquo;re four answers to four questions a scene graph has to ask once you put it on a real planet. Build them up one at a time and the whole stack collapses into something you can hold in your head &mdash; like a passport, a district, and a house number.</p>
  <p class="byline">A from-first-principles walk · ~10 min read</p>
</header>

<div class="toc">
  <h3>The four questions, in order</h3>
  <ol>
    <li><a href="#scenegraph">A scene graph only knows <em>relative</em></a></li>
    <li><a href="#why">Why &ldquo;relative&rdquo; breaks on Earth</a></li>
    <li><a href="#georef">Georeference: where is my origin on Earth?</a></li>
    <li><a href="#anchor">GlobeAnchor: absolute identity for one object</a></li>
    <li><a href="#formula">From anchor to a transform: the actual formula</a></li>
    <li><a href="#override">The subtlety: the prim already has a transform</a></li>
    <li><a href="#binding">GeoreferenceBinding: which Earth frame?</a></li>
    <li><a href="#stack">The whole stack on one page</a></li>
    <li><a href="#example">Worked example: a nationwide digital twin</a></li>
    <li><a href="#passport">The passport mental model</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. SCENE GRAPH ───────────────────────── -->
<h2 id="scenegraph"><span class="step">1</span>A scene graph only knows <em>relative</em></h2>

<p>Forget Earth for a moment. Forget Cesium. Start with the most boring possible fact about USD: <strong>it is a scene graph, and a scene graph stores nothing but relationships between a parent and its child.</strong></p>

<p>Here is a tiny stage:</p>

<pre>/World
  &#9492;&#9472;&#9472; Site
        &#9500;&#9472;&#9472; A
        &#9492;&#9472;&#9472; B
              &#9492;&#9472;&#9472; C</pre>

<p>Every prim carries a <strong>local transform</strong> &mdash; its position relative to its parent, nothing more:</p>

<pre>Site  = (100, 0, 200)
A     = ( 20, 0,   0)
B     = ( 50, 0,   0)
C     = ( 10, 0,   0)</pre>

<p>To find where <code>C</code> actually sits in the world, you don&rsquo;t look up an absolute coordinate &mdash; there isn&rsquo;t one stored anywhere. You <strong>multiply the chain</strong> from the root down:</p>

<pre>T_world(C) = T_local(Site) &middot; T_local(B) &middot; T_local(C)</pre>

<p>For pure translation that&rsquo;s just addition:</p>

<pre>World(C) = Site + B + C
         = (100,0,200) + (50,0,0) + (10,0,0)
         = (160, 0, 200)</pre>

<div class="callout">
  <span class="title">First principle</span>
  <p>USD knows how to walk <em>from a parent down to a child</em>. That is the entire mechanism. It does <strong>not</strong> know what a city is, where the equator is, or that GPS exists. It only knows: take the parent&rsquo;s frame, apply the child&rsquo;s local transform, repeat. Everything Cesium adds is a way of teaching this relative machine about an absolute planet.</p>
</div>

<!-- ───────────────────────── 2. WHY IT BREAKS ───────────────────────── -->
<h2 id="why"><span class="step">2</span>Why &ldquo;relative&rdquo; breaks on Earth</h2>

<p>The scene graph is happy as long as the numbers stay small. The trouble starts the moment those numbers have to describe a position <em>on a real planet</em>.</p>

<p>Earth&rsquo;s radius is about <strong>6,378,000&nbsp;m</strong>. An Earth-centered coordinate (ECEF &mdash; Earth-Centered, Earth-Fixed) for a point on the surface looks like <code>6378137.123</code>. A building is maybe <strong>20&nbsp;m</strong> across. A bolt on that building is <strong>1&nbsp;cm</strong>.</p>

<p>A GPU renders in <strong>32-bit floats</strong> &mdash; roughly 7 significant digits. Spend all 7 digits on <code>6378137</code> and there is <em>nothing left</em> for the <code>.123</code>. The fractional part &mdash; the part that says where the bolt actually is &mdash; rounds away. Geometry shimmers and swims as the camera moves. That visible shimmer has a name: <strong>jitter</strong>.</p>

<div class="callout warn">
  <span class="title">This is the whole reason Cesium exists</span>
  <p>You cannot hold &ldquo;6.3 million meters of Earth&rdquo; and &ldquo;1 centimeter of bolt&rdquo; in the same float at the same time. So a geospatial engine must <strong>split the number in two</strong>: a big <em>where on the planet</em> stored in high precision, and a small <em>local detail</em> the GPU can render safely. Every concept below is a consequence of that split. <em>(Part 1 of the Geospatial series goes deep on the precision math &mdash; <a href="/posts/cesium-on-omniverse">How Cesium Puts a 3D Scene on Planet Earth</a>.)</em></p>
</div>

<!-- ───────────────────────── 3. GEOREFERENCE ───────────────────────── -->
<h2 id="georef"><span class="step">3</span>Georeference: where is my origin on Earth?</h2>

<p>The first concept answers the simplest possible geospatial question: <strong>&ldquo;this scene&rsquo;s origin <code>(0,0,0)</code> &mdash; what point on Earth is that?&rdquo;</strong></p>

<p>A <strong>georeference</strong> is a single mapping. You declare:</p>

<pre>/World origin  &harr;  lat/lon of a real place on Earth</pre>

<p>Say you pin <code>/World</code>&rsquo;s origin to Ho&nbsp;Guom Lake in Hanoi. Now the scene graph&rsquo;s local math suddenly has a planetary meaning, <strong>for free</strong>:</p>

<pre>Site.local = (100, 0, 0)
        &darr;   resolved through the georeference
Site.earth = HoGuom + 100 m east</pre>

<p>You didn&rsquo;t place <code>Site</code> on Earth by hand. You placed the <em>origin</em>, and every child inherited a real-world position automatically through the same parent&rarr;child chain from Section&nbsp;1. That is the elegant part:</p>

<div class="callout good">
  <span class="title">A georeference does not place objects</span>
  <p>It places <strong>the scene origin</strong>, once. Everything below inherits. For a <strong>single static site</strong> &mdash; one campus, one building, one factory floor &mdash; this is genuinely all you need: <em>one georeference + ordinary USD transforms.</em> Roughly 90% of the &ldquo;geospatial complexity&rdquo; people fear never appears, because they never leave this case.</p>
</div>

<!-- ───────────────────────── 4. GLOBE ANCHOR ───────────────────────── -->
<h2 id="anchor"><span class="step">4</span>GlobeAnchor: absolute identity for one object</h2>

<p>So if a georeference is enough for a static site, what problem is left? <strong>Identity.</strong></p>

<p>There&rsquo;s a deep difference between two sentences that sound the same:</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">R</div>
    <h4>Relative (no anchor)</h4>
    <p><code>A.local = (20, 0, 0)</code><br/>&ldquo;A is <strong>20&nbsp;m from Site</strong>.&rdquo; A&rsquo;s meaning depends on Site. Move Site &rarr; A moves with it. A has no opinion about Earth.</p>
  </div>
  <div class="box">
    <div class="icon green">A</div>
    <h4>Absolute (anchored)</h4>
    <p><code>A.anchor = lat/lon</code><br/>&ldquo;A is <strong>at this GPS coordinate</strong>.&rdquo; A&rsquo;s meaning is the planet itself. Move Site &rarr; A stays exactly where it is on Earth.</p>
  </div>
</div>

<p>A <strong>GlobeAnchor</strong> is the second sentence. It pins one specific object to an absolute spot on the globe, independent of whatever parent it happens to hang under in the scene graph. The anchor is the object&rsquo;s <strong>source of truth</strong>: it says <em>this thing lives here on Earth, full stop.</em></p>

<div class="callout">
  <span class="title">Anchor = an absolute constraint</span>
  <p>Without an anchor, an object is defined by its <em>relationship</em> to a parent. With an anchor, it&rsquo;s defined by its <em>position on the planet</em>. You reach for one the moment an object has a real-world identity that must survive its parent moving, being re-parented, or the whole site shifting &mdash; a sensor at a fixed survey point, a vehicle reporting its own GPS, an asset that belongs to Earth rather than to your hierarchy.</p>
</div>

<!-- ───────────────────────── 5. FORMULA ───────────────────────── -->
<h2 id="formula"><span class="step">5</span>From anchor to a transform: the actual formula</h2>

<p>Here&rsquo;s the twist that confuses people. An anchored object is defined by GPS &mdash; but <strong>the GPU does not render GPS.</strong> It renders the only thing it has ever rendered: <code>parent &middot; local</code> transforms, small floats, exactly as in Section&nbsp;1. So an anchor can&rsquo;t be fed to the renderer directly. It&rsquo;s the <em>truth</em>; the renderer needs a <em>local matrix</em>. Cesium converts one into the other:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 200" role="img" aria-label="Anchor is truth, local matrix is what the GPU renders">
    <defs><marker id="ra" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2563eb"/></marker></defs>
    <rect x="20" y="50" width="240" height="100" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="40" y="84" fill="#16a34a" font-family="SF Mono,monospace" font-size="13" font-weight="700">GPS / anchor</text>
    <text x="40" y="110" fill="#3a4252" font-size="13">semantic truth</text>
    <text x="40" y="130" fill="#6b7785" font-size="12">&ldquo;where this thing IS&rdquo;</text>

    <rect x="500" y="50" width="240" height="100" rx="12" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="520" y="84" fill="#d97706" font-family="SF Mono,monospace" font-size="13" font-weight="700">local matrix</text>
    <text x="520" y="110" fill="#3a4252" font-size="13">render truth</text>
    <text x="520" y="130" fill="#6b7785" font-size="12">&ldquo;what the GPU eats&rdquo;</text>

    <path d="M260 100 H500" stroke="#2563eb" stroke-width="2" marker-end="url(#ra)"/>
    <text x="320" y="88" fill="#2563eb" font-family="SF Mono,monospace" font-size="12">Cesium converts</text>
    <text x="318" y="124" fill="#6b7785" font-family="SF Mono,monospace" font-size="11">anchor &rarr; parent&middot;local</text>
  </svg>
  <p class="figure-caption">The anchor is the source of truth; the local transform is a derived render artifact. Let&rsquo;s open up that arrow &mdash; the formula is exactly what makes the next section click.</p>
</div>

<p>The anchor&rsquo;s three numbers become the prim&rsquo;s <code>xformOp:translate</code> in <strong>two chained steps</strong>:</p>

<pre>xformOp:translate = cartographicToCartesian(lat, lon, h) &middot; ecefToUsdTransform
                    &#9492;&#9472;&#9472; depends only on the ANCHOR &#9472;&#9472;&#9496;  &#9492;&#9472; from the GEOREFERENCE (origin) &#9472;&#9496;</pre>

<h3>Step 1 &mdash; Geographic &rarr; ECEF (WGS84 constants only)</h3>

<p>First, turn lat/lon/height into an Earth-Centered, Earth-Fixed XYZ. This step touches <strong>nothing about your stage</strong> &mdash; only the fixed constants of the WGS84 ellipsoid:</p>

<pre>&phi; = lat,  &lambda; = lon,  h = height
N = a / &radic;(1 &minus; e&sup2;&middot;sin&sup2;&phi;)          a = 6378137 m,  e&sup2; = 0.00669438
X = (N + h)&middot;cos&phi;&middot;cos&lambda;
Y = (N + h)&middot;cos&phi;&middot;sin&lambda;
Z = (N&middot;(1 &minus; e&sup2;) + h)&middot;sin&phi;
P_ecef = (X, Y, Z)</pre>

<p>This is a <strong>pure function of the anchor</strong>. Same lat/lon/h &rarr; same ECEF, on any stage, forever. (In Cesium Native this is <code>cartographicToCartesian</code>; it&rsquo;s the same &ldquo;geodetic &rarr; ECEF&rdquo; conversion you&rsquo;ll find in any geodesy library.)</p>

<h3>Step 2 &mdash; ECEF &rarr; Stage (through the georeference)</h3>

<p>Now drop that planetary point into <em>your</em> scene&rsquo;s coordinates by multiplying with the georeference&rsquo;s matrix:</p>

<pre>P_stage = P_ecef &middot; M_ecefToUsd      (USD row-vector convention)</pre>

<p><code>M_ecefToUsd</code> is the georeference&rsquo;s <code>cesium:ecefToUsdTransform</code> &mdash; derived from the origin you picked (it&rsquo;s the inverse of &ldquo;local &rarr; ECEF&rdquo;: the East-North-Up frame at the origin, possibly scaled). <strong>This is the step that needs the georeference.</strong> <em>(That ENU matrix isn&rsquo;t magic either &mdash; the companion post <a href="/posts/enu-from-first-principles">ENU From First Principles</a> derives it as the Jacobian of position and dissects a real one.)</em></p>

<div class="callout">
  <span class="title">Orientation too &mdash; not just position</span>
  <p>Cesium places the whole <em>frame</em>, not only the translation: <code>primLocalToWorld = ENU(P_ecef) &middot; M_ecefToUsd</code>, where <code>ENU(P_ecef)</code> is the East-North-Up frame at the anchor point (columns = east, north, up, position). The translation is the <code>P_stage</code> above; the <strong>rotation</strong> is the tiny mismatch between &ldquo;up at the anchor&rdquo; and &ldquo;up at the origin&rdquo; &mdash; Earth&rsquo;s curvature between two nearby points. For points ~100&nbsp;m apart that surfaces as a <code>rotateXYZ</code> of roughly <code>0.0003&nbsp;rad</code>. That small auto-written rotation is Cesium keeping your object level with the true local ground, not the flat origin plane.</p>
</div>

<h3>Check it with real numbers</h3>

<p>Take one anchored point and run both steps:</p>

<pre>anchor   (32.2132079&deg;, &minus;7.9400261&deg;, 522.244 m)
  &#9472;&#9472; step 1 &#9472;&#9472;&#9658;  ECEF  (5350147.03, &minus;746204.13, 3380736.32)   = cesium:anchor:position
  &#9472;&#9472; step 2 &#9472;&#9472;&#9658;  stage translate  (&minus;93.63, 15.96, 0)          = xformOp:translate</pre>

<p>The two derivations agree to within <code>~1e-7</code>. Note the contrast: the anchor&rsquo;s lat/lon is absolute, yet the stage translate <code>(&minus;93.63, 15.96, 0)</code> is small and stage-relative &mdash; because Step&nbsp;2 measured it from <em>this</em> origin.</p>

<div class="callout good">
  <span class="title">Why an anchor needs a georeference &mdash; exactly</span>
  <p style="margin-bottom:6px"><code>P_stage = f(anchor lat/lon/h) &middot; M_ecefToUsd(origin)</code></p>
  <p>The left factor never changes with the origin; the right factor <em>is</em> the origin. So: <strong>no georeference &rarr; no <code>M_ecefToUsd</code> &rarr; you cannot compute <code>P_stage</code></strong>. And <strong>change the origin &rarr; <code>M_ecefToUsd</code> changes &rarr; <code>P_stage</code> shifts</strong>, even though lat/lon never moved. That is precisely why a position can be &ldquo;absolute on Earth&rdquo; yet still &ldquo;depend on the georeference&rdquo; to land somewhere in your stage.</p>
</div>

<!-- ───────────────────────── 6. OVERRIDE vs FALLBACK ───────────────────────── -->
<h2 id="override"><span class="step">6</span>The subtlety: the prim already has a transform</h2>

<p>Here&rsquo;s the question that catches everyone, and it&rsquo;s a sharp one: <em>a prim already has <code>xformOps</code> (translate / rotate / scale), and USD already renders it there. So if there&rsquo;s no <code>M_ecefToUsd</code>, why doesn&rsquo;t it just keep using the transform it already has?</em></p>

<p><strong>It does.</strong> That&rsquo;s exactly right &mdash; and admitting it forces a sharper definition of what a globe anchor even is.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">U</div>
    <h4>xformOps = USD&rsquo;s source of truth</h4>
    <p>The prim&rsquo;s <code>translate / rotate / scale</code>. <strong>Always present, always what USD draws.</strong> A georeference is never required for a prim to exist or render.</p>
  </div>
  <div class="box">
    <div class="icon green">A</div>
    <h4>Globe anchor = a layer on top</h4>
    <p>Its one job: <strong>overwrite</strong> those <code>xformOps</code> &mdash; recompute them from lat/lon via the Section&nbsp;5 formula, every update. The anchor doesn&rsquo;t draw anything; it <em>drives</em> the transform USD draws from.</p>
  </div>
</div>

<p>So the georeference isn&rsquo;t needed for the prim to render &mdash; it&rsquo;s needed for the anchor to <strong>compute and sync</strong> <code>xformOps</code> &harr; lat/lon. Pull that bridge out and the lat/lon doesn&rsquo;t vanish; it just stops driving anything. Three cases:</p>

<table>
  <tr><th>Situation</th><th>Where the prim gets its transform</th></tr>
  <tr><td><span class="tag muted">No anchor</span></td><td>Its own <code>xformOps</code>. Plain USD. No geographic meaning; georeference irrelevant.</td></tr>
  <tr><td><span class="tag good">Anchor resolves</span><br/>valid&nbsp;+&nbsp;georeference</td><td>Cesium computes the transform from lat/lon and <strong>overwrites</strong> <code>xformOps</code> every update. lat/lon is the master. (This is when you see Cesium auto-write that tiny <code>rotateXYZ</code>.)</td></tr>
  <tr><td><span class="tag bad">Anchor unresolved</span><br/>no&nbsp;georeference&nbsp;/&nbsp;bad&nbsp;token</td><td>Conversion can&rsquo;t run &rarr; prim <strong>falls back</strong> to its existing <code>xformOps</code>; lat/lon becomes inert data that controls nothing.</td></tr>
</table>

<div class="callout warn">
  <span class="title">The classic &ldquo;I changed lat/lon and nothing moved&rdquo; bug</span>
  <p>If a prim carries both a hand-authored <code>xformOp:translate</code>&nbsp;+&nbsp;<code>orient</code> <em>and</em> anchor lat/lon, but the anchor never resolves &mdash; a missing georeference, or a mistyped anchor schema/token &mdash; the prim renders from its <em>old</em> <code>xformOps</code> and the lat/lon just sits there. Editing lat/lon does nothing visible: not because the math is wrong, but because the anchor never got the bridge it needs to apply that math. Resolve the anchor and lat/lon becomes the master again.</p>
</div>

<p>So the corrected one-liner: a georeference doesn&rsquo;t let an anchor &ldquo;decide whether the prim shows&rdquo; &mdash; the prim always has somewhere to be. It lets the anchor <strong>keep <code>xformOps</code> in sync with lat/lon</strong>. Lose it, and you fall back to whatever transform the prim already had.</p>

<!-- ───────────────────────── 6. BINDING ───────────────────────── -->
<h2 id="binding"><span class="step">7</span>GeoreferenceBinding: which Earth frame?</h2>

<p>So far there&rsquo;s been exactly one georeference. But nothing stops a stage from having several:</p>

<pre>Geo_Hanoi      origin &harr; Ho Guom
Geo_DaNang     origin &harr; Da Nang airport
Geo_SaiGon     origin &harr; Sai Gon port</pre>

<p>Now an anchored object&rsquo;s GPS is unambiguous &mdash; but a new question appears: <strong>&ldquo;to turn this object&rsquo;s GPS back into a local matrix, which of these origins do I measure from?&rdquo;</strong></p>

<p>That&rsquo;s the <strong>GeoreferenceBinding</strong>. It is <em>not</em> a position. It doesn&rsquo;t say where the object is &mdash; the anchor already did. It names the <strong>conversion context</strong>: which Earth frame this object resolves against.</p>

<div class="callout">
  <span class="title">Binding answers &ldquo;which frame,&rdquo; not &ldquo;where&rdquo;</span>
  <p>Anchor = <em>where on Earth.</em> Binding = <em>which local working zone I express that in.</em> Two objects at the same GPS could bind to different georeferences and get completely different local coordinates &mdash; same truth, different render frame. You only ever need binding once <strong>more than one georeference coexists</strong> in the stage.</p>
</div>

<!-- ───────────────────────── 7. STACK ───────────────────────── -->
<h2 id="stack"><span class="step">8</span>The whole stack on one page</h2>

<p>That&rsquo;s all four concepts. Stack them and you get the full render pipeline &mdash; each layer answering exactly one question:</p>

<div class="ascii">vertex (local to its prim)
   <span class="c-muted">&darr;</span>  parent&middot;child chain          <span class="c-acc">Translate</span>      &rarr; relative layout
USD world transform
   <span class="c-muted">&darr;</span>  resolve absolute object       <span class="c-good">GlobeAnchor</span>    &rarr; absolute Earth identity  <span class="c-muted">(optional)</span>
GPS / ECEF position
   <span class="c-muted">&darr;</span>  pick the frame                <span class="c-acc">Binding</span>        &rarr; which Earth mapping       <span class="c-muted">(if many)</span>
   <span class="c-muted">&darr;</span>  origin &harr; lat/lon             <span class="c-good">Georeference</span>   &rarr; where this origin sits
local matrix near camera
   <span class="c-muted">&darr;</span>
camera &rarr; GPU pixels</div>

<table>
  <tr><th>Concept</th><th>Question it answers</th><th>You need it when&hellip;</th></tr>
  <tr><td><span class="tag muted">Translate</span></td><td>Where is the child relative to its parent?</td><td>Always &mdash; it&rsquo;s just USD.</td></tr>
  <tr><td><span class="tag good">Georeference</span></td><td>Where is this scene origin on Earth?</td><td>You want the scene on the planet at all.</td></tr>
  <tr><td><span class="tag good">GlobeAnchor</span></td><td>Where on Earth is <em>this one object</em>, absolutely?</td><td>An object has its own identity / can move independently.</td></tr>
  <tr><td><span class="tag warn">Binding</span></td><td>Which Earth frame do I resolve against?</td><td>Multiple georeferences exist in one stage.</td></tr>
</table>

<div class="callout good">
  <span class="title">The escape hatch</span>
  <p>If you have <strong>one site and a static hierarchy</strong>, concepts 4 through 7 mostly evaporate. You need <em>Georeference + USD transforms</em> and you&rsquo;re done. The rest of the machinery exists to solve <strong>scale</strong> (a planet is too big for one float frame) and <strong>mobility</strong> (objects that move across that planet). No scale problem, no mobility problem &rarr; no complexity.</p>
</div>

<!-- ───────────────────────── 8. EXAMPLE ───────────────────────── -->
<h2 id="example"><span class="step">9</span>Worked example: a nationwide digital twin</h2>

<p>Concept&nbsp;7 (binding) and the multi-origin idea feel abstract until you actually try to model a whole country. So let&rsquo;s build one. Three sites:</p>

<pre>Ho Guom Lake      (Hanoi)
Da Nang Airport   (central coast)
Sai Gon Port      (south)</pre>

<h3>The naive approach: one georeference for everything</h3>

<pre>/World
  &#9500;&#9472;&#9472; Geo_Vietnam     origin &harr; somewhere in the middle
  &#9500;&#9472;&#9472; HoGuomSite
  &#9500;&#9472;&#9472; DaNangAirport
  &#9492;&#9472;&#9472; SaiGonPort</pre>

<p>Hanoi and Sai Gon are about <strong>1,100&nbsp;km</strong> apart. Anchor everything to one origin and the southern site&rsquo;s local coordinates become enormous:</p>

<pre>HoGuom  = (0, 0, 0)
SaiGon  = (1100000, ...)   &larr; a million-meter local coordinate</pre>

<p>We&rsquo;re right back in Section&nbsp;2&rsquo;s trap. Try to zoom in on a 1&nbsp;cm bolt at the port and the float precision is already shredded.</p>

<h3>The fix: multiple origins, one per site</h3>

<p>Give each site its own georeference, planted right next to it &mdash; and <strong>bind</strong> each site to its own:</p>

<div class="ascii">/World
  &#9500;&#9472; Geo_HoGuom   origin &harr; Ho Guom
  &#9500;&#9472; Geo_DaNang   origin &harr; Da Nang airport
  &#9500;&#9472; Geo_SaiGon   origin &harr; Sai Gon port
  &#9492;&#9472; Sites
       &#9500;&#9472; HoGuomSite      <span class="c-acc">bind &rarr; Geo_HoGuom</span>
       &#9500;&#9472; DaNangAirport   <span class="c-acc">bind &rarr; Geo_DaNang</span>
       &#9492;&#9472; SaiGonPort      <span class="c-acc">bind &rarr; Geo_SaiGon</span></div>

<p>Now every site lives near <strong>its own</strong> <code>(0,0,0)</code>. Local coordinates shrink back to <code>10&nbsp;m</code>, <code>50&nbsp;m</code>, <code>200&nbsp;m</code> &mdash; the precision-friendly range. Binding is what makes that possible: it tells each site <em>which</em> origin to measure from.</p>

<h3>The case that needs all four at once: a moving asset</h3>

<p>Now fly a drone across the country. It starts over Hanoi:</p>

<pre>DroneA
  bind   &rarr; Geo_HoGuom
  anchor &rarr; (GPS over Ho Guom)
  local  &rarr; (20, 0, 10)        &larr; small, precise</pre>

<p>The drone flies to Da Nang. Its <strong>GPS / anchor is still perfectly correct</strong> &mdash; absolute identity doesn&rsquo;t change. But it&rsquo;s still <em>bound</em> to the Hanoi frame, so its <em>local</em> coordinate has ballooned:</p>

<pre>local &rarr; (~600000, 0, ...)   &larr; precision dying again</pre>

<p>So Cesium <strong>rebinds</strong> it to the nearest frame and recomputes the local matrix from the unchanged anchor:</p>

<pre>bind   &rarr; Geo_DaNang          &larr; switched frame
anchor &rarr; (GPS over Da Nang)   &larr; UNCHANGED truth
local  &rarr; (15, 0, 30)         &larr; small &amp; precise again</pre>

<div class="callout good">
  <span class="title">Origin rebasing</span>
  <p>The absolute position never moved in any meaningful sense &mdash; only the <em>frame we express it in</em> did. That swap is called <strong>origin rebasing</strong>, and it&rsquo;s the exact moment all four concepts work together: <span class="tag muted">Translate</span> for the small local layout, <span class="tag good">Anchor</span> as the invariant GPS, <span class="tag warn">Binding</span> to pick the active zone, <span class="tag good">Georeference</span> to define each zone. This is the bread-and-butter of nationwide digital twins, flight simulation, logistics tracking, and ground-ops dashboards.</p>
</div>

<!-- ───────────────────────── 9. PASSPORT ───────────────────────── -->
<h2 id="passport"><span class="step">10</span>The passport mental model</h2>

<p>Strip away every API name and the four concepts map onto something you already understand &mdash; <strong>how an address works</strong>:</p>

<div class="grid g3">
  <div class="box">
    <div class="icon green">&#9873;</div>
    <h4>Passport &rarr; GlobeAnchor</h4>
    <p>&ldquo;Who you are, where you were born.&rdquo; Your <strong>absolute identity</strong>. It doesn&rsquo;t change when you travel.</p>
  </div>
  <div class="box">
    <div class="icon amber">&#9974;</div>
    <h4>Current district &rarr; Binding</h4>
    <p>Which district you&rsquo;re in <em>right now</em>, so a short local address even makes sense. Change districts &rarr; rebind.</p>
  </div>
  <div class="box">
    <div class="icon blue">#</div>
    <h4>House number &rarr; Translate</h4>
    <p>Your offset <em>within</em> that district. Small, local, meaningless without the district to anchor it.</p>
  </div>
</div>

<p>And the georeference is the district&rsquo;s town hall: the thing that defines where district zero actually is on the map, so every house number in it resolves to a real place.</p>

<div class="callout">
  <span class="title">First principle, restated</span>
  <p>Cesium isn&rsquo;t solving &ldquo;maps.&rdquo; It&rsquo;s solving three consequences of putting a relative scene graph onto an absolute, enormous, curved planet:</p>
  <p style="margin-top:10px">1. <strong>Earth is too big for one float frame</strong> &rarr; <span class="tag good">Georeference</span> (a local working zone).<br/>
  2. <strong>Some objects need an absolute identity</strong> &rarr; <span class="tag good">GlobeAnchor</span> (a passport).<br/>
  3. <strong>Many frames may coexist</strong> &rarr; <span class="tag warn">GeoreferenceBinding</span> (which zone is active).</p>
</div>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2><span class="step">&#8718;</span>TL;DR</h2>

<ul class="clean">
  <li>USD is a relative machine: it only knows <strong>parent&middot;child</strong> transforms. <code>World(C) = chain of locals.</code></li>
  <li>Earth-scale coordinates don&rsquo;t fit in a 32-bit float &rarr; jitter. <strong>That single fact forces the split</strong> between &ldquo;big where&rdquo; and &ldquo;small local.&rdquo;</li>
  <li><strong>Georeference</strong> = where the scene origin sits on Earth. For one static site, it&rsquo;s all you need.</li>
  <li><strong>GlobeAnchor</strong> = an object&rsquo;s absolute GPS identity, independent of its parent. It&rsquo;s a layer that <em>overwrites</em> the prim&rsquo;s <code>xformOps</code> from lat/lon &mdash; not something the prim needs in order to render.</li>
  <li><strong>The formula:</strong> <code>xformOp:translate = cartographicToCartesian(lat,lon,h) &middot; M_ecefToUsd(origin)</code>. Left factor = anchor only; right factor = georeference. No georeference &rarr; can&rsquo;t compute &rarr; the prim <strong>falls back</strong> to its existing transform and lat/lon goes inert (the classic &ldquo;changed lat/lon, nothing moved&rdquo; bug).</li>
  <li><strong>GeoreferenceBinding</strong> = which Earth frame an object resolves against, once several coexist. Enables <strong>origin rebasing</strong> for assets moving across a large world.</li>
  <li>Passport (anchor) · current district (binding) · house number (translate). Same idea, no jargon.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Cesium 101 · First Principles · June 2026</p>
  <p style="margin-top:8px"><a href="/posts/cesium-on-omniverse">Related → How Cesium Puts a 3D Scene on Planet Earth</a></p>
</div>
`;

export const script = ``;
