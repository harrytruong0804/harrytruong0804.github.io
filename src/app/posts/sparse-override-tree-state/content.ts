export const styles = `

  .artifact-scope{
    --paper:#E7EBED;
    --surface:#FCFDFD;
    --surface-2:#F2F5F6;
    --ink:#152226;
    --ink-soft:#5a6b72;
    --ink-faint:#8b989e;
    --line:#d2dadd;
    --line-soft:#e2e8ea;
    --semi:#6B4FE6;
    --semi-soft:#ece8fc;
    --on:#0E8E83;
    --on-soft:#dcefec;
    --off:#7c8a93;
    --off-soft:#e6eaec;
    --warn:#cf5d36;
    --shadow:0 1px 2px rgba(20,40,46,.04),0 8px 28px rgba(20,40,46,.07);
    --radius:14px;
  }
  .artifact-scope *{box-sizing:border-box;}
  .artifact-scope{-webkit-text-size-adjust:100%;}
  .artifact-scope{
    margin:0;
    background:var(--paper);
    color:var(--ink);
    font-family:"Newsreader",Georgia,serif;
    font-size:19px;
    line-height:1.62;
    -webkit-font-smoothing:antialiased;
    background-image:radial-gradient(circle at 12% -5%, #eef1f2 0%, transparent 42%),
                     radial-gradient(circle at 95% 0%, #e3e9 50 0%, transparent 38%);
  }
  .artifact-scope .wrap{max-width:920px;margin:0 auto;padding:0 22px;}

  .artifact-scope /* ---------- HERO ---------- */
  header.hero{padding:74px 0 26px;}
  .artifact-scope .eyebrow{
    font-family:"IBM Plex Mono",monospace;
    font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;
    color:var(--semi);font-weight:500;margin:0 0 22px;
    display:flex;align-items:center;gap:10px;
  }
  .artifact-scope .eyebrow::before{content:"";width:26px;height:1.5px;background:var(--semi);display:inline-block;}
  .artifact-scope h1{
    font-family:"Bricolage Grotesque",sans-serif;
    font-weight:800;font-size:clamp(38px,6.4vw,68px);line-height:1.02;
    letter-spacing:-.02em;margin:0 0 26px;color:var(--ink);
  }
  .artifact-scope h1 .glow{color:var(--semi);}
  .artifact-scope .lede{font-size:clamp(20px,2.6vw,25px);line-height:1.5;color:var(--ink-soft);max-width:42ch;margin:0;}
  .artifact-scope .lede em{color:var(--ink);font-style:italic;}

  .artifact-scope .equation{
    margin:40px 0 8px;padding:22px 24px;background:var(--surface);
    border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);
    font-family:"IBM Plex Mono",monospace;font-size:15px;line-height:1.9;color:var(--ink);
    overflow-x:auto;
  }
  .artifact-scope .equation .k{color:var(--semi);font-weight:600;}
  .artifact-scope .equation .c{color:var(--ink-faint);}
  .artifact-scope .equation .up{color:var(--on);font-weight:600;}

  .artifact-scope /* ---------- SECTIONS ---------- */
  section{padding:30px 0;}
  .artifact-scope .sec-num{
    font-family:"IBM Plex Mono",monospace;font-size:12.5px;letter-spacing:.16em;
    color:var(--semi);text-transform:uppercase;font-weight:500;margin:0 0 6px;
  }
  .artifact-scope h2{
    font-family:"Bricolage Grotesque",sans-serif;font-weight:700;
    font-size:clamp(26px,3.6vw,36px);line-height:1.1;letter-spacing:-.018em;
    margin:0 0 18px;color:var(--ink);
  }
  .artifact-scope h3{
    font-family:"Bricolage Grotesque",sans-serif;font-weight:600;
    font-size:20px;margin:30px 0 10px;letter-spacing:-.01em;
  }
  .artifact-scope p{margin:0 0 18px;}
  .artifact-scope p strong{font-weight:600;}
  .artifact-scope a{color:var(--semi);}
  .artifact-scope .note{
    border-left:3px solid var(--semi);background:var(--semi-soft);
    padding:14px 20px;border-radius:0 10px 10px 0;margin:24px 0;
    font-size:17px;color:#3a3360;
  }
  .artifact-scope .note b{color:var(--semi);}

  .artifact-scope /* ---------- CODE ---------- */
  pre{
    background:#142128;color:#dfe9ec;border-radius:12px;padding:20px 22px;margin:22px 0;
    overflow-x:auto;font-family:"IBM Plex Mono",monospace;font-size:14px;line-height:1.7;
    border:1px solid #0c171c;box-shadow:var(--shadow);
  }
  .artifact-scope pre .cm{color:#7d97a1;font-style:italic;}
  .artifact-scope pre .kw{color:#c9b6ff;}
  .artifact-scope pre .fn{color:#6fd6c7;}
  .artifact-scope pre .st{color:#f0b78a;}
  .artifact-scope pre .nm{color:#f4f7f8;}
  .artifact-scope code.inl{
    font-family:"IBM Plex Mono",monospace;font-size:.85em;
    background:var(--surface-2);border:1px solid var(--line-soft);
    padding:1px 6px;border-radius:5px;color:#33484f;
  }

  .artifact-scope /* ---------- LAB (interactive) ---------- */
  .lab{
    background:var(--surface);border:1px solid var(--line);border-radius:18px;
    box-shadow:var(--shadow);padding:0;margin:14px 0 8px;overflow:hidden;
  }
  .artifact-scope .lab-head{
    padding:18px 22px;border-bottom:1px solid var(--line-soft);
    display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;
    background:linear-gradient(180deg,#fbfcfc,#f6f8f8);
  }
  .artifact-scope .lab-title{font-family:"Bricolage Grotesque",sans-serif;font-weight:700;font-size:17px;letter-spacing:-.01em;}
  .artifact-scope .scenarios{display:flex;gap:8px;flex-wrap:wrap;}
  .artifact-scope .scn{
    font-family:"IBM Plex Mono",monospace;font-size:12px;border:1px solid var(--line);
    background:var(--surface);color:var(--ink);padding:7px 11px;border-radius:8px;cursor:pointer;
    transition:all .15s ease;white-space:nowrap;
  }
  .artifact-scope .scn:hover{border-color:var(--semi);color:var(--semi);background:var(--semi-soft);}
  .artifact-scope .scn.reset:hover{border-color:var(--warn);color:var(--warn);background:#f8e9e2;}

  .artifact-scope .lab-body{display:grid;grid-template-columns:1.15fr .95fr;gap:0;}
  .artifact-scope .tree-pane{padding:18px 16px 22px;border-right:1px solid var(--line-soft);}
  .artifact-scope .pane-label{
    font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.15em;text-transform:uppercase;
    color:var(--ink-faint);margin:2px 6px 12px;font-weight:500;
  }

  .artifact-scope /* tree rows */
  #tree{font-family:"IBM Plex Mono",monospace;}
  .artifact-scope .row{
    display:flex;align-items:center;gap:8px;padding:5px 8px;border-radius:9px;
    position:relative;transition:background .15s ease;
  }
  .artifact-scope .row:hover{background:var(--surface-2);}
  .artifact-scope .row.has-ovr{background:linear-gradient(90deg,var(--semi-soft),transparent 70%);}
  .artifact-scope .row.has-ovr:hover{background:linear-gradient(90deg,#e4def9,transparent 70%);}
  .artifact-scope .dot{width:9px;height:9px;border-radius:50%;flex:0 0 auto;}
  .artifact-scope .label{
    font-size:14px;font-weight:500;color:var(--ink);white-space:nowrap;
    transition:opacity .25s ease;
  }
  .artifact-scope .label .slash{color:var(--ink-faint);}
  .artifact-scope .pin{
    font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.06em;
    color:var(--semi);border:1px solid var(--semi);border-radius:5px;padding:1px 5px;
    margin-left:2px;background:var(--surface);font-weight:600;
  }
  .artifact-scope .ctrls{display:flex;gap:3px;flex:0 0 auto;}
  .artifact-scope .st-btn{
    width:24px;height:22px;border-radius:6px;border:1px solid var(--line);
    background:var(--surface);cursor:pointer;font-family:"IBM Plex Mono",monospace;
    font-size:11px;font-weight:600;color:var(--ink-faint);display:flex;align-items:center;
    justify-content:center;transition:all .12s ease;padding:0;
  }
  .artifact-scope .st-btn:hover{transform:translateY(-1px);}
  .artifact-scope .st-btn.eye.active{background:var(--on);color:#fff;border-color:var(--on);}
  .artifact-scope .st-btn.eye.hidden-state{background:var(--off);color:#fff;border-color:var(--off);}
  .artifact-scope .st-btn.semi.active{background:var(--semi);color:#fff;border-color:var(--semi);}
  .artifact-scope .st-btn:disabled{opacity:.28;cursor:default;}
  .artifact-scope .st-btn.explicit{box-shadow:0 0 0 2px var(--semi-soft),0 0 0 3px var(--semi);}

  .artifact-scope /* inspector */
  .insp{padding:18px 18px 22px;display:flex;flex-direction:column;gap:18px;background:var(--surface-2);}
  .artifact-scope .card{background:var(--surface);border:1px solid var(--line-soft);border-radius:12px;padding:14px 15px;}
  .artifact-scope .card h4{
    margin:0 0 9px;font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.13em;
    text-transform:uppercase;color:var(--ink-faint);font-weight:500;
    display:flex;justify-content:space-between;align-items:center;
  }
  .artifact-scope .badge{
    font-family:"IBM Plex Mono",monospace;font-size:11px;background:var(--semi-soft);
    color:var(--semi);padding:2px 8px;border-radius:20px;font-weight:600;letter-spacing:0;
  }
  .artifact-scope .json{
    font-family:"IBM Plex Mono",monospace;font-size:12.5px;line-height:1.65;
    white-space:pre;overflow-x:auto;color:var(--ink);margin:0;min-height:20px;
  }
  .artifact-scope .json .jk{color:var(--semi);}
  .artifact-scope .json .jv-on{color:var(--on);}
  .artifact-scope .json .jv-semi{color:var(--semi);font-weight:600;}
  .artifact-scope .json .jv-off{color:var(--off);}
  .artifact-scope .json .jc{color:var(--ink-faint);}
  .artifact-scope .json.empty{color:var(--ink-faint);font-style:italic;}
  .artifact-scope .flash{animation:flash .6s ease;}
  @keyframes flash{0%{background:var(--semi-soft);}100%{background:transparent;}}

  .artifact-scope /* byte meter */
  .meter-row{margin-bottom:11px;}
  .artifact-scope .meter-row:last-child{margin-bottom:0;}
  .artifact-scope .meter-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px;}
  .artifact-scope .meter-name{font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--ink-soft);}
  .artifact-scope .meter-val{font-family:"IBM Plex Mono",monospace;font-size:13px;font-weight:600;}
  .artifact-scope .meter-track{height:8px;background:var(--surface-2);border-radius:5px;overflow:hidden;border:1px solid var(--line-soft);}
  .artifact-scope .meter-fill{height:100%;border-radius:5px;transition:width .4s cubic-bezier(.4,0,.2,1);}
  .artifact-scope .fill-naive{background:var(--off);}
  .artifact-scope .fill-sparse{background:var(--semi);}
  .artifact-scope .savings{
    margin-top:11px;text-align:center;font-family:"IBM Plex Mono",monospace;font-size:12.5px;
    color:var(--on);font-weight:600;background:var(--on-soft);padding:7px;border-radius:8px;
  }

  .artifact-scope .stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;}
  .artifact-scope .stat{background:var(--surface);border:1px solid var(--line-soft);border-radius:10px;padding:10px 12px;}
  .artifact-scope .stat .n{font-family:"Bricolage Grotesque",sans-serif;font-weight:700;font-size:24px;color:var(--ink);line-height:1;}
  .artifact-scope .stat .l{font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.04em;color:var(--ink-faint);margin-top:4px;text-transform:uppercase;}

  .artifact-scope .legend{display:flex;gap:16px;flex-wrap:wrap;margin:4px 6px 14px;font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--ink-soft);}
  .artifact-scope .legend span{display:flex;align-items:center;gap:6px;}
  .artifact-scope .lg-dot{width:9px;height:9px;border-radius:50%;}

  .artifact-scope /* compare table */
  .cmp{width:100%;border-collapse:collapse;margin:20px 0;font-family:"IBM Plex Mono",monospace;font-size:13.5px;background:var(--surface);border-radius:12px;overflow:hidden;box-shadow:var(--shadow);}
  .artifact-scope .cmp th,
.artifact-scope .cmp td{padding:13px 16px;text-align:left;border-bottom:1px solid var(--line-soft);}
  .artifact-scope .cmp th{background:var(--surface-2);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);font-weight:500;}
  .artifact-scope .cmp tr:last-child td{border-bottom:none;}
  .artifact-scope .cmp .bad{color:var(--warn);}
  .artifact-scope .cmp .good{color:var(--on);}
  .artifact-scope .cmp .feat{color:var(--ink-soft);}

  .artifact-scope footer{padding:40px 0 70px;color:var(--ink-faint);font-size:14px;font-family:"IBM Plex Mono",monospace;border-top:1px solid var(--line);margin-top:30px;}

  @media (max-width:760px){
    .artifact-scope{font-size:18px;}
    .artifact-scope .lab-body{grid-template-columns:1fr;}
    .artifact-scope .tree-pane{border-right:none;border-bottom:1px solid var(--line-soft);}
    .artifact-scope header.hero{padding:48px 0 18px;}
  }
  @media (prefers-reduced-motion:reduce){
    .artifact-scope *{animation:none!important;transition:none!important;}
  }

`;

export const html = `
<div class="wrap">

  <header class="hero">
    <p class="eyebrow">Data structures · Tree state</p>
    <h1>Store a whole tree's state by <span class="glow">storing almost nothing</span></h1>
    <p class="lede">A directory tree where each node toggles visibility or transparency, children follow parents. The trick isn't in storing cleverly — it's in <em>only storing nodes that dare to disagree with their parent</em>.</p>

    <div class="equation">
<span class="c"># Two independent maps, same resolve — but set behaves differently:</span>

vis(node)  = nearest <span class="k">vis_ovr  </span><span class="up">↑</span>  to root  <span class="c">// default: visible</span>
semi(node) = nearest <span class="k">semi_ovr </span><span class="up">↑</span>  to root  <span class="c">// default: solid</span>

set_vis(<span class="st">"set"</span>)   → cascades <span class="up">↓</span>  only          <span class="c">// "set" = hidden</span>
set_vis(<span class="st">"clear"</span>) → also walks <span class="up">↑</span>  clearing set ancestors
set_semi              → always   <span class="up">↓</span>  only          <span class="c">// "set" = semi</span>
    </div>
  </header>

  <section>
    <p class="sec-num">01 — The Problem</p>
    <h2>Why storing a flag per node is bad</h2>
    <p>The requirement sounds innocent: a directory tree, each node has buttons for <strong>semi-transparent</strong> or <strong>off</strong>; changing the parent must cascade to all children. FE clicks a button, server applies it and re-renders.</p>
    <p>The first reflex is to attach a <code class="inl">state</code> field to every node and synchronize the whole table. It works, but at a cost in two areas:</p>
    <table class="cmp">
      <tr><th>Scenario</th><th>Store flag per node</th><th>Sparse override</th></tr>
      <tr><td class="feat">Memory / payload on initial load</td><td class="bad">O(N) — every node</td><td class="good">O(diff count)</td></tr>
      <tr><td class="feat">Clicking one button at a parent</td><td class="bad">Send entire subtree</td><td class="good">Send 1 message</td></tr>
      <tr><td class="feat">"Dim entire site"</td><td class="bad">N entries</td><td class="good">1 entry</td></tr>
      <tr><td class="feat">Adding a new state</td><td class="feat">Edit every node</td><td class="good">Change 1 enum</td></tr>
    </table>
    <p>With a tree of a few nodes, it's fine. With a digital twin that has a whole site, every floor, every room, crowd PointInstancer and Cesium 3D Tiles — the node count balloons quickly, while "dim entire building" is the most-used operation.</p>
  </section>

  <section>
    <p class="sec-num">02 — The Idea</p>
    <h2>Inherit downward, only store the differences</h2>
    <p>This is exactly how USD represents <code class="inl">visibility</code>: an opinion set at a parent governs the entire subtree, and we <strong>don't store state for any node that's obediently inheriting</strong>. The real state of a node is <em>computed on demand</em>, not read out.</p>
    <p>The structure stored on the server is <strong>two independent sparse maps</strong>: one for visibility, one for transparency. Each map has its own <code class="inl">default</code> and only stores nodes that differ from their parent — but as you'll see in the algorithm section, they cascade differently when writing.</p>
    <pre><span class="cm"># two independent sparse maps — resolved identically, set differently</span>
state = {
  <span class="st">"vis"</span>:  { <span class="st">"default"</span>: <span class="st">"visible"</span>, <span class="st">"overrides"</span>: { <span class="st">"/Site/BuildingA"</span>: <span class="st">"set"</span> } },
  <span class="st">"semi"</span>: { <span class="st">"default"</span>: <span class="st">"solid"</span>,   <span class="st">"overrides"</span>: { <span class="st">"/Site"</span>:             <span class="st">"set"</span> } },
}</pre>
    <p>The tree in the demo below has 12 nodes. Notice: the <code class="inl">overrides</code> map on the right is almost always much smaller than the node count — even when the entire tree is changing state.</p>
  </section>

  <!-- ===================== INTERACTIVE LAB ===================== -->
  <div class="lab">
    <div class="lab-head">
      <div class="lab-title">🌲 Live Playground</div>
      <div class="scenarios">
        <button class="scn" data-scn="dim-site">Dim entire site</button>
        <button class="scn" data-scn="off-floor">Turn off Building A Floor 1</button>
        <button class="scn" data-scn="on-room">Turn on R101 individually</button>
        <button class="scn reset" data-scn="reset">↺ Reset</button>
      </div>
    </div>
    <div class="lab-body">
      <div class="tree-pane">
        <div class="pane-label">Directory tree — 👁 visibility · ◐ transparency</div>
        <div class="legend">
          <span><i class="lg-dot" style="background:var(--on)"></i>visible · solid</span>
          <span><i class="lg-dot" style="background:var(--semi)"></i>visible · semi-transparent</span>
          <span><i class="lg-dot" style="background:var(--off)"></i>hidden (server skips render)</span>
          <span><i class="pin" style="margin:0">set</i> = has override</span>
        </div>
        <div id="tree"></div>
      </div>

      <div class="insp">
        <div class="card">
          <h4>Wire message just sent <span class="badge" id="wire-bytes">— B</span></h4>
          <div class="json" id="wire">// click a node to see the payload FE → server</div>
        </div>

        <div class="card ovr-card">
          <h4>vis_overrides <span class="badge" id="vis-count">0 entries</span></h4>
          <div class="json empty" id="ovr-vis">{ }  // all visible</div>
        </div>

        <div class="card ovr-card">
          <h4>semi_overrides <span class="badge" id="semi-count">0 entries</span></h4>
          <div class="json empty" id="ovr-semi">{ }  // all solid</div>
        </div>

        <div class="card">
          <h4>Payload if syncing full tree</h4>
          <div class="meter-row">
            <div class="meter-top"><span class="meter-name">Store flag per node</span><span class="meter-val" id="naive-b" style="color:var(--off)">0 B</span></div>
            <div class="meter-track"><div class="meter-fill fill-naive" id="naive-bar" style="width:100%"></div></div>
          </div>
          <div class="meter-row">
            <div class="meter-top"><span class="meter-name">Sparse override</span><span class="meter-val" id="sparse-b" style="color:var(--semi)">0 B</span></div>
            <div class="meter-track"><div class="meter-fill fill-sparse" id="sparse-bar" style="width:20%"></div></div>
          </div>
          <div class="savings" id="savings">savings —%</div>
        </div>

        <div class="stat-grid">
          <div class="stat"><div class="n" id="s-nodes">12</div><div class="l">nodes in tree</div></div>
          <div class="stat"><div class="n" id="s-ovr">0</div><div class="l">entries to store</div></div>
        </div>
      </div>
    </div>
  </div>
  <p style="font-size:15px;color:var(--ink-soft);font-style:italic;margin-top:14px;">Try clicking <b>Dim entire site</b>: 12 nodes change state but <code class="inl">overrides</code> has exactly 1 line. Then turn on a single room inside and watch the map grow.</p>

  <section>
    <p class="sec-num">03 — The Algorithm</p>
    <h2>Same <code class="inl" style="font-size:.7em">resolve</code>, asymmetric <code class="inl" style="font-size:.7em">set</code></h2>
    <p><strong>resolve</strong> is identical for both maps — walk up, return the nearest opinion, fall back to default:</p>
    <pre><span class="kw">def</span> <span class="fn">resolve_vis</span>(path):   <span class="cm"># same shape for resolve_semi</span>
    cur = path
    <span class="kw">while</span> cur:
        <span class="kw">if</span> cur <span class="kw">in</span> vis_overrides: <span class="kw">return</span> vis_overrides[cur]
        cur = <span class="fn">parent</span>(cur)
    <span class="kw">return</span> <span class="st">"visible"</span>          <span class="cm"># default</span></pre>
    <p><strong>set_semi</strong> is the same generic logic as before — purely downward:</p>
    <pre><span class="kw">def</span> <span class="fn">set_semi</span>(path, value):               <span class="cm"># value = "set" | "clear"</span>
    <span class="kw">for</span> p <span class="kw">in</span> <span class="fn">list</span>(semi_overrides):        <span class="cm"># clear self + descendants</span>
        <span class="kw">if</span> p == path <span class="kw">or</span> p.<span class="fn">startswith</span>(path + <span class="st">"/"</span>): <span class="kw">del</span> semi_overrides[p]
    <span class="kw">if</span> value == <span class="st">"set"</span> <span class="kw">and</span> <span class="fn">resolve_semi</span>(<span class="fn">parent</span>(path)) != <span class="st">"set"</span>:  <span class="cm"># normalize</span>
        semi_overrides[path] = <span class="st">"set"</span></pre>
    <p><strong>set_visibility</strong> differs only when making something visible — it must also walk <em>up</em> and clear any <code class="inl">"set"</code> ancestors, because a hidden parent blocks all children regardless of their own flag:</p>
    <pre><span class="kw">def</span> <span class="fn">set_visibility</span>(path, value):         <span class="cm"># value = "set" (hide) | "clear" (show)</span>
    <span class="kw">if</span> value == <span class="st">"set"</span>:                    <span class="cm"># same as set_semi: purely ↓</span>
        <span class="kw">for</span> p <span class="kw">in</span> <span class="fn">list</span>(vis_overrides):
            <span class="kw">if</span> p == path <span class="kw">or</span> p.<span class="fn">startswith</span>(path + <span class="st">"/"</span>): <span class="kw">del</span> vis_overrides[p]
        <span class="kw">if</span> <span class="fn">resolve_vis</span>(<span class="fn">parent</span>(path)) != <span class="st">"set"</span>: vis_overrides[path] = <span class="st">"set"</span>
    <span class="kw">else</span>:                                <span class="cm"># "clear": must walk ↑ too</span>
        cur = <span class="fn">parent</span>(path)
        <span class="kw">while</span> cur:                       <span class="cm"># clear set overrides going up</span>
            <span class="kw">if</span> cur <span class="kw">in</span> vis_overrides: <span class="kw">del</span> vis_overrides[cur]
            cur = <span class="fn">parent</span>(cur)
        <span class="kw">for</span> p <span class="kw">in</span> <span class="fn">list</span>(vis_overrides):    <span class="cm"># clear self + descendants</span>
            <span class="kw">if</span> p == path <span class="kw">or</span> p.<span class="fn">startswith</span>(path + <span class="st">"/"</span>): <span class="kw">del</span> vis_overrides[p]
        <span class="cm"># nothing to store — default is visible, all overrides cleared</span></pre>
    <div class="note"><b>Why the asymmetry:</b> hiding is a downward instruction — "don't render this subtree". Showing is a <em>promise</em> — "this node will be visible" — that the renderer can only fulfil if the entire ancestor chain agrees. So <code>set_vis("clear")</code> walks up and clears any <code>"set"</code> override in the way. <code>set_semi</code> has no such obligation: a child can be semi-transparent while its parent stays solid.</div>
  </section>

  <section>
    <p class="sec-num">04 — The Protocol</p>
    <h2>Each click is an O(1) message</h2>
    <p>Because all cascade logic lives in <code class="inl">set_state</code>, the FE and server only need to exchange the <em>action</em>, not the result:</p>
    <pre><span class="cm">// FE → server, fixed size regardless of subtree depth</span>
{ <span class="st">"op"</span>: <span class="st">"set_semi set"</span>, <span class="st">"path"</span>: <span class="st">"/Site"</span> }
{ <span class="st">"op"</span>: <span class="st">"set_vis set"</span>,  <span class="st">"path"</span>: <span class="st">"/Site/BuildingA"</span> }   <span class="cm">// hide</span>
{ <span class="st">"op"</span>: <span class="st">"set_vis clear"</span>, <span class="st">"path"</span>: <span class="st">"/Site/BuildingA"</span> }   <span class="cm">// show (clears ancestors)</span></pre>
    <p>Operation lifecycle:</p>
    <p style="margin-left:4px;">→ FE runs <code class="inl">set_state</code> on its local <code class="inl">overrides</code> copy and <strong>renders immediately</strong> (optimistic update, no waiting for server).<br>
    → Sends the message to the server.<br>
    → Server runs the exact same <code class="inl">set_state</code>, persists, then acks — or broadcasts to other clients if multi-client.</p>
    <p>The FE never needs the server to send per-node state in order to render; it <code class="inl">resolve</code>s on its own for nodes currently displayed. The only time "a lot" is transferred is on the initial load — and <code class="inl">overrides</code> is already small.</p>
  </section>

  <section>
    <p class="sec-num">05 — Pitfalls &amp; Extensions</p>
    <h2>A few things easy to trip on</h2>
    <h3>Use a trie instead of a hash map</h3>
    <p>Paths are hierarchical, so a <strong>segment trie</strong> (or sorted map) makes "delete all descendants by prefix" much cleaner — the subtree occupies contiguous space, no O(n) full-map scan. A trie also maps 1-1 with the real tree, making it easy to reason about.</p>
    <h3>Don't rush to merge siblings up to the parent</h3>
    <p>Seeing all children at the same value, one is tempted to merge the opinion up to the parent to save more. Don't — unless the parent itself is also at exactly that value. An opinion at the parent governs the parent itself; merging up will unintentionally change the parent node's display state.</p>
    <h3>Let "inherited" be absence, not a value</h3>
    <p>When you need more than 2 states, just change <code class="inl">value</code> to an enum — the whole model stays the same. The key: represent "is inheriting" by <strong>absence from the map</strong>, not by a special value. That keeps the map minimal and adding a new state doesn't touch anything else.</p>
    <h3>Multi-client needs a bit more</h3>
    <p>When multiple clients edit simultaneously, let the server be the sole arbiter of ordering (server assigns sequence numbers, broadcasts in order). Since each op is a simple, idempotent-ish transform on the same <code class="inl">set_state</code>, reconciliation is much lighter than syncing a full snapshot.</p>
  </section>

  <footer>
    Sparse override tree state — inherit downward, store differences, transmit actions not results. The same model USD <code style="color:var(--semi)">visibility</code> uses.
  </footer>

</div>

<script>
(function(){
  "use strict";

  // ---------- tree definition (digital-twin flavored) ----------
  const TREE = {p:"/Site",c:[
    {p:"/Site/BuildingA",c:[
      {p:"/Site/BuildingA/Floor1",c:[
        {p:"/Site/BuildingA/Floor1/HVAC",c:[]},
        {p:"/Site/BuildingA/Floor1/Rooms",c:[
          {p:"/Site/BuildingA/Floor1/Rooms/R101",c:[]},
          {p:"/Site/BuildingA/Floor1/Rooms/R102",c:[]},
        ]},
      ]},
      {p:"/Site/BuildingA/Floor2",c:[]},
    ]},
    {p:"/Site/BuildingB",c:[
      {p:"/Site/BuildingB/Floor1",c:[]},
    ]},
    {p:"/Site/Terrain",c:[
      {p:"/Site/Terrain/Cesium3DTiles",c:[]},
    ]},
  ]};

  const DEF_VIS="visible", DEF_SEMI="solid";
  let visOvr={}, semiOvr={};
  const FLAT=[];
  (function walk(n,d){ FLAT.push({path:n.p,depth:d,hasKids:n.c.length>0}); n.c.forEach(ch=>walk(ch,d+1)); })(TREE,0);
  const ALL_PATHS=FLAT.map(n=>n.path);
  function parent(p){ const i=p.lastIndexOf("/"); return i<=0?null:p.slice(0,i); }
  const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
  function resolveVis(p){ let c=p; while(c){ if(own(visOvr,c)) return "set"; c=parent(c);} return DEF_VIS; }
  function resolveSemi(p){ let c=p; while(c){ if(own(semiOvr,c)) return "set"; c=parent(c);} return DEF_SEMI; }
  function effective(p){ return resolveVis(p)==="set"?"off":resolveSemi(p)==="set"?"semi":"on"; }
  function setVisibility(path,value){
    if(value==="clear"){
      let cur=parent(path); while(cur){ if(own(visOvr,cur)) delete visOvr[cur]; cur=parent(cur); }
      Object.keys(visOvr).forEach(k=>{ if(k===path||k.startsWith(path+"/")) delete visOvr[k]; });
    } else {
      Object.keys(visOvr).forEach(k=>{ if(k===path||k.startsWith(path+"/")) delete visOvr[k]; });
      const par=parent(path); if(resolveVis(par||"")!=="set") visOvr[path]="set";
    }
  }
  function setSemi(path,value){
    Object.keys(semiOvr).forEach(k=>{ if(k===path||k.startsWith(path+"/")) delete semiOvr[k]; });
    if(value==="set"){ const par=parent(path); if(resolveSemi(par||"")!=="set") semiOvr[path]="set"; }
  }
  const enc=new TextEncoder();
  function bytes(str){ return enc.encode(str).length; }
  function naivePayload(){ const o={}; ALL_PATHS.forEach(p=>{ const st=effective(p); o[p]={vis:st==="off"?"hidden":"visible",semi:st==="semi"?"semi":"solid"}; }); return JSON.stringify(o); }
  function sparsePayload(){ return JSON.stringify({vis:{default:DEF_VIS,overrides:visOvr},semi:{default:DEF_SEMI,overrides:semiOvr}}); }
  const treeEl=document.getElementById("tree");
  const labelName=p=>p.split("/").pop();
  const OPACITY={on:1,semi:.42,off:.2};
  const COLOR={on:"var(--on)",semi:"var(--semi)",off:"var(--off)"};
  function renderTree(){ treeEl.innerHTML=""; FLAT.forEach(n=>{ const st=effective(n.path); const explVis=own(visOvr,n.path),explSemi=own(semiOvr,n.path); const row=document.createElement("div"); row.className="row"+((explVis||explSemi)?" has-ovr":""); row.style.paddingLeft=(8+n.depth*20)+"px"; const dot=document.createElement("span"); dot.className="dot"; dot.style.background=COLOR[st]; dot.style.opacity=st==="off"?.5:1; row.appendChild(dot); const ctrls=document.createElement("div"); ctrls.className="ctrls"; const isVis=st!=="off"; const eyeB=document.createElement("button"); eyeB.className="st-btn eye"+(isVis?" active":" hidden-state")+(explVis?" explicit":""); eyeB.innerHTML=isVis?'<svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5C1 4.5 2.9.5 6.5.5S12 4.5 12 4.5 10.1 8.5 6.5 8.5 1 4.5 1 4.5z" stroke="currentColor" stroke-width="1.3"/><circle cx="6.5" cy="4.5" r="1.8" fill="currentColor"/></svg>':'<svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5C1 4.5 2.9.5 6.5.5S12 4.5 12 4.5" stroke="currentColor" stroke-width="1.3"/><line x1="1.5" y1="8.5" x2="11.5" y2=".5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>'; eyeB.title=isVis?"visible — click to hide":"hidden — click to show (clears ancestors)"; eyeB.addEventListener("click",()=>{ setVisibility(n.path,isVis?"set":"clear"); refresh({op:isVis?"set_vis set":"set_vis clear",path:n.path}); }); ctrls.appendChild(eyeB); const semiB=document.createElement("button"); const isSemi=st==="semi"; semiB.className="st-btn semi"+(isSemi?" active":"")+(explSemi?" explicit":""); semiB.textContent="◐"; semiB.title=isSemi?"semi-transparent — click for solid":"solid — click for semi-transparent"; semiB.addEventListener("click",()=>{ setSemi(n.path,isSemi?"clear":"set"); refresh({op:isSemi?"set_semi clear":"set_semi set",path:n.path}); }); ctrls.appendChild(semiB); row.appendChild(ctrls); const label=document.createElement("span"); label.className="label"; label.style.opacity=OPACITY[st]; label.innerHTML='<span class="slash">/</span>'+labelName(n.path)+(n.hasKids?'<span class="slash">/</span>':''); row.appendChild(label); if(explVis||explSemi){ const pin=document.createElement("span"); pin.className="pin"; pin.textContent=(explVis?"vis":"")+(explVis&&explSemi?"+":"")+(explSemi?"semi":""); row.appendChild(pin); } treeEl.appendChild(row); }); }
  function fmtMap(elId,map,emptyMsg,valCls){ const keys=Object.keys(map); const el=document.getElementById(elId); if(keys.length===0){ el.className="json empty"; el.textContent=emptyMsg; } else { el.className="json"; let s='{\n'; keys.forEach((k,i)=>{ s+='  <span class="jk">"'+k+'"</span>: <span class="'+valCls+'">"set"</span>'+(i<keys.length-1?',':'')+'\n'; }); s+='}'; el.innerHTML=s; } return keys.length; }
  function fmtJSON(){ const vc=fmtMap("ovr-vis",visOvr,'{ }  // all visible',"jv-off"); const sc=fmtMap("ovr-semi",semiOvr,'{ }  // all solid',"jv-semi"); document.getElementById("vis-count").textContent=vc+(vc===1?" entry":" entries"); document.getElementById("semi-count").textContent=sc+(sc===1?" entry":" entries"); document.getElementById("s-ovr").textContent=vc+sc; }
  function renderMeters(){ const nb=bytes(naivePayload()),sb=bytes(sparsePayload()); const max=Math.max(nb,sb,1); document.getElementById("naive-b").textContent=nb+" B"; document.getElementById("sparse-b").textContent=sb+" B"; document.getElementById("naive-bar").style.width=(nb/max*100)+"%"; document.getElementById("sparse-bar").style.width=(sb/max*100)+"%"; const save=nb>0?Math.round((1-sb/nb)*100):0; const savEl=document.getElementById("savings"); if(save>0){ savEl.textContent="↓ "+save+"% smaller than storing all flags per node"; savEl.style.color="var(--on)"; savEl.style.background="var(--on-soft)"; } else { savEl.textContent="equivalent payload (tree empty)"; savEl.style.color="var(--ink-faint)"; savEl.style.background="var(--surface-2)"; } }
  function renderWire(msg){ const w=document.getElementById("wire"); if(!msg){ w.className="json"; w.innerHTML='<span class="jc">// click a node to see the payload FE → server</span>'; document.getElementById("wire-bytes").textContent="— B"; return; } const raw='{ "op": "'+msg.op+'", "path": "'+msg.path+'" }'; const isSet=msg.op.endsWith("set"); const isVis=msg.op.startsWith("set_vis"); const opCls=isSet?(isVis?"jv-off":"jv-semi"):"jv-on"; w.className="json"; w.innerHTML='{ <span class="jk">"op"</span>: <span class="'+opCls+'">"'+msg.op+'"</span>, <span class="jk">"path"</span>: "'+msg.path+'" }'; document.getElementById("wire-bytes").textContent=bytes(raw)+" B"; }
  function refresh(wireMsg){ renderTree(); fmtJSON(); renderMeters(); renderWire(wireMsg); document.querySelectorAll(".ovr-card").forEach(c=>{ c.classList.remove("flash"); void c.offsetWidth; c.classList.add("flash"); }); }
  document.querySelectorAll(".scn").forEach(btn=>{ btn.addEventListener("click",()=>{ const s=btn.dataset.scn; if(s==="reset"){ visOvr={}; semiOvr={}; refresh(null); return; } if(s==="dim-site"){ setSemi("/Site","set"); refresh({op:"set_semi set",path:"/Site"}); } if(s==="off-floor"){ setVisibility("/Site/BuildingA/Floor1","set"); refresh({op:"set_vis set",path:"/Site/BuildingA/Floor1"}); } if(s==="on-room"){ setVisibility("/Site/BuildingA/Floor1/Rooms/R101","clear"); refresh({op:"set_vis clear",path:"/Site/BuildingA/Floor1/Rooms/R101"}); } }); });
  document.getElementById("s-nodes").textContent=FLAT.length;
  refresh(null);
})();
</script>
`;

export const script = `
(function(){
  "use strict";

  // ---------- tree definition (digital-twin flavored) ----------
  const TREE = {p:"/Site",c:[
    {p:"/Site/BuildingA",c:[
      {p:"/Site/BuildingA/Floor1",c:[
        {p:"/Site/BuildingA/Floor1/HVAC",c:[]},
        {p:"/Site/BuildingA/Floor1/Rooms",c:[
          {p:"/Site/BuildingA/Floor1/Rooms/R101",c:[]},
          {p:"/Site/BuildingA/Floor1/Rooms/R102",c:[]},
        ]},
      ]},
      {p:"/Site/BuildingA/Floor2",c:[]},
    ]},
    {p:"/Site/BuildingB",c:[
      {p:"/Site/BuildingB/Floor1",c:[]},
    ]},
    {p:"/Site/Terrain",c:[
      {p:"/Site/Terrain/Cesium3DTiles",c:[]},
    ]},
  ]};

  const DEF_VIS="visible", DEF_SEMI="solid";
  let visOvr={}, semiOvr={};

  const FLAT=[];
  (function walk(n,d){ FLAT.push({path:n.p,depth:d,hasKids:n.c.length>0}); n.c.forEach(ch=>walk(ch,d+1)); })(TREE,0);
  const ALL_PATHS=FLAT.map(n=>n.path);

  function parent(p){ const i=p.lastIndexOf("/"); return i<=0?null:p.slice(0,i); }
  const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);

  // resolve: walk up, return "set" if any ancestor/self overrides, else default
  function resolveVis(p){ let c=p; while(c){ if(own(visOvr,c)) return "set"; c=parent(c);} return DEF_VIS; }
  function resolveSemi(p){ let c=p; while(c){ if(own(semiOvr,c)) return "set"; c=parent(c);} return DEF_SEMI; }
  function effective(p){ return resolveVis(p)==="set"?"off":resolveSemi(p)==="set"?"semi":"on"; }

  // set_visibility("set") = hide ↓, set_visibility("clear") = show + walk ↑ clearing ancestors
  function setVisibility(path,value){
    if(value==="clear"){
      let cur=parent(path);
      while(cur){ if(own(visOvr,cur)) delete visOvr[cur]; cur=parent(cur); }
      Object.keys(visOvr).forEach(k=>{ if(k===path||k.startsWith(path+"/")) delete visOvr[k]; });
    } else {
      Object.keys(visOvr).forEach(k=>{ if(k===path||k.startsWith(path+"/")) delete visOvr[k]; });
      const par=parent(path);
      if(resolveVis(par||"")!=="set") visOvr[path]="set";
    }
  }

  // set_semi("set") = semi ↓, set_semi("clear") = solid ↓ (just delete)
  function setSemi(path,value){
    Object.keys(semiOvr).forEach(k=>{ if(k===path||k.startsWith(path+"/")) delete semiOvr[k]; });
    if(value==="set"){
      const par=parent(path);
      if(resolveSemi(par||"")!=="set") semiOvr[path]="set";
    }
  }

  const enc=new TextEncoder();
  function bytes(str){ return enc.encode(str).length; }
  function naivePayload(){
    const o={}; ALL_PATHS.forEach(p=>{ const st=effective(p); o[p]={vis:st==="off"?"hidden":"visible",semi:st==="semi"?"semi":"solid"}; }); return JSON.stringify(o);
  }
  function sparsePayload(){ return JSON.stringify({vis:{default:DEF_VIS,overrides:visOvr},semi:{default:DEF_SEMI,overrides:semiOvr}}); }

  const treeEl=document.getElementById("tree");
  const labelName=p=>p.split("/").pop();
  const OPACITY={on:1,semi:.42,off:.2};
  const COLOR={on:"var(--on)",semi:"var(--semi)",off:"var(--off)"};

  function renderTree(){
    treeEl.innerHTML="";
    FLAT.forEach(n=>{
      const st=effective(n.path);
      const explVis=own(visOvr,n.path), explSemi=own(semiOvr,n.path);
      const row=document.createElement("div");
      row.className="row"+((explVis||explSemi)?" has-ovr":"");
      row.style.paddingLeft=(8+n.depth*20)+"px";
      const dot=document.createElement("span");
      dot.className="dot"; dot.style.background=COLOR[st]; dot.style.opacity=st==="off"?.5:1;
      row.appendChild(dot);
      const ctrls=document.createElement("div"); ctrls.className="ctrls";
      const isVis=st!=="off";
      const eyeB=document.createElement("button");
      eyeB.className="st-btn eye"+(isVis?" active":" hidden-state")+(explVis?" explicit":"");
      eyeB.innerHTML=isVis
        ?'<svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5C1 4.5 2.9.5 6.5.5S12 4.5 12 4.5 10.1 8.5 6.5 8.5 1 4.5 1 4.5z" stroke="currentColor" stroke-width="1.3"/><circle cx="6.5" cy="4.5" r="1.8" fill="currentColor"/></svg>'
        :'<svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5C1 4.5 2.9.5 6.5.5S12 4.5 12 4.5" stroke="currentColor" stroke-width="1.3"/><line x1="1.5" y1="8.5" x2="11.5" y2=".5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';
      eyeB.title=isVis?"visible — click to hide":"hidden — click to show (clears ancestors)";
      eyeB.setAttribute("aria-label",labelName(n.path)+(isVis?" → hide":" → show"));
      eyeB.addEventListener("click",()=>{
        setVisibility(n.path,isVis?"set":"clear");
        refresh({op:isVis?"set_vis set":"set_vis clear",path:n.path});
      });
      ctrls.appendChild(eyeB);
      const semiB=document.createElement("button");
      const isSemi=st==="semi";
      semiB.className="st-btn semi"+(isSemi?" active":"")+(explSemi?" explicit":"");
      semiB.textContent="◐";
      semiB.title=isSemi?"semi-transparent — click for solid":"solid — click for semi-transparent";
      semiB.setAttribute("aria-label",labelName(n.path)+(isSemi?" → solid":" → semi"));
      semiB.addEventListener("click",()=>{
        setSemi(n.path,isSemi?"clear":"set");
        refresh({op:isSemi?"set_semi clear":"set_semi set",path:n.path});
      });
      ctrls.appendChild(semiB);
      row.appendChild(ctrls);
      const label=document.createElement("span");
      label.className="label"; label.style.opacity=OPACITY[st];
      label.innerHTML='<span class="slash">/</span>'+labelName(n.path)+(n.hasKids?'<span class="slash">/</span>':'');
      row.appendChild(label);
      if(explVis||explSemi){
        const pin=document.createElement("span"); pin.className="pin";
        pin.textContent=(explVis?"vis":"")+(explVis&&explSemi?"+":"")+(explSemi?"semi":"");
        row.appendChild(pin);
      }
      treeEl.appendChild(row);
    });
  }

  function fmtMap(elId,map,emptyMsg,valCls){
    const keys=Object.keys(map);
    const el=document.getElementById(elId);
    if(keys.length===0){
      el.className="json empty"; el.textContent=emptyMsg;
    } else {
      el.className="json";
      let s='{\\n';
      keys.forEach((k,i)=>{
        s+='  <span class="jk">"'+k+'"</span>: <span class="'+valCls+'">"set"</span>'+(i<keys.length-1?',':'')+'\\n';
      });
      s+='}';
      el.innerHTML=s;
    }
    return keys.length;
  }

  function fmtJSON(){
    const vc=fmtMap("ovr-vis",visOvr,'{ }  // all visible',"jv-off");
    const sc=fmtMap("ovr-semi",semiOvr,'{ }  // all solid',"jv-semi");
    document.getElementById("vis-count").textContent=vc+(vc===1?" entry":" entries");
    document.getElementById("semi-count").textContent=sc+(sc===1?" entry":" entries");
    document.getElementById("s-ovr").textContent=vc+sc;
  }

  function renderMeters(){
    const nb=bytes(naivePayload()), sb=bytes(sparsePayload());
    const max=Math.max(nb,sb,1);
    document.getElementById("naive-b").textContent=nb+" B";
    document.getElementById("sparse-b").textContent=sb+" B";
    document.getElementById("naive-bar").style.width=(nb/max*100)+"%";
    document.getElementById("sparse-bar").style.width=(sb/max*100)+"%";
    const save=nb>0?Math.round((1-sb/nb)*100):0;
    const savEl=document.getElementById("savings");
    if(save>0){ savEl.textContent="↓ "+save+"% smaller than storing all flags per node"; savEl.style.color="var(--on)"; savEl.style.background="var(--on-soft)"; }
    else { savEl.textContent="equivalent payload (tree empty)"; savEl.style.color="var(--ink-faint)"; savEl.style.background="var(--surface-2)"; }
  }

  function renderWire(msg){
    const w=document.getElementById("wire");
    if(!msg){ w.className="json"; w.innerHTML='<span class="jc">// click a node to see the payload FE → server</span>'; document.getElementById("wire-bytes").textContent="— B"; return; }
    const raw='{ "op": "'+msg.op+'", "path": "'+msg.path+'" }';
    const isSet=msg.op.endsWith("set");
    const isVis=msg.op.startsWith("set_vis");
    const opCls=isSet?(isVis?"jv-off":"jv-semi"):"jv-on";
    w.className="json";
    w.innerHTML='{ <span class="jk">"op"</span>: <span class="'+opCls+'">"'+msg.op+'"</span>, <span class="jk">"path"</span>: "'+msg.path+'" }';
    document.getElementById("wire-bytes").textContent=bytes(raw)+" B";
  }

  function refresh(wireMsg){
    renderTree(); fmtJSON(); renderMeters(); renderWire(wireMsg);
    document.querySelectorAll(".ovr-card").forEach(c=>{
      c.classList.remove("flash"); void c.offsetWidth; c.classList.add("flash");
    });
  }

  document.querySelectorAll(".scn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const s=btn.dataset.scn;
      if(s==="reset"){ visOvr={}; semiOvr={}; refresh(null); return; }
      if(s==="dim-site"){ setSemi("/Site","set"); refresh({op:"set_semi set",path:"/Site"}); }
      if(s==="off-floor"){ setVisibility("/Site/BuildingA/Floor1","set"); refresh({op:"set_vis set",path:"/Site/BuildingA/Floor1"}); }
      if(s==="on-room"){ setVisibility("/Site/BuildingA/Floor1/Rooms/R101","clear"); refresh({op:"set_vis clear",path:"/Site/BuildingA/Floor1/Rooms/R101"}); }
    });
  });

  document.getElementById("s-nodes").textContent=FLAT.length;
  refresh(null);
})();
`;
