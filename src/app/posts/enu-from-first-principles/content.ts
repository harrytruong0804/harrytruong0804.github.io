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
    display:grid;place-items:center;font-size:15px;font-weight:700;font-family:var(--at-font-mono)}
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
  .artifact-scope svg text{font-family:var(--at-font-mono)}
  .artifact-scope .callout{padding:16px 20px;border-radius:8px;margin:22px 0;
    background:var(--at-accent-soft);border:1px solid var(--at-line);border-left:4px solid var(--at-accent)}
  .artifact-scope .callout.warn{background:var(--at-amber-soft);border-left-color:var(--at-amber)}
  .artifact-scope .callout.good{background:var(--at-green-soft);border-left-color:var(--at-green)}
  .artifact-scope .callout.bad{background:var(--at-violet-soft);border-left-color:var(--at-violet)}
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
  .artifact-scope .box .icon.red{background:var(--at-violet)}
  .artifact-scope .box .icon.amber{background:var(--at-amber)}
  .artifact-scope .box .icon.purple{background:var(--at-violet)}
  .artifact-scope .tag{display:inline-block;font-family:var(--at-font-mono);font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;
    letter-spacing:.5px}
  .artifact-scope .tag.blue{background:var(--at-blue-soft);color:var(--at-blue);border:1px solid var(--at-blue)}
  .artifact-scope .tag.good{background:var(--at-green-soft);color:var(--at-green);border:1px solid var(--at-green)}
  .artifact-scope .tag.bad{background:var(--at-violet-soft);color:var(--at-violet);border:1px solid var(--at-violet)}
  .artifact-scope .tag.warn{background:var(--at-amber-soft);color:var(--at-amber);border:1px solid var(--at-amber)}
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
  .artifact-scope .ascii .c-muted{color:var(--at-muted)}
  .artifact-scope .ascii .c-good{color:var(--at-green);font-weight:700}
  .artifact-scope .ascii .c-bad{color:var(--at-violet);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--at-line);color:var(--at-faint);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--at-faint);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--at-accent);margin-bottom:10px}
`;

export const html = `
<article>

<header class="post-head">
  <div class="eyebrow">Cesium 101 · Companion</div>
  <h1>ENU: the Tangent Frame Behind Every Georeference</h1>
  <p class="lead">The companion post called <code>M_ecefToUsd</code> &mdash; the matrix that turns a planet coordinate into a stage coordinate &mdash; a black box. It isn&rsquo;t. Open it and you find one thing: an <strong>East&ndash;North&ndash;Up</strong> frame. And ENU itself isn&rsquo;t a definition you memorize &mdash; it&rsquo;s the <em>derivative of position</em>, falling straight out of the geometry of a round Earth. Let&rsquo;s derive it.</p>
  <p class="byline">A worked derivation · ~12 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#problem">The problem: a global grid vs. a flat scene</a></li>
    <li><a href="#intuition">ENU, intuitively: stand somewhere, point three ways</a></li>
    <li><a href="#derivative">The core idea: ENU is a derivative</a></li>
    <li><a href="#units">Why East and North aren&rsquo;t unit vectors (yet)</a></li>
    <li><a href="#ellipsoid">The ellipsoid twist: why &ldquo;Up&rdquo; misses Earth&rsquo;s center</a></li>
    <li><a href="#matrix">From frame to matrix: building eastNorthUpToFixedFrame</a></li>
    <li><a href="#dissect">Dissecting a real ecefToUsdTransform</a></li>
    <li><a href="#origin">Why stage (0,0,0) is always the georeference origin</a></li>
    <li><a href="#rotate">ENU shows you North &mdash; it can&rsquo;t rotate a crooked model</a></li>
    <li><a href="#two">Two georeferences, one stage: why binding becomes mandatory</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. PROBLEM ───────────────────────── -->
<h2 id="problem"><span class="step">1</span>The problem: a global grid vs. a flat scene</h2>

<p><strong>ECEF</strong> (Earth-Centered, Earth-Fixed) is a Cartesian system nailed to the center of the planet. Its axes rotate <em>with</em> Earth, but they have no idea where the ground is at any given spot &mdash; the X axis pierces the Gulf of Guinea, not your feet.</p>

<p>Your local scene, on the other hand, thinks like a tabletop: <strong>left&ndash;right, forward&ndash;back, up&ndash;down</strong>. A flat little coordinate frame with intuitive directions.</p>

<p>ENU is the bridge between those two worldviews: <strong>a flat, local frame defined at one point on Earth, aligned to directions a human actually uses.</strong> Everything Cesium does to glue your scene onto the globe is, underneath, the construction of this one frame.</p>

<!-- ───────────────────────── 2. INTUITION ───────────────────────── -->
<h2 id="intuition"><span class="step">2</span>ENU, intuitively: stand somewhere, point three ways</h2>

<p>Stand at a single point on the surface and erect three perpendicular axes:</p>

<ul class="clean">
  <li><strong>Up</strong> &mdash; straight up, opposite a plumb line, perpendicular to the ground.</li>
  <li><strong>North</strong> &mdash; along the ground, toward the North Pole.</li>
  <li><strong>East</strong> &mdash; along the ground, toward the east.</li>
</ul>

<p>Those three form a right-handed orthonormal basis: <code>E &times; N = U</code>. Together they span the <strong>local tangent plane</strong> &mdash; the flat sheet that just kisses the globe at your location.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 620 320" role="img" aria-label="ENU tangent frame at a point on the globe">
    <circle cx="250" cy="250" r="180" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <path d="M120 130 A180 180 0 0 1 400 110" stroke="var(--at-blue)" fill="none" stroke-dasharray="3"/>
    <line x1="250" y1="250" x2="250" y2="50" stroke="var(--at-line)" stroke-dasharray="4"/>
    <text x="232" y="44" fill="var(--at-faint)" font-size="12">pole</text>
    <!-- point P at upper-right of the globe -->
    <circle cx="377" cy="123" r="6" fill="var(--at-text)"/>
    <text x="388" y="118" fill="var(--at-text)" font-size="13" font-weight="700">P</text>
    <!-- radial line from center to P (for Up) -->
    <line x1="250" y1="250" x2="377" y2="123" stroke="var(--at-line)"/>
    <!-- Up: along radial outward -->
    <line x1="377" y1="123" x2="445" y2="55" stroke="var(--at-green)" stroke-width="3" marker-end="url(#au)"/>
    <text x="450" y="52" fill="var(--at-green)" font-size="13" font-weight="700">Up</text>
    <!-- North: tangent toward pole (perp to radial, up-left) -->
    <line x1="377" y1="123" x2="305" y2="78" stroke="var(--at-violet)" stroke-width="3" marker-end="url(#an)"/>
    <text x="278" y="70" fill="var(--at-violet)" font-size="13" font-weight="700">North</text>
    <!-- East: tangent, drawn toward lower-right as the other in-plane dir -->
    <line x1="377" y1="123" x2="430" y2="170" stroke="var(--at-blue)" stroke-width="3" marker-end="url(#ae)"/>
    <text x="436" y="178" fill="var(--at-blue)" font-size="13" font-weight="700">East</text>
    <defs>
      <marker id="au" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--at-green)"/></marker>
      <marker id="an" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--at-violet)"/></marker>
      <marker id="ae" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--at-blue)"/></marker>
    </defs>
    <text x="250" y="300" fill="var(--at-faint)" font-size="12" text-anchor="middle">the three axes span the tangent plane at P</text>
  </svg>
  <p class="figure-caption">ENU is just the local &ldquo;which way is east / north / up&rdquo; at one spot, made into three perpendicular unit vectors.</p>
</div>

<p>That&rsquo;s the picture. Now the question that makes it rigorous: <em>where do those three vectors actually come from?</em> They&rsquo;re not arbitrary &mdash; they&rsquo;re forced by the shape of the Earth.</p>

<!-- ───────────────────────── 3. DERIVATIVE ───────────────────────── -->
<h2 id="derivative"><span class="step">3</span>The core idea: ENU is a derivative</h2>

<p>Here is the core idea, and everything else is a corollary. Write the position of a point on a sphere of radius <code>R</code> as a function of latitude <code>&phi;</code> and longitude <code>&lambda;</code>, expressed in ECEF:</p>

<pre>P(&phi;, &lambda;) = R &middot; (cos&phi;&middot;cos&lambda;,  cos&phi;&middot;sin&lambda;,  sin&phi;)</pre>

<p>Now ask each ENU direction as a question about <em>motion</em>:</p>

<h3>&ldquo;Which way is East?&rdquo; = increase longitude</h3>

<p>East means: nudge <code>&lambda;</code> up a hair and see which way <code>P</code> slides. That&rsquo;s the partial derivative:</p>

<pre>&part;P/&part;&lambda; = R&middot;cos&phi; &middot; (&minus;sin&lambda;,  cos&lambda;,  0)
        &rarr;  normalize  &rarr;  &Ecirc; = (&minus;sin&lambda;,  cos&lambda;,  0)</pre>

<h3>&ldquo;Which way is North?&rdquo; = increase latitude</h3>

<pre>&part;P/&part;&phi; = R &middot; (&minus;sin&phi;&middot;cos&lambda;,  &minus;sin&phi;&middot;sin&lambda;,  cos&phi;)
        &rarr;  normalize  &rarr;  N&#770; = (&minus;sin&phi;&middot;cos&lambda;,  &minus;sin&phi;&middot;sin&lambda;,  cos&phi;)</pre>

<h3>&ldquo;Which way is Up?&rdquo; = increase height (radially, on a sphere)</h3>

<pre>&part;P/&part;h  &rarr;  U&#770; = (cos&phi;&middot;cos&lambda;,  cos&phi;&middot;sin&lambda;,  sin&phi;)</pre>

<div class="callout">
  <span class="title">The whole concept in one line</span>
  <p>ENU is the three vectors &ldquo;<em>if I increase the east / north / up coordinate, which way does <code>P</code> move in real ECEF space?</em>&rdquo; &mdash; normalized. That is the <strong>Jacobian of position with respect to geographic coordinates</strong>. This is the deep reason the axes are mutually perpendicular and <strong>uniquely determined by (&phi;, &lambda;)</strong>: they are the tangent directions of a smooth surface, and a surface has exactly one tangent plane at each point. There is no free &ldquo;heading&rdquo; knob.</p>
</div>

<p>Orthonormality isn&rsquo;t an assumption here &mdash; it&rsquo;s a result you can check:</p>

<pre>&Ecirc;&middot;N&#770; = 0    &Ecirc;&middot;U&#770; = 0    N&#770;&middot;U&#770; = 0    |&Ecirc;| = |N&#770;| = |U&#770;| = 1   &#10003;</pre>

<!-- ───────────────────────── 4. UNITS ───────────────────────── -->
<h2 id="units"><span class="step">4</span>Why East and North aren&rsquo;t unit vectors (yet)</h2>

<p>Notice the sleight of hand above: the raw derivatives came with a factor out front (<code>R&middot;cos&phi;</code>, <code>R</code>) that I quietly divided away. That factor matters. The <strong>raw</strong> derivatives are <em>not</em> unit length:</p>

<pre>&part;P/&part;&lambda; = R&middot;cos&phi; &middot; (&minus;sin&lambda;, cos&lambda;, 0)   &rarr;  length = R&middot;cos&phi;   (not 1)
&part;P/&part;&phi; = R &middot; (&minus;sin&phi;cos&lambda;, &minus;sin&phi;sin&lambda;, cos&phi;) &rarr;  length = R         (not 1)
&part;P/&part;h                                       &rarr;  length = 1         (already!)</pre>

<p>Why the difference? Because <strong>longitude and latitude are <em>angles</em>, while height is already in <em>meters</em>.</strong> <code>&part;P/&part;&lambda;</code> answers &ldquo;how many meters does <code>P</code> move per radian of longitude?&rdquo; &mdash; and one radian of longitude is not a fixed distance:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 620 280" role="img" aria-label="Longitude circles shrink toward the poles">
    <ellipse cx="310" cy="140" rx="150" ry="120" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <!-- equator -->
    <ellipse cx="310" cy="140" rx="150" ry="34" fill="none" stroke="var(--at-violet)" stroke-width="2"/>
    <text x="468" y="144" fill="var(--at-violet)" font-size="12">equator: 1 rad &asymp; R</text>
    <!-- mid latitude -->
    <ellipse cx="310" cy="78" rx="104" ry="20" fill="none" stroke="var(--at-amber)" stroke-width="2"/>
    <text x="420" y="74" fill="var(--at-amber)" font-size="12">mid: 1 rad &asymp; R&middot;cos&phi;</text>
    <!-- near pole -->
    <ellipse cx="310" cy="40" rx="46" ry="9" fill="none" stroke="var(--at-green)" stroke-width="2"/>
    <text x="360" y="34" fill="var(--at-green)" font-size="12">near pole: &rarr; 0</text>
    <text x="310" y="262" fill="var(--at-faint)" font-size="12" text-anchor="middle">a circle of constant latitude has radius R&middot;cos&phi; &mdash; it shrinks to nothing at the pole</text>
  </svg>
  <p class="figure-caption">The length of &part;P/&part;&lambda; is exactly the radius of the latitude circle: <code>R&middot;cos&phi;</code>. At the equator that&rsquo;s the full <code>R</code>; near the pole it collapses to zero.</p>
</div>

<p>So to get unit vectors, you divide each raw derivative by its own length &mdash; its <strong>scale factor</strong>:</p>

<pre>&Ecirc; = (&part;P/&part;&lambda;) / (R&middot;cos&phi;) = (&minus;sin&lambda;, cos&lambda;, 0)
N&#770; = (&part;P/&part;&phi;) / R        = (&minus;sin&phi;cos&lambda;, &minus;sin&phi;sin&lambda;, cos&phi;)</pre>

<div class="callout good">
  <span class="title">This scale factor is also why Mercator maps explode near the poles</span>
  <p>That <code>cos&phi;</code> &mdash; meters per radian of longitude shrinking toward the poles &mdash; is the <em>same</em> geometric fact that makes Greenland look bigger than Africa on a Mercator projection. A map has to stretch high-latitude longitude back to a constant width, and the stretch factor is <code>1/cos&phi;</code>. Same geometry, two famous consequences: non-unit derivatives, and a distorted world map.</p>
</div>

<p>The takeaway: the vectors <em>inside</em> the matrix are always unit length (<code>&Ecirc;</code>, <code>N&#770;</code>, <code>U&#770;</code>). The &ldquo;not unit&rdquo; objects are only the raw derivatives, <em>before</em> you strip the angle-to-meters scale factor.</p>

<!-- ───────────────────────── 5. ELLIPSOID ───────────────────────── -->
<h2 id="ellipsoid"><span class="step">5</span>The ellipsoid twist: why &ldquo;Up&rdquo; misses Earth&rsquo;s center</h2>

<p>Earth isn&rsquo;t a sphere &mdash; it&rsquo;s an oblate <strong>ellipsoid</strong> (WGS84), squashed at the poles. The sphere derivation above is the right <em>idea</em>; the ellipsoid just refines two of the three axes:</p>

<ul class="clean">
  <li><strong>East</strong> is unchanged: <code>(&minus;sin&lambda;, cos&lambda;, 0)</code>. Flattening is a north&ndash;south effect; it doesn&rsquo;t touch the east direction.</li>
  <li><strong>Up</strong> = <code>&part;P/&part;h</code> = the <em>geodetic normal</em> &mdash; the direction perpendicular to the ellipsoid surface. On an ellipsoid this line <strong>does not pass through Earth&rsquo;s center</strong> (except exactly at the poles and equator).</li>
  <li><strong>North</strong> = <code>U&#770; &times; &Ecirc;</code> completes the right-handed frame (this is exactly how Cesium computes it: <code>north = cross(up, east)</code>).</li>
</ul>

<div class="figure">
  <svg class="diagram" viewBox="0 0 620 300" role="img" aria-label="Geodetic normal does not pass through the ellipsoid center">
    <ellipse cx="310" cy="150" rx="220" ry="130" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
    <circle cx="310" cy="150" r="4" fill="var(--at-text)"/>
    <text x="318" y="166" fill="var(--at-faint)" font-size="12">center</text>
    <!-- point on the ellipsoid (upper right) -->
    <circle cx="470" cy="78" r="6" fill="var(--at-text)"/>
    <text x="480" y="74" fill="var(--at-text)" font-size="13" font-weight="700">P</text>
    <!-- geocentric line (to center) -->
    <line x1="470" y1="78" x2="310" y2="150" stroke="var(--at-line)" stroke-dasharray="5"/>
    <text x="372" y="100" fill="var(--at-faint)" font-size="11">line to center</text>
    <!-- geodetic normal (Up): perpendicular to surface, steeper -->
    <line x1="470" y1="78" x2="556" y2="6" stroke="var(--at-green)" stroke-width="3" marker-end="url(#gu)"/>
    <text x="540" y="6" fill="var(--at-green)" font-size="13" font-weight="700">Up (normal)</text>
    <defs><marker id="gu" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--at-green)"/></marker></defs>
    <text x="310" y="284" fill="var(--at-faint)" font-size="12" text-anchor="middle">on an ellipsoid, &ldquo;straight up&rdquo; (surface normal) and &ldquo;toward the center&rdquo; are different lines</text>
  </svg>
  <p class="figure-caption">This is why height is &ldquo;ellipsoidal&rdquo; and why Up tilts as you move across the globe. The <code>&phi;</code> in our formulas is the <strong>geodetic</strong> latitude &mdash; the angle of the normal, not the angle from the center.</p>
</div>

<!-- ───────────────────────── 6. MATRIX ───────────────────────── -->
<h2 id="matrix"><span class="step">6</span>From frame to matrix: building eastNorthUpToFixedFrame</h2>

<p>Now connect the frame to the matrices the companion post waved at. Place a local point <code>(x, y, z)</code> &mdash; with <code>x</code>&nbsp;east, <code>y</code>&nbsp;north, <code>z</code>&nbsp;up &mdash; into ECEF. You just walk along each axis by the right amount:</p>

<pre>P_ecef = P_origin  +  x&middot;&Ecirc;  +  y&middot;N&#770;  +  z&middot;U&#770;</pre>

<p>That linear combination <em>is</em> a matrix multiply. Stack the three unit vectors as columns and you have the rotation from local to ECEF; add the origin as the translation and you have the full 4&times;4:</p>

<pre>localToEcef = eastNorthUpToFixedFrame(origin)
            = [ &Ecirc;   N&#770;   U&#770; | P_origin ]
                &#9586;___________&#9586;   &#9586;________&#9586;
                 rotation         translation</pre>

<div class="callout good">
  <span class="title">The punchline</span>
  <p>The inverse of this matrix &mdash; ECEF&nbsp;&rarr;&nbsp;local &mdash; is exactly the <code>ecefToUsdTransform</code> from the previous post. So <code>M_ecefToUsd</code> was never a mystery: <strong>it is the ENU frame at the origin, run backwards.</strong></p>
</div>

<!-- ───────────────────────── 7. DISSECT ───────────────────────── -->
<h2 id="dissect"><span class="step">7</span>Dissecting a real ecefToUsdTransform</h2>

<p>Here is an actual <code>cesium:ecefToUsdTransform</code> pulled from a georeferenced stage (USD row-vector convention, <code>metersPerUnit&nbsp;=&nbsp;1</code>, so it&rsquo;s a rigid rotation + translation &mdash; every row and column has length&nbsp;1):</p>

<pre>(  0.13811930   &minus;0.52796026    0.83796242    0 )
(  0.99041560    0.07362718   &minus;0.11685881    0 )
(  0            0.84607151     0.53306941    0 )
(  0        19277.207     &minus;6372589.806      1 )</pre>

<p>Read the three columns of the 3&times;3 block straight down and the frame stares back at you:</p>

<table>
  <tr><th>Column</th><th>Vector</th><th>Is</th></tr>
  <tr><td>0</td><td><code>(0.13812, 0.99042, 0)</code></td><td><span class="tag blue">&Ecirc; &mdash; East</span></td></tr>
  <tr><td>1</td><td><code>(&minus;0.52796, 0.07363, 0.84607)</code></td><td><span class="tag bad">N&#770; &mdash; North</span></td></tr>
  <tr><td>2</td><td><code>(0.83796, &minus;0.11686, 0.53307)</code></td><td><span class="tag good">U&#770; &mdash; Up</span></td></tr>
  <tr><td>row 4</td><td><code>(0, 19277.2, &minus;6372589.8)</code></td><td><span class="tag muted">translation</span></td></tr>
</table>

<p>And geometrically, applying it to any ECEF point <code>P_ecef &middot; M</code> does two things:</p>

<pre>1. subtract the origin            (move origin to stage 0)
2. project onto the three axes:
     x_stage = (P_ecef &minus; origin) &middot; &Ecirc;     &larr; meters EAST of origin
     y_stage = (P_ecef &minus; origin) &middot; N&#770;     &larr; meters NORTH of origin
     z_stage = (P_ecef &minus; origin) &middot; U&#770;     &larr; meters UP from origin</pre>

<p>So a stage coordinate is literally &ldquo;how many meters you are East / North / Up from the origin.&rdquo; That&rsquo;s the entire content of a flat local coordinate. The translation row works out to <code>&minus;(origin&middot;&Ecirc;, origin&middot;N&#770;, origin&middot;U&#770;)</code> &mdash; exactly the offset that lands the origin point on <code>(0,0,0)</code>.</p>

<div class="callout">
  <span class="title">Why the inverse is just the transpose</span>
  <p>Because the rotation is <strong>rigid</strong> (orthonormal columns), inverting it is the same as transposing it. That&rsquo;s why the ENU vectors, which sit as <em>columns</em> in <code>eastNorthUpToFixedFrame</code>, reappear as the <em>columns</em> here under USD&rsquo;s row-vector convention. The georeference&rsquo;s entire &ldquo;magic&rdquo; is one ENU matrix and its transpose.</p>
</div>

<!-- ───────────────────────── 8. ORIGIN ───────────────────────── -->
<h2 id="origin"><span class="step">8</span>Why stage (0,0,0) is always the georeference origin</h2>

<p>A neat consequence falls out for free. Feed <code>(0,0,0)</code> through <code>localToEcef</code>:</p>

<pre>local (0,0,0) &middot; [ &Ecirc; N&#770; U&#770; | P_origin ]  =  P_origin
              (the rotation part multiplies by zero and vanishes)</pre>

<p>The zero vector picks up nothing from the rotation columns &mdash; it lands precisely on the translation, which <em>is</em> the origin. So:</p>

<pre>stage (0,0,0)  &rarr;  origin_ecef  &rarr;  georeferenceOrigin (lat/lon/h)</pre>

<div class="callout">
  <span class="title">It&rsquo;s a definition, not a coincidence</span>
  <p><code>cesium:georeferenceOrigin</code> <em>is</em> &ldquo;the globe coordinate that stage <code>(0,0,0)</code> maps to.&rdquo; Note the <code>CesiumGeoreference</code> prim itself has no meaningful transform &mdash; it&rsquo;s a data container; where you park it in the hierarchy is irrelevant. Change the origin attribute and <code>(0,0,0)</code> now maps to a <em>new</em> spot on Earth, so the <strong>entire stage slides</strong> with it. But the <code>(0,0,0) &harr; origin</code> tie never breaks.</p>
</div>

<!-- ───────────────────────── 9. ROTATE ───────────────────────── -->
<h2 id="rotate"><span class="step">9</span>ENU shows you North &mdash; it can&rsquo;t rotate a crooked model</h2>

<p>A natural hope: &ldquo;my model was authored with North along <code>+X</code> instead of <code>+Y</code> &mdash; can&rsquo;t the ENU vectors just rotate it straight?&rdquo; Short answer: <strong>no, not by themselves.</strong></p>

<p>Cesium hard-codes the convention <code>stage&nbsp;X&nbsp;=&nbsp;East</code>, <code>Y&nbsp;=&nbsp;North</code>, <code>Z&nbsp;=&nbsp;Up</code> &mdash; there is no &ldquo;heading&rdquo; dial on the georeference. So <code>&Ecirc;</code> and <code>N&#770;</code> tell you <em>where</em> East and North point (the <strong>target</strong>). They cannot tell you <em>how far your model is currently twisted</em> (the <strong>source</strong>) &mdash; that information simply isn&rsquo;t in them.</p>

<table>
  <tr><th>To rotate correctly you need&hellip;</th><th>Do E, N provide it?</th></tr>
  <tr><td>Target: which way are North / East?</td><td><span class="tag good">Yes</span> &mdash; that&rsquo;s exactly stage <code>+X / +Y</code> after georeferencing.</td></tr>
  <tr><td>Source: how far is the model turned?</td><td><span class="tag bad">No</span> &mdash; must be measured.</td></tr>
</table>

<p>You need <em>both halves</em> to get an angle. The missing half &mdash; where the model currently faces &mdash; comes from <strong>control points</strong>: pairs of (stage point &harr; real-world point). With two or more, a 2D rigid fit recovers the rotation:</p>

<pre>find &theta; such that:  stage_XY  &mdash;&mdash;rotate &theta;&mdash;&mdash;&rarr;  matches (East, North) of the real points
&rarr; rotate the site prim about Z by &theta;</pre>

<div class="callout warn">
  <span class="title">One control point is never enough to orient</span>
  <p>A single point gives you <em>position</em> (translation) only &mdash; no heading. You need <strong>&ge;2</strong> points, because two points form a direction vector you can compare against North/East. (Contrast the georeference itself: a single origin <em>is</em> enough to lock the ENU frame, because ENU is a fixed rule of geometry. The model&rsquo;s twist <em>relative</em> to ENU is the extra unknown that needs two points.) If you already know the offset &mdash; say <code>+X</code> is North, so you&rsquo;re off by 90&deg; &mdash; just author an <code>xformOp:rotate</code> about Z and skip the fitting entirely.</p>
</div>

<!-- ───────────────────────── 10. TWO ───────────────────────── -->
<h2 id="two"><span class="step">10</span>Two georeferences, one stage: why binding becomes mandatory</h2>

<p>Now suppose a stage has two georeferences, one per site. Do both pin stage <code>(0,0,0)</code> to <em>their own</em> origin? <strong>Yes &mdash; and that&rsquo;s the catch.</strong> Each georeference independently builds <code>localToEcef = ENU(its own origin)</code>, whose translation is its own origin:</p>

<pre>stage (0,0,0)  &mdash;georef 1&mdash;&rarr;  origin&#8321;   (lat/lon/h of georef 1)
stage (0,0,0)  &mdash;georef 2&mdash;&rarr;  origin&#8322;   (lat/lon/h of georef 2)</pre>

<p>The same stage point is anchored to two different places on Earth. So a prim&rsquo;s actual globe position now depends on <em>which georeference it resolves against</em> &mdash; and that choice is exactly what <code>cesium:georeferenceBinding</code> (for tilesets) and <code>cesium:anchor:georeferenceBinding</code> (for anchors) select.</p>

<div class="callout bad">
  <span class="title">The trap: two worlds piled on the origin</span>
  <p>Because each georeference places <em>its</em> globe at stage <code>(0,0,0)</code>, the tiles of georef&nbsp;1 and the tiles of georef&nbsp;2 both center on stage zero &mdash; they <strong>overlap</strong>, no matter where you place the two sites in the stage. Two georeferences only make sense as <em>separate contexts you switch between</em> (view one site at a time), not as two worlds rendered together.</p>
</div>

<table>
  <tr><th></th><th>1 georeference</th><th>2 georeferences</th></tr>
  <tr><td>stage (0,0,0) maps to</td><td>one origin</td><td>both origins (one each)</td></tr>
  <tr><td>binding</td><td><span class="tag muted">optional</span> (the only choice)</td><td><span class="tag warn">mandatory</span> (which map?)</td></tr>
  <tr><td>render together</td><td><span class="tag good">fine</span></td><td><span class="tag bad">conflict</span> (globes overlap at origin)</td></tr>
</table>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2><span class="step">&#8718;</span>TL;DR</h2>

<ul class="clean">
  <li><strong>ENU = the normalized Jacobian of position.</strong> &ldquo;Increase east / north / up coordinate &rarr; which way does <code>P</code> move in ECEF?&rdquo; The axes are orthonormal and unique because they&rsquo;re the tangent directions of a surface.</li>
  <li>The <strong>raw</strong> derivatives aren&rsquo;t unit length &mdash; longitude and latitude are angles, so they carry scale factors <code>R&middot;cos&phi;</code> and <code>R</code>. Divide them out to get unit <code>&Ecirc;, N&#770;</code>. (Same <code>cos&phi;</code> that distorts Mercator.)</li>
  <li>On the WGS84 <strong>ellipsoid</strong>, Up is the surface normal &mdash; it doesn&rsquo;t pass through the center, which is why height is &ldquo;ellipsoidal.&rdquo;</li>
  <li><code>eastNorthUpToFixedFrame</code> = <code>[&Ecirc; N&#770; U&#770; | origin]</code>; its inverse is <code>ecefToUsdTransform</code>. Stage coords = meters East/North/Up from the origin.</li>
  <li>Stage <code>(0,0,0)</code> <em>is</em> the georeference origin, by definition. Change the origin &rarr; the whole stage slides.</li>
  <li>ENU gives the <strong>target</strong> directions, not your model&rsquo;s current twist &mdash; orienting a crooked model needs <strong>&ge;2 control points</strong>. Two georeferences both claim <code>(0,0,0)</code>, so binding becomes mandatory and they can&rsquo;t share a render.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Cesium 101 · June 2026</p>
  <p style="margin-top:8px"><a href="/posts/cesium-georeference-first-principles">&#9664; Companion → Translate, Georeference, GlobeAnchor, Binding</a></p>
</div>
`;

export const script = ``;
