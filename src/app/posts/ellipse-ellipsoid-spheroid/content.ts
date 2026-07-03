export const styles = `
  .artifact-scope{
    -webkit-font-smoothing:antialiased;
    font-size:17px;line-height:1.7;
  }
  .artifact-scope *{box-sizing:border-box}

  .artifact-scope article{max-width:880px;margin:0 auto;padding:56px 24px 96px}
  .artifact-scope header.post-head{border-bottom:1px solid var(--at-line);padding-bottom:32px;margin-bottom:8px}
  .artifact-scope .eyebrow{color:var(--at-accent);font-size:13px;letter-spacing:1.5px;text-transform:uppercase;
    font-weight:700;margin-bottom:14px;font-family:var(--at-font-mono)}
  .artifact-scope h1{font-size:38px;line-height:1.2;letter-spacing:-.5px;margin:0 0 16px;font-weight:800;
    font-family:var(--at-font-display)}
  .artifact-scope .lead{font-size:20px;line-height:1.55;color:var(--at-muted);margin:0;font-weight:400}
  .artifact-scope .byline{color:var(--at-faint);font-size:14px;margin-top:18px;font-family:var(--at-font-mono)}
  .artifact-scope h2{font-size:26px;margin:64px 0 14px;font-weight:800;letter-spacing:-.3px;
    display:flex;align-items:center;gap:14px;font-family:var(--at-font-display)}
  .artifact-scope h2 .step{flex:0 0 36px;height:36px;background:var(--at-accent);color:var(--at-bg);border-radius:10px;
    display:grid;place-items:center;font-size:15px;font-weight:700}
  .artifact-scope h3{font-size:19px;margin:32px 0 8px;font-weight:700;color:var(--at-text);font-family:var(--at-font-display)}
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
    background:var(--at-accent-soft);border:1px solid var(--at-accent-soft);border-left:4px solid var(--at-accent)}
  .artifact-scope .callout.warn{background:var(--at-amber-soft);border-color:var(--at-amber-soft);border-left-color:var(--at-amber)}
  .artifact-scope .callout.good{background:var(--at-green-soft);border-color:var(--at-green-soft);border-left-color:var(--at-green)}
  .artifact-scope .callout.bad{background:var(--at-accent-soft);border-color:var(--at-accent-soft);border-left-color:var(--at-accent)}
  .artifact-scope .callout p:first-child{margin-top:0}
  .artifact-scope .callout p:last-child{margin-bottom:0}
  .artifact-scope .callout .title{display:block;color:var(--at-text);font-weight:700;margin-bottom:6px;font-size:15px}
  .artifact-scope .grid{display:grid;gap:14px;margin:18px 0}
  .artifact-scope .g2{grid-template-columns:1fr 1fr}
  .artifact-scope .g3{grid-template-columns:1fr 1fr 1fr}
  .artifact-scope .g4{grid-template-columns:1fr 1fr 1fr 1fr}
  @media(max-width:720px){.artifact-scope .g2,.artifact-scope .g3,.artifact-scope .g4{grid-template-columns:1fr}}
  .artifact-scope .box{background:var(--at-surface);border:1px solid var(--at-line);border-radius:10px;padding:18px}
  .artifact-scope .box h4{margin:0 0 8px;font-size:15px;color:var(--at-text);font-weight:700;font-family:var(--at-font-display)}
  .artifact-scope .box p{margin:0;font-size:14.5px;line-height:1.55}
  .artifact-scope .box .icon{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;
    color:var(--at-bg);font-weight:800;font-size:14px;margin-bottom:10px}
  .artifact-scope .box .icon.blue{background:var(--at-blue)}
  .artifact-scope .box .icon.green{background:var(--at-green)}
  .artifact-scope .box .icon.red{background:var(--at-accent)}
  .artifact-scope .box .icon.amber{background:var(--at-amber)}
  .artifact-scope .box .icon.purple{background:var(--at-violet)}
  .artifact-scope .tag{display:inline-block;font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;
    letter-spacing:.5px;font-family:var(--at-font-mono)}
  .artifact-scope .tag.good{background:var(--at-green-soft);color:var(--at-green);border:1px solid var(--at-green-soft)}
  .artifact-scope .tag.bad{background:var(--at-accent-soft);color:var(--at-accent);border:1px solid var(--at-accent-soft)}
  .artifact-scope .tag.warn{background:var(--at-amber-soft);color:var(--at-amber);border:1px solid var(--at-amber-soft)}
  .artifact-scope .tag.muted{background:var(--at-inset);color:var(--at-faint);border:1px solid var(--at-line)}
  .artifact-scope table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}
  .artifact-scope th,.artifact-scope td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--at-line);vertical-align:top}
  .artifact-scope th{background:var(--at-inset);color:var(--at-text);font-weight:700;font-size:12px;letter-spacing:.4px;
    text-transform:uppercase;font-family:var(--at-font-mono)}
  .artifact-scope td:first-child{font-weight:600;color:var(--at-text)}
  .artifact-scope svg.diagram{width:100%;height:auto;display:block}
  .artifact-scope .toc{background:var(--at-surface);border:1px solid var(--at-line);border-radius:10px;
    padding:22px 26px;margin:32px 0}
  .artifact-scope .toc h3{margin:0 0 12px;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;
    color:var(--at-faint);font-weight:700;font-family:var(--at-font-mono)}
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
  .artifact-scope .kicker{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--at-faint);
    font-weight:700;margin-bottom:6px;font-family:var(--at-font-mono)}
  .artifact-scope .ascii{background:var(--at-inset);border:1px solid var(--at-line);border-radius:10px;
    font-family:var(--at-font-mono);font-size:13px;line-height:1.55;
    color:var(--at-text);padding:18px 22px;white-space:pre;overflow-x:auto}
  .artifact-scope .ascii .c-acc{color:var(--at-accent);font-weight:700}
  .artifact-scope .ascii .c-muted{color:var(--at-faint)}
  .artifact-scope .ascii .c-good{color:var(--at-green);font-weight:700}
  .artifact-scope .ascii .c-bad{color:var(--at-accent);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--at-line);color:var(--at-faint);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--at-faint);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--at-accent);margin-bottom:10px}
`;

export const html = `
<article>

<header class="post-head">
  <div class="eyebrow">Geometry &amp; Geodesy</div>
  <h1>Ellipse, Ellipsoid, Spheroid &mdash; and why is WGS84 called an &ldquo;ellipsoid&rdquo;?</h1>
  <p class="lead">Three near-identical names, easily confused. But a single core idea &mdash; <strong>add one dimension</strong> and <strong>count the independent semi-axes</strong> &mdash; cleanly separates all three, and explains why GIS people call the Earth a &ldquo;WGS84 ellipsoid&rdquo; rather than a &ldquo;spheroid&rdquo;.</p>
  <p class="byline">~7 min read</p>
</header>

<div class="toc">
  <h3>In this article</h3>
  <ol>
    <li><a href="#dimension">Ellipse vs Ellipsoid: 2D versus 3D</a></li>
    <li><a href="#create">How to build an ellipsoid: rotate an ellipse</a></li>
    <li><a href="#sphere">Sphere &mdash; the most special case</a></li>
    <li><a href="#equation">The equation: just add one term</a></li>
    <li><a href="#nesting">Sphere &sub; Spheroid &sub; Ellipsoid</a></li>
    <li><a href="#wgs84">Is WGS84 an ellipsoid or a spheroid?</a></li>
    <li><a href="#why">Why call it an &ldquo;ellipsoid&rdquo; and not a &ldquo;spheroid&rdquo;?</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. DIMENSION ───────────────────────── -->
<h2 id="dimension"><span class="step">1</span>Ellipse vs Ellipsoid: 2D versus 3D</h2>

<p>At root, the only fundamental difference is the <strong>number of dimensions</strong>.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">2D</div>
    <h4>Ellipse</h4>
    <p>It is a <strong>curve</strong> that lies entirely on a plane &mdash; like an oval drawn on paper. It has only two axes: a <strong>major axis</strong> and a <strong>minor axis</strong>.</p>
  </div>
  <div class="box">
    <div class="icon purple">3D</div>
    <h4>Ellipsoid</h4>
    <p>It is the <strong>spatial</strong> version of an ellipse &mdash; a <strong>solid</strong> 3D body. Think &ldquo;egg&rdquo; or &ldquo;a globe squashed flat.&rdquo; It has up to three semi-axes.</p>
  </div>
</div>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 240" role="img" aria-label="Ellipse 2D versus ellipsoid 3D">
    <!-- ellipse -->
    <text x="120" y="34" fill="var(--at-blue)" font-family="var(--at-font-mono)" font-size="13" font-weight="700" text-anchor="middle">ELLIPSE &mdash; 2D</text>
    <ellipse cx="150" cy="130" rx="110" ry="60" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="2"/>
    <line x1="40" y1="130" x2="260" y2="130" stroke="var(--at-blue)" stroke-dasharray="4" stroke-width="1.5"/>
    <line x1="150" y1="70" x2="150" y2="190" stroke="var(--at-blue)" stroke-dasharray="4" stroke-width="1.5"/>
    <text x="205" y="123" fill="var(--at-text)" font-family="var(--at-font-mono)" font-size="12">a = 10</text>
    <text x="158" y="92" fill="var(--at-text)" font-family="var(--at-font-mono)" font-size="12">b = 5</text>
    <text x="150" y="222" fill="var(--at-faint)" font-size="12" text-anchor="middle">a curve on a plane</text>

    <!-- arrow -->
    <text x="385" y="135" fill="var(--at-violet)" font-size="13" text-anchor="middle">rotate about an axis</text>
    <path d="M330 150 H440" stroke="var(--at-violet)" stroke-width="2" marker-end="url(#ar1)"/>
    <defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-violet)"/></marker></defs>

    <!-- ellipsoid -->
    <text x="610" y="34" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="13" font-weight="700" text-anchor="middle">ELLIPSOID &mdash; 3D</text>
    <ellipse cx="610" cy="130" rx="110" ry="62" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="2"/>
    <ellipse cx="610" cy="130" rx="110" ry="20" fill="none" stroke="var(--at-violet)" stroke-width="1" stroke-dasharray="3" opacity="0.55"/>
    <ellipse cx="610" cy="130" rx="38" ry="62" fill="none" stroke="var(--at-violet)" stroke-width="1" stroke-dasharray="3" opacity="0.55"/>
    <text x="610" y="222" fill="var(--at-faint)" font-size="12" text-anchor="middle">a solid body in space</text>
  </svg>
  <p class="figure-caption">An ellipse is a 2D curve; an ellipsoid is a 3D solid generated from it. Everything else is a consequence of adding one dimension.</p>
</div>

<!-- ───────────────────────── 2. CREATE ───────────────────────── -->
<h2 id="create"><span class="step">2</span>How to build an ellipsoid: rotate an ellipse</h2>

<p>The classic construction trick: take a flat shape and <strong>rotate it about an axis</strong>. The result is a solid of revolution.</p>

<table>
  <tr><th>Rotate this shape...</th><th>...about an axis, and you get</th></tr>
  <tr><td>Rectangle</td><td>Cylinder</td></tr>
  <tr><td>Semicircle</td><td>Sphere</td></tr>
  <tr><td><strong>Ellipse</strong></td><td><strong>Ellipsoid</strong></td></tr>
</table>

<div class="callout">
  <span class="title">The key constraint</span>
  <p>Rotating an ellipse about its axis produces an ellipsoid. But notice: under that rotation, the cross-section perpendicular to the axis of rotation is always a <strong>circle</strong>. That forces <em>two</em> of the three semi-axes to be equal. This is exactly the seed for distinguishing a &ldquo;spheroid&rdquo; from a &ldquo;general ellipsoid&rdquo; in section 5.</p>
</div>

<!-- ───────────────────────── 3. SPHERE ───────────────────────── -->
<h2 id="sphere"><span class="step">3</span>Sphere &mdash; the most special case</h2>

<p>A sphere is really just a special ellipsoid: the case where <strong>all three semi-axes are equal</strong>.</p>

<pre>ellipsoid has  a, b, c  arbitrary
        &darr;  force  a = b = c
sphere   has  a single radius r

        x&sup2; + y&sup2; + z&sup2; = r&sup2;</pre>

<p>Put another way: the more &ldquo;special&rdquo; a shape is, the fewer free numbers you need to describe it. A sphere needs just <strong>1 number</strong> (the radius). That is the clue for the tidy classification coming up.</p>

<!-- ───────────────────────── 4. EQUATION ───────────────────────── -->
<h2 id="equation"><span class="step">4</span>The equation: just add one term</h2>

<p>The elegance is right here &mdash; going from ellipse to ellipsoid is just <strong>adding one dimension z</strong> to the old formula.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">2D</div>
    <h4>Ellipse (in the plane)</h4>
    <pre style="margin:6px 0 0">x&sup2;     y&sup2;
&mdash;&mdash;  +  &mdash;&mdash;  =  1
a&sup2;     b&sup2;</pre>
  </div>
  <div class="box">
    <div class="icon purple">3D</div>
    <h4>Ellipsoid (in space)</h4>
    <pre style="margin:6px 0 0">x&sup2;     y&sup2;     z&sup2;
&mdash;&mdash;  +  &mdash;&mdash;  +  &mdash;&mdash;  =  1
a&sup2;     b&sup2;     c&sup2;</pre>
  </div>
</div>

<p>Add the term <code>z&sup2;/c&sup2;</code> and you are done. <code>a</code>, <code>b</code>, <code>c</code> are the three semi-axes along the three dimensions. Every definition below differs only in the <strong>conditions placed on these three numbers</strong>.</p>

<!-- ───────────────────────── 5. NESTING ───────────────────────── -->
<h2 id="nesting"><span class="step">5</span>Sphere &sub; Spheroid &sub; Ellipsoid</h2>

<p>This is where many GIS practitioners get confused too: <strong>every spheroid is an ellipsoid, but not every ellipsoid is a spheroid.</strong> The tidiest way to remember it is a containment diagram, classified by <em>the number of independent semi-axes</em>.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 720 300" role="img" aria-label="Nesting of sphere inside spheroid inside ellipsoid">
    <!-- outer: ellipsoid -->
    <rect x="20" y="20" width="680" height="260" rx="16" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="2"/>
    <text x="40" y="48" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="14" font-weight="700">ELLIPSOID</text>
    <text x="40" y="70" fill="var(--at-faint)" font-size="12.5">3 semi-axes &mdash; a, b, c may all differ</text>
    <!-- middle: spheroid -->
    <rect x="60" y="88" width="600" height="172" rx="14" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="2"/>
    <text x="80" y="116" fill="var(--at-blue)" font-family="var(--at-font-mono)" font-size="14" font-weight="700">SPHEROID</text>
    <text x="80" y="138" fill="var(--at-faint)" font-size="12.5">2 independent semi-axes &mdash; always two equal (a = b &ne; c)</text>
    <!-- inner: sphere -->
    <rect x="100" y="156" width="520" height="92" rx="12" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="2"/>
    <text x="120" y="186" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="14" font-weight="700">SPHERE</text>
    <text x="120" y="208" fill="var(--at-faint)" font-size="12.5">1 radius &mdash; a = b = c</text>
    <text x="120" y="230" fill="var(--at-faint)" font-size="12.5">the most perfect case</text>
  </svg>
  <p class="figure-caption">The further in you go, the more constraints and the fewer free semi-axes. A spheroid is an ellipsoid with circular symmetry about one axis; a sphere is a perfect spheroid.</p>
</div>

<table>
  <tr><th>Shape</th><th>Independent semi-axes</th><th>Condition</th></tr>
  <tr><td>Sphere</td><td>1</td><td><code>a = b = c</code></td></tr>
  <tr><td>Spheroid</td><td>2</td><td>two semi-axes equal (<code>a = b &ne; c</code>)</td></tr>
  <tr><td>Ellipsoid</td><td>3</td><td>no semi-axes required to be equal</td></tr>
</table>

<div class="callout good">
  <span class="title">One-line summary</span>
  <p><strong>Ellipsoid</strong> is the general concept. <strong>Spheroid</strong> is an ellipsoid with circular symmetry about one axis (generated by rotating an ellipse). <strong>Sphere</strong> is a perfect spheroid with all radii equal.</p>
</div>

<!-- ───────────────────────── 6. WGS84 ───────────────────────── -->
<h2 id="wgs84"><span class="step">6</span>Is WGS84 an ellipsoid or a spheroid?</h2>

<p>The Earth spins about its own axis, so it bulges at the equator and flattens at the poles. Because it is nearly symmetric about the axis of rotation, we need only <strong>two radii</strong> to describe it:</p>

<pre>Equatorial radius  a = 6&nbsp;378&nbsp;137 m   (equator, bulged out)
Polar radius       b = 6&nbsp;356&nbsp;752 m   (poles, flattened)

a = b  (about the spin axis)   &ne;   c  (along the polar axis)</pre>

<div class="figure">
  <svg class="diagram" viewBox="0 0 620 300" role="img" aria-label="WGS84 oblate spheroid Earth">
    <ellipse cx="310" cy="150" rx="150" ry="120" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="2"/>
    <!-- equator -->
    <line x1="160" y1="150" x2="460" y2="150" stroke="var(--at-blue)" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="310" y1="150" x2="460" y2="150" stroke="var(--at-accent)" stroke-width="2.5"/>
    <text x="372" y="142" fill="var(--at-accent)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">a (equator)</text>
    <!-- polar -->
    <line x1="310" y1="30" x2="310" y2="270" stroke="var(--at-blue)" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="310" y1="150" x2="310" y2="30" stroke="var(--at-green)" stroke-width="2.5"/>
    <text x="318" y="78" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">b (pole)</text>
    <circle cx="310" cy="150" r="4" fill="var(--at-text)"/>
    <text x="310" y="294" fill="var(--at-faint)" font-size="12.5" text-anchor="middle">Oblate spheroid &mdash; bulged at the equator, flattened at the poles (flattening exaggerated)</text>
  </svg>
  <p class="figure-caption">Earth&rsquo;s real flattening is tiny: a and b differ by only about 21 km out of a radius of ~6&nbsp;378 km. The figure exaggerates it for clarity.</p>
</div>

<p>Compare with the table in section 5: WGS84 has <code>a = b &ne; c</code> &rArr; it fits the definition of a <strong>spheroid</strong>. More precisely, because it is flattened at the poles it is an <strong>oblate spheroid</strong>. And since every spheroid is an ellipsoid, calling WGS84 an ellipsoid is not wrong either.</p>

<div class="callout">
  <span class="title">Connection to the Geospatial 3D series</span>
  <p>In the post <a href="/posts/cesium-on-omniverse">Cesium on Omniverse</a>, we met the &ldquo;WGS84 ellipsoid&rdquo; as the standard mathematical model for converting between <em>lat/lon/height</em> and <em>ECEF</em>. Now it is clear why: that reference surface is exactly an oblate spheroid.</p>
</div>

<!-- ───────────────────────── 7. WHY ───────────────────────── -->
<h2 id="why"><span class="step">7</span>Why call it an &ldquo;ellipsoid&rdquo; and not a &ldquo;spheroid&rdquo;?</h2>

<p>Geometrically, WGS84 is indeed an oblate spheroid. But in GIS and geodesy people almost always call it a <strong>reference ellipsoid</strong>. The reason comes down to what the term is for, and to the history of the field.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">1</div>
    <h4>&ldquo;Ellipsoid&rdquo; is the thing that matters</h4>
    <p>Geodesy does not care whether it was made by rotating an ellipse; it cares that <strong>this is the mathematical reference surface used to define coordinates</strong> (lat, lon, height). &ldquo;Ellipsoid&rdquo; is the standard term for that surface.</p>
  </div>
  <div class="box">
    <div class="icon purple">2</div>
    <h4>WGS84 is more than a shape</h4>
    <p>It also includes: an origin at the Earth&rsquo;s center of mass, the orientation of the axes, the ellipsoid&rsquo;s size, and many other geodetic parameters. &ldquo;WGS84 Ellipsoid&rdquo; emphasizes <em>the reference surface of the WGS84 system</em>, not just a shape description.</p>
  </div>
  <div class="box">
    <div class="icon amber">3</div>
    <h4>&ldquo;Spheroid&rdquo; is too narrow</h4>
    <p>A spheroid requires <code>a = b &ne; c</code>. Geodesy works with many reference surfaces, so it prefers the more general concept &mdash; <strong>ellipsoid</strong> &mdash; even when the surface happens to be a spheroid.</p>
  </div>
  <div class="box">
    <div class="icon green">4</div>
    <h4>History of the field</h4>
    <p>Since the 18th&ndash;19th centuries, geodesy has used &ldquo;reference ellipsoid&rdquo; &mdash; Clarke 1866, International 1924, GRS80, then WGS84. It became standard language long before WGS84 existed.</p>
  </div>
</div>

<div class="callout warn">
  <span class="title">A neat detail: &ldquo;ellipsoid&rdquo; is the more durable term</span>
  <p>If someone one day finds a better Earth model that <strong>no longer</strong> has <code>a = b</code> (three different semi-axes), it would still be a <em>reference ellipsoid</em> &mdash; but it would no longer be a spheroid. So calling it &ldquo;ellipsoid&rdquo; is both mathematically correct and future-proof.</p>
</div>

<p>An analogy: a Tesla is an electric vehicle, but in everyday traffic talk people call it a &ldquo;car&rdquo; rather than an &ldquo;electric vehicle&rdquo; &mdash; both are correct. It is the same with &ldquo;ellipsoid&rdquo; versus spheroid: the broader concept is used as the standard.</p>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2><span class="step">&#8718;</span>Mnemonics &amp; TL;DR</h2>

<ul class="clean">
  <li><strong>Ellipse</strong> &rarr; 2D &rarr; an oval on paper (a curve).</li>
  <li><strong>Ellipsoid</strong> &rarr; 3D &rarr; an &ldquo;egg&rdquo; / &ldquo;a squashed globe&rdquo; (a solid, adds the z dimension).</li>
  <li>Classify by the number of independent semi-axes: <strong>Sphere (1) &sub; Spheroid (2) &sub; Ellipsoid (3)</strong>.</li>
  <li><strong>WGS84 = oblate spheroid</strong> (a = b &ne; c) &mdash; and therefore also an ellipsoid.</li>
  <li>GIS says &ldquo;WGS84 ellipsoid&rdquo; because <strong>ellipsoid is the general, standard, durable reference term</strong> in geodesy.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong &middot; June 2026</p>
  <p style="margin-top:8px"><a href="/posts/cesium-on-omniverse">Related &rarr; How Cesium Puts a 3D Scene on Planet Earth</a></p>
</div>
`;

export const script = ``;
