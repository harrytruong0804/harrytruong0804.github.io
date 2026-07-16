export const styles = `
.artifact-scope .wrap {
    font-family: var(--at-font-body);
    color: var(--at-text);
    font-size: 1.12rem;
    line-height: 1.72;
    max-width: 46rem;
    margin: 0 auto;
  }
.artifact-scope .wrap p { margin: 1.1rem 0; }
.artifact-scope .wrap strong { color: var(--at-text); font-weight: 600; }
.artifact-scope .wrap code {
    font-family: var(--at-font-mono);
    font-size: 0.88em;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    border-radius: 4px;
    padding: 0.05rem 0.35rem;
  }
.artifact-scope .kicker {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--at-accent);
    margin: 3.4rem 0 0.4rem;
  }
.artifact-scope h1,
.artifact-scope h2 {
    font-family: var(--at-font-display);
    font-weight: 600;
    font-size: 1.72rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0.2rem 0 1.1rem;
  }
.artifact-scope .lede {
    font-size: 1.28rem;
    line-height: 1.6;
    color: var(--at-muted);
    margin: 0.6rem 0 2rem;
  }
.artifact-scope .lede em { color: var(--at-accent); font-style: normal; }
.artifact-scope figure {
    margin: 1.9rem 0;
    padding: 1.5rem;
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 10px;
  }
.artifact-scope figcaption {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    color: var(--at-faint);
    margin-top: 1.1rem;
    text-align: center;
    letter-spacing: 0.02em;
    line-height: 1.5;
  }
.artifact-scope svg { display: block; width: 100%; height: auto; }
.artifact-scope .mono { font-family: var(--at-font-mono); }
.artifact-scope .formula {
    text-align: center;
    font-family: var(--at-font-mono);
    font-size: 1rem;
    color: var(--at-text);
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    border-radius: 8px;
    padding: 0.8rem;
    margin: 1.1rem 0 0;
  }
.artifact-scope .formula b { color: var(--at-accent); }
.artifact-scope .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .two { grid-template-columns: 1fr; }
}
.artifact-scope .panel-h {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--at-faint);
    text-align: center;
    margin-bottom: 0.5rem;
  }
.artifact-scope /* USD aside */
  .aside {
    margin: 1.9rem 0;
    padding: 1.1rem 1.3rem;
    border-left: 3px solid var(--at-violet);
    background: var(--at-violet-soft);
    border-radius: 0 8px 8px 0;
    font-size: 1rem;
    line-height: 1.6;
  }
.artifact-scope .aside .h {
    font-family: var(--at-font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--at-violet);
    margin-bottom: 0.4rem;
  }
.artifact-scope .aside code { background: transparent; border: none; padding: 0; color: var(--at-text); }
.artifact-scope .rule { border: none; border-top: 1px solid var(--at-line); margin: 2.6rem 0; }
.artifact-scope .close { font-size: 1.18rem; line-height: 1.62; color: var(--at-muted); }
.artifact-scope .close b { color: var(--at-text); }
.artifact-scope .close .hl { color: var(--at-accent); }
`;

export const html = `
<div class="wrap">

  <p class="kicker">Graphics</p>
  <h1>Normals: How a Face Catches the Light</h1>
  <p class="lede">A mesh is just flat triangles. What tells each one which way it faces &mdash; and therefore how bright it should be &mdash; is a single arrow per face: the <em>normal</em>.</p>

  <p>Load a 3D model and you get a <strong>prim</strong> made of <strong>faces</strong>: flat polygons (triangles, once the GPU is done) stitched into a surface. Geometry alone is colorless. The moment you add a light, the renderer needs to know, for every face, one thing: <strong>which direction is it pointing?</strong> That direction is the normal &mdash; a unit-length vector standing straight out of the surface.</p>

  <figure>
    <svg viewBox="0 0 640 220" role="img" aria-label="A flat quad with a unit arrow standing perpendicular to it, labelled N, the normal.">
      <!-- ground plane hint -->
      <polygon points="180,170 460,170 520,110 240,110" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.4"/>
      <!-- normal arrow -->
      <line x1="350" y1="140" x2="350" y2="46" stroke="var(--at-accent)" stroke-width="2.4" marker-end="url(#tip)"/>
      <!-- right-angle marker -->
      <path d="M350 140 L368 140 L368 122" fill="none" stroke="var(--at-faint)" stroke-width="1.2"/>
      <circle cx="350" cy="140" r="3.2" fill="var(--at-accent)"/>
      <text x="362" y="70" font-family="var(--at-font-mono)" font-size="15" fill="var(--at-accent)">N</text>
      <text x="362" y="88" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-muted)">the normal</text>
      <text x="255" y="150" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)">a face</text>
      <text x="384" y="134" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)">90&deg;</text>
      <defs>
        <marker id="tip" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/>
        </marker>
      </defs>
    </svg>
    <figcaption>The normal: length 1, perpendicular to the face, pointing &ldquo;out.&rdquo;</figcaption>
  </figure>

  <p class="kicker">Where it comes from</p>
  <h2>A face defines its own normal</h2>

  <p>You don&rsquo;t store a random arrow &mdash; the face&rsquo;s own vertices produce it. Take two edges of a triangle as vectors and cross them; the result points perpendicular to both, i.e. straight out of the face. Normalize it to length 1 and you have the normal.</p>

  <figure>
    <svg viewBox="0 0 640 240" role="img" aria-label="A triangle with vertices v0, v1, v2 wound counter-clockwise; two edge vectors and their cross product forming the normal.">
      <!-- triangle -->
      <polygon points="150,190 470,190 300,70" fill="var(--at-inset)" stroke="var(--at-line-strong)" stroke-width="1.5"/>
      <!-- edge vectors -->
      <line x1="150" y1="190" x2="470" y2="190" stroke="var(--at-blue)" stroke-width="2.2" marker-end="url(#tipb)"/>
      <line x1="150" y1="190" x2="300" y2="70" stroke="var(--at-green)" stroke-width="2.2" marker-end="url(#tipg)"/>
      <!-- normal (out of plane, drawn up) -->
      <line x1="307" y1="150" x2="307" y2="40" stroke="var(--at-accent)" stroke-width="2.4" marker-end="url(#tipa)"/>
      <!-- vertices -->
      <g font-family="var(--at-font-mono)" font-size="12">
        <circle cx="150" cy="190" r="4" fill="var(--at-text)"/><text x="128" y="208" fill="var(--at-text)">v0</text>
        <circle cx="470" cy="190" r="4" fill="var(--at-text)"/><text x="474" y="208" fill="var(--at-text)">v1</text>
        <circle cx="300" cy="70" r="4" fill="var(--at-text)"/><text x="304" y="64" fill="var(--at-text)">v2</text>
      </g>
      <text x="315" y="150" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-blue)">e1 = v1&minus;v0</text>
      <text x="180" y="120" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">e2 = v2&minus;v0</text>
      <text x="318" y="52" font-family="var(--at-font-mono)" font-size="14" fill="var(--at-accent)">N = e1 &times; e2</text>
      <!-- winding hint -->
      <path d="M300 150 a34 34 0 1 0 0.1 0" fill="none" stroke="var(--at-faint)" stroke-width="1.2" marker-end="url(#tipf)"/>
      <text x="270" y="228" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)">wound counter-clockwise &rarr; N faces you</text>
      <defs>
        <marker id="tipb" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-blue)"/></marker>
        <marker id="tipg" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-green)"/></marker>
        <marker id="tipa" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/></marker>
        <marker id="tipf" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L6 4 L0 8 z" fill="var(--at-faint)"/></marker>
      </defs>
    </svg>
    <div class="formula">N = normalize( (v1 &minus; v0) <b>&times;</b> (v2 &minus; v0) )</div>
    <figcaption>Vertex <em>winding</em> picks the sign: reverse the order and N flips to the other side.</figcaption>
  </figure>

  <div class="aside">
    <div class="h">In a USD mesh prim</div>
    A <code>Mesh</code> stores this explicitly: <code>faceVertexIndices</code> defines each face&rsquo;s winding, a <code>normals</code> primvar can carry the vectors directly, and the <code>orientation</code> attribute (<code>rightHanded</code> / <code>leftHanded</code>) decides which winding counts as front. Same three ideas &mdash; faces, normals, sign.
  </div>

  <p class="kicker">The one job</p>
  <h2>Lighting is a dot product</h2>

  <p>Here is what the normal is <em>for</em>. The most basic shading model &mdash; diffuse, or Lambert &mdash; says a surface&rsquo;s brightness is the <strong>dot product of its normal with the direction to the light</strong>, clamped so it never goes negative. Nothing more.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="A tilted surface with its normal N and a direction L to the light; the angle theta between them sets the brightness.">
      <!-- sun -->
      <circle cx="110" cy="60" r="20" fill="var(--at-amber)" fill-opacity="0.9"/>
      <g stroke="var(--at-amber)" stroke-width="2">
        <line x1="110" y1="26" x2="110" y2="12"/><line x1="110" y1="94" x2="110" y2="108"/>
        <line x1="76" y1="60" x2="62" y2="60"/><line x1="144" y1="60" x2="158" y2="60"/>
        <line x1="86" y1="36" x2="76" y2="26"/><line x1="134" y1="84" x2="144" y2="94"/>
      </g>
      <text x="92" y="128" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-amber)">light</text>
      <!-- surface patch -->
      <polygon points="330,210 520,210 560,150 370,150" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.5"/>
      <!-- point -->
      <circle cx="445" cy="180" r="3.6" fill="var(--at-text)"/>
      <!-- normal -->
      <line x1="445" y1="180" x2="470" y2="80" stroke="var(--at-accent)" stroke-width="2.4" marker-end="url(#t2a)"/>
      <text x="474" y="80" font-family="var(--at-font-mono)" font-size="14" fill="var(--at-accent)">N</text>
      <!-- L to light -->
      <line x1="445" y1="180" x2="150" y2="74" stroke="var(--at-blue)" stroke-width="2.2" marker-end="url(#t2b)"/>
      <text x="250" y="112" font-family="var(--at-font-mono)" font-size="14" fill="var(--at-blue)">L</text>
      <!-- theta arc -->
      <path d="M424 98 a86 86 0 0 0 -34 22" fill="none" stroke="var(--at-faint)" stroke-width="1.3"/>
      <text x="392" y="104" font-family="var(--at-font-mono)" font-size="13" fill="var(--at-faint)">&theta;</text>
      <defs>
        <marker id="t2a" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/></marker>
        <marker id="t2b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-blue)"/></marker>
      </defs>
    </svg>
    <div class="formula">brightness = max( 0, <b>N &middot; L</b> ) = max( 0, cos&thinsp;&theta; )</div>
    <figcaption>Both are unit vectors, so their dot product <em>is</em> cos&thinsp;&theta; &mdash; the cosine of the angle between the face and the light.</figcaption>
  </figure>

  <p>That one formula explains everything you see. Turn the face to look straight at the light and <code>&theta; = 0</code>, <code>cos&thinsp;&theta; = 1</code> &mdash; full brightness. Turn it edge-on and the light grazes it: dim. Turn it past 90&deg; and <code>N &middot; L</code> goes negative &mdash; the face is looking away from the light, so it gets clamped to <strong>zero: black</strong>.</p>

  <figure>
    <svg viewBox="0 0 640 200" role="img" aria-label="Three faces at increasing tilt to an overhead light, growing darker as N dot L drops from 1 to 0.5 to 0.">
      <g stroke-width="2">
        <!-- face A: facing light -->
        <rect x="60" y="70" width="120" height="70" rx="4" fill="var(--at-amber)" fill-opacity="0.85" stroke="var(--at-amber)"/>
        <line x1="120" y1="70" x2="120" y2="28" stroke="var(--at-accent)" stroke-width="2.2" marker-end="url(#t3)"/>
        <!-- face B: tilted -->
        <g transform="rotate(-38 320 105)">
          <rect x="260" y="70" width="120" height="70" rx="4" fill="var(--at-amber)" fill-opacity="0.42" stroke="var(--at-amber)"/>
          <line x1="320" y1="70" x2="320" y2="28" stroke="var(--at-accent)" stroke-width="2.2" marker-end="url(#t3)"/>
        </g>
        <!-- face C: facing away -->
        <g transform="rotate(-74 520 105)">
          <rect x="460" y="70" width="120" height="70" rx="4" fill="var(--at-text)" fill-opacity="0.06" stroke="var(--at-line-strong)"/>
          <line x1="520" y1="70" x2="520" y2="28" stroke="var(--at-accent)" stroke-width="2.2" marker-end="url(#t3)"/>
        </g>
      </g>
      <g font-family="var(--at-font-mono)" font-size="11" text-anchor="middle">
        <text x="120" y="172" fill="var(--at-amber)">N&middot;L = 1.0</text>
        <text x="320" y="172" fill="var(--at-muted)">N&middot;L = 0.5</text>
        <text x="520" y="172" fill="var(--at-faint)">N&middot;L = 0</text>
        <text x="120" y="190" fill="var(--at-faint)">bright</text>
        <text x="320" y="190" fill="var(--at-faint)">dim</text>
        <text x="520" y="190" fill="var(--at-faint)">black</text>
      </g>
      <defs>
        <marker id="t3" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/></marker>
      </defs>
    </svg>
    <figcaption>Same light, same size &mdash; only the normal turns. Brightness follows the cosine straight down to zero.</figcaption>
  </figure>

  <p class="kicker">One arrow, or many</p>
  <h2>Face normals vs vertex normals</h2>

  <p>Give each face a single normal and every triangle shades as one flat tone &mdash; you see the facets. Instead, store a normal at each <em>vertex</em> (usually the average of the faces meeting there) and let the GPU blend them across the triangle. The geometry is identical; the shading goes smooth.</p>

  <figure>
    <div class="two">
      <div>
        <div class="panel-h">Face normals &rarr; faceted</div>
        <svg viewBox="0 0 300 200" role="img" aria-label="A low-poly curved ridge shaded in flat bands, one normal per facet.">
          <polygon points="30,175 78,120 30,175" fill="none"/>
          <polygon points="30,175 78,120 78,190 30,190" fill="var(--at-amber)" fill-opacity="0.82" stroke="var(--at-line)"/>
          <polygon points="78,120 126,90 126,190 78,190" fill="var(--at-amber)" fill-opacity="0.6" stroke="var(--at-line)"/>
          <polygon points="126,90 174,90 174,190 126,190" fill="var(--at-amber)" fill-opacity="0.42" stroke="var(--at-line)"/>
          <polygon points="174,90 222,120 222,190 174,190" fill="var(--at-amber)" fill-opacity="0.28" stroke="var(--at-line)"/>
          <polygon points="222,120 270,175 270,190 222,190" fill="var(--at-amber)" fill-opacity="0.16" stroke="var(--at-line)"/>
          <!-- per-facet normals -->
          <g stroke="var(--at-accent)" stroke-width="1.8">
            <line x1="54" y1="147" x2="40" y2="119" marker-end="url(#tn)"/>
            <line x1="102" y1="105" x2="96" y2="74" marker-end="url(#tn)"/>
            <line x1="150" y1="90" x2="150" y2="58" marker-end="url(#tn)"/>
            <line x1="198" y1="105" x2="204" y2="74" marker-end="url(#tn)"/>
            <line x1="246" y1="147" x2="260" y2="119" marker-end="url(#tn)"/>
          </g>
        </svg>
      </div>
      <div>
        <div class="panel-h">Vertex normals &rarr; smooth</div>
        <svg viewBox="0 0 300 200" role="img" aria-label="The same ridge silhouette filled with a smooth gradient, one averaged normal per vertex.">
          <defs>
            <linearGradient id="sm" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="var(--at-amber)" stop-opacity="0.85"/>
              <stop offset="1" stop-color="var(--at-amber)" stop-opacity="0.12"/>
            </linearGradient>
            <marker id="tn" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/></marker>
          </defs>
          <polygon points="30,175 78,120 126,90 174,90 222,120 270,175 270,190 30,190" fill="url(#sm)" stroke="var(--at-line)"/>
          <!-- per-vertex normals, fanning smoothly -->
          <g stroke="var(--at-accent)" stroke-width="1.8">
            <line x1="30" y1="175" x2="10" y2="152" marker-end="url(#tn)"/>
            <line x1="78" y1="120" x2="66" y2="88" marker-end="url(#tn)"/>
            <line x1="126" y1="90" x2="120" y2="56" marker-end="url(#tn)"/>
            <line x1="174" y1="90" x2="180" y2="56" marker-end="url(#tn)"/>
            <line x1="222" y1="120" x2="234" y2="88" marker-end="url(#tn)"/>
            <line x1="270" y1="175" x2="290" y2="152" marker-end="url(#tn)"/>
          </g>
        </svg>
      </div>
    </div>
    <figcaption>Identical triangles. One normal per face gives hard bands; averaged normals per vertex interpolate into a smooth curve &mdash; the trick that lets coarse meshes look round.</figcaption>
  </figure>

  <p class="kicker">When it points wrong</p>
  <h2>A flipped normal is a black hole</h2>

  <p>Because shading hinges on the sign of <code>N &middot; L</code>, a normal aimed the <em>wrong</em> way &mdash; inward, from a reversed winding or a bad export &mdash; makes an otherwise lit face render black or vanish. The same sign test powers <strong>backface culling</strong>: the GPU compares the normal against the view direction and simply throws away triangles that face away, so it never shades the inside of a solid.</p>

  <figure>
    <svg viewBox="0 0 640 170" role="img" aria-label="Two identical faces: one with an outward normal is lit, one with an inward normal renders black.">
      <!-- lit -->
      <rect x="90" y="55" width="150" height="70" rx="5" fill="var(--at-amber)" fill-opacity="0.8" stroke="var(--at-amber)" stroke-width="1.6"/>
      <line x1="165" y1="55" x2="165" y2="20" stroke="var(--at-accent)" stroke-width="2.2" marker-end="url(#t4)"/>
      <text x="165" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-amber)">N out &rarr; lit</text>
      <!-- black -->
      <rect x="400" y="55" width="150" height="70" rx="5" fill="var(--at-text)" fill-opacity="0.07" stroke="var(--at-line-strong)" stroke-width="1.6"/>
      <line x1="475" y1="90" x2="475" y2="125" stroke="var(--at-accent)" stroke-width="2.2" marker-end="url(#t4)"/>
      <text x="475" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-faint)">N in &rarr; black</text>
      <defs>
        <marker id="t4" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-accent)"/></marker>
      </defs>
    </svg>
    <figcaption>Same geometry, opposite normal. The vector&rsquo;s <em>direction</em> is load-bearing, not just its presence.</figcaption>
  </figure>

  <hr class="rule">

  <p class="close">A normal is the smallest piece of data on a surface &mdash; one arrow per face or per vertex &mdash; doing an outsized job. It&rsquo;s <b>how flat triangles catch light</b>, how a low-poly cage pretends to be round, and how the GPU decides what to skip. Get its <span class="hl">direction</span> right and geometry comes alive; get it backwards and your model turns inside-out and dark.</p>

</div>
`;

export const script = `

`;
