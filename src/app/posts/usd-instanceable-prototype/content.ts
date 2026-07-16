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
.artifact-scope .wrap a.xref { color: var(--at-accent); text-decoration: underline; text-underline-offset: 2px; }
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
    margin: 3.2rem 0 0.4rem;
  }
.artifact-scope h1,
.artifact-scope h2 {
    font-family: var(--at-font-display);
    font-weight: 600;
    font-size: 1.68rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0.2rem 0 1rem;
  }
.artifact-scope .lede {
    font-size: 1.28rem;
    line-height: 1.6;
    color: var(--at-muted);
    margin: 0.6rem 0 1.4rem;
  }
.artifact-scope .lede em { color: var(--at-accent); font-style: normal; }
.artifact-scope figure {
    margin: 1.7rem 0;
    padding: 1.4rem;
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 10px;
  }
.artifact-scope figcaption {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    color: var(--at-faint);
    margin-top: 1rem;
    text-align: center;
    letter-spacing: 0.02em;
    line-height: 1.5;
  }
.artifact-scope svg { display: block; width: 100%; height: auto; }
.artifact-scope /* what-each-holds two columns */
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .two { grid-template-columns: 1fr; }
}
.artifact-scope .card {
    padding: 1rem 1.1rem;
    border-radius: 8px;
    background: var(--at-inset);
    border: 1px solid var(--at-line);
  }
.artifact-scope .card.inst { border-top: 3px solid var(--at-blue); }
.artifact-scope .card.proto { border-top: 3px solid var(--at-violet); }
.artifact-scope .card .h {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }
.artifact-scope .card.inst .h { color: var(--at-blue); }
.artifact-scope .card.proto .h { color: var(--at-violet); }
.artifact-scope .card ul { list-style: none; margin: 0; padding: 0; }
.artifact-scope .card li {
    font-size: 0.96rem;
    line-height: 1.5;
    padding: 0.22rem 0 0.22rem 1.1rem;
    position: relative;
  }
.artifact-scope .card li::before { content: "+"; position: absolute; left: 0; font-family: var(--at-font-mono); }
.artifact-scope .card.inst li::before { color: var(--at-blue); }
.artifact-scope .card.proto li::before { color: var(--at-violet); }
.artifact-scope .card .note {
    margin-top: 0.7rem; padding-top: 0.6rem; border-top: 1px dashed var(--at-line);
    font-size: 0.86rem; color: var(--at-muted);
  }
.artifact-scope .card .mono { font-family: var(--at-font-mono); font-size: 0.8rem; color: var(--at-faint); }
.artifact-scope .catch {
    margin: 1.7rem 0;
    padding: 1rem 1.2rem;
    border-left: 3px solid var(--at-amber);
    background: var(--at-amber-soft);
    border-radius: 0 8px 8px 0;
    font-size: 1rem;
    line-height: 1.55;
  }
.artifact-scope .catch .h {
    font-family: var(--at-font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--at-amber);
    margin-bottom: 0.35rem;
  }
.artifact-scope .rule { border: none; border-top: 1px solid var(--at-line); margin: 2.4rem 0; }
.artifact-scope .close { font-size: 1.16rem; line-height: 1.6; color: var(--at-muted); }
.artifact-scope .close b { color: var(--at-text); }
.artifact-scope .close .hl { color: var(--at-accent); }
`;

export const html = `
<div class="wrap">

  <p class="kicker">USD</p>
  <h1>Instanceable &amp; Prototype: Store the Mesh Once</h1>
  <p class="lede">Flag a prim <code>instanceable</code> and USD splits it in two: the heavy geometry moves into a shared <em>prototype</em>, stored once, and every copy &mdash; each <em>instance</em> &mdash; keeps almost nothing but its own transform. A thousand copies, one mesh in memory.</p>

  <p>The whole idea is one move: <strong>separate what&rsquo;s unique from what&rsquo;s shared.</strong> A thousand chairs are the same mesh in a thousand places. So store the mesh once and store only the placement &mdash; a transform &mdash; a thousand times.</p>

  <figure>
    <svg viewBox="0 0 640 250" role="img" aria-label="Four instances, each just a name and transform, all pointing at one shared prototype that holds the mesh.">
      <!-- instances -->
      <g font-family="var(--at-font-mono)" font-size="10.5">
        <g>
          <rect x="30" y="26" width="200" height="40" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
          <text x="44" y="43" fill="var(--at-text)">Chair_01</text>
          <text x="44" y="58" fill="var(--at-blue)">xform (2, 0, 5)</text>
        </g>
        <g>
          <rect x="30" y="76" width="200" height="40" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
          <text x="44" y="93" fill="var(--at-text)">Chair_02</text>
          <text x="44" y="108" fill="var(--at-blue)">xform (6, 0, 5)</text>
        </g>
        <g>
          <rect x="30" y="126" width="200" height="40" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
          <text x="44" y="143" fill="var(--at-text)">Chair_03</text>
          <text x="44" y="158" fill="var(--at-blue)">xform (2, 0, 9)</text>
        </g>
        <g>
          <rect x="30" y="176" width="200" height="40" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.3"/>
          <text x="44" y="193" fill="var(--at-text)">Chair_04</text>
          <text x="44" y="208" fill="var(--at-blue)">xform (6, 0, 9)</text>
        </g>
      </g>
      <text x="130" y="236" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-blue)">instances &mdash; one transform each</text>
      <!-- arrows to prototype -->
      <g stroke="var(--at-line-strong)" stroke-width="1.4" fill="none">
        <line x1="230" y1="46" x2="406" y2="104" marker-end="url(#a)"/>
        <line x1="230" y1="96" x2="406" y2="116" marker-end="url(#a)"/>
        <line x1="230" y1="146" x2="406" y2="128" marker-end="url(#a)"/>
        <line x1="230" y1="196" x2="406" y2="140" marker-end="url(#a)"/>
      </g>
      <!-- prototype -->
      <rect x="410" y="60" width="200" height="128" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.6"/>
      <text x="510" y="82" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-violet)">PROTOTYPE</text>
      <g font-family="var(--at-font-mono)" font-size="10" fill="var(--at-muted)">
        <text x="428" y="106">Mesh</text>
        <text x="440" y="122">points</text>
        <text x="440" y="138">faceVertexIndices</text>
        <text x="440" y="154">normals</text>
        <text x="428" y="172">Material</text>
      </g>
      <text x="510" y="236" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-violet)">prototype &mdash; the mesh, once</text>
      <defs>
        <marker id="a" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-line-strong)"/></marker>
      </defs>
    </svg>
    <figcaption>USD auto-generates one prototype per unique referenced asset; every matching instance points at it.</figcaption>
  </figure>

  <p class="kicker">What each holds</p>
  <h2>Placement here, payload there</h2>

  <figure>
    <div class="two">
      <div class="card inst">
        <div class="h">The instance holds</div>
        <ul>
          <li>transform (translate / rotate / scale)</li>
          <li>visibility, activation</li>
          <li>its name / path in the stage</li>
          <li>a material binding on its root</li>
        </ul>
        <p class="note">The per-copy &ldquo;where and how it&rsquo;s placed.&rdquo; <strong>No geometry.</strong></p>
      </div>
      <div class="card proto">
        <div class="h">The prototype holds</div>
        <ul>
          <li>the whole subtree of child prims</li>
          <li>meshes: points, faces, normals</li>
          <li>materials, shaders, textures</li>
          <li>everything heavy &mdash; one copy</li>
        </ul>
        <p class="note">Auto-built &amp; shared. Reach it with <span class="mono">prim.GetPrototype()</span>.</p>
      </div>
    </div>
    <figcaption>The instance is a lightweight pointer + transform; the prototype is the shared content it points to.</figcaption>
  </figure>

  <p class="kicker">Why do it</p>
  <h2>N copies, the cost of one</h2>

  <p>Because the geometry lives in a single prototype, a scene of ten thousand chairs holds <strong>one</strong> mesh in memory, not ten thousand &mdash; plus ten thousand tiny transforms.</p>

  <figure>
    <svg viewBox="0 0 640 200" role="img" aria-label="Memory comparison: without instancing, N full geometry blocks; with instancing, one geometry block plus N small transforms.">
      <!-- without -->
      <text x="30" y="30" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-faint)">WITHOUT &mdash; N &times; geometry</text>
      <g>
        <rect x="30" y="44" width="270" height="30" rx="4" fill="var(--at-violet-soft)" stroke="var(--at-violet)"/>
        <rect x="304" y="44" width="1" height="30"/>
        <rect x="30" y="44" width="540" height="30" rx="4" fill="none" stroke="var(--at-line)" stroke-dasharray="3 3"/>
        <g fill="var(--at-violet)" fill-opacity="0.55">
          <rect x="34" y="48" width="64" height="22" rx="2"/>
          <rect x="102" y="48" width="64" height="22" rx="2"/>
          <rect x="170" y="48" width="64" height="22" rx="2"/>
          <rect x="238" y="48" width="64" height="22" rx="2"/>
          <rect x="306" y="48" width="64" height="22" rx="2"/>
          <rect x="374" y="48" width="64" height="22" rx="2"/>
          <rect x="442" y="48" width="64" height="22" rx="2"/>
          <rect x="510" y="48" width="56" height="22" rx="2"/>
        </g>
        <text x="580" y="63" font-family="var(--at-font-mono)" font-size="14" fill="var(--at-muted)">&hellip;</text>
      </g>
      <!-- with -->
      <text x="30" y="118" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-green)">WITH instanceable &mdash; 1 &times; geometry + N &times; transform</text>
      <g>
        <rect x="30" y="132" width="68" height="30" rx="4" fill="var(--at-violet)" fill-opacity="0.55" stroke="var(--at-violet)"/>
        <text x="64" y="151" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-text)">mesh</text>
        <g fill="var(--at-blue)" fill-opacity="0.6">
          <rect x="110" y="138" width="12" height="18" rx="2"/>
          <rect x="128" y="138" width="12" height="18" rx="2"/>
          <rect x="146" y="138" width="12" height="18" rx="2"/>
          <rect x="164" y="138" width="12" height="18" rx="2"/>
          <rect x="182" y="138" width="12" height="18" rx="2"/>
          <rect x="200" y="138" width="12" height="18" rx="2"/>
          <rect x="218" y="138" width="12" height="18" rx="2"/>
          <rect x="236" y="138" width="12" height="18" rx="2"/>
        </g>
        <text x="300" y="152" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-faint)">transforms are almost free</text>
      </g>
    </svg>
    <figcaption>One mesh, many transforms. Composition and Hydra process the prototype once; the GPU hardware-instances it &mdash; N copies in a single draw call.</figcaption>
  </figure>

  <div class="catch">
    <div class="h">The trade</div>
    Instances are <strong>read-only inside</strong>. You can move, hide, or re-bind a material on an instance, but you can&rsquo;t edit the prims within its subtree &mdash; they&rsquo;re shared. To tweak one copy&rsquo;s guts, flip <code>instanceable = false</code>, which forks it back into a private, editable subtree.
  </div>

  <hr class="rule">

  <p class="close">Instancing is one idea applied cleanly: a copy&rsquo;s <b>only</b> unique data is where it sits, so keep that per copy and <span class="hl">share everything else</span>. The instance carries a transform; the prototype carries the mesh &mdash; and a forest, a crowd, or a city full of bolts suddenly fits in memory. (It&rsquo;s the same &ldquo;store only what differs&rdquo; move as a <a class="xref" href="/posts/sparse-override-tree-state/">sparse override</a>.)</p>

</div>
`;

export const script = `

`;
