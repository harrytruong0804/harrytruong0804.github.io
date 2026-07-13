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
    margin: 3.4rem 0 0.4rem;
  }
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
.artifact-scope .figtag {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.6rem;
  }
.artifact-scope .figtag.ras { color: var(--at-green); }
.artifact-scope .figtag.rt { color: var(--at-blue); }
.artifact-scope /* loop code boxes */
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .two { grid-template-columns: 1fr; }
}
.artifact-scope .codebox {
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    border-radius: 8px;
    padding: 0.9rem 1rem;
    font-family: var(--at-font-mono);
    font-size: 0.86rem;
    line-height: 1.7;
    overflow-x: auto;
  }
.artifact-scope .codebox .lab {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
  }
.artifact-scope .codebox.ras { border-color: var(--at-green); }
.artifact-scope .codebox.ras .lab { color: var(--at-green); }
.artifact-scope .codebox.rt { border-color: var(--at-blue); }
.artifact-scope .codebox.rt .lab { color: var(--at-blue); }
.artifact-scope .codebox .kw { color: var(--at-accent); }
.artifact-scope .codebox .o { color: var(--at-muted); }
.artifact-scope .codebox .hi { color: var(--at-text); font-weight: 600; }
.artifact-scope .codebox .in { padding-left: 1.4rem; display: block; }
.artifact-scope .codebox .in2 { padding-left: 2.8rem; display: block; }
.artifact-scope /* consequence columns */
  .cons { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 620px) {
.artifact-scope .cons { grid-template-columns: 1fr; }
}
.artifact-scope .cbox {
    padding: 1rem 1.1rem;
    border-radius: 8px;
    border: 1px solid var(--at-line);
    background: var(--at-inset);
  }
.artifact-scope .cbox.ras { border-top: 3px solid var(--at-green); }
.artifact-scope .cbox.rt { border-top: 3px solid var(--at-blue); }
.artifact-scope .cbox .h {
    font-family: var(--at-font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 0.55rem;
  }
.artifact-scope .cbox.ras .h { color: var(--at-green); }
.artifact-scope .cbox.rt .h { color: var(--at-blue); }
.artifact-scope .cbox p { margin: 0.4rem 0 0; font-size: 0.98rem; line-height: 1.5; }
.artifact-scope .rule { border: none; border-top: 1px solid var(--at-line); margin: 2.6rem 0; }
.artifact-scope .close { font-size: 1.18rem; line-height: 1.62; color: var(--at-muted); }
.artifact-scope .close b { color: var(--at-text); }
.artifact-scope .close .hl { color: var(--at-accent); }
`;

export const html = `
<div class="wrap">

  <p class="kicker">Graphics</p>
  <h2>Rasterization vs Ray Tracing: Opposite Directions</h2>
  <p class="lede">Both turn triangles into a picture by solving one question &mdash; <em>what is visible at each pixel?</em> They just walk the triangle&harr;pixel relationship in opposite directions.</p>

  <p>Every renderer answers the same thing for every pixel on screen: of all the triangles in the scene, which one shows up here? A <strong>rasterizer</strong> and a <strong>ray tracer</strong> both compute that visibility &mdash; but one starts from the geometry and pushes toward the screen, and the other starts from the screen and reaches back into the scene.</p>

  <p class="kicker">Forward</p>
  <h2>Rasterizer: triangle &rarr; pixels</h2>

  <p>The rasterizer takes each triangle, <strong>projects</strong> its vertices onto the image plane, and fills in the pixels it lands on. It never asks a pixel anything; it hands pixels <em>to</em> the screen, one triangle at a time, keeping whichever triangle is nearest at each pixel (the depth buffer). Geometry is pushed forward, scene&nbsp;&rarr;&nbsp;screen.</p>

  <figure>
    <div class="figtag ras">for each triangle &rarr; which pixels?</div>
    <svg viewBox="0 0 640 240" role="img" aria-label="A triangle in the scene is projected onto the image-plane pixel grid; the covered pixels are filled.">
      <!-- eye -->
      <circle cx="58" cy="120" r="9" fill="var(--at-text)"/>
      <text x="58" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-muted)">eye</text>
      <!-- image plane grid -->
      <g stroke="var(--at-line-strong)" stroke-width="1">
        <rect x="176" y="46" width="34" height="150" fill="var(--at-bg)"/>
        <line x1="176" y1="71" x2="210" y2="71"/><line x1="176" y1="96" x2="210" y2="96"/>
        <line x1="176" y1="121" x2="210" y2="121"/><line x1="176" y1="146" x2="210" y2="146"/>
        <line x1="176" y1="171" x2="210" y2="171"/>
      </g>
      <!-- covered pixels -->
      <g fill="var(--at-green-soft)">
        <rect x="177" y="97" width="32" height="24"/>
        <rect x="177" y="122" width="32" height="24"/>
        <rect x="177" y="147" width="32" height="24"/>
      </g>
      <text x="193" y="212" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-green)">pixels</text>
      <!-- triangle in scene -->
      <polygon points="470,70 560,120 470,190" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
      <text x="512" y="215" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-violet)">triangle</text>
      <!-- projection lines: vertex -> eye, crossing plane -->
      <g stroke="var(--at-green)" stroke-width="1.6">
        <line x1="470" y1="70" x2="58" y2="120" marker-end="url(#rf)"/>
        <line x1="560" y1="120" x2="58" y2="120"/>
        <line x1="470" y1="190" x2="58" y2="120" marker-end="url(#rf)"/>
      </g>
      <text x="300" y="66" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-green)">project&nbsp;&nbsp;scene &rarr; screen</text>
      <defs>
        <marker id="rf" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-green)"/></marker>
      </defs>
    </svg>
    <figcaption>Outer loop over triangles. Each is flattened onto the grid; the depth buffer keeps the nearest at every pixel.</figcaption>
  </figure>

  <p>Because the outer loop is triangles, the hardware just <em>streams</em> them through &mdash; which is exactly what a GPU&rsquo;s fixed-function rasterizer is built to do, and why it&rsquo;s so fast. (What happens next &mdash; vertex transform, then per-pixel shading &mdash; is the <a class="xref" href="/posts/vertex-fragment-shader/">vertex/fragment split</a>.)</p>

  <p class="kicker">Backward</p>
  <h2>Ray tracer: pixel &rarr; triangle</h2>

  <p>The ray tracer flips the loop. It takes each <strong>pixel</strong>, shoots a ray from the camera out through it, and finds the first triangle that ray hits. It never projects geometry; it interrogates the scene from the screen, one pixel at a time. The direction reverses: screen&nbsp;&rarr;&nbsp;scene.</p>

  <figure>
    <div class="figtag rt">for each pixel &rarr; which triangle?</div>
    <svg viewBox="0 0 640 240" role="img" aria-label="A ray leaves the eye, passes through one pixel of the image plane, and hits a triangle in the scene.">
      <!-- eye -->
      <circle cx="58" cy="120" r="9" fill="var(--at-text)"/>
      <text x="58" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-muted)">eye</text>
      <!-- image plane grid -->
      <g stroke="var(--at-line-strong)" stroke-width="1">
        <rect x="176" y="46" width="34" height="150" fill="var(--at-bg)"/>
        <line x1="176" y1="71" x2="210" y2="71"/><line x1="176" y1="96" x2="210" y2="96"/>
        <line x1="176" y1="121" x2="210" y2="121"/><line x1="176" y1="146" x2="210" y2="146"/>
        <line x1="176" y1="171" x2="210" y2="171"/>
      </g>
      <!-- the one pixel the ray goes through -->
      <rect x="177" y="122" width="32" height="24" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.2"/>
      <text x="193" y="212" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-blue)">one pixel</text>
      <!-- triangle in scene -->
      <polygon points="470,70 560,120 470,190" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
      <text x="512" y="215" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-violet)">triangle</text>
      <!-- the ray: eye -> through pixel -> hit -->
      <line x1="58" y1="120" x2="497" y2="134" stroke="var(--at-blue)" stroke-width="2.2" marker-end="url(#rb)"/>
      <!-- hit point -->
      <circle cx="497" cy="134" r="4" fill="var(--at-accent)"/>
      <text x="300" y="66" text-anchor="middle" font-family="var(--at-font-mono)" font-size="11" fill="var(--at-blue)">cast&nbsp;&nbsp;screen &rarr; scene</text>
      <defs>
        <marker id="rb" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-blue)"/></marker>
      </defs>
    </svg>
    <figcaption>Outer loop over pixels. One ray per pixel, nearest hit wins &mdash; the same visibility answer, reached from the other end.</figcaption>
  </figure>

  <p>Notice the ray runs <em>backward</em> along light: real photons leave the lamp, but almost none would ever land in your eye, so tracing from the light forward is hopeless. Start at the eye and walk the path in reverse, and every ray is guaranteed to matter.</p>

  <p class="kicker">The symmetry</p>
  <h2>The same loop, transposed</h2>

  <p>Line the two up and they&rsquo;re the identical double loop over <strong>(triangles &times; pixels)</strong> &mdash; with the inner and outer swapped. That one swap is the whole difference.</p>

  <figure>
    <div class="two">
      <div class="codebox ras">
        <span class="lab">Rasterizer</span>
        <span class="kw">for</span> each <span class="hi">triangle</span> T<span class="o">:</span>
        <span class="in"><span class="kw">for</span> each pixel P in T<span class="o">:</span></span>
        <span class="in2"><span class="kw">if</span> T nearest at P<span class="o">:</span> keep</span>
      </div>
      <div class="codebox rt">
        <span class="lab">Ray tracer</span>
        <span class="kw">for</span> each <span class="hi">pixel</span> P<span class="o">:</span>
        <span class="in"><span class="kw">for</span> each triangle T<span class="o">:</span></span>
        <span class="in2"><span class="kw">if</span> T hit &amp; nearest<span class="o">:</span> keep</span>
      </div>
    </div>
    <svg viewBox="0 0 640 170" role="img" aria-label="A grid of triangles by pixels: the rasterizer sweeps rows, the ray tracer sweeps columns.">
      <!-- raster grid: sweep rows -->
      <g>
        <text x="150" y="20" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-green)">raster: triangle-major</text>
        <g stroke="var(--at-line)" stroke-width="1" fill="none">
          <rect x="70" y="34" width="160" height="96"/>
          <line x1="70" y1="66" x2="230" y2="66"/><line x1="70" y1="98" x2="230" y2="98"/>
          <line x1="110" y1="34" x2="110" y2="130"/><line x1="150" y1="34" x2="150" y2="130"/><line x1="190" y1="34" x2="190" y2="130"/>
        </g>
        <g stroke="var(--at-green)" stroke-width="2">
          <line x1="78" y1="50" x2="224" y2="50" marker-end="url(#gg)"/>
          <line x1="78" y1="82" x2="224" y2="82" marker-end="url(#gg)"/>
          <line x1="78" y1="114" x2="224" y2="114" marker-end="url(#gg)"/>
        </g>
        <text x="150" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-faint)">rows = triangles</text>
      </g>
      <!-- rt grid: sweep columns -->
      <g>
        <text x="490" y="20" text-anchor="middle" font-family="var(--at-font-mono)" font-size="10" fill="var(--at-blue)">ray tracer: pixel-major</text>
        <g stroke="var(--at-line)" stroke-width="1" fill="none">
          <rect x="410" y="34" width="160" height="96"/>
          <line x1="410" y1="66" x2="570" y2="66"/><line x1="410" y1="98" x2="570" y2="98"/>
          <line x1="450" y1="34" x2="450" y2="130"/><line x1="490" y1="34" x2="490" y2="130"/><line x1="530" y1="34" x2="530" y2="130"/>
        </g>
        <g stroke="var(--at-blue)" stroke-width="2">
          <line x1="430" y1="42" x2="430" y2="122" marker-end="url(#bb)"/>
          <line x1="470" y1="42" x2="470" y2="122" marker-end="url(#bb)"/>
          <line x1="510" y1="42" x2="510" y2="122" marker-end="url(#bb)"/>
          <line x1="550" y1="42" x2="550" y2="122" marker-end="url(#bb)"/>
        </g>
        <text x="490" y="150" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9" fill="var(--at-faint)">columns = pixels</text>
      </g>
      <defs>
        <marker id="gg" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-green)"/></marker>
        <marker id="bb" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-blue)"/></marker>
      </defs>
    </svg>
    <figcaption>Same grid of work, swept perpendicular ways. Rasterizing is ray tracing&rsquo;s loop, transposed.</figcaption>
  </figure>

  <p class="kicker">Why the direction matters</p>
  <h2>Local speed vs global light</h2>

  <p>The swap isn&rsquo;t cosmetic &mdash; it decides what each method finds <em>easy</em>. When you process one triangle at a time, that triangle knows nothing about the rest of the scene, so anything involving <strong>other</strong> geometry &mdash; shadows, reflections, bounced light &mdash; has to be faked with extra passes. When you trace a ray, the hit point can just spawn <strong>more rays</strong> to ask the scene directly.</p>

  <figure>
    <div class="cons">
      <div class="cbox ras">
        <div class="h">Rasterizer &mdash; local</div>
        <svg viewBox="0 0 260 130" role="img" aria-label="A lit triangle asks about the rest of the scene and gets no answer.">
          <polygon points="60,95 130,45 130,95" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.4"/>
          <line x1="132" y1="70" x2="205" y2="70" stroke="var(--at-muted)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qm)"/>
          <text x="220" y="74" font-family="var(--at-font-mono)" font-size="18" fill="var(--at-faint)">?</text>
          <text x="130" y="118" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">sees only itself</text>
          <defs><marker id="qm" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-muted)"/></marker></defs>
        </svg>
        <p>Shadows, reflections, GI need bolt-on passes: shadow maps, cube maps, screen-space tricks.</p>
      </div>
      <div class="cbox rt">
        <div class="h">Ray tracer &mdash; global</div>
        <svg viewBox="0 0 260 130" role="img" aria-label="A ray hits a surface and spawns a shadow ray to the light and a reflection ray.">
          <line x1="20" y1="40" x2="95" y2="90" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#pr)"/>
          <line x1="60" y1="98" x2="230" y2="98" stroke="var(--at-line-strong)" stroke-width="1.4"/>
          <circle cx="95" cy="90" r="3.5" fill="var(--at-accent)"/>
          <!-- shadow ray to light -->
          <line x1="95" y1="90" x2="180" y2="34" stroke="var(--at-amber)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#sr)"/>
          <circle cx="188" cy="30" r="7" fill="var(--at-amber)" fill-opacity="0.9"/>
          <!-- reflection ray -->
          <line x1="95" y1="90" x2="150" y2="112" stroke="var(--at-violet)" stroke-width="1.8" marker-end="url(#rr)"/>
          <text x="130" y="120" text-anchor="middle" font-family="var(--at-font-mono)" font-size="9.5" fill="var(--at-faint)">asks the whole scene</text>
          <defs>
            <marker id="pr" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-blue)"/></marker>
            <marker id="sr" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-amber)"/></marker>
            <marker id="rr" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="var(--at-violet)"/></marker>
          </defs>
        </svg>
        <p>Shadow ray to the light, reflection ray off the surface &mdash; effects fall out for free, but every ray costs a scene search (hence the BVH).</p>
      </div>
    </div>
    <figcaption>The rasterizer is fast because it&rsquo;s local; the ray tracer is realistic because it&rsquo;s global. Same reason, opposite sign.</figcaption>
  </figure>

  <p>That trade is why today&rsquo;s GPUs do <strong>both</strong>: rasterize primary visibility &mdash; the cheap, streamed part &mdash; then fire rays only where global light actually matters, for shadows and reflections. The two directions aren&rsquo;t rivals so much as the forward and reverse of one idea.</p>

  <hr class="rule">

  <p class="close">Rasterization and ray tracing solve the exact same visibility problem &mdash; <b>which triangle at which pixel</b> &mdash; and differ by a single choice: which loop goes on the outside. Push triangles onto the screen and you get <b>speed</b> but a surface that can&rsquo;t see its neighbors; pull the scene through each pixel and you get <span class="hl">global light</span> at the price of asking, ray by ray, what else is out there.</p>

</div>
`;

export const script = `

`;
