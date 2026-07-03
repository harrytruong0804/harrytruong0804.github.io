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
  .artifact-scope .tag.good{background:var(--at-green-soft);color:var(--at-green);border:1px solid var(--at-green-soft)}
  .artifact-scope .tag.bad{background:var(--at-accent-soft);color:var(--at-accent);border:1px solid var(--at-accent-soft)}
  .artifact-scope .tag.warn{background:var(--at-amber-soft);color:var(--at-amber);border:1px solid var(--at-amber-soft)}
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
    border-top:1px solid var(--at-line);color:var(--at-faint);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--at-faint);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--at-accent);margin-bottom:10px}
`;

export const html = `
<article>

<header class="post-head">
  <div class="eyebrow">Crowd Simulation · USD Deep Dive</div>
  <h1>From Mesh to Crowd: How 1,583 Recorded Pedestrians Walk a USD Stage</h1>
  <p class="lead">A tour through meshes, skeletons, skin weights, and textures — and the &ldquo;baked loop&rdquo; trick that animates an entire recorded MassMotion crowd in Omniverse Kit without an animation graph.</p>
  <p class="byline">SNCF Crowd&nbsp;→&nbsp;USD pipeline · Stage 06 · ~12 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#problem">The problem we&rsquo;re solving</a></li>
    <li><a href="#layers">Four layers of representation</a></li>
    <li><a href="#rig">So what is a rig?</a></li>
    <li><a href="#weights">Skin weights, literally</a></li>
    <li><a href="#textures">Where textures fit (and why they&rsquo;re separate)</a></li>
    <li><a href="#constraints">Two engine constraints that change everything</a></li>
    <li><a href="#funnel">The constraint funnel: three dead ends</a></li>
    <li><a href="#loop">The baked loop, in detail</a></li>
    <li><a href="#switching">How an agent switches animation</a></li>
    <li><a href="#tradeoffs">The price of having no graph</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. PROBLEM ───────────────────────── -->
<h2 id="problem"><span class="step">1</span>The problem we&rsquo;re solving</h2>

<p>You have a pre-computed pedestrian simulation: <strong>1,583 people</strong>, each one&rsquo;s position logged frame by frame in a CSV from MassMotion. You need to replay it inside an SNCF train station in NVIDIA Omniverse Kit so it looks like a real crowd — people walking, idling, ascending and descending stairs — and <strong>every person must stay exactly on their recorded path</strong>.</p>

<p>The simulation is the source of truth. The visual is a faithful playback.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 200">
    <!-- CSV -->
    <g transform="translate(20,30)">
      <rect width="180" height="140" rx="10" fill="var(--at-surface)" stroke="var(--at-line)" stroke-width="1.5"/>
      <rect width="180" height="26" rx="10" fill="var(--at-blue)"/>
      <rect y="16" width="180" height="10" fill="var(--at-blue)"/>
      <text x="14" y="18" fill="var(--at-bg)" font-size="12" font-weight="700" font-family="var(--at-font-mono)">xyz v2.csv</text>
      <g font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-muted)">
        <text x="12" y="48">Frame  AgentID  X     Y    Z</text>
        <text x="12" y="64">139508 agent_3   12.4  0.0  -6.2</text>
        <text x="12" y="78">139508 agent_8   8.1   0.0  -3.4</text>
        <text x="12" y="92">139509 agent_3   12.5  0.0  -6.1</text>
        <text x="12" y="106">139509 agent_8   8.2  0.0  -3.3</text>
        <text x="12" y="120" fill="var(--at-faint)">… 1,541,367 rows</text>
      </g>
    </g>
    <!-- arrow 1 -->
    <g transform="translate(210,100)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="var(--at-faint)" stroke-width="2"/>
      <polygon points="60,-6 72,0 60,6" fill="var(--at-faint)"/>
      <text x="36" y="-12" fill="var(--at-faint)" font-size="11" text-anchor="middle">build</text>
    </g>
    <!-- USD -->
    <g transform="translate(295,30)">
      <rect width="180" height="140" rx="10" fill="var(--at-surface)" stroke="var(--at-line)" stroke-width="1.5"/>
      <rect width="180" height="26" rx="10" fill="var(--at-violet)"/>
      <rect y="16" width="180" height="10" fill="var(--at-violet)"/>
      <text x="14" y="18" fill="var(--at-bg)" font-size="12" font-weight="700" font-family="var(--at-font-mono)">scenario.usd</text>
      <g font-family="var(--at-font-mono)" font-size="10.5" fill="var(--at-muted)">
        <text x="12" y="48">/Crowd</text>
        <text x="24" y="62">/Anims  (looped)</text>
        <text x="24" y="76">/agent_3  Xform</text>
        <text x="36" y="90">translate.ts</text>
        <text x="36" y="104">rotateZ.ts</text>
        <text x="24" y="118">/agent_8  Xform …</text>
        <text x="12" y="132" fill="var(--at-faint)">… 1,583 agents</text>
      </g>
    </g>
    <!-- arrow 2 -->
    <g transform="translate(485,100)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="var(--at-faint)" stroke-width="2"/>
      <polygon points="60,-6 72,0 60,6" fill="var(--at-faint)"/>
      <text x="36" y="-12" fill="var(--at-faint)" font-size="11" text-anchor="middle">play</text>
    </g>
    <!-- Kit / station -->
    <g transform="translate(570,30)">
      <rect width="230" height="140" rx="10" fill="var(--at-surface)" stroke="var(--at-line)" stroke-width="1.5"/>
      <rect width="230" height="26" rx="10" fill="var(--at-green)"/>
      <rect y="16" width="230" height="10" fill="var(--at-green)"/>
      <text x="14" y="18" fill="var(--at-bg)" font-size="12" font-weight="700" font-family="var(--at-font-mono)">Omniverse Kit</text>
      <!-- station floor -->
      <rect x="14" y="100" width="200" height="22" fill="var(--at-inset)" stroke="var(--at-line)"/>
      <!-- columns -->
      <rect x="32" y="58" width="6" height="42" fill="var(--at-line)"/>
      <rect x="190" y="58" width="6" height="42" fill="var(--at-line)"/>
      <line x1="14" y1="58" x2="220" y2="58" stroke="var(--at-line)" stroke-width="2"/>
      <!-- agents (stick figures) -->
      <g fill="var(--at-blue)">
        <circle cx="56" cy="92" r="3"/>
        <line x1="56" y1="95" x2="56" y2="100" stroke="var(--at-blue)" stroke-width="1.5"/>
        <circle cx="84" cy="92" r="3"/>
        <line x1="84" y1="95" x2="84" y2="100" stroke="var(--at-blue)" stroke-width="1.5"/>
        <circle cx="116" cy="92" r="3"/>
        <line x1="116" y1="95" x2="116" y2="100" stroke="var(--at-blue)" stroke-width="1.5"/>
        <circle cx="148" cy="92" r="3"/>
        <line x1="148" y1="95" x2="148" y2="100" stroke="var(--at-blue)" stroke-width="1.5"/>
        <circle cx="172" cy="92" r="3"/>
        <line x1="172" y1="95" x2="172" y2="100" stroke="var(--at-blue)" stroke-width="1.5"/>
      </g>
      <text x="115" y="138" fill="var(--at-faint)" font-size="11" text-anchor="middle" font-style="italic">1,583 agents on SNCF station</text>
    </g>
  </svg>
  <p class="figure-caption">The pipeline at a glance: a 1.5&nbsp;million-row CSV becomes a USD scenario, which Kit renders on the station model.</p>
</div>

<p>Two things have to happen on every frame for every agent:</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">1</div>
    <h4>World motion</h4>
    <p>The body translates from where it was last frame to where it is this frame, and turns to face the direction of travel.</p>
  </div>
  <div class="box">
    <div class="icon blue">2</div>
    <h4>Limb motion</h4>
    <p>The legs and arms swing in a believable walk cycle <em>while</em> the body travels along the recorded path.</p>
  </div>
</div>

<p>The rest of this post is about how to make those two things coexist without the engine fighting you.</p>

<!-- ───────────────────────── 2. LAYERS ───────────────────────── -->
<h2 id="layers"><span class="step">2</span>Four layers of representation</h2>

<p>Before we talk about &ldquo;the rig&rdquo;, we have to separate the four things people lump together when they say it. They&rsquo;re distinct in USD and you&rsquo;ll see all four named explicitly in the pipeline.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 320">
    <!-- character on left -->
    <g transform="translate(30,40)">
      <!-- head -->
      <circle cx="60" cy="20" r="14" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="2"/>
      <!-- torso -->
      <path d="M60,34 L60,110 M40,55 L80,55 M40,55 L30,90 M80,55 L90,90 M55,110 L42,170 M65,110 L78,170" stroke="var(--at-text)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- mesh outline -->
      <path d="M45,30 Q35,55 30,90 L40,175 L55,178 L60,110 L65,178 L78,176 L88,90 Q85,55 75,30 Q70,38 60,38 Q50,38 45,30 Z" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1" opacity="0.5"/>
      <text x="60" y="210" font-size="13" text-anchor="middle" font-weight="700" fill="var(--at-text)">Adult2</text>
      <text x="60" y="226" font-size="11" text-anchor="middle" fill="var(--at-faint)">= mesh + skeleton + skin + clip</text>
    </g>

    <!-- arrow -->
    <g transform="translate(170,140)">
      <line x1="0" y1="0" x2="40" y2="0" stroke="var(--at-faint)" stroke-width="2"/>
      <polygon points="40,-6 52,0 40,6" fill="var(--at-faint)"/>
      <text x="26" y="-10" font-size="11" fill="var(--at-faint)" text-anchor="middle">decomposes</text>
      <text x="26" y="22" font-size="11" fill="var(--at-faint)" text-anchor="middle">into</text>
    </g>

    <!-- stacked layers on right -->
    <g transform="translate(250,30)">
      <!-- layer 4: clip -->
      <g transform="translate(0,0)">
        <rect width="540" height="56" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
        <text x="14" y="22" font-size="13" font-weight="700" fill="var(--at-violet)">CLIP</text>
        <text x="14" y="40" font-size="12" fill="var(--at-muted)">A time-series of joint poses. Frame 0 → joints here. Frame 1 → joints here. &hellip;</text>
        <!-- mini timeline -->
        <g transform="translate(360,18)">
          <line x1="0" y1="14" x2="160" y2="14" stroke="var(--at-violet)" stroke-width="1"/>
          <g fill="var(--at-violet)">
            <circle cx="0" cy="14" r="3"/><circle cx="32" cy="14" r="3"/>
            <circle cx="64" cy="14" r="3"/><circle cx="96" cy="14" r="3"/>
            <circle cx="128" cy="14" r="3"/><circle cx="160" cy="14" r="3"/>
          </g>
          <text x="80" y="34" font-size="10" fill="var(--at-faint)" text-anchor="middle">SkelAnimation samples</text>
        </g>
      </g>
      <!-- layer 3: skin -->
      <g transform="translate(0,70)">
        <rect width="540" height="56" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.5"/>
        <text x="14" y="22" font-size="13" font-weight="700" fill="var(--at-amber)">SKIN</text>
        <text x="14" y="40" font-size="12" fill="var(--at-muted)">Per-vertex weights: which joints pull this vertex, and how strongly.</text>
        <!-- mini weight viz -->
        <g transform="translate(420,18)">
          <rect x="0" y="6" width="100" height="14" fill="var(--at-amber-soft)"/>
          <rect x="0" y="6" width="60" height="14" fill="var(--at-amber)"/>
          <text x="50" y="34" font-size="10" fill="var(--at-faint)" text-anchor="middle">jointIndices + jointWeights</text>
        </g>
      </g>
      <!-- layer 2: skeleton -->
      <g transform="translate(0,140)">
        <rect width="540" height="56" rx="8" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.5"/>
        <text x="14" y="22" font-size="13" font-weight="700" fill="var(--at-green)">SKELETON</text>
        <text x="14" y="40" font-size="12" fill="var(--at-muted)">An invisible tree of joints with a default &ldquo;bind pose&rdquo; (usually T-pose).</text>
        <!-- mini skeleton -->
        <g transform="translate(430,12)" stroke="var(--at-green)" stroke-width="1.5" fill="none">
          <circle cx="40" cy="6" r="3" fill="var(--at-green)"/>
          <line x1="40" y1="9" x2="40" y2="22"/>
          <line x1="40" y1="14" x2="22" y2="22"/>
          <line x1="40" y1="14" x2="58" y2="22"/>
          <line x1="40" y1="22" x2="30" y2="38"/>
          <line x1="40" y1="22" x2="50" y2="38"/>
          <circle cx="22" cy="22" r="2.5" fill="var(--at-green)"/>
          <circle cx="58" cy="22" r="2.5" fill="var(--at-green)"/>
          <circle cx="30" cy="38" r="2.5" fill="var(--at-green)"/>
          <circle cx="50" cy="38" r="2.5" fill="var(--at-green)"/>
        </g>
      </g>
      <!-- layer 1: mesh -->
      <g transform="translate(0,210)">
        <rect width="540" height="56" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
        <text x="14" y="22" font-size="13" font-weight="700" fill="var(--at-blue)">MESH</text>
        <text x="14" y="40" font-size="12" fill="var(--at-muted)">The visible geometry: vertices and triangles shaped like a person.</text>
        <!-- mini mesh -->
        <g transform="translate(440,14)" stroke="var(--at-blue)" stroke-width="1" fill="none">
          <polygon points="10,30 30,5 50,30 70,5 90,30"/>
          <polygon points="20,18 40,28 60,18 80,28"/>
        </g>
      </g>
    </g>
  </svg>
  <p class="figure-caption">Four layers in every animated character. They&rsquo;re independent — and once you separate them, the whole engine debate makes sense.</p>
</div>

<p>One sentence each, bottom-up:</p>

<ul class="clean">
  <li><strong>Mesh</strong> &mdash; a few thousand triangles shaped like a person. By itself it&rsquo;s a single static lump that can&rsquo;t bend.</li>
  <li><strong>Skeleton</strong> &mdash; a hierarchy of <em>joints</em>: hips → spine → chest → shoulder → elbow → wrist → fingers. Each joint has a default position relative to its parent. The whole thing arranged in its defaults is the <strong>bind pose</strong>, almost always a T-pose, because that makes the next layer easier.</li>
  <li><strong>Skin</strong> &mdash; the bridge from mesh to skeleton. For every vertex of the mesh, a small table that says &ldquo;these joints influence me, with these weights.&rdquo; When joints move, vertices follow proportionally. (Section 4 cracks this open.)</li>
  <li><strong>Clip</strong> &mdash; a time-series of joint transforms. &ldquo;At frame 0 the hips are at this rotation, at frame 1 they&rsquo;re at this rotation, &hellip;&rdquo;. In USD this is a <code>SkelAnimation</code> prim. It&rsquo;s just data.</li>
</ul>

<div class="callout">
  <span class="title">Mental model</span>
  <p>The <strong>skeleton</strong> is a marionette controller. The <strong>mesh</strong> is the puppet&rsquo;s cloth surface. The <strong>skin</strong> is the strings — and how thick each string is. The <strong>clip</strong> is the script telling the controller what to do over time.</p>
</div>

<!-- ───────────────────────── 3. WHAT IS A RIG ───────────────────────── -->
<h2 id="rig"><span class="step">3</span>So what is a rig?</h2>

<p>A rig is the <em>animatable character package</em>. It&rsquo;s the answer to &ldquo;what would I need to ship so somebody else could pose this character?&rdquo; The first three layers above — <strong>mesh + skeleton + skin</strong> — travel together as one bundle. The clip is separate: many clips can drive the same rig.</p>

<p>In USD, that bundle lives under a prim called a <code>SkelRoot</code>. Inside it: a <code>Skeleton</code> prim (joint hierarchy &amp; bind pose), one or more <code>Mesh</code> prims that carry skinning data (<code>primvars:skel:jointIndices</code> and <code>primvars:skel:jointWeights</code>), and a relationship called <code>skel:animationSource</code> that points at the clip currently driving it.</p>

<div class="figure">
  <div class="ascii">/Adult2_rig    <span class="c-muted"># a SkelRoot prim</span>
├── Skeleton          <span class="c-muted"># joint hierarchy + bind pose</span>
│      joints       = [Hips, Spine, Chest, LShoulder, LElbow, …]
│      bindTransforms = [&lt;matrices for each joint at rest&gt;]
│
├── Mesh              <span class="c-muted"># the visible geometry</span>
│      points              = [&lt;v0&gt;, &lt;v1&gt;, … &lt;vN&gt;]
│      faceVertexIndices   = [&lt;triangles&gt;]
│      <span class="c-acc">primvars:skel:jointIndices</span>  = [(sh,el,0,0), (sh,el,0,0), …]
│      <span class="c-acc">primvars:skel:jointWeights</span>  = [(0.5,0.5,0,0), (0.8,0.2,0,0), …]
│
└── <span class="c-acc">skel:animationSource → /Anims/Adult2__walk</span></div>
  <p class="figure-caption">A USD <code>SkelRoot</code>. The first three children are the rig; the relationship at the bottom plugs in a clip.</p>
</div>

<p>The bind pose is the rig&rsquo;s &ldquo;factory default.&rdquo; If you removed the clip — i.e. if <code>skel:animationSource</code> pointed at nothing, or its samples ran out — the rig would render in that pose. We&rsquo;ll come back to that in section 6, because it&rsquo;s where one of our biggest landmines lives.</p>

<!-- ───────────────────────── 4. SKIN WEIGHTS ───────────────────────── -->
<h2 id="weights"><span class="step">4</span>Skin weights, literally</h2>

<p>A skin weight is just a number between 0 and 1, attached to a <strong>(vertex, joint)</strong> pair. It says: <em>&ldquo;when this joint moves, how strongly should this vertex follow it?&rdquo;</em></p>

<p>For every vertex you store a short list — usually capped at 4 entries — like this:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 280">
    <!-- arm illustration -->
    <g transform="translate(20,40)">
      <text x="160" y="0" font-size="13" font-weight="700" fill="var(--at-text)" text-anchor="middle">An arm bending at the elbow</text>
      <!-- arm outline -->
      <path d="M30,60 L300,60 L300,90 L30,90 Z" fill="none" stroke="var(--at-text)" stroke-width="1.5"/>
      <!-- joints -->
      <circle cx="50" cy="75" r="8" fill="var(--at-blue)" stroke="var(--at-bg)" stroke-width="2"/>
      <text x="50" y="40" font-size="11" font-weight="700" fill="var(--at-blue)" text-anchor="middle">shoulder</text>
      <circle cx="170" cy="75" r="8" fill="var(--at-amber)" stroke="var(--at-bg)" stroke-width="2"/>
      <text x="170" y="40" font-size="11" font-weight="700" fill="var(--at-amber)" text-anchor="middle">elbow</text>
      <circle cx="290" cy="75" r="8" fill="var(--at-faint)" stroke="var(--at-bg)" stroke-width="2"/>
      <text x="290" y="40" font-size="11" font-weight="700" fill="var(--at-faint)" text-anchor="middle">wrist</text>
      <!-- bone lines -->
      <line x1="58" y1="75" x2="162" y2="75" stroke="var(--at-text)" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="178" y1="75" x2="282" y2="75" stroke="var(--at-text)" stroke-width="1" stroke-dasharray="3,3"/>
      <!-- vertex dots colored by weight -->
      <g>
        <!-- v0 pure shoulder -->
        <circle cx="50" cy="60" r="4" fill="var(--at-blue)"/>
        <text x="50" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v0</text>
        <!-- v1 -->
        <circle cx="90" cy="60" r="4" fill="var(--at-blue)"/>
        <text x="90" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v1</text>
        <!-- v2 mix 80/20 -->
        <circle cx="130" cy="60" r="4" fill="url(#mix80)"/>
        <text x="130" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v2</text>
        <!-- v3 elbow vertex 50/50 -->
        <circle cx="170" cy="60" r="4" fill="url(#mix50)"/>
        <text x="170" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v3</text>
        <!-- v4 mix 20/80 -->
        <circle cx="210" cy="60" r="4" fill="url(#mix20)"/>
        <text x="210" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v4</text>
        <!-- v5 -->
        <circle cx="250" cy="60" r="4" fill="var(--at-amber)"/>
        <text x="250" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v5</text>
        <!-- v6 -->
        <circle cx="290" cy="60" r="4" fill="var(--at-amber)"/>
        <text x="290" y="113" font-size="10" fill="var(--at-muted)" text-anchor="middle">v6</text>
      </g>
      <defs>
        <linearGradient id="mix80" x1="0%" x2="100%"><stop offset="0%" stop-color="var(--at-blue)"/><stop offset="100%" stop-color="var(--at-amber)"/></linearGradient>
        <linearGradient id="mix50" x1="0%" x2="100%"><stop offset="0%" stop-color="var(--at-blue)"/><stop offset="100%" stop-color="var(--at-amber)"/></linearGradient>
        <linearGradient id="mix20" x1="0%" x2="100%"><stop offset="0%" stop-color="var(--at-blue)"/><stop offset="100%" stop-color="var(--at-amber)"/></linearGradient>
      </defs>
    </g>

    <!-- table on right -->
    <g transform="translate(370,40)">
      <text x="0" y="0" font-size="13" font-weight="700" fill="var(--at-text)">Weight table for vertices v0&hellip;v6</text>
      <g font-family="var(--at-font-mono)" font-size="12" fill="var(--at-muted)">
        <rect x="0" y="16" width="430" height="22" fill="var(--at-inset)" stroke="var(--at-line)"/>
        <text x="10" y="32" font-weight="700" fill="var(--at-text)">vertex</text>
        <text x="120" y="32" font-weight="700" fill="var(--at-text)">shoulder</text>
        <text x="240" y="32" font-weight="700" fill="var(--at-text)">elbow</text>
        <text x="340" y="32" font-weight="700" fill="var(--at-text)">wrist</text>

        <text x="10" y="56">v0</text><text x="120" y="56" fill="var(--at-blue)">1.00</text><text x="240" y="56">0.00</text><text x="340" y="56">0.00</text>
        <text x="10" y="74">v1</text><text x="120" y="74" fill="var(--at-blue)">1.00</text><text x="240" y="74">0.00</text><text x="340" y="74">0.00</text>
        <text x="10" y="92">v2</text><text x="120" y="92" fill="var(--at-blue)">0.80</text><text x="240" y="92" fill="var(--at-amber)">0.20</text><text x="340" y="92">0.00</text>
        <text x="10" y="110">v3</text><text x="120" y="110" fill="var(--at-blue)">0.50</text><text x="240" y="110" fill="var(--at-amber)">0.50</text><text x="340" y="110">0.00</text>
        <text x="10" y="128">v4</text><text x="120" y="128" fill="var(--at-blue)">0.20</text><text x="240" y="128" fill="var(--at-amber)">0.80</text><text x="340" y="128">0.00</text>
        <text x="10" y="146">v5</text><text x="120" y="146">0.00</text><text x="240" y="146" fill="var(--at-amber)">1.00</text><text x="340" y="146">0.00</text>
        <text x="10" y="164">v6</text><text x="120" y="164">0.00</text><text x="240" y="164" fill="var(--at-amber)">0.80</text><text x="340" y="164" fill="var(--at-faint)">0.20</text>
      </g>
    </g>

    <!-- caption -->
    <text x="410" y="240" font-size="12" fill="var(--at-faint)" text-anchor="middle" font-style="italic">v3 is right at the elbow — 50/50 means it ends up halfway between where each joint would carry it.</text>
    <text x="410" y="258" font-size="12" fill="var(--at-faint)" text-anchor="middle" font-style="italic">That&rsquo;s why the elbow bends smoothly instead of folding like cardboard.</text>
  </svg>
</div>

<p>The weights for any given vertex sum to&nbsp;1 — they&rsquo;re a <em>recipe of influence</em>, not absolute strengths. A vertex weighted <code>shoulder=1.0</code> rigidly tracks the shoulder. A vertex weighted <code>shoulder=0.5, elbow=0.5</code> ends up halfway between where the shoulder would put it and where the elbow would put it.</p>

<h3>The skinning formula</h3>
<p>When the renderer asks &ldquo;where is vertex&nbsp;v now?&rdquo; for the current frame, it does this for each vertex:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 140">
    <g transform="translate(20,60)" font-family="var(--at-font-mono)">
      <text x="0" y="0" font-size="17" fill="var(--at-text)">
        <tspan font-weight="700">final_pos(v)</tspan>
        <tspan x="148" fill="var(--at-faint)">=</tspan>
        <tspan x="175" font-weight="700" fill="var(--at-violet)">Σ</tspan>
        <tspan x="195" fill="var(--at-amber)">w</tspan><tspan baseline-shift="sub" font-size="10" fill="var(--at-amber)">i</tspan>
        <tspan x="215" fill="var(--at-faint)">·</tspan>
        <tspan x="230" fill="var(--at-green)">currentJoint</tspan><tspan baseline-shift="sub" font-size="10" fill="var(--at-green)">i</tspan>
        <tspan x="370" fill="var(--at-faint)">·</tspan>
        <tspan x="385" fill="var(--at-blue)">bindJoint</tspan><tspan baseline-shift="sub" font-size="10" fill="var(--at-blue)">i</tspan><tspan font-size="14" baseline-shift="super" fill="var(--at-blue)">−1</tspan>
        <tspan x="510" fill="var(--at-faint)">·</tspan>
        <tspan x="525" fill="var(--at-text)">vertexBindPos</tspan>
      </text>
    </g>
    <g transform="translate(20,90)" font-size="12" fill="var(--at-faint)">
      <text x="195"><tspan fill="var(--at-amber)" font-weight="700">w</tspan> = weight</text>
      <text x="230"><tspan fill="var(--at-green)" font-weight="700">currentJoint</tspan> = where joint is now</text>
      <text x="385"><tspan fill="var(--at-blue)" font-weight="700">bindJoint⁻¹</tspan> = undo bind pose</text>
    </g>
    <text x="20" y="124" font-size="12" fill="var(--at-muted)" font-style="italic">In English: take the vertex&rsquo;s rest position, ask each influencing joint where it would carry the vertex now, blend by weights.</text>
  </svg>
</div>

<p>This is <em>linear blend skinning</em> (LBS). It runs for every visible vertex of every visible rig on every frame. Modern GPUs eat it for breakfast — but only if Hydra actually <em>runs</em> it. We&rsquo;ll see in section 6 why that&rsquo;s not a given.</p>

<!-- ───────────────────────── 5. TEXTURES ───────────────────────── -->
<h2 id="textures"><span class="step">5</span>Where textures fit (and why they&rsquo;re separate)</h2>

<p>Textures live on a <strong>completely different axis</strong> from the skeleton/skin system. They describe what the surface <em>looks like</em>, not how it <em>moves</em>. Confusing the two costs you debugging time.</p>

<p>A mesh has three things going on at once. The <strong>geometry</strong> is the triangles. The <strong>skinning data</strong> (joint indices &amp; weights) connects it to the skeleton. And every vertex also carries a <strong>UV coordinate</strong> — a 2D point in <code>[0,1] × [0,1]</code> saying &ldquo;when you want to know my colour, sample the texture image at this spot.&rdquo;</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 280">
    <!-- 3D head -->
    <g transform="translate(40,40)">
      <text x="80" y="0" font-size="13" font-weight="700" fill="var(--at-text)" text-anchor="middle">3D mesh in world</text>
      <ellipse cx="80" cy="100" rx="55" ry="70" fill="var(--at-amber-soft)" stroke="var(--at-text)" stroke-width="1.5"/>
      <!-- eyes -->
      <circle cx="62" cy="90" r="4" fill="var(--at-text)"/>
      <circle cx="98" cy="90" r="4" fill="var(--at-text)"/>
      <!-- mouth -->
      <path d="M62,130 Q80,140 98,130" fill="none" stroke="var(--at-text)" stroke-width="2"/>
      <!-- triangles -->
      <g stroke="var(--at-blue)" stroke-width="0.7" fill="none" opacity="0.45">
        <line x1="30" y1="80" x2="80" y2="60"/>
        <line x1="80" y1="60" x2="130" y2="80"/>
        <line x1="30" y1="80" x2="80" y2="100"/>
        <line x1="130" y1="80" x2="80" y2="100"/>
        <line x1="40" y1="140" x2="120" y2="140"/>
        <line x1="80" y1="100" x2="40" y2="140"/>
        <line x1="80" y1="100" x2="120" y2="140"/>
      </g>
    </g>

    <!-- arrow -->
    <g transform="translate(220,140)">
      <line x1="0" y1="0" x2="60" y2="0" stroke="var(--at-faint)" stroke-width="2"/>
      <polygon points="60,-6 72,0 60,6" fill="var(--at-faint)"/>
      <text x="36" y="-12" font-size="11" fill="var(--at-faint)" text-anchor="middle">unwrap</text>
      <text x="36" y="22" font-size="11" fill="var(--at-faint)" text-anchor="middle">to UV space</text>
    </g>

    <!-- UV space (flat) -->
    <g transform="translate(320,40)">
      <text x="100" y="0" font-size="13" font-weight="700" fill="var(--at-text)" text-anchor="middle">UV unwrap (flat 2D)</text>
      <rect x="0" y="20" width="200" height="200" fill="var(--at-amber-soft)" stroke="var(--at-text)" stroke-width="1.5"/>
      <text x="10" y="40" font-size="11" font-family="var(--at-font-mono)" fill="var(--at-muted)">(0,1)</text>
      <text x="170" y="40" font-size="11" font-family="var(--at-font-mono)" fill="var(--at-muted)">(1,1)</text>
      <text x="10" y="215" font-size="11" font-family="var(--at-font-mono)" fill="var(--at-muted)">(0,0)</text>
      <text x="170" y="215" font-size="11" font-family="var(--at-font-mono)" fill="var(--at-muted)">(1,0)</text>
      <!-- features at UV positions -->
      <circle cx="70" cy="110" r="6" fill="var(--at-text)"/>
      <circle cx="130" cy="110" r="6" fill="var(--at-text)"/>
      <path d="M70,160 Q100,175 130,160" fill="none" stroke="var(--at-text)" stroke-width="2.5"/>
      <!-- triangles -->
      <g stroke="var(--at-blue)" stroke-width="0.7" fill="none" opacity="0.45">
        <line x1="20" y1="80" x2="100" y2="55"/>
        <line x1="100" y1="55" x2="180" y2="80"/>
        <line x1="20" y1="80" x2="100" y2="120"/>
        <line x1="180" y1="80" x2="100" y2="120"/>
        <line x1="35" y1="180" x2="165" y2="180"/>
        <line x1="100" y1="120" x2="35" y2="180"/>
        <line x1="100" y1="120" x2="165" y2="180"/>
      </g>
    </g>

    <!-- arrow -->
    <g transform="translate(540,140)">
      <line x1="0" y1="0" x2="40" y2="0" stroke="var(--at-faint)" stroke-width="2"/>
      <polygon points="40,-6 52,0 40,6" fill="var(--at-faint)"/>
      <text x="26" y="-10" font-size="11" fill="var(--at-faint)" text-anchor="middle">sample</text>
    </g>

    <!-- texture image -->
    <g transform="translate(610,40)">
      <text x="90" y="0" font-size="13" font-weight="700" fill="var(--at-text)" text-anchor="middle">texture.png</text>
      <rect x="0" y="20" width="180" height="180" fill="url(#tex)" stroke="var(--at-text)" stroke-width="1.5"/>
      <defs>
        <pattern id="tex" patternUnits="userSpaceOnUse" width="180" height="180">
          <rect width="180" height="180" fill="var(--at-amber-soft)"/>
          <circle cx="60" cy="80" r="6" fill="var(--at-text)"/>
          <circle cx="120" cy="80" r="6" fill="var(--at-text)"/>
          <path d="M60,130 Q90,145 120,130" fill="none" stroke="var(--at-text)" stroke-width="2.5"/>
          <circle cx="40" cy="40" r="3" fill="var(--at-accent)" opacity="0.4"/>
          <circle cx="140" cy="160" r="3" fill="var(--at-accent)" opacity="0.4"/>
        </pattern>
      </defs>
    </g>
  </svg>
  <p class="figure-caption">UV unwrap is a flat &ldquo;paper pattern&rdquo; of the 3D surface. The texture image is painted on that pattern; each vertex&rsquo;s UV coordinate says where to sample.</p>
</div>

<p>The full picture: sitting beside the mesh is a <strong>Material</strong>. The material is a small graph of shader inputs — base colour, roughness, metallic, normal, and so on. Each input can either be a constant number, or be driven by a texture image sampled at the vertex&rsquo;s UV. So &ldquo;the red stripes on the shirt&rdquo; is really: <em>the base-colour input of the material reads from</em> <code>Adult2_diffuse.png</code><em>, sampled at the UV coordinate of whichever vertex is being shaded</em>.</p>

<div class="callout good">
  <span class="title">The crucial property</span>
  <p><strong>Textures are unaffected by skinning</strong> — by design. Skinning moves the <em>vertex positions</em>; the UV coordinate of each vertex doesn&rsquo;t change. So when the elbow bends and forearm vertices swing to new positions, they take their UVs with them, and the texture stays glued to the surface like a tattoo. The eye stays on the head; the shirt stripe stays on the shirt. Two independent systems meeting only at the vertex.</p>
</div>

<p>This is why a bug on the skin axis (a vertex weighted to the wrong joint) makes the geometry deform weirdly, while a bug on the texture axis (a missing material binding) makes the character go pink-and-untextured but still move correctly. They fail in different ways. In our pipeline the early scenarios had a materials-not-binding bug — the rigs animated fine the whole time; only the textures were missing.</p>

<!-- ───────────────────────── 6. CONSTRAINTS ───────────────────────── -->
<h2 id="constraints"><span class="step">6</span>Two engine constraints that change everything</h2>

<p>USD is a scene-description format. Hydra is the renderer that walks it. Two of their behaviours are the reason this whole post exists.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon red">A</div>
    <h4>Hydra doesn&rsquo;t skin instanced rigs</h4>
    <p>If you mark a prim <code>instanceable</code>, Hydra renders many copies of one shared master — cheap and fast. But in this Kit, the skinning step does <em>not</em> run per-instance on a shared rig. All the copies render in the bind <em>(T-)</em> pose. One pose, N copies, all frozen.</p>
  </div>
  <div class="box">
    <div class="icon red">B</div>
    <h4>Time-sampled attributes clamp past their end</h4>
    <p>When you ask a time-sampled attribute for a frame past its last key, USD returns the last value — it does not loop. A standard walk clip is ~6 frames. Our scenario is ~6,000 frames. After frame 6 the joints freeze. One step, then a statue.</p>
  </div>
</div>

<p>Either one alone is annoying. Together they kill the three approaches you&rsquo;d try first.</p>

<!-- ───────────────────────── 7. FUNNEL ───────────────────────── -->
<h2 id="funnel"><span class="step">7</span>The constraint funnel: three dead ends</h2>

<p>We want a crowd that <strong>walks</strong> and <strong>follows the exact MassMotion path</strong>. Four obvious approaches; three are dead ends in <em>this</em> Kit. The baked loop is what&rsquo;s left.</p>

<div class="grid g2">
  <div class="box" style="border-left:4px solid var(--at-accent)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
      <h4 style="margin:0">✗ Instance the rigs</h4>
      <span class="tag bad">T-POSE</span>
    </div>
    <p>A <code>PointInstancer</code> or <code>instanceable</code> skinned <code>UsdSkel</code> renders at its bind pose. Proven four ways (static index, SkelRoot-direct, visibility-gated, switching <code>protoIndices</code>). Hydra doesn&rsquo;t skin instanced masters here.</p>
  </div>
  <div class="box" style="border-left:4px solid var(--at-accent)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
      <h4 style="margin:0">✗ Drive with an Animation Graph</h4>
      <span class="tag bad">PATH DRIFT</span>
    </div>
    <p>The graph injects the clip&rsquo;s <em>root motion</em>, which fights the CSV-driven <code>translate</code>. Agents slide off their real tracks. The replay path is the whole point of the simulation, so the graph is banned.</p>
  </div>
  <div class="box" style="border-left:4px solid var(--at-accent)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
      <h4 style="margin:0">✗ Bind the raw clip directly</h4>
      <span class="tag bad">FREEZE</span>
    </div>
    <p>A clip spans ~6 timecodes; the scenario runs ~6,000. With no graph to re-trigger it, <code>skel:animationSource</code> clamps past the last sample → the character walks for ~1&nbsp;second then freezes.</p>
  </div>
  <div class="box" style="border-left:4px solid var(--at-green)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
      <h4 style="margin:0">✓ Baked Loop</h4>
      <span class="tag good">WALKS + ON-PATH</span>
    </div>
    <p>A non-instanced <code>SkelRoot</code> bound to a <em>pre-looped</em> <code>SkelAnimation</code> that spans the whole timeline. Skins (non-instanced), loops forever (no clamp), and the agent <code>Xform</code> alone owns world motion (no root drift).</p>
  </div>
</div>

<!-- ───────────────────────── 8. THE BAKED LOOP ───────────────────────── -->
<h2 id="loop"><span class="step">8</span>The baked loop, in detail</h2>

<p>The trick is to do the looping <em>at author time</em>, in the data, instead of asking the engine to loop at runtime. We take the 6-frame walk cycle and rewrite it as a 6,000-frame clip whose samples are the original cycle copy-pasted end to end:</p>

<pre>pose[F] = clipPose[ (F % cycle) / cycle · N ]   <span style="color:var(--at-faint)"># for every F in [0, timelineEnd]</span></pre>

<p>Now <code>skel:animationSource</code> has nothing to clamp <em>past</em> — there&rsquo;s a sample for every frame the timeline reaches.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 240">
    <!-- raw clip -->
    <text x="0" y="20" fill="var(--at-accent)" font-size="13" font-weight="700">RAW CLIP — bound directly, no graph (samples 0…6)</text>
    <rect x="0" y="32" width="800" height="38" rx="6" fill="var(--at-surface)" stroke="var(--at-line)"/>
    <rect x="2" y="34" width="60" height="34" rx="4" fill="var(--at-green-soft)" stroke="var(--at-green)"/>
    <text x="32" y="56" fill="var(--at-green)" font-size="11" text-anchor="middle" font-weight="700">0–6</text>
    <rect x="64" y="34" width="734" height="34" rx="4" fill="var(--at-accent-soft)"/>
    <text x="430" y="56" fill="var(--at-accent)" font-size="12" text-anchor="middle" font-weight="700">▮ FROZEN (held last pose) — frames 7 … 5946</text>

    <!-- baked loop -->
    <text x="0" y="118" fill="var(--at-green)" font-size="13" font-weight="700">BAKED LOOP — samples authored 0…end, cycle repeated</text>
    <rect x="0" y="130" width="800" height="38" rx="6" fill="var(--at-surface)" stroke="var(--at-line)"/>
    <g fill="var(--at-blue-soft)" stroke="var(--at-blue)">
      <rect x="2"   y="132" width="48" height="34" rx="4"/>
      <rect x="52"  y="132" width="48" height="34" rx="4"/>
      <rect x="102" y="132" width="48" height="34" rx="4"/>
      <rect x="152" y="132" width="48" height="34" rx="4"/>
      <rect x="202" y="132" width="48" height="34" rx="4"/>
      <rect x="252" y="132" width="48" height="34" rx="4"/>
      <rect x="302" y="132" width="48" height="34" rx="4"/>
      <rect x="352" y="132" width="48" height="34" rx="4"/>
      <rect x="402" y="132" width="48" height="34" rx="4"/>
      <rect x="452" y="132" width="48" height="34" rx="4"/>
      <rect x="502" y="132" width="48" height="34" rx="4"/>
      <rect x="552" y="132" width="48" height="34" rx="4"/>
      <rect x="602" y="132" width="48" height="34" rx="4"/>
      <rect x="652" y="132" width="48" height="34" rx="4"/>
      <rect x="702" y="132" width="48" height="34" rx="4"/>
      <rect x="752" y="132" width="46" height="34" rx="4"/>
    </g>
    <text x="400" y="154" fill="var(--at-blue)" font-size="12" text-anchor="middle" font-weight="700">↻ one stride every 12 timecodes, repeated to the end</text>

    <text x="0" y="200" fill="var(--at-faint)" font-size="12">Timeline (TCPS = 5)  ────────────────────────────────────────────────▶ frame 5946</text>
    <text x="0" y="220" fill="var(--at-faint)" font-size="12">Bonus trick: a Default() value too, so the rig never accidentally reads the bind pose.</text>
  </svg>
</div>

<p>The clip is built from the local source clips at build time, written into a shared <code>/Anims</code> scope, and reused across every agent of the same type. There are only ~16 of them total (4 avatar types × 4 clips).</p>

<h3>The per-agent structure</h3>

<div class="figure">
  <div class="ascii">/CrowdReplay              <span class="c-muted"># payload onto the SNCF model</span>
└── /Crowd
    ├── <span class="c-acc">/Anims</span>                <span class="c-muted"># SHARED, ~16 total</span>
    │     ├── Adult__walk    (loop 0…end)
    │     ├── Adult__idle    (loop 0…end)
    │     ├── Adult2__walk   (loop 0…end)
    │     └── …  (per type × clip)
    │
    └── /agent_6686   <span class="c-acc">Xform</span>     <span class="c-good"># OWNS world motion</span>
          • translate   (x, −z, y)   ⟵ CSV per frame
          • rotateZ     (heading)    ⟵ CSV per frame
          • scale       (Height / natural)
          ├── /walk   <span class="c-acc">SkelRoot</span>  vis◑  → /Anims/Adult2__walk
          └── /idle   <span class="c-acc">SkelRoot</span>  vis◑  → /Anims/Adult2__idle</div>
</div>

<ul class="clean">
  <li><strong>Agent <code>Xform</code> owns motion.</strong> Per-frame <code>translate</code> and <code>rotateZ</code> from the CSV, constant per-agent <code>scale</code>. The rig never moves itself — no drift.</li>
  <li><strong>One child <code>SkelRoot</code> per clip the agent can use.</strong> Most agents have <code>walk</code> + <code>idle</code> (so 2 children). Each references the rig (<code>character.usd</code>) and binds a shared looping anim from <code>/Anims</code>.</li>
  <li><strong>No animation graph, no per-tick code.</strong> Kit skins straight from the relationship every frame.</li>
</ul>

<!-- ───────────────────────── 9. SWITCHING ───────────────────────── -->
<h2 id="switching"><span class="step">9</span>How an agent switches animation</h2>

<p>This is the most elegant part. The standard answer to &ldquo;switch the agent from walking to idling&rdquo; would be an animation graph blending between clips. We can&rsquo;t use that — the graph injects root motion and corrupts the path. So the Baked Loop replaces the state machine with <strong>visibility toggling on parallel skinned rigs</strong>.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 820 320">
    <!-- timeline ruler -->
    <line x1="40" y1="40" x2="780" y2="40" stroke="var(--at-faint)" stroke-width="1"/>
    <g font-size="11" fill="var(--at-faint)" font-family="var(--at-font-mono)">
      <text x="40" y="32" text-anchor="middle">F100</text>
      <text x="225" y="32" text-anchor="middle">F200</text>
      <text x="410" y="32" text-anchor="middle">F350</text>
      <text x="595" y="32" text-anchor="middle">F500</text>
      <text x="780" y="32" text-anchor="middle">F600</text>
    </g>
    <g stroke="var(--at-faint)" stroke-width="1">
      <line x1="40" y1="38" x2="40" y2="44"/>
      <line x1="225" y1="38" x2="225" y2="44"/>
      <line x1="410" y1="38" x2="410" y2="44"/>
      <line x1="595" y1="38" x2="595" y2="44"/>
      <line x1="780" y1="38" x2="780" y2="44"/>
    </g>

    <!-- /walk track -->
    <text x="0" y="80" font-size="13" font-weight="700" fill="var(--at-blue)">/walk</text>
    <rect x="40" y="60" width="740" height="40" rx="6" fill="var(--at-surface)" stroke="var(--at-line)"/>
    <!-- visible segments -->
    <rect x="42" y="62" width="368" height="36" rx="4" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/>
    <text x="226" y="84" font-size="11" text-anchor="middle" fill="var(--at-blue)" font-weight="700">VISIBLE — running walk loop</text>
    <rect x="412" y="62" width="184" height="36" rx="4" fill="var(--at-inset)" stroke="var(--at-line)" stroke-dasharray="3,3"/>
    <text x="504" y="84" font-size="11" text-anchor="middle" fill="var(--at-faint)">invisible (still ticking)</text>
    <rect x="598" y="62" width="180" height="36" rx="4" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/>
    <text x="688" y="84" font-size="11" text-anchor="middle" fill="var(--at-blue)" font-weight="700">VISIBLE</text>

    <!-- /idle track -->
    <text x="0" y="140" font-size="13" font-weight="700" fill="var(--at-amber)">/idle</text>
    <rect x="40" y="120" width="740" height="40" rx="6" fill="var(--at-surface)" stroke="var(--at-line)"/>
    <rect x="42" y="122" width="368" height="36" rx="4" fill="var(--at-inset)" stroke="var(--at-line)" stroke-dasharray="3,3"/>
    <text x="226" y="144" font-size="11" text-anchor="middle" fill="var(--at-faint)">invisible (still ticking)</text>
    <rect x="412" y="122" width="184" height="36" rx="4" fill="var(--at-amber-soft)" stroke="var(--at-amber)"/>
    <text x="504" y="144" font-size="11" text-anchor="middle" fill="var(--at-amber)" font-weight="700">VISIBLE — running idle loop</text>
    <rect x="598" y="122" width="180" height="36" rx="4" fill="var(--at-inset)" stroke="var(--at-line)" stroke-dasharray="3,3"/>
    <text x="688" y="144" font-size="11" text-anchor="middle" fill="var(--at-faint)">invisible</text>

    <!-- MoveState row -->
    <text x="0" y="200" font-size="13" font-weight="700" fill="var(--at-text)">MoveState</text>
    <g font-family="var(--at-font-mono)" font-size="12" fill="var(--at-text)">
      <text x="226" y="200" text-anchor="middle"><tspan fill="var(--at-blue)" font-weight="700">1 (walk)</tspan></text>
      <text x="504" y="200" text-anchor="middle"><tspan fill="var(--at-amber)" font-weight="700">2 (idle)</tspan></text>
      <text x="688" y="200" text-anchor="middle"><tspan fill="var(--at-blue)" font-weight="700">1 (walk)</tspan></text>
    </g>
    <line x1="410" y1="180" x2="410" y2="220" stroke="var(--at-text)" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="595" y1="180" x2="595" y2="220" stroke="var(--at-text)" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="410" y="235" font-size="10.5" text-anchor="middle" fill="var(--at-faint)">switch point</text>
    <text x="595" y="235" font-size="10.5" text-anchor="middle" fill="var(--at-faint)">switch point</text>

    <!-- bottom note -->
    <g transform="translate(40,265)">
      <rect width="740" height="48" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue-soft)"/>
      <text x="370" y="20" text-anchor="middle" font-size="12.5" fill="var(--at-text)"><tspan font-weight="700">Both clips are always running.</tspan> Visibility is the only thing that changes.</text>
      <text x="370" y="37" text-anchor="middle" font-size="11.5" fill="var(--at-muted)">USD evaluates both rigs every frame; Hydra only draws the visible one. Switch = hard cut, no blend, but reads as a state change.</text>
    </g>
  </svg>
  <p class="figure-caption">Animation switching by visibility. The CSV&rsquo;s <code>MoveState</code> column dictates which child is <code>inherited</code> at each frame.</p>
</div>

<h3>The mechanism, step by step</h3>

<ul class="clean">
  <li><strong>Every agent has multiple child <code>SkelRoot</code>s</strong> under its <code>Xform</code> — one per clip it might ever play. Typically <code>/walk</code> and <code>/idle</code>. Each is fully wired up: its own skeleton, its own <code>animationSource</code> pointing at a pre-looped clip.</li>
  <li><strong>Both clips are <em>always running</em>.</strong> Advancing samples every frame, for the entire timeline. They cost CPU/GPU continuously even when nobody can see them.</li>
  <li><strong>At every frame the CSV&rsquo;s <code>MoveState</code> column says what the agent is doing.</strong> The build script reads it and authors USD <code>visibility</code> on the children: <em>exactly one child is</em> <code>inherited</code><em>; every other child is</em> <code>invisible</code>.</li>
  <li><strong>Hydra ticks invisible rigs but doesn&rsquo;t draw them.</strong> To the eye, the agent has instantly snapped from one animation to another. There&rsquo;s no blend — it&rsquo;s a hard cut — but at crowd scale it reads as a state change.</li>
  <li><strong>Before spawn / after despawn, all children are <code>invisible</code>.</strong> So the agent simply doesn&rsquo;t appear, rather than defaulting to some bind pose.</li>
</ul>

<div class="callout warn">
  <span class="title">MoveState&nbsp;→&nbsp;clip mapping</span>
  <p><code>{ 0: walk, 1: walk, 2: idle, 3: up, 4: down }</code></p>
  <p style="margin-top:8px"><strong>State 1 (&ldquo;sliding&rdquo;) maps to walk, not idle</strong> — even though its label suggests otherwise. The CSV shows state-1 frames have the highest mean per-frame displacement; the agent is really moving. If you mapped state 1 to idle, the body would slide across the floor (because the <code>Xform</code> is still being translated from the CSV) while the feet stayed planted. The classic moon-walk artifact. The mapping was chosen by measuring real displacement per state, not by trusting the label.</p>
</div>

<!-- ───────────────────────── 10. TRADEOFFS ───────────────────────── -->
<h2 id="tradeoffs"><span class="step">10</span>The price of having no graph</h2>

<div class="grid g3">
  <div class="box">
    <div class="icon amber">!</div>
    <h4>Lockstep</h4>
    <p>Agents sharing one looping clip step in unison. Mitigation: a small pool of phase-shifted variants, assigned round-robin.</p>
  </div>
  <div class="box">
    <div class="icon amber">!</div>
    <h4>Foot-sliding</h4>
    <p>Fixed cadence vs. variable CSV ground speed → feet skate. Mitigation: advance the clip by distance travelled instead of by time. Heavier.</p>
  </div>
  <div class="box">
    <div class="icon amber">!</div>
    <h4>Rig count</h4>
    <p>~2 skinned rigs per agent × 1,583 agents ≈ 3,000 active rigs. Heavy. For full crowd density there&rsquo;s the &ldquo;idle statue&rdquo; fallback: bake the skeleton out so the mesh is frozen but instanceable.</p>
  </div>
</div>

<p>An animation graph would solve lockstep <em>and</em> foot-slide for free — but it corrupts the path, so we trade polish for fidelity.</p>

<h3>Three crowd strategies, side by side</h3>

<table>
  <tr>
    <th></th>
    <th>Anim Graph</th>
    <th>Idle Statue (instanced)</th>
    <th>Baked Loop</th>
  </tr>
  <tr>
    <td>Limbs animate?</td>
    <td><span class="tag good">yes</span></td>
    <td><span class="tag bad">no (frozen)</span></td>
    <td><span class="tag good">yes</span></td>
  </tr>
  <tr>
    <td>Path fidelity</td>
    <td><span class="tag bad">drifts</span></td>
    <td><span class="tag good">exact</span></td>
    <td><span class="tag good">exact</span></td>
  </tr>
  <tr>
    <td>Instanced?</td>
    <td>no</td>
    <td><span class="tag good">yes (no skeleton)</span></td>
    <td>no</td>
  </tr>
  <tr>
    <td>Cost @ 1,583 agents</td>
    <td>heavy (rigs + per-tick graph)</td>
    <td><span class="tag good">light (4 meshes)</span></td>
    <td>heavy (~3,000 rigs)</td>
  </tr>
  <tr>
    <td>Per-tick OmniGraph</td>
    <td>yes</td>
    <td>no</td>
    <td><span class="tag good">none</span></td>
  </tr>
  <tr>
    <td>Use it for</td>
    <td style="color:var(--at-faint)">— banned (path drift) —</td>
    <td>full-crowd background density</td>
    <td><strong style="color:var(--at-green)">animated foreground crowd, on-path</strong></td>
  </tr>
</table>

<!-- ───────────────────────── CLOSING ───────────────────────── -->
<h2><span class="step">∎</span>Putting it all together</h2>

<p>The whole design is a chain of forced moves. The simulation&rsquo;s recorded path is sacred → no animation graph. With no graph, time-sampled clips clamp → bake them long. Without baking long, the rig freezes. With instancing → the rig T-poses. So: non-instanced, baked-long, no-graph, world motion owned by the agent <code>Xform</code>, animation switched by toggling visibility on parallel skinned rigs.</p>

<p>Once you see the four layers as separate things — mesh, skeleton, skin, clip — and then add textures as their own independent axis on the mesh, every constraint in this pipeline lands in a specific layer and the choices become obvious. The baked loop isn&rsquo;t clever; it&rsquo;s what&rsquo;s left after the engine eliminates the other options.</p>

<div class="callout good">
  <span class="title">If you remember one thing</span>
  <p>World motion belongs on the <strong>Xform</strong>. Limb motion belongs on the <strong>clip</strong>. Keep them in separate prims and the simulation can never fight the animation.</p>
</div>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong &middot; SNCF crowd → USD pipeline · Stage 06 (Baked Loop) &middot; May 2026</p>
  <p style="margin-top:8px">The takeaway: crowd simulation, USD, Omniverse</p>
</div>
`;

export const script = ``;
