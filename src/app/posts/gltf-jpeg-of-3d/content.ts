export const styles = `
  .artifact-scope{
    font-size:17px;line-height:1.7;
    -webkit-font-smoothing:antialiased;
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
  .artifact-scope h3{font-size:19px;margin:32px 0 8px;font-weight:700;color:var(--at-text);
    font-family:var(--at-font-display)}
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
  <div class="eyebrow">Geospatial 3D · Part 4 of 5</div>
  <h1>glTF: The JPEG of 3D</h1>
  <p class="lead">Earlier parts said streamed tiles ship as <strong>glTF/GLB</strong> and skipped past it. This is the zoom-in. glTF is the actual mesh-and-material file inside every tile &mdash; and understanding its design tells you <em>why</em> a 3D Tiles streamer can deliver a whole planet at all.</p>
  <p class="byline">Geospatial 3D series · Part 4 · ~7 min read</p>
</header>

<div class="toc">
  <h3>What this post covers</h3>
  <ol>
    <li><a href="#split">Authoring vs delivery: the split</a></li>
    <li><a href="#box">What&rsquo;s in the box: JSON + buffers + textures</a></li>
    <li><a href="#indirection">buffer &rarr; bufferView &rarr; accessor</a></li>
    <li><a href="#pbr">Materials: PBR metallic-roughness</a></li>
    <li><a href="#compression">Compression extensions</a></li>
    <li><a href="#landing">How it lands in an RTX renderer</a></li>
    <li><a href="#usd">glTF vs USD: don&rsquo;t conflate them</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. SPLIT ───────────────────────── -->
<h2 id="split"><span class="step">1</span>Authoring vs delivery: the split</h2>

<p>3D formats fall into two camps, and confusing them is the root of most confusion:</p>

<div class="grid g2">
  <div class="box">
    <h4>Authoring / interchange</h4>
    <p>USD, FBX, OBJ, Blender <code>.blend</code>. Built for <em>editing</em>: rich, flexible, layered, lossless &mdash; and slow/heavy to load. Think <strong>Photoshop PSD</strong>.</p>
  </div>
  <div class="box">
    <h4>Runtime / delivery</h4>
    <p>glTF. Built for <em>one job</em>: ship a finished asset to a GPU as fast as possible, with minimal parsing. Lossy of editing convenience, optimal for display. Think <strong>JPEG</strong>.</p>
  </div>
</div>

<p>glTF stands for <strong>GL Transmission Format</strong> &mdash; the &ldquo;Transmission&rdquo; is the entire point. It is maintained by Khronos (the OpenGL/Vulkan group). When you&rsquo;re <em>streaming</em> tiles to a viewer, you want delivery, not authoring. That&rsquo;s why 3D Tiles chose glTF for payloads.</p>

<div class="callout warn">
  <span class="title">The takeaway</span>
  <p>glTF&rsquo;s design goal is &ldquo;least CPU work between download and first triangle on screen.&rdquo; Almost every structural choice below exists to push data straight into GPU buffers <em>without transformation</em>. That property is what makes per-frame tile streaming affordable.</p>
</div>

<!-- ───────────────────────── 2. BOX ───────────────────────── -->
<h2 id="box"><span class="step">2</span>What&rsquo;s in the box: JSON scene graph + binary buffers + textures</h2>

<p>A glTF asset is three kinds of data, referenced by indices:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 780 300" role="img" aria-label="glTF three-part structure">
    <rect x="20" y="40" width="220" height="220" rx="12" fill="var(--at-amber-soft)" stroke="var(--at-amber)"/>
    <text x="36" y="66" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">.gltf  (JSON)</text>
    <text x="36" y="92" fill="var(--at-muted)" font-size="12">scene graph + recipe:</text>
    <text x="36" y="114" fill="var(--at-faint)" font-size="12">• scenes → nodes</text>
    <text x="36" y="134" fill="var(--at-faint)" font-size="12">• meshes, materials</text>
    <text x="36" y="154" fill="var(--at-faint)" font-size="12">• cameras, animations</text>
    <text x="36" y="174" fill="var(--at-faint)" font-size="12">• accessors / views</text>
    <text x="36" y="206" fill="var(--at-faint)" font-size="11">no raw vertex data —</text>
    <text x="36" y="222" fill="var(--at-faint)" font-size="11">just pointers + offsets</text>

    <rect x="290" y="40" width="220" height="105" rx="12" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/>
    <text x="306" y="66" fill="var(--at-blue)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">.bin  (binary buffer)</text>
    <text x="306" y="92" fill="var(--at-muted)" font-size="12">tightly packed bytes:</text>
    <text x="306" y="112" fill="var(--at-faint)" font-size="12">vertex positions, normals,</text>
    <text x="306" y="130" fill="var(--at-faint)" font-size="12">UVs, indices, anim keys</text>

    <rect x="290" y="160" width="220" height="100" rx="12" fill="var(--at-green-soft)" stroke="var(--at-green)"/>
    <text x="306" y="186" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">textures</text>
    <text x="306" y="212" fill="var(--at-faint)" font-size="12">PNG / JPG, or compressed</text>
    <text x="306" y="230" fill="var(--at-faint)" font-size="12">KTX2 / Basis (GPU-ready)</text>

    <rect x="560" y="40" width="200" height="220" rx="12" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-dasharray="5"/>
    <text x="576" y="66" fill="var(--at-green)" font-family="var(--at-font-mono)" font-size="13" font-weight="700">.glb  (one file)</text>
    <text x="576" y="92" fill="var(--at-muted)" font-size="12">binary container that</text>
    <text x="576" y="110" fill="var(--at-muted)" font-size="12">bundles JSON + bin +</text>
    <text x="576" y="128" fill="var(--at-muted)" font-size="12">textures into a single</text>
    <text x="576" y="146" fill="var(--at-muted)" font-size="12">download.</text>
    <text x="576" y="176" fill="var(--at-accent)" font-size="12" font-weight="700">★ This is what tiles</text>
    <text x="576" y="194" fill="var(--at-accent)" font-size="12" font-weight="700">  use — 1 request,</text>
    <text x="576" y="212" fill="var(--at-accent)" font-size="12" font-weight="700">  no extra round-trips.</text>

    <defs><marker id="gltf-ar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-blue)"/></marker></defs>
    <path d="M240 120 H290" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#gltf-ar)"/>
    <path d="M240 150 C265 200 265 200 290 205" stroke="var(--at-blue)" stroke-width="2" fill="none" marker-end="url(#gltf-ar)"/>
    <path d="M510 150 H560" stroke="var(--at-green)" stroke-width="2" marker-end="url(#gltf-ar)"/>
  </svg>
  <p class="figure-caption"><code>.gltf</code> is the recipe (JSON, human-readable); <code>.bin</code> is the bulk geometry (opaque bytes); textures are images. <strong><code>.glb</code></strong> packs all three into one binary file &mdash; which is why 3D Tiles ships GLB: one fetch per tile, zero extra round-trips.</p>
</div>

<!-- ───────────────────────── 3. INDIRECTION ───────────────────────── -->
<h2 id="indirection"><span class="step">3</span>The clever part: <code>buffer &rarr; bufferView &rarr; accessor</code></h2>

<p>This three-level indirection is the heart of glTF and the reason it loads fast. Read it bottom-up:</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 280" role="img" aria-label="buffer bufferView accessor indirection">
    <rect x="40" y="40" width="680" height="46" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/>
    <text x="52" y="60" fill="var(--at-blue)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">buffer</text>
    <text x="52" y="76" fill="var(--at-faint)" font-size="11">one long blob of bytes (the .bin) — the GPU upload is literally this, verbatim</text>

    <rect x="40" y="120" width="320" height="46" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)"/>
    <text x="52" y="140" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">bufferView A</text>
    <text x="52" y="156" fill="var(--at-faint)" font-size="11">bytes 0–4096: "the positions region"</text>
    <rect x="400" y="120" width="320" height="46" rx="8" fill="var(--at-violet-soft)" stroke="var(--at-violet)"/>
    <text x="412" y="140" fill="var(--at-violet)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">bufferView B</text>
    <text x="412" y="156" fill="var(--at-faint)" font-size="11">bytes 4096–6000: "the indices region"</text>

    <rect x="40" y="200" width="320" height="56" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)"/>
    <text x="52" y="222" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">accessor 0 → POSITION</text>
    <text x="52" y="240" fill="var(--at-faint)" font-size="11">"read view A as 24 × VEC3 float"</text>
    <rect x="400" y="200" width="320" height="56" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)"/>
    <text x="412" y="222" fill="var(--at-amber)" font-family="var(--at-font-mono)" font-size="12" font-weight="700">accessor 1 → indices</text>
    <text x="412" y="240" fill="var(--at-faint)" font-size="11">"read view B as 36 × SCALAR ushort"</text>

    <defs><marker id="gltf-d" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--at-faint)"/></marker></defs>
    <path d="M200 120 V86" stroke="var(--at-faint)" marker-end="url(#gltf-d)"/>
    <path d="M560 120 V86" stroke="var(--at-faint)" marker-end="url(#gltf-d)"/>
    <path d="M200 200 V166" stroke="var(--at-faint)" marker-end="url(#gltf-d)"/>
    <path d="M560 200 V166" stroke="var(--at-faint)" marker-end="url(#gltf-d)"/>
  </svg>
  <p class="figure-caption"><strong>buffer</strong> = raw bytes (uploaded to the GPU as-is). <strong>bufferView</strong> = &ldquo;this slice of bytes is one logical chunk.&rdquo; <strong>accessor</strong> = &ldquo;interpret this slice as N elements of type VEC3/float, etc.&rdquo; The renderer can hand the buffer straight to the GPU and just point attributes at offsets &mdash; <em>no parsing or reformatting of vertex data.</em></p>
</div>

<div class="callout warn">
  <span class="title">Why this matters for streaming</span>
  <p>A format that needed to <em>parse</em> millions of vertices (like text OBJ) would choke a streaming engine. glTF&rsquo;s binary-blob-plus-offsets design means decoding a tile is mostly &ldquo;download bytes, set a few pointers.&rdquo; That&rsquo;s the difference between a planet that streams smoothly and one that stutters.</p>
</div>

<!-- ───────────────────────── 4. PBR ───────────────────────── -->
<h2 id="pbr"><span class="step">4</span>Materials: PBR metallic-roughness</h2>

<p>glTF standardizes on <strong>physically based rendering (PBR)</strong> with the metallic-roughness model. Instead of ad-hoc shaders, a surface is described by a few physically meaningful values:</p>

<table>
  <tr><th>Channel</th><th>Meaning</th></tr>
  <tr><td><code>baseColor</code></td><td>The surface albedo (texture and/or factor).</td></tr>
  <tr><td><code>metallic</code></td><td>0 = dielectric (plastic, wood), 1 = metal.</td></tr>
  <tr><td><code>roughness</code></td><td>0 = mirror-smooth, 1 = fully matte.</td></tr>
  <tr><td><code>normal / occlusion / emissive</code></td><td>Surface detail, baked shadowing, glow.</td></tr>
</table>

<p>Because the model is standardized and renderer-agnostic, the <em>same</em> glTF looks consistent across viewers &mdash; a photoreal aerial tile and a hand-modeled asset obey the same lighting math.</p>

<!-- ───────────────────────── 5. COMPRESSION ───────────────────────── -->
<h2 id="compression"><span class="step">5</span>Compression extensions (why modern tiles are small)</h2>

<p>Base glTF is compact but not compressed. The 3D Tiles ecosystem leans on Khronos extensions:</p>

<table>
  <tr><th>Extension</th><th>What it does</th></tr>
  <tr><td><strong>Draco</strong> <code>KHR_draco_mesh_compression</code></td><td>Compresses mesh geometry dramatically.</td></tr>
  <tr><td><strong>Meshopt</strong> <code>EXT_meshopt_compression</code></td><td>Fast-decoding geometry compression.</td></tr>
  <tr><td><strong>KTX2 / Basis Universal</strong> <code>KHR_texture_basisu</code></td><td>GPU-compressed textures that stay compressed <em>in VRAM</em>, not just on the wire.</td></tr>
</table>

<p>Cesium Native decodes these on the way in &mdash; you generally don&rsquo;t touch them, but they&rsquo;re why a city tile is megabytes instead of gigabytes.</p>

<!-- ───────────────────────── 6. LANDING ───────────────────────── -->
<h2 id="landing"><span class="step">6</span>How it lands in an RTX renderer</h2>

<div class="figure">
  <svg class="diagram" viewBox="0 0 780 170" role="img" aria-label="glTF to MDL to RTX">
    <rect x="20" y="55" width="170" height="60" rx="10" fill="var(--at-amber-soft)" stroke="var(--at-amber)"/>
    <text x="105" y="80" fill="var(--at-amber)" font-size="12" font-weight="700" text-anchor="middle">GLB tile</text>
    <text x="105" y="98" fill="var(--at-faint)" font-size="10" text-anchor="middle">glTF PBR mesh</text>
    <rect x="300" y="55" width="170" height="60" rx="10" fill="var(--at-violet-soft)" stroke="var(--at-violet)"/>
    <text x="385" y="80" fill="var(--at-violet)" font-size="12" font-weight="700" text-anchor="middle">Cesium Native</text>
    <text x="385" y="98" fill="var(--at-faint)" font-size="10" text-anchor="middle">decode → Fabric</text>
    <rect x="580" y="55" width="180" height="60" rx="10" fill="var(--at-green-soft)" stroke="var(--at-green)"/>
    <text x="670" y="80" fill="var(--at-green)" font-size="12" font-weight="700" text-anchor="middle">RTX (MDL materials)</text>
    <text x="670" y="98" fill="var(--at-faint)" font-size="10" text-anchor="middle">pixels</text>
    <defs><marker id="gltf-m" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="var(--at-blue)"/></marker></defs>
    <path d="M190 85 H300" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#gltf-m)"/>
    <path d="M470 85 H580" stroke="var(--at-blue)" stroke-width="2" marker-end="url(#gltf-m)"/>
    <text x="300" y="150" fill="var(--at-faint)" font-size="11">glTF PBR (metallic-roughness) is translated to MDL — same physical inputs, RTX shader.</text>
  </svg>
  <p class="figure-caption">The &ldquo;glTF PBR &rarr; MDL&rdquo; step: Cesium Native decodes the GLB into Fabric, and the metallic-roughness material maps to an MDL material for RTX. Geometry maps 1:1 (no subdivision), so what&rsquo;s in the tile is what you render.</p>
</div>

<!-- ───────────────────────── 7. USD ───────────────────────── -->
<h2 id="usd"><span class="step">7</span>glTF vs USD &mdash; don&rsquo;t conflate them</h2>

<div class="callout">
  <span class="title">Two formats, two jobs</span>
  <p>You author and compose in <strong>USD</strong> &mdash; that&rsquo;s the persistent scene you edit and save. Streamed geospatial data arrives as <strong>glTF</strong> tiles that are decoded into Fabric at runtime and <em>never</em> written into that saved USD. They meet only at render time. So: editing the scene = USD; the photoreal backdrop = transient glTF. And if you ever export your authored model <em>out</em> to share with a web viewer, glTF/GLB is the natural target &mdash; that&rsquo;s the reverse direction.</p>
</div>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2 id="tldr"><span class="step">&#8721;</span>TL;DR</h2>

<ul class="clean">
  <li>glTF = <strong>delivery</strong> format (the &ldquo;JPEG of 3D&rdquo;); USD/FBX = <strong>authoring</strong> formats (the &ldquo;PSD&rdquo;). 3D Tiles ships glTF because streaming wants delivery.</li>
  <li>Structure: JSON scene-graph recipe + binary <code>.bin</code> buffers + textures, bundled as <strong>.glb</strong> (one fetch per tile).</li>
  <li><strong>buffer &rarr; bufferView &rarr; accessor</strong> lets bytes go straight to the GPU with no vertex parsing &mdash; that&rsquo;s what makes tiles cheap to decode.</li>
  <li>Materials are <strong>PBR metallic-roughness</strong>; geometry/textures compress via Draco / meshopt / KTX2.</li>
  <li>Cesium Native decodes GLB &rarr; Fabric, and glTF PBR is translated to <strong>MDL</strong> for RTX. Streamed glTF stays out of your saved USD.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong · Geospatial 3D series · Part 4 of 5 · June 2026</p>
  <p style="margin-top:8px"><a href="/posts/usd-fabric-pixel">Next → USD → Fabric → Pixel: It&rsquo;s Just React (and Doom)</a></p>
</div>
`;

export const script = ``;
