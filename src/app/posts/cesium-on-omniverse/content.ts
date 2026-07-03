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
  .artifact-scope .callout.bad{background:var(--at-accent-soft);border-left-color:var(--at-accent)}
  .artifact-scope .callout p:first-child{margin-top:0}
  .artifact-scope .callout p:last-child{margin-bottom:0}
  .artifact-scope .callout .title{display:block;color:var(--at-text);font-weight:700;margin-bottom:6px;font-size:15px}
  .artifact-scope .grid{display:grid;gap:14px;margin:18px 0}
  .artifact-scope .g2{grid-template-columns:1fr 1fr}
  .artifact-scope .g3{grid-template-columns:1fr 1fr 1fr}
  .artifact-scope .g4{grid-template-columns:1fr 1fr 1fr 1fr}
  @media(max-width:720px){.artifact-scope .g2,.artifact-scope .g3,.artifact-scope .g4{grid-template-columns:1fr}}
  .artifact-scope .box{background:var(--at-surface);border:1px solid var(--at-line);border-radius:10px;padding:18px}
  .artifact-scope .box h4{margin:0 0 8px;font-family:var(--at-font-display);font-size:15px;color:var(--at-text);font-weight:700}
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
  .artifact-scope .tag.muted{background:var(--at-inset);color:var(--at-muted);border:1px solid var(--at-line)}
  .artifact-scope table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}
  .artifact-scope th,.artifact-scope td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--at-line);vertical-align:top}
  .artifact-scope th{background:var(--at-inset);color:var(--at-text);font-family:var(--at-font-mono);font-weight:700;font-size:12px;letter-spacing:.4px;
    text-transform:uppercase}
  .artifact-scope td:first-child{font-weight:600;color:var(--at-text)}
  .artifact-scope svg.diagram{width:100%;height:auto;display:block}
  .artifact-scope .toc{background:var(--at-surface);border:1px solid var(--at-line);border-radius:10px;
    padding:22px 26px;margin:32px 0}
  .artifact-scope .toc h3{margin:0 0 12px;font-family:var(--at-font-mono);font-size:12px;letter-spacing:1.2px;text-transform:uppercase;
    color:var(--at-muted);font-weight:700}
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
  .artifact-scope .kicker{font-family:var(--at-font-mono);font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--at-muted);
    font-weight:700;margin-bottom:6px}
  .artifact-scope .ascii{background:var(--at-inset);border:1px solid var(--at-line);border-radius:10px;
    font-family:var(--at-font-mono);font-size:13px;line-height:1.55;
    color:var(--at-text);padding:18px 22px;white-space:pre;overflow-x:auto}
  .artifact-scope .ascii .c-acc{color:var(--at-accent);font-weight:700}
  .artifact-scope .ascii .c-muted{color:var(--at-muted)}
  .artifact-scope .ascii .c-good{color:var(--at-green);font-weight:700}
  .artifact-scope .ascii .c-bad{color:var(--at-accent);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--at-line);color:var(--at-faint);font-family:var(--at-font-mono);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--at-faint);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--at-accent);margin-bottom:10px}
`;

export const html = `
<article>

<header class="post-head">
  <div class="eyebrow">Geospatial 3D · Part 1 of 5</div>
  <h1>How Cesium Puts a 3D Scene on Planet Earth</h1>
  <p class="lead">Before any &ldquo;map integration,&rdquo; one question has to be answered: <strong>where on Earth is this scene?</strong> Cesium is the machinery that answers it. Let&rsquo;s build up to it &mdash; starting with a single, stubborn fact about how GPUs store numbers.</p>
  <p class="byline">Geospatial 3D series · Part 1 · ~8 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#precision">The one problem that explains everything</a></li>
    <li><a href="#what">So what <em>is</em> Cesium?</a></li>
    <li><a href="#schemas">How it bolts onto Omniverse: four USD prims</a></li>
    <li><a href="#journey">The coordinate journey: from a point to the screen</a></li>
    <li><a href="#up">The &ldquo;Up vector&rdquo; gotcha</a></li>
    <li><a href="#layer">Putting it together: enabling Cesium as a layer</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. PRECISION ───────────────────────── -->
<h2 id="precision"><span class="step">1</span>The one problem that explains everything</h2>

<p>A GPU renders using <strong>32-bit floating-point numbers</strong>. A float32 has only about 7 significant decimal digits. That&rsquo;s plenty when your scene is a single room: positions range over tens of meters, and the precision near any point is sub-millimeter.</p>

<p>Now place that room on the real Earth. Earth&rsquo;s radius is about 6,378,000&nbsp;m. If you describe a doorknob by its true position on the globe, the number looks like <code>6378137.245</code>. Seven digits are gone <em>before</em> the decimal point. The fractional part &mdash; the part that says <em>where the doorknob actually is</em> &mdash; gets rounded away. The result on screen is <strong>&ldquo;vertex jitter&rdquo;</strong>: geometry shimmers and swims as the camera moves, because every coordinate is snapping to a coarse grid.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 230" role="img" aria-label="Float precision degrades with distance from origin">
    <defs>
      <linearGradient id="prec" x1="0" x2="1">
        <stop offset="0" stop-color="var(--at-green)"/><stop offset="0.5" stop-color="var(--at-amber)"/><stop offset="1" stop-color="var(--at-accent)"/>
      </linearGradient>
    </defs>
    <text x="20" y="28" fill="var(--at-muted)" font-family="var(--at-font-mono)" font-size="13">32-bit float precision vs. distance from origin (0,0,0)</text>
    <rect x="20" y="50" width="720" height="22" rx="6" fill="url(#prec)"/>
    <line x1="20" y1="50" x2="20" y2="120" stroke="var(--at-line)"/>
    <line x1="260" y1="50" x2="260" y2="120" stroke="var(--at-line)"/>
    <line x1="500" y1="50" x2="500" y2="120" stroke="var(--at-line)"/>
    <line x1="740" y1="50" x2="740" y2="120" stroke="var(--at-line)"/>
    <text x="20" y="138" fill="var(--at-text)" font-family="var(--at-font-mono)" font-size="12">1 m</text>
    <text x="225" y="138" fill="var(--at-text)" font-family="var(--at-font-mono)" font-size="12">10 km</text>
    <text x="465" y="138" fill="var(--at-text)" font-family="var(--at-font-mono)" font-size="12">1,000 km</text>
    <text x="640" y="138" fill="var(--at-text)" font-family="var(--at-font-mono)" font-size="12">Earth radius</text>
    <text x="20" y="170" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="12">~0.0000001 m</text>
    <text x="210" y="170" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="12">~0.001 m</text>
    <text x="450" y="170" fill="var(--at-accent)" font-family="var(--at-font-mono)" font-size="12">~0.1 m</text>
    <text x="600" y="170" fill="var(--at-accent)" font-family="var(--at-font-mono)" font-size="12">~0.5 m (jitter!)</text>
    <text x="20" y="208" fill="var(--at-faint)" font-size="13">Near the origin you have nanometers to spare. At Earth scale you can&rsquo;t even place a wall straight.</text>
  </svg>
  <p class="figure-caption">Every technique in this series &mdash; globe anchors, origin rebasing, 3D Tile streaming &mdash; is a response to this single graph.</p>
</div>

<div class="callout">
  <span class="title">The takeaway</span>
  <p>You can&rsquo;t render the planet in one big float coordinate system. So the trick is: <em>keep the GPU working near a local origin, and store the &ldquo;true Earth position&rdquo; separately in double precision (about 15 digits).</em> Cesium is the library that does this bookkeeping correctly.</p>
</div>

<!-- ───────────────────────── 2. WHAT IS CESIUM ───────────────────────── -->
<h2 id="what"><span class="step">2</span>So what <em>is</em> Cesium?</h2>

<p>Cesium is a 3D geospatial platform. For the purposes of putting a scene on Earth, the piece that matters has two layers:</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">1</div>
    <h4>Cesium Native</h4>
    <p>A set of C++ libraries for <strong>3D&nbsp;Tiles runtime streaming</strong>, glTF decoding, and <strong>high-precision (double) geospatial math</strong>. This is the brain. It&rsquo;s engine-agnostic.</p>
  </div>
  <div class="box">
    <div class="icon purple">2</div>
    <h4>Cesium for Omniverse</h4>
    <p>The Kit extension (<code>cesium.omniverse</code>) that wires Cesium&nbsp;Native into Omniverse &mdash; defining USD schemas for geospatial concepts and rendering tiles via Omniverse&rsquo;s <strong>Fabric</strong> runtime.</p>
  </div>
</div>

<p>The downloadable Cesium for Omniverse extension is exactly this. Once enabled in Kit, it gives the stage the ability to (a) know where it is on Earth, and (b) stream the rest of the planet in around it.</p>

<!-- ───────────────────────── 3. SCHEMAS ───────────────────────── -->
<h2 id="schemas"><span class="step">3</span>How it bolts onto Omniverse: four USD prims</h2>

<p>Cesium doesn&rsquo;t replace USD &mdash; it <strong>adds prims</strong> to your stage. Every Cesium-enabled stage has a small set of typed prims:</p>

<table>
  <tr><th>Prim</th><th>Job</th></tr>
  <tr><td><code>Cesium</code> (data)</td><td>Top-level settings: access token, project config.</td></tr>
  <tr><td><code>CesiumGeoreference</code></td><td><strong>The anchor of the whole world.</strong> Defines which lat/lon/height on Earth maps to the local origin <code>(0,0,0)</code>.</td></tr>
  <tr><td><code>CesiumTileset</code></td><td>A streamed dataset &mdash; Google 3D Tiles, Cesium World Terrain, OSM Buildings, and so on.</td></tr>
  <tr><td><code>CesiumGlobeAnchor</code> (API schema)</td><td>Applied to <em>any</em> <code>Xformable</code> prim to pin it to a precise lat/lon/height on the globe.</td></tr>
</table>

<div class="callout good">
  <span class="title">A globe anchor is just three numbers on a prim</span>
  <p>Strip away the jargon and a <code>CesiumGlobeAnchor</code> stores <strong>latitude, longitude, and height</strong> on a prim. That&rsquo;s the whole idea: &ldquo;make this object know its position on Earth&rdquo; and &ldquo;add a globe anchor to it&rdquo; are the same act. If your scene already carries lat/lon/height somewhere, those values <em>are</em> the anchor&rsquo;s inputs. Note that rotation is <em>not</em> part of the anchor &mdash; the anchor only places the object; orienting it correctly is a separate step (more on that in Section&nbsp;5).</p>
</div>

<!-- ───────────────────────── 4. JOURNEY ───────────────────────── -->
<h2 id="journey"><span class="step">4</span>The coordinate journey: from a point to the screen</h2>

<p>Here is the pipeline that defeats the jitter problem. Read it as a relay race between three coordinate systems.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 360" role="img" aria-label="Coordinate pipeline from local to ECEF to render">
    <defs><marker id="a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-blue)"/></marker></defs>
    <!-- Local -->
    <rect x="20" y="40" width="220" height="120" rx="12" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"/>
    <text x="36" y="66" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">(1) LOCAL (your USD)</text>
    <text x="36" y="92" fill="var(--at-muted)" font-size="12">Object at (12.4, 0, 8.1)</text>
    <text x="36" y="112" fill="var(--at-faint)" font-size="12">meters from /World</text>
    <text x="36" y="138" fill="var(--at-faint)" font-size="12">float32 — precise &amp; happy</text>
    <!-- ECEF -->
    <rect x="300" y="40" width="230" height="120" rx="12" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <text x="316" y="66" fill="var(--at-blue)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">(2) ECEF (Earth-fixed)</text>
    <text x="316" y="92" fill="var(--at-muted)" font-size="12">(4194304.2, 171887.5,</text>
    <text x="316" y="110" fill="var(--at-muted)" font-size="12"> 4487348.4) meters</text>
    <text x="316" y="136" fill="var(--at-faint)" font-size="12">float64 — Earth-centered</text>
    <!-- Render -->
    <rect x="590" y="40" width="210" height="120" rx="12" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.5"/>
    <text x="606" y="66" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">(3) RENDER (GPU)</text>
    <text x="606" y="92" fill="var(--at-muted)" font-size="12">rebased near camera</text>
    <text x="606" y="112" fill="var(--at-muted)" font-size="12">small float32 again</text>
    <text x="606" y="138" fill="var(--at-green)" font-size="12">no jitter ✓</text>

    <!-- arrows -->
    <path d="M240 100 H300" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#a)"/>
    <path d="M530 100 H590" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#a)"/>
    <text x="244" y="186" fill="var(--at-faint)" font-family="var(--at-font-mono)" font-size="11">Georeference</text>
    <text x="244" y="202" fill="var(--at-faint)" font-family="var(--at-font-mono)" font-size="11">transform</text>
    <text x="540" y="186" fill="var(--at-faint)" font-family="var(--at-font-mono)" font-size="11">origin</text>
    <text x="540" y="202" fill="var(--at-faint)" font-family="var(--at-font-mono)" font-size="11">rebasing</text>

    <!-- globe -->
    <circle cx="410" cy="290" r="48" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <path d="M362 290 H458 M410 242 V338 M372 262 Q410 290 448 318 M372 318 Q410 290 448 262" stroke="var(--at-line)" fill="none"/>
    <circle cx="438" cy="262" r="5" fill="var(--at-green)"/>
    <text x="455" y="262" fill="var(--at-green)" font-size="12">your scene</text>
    <text x="300" y="350" fill="var(--at-faint)" font-size="12">lat/lon/height defines this green dot&rsquo;s ECEF position</text>
  </svg>
  <p class="figure-caption">(1) You author in local meters. (2) Cesium converts to double-precision <strong>ECEF</strong> using the georeference. (3) Before rendering, everything is shifted (&ldquo;rebased&rdquo;) so the camera sits near <code>(0,0,0)</code>, returning to safe float32. The user never sees the seams.</p>
</div>

<h3>What is ECEF?</h3>
<p><strong>Earth-Centered, Earth-Fixed.</strong> A single XYZ coordinate system whose origin is the <em>center of the Earth</em>; the axes are fixed to the planet (they rotate with it). Any point on or near Earth is one <code>(X, Y, Z)</code> in meters. Cesium stores these as <code>float64</code> (double) &mdash; about 15 digits &mdash; so the doorknob&rsquo;s fractional millimeters survive. Lat/Lon/Height and ECEF are two views of the same point; Cesium converts between them with the <strong>WGS84 ellipsoid</strong> (the standard mathematical model of Earth&rsquo;s shape).</p>

<!-- ───────────────────────── 5. UP VECTOR ───────────────────────── -->
<h2 id="up"><span class="step">5</span>The &ldquo;Up vector&rdquo; gotcha</h2>

<p>In a local room, &ldquo;up&rdquo; is simply <code>+Y</code> (or <code>+Z</code> in many DCC tools) &mdash; one fixed direction forever. <strong>On a globe, &ldquo;up&rdquo; is different at every point.</strong> Up in Singapore points a completely different way through space than up in London, because both point away from Earth&rsquo;s center.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 620 280" role="img" aria-label="Up vector differs across the globe">
    <defs>
      <marker id="up" markerWidth="10" markerHeight="10" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="var(--at-green)"/></marker>
      <marker id="up2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--at-amber)"/></marker>
      <marker id="up3" markerWidth="10" markerHeight="10" refX="6" refY="0" orient="auto"><path d="M6,0 L0,3 L6,6 Z" fill="var(--at-blue)"/></marker>
    </defs>
    <circle cx="310" cy="150" r="100" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <line x1="310" y1="150" x2="310" y2="50" stroke="var(--at-line)" stroke-dasharray="4"/>
    <!-- site A top -->
    <circle cx="310" cy="50" r="6" fill="var(--at-green)"/>
    <line x1="310" y1="50" x2="310" y2="10" stroke="var(--at-green)" stroke-width="3" marker-end="url(#up)"/>
    <text x="322" y="30" fill="var(--at-green)" font-size="12">Up (site A)</text>
    <!-- site B right -->
    <circle cx="410" cy="150" r="6" fill="var(--at-amber)"/>
    <line x1="410" y1="150" x2="470" y2="150" stroke="var(--at-amber)" stroke-width="3" marker-end="url(#up2)"/>
    <text x="420" y="140" fill="var(--at-amber)" font-size="12">Up (site B)</text>
    <!-- site C lower-left -->
    <circle cx="240" cy="220" r="6" fill="var(--at-blue)"/>
    <line x1="240" y1="220" x2="200" y2="262" stroke="var(--at-blue)" stroke-width="3" marker-end="url(#up3)"/>
    <text x="120" y="262" fill="var(--at-blue)" font-size="12">Up (site C)</text>
    <text x="180" y="150" fill="var(--at-faint)" font-size="12">Earth</text>
  </svg>
  <p class="figure-caption">&ldquo;Up&rdquo; = the surface normal of the WGS84 ellipsoid at your lat/lon. The georeference&rsquo;s job is to rotate your local stage so that your local &ldquo;up&rdquo; lines up with this true up at your location.</p>
</div>

<div class="callout warn">
  <span class="title">Verify the Up axis before you trust any placement</span>
  <p>Omniverse stages carry an <code>upAxis</code> metadata field (<code>Y</code> or <code>Z</code>). Source data from CAD/BIM tools and Omniverse defaults don&rsquo;t always agree. If the stage&rsquo;s up axis is wrong, the globe anchor will happily place the scene at the right lat/lon but <strong>tilted</strong> &mdash; the building leans, or lies on its side relative to the streamed terrain. This is the single most common georeferencing bug. There&rsquo;s also a second, finer rotation: once the object stands upright, you may still need to spin it about that up axis so it faces the right compass heading (which way is north). That heading alignment is applied <em>on top of</em> the anchor.</p>
</div>

<!-- ───────────────────────── 6. LAYER ───────────────────────── -->
<h2 id="layer"><span class="step">6</span>Putting it together: enabling Cesium as a layer</h2>

<pre>USD Stage  /World            &larr; your authored scene, local meters
  &#9500;&#9472;&#9472; CesiumGeoreference       &larr; "/World's origin = lat 1.29, lon 103.85, h 12m"
  &#9474;     (globe anchor applied to /World)
  &#9500;&#9472;&#9472; CesiumTileset "GooglePhotoreal"  &larr; streamed photoreal Earth  (Part 3)
  &#9500;&#9472;&#9472; CesiumTileset "WorldTerrain"     &larr; optional elevation
  &#9492;&#9472;&#9472; (your authored geometry, unchanged)</pre>

<p>Because tilesets are just prims, the end user can <strong>toggle the layer on/off</strong> like any other visibility. Your authored geometry doesn&rsquo;t change; Cesium simply renders the planet <em>around</em> it, correctly positioned, because the georeference told it where <code>(0,0,0)</code> lives on Earth.</p>

<div class="callout">
  <span class="title">Clipping the streamed world to your site</span>
  <p>Once the planet streams in around your scene, you usually don&rsquo;t want a whole continent of buildings overlapping your own model. The fix is a <strong>clipping polygon</strong>: feed Cesium a boundary outline and it cuts a hole in the streamed tiles so your authored geometry shows through cleanly. So a globe anchor places you on Earth; a clipping polygon carves out room for your own content inside the streamed world.</p>
</div>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2><span class="step">∎</span>TL;DR</h2>

<ul class="clean">
  <li>GPUs use float32 &rarr; they can&rsquo;t hold Earth-scale coordinates without jitter. <strong>That single fact drives the whole design.</strong></li>
  <li><strong>Cesium Native</strong> = double-precision geospatial math + tile streaming. <strong>Cesium for Omniverse</strong> = the Kit extension that exposes it as USD prims.</li>
  <li>A <strong>globe anchor</strong> stores lat/lon/height on a prim and pins your origin to the Earth &mdash; that&rsquo;s the entire concept.</li>
  <li>Coordinates relay Local &rarr; ECEF (float64) &rarr; rebased render (float32). No jitter, no seams.</li>
  <li><strong>Verify the Up axis</strong> or your scene will be tilted relative to the globe. This is the classic gotcha.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Geospatial 3D series · Part 1 of 5 · June 2026</p>
  <p style="margin-top:8px"><a href="/posts/3d-tiles-streaming">Next → 3D Tiles: How to Stream a Planet That Won't Fit in RAM</a></p>
</div>
`;

export const script = ``;
