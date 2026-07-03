export const styles = `
  .artifact-scope{
    font-size:18px;line-height:1.7;
    -webkit-font-smoothing:antialiased;
    font-family:var(--at-font-body);
    background-image:radial-gradient(var(--at-line) 0.8px, transparent 0.8px);
    background-size:26px 26px;
  }
  .artifact-scope *{box-sizing:border-box}
  .artifact-scope .wrap{max-width:880px;margin:0 auto;padding:0 24px}

  /* ---- hero ---- */
  .artifact-scope header.hero{padding:80px 0 36px}
  .artifact-scope .eyebrow{
    font-family:var(--at-font-mono);font-size:12.5px;letter-spacing:.22em;
    text-transform:uppercase;color:var(--at-amber);font-weight:700;
    display:flex;align-items:center;gap:10px;margin-bottom:22px;
  }
  .artifact-scope .eyebrow::before{content:"";width:34px;height:2px;background:var(--at-amber)}
  .artifact-scope h1{
    font-family:var(--at-font-display);font-weight:800;
    font-size:clamp(38px,6.5vw,68px);line-height:1.02;letter-spacing:-.02em;
    margin:0 0 22px;
  }
  .artifact-scope h1 em{font-style:normal;color:var(--at-blue)}
  .artifact-scope .dek{font-size:21px;color:var(--at-muted);max-width:42ch;margin:0}

  /* ---- log strip ---- */
  .artifact-scope .logstrip{
    margin:42px 0 8px;border:1.5px solid var(--at-line-strong);border-radius:14px;
    background:var(--at-inset);color:var(--at-text);overflow:hidden;
    box-shadow:8px 8px 0 var(--at-line);
  }
  .artifact-scope .logstrip .bar{
    display:flex;gap:7px;padding:11px 16px;background:var(--at-surface);
    border-bottom:1px solid var(--at-line);
  }
  .artifact-scope .logstrip .bar i{width:11px;height:11px;border-radius:50%;display:block}
  .artifact-scope .dot1{background:var(--at-accent)}
  .artifact-scope .dot2{background:var(--at-amber)}
  .artifact-scope .dot3{background:var(--at-green)}
  .artifact-scope .logstrip pre{
    margin:0;padding:18px 20px;font-family:var(--at-font-mono);font-size:12.5px;
    line-height:1.85;overflow-x:auto;white-space:pre;color:var(--at-muted);
  }
  .artifact-scope .logstrip pre b{color:var(--at-amber);font-weight:700}
  .artifact-scope .logstrip pre .t{color:var(--at-blue)}

  /* ---- sections ---- */
  .artifact-scope section{padding:30px 0}
  .artifact-scope .step{
    font-family:var(--at-font-mono);font-size:12.5px;letter-spacing:.18em;
    text-transform:uppercase;font-weight:700;color:var(--at-blue);
    margin-bottom:6px;display:flex;align-items:baseline;gap:12px;
  }
  .artifact-scope .step .n{
    font-family:var(--at-font-display);font-size:15px;
    background:var(--at-text);color:var(--at-bg);border-radius:7px;
    padding:2px 9px;letter-spacing:0;
  }
  .artifact-scope h2{
    font-family:var(--at-font-display);font-weight:700;
    font-size:clamp(27px,4vw,38px);line-height:1.08;letter-spacing:-.015em;
    margin:4px 0 16px;
  }
  .artifact-scope p{margin:0 0 18px}
  .artifact-scope .lead{font-size:20px}
  .artifact-scope strong{font-weight:700}
  .artifact-scope .mono{font-family:var(--at-font-mono);font-size:.92em;background:var(--at-inset);
    padding:1px 6px;border-radius:5px;border:1px solid var(--at-line)}
  .artifact-scope a{color:var(--at-blue)}

  /* callout */
  .artifact-scope .note{
    border-left:4px solid var(--at-amber);background:var(--at-amber-soft);
    padding:16px 20px;border-radius:0 12px 12px 0;margin:24px 0;
    font-size:16.5px;color:var(--at-muted);
  }
  .artifact-scope .note b{color:var(--at-text)}
  .artifact-scope .note.red{border-color:var(--at-accent);background:var(--at-accent-soft)}
  .artifact-scope .note.green{border-color:var(--at-green);background:var(--at-green-soft)}

  /* figure */
  .artifact-scope figure{margin:30px 0}
  .artifact-scope figure svg{width:100%;height:auto;display:block;
    background:var(--at-surface);border:1.5px solid var(--at-text);border-radius:14px;
    box-shadow:6px 6px 0 var(--at-line)}
  .artifact-scope figcaption{font-family:var(--at-font-mono);font-size:12.5px;color:var(--at-muted);
    margin-top:11px;padding-left:4px}
  .artifact-scope figcaption b{color:var(--at-text)}

  /* svg text helpers */
  .artifact-scope .svg-h{font-family:var(--at-font-display);font-weight:700}
  .artifact-scope .svg-l{font-family:var(--at-font-mono)}
  .artifact-scope .svg-b{font-family:var(--at-font-body)}

  .artifact-scope .divider{height:1px;background:var(--at-line);margin:8px 0}

  /* checklist */
  .artifact-scope .check{list-style:none;padding:0;margin:14px 0}
  .artifact-scope .check li{
    position:relative;padding:14px 16px 14px 52px;margin-bottom:10px;
    background:var(--at-surface);border:1.5px solid var(--at-line);border-radius:12px;
    font-size:16.5px;
  }
  .artifact-scope .check li::before{
    content:"?";position:absolute;left:14px;top:50%;transform:translateY(-50%);
    width:24px;height:24px;border-radius:6px;background:var(--at-text);color:var(--at-bg);
    font-family:var(--at-font-display);font-weight:800;font-size:14px;
    display:flex;align-items:center;justify-content:center;
  }
  .artifact-scope .check li b{color:var(--at-blue)}

  .artifact-scope footer{padding:50px 0 90px;color:var(--at-muted);font-size:15px}
  .artifact-scope footer .tag{font-family:var(--at-font-mono);font-size:12px;letter-spacing:.1em;
    text-transform:uppercase;color:var(--at-amber)}
  .artifact-scope ::selection{background:var(--at-amber);color:var(--at-bg)}
`;

export const html = `
<div class="wrap">

  <header class="hero">
    <div class="eyebrow">Graphics internals</div>
    <h1>RtPso &mdash; <em>and why you<br>wait 85 seconds</em></h1>
    <p class="dek">A debugging story that turned into a mental model. It begins, like most of them do, with an app that simply refused to start.</p>
  </header>

  <!-- ===================== THE STORY ===================== -->
  <section>
    <p class="lead">It was supposed to be a routine restart. I launched the Omniverse app and waited for the window to appear. Ten seconds passed. Then twenty. No window, no crash, no error dialog &mdash; just a process sitting there, fans spinning, apparently doing nothing at all.</p>
    <p>The temptation, when something hangs like that, is to assume it's broken &mdash; kill it, restart, repeat. But before reaching for the power switch, I did the one thing that actually moves a debugging session forward: I opened the logs. And there it was, the same line printing every five seconds, the number on the end creeping upward each time I scrolled:</p>

    <div class="logstrip">
      <div class="bar"><i class="dot1"></i><i class="dot2"></i><i class="dot3"></i></div>
<pre><span class="t">2026-04-22T14:08:44Z</span> [Info] [gpu.foundation.plugin]
PsoRaytracing.cpp:<b>waitForAsyncInitFinished()</b>:688:
*** Waiting for <b>RtPso async group async compilation</b>: <b>85 seconds so far</b></pre>
    </div>
    <figcaption>Not an error &mdash; an <b>[Info]</b> line. The app wasn't broken. It was <em>waiting</em>, and politely telling me so every five seconds.</figcaption>

    <p>Eighty-five seconds. To <em>start</em>. My first reaction was relief &mdash; at least it wasn't a deadlock. My second was confusion, because one word in that line refused to sit still: <strong>async</strong>. If the work is asynchronous, running off on some background thread, then <em>why is anything waiting on it?</em> &ldquo;Async&rdquo; and &ldquo;blocked for 85 seconds&rdquo; sound like a contradiction.</p>
    <p>So I stopped guessing and went back to fundamentals. To really understand this one line &mdash; what an <span class="mono">RtPso</span> is, what its &ldquo;async group&rdquo; compiles, and why the main thread ends up frozen anyway &mdash; I had to rebuild the whole chain from the bottom: from what the GPU actually executes, all the way up to the moment a background compile reaches out and stalls your app. Here is that chain, one layer at a time.</p>
  </section>

  <!-- ===================== LAYER 0 ===================== -->
  <section>
    <div class="step"><span class="n">00</span> The thing nobody tells you first</div>
    <h2>The GPU does not run your shader code</h2>
    <p class="lead">Your <span class="mono">.hlsl</span> / <span class="mono">.slang</span> shader is human text. The GPU executes raw machine instructions for one <em>specific</em> chip. Between those two worlds sit two translation steps.</p>
    <p>The first step happens <strong>offline</strong> at build time: a compiler turns your source into a portable <strong>intermediate representation</strong> (DXIL on DirectX, SPIR-V on Vulkan). This IR is still not runnable &mdash; it is a halfway language.</p>
    <p>The second step happens <strong>at runtime, on the user's machine</strong>: the GPU driver takes that IR and compiles it down to the actual instruction set (ISA) of the GPU sitting in the box. An RTX 4090 and an A10G get different machine code from the same IR. The driver is the only thing that knows the target, so this step <em>cannot</em> be done ahead of time by you.</p>

    <figure>
      <svg viewBox="0 0 840 250" xmlns="http://www.w3.org/2000/svg">
        <!-- box 1 -->
        <rect x="24" y="78" width="190" height="92" rx="12" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="2"/>
        <text x="119" y="108" text-anchor="middle" class="svg-h" font-size="18" fill="var(--at-text)">Shader source</text>
        <text x="119" y="132" text-anchor="middle" class="svg-l" font-size="12.5" fill="var(--at-muted)">.hlsl / .slang</text>
        <text x="119" y="152" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-muted)">human-written text</text>
        <!-- box 2 -->
        <rect x="325" y="78" width="190" height="92" rx="12" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="2"/>
        <text x="420" y="108" text-anchor="middle" class="svg-h" font-size="18" fill="var(--at-blue)">Intermediate (IR)</text>
        <text x="420" y="132" text-anchor="middle" class="svg-l" font-size="12.5" fill="var(--at-blue)">DXIL / SPIR-V</text>
        <text x="420" y="152" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-muted)">portable, not runnable</text>
        <!-- box 3 -->
        <rect x="626" y="78" width="190" height="92" rx="12" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="2"/>
        <text x="721" y="108" text-anchor="middle" class="svg-h" font-size="18" fill="var(--at-violet)">GPU machine code</text>
        <text x="721" y="132" text-anchor="middle" class="svg-l" font-size="12.5" fill="var(--at-violet)">native ISA</text>
        <text x="721" y="152" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-muted)">runs on the chip</text>
        <!-- arrows -->
        <g stroke="var(--at-text)" stroke-width="2" fill="var(--at-text)">
          <line x1="214" y1="124" x2="318" y2="124"/>
          <polygon points="318,124 308,119 308,129"/>
          <line x1="515" y1="124" x2="619" y2="124"/>
          <polygon points="619,124 609,119 609,129"/>
        </g>
        <text x="266" y="60" text-anchor="middle" class="svg-l" font-size="11.5" fill="var(--at-muted)">compiler</text>
        <text x="266" y="200" text-anchor="middle" class="svg-l" font-size="11.5" fill="var(--at-blue)">build time &middot; offline</text>
        <text x="567" y="60" text-anchor="middle" class="svg-l" font-size="11.5" fill="var(--at-muted)">GPU driver</text>
        <text x="567" y="200" text-anchor="middle" class="svg-l" font-size="11.5" fill="var(--at-violet)">runtime &middot; on target GPU</text>
      </svg>
      <figcaption><b>Key takeaway:</b> the expensive translation (IR &rarr; native ISA) is forced to happen on the end machine, at runtime. Hold onto this &mdash; it is the root cause of everything below.</figcaption>
    </figure>
  </section>

  <!-- ===================== LAYER 1 ===================== -->
  <section>
    <div class="step"><span class="n">01</span> Why "PSO" exists at all</div>
    <h2>Baking state into one frozen object</h2>
    <p>A shader never runs alone. To draw anything the GPU also needs a pile of <strong>state</strong>: which shaders, the blend mode, depth test, rasterizer settings, vertex layout, and resource bindings. In old APIs (DX11, OpenGL) you set these one at a time, and the driver lazily validated and compiled the combination <em>the moment you issued a draw call</em>. That caused unpredictable stutter &mdash; the infamous "shader compile hitch" mid-frame.</p>
    <p>Modern APIs (DX12, Vulkan) fixed this with the <strong>Pipeline State Object</strong>. You declare the entire combination once, up front, and the driver compiles and validates it into a single <em>immutable</em> object. Drawing then just says "use PSO #7" &mdash; cheap and predictable. The cost didn't disappear; it got <strong>moved to an explicit creation step</strong>.</p>
    <div class="note"><b>PSO in one sentence:</b> a pre-compiled, frozen bundle of "everything the GPU needs to execute a pipeline," created ahead of time so the hot path stays fast.</div>
  </section>

  <!-- ===================== LAYER 2 ===================== -->
  <section>
    <div class="step"><span class="n">02</span> Where ray tracing diverges</div>
    <h2>A raster pipeline is a line. A ray pipeline is a tree.</h2>
    <p>A rasterization PSO describes a fixed, linear pipeline: vertices in, pixels out, a known set of stages. The driver knows the whole shape in advance.</p>
    <p>Ray tracing is not linear. You fire a ray; it can hit <em>any</em> geometry in the scene, and what runs next depends on <em>what</em> it hit. A hit can spawn more rays (reflections, shadows, GI), recursively. So a ray tracing pipeline is not one program &mdash; it is a <strong>collection of many shader programs</strong> the GPU dispatches dynamically:</p>
    <p style="margin-left:4px">
      <span class="mono">ray generation</span> &middot; <span class="mono">miss</span> &middot; <span class="mono">closest-hit</span> &middot; <span class="mono">any-hit</span> &middot; <span class="mono">intersection</span> &middot; <span class="mono">callable</span>
    </p>
    <p>Because the GPU picks which hit shader to run based on the geometry struck, it needs a lookup table mapping geometry &rarr; shader: the <strong>Shader Binding Table (SBT)</strong>. The <strong>RtPso</strong> (Ray Tracing Pipeline State Object &mdash; <span class="mono">RTPSO</span> in DXR, "ray tracing pipeline" in Vulkan) is the object that bundles <em>all</em> of those shaders together, plus how they link, the max recursion depth, and the payload/attribute sizes that flow between them.</p>

    <figure>
      <svg viewBox="0 0 840 330" xmlns="http://www.w3.org/2000/svg">
        <line x1="420" y1="34" x2="420" y2="300" stroke="var(--at-line)" stroke-width="2" stroke-dasharray="5 6"/>
        <text x="210" y="30" text-anchor="middle" class="svg-l" font-size="12" fill="var(--at-muted)">RASTER PSO &mdash; linear</text>
        <text x="630" y="30" text-anchor="middle" class="svg-l" font-size="12" fill="var(--at-accent)">RT PSO &mdash; branching</text>

        <!-- raster linear -->
        <g>
          <rect x="150" y="58" width="120" height="38" rx="8" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="210" y="82" text-anchor="middle" class="svg-b" font-size="13" fill="var(--at-text)">Vertex</text>
          <rect x="150" y="128" width="120" height="38" rx="8" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="210" y="152" text-anchor="middle" class="svg-b" font-size="13" fill="var(--at-text)">Rasterizer</text>
          <rect x="150" y="198" width="120" height="38" rx="8" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="210" y="222" text-anchor="middle" class="svg-b" font-size="13" fill="var(--at-text)">Pixel</text>
          <rect x="150" y="262" width="120" height="34" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.8"/>
          <text x="210" y="284" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-blue)">framebuffer</text>
          <g stroke="var(--at-text)" stroke-width="1.8" fill="var(--at-text)">
            <line x1="210" y1="96" x2="210" y2="126"/><polygon points="210,128 205,119 215,119"/>
            <line x1="210" y1="166" x2="210" y2="196"/><polygon points="210,198 205,189 215,189"/>
            <line x1="210" y1="236" x2="210" y2="260"/><polygon points="210,262 205,253 215,253"/>
          </g>
        </g>

        <!-- RT branching -->
        <g>
          <rect x="560" y="58" width="140" height="38" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.8"/>
          <text x="630" y="82" text-anchor="middle" class="svg-b" font-size="13" fill="var(--at-amber)">ray generation</text>
          <!-- branch row -->
          <rect x="476" y="150" width="104" height="36" rx="8" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="528" y="173" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-text)">miss</text>
          <rect x="592" y="150" width="104" height="36" rx="8" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="644" y="173" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-text)">closest-hit</text>
          <rect x="708" y="150" width="104" height="36" rx="8" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="760" y="173" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-text)">any-hit</text>
          <!-- recursion -->
          <rect x="592" y="230" width="104" height="34" rx="8" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.8"/>
          <text x="644" y="252" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-amber)">spawn new ray</text>
          <!-- arrows from raygen down to the three -->
          <g stroke="var(--at-text)" stroke-width="1.8" fill="none">
            <path d="M630 96 C630 120, 528 122, 528 148"/>
            <path d="M630 96 L644 148"/>
            <path d="M630 96 C630 120, 760 122, 760 148"/>
          </g>
          <!-- recursion arrow -->
          <path d="M644 186 L644 228" stroke="var(--at-amber)" stroke-width="1.8" fill="none"/>
          <polygon points="644,230 639,221 649,221" fill="var(--at-amber)"/>
          <path d="M696 247 C760 247, 760 120, 700 100" stroke="var(--at-amber)" stroke-width="1.6" fill="none" stroke-dasharray="4 4"/>
          <polygon points="702,103 690,101 697,93" fill="var(--at-amber)"/>
          <text x="772" y="210" class="svg-l" font-size="10.5" fill="var(--at-amber)">recursion</text>
        </g>
      </svg>
      <figcaption><b>The structural reason RT pipelines are heavy:</b> one PSO must hold many shaders that link dynamically, plus the table (SBT) that routes a ray hit to the right one.</figcaption>
    </figure>
  </section>

  <!-- ===================== LAYER 3 ===================== -->
  <section>
    <div class="step"><span class="n">03</span> Why building one is slow</div>
    <h2>Many shaders &times; driver compilation = seconds, not microseconds</h2>
    <p>Now combine Layer&nbsp;0 and Layer&nbsp;2. Creating an RtPso means the <strong>driver compiles the IR of every shader in the group down to native ISA</strong>, links them so any ray can call any hit shader, lays out the SBT, and runs optimizer passes over the whole thing. This is heavy, single-threaded-ish CPU work, and it scales with the number of shaders and their permutations.</p>
    <p>A real scene can have hundreds of materials, each generating shader variants. Compiling all of them cold can take <strong>tens of seconds to minutes</strong>. That is exactly the budget your <span class="mono">85 seconds so far</span> is being spent on.</p>
    <div class="note red"><b>This work is unavoidable the first time.</b> The IR &rarr; ISA step (Layer 0) must run on this exact GPU, and there is a lot of it. The only real lever is: <em>don't pay it twice.</em></div>
  </section>

  <!-- ===================== LAYER 4 ===================== -->
  <section>
    <div class="step"><span class="n">04</span> The lever &mdash; caching</div>
    <h2>Cold path vs warm path</h2>
    <p>Since the compiled ISA only depends on (the shaders + the driver + the GPU), the result is reusable. The driver/engine serializes the compiled PSOs to a <strong>disk cache</strong>. Next launch, if nothing relevant changed, it deserializes the finished blobs instead of recompiling &mdash; milliseconds instead of seconds.</p>

    <figure>
      <svg viewBox="0 0 840 230" xmlns="http://www.w3.org/2000/svg">
        <!-- COLD -->
        <text x="24" y="40" class="svg-l" font-size="12" fill="var(--at-accent)">COLD START &middot; no usable cache</text>
        <g>
          <rect x="24" y="52" width="120" height="40" rx="9" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
          <text x="84" y="77" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-text)">shader IR</text>
          <rect x="200" y="52" width="150" height="40" rx="9" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.8"/>
          <text x="275" y="71" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-amber)">driver compiles</text>
          <text x="275" y="86" text-anchor="middle" class="svg-l" font-size="10.5" fill="var(--at-amber)">IR &rarr; ISA (slow)</text>
          <rect x="406" y="52" width="130" height="40" rx="9" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.8"/>
          <text x="471" y="77" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-violet)">ready RtPso</text>
          <rect x="592" y="52" width="150" height="40" rx="9" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8" stroke-dasharray="4 4"/>
          <text x="667" y="77" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-muted)">write to cache</text>
          <g stroke="var(--at-text)" stroke-width="1.8" fill="var(--at-text)">
            <line x1="144" y1="72" x2="196" y2="72"/><polygon points="198,72 189,67 189,77"/>
            <line x1="350" y1="72" x2="402" y2="72"/><polygon points="404,72 395,67 395,77"/>
            <line x1="536" y1="72" x2="588" y2="72"/><polygon points="590,72 581,67 581,77"/>
          </g>
          <text x="763" y="76" class="svg-l" font-size="20" fill="var(--at-accent)" font-weight="700">&approx;85s</text>
        </g>

        <line x1="24" y1="120" x2="816" y2="120" stroke="var(--at-line)" stroke-width="1.5"/>

        <!-- WARM -->
        <text x="24" y="160" class="svg-l" font-size="12" fill="var(--at-green)">WARM START &middot; cache hit</text>
        <g>
          <rect x="24" y="172" width="150" height="40" rx="9" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.8"/>
          <text x="99" y="191" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-green)">read disk cache</text>
          <text x="99" y="206" text-anchor="middle" class="svg-l" font-size="10.5" fill="var(--at-green)">compiled blobs</text>
          <rect x="230" y="172" width="150" height="40" rx="9" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.8"/>
          <text x="305" y="191" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-green)">deserialize</text>
          <text x="305" y="206" text-anchor="middle" class="svg-l" font-size="10.5" fill="var(--at-green)">no compile</text>
          <rect x="436" y="172" width="130" height="40" rx="9" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.8"/>
          <text x="501" y="197" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-violet)">ready RtPso</text>
          <g stroke="var(--at-green)" stroke-width="1.8" fill="var(--at-green)">
            <line x1="174" y1="192" x2="226" y2="192"/><polygon points="228,192 219,187 219,197"/>
            <line x1="380" y1="192" x2="432" y2="192"/><polygon points="434,192 425,187 425,197"/>
          </g>
          <text x="600" y="198" class="svg-l" font-size="20" fill="var(--at-green)" font-weight="700">&approx;ms</text>
        </g>
      </svg>
      <figcaption><b>The whole optimization game</b> is keeping that cache valid and reusable across launches. Anything that invalidates it (driver update, GPU change, shader change, cache wiped) drops you back onto the red path.</figcaption>
    </figure>
  </section>

  <!-- ===================== LAYER 5 ===================== -->
  <section>
    <div class="step"><span class="n">05</span> The word "async" &mdash; and why you still wait</div>
    <h2>Background compilation, and the moment it blocks</h2>
    <p>Even on a cold start, the engine tries to hide the cost: it kicks off PSO compilation on <strong>background threads</strong> (an "async group") so the main thread can keep going. The intent is that compilation finishes before the GPU actually needs each pipeline.</p>
    <p>But if the main thread reaches a point where it <em>must</em> have a pipeline that isn't compiled yet &mdash; it cannot proceed. It calls something like <span class="mono">waitForAsyncInitFinished()</span> and <strong>blocks</strong> until the background work is done. From the user's side, the app appears frozen. That blocking wait is precisely the log line you saw, ticking up every 5 seconds.</p>

    <figure>
      <svg viewBox="0 0 840 220" xmlns="http://www.w3.org/2000/svg">
        <!-- main thread -->
        <text x="24" y="50" class="svg-l" font-size="11.5" fill="var(--at-muted)">main thread</text>
        <rect x="120" y="34" width="150" height="34" rx="7" fill="var(--at-surface)" stroke="var(--at-text)" stroke-width="1.8"/>
        <text x="195" y="56" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-text)">startup work</text>
        <rect x="290" y="34" width="300" height="34" rx="7" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.8"/>
        <text x="440" y="56" text-anchor="middle" class="svg-b" font-size="12.5" fill="var(--at-accent)">BLOCKED &mdash; waitForAsyncInitFinished()</text>
        <rect x="610" y="34" width="150" height="34" rx="7" fill="var(--at-green-soft)" stroke="var(--at-green)" stroke-width="1.8"/>
        <text x="685" y="56" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-green)">render frame</text>

        <!-- background threads -->
        <text x="24" y="135" class="svg-l" font-size="11.5" fill="var(--at-muted)">async group</text>
        <rect x="290" y="110" width="280" height="30" rx="7" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.8"/>
        <text x="430" y="130" text-anchor="middle" class="svg-b" font-size="12" fill="var(--at-amber)">compiling RtPso (IR &rarr; ISA)&hellip;</text>
        <rect x="290" y="148" width="280" height="22" rx="6" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.4"/>
        <rect x="290" y="174" width="280" height="22" rx="6" fill="var(--at-amber-soft)" stroke="var(--at-amber)" stroke-width="1.4"/>

        <!-- connectors -->
        <line x1="290" y1="51" x2="290" y2="200" stroke="var(--at-line)" stroke-width="1.4" stroke-dasharray="4 4"/>
        <line x1="590" y1="51" x2="590" y2="200" stroke="var(--at-line)" stroke-width="1.4" stroke-dasharray="4 4"/>
        <text x="296" y="214" class="svg-l" font-size="10.5" fill="var(--at-muted)">main thread needs a PSO that isn't ready yet</text>
        <text x="596" y="214" class="svg-l" font-size="10.5" fill="var(--at-green)">compile done &rarr; unblocked</text>
      </svg>
      <figcaption><b>"async &hellip; wait"</b> is not a contradiction: it compiles in the background, but the main thread is forced to stop and wait when it outruns that background work.</figcaption>
    </figure>
  </section>

  <!-- ===================== KIT MAPPING ===================== -->
  <section>
    <div class="divider"></div>
    <div class="step"><span class="n">06</span> Mapping it back to Omniverse Kit</div>
    <h2>What <span class="mono">rtx.psodb</span> is actually doing</h2>
    <p>Now the log reads cleanly. In Kit, the RTX renderer's PSO handling lives in the <strong><span class="mono">gpu.foundation.plugin</span></strong>, and <strong><span class="mono">rtx.psodb</span></strong> is its <em>PSO database</em> &mdash; the layer that tracks, compiles, and caches pipeline state objects, including the ray tracing ones.</p>
    <p>So <span class="mono">PsoRaytracing.cpp &rarr; waitForAsyncInitFinished()</span> means: the RtPso database fired off an <strong>async group</strong> to compile the ray tracing pipelines, the app then needed those pipelines to draw the first frame, and it is now <strong>blocking on the main thread</strong> until that group finishes &mdash; printing a heartbeat every 5 seconds so you know it hasn't deadlocked.</p>
  </section>

  <!-- ===================== CLIFFHANGER ===================== -->
  <section>
    <div class="step"><span class="n">07</span> Your actual question</div>
    <h2>"But this is <em>after</em> a restart&hellip;"</h2>
    <p>Here is the tension worth sitting with. From Layer 4: a warm restart should hit the cache and finish in milliseconds. You are seeing a full cold-style 85-second compile <strong>after</strong> restarting the app. The chain above says that can only mean one thing &mdash; <strong>the warm path isn't happening</strong>. The cache is either not being written, not being found, or being treated as invalid.</p>
    <p>That gives us a precise checklist to run next:</p>
    <ul class="check">
      <li>Is a PSO / shader cache <b>actually being written to disk</b> on first run &mdash; and where?</li>
      <li>On restart, does the process land on the <b>same cache path</b>, or an ephemeral one that's gone (very common in containers / fresh pods)?</li>
      <li>Did anything that <b>invalidates the cache key</b> change between runs &mdash; driver version, GPU model, Kit/RTX version, shader hashes?</li>
      <li>Is the cache being <b>cleared on shutdown</b> or wiped by a clean-restart path?</li>
      <li>Is this the same <b>GPU node</b> each time, or does the scheduler land you on a different one with a cold cache?</li>
    </ul>
    <div class="note green"><b>Where we go from here:</b> with this model in place, the next step is to pull the startup logs around the cache initialization (the lines that name the cache path and report hit/miss) and walk this checklist top to bottom. That tells us exactly which assumption is breaking.</div>
  </section>

  <footer>
    <div class="divider" style="margin-bottom:24px"></div>
    <p class="tag">The takeaway</p>
    <p style="margin-top:8px">GPU runs native ISA, not your source &rarr; IR must be compiled to ISA on the target machine at runtime &rarr; PSOs bake that cost into one frozen object up front &rarr; ray tracing PSOs bundle many dynamically-linked shaders, so they're big and slow to compile &rarr; caching turns the second launch warm &rarr; async compilation hides the cost, until the main thread outruns it and <em>blocks</em>. That block is your 85 seconds &mdash; and on a restart, it shouldn't be there.</p>
  </footer>

</div>
`;

export const script = ``;
