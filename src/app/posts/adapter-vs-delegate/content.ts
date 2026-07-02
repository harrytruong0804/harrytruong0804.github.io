export const styles = `
.artifact-scope {
    --bg:#0F1B2D;
    --panel:#16273F;
    --panel-2:#1C3049;
    --grid-line:rgba(140,170,205,0.07);
    --border:rgba(140,170,205,0.18);
    --text:#E8EEF5;
    --text-muted:#8CA0B8;
    --cyan:#54D6CC;
    --amber:#F0A85F;
    --red:#F0736A;
    --cyan-dim:rgba(84,214,204,0.12);
    --amber-dim:rgba(240,168,95,0.12);
    --radius:10px;
    --font-display:'Space Grotesk', sans-serif;
    --font-body:'Inter', sans-serif;
    --font-mono:'IBM Plex Mono', monospace;
  }
.artifact-scope * {box-sizing:border-box; margin:0; padding:0;}
.artifact-scope {scroll-behavior:smooth;}
.artifact-scope {
    background:var(--bg);
    color:var(--text);
    font-family:var(--font-body);
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
    background-image:
      linear-gradient(var(--grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size:32px 32px;
  }
.artifact-scope a {color:var(--cyan);}
.artifact-scope ::selection {background:var(--cyan); color:#0F1B2D;}
.artifact-scope .wrap {max-width:760px; margin:0 auto; padding:0 24px;}
.artifact-scope /* ---------- TOPBAR (site nav) ---------- */
  .topbar {border-bottom:1px solid var(--border); padding:14px 0; background:var(--bg); position:sticky; top:0; z-index:10;}
.artifact-scope .topbar-inner {display:flex; justify-content:space-between; align-items:center; max-width:760px; margin:0 auto; padding:0 24px;}
.artifact-scope .topbar .logo {font-family:var(--font-mono); font-weight:600; font-size:13px; letter-spacing:.05em; color:var(--cyan);}
.artifact-scope .topbar .logo a {color:inherit; text-decoration:none;}
.artifact-scope .topbar .logo a:hover {opacity:.7;}
.artifact-scope .topbar .meta-tag {font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--amber); font-weight:600;}
.artifact-scope /* ---------- HERO ---------- */
  .hero {padding:70px 0 60px; border-bottom:1px solid var(--border);}
.artifact-scope .eyebrow {
    font-family:var(--font-mono); font-size:12.5px; letter-spacing:.14em;
    color:var(--cyan); text-transform:uppercase; display:flex; align-items:center; gap:10px;
  }
.artifact-scope .eyebrow::before {content:''; width:22px; height:1px; background:var(--cyan);}
.artifact-scope h1.title {
    font-family:var(--font-display); font-weight:700;
    font-size:clamp(2.2rem, 6vw, 3.4rem); line-height:1.06; margin-top:18px;
    letter-spacing:-0.01em;
  }
.artifact-scope h1.title .vs {color:var(--text-muted); font-weight:500;}
.artifact-scope .subhead {
    margin-top:18px; font-size:clamp(1rem,2.4vw,1.15rem); color:var(--text-muted);
    max-width:56ch;
  }
.artifact-scope .subhead b {color:var(--text); font-weight:600;}
.artifact-scope /* hero diagram */
  .hero-diagram {margin-top:48px;}
.artifact-scope .hero-diagram svg {width:100%; height:auto; display:block;}
.artifact-scope .hero-caption {
    margin-top:10px; font-family:var(--font-mono); font-size:12px; color:var(--text-muted);
    text-align:center;
  }
.artifact-scope /* ---------- FRAME (signature corner-bracket device) ---------- */
  .frame {position:relative; padding:26px; border:1px solid var(--border); border-radius:var(--radius); background:var(--panel);}
.artifact-scope .corner {position:absolute; width:14px; height:14px; pointer-events:none;}
.artifact-scope .corner.tl {top:-1px; left:-1px; border-top:2px solid var(--cyan); border-left:2px solid var(--cyan); border-top-left-radius:3px;}
.artifact-scope .corner.tr {top:-1px; right:-1px; border-top:2px solid var(--cyan); border-right:2px solid var(--cyan); border-top-right-radius:3px;}
.artifact-scope .corner.bl {bottom:-1px; left:-1px; border-bottom:2px solid var(--cyan); border-left:2px solid var(--cyan); border-bottom-left-radius:3px;}
.artifact-scope .corner.br {bottom:-1px; right:-1px; border-bottom:2px solid var(--cyan); border-right:2px solid var(--cyan); border-bottom-right-radius:3px;}
.artifact-scope .frame.amber .corner {border-color:var(--amber);}
.artifact-scope /* ---------- ARTICLE / SECTIONS ---------- */
  .article {padding:70px 0;}
.artifact-scope section {margin-bottom:86px; opacity:0; transform:translateY(14px); transition:opacity .6s ease, transform .6s ease;}
.artifact-scope section.is-visible {opacity:1; transform:translateY(0);}
@media (prefers-reduced-motion:reduce) {
.artifact-scope section {opacity:1; transform:none; transition:none;}
}
.artifact-scope .step-tag {
    font-family:var(--font-mono); font-size:12.5px; color:var(--cyan);
    background:var(--cyan-dim); border:1px solid rgba(84,214,204,0.35);
    display:inline-block; padding:3px 10px; border-radius:100px; letter-spacing:.04em;
  }
.artifact-scope .step-tag.amber {color:var(--amber); background:var(--amber-dim); border-color:rgba(240,168,95,0.35);}
.artifact-scope h2 {
    font-family:var(--font-display); font-weight:600; font-size:clamp(1.5rem,3.6vw,2rem);
    margin-top:14px; letter-spacing:-0.01em;
  }
.artifact-scope h3 {font-family:var(--font-display); font-weight:600; font-size:1.15rem; margin:28px 0 10px;}
.artifact-scope p {color:var(--text-muted); margin-top:14px; max-width:64ch;}
.artifact-scope p b, .artifact-scope li b {color:var(--text); font-weight:600;}
.artifact-scope p code, .artifact-scope li code {
    font-family:var(--font-mono); font-size:.86em; background:var(--panel-2);
    padding:2px 6px; border-radius:4px; color:var(--cyan); border:1px solid var(--border);
  }
.artifact-scope .definition {
    margin-top:22px; padding:20px 22px; border-left:2px solid var(--cyan);
    background:linear-gradient(90deg, var(--cyan-dim), transparent 60%);
    border-radius:0 8px 8px 0;
  }
.artifact-scope .definition.amber {border-left-color:var(--amber); background:linear-gradient(90deg, var(--amber-dim), transparent 60%);}
.artifact-scope .definition span.label {
    display:block; font-family:var(--font-mono); font-size:11.5px; letter-spacing:.1em;
    color:var(--cyan); text-transform:uppercase; margin-bottom:6px;
  }
.artifact-scope .definition.amber span.label {color:var(--amber);}
.artifact-scope .definition p {color:var(--text); margin-top:0; max-width:none;}
.artifact-scope /* diagrams */
  .diagram {margin:30px 0; overflow-x:auto;}
.artifact-scope .diagram svg {display:block; margin:0 auto; max-width:100%; height:auto;}
.artifact-scope /* code blocks */
  .code-frame {margin:26px 0;}
.artifact-scope .code-label {
    font-family:var(--font-mono); font-size:11.5px; color:var(--text-muted);
    display:flex; justify-content:space-between; margin-bottom:10px; letter-spacing:.04em;
  }
.artifact-scope .code-label .dot {color:var(--red);}
.artifact-scope pre {
    font-family:var(--font-mono); font-size:13px; line-height:1.65;
    overflow-x:auto; white-space:pre;
  }
.artifact-scope code .tok-keyword {color:var(--amber);}
.artifact-scope code .tok-string {color:var(--cyan);}
.artifact-scope code .tok-comment {color:var(--text-muted); font-style:italic;}
.artifact-scope code .tok-type {color:#B79CE8;}
.artifact-scope code .tok-decorator {color:var(--red);}
.artifact-scope .callout {
    margin-top:22px; padding:16px 18px; border:1px dashed var(--border);
    border-radius:8px; font-size:.92rem; color:var(--text-muted); position:relative;
  }
.artifact-scope .callout::before {
    content:'⚠ COMMON MIX-UP'; display:block; font-family:var(--font-mono);
    font-size:11px; letter-spacing:.08em; color:var(--red); margin-bottom:8px;
  }
.artifact-scope .callout p {margin:0; color:var(--text-muted); max-width:none;}
.artifact-scope /* comparison table */
  table {width:100%; border-collapse:collapse; margin-top:26px; font-size:.92rem;}
.artifact-scope thead th {
    font-family:var(--font-mono); font-size:11.5px; letter-spacing:.08em; text-transform:uppercase;
    text-align:left; padding:12px 14px; color:var(--text-muted); border-bottom:1px solid var(--border);
  }
.artifact-scope thead th:nth-child(2) {color:var(--cyan);}
.artifact-scope thead th:nth-child(3) {color:var(--amber);}
.artifact-scope tbody td {padding:14px; border-bottom:1px solid var(--grid-line); vertical-align:top; color:var(--text-muted);}
.artifact-scope tbody td:first-child {color:var(--text); font-weight:600; width:26%;}
.artifact-scope tbody tr:hover {background:var(--panel);}
.artifact-scope /* family tree */
  .tree {margin-top:36px;}
.artifact-scope .tree-root {
    max-width:280px; margin:0 auto; text-align:center; padding:16px;
    border:1px solid var(--cyan); border-radius:8px; background:var(--cyan-dim);
    font-family:var(--font-display); font-weight:600; font-size:1.05rem;
  }
.artifact-scope .tree-root span {display:block; font-family:var(--font-mono); font-weight:400; font-size:11.5px;
    color:var(--text-muted); margin-top:4px; letter-spacing:.02em;}
.artifact-scope .tree-children {
    display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:36px;
    padding-top:20px; border-top:1px solid var(--border); position:relative;
  }
.artifact-scope .tree-card {
    flex:1 1 150px; max-width:220px; position:relative; padding:14px 14px 16px;
    background:var(--panel); border:1px solid var(--border); border-radius:8px;
  }
.artifact-scope .tree-card::before {
    content:''; position:absolute; top:-21px; left:50%; transform:translateX(-50%);
    width:1px; height:20px; background:var(--border);
  }
.artifact-scope .tree-card.highlight {border-color:var(--amber); background:var(--amber-dim);}
.artifact-scope .tree-card.highlight::before {background:var(--amber);}
.artifact-scope .tree-card b {display:block; font-family:var(--font-display); font-size:.98rem; margin-bottom:6px;}
.artifact-scope .tree-card p {margin:0; font-size:.83rem; max-width:none; color:var(--text-muted);}
.artifact-scope /* decision list */
  .decision {margin-top:28px;}
.artifact-scope .decision-q {
    padding:16px 18px; background:var(--panel); border:1px solid var(--border);
    border-radius:8px; font-family:var(--font-mono); font-size:.88rem; color:var(--text);
  }
.artifact-scope .decision-branch {
    margin-left:22px; margin-top:10px; padding-left:18px; border-left:2px solid var(--border);
  }
.artifact-scope .decision-branch .tag {
    font-family:var(--font-mono); font-size:11px; padding:2px 8px; border-radius:100px;
    display:inline-block; margin-bottom:8px;
  }
.artifact-scope .decision-branch.yes .tag {color:var(--cyan); background:var(--cyan-dim); border:1px solid rgba(84,214,204,.35);}
.artifact-scope .decision-branch.no .tag {color:var(--red); background:rgba(240,115,106,.12); border:1px solid rgba(240,115,106,.35);}
.artifact-scope .decision-branch p {margin-top:4px; font-size:.88rem;}
.artifact-scope .decision-result {
    margin-top:8px; font-family:var(--font-mono); font-size:.85rem; padding:8px 12px;
    background:var(--panel-2); border-radius:6px; display:inline-block; color:var(--text);
  }
.artifact-scope /* tldr */
  .tldr {
    padding:30px; border-radius:12px;
    background:linear-gradient(135deg, var(--cyan-dim), var(--amber-dim));
    border:1px solid var(--border);
  }
.artifact-scope .tldr h3 {margin-top:0; font-size:1.3rem;}
.artifact-scope .tldr p {color:var(--text); max-width:none;}
.artifact-scope .tldr .split {display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:18px;}
@media (max-width:560px) {
.artifact-scope .tldr .split {grid-template-columns:1fr;}
}
.artifact-scope .tldr .col {padding:16px; background:rgba(15,27,45,0.45); border-radius:8px;}
.artifact-scope .tldr .col .k {font-family:var(--font-mono); font-size:11px; letter-spacing:.08em; text-transform:uppercase;}
.artifact-scope .tldr .col:nth-child(1) .k {color:var(--cyan);}
.artifact-scope .tldr .col:nth-child(2) .k {color:var(--amber);}
.artifact-scope .tldr .col p {margin-top:8px; font-size:.9rem; color:var(--text-muted);}
.artifact-scope .divider {height:1px; background:var(--border);}
.artifact-scope footer {
    border-top:1px solid var(--border); padding:34px 0 90px; margin-top:20px;
    font-family:var(--font-body); font-size:14px; color:var(--text-muted);
  }
.artifact-scope footer .tag {
    font-family:var(--font-mono); font-size:11.5px; letter-spacing:.1em;
    text-transform:uppercase; color:var(--amber);
  }
.artifact-scope footer p {color:var(--text-muted); max-width:none; margin-top:8px;}
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">SOFTWARE DESIGN &mdash; FIRST PRINCIPLES</span>
  </div>
</div>

<div class="wrap">
  <header class="hero">
    <div class="eyebrow">SOFTWARE DESIGN · FIRST PRINCIPLES</div>
    <h1 class="title">Adapter <span class="vs">vs</span> Delegate</h1>
    <p class="subhead">
      <b>Adapter</b> is a named design pattern from the GOF book. <b>Delegation</b> is the mechanism Adapter uses internally to work.
      One is a <i>tool</i>, the other is <i>how you use that tool for a specific purpose</i> — and most of the confusion comes from collapsing these two layers into one.
    </p>

    <div class="hero-diagram">
      <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a round plug that doesn't fit a square socket, with an Adapter standing between them to translate">
        <!-- client plug -->
        <g>
          <rect x="20" y="80" width="90" height="60" rx="8" fill="#16273F" stroke="#54D6CC" stroke-width="1.5"/>
          <circle cx="118" cy="98" r="7" fill="#54D6CC"/>
          <circle cx="118" cy="122" r="7" fill="#54D6CC"/>
          <text x="65" y="65" fill="#54D6CC" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">Client</text>
          <text x="65" y="160" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">expects ● round pins</text>
        </g>
        <!-- connecting lines dashed -->
        <line x1="125" y1="110" x2="270" y2="110" stroke="#8CA0B8" stroke-width="1.5" stroke-dasharray="4 4"/>
        <!-- adapter -->
        <g>
          <rect x="270" y="65" width="160" height="90" rx="8" fill="#1C3049" stroke="#F0A85F" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="350" y="105" fill="#F0A85F" font-family="Space Grotesk" font-weight="600" font-size="15" text-anchor="middle">ADAPTER</text>
          <text x="350" y="124" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">delegates to →</text>
        </g>
        <line x1="430" y1="110" x2="575" y2="110" stroke="#8CA0B8" stroke-width="1.5" stroke-dasharray="4 4"/>
        <!-- adaptee socket -->
        <g>
          <rect x="575" y="80" width="105" height="60" rx="4" fill="#16273F" stroke="#F0736A" stroke-width="1.5"/>
          <rect x="590" y="102" width="30" height="16" fill="#0F1B2D" stroke="#F0736A" stroke-width="1.5"/>
          <rect x="628" y="102" width="30" height="16" fill="#0F1B2D" stroke="#F0736A" stroke-width="1.5"/>
          <text x="627" y="65" fill="#F0736A" font-family="IBM Plex Mono" font-size="11" text-anchor="middle">Adaptee</text>
          <text x="627" y="160" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="10" text-anchor="middle">exposes ▭ flat slots</text>
        </g>
        <text x="350" y="30" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="10.5" text-anchor="middle">Two incompatible interfaces — but they still need to talk to each other</text>
      </svg>
      <div class="hero-caption">Adapter doesn't change the Client, doesn't change the Adaptee — it just stands in the middle and delegates the call.</div>
    </div>
  </header>

  <main class="article">

    <!-- SECTION 1: DELEGATION -->
    <section id="delegation">
      <span class="step-tag">PRINCIPLE #1</span>
      <h2>What Delegation Actually Is, From the Ground Up</h2>
      <p>
        Before talking about Adapter, one thing needs to be pulled apart: <b>delegation is not a pattern</b>.
        It's a lower-level <b>composition mechanism</b> — the foundation that many other patterns (Adapter included) are built on.
      </p>

      <div class="definition">
        <span class="label">Definition</span>
        <p>
          <b>Delegation</b> happens when object <code>A</code> holds a reference to object <code>B</code>,
          and on receiving a request, instead of handling it itself, <code>A</code> forwards that request to <code>B</code> —
          but from the outside caller's point of view, they only ever see themselves calling <code>A</code>.
        </p>
      </div>

      <p>
        This is the concrete expression of the classic <b>"composition over inheritance"</b> principle.
        Instead of <code>A</code> inheriting from <code>B</code> (an <i>is-a</i> relationship, fixed at compile time),
        <code>A</code> holds an instance of <code>B</code> (a <i>has-a</i> relationship, flexible at runtime, swappable).
      </p>

      <div class="diagram">
        <svg viewBox="0 0 620 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Client calls Car.start, Car delegates to Engine.start">
          <rect x="10" y="45" width="120" height="50" rx="8" fill="#16273F" stroke="#8CA0B8" stroke-width="1.3"/>
          <text x="70" y="75" fill="#E8EEF5" font-family="IBM Plex Mono" font-size="12" text-anchor="middle">Client</text>

          <line x1="130" y1="70" x2="215" y2="70" stroke="#54D6CC" stroke-width="1.5" marker-end="url(#arrow1)"/>
          <text x="172" y="58" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">.start()</text>

          <rect x="215" y="35" width="150" height="70" rx="8" fill="#16273F" stroke="#54D6CC" stroke-width="1.5"/>
          <text x="290" y="65" fill="#54D6CC" font-family="Space Grotesk" font-weight="600" font-size="13" text-anchor="middle">Car</text>
          <text x="290" y="83" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">self._engine</text>

          <line x1="365" y1="70" x2="470" y2="70" stroke="#54D6CC" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#arrow1)"/>
          <text x="417" y="58" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">delegate →</text>

          <rect x="470" y="35" width="140" height="70" rx="8" fill="#1C3049" stroke="#8CA0B8" stroke-width="1.3"/>
          <text x="540" y="65" fill="#E8EEF5" font-family="Space Grotesk" font-weight="600" font-size="13" text-anchor="middle">Engine</text>
          <text x="540" y="83" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">.start()</text>

          <defs>
            <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#54D6CC"/>
            </marker>
          </defs>
        </svg>
      </div>

      <div class="code-frame frame">
        <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
        <div class="code-label"><span>delegation_basic.py</span><span class="dot">●</span></div>
        <pre><code class="language-python">class Engine:
    def start(self) -> str:
        return "Engine: vroom vroom!"

class Car:
    def __init__(self):
        self._engine = Engine()   # composition: Car "has-a" Engine

    def start(self) -> str:
        # Car doesn't start itself - it DELEGATES this work to Engine
        return self._engine.start()

car = Car()
print(car.start())   # "Engine: vroom vroom!"</code></pre>
      </div>

      <h3>Delegation Can Also Happen Dynamically</h3>
      <p>Python lets you delegate even methods whose names you <i>don't know yet</i> at write time, via <code>__getattr__</code>:</p>

      <div class="code-frame frame">
        <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
        <div class="code-label"><span>dynamic_delegation.py</span><span class="dot">●</span></div>
        <pre><code class="language-python">class LoggingList:
    def __init__(self):
        self._data = []

    def __getattr__(self, name):
        # Any attribute/method that doesn't exist on LoggingList
        # gets automatically delegated to self._data
        print(f"[LOG] delegate '{name}' -> list")
        return getattr(self._data, name)

ll = LoggingList()
ll.append(1)      # [LOG] delegate 'append' -> list
ll.append(2)      # [LOG] delegate 'append' -> list
print(ll._data)    # [1, 2]</code></pre>
      </div>

      <div class="callout">
        <p>
          Delegation <b>doesn't care</b> whether two interfaces match or not. It's purely a call-forwarding mechanism.
          If <code>Car</code> and <code>Engine</code> happen to share the same method name (<code>start</code>), that's a convenient coincidence — not a requirement of delegation.
        </p>
      </div>
    </section>

    <!-- SECTION 2: ADAPTER -->
    <section id="adapter">
      <span class="step-tag amber">PRINCIPLE #2</span>
      <h2>When Delegation Gets a Specific Job → Adapter Is Born</h2>
      <p>
        The Adapter Pattern (GOF, Structural group) is the answer to exactly one problem:
        <b>two objects need to work together, but their interfaces don't match — and you're not allowed to modify the code on either side</b>
        (a third-party library, a legacy system, an API you don't maintain...).
      </p>

      <div class="definition amber">
        <span class="label">Definition</span>
        <p>
          <b>Adapter</b> = an intermediary class that internally uses <b>delegation</b> to forward calls to the original object (the <i>adaptee</i>),
          while externally exposing exactly the interface the client needs (the <i>target interface</i>).
          It adds no business logic — it only <b>translates</b> calls from one shape into another.
        </p>
      </div>

      <p>
        This is the single most important insight of this article: <b>Adapter = Delegation + one very specific purpose (interface translation)</b>.
        What gives Adapter its "identity" isn't the fact that it delegates — it's <i>why</i> it delegates.
      </p>

      <div class="diagram">
        <svg viewBox="0 0 620 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PaymentProcessor target interface, StripeAdapter, LegacyStripeClient adaptee">
          <rect x="10" y="55" width="160" height="55" rx="8" fill="#16273F" stroke="#54D6CC" stroke-width="1.5"/>
          <text x="90" y="78" fill="#54D6CC" font-family="Space Grotesk" font-weight="600" font-size="12.5" text-anchor="middle">PaymentProcessor</text>
          <text x="90" y="96" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">target interface</text>

          <line x1="170" y1="82" x2="235" y2="82" stroke="#F0A85F" stroke-width="1.5" marker-end="url(#arrow2)"/>
          <text x="202" y="70" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9" text-anchor="middle">implements</text>

          <rect x="235" y="45" width="160" height="75" rx="8" fill="#1C3049" stroke="#F0A85F" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="315" y="75" fill="#F0A85F" font-family="Space Grotesk" font-weight="700" font-size="13.5" text-anchor="middle">StripeAdapter</text>
          <text x="315" y="93" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9" text-anchor="middle">.pay(amount, ccy)</text>
          <text x="315" y="108" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9" text-anchor="middle">delegates to ↓</text>

          <line x1="395" y1="82" x2="460" y2="82" stroke="#F0736A" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#arrow3)"/>
          <text x="428" y="70" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9" text-anchor="middle">wraps</text>

          <rect x="460" y="55" width="160" height="55" rx="8" fill="#16273F" stroke="#F0736A" stroke-width="1.5"/>
          <text x="540" y="78" fill="#F0736A" font-family="Space Grotesk" font-weight="600" font-size="12.5" text-anchor="middle">LegacyStripeClient</text>
          <text x="540" y="96" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9.5" text-anchor="middle">.charge(cents)</text>

          <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#F0A85F"/></marker>
            <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#F0736A"/></marker>
          </defs>
        </svg>
      </div>

      <div class="code-frame frame amber">
        <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
        <div class="code-label"><span>adapter_pattern.py</span><span class="dot">●</span></div>
        <pre><code class="language-python">from typing import Protocol

# Adaptee: legacy system, incompatible interface, you are NOT allowed to modify it
class LegacyStripeClient:
    def charge(self, amount_in_cents: int) -> str:
        return f"Legacy Stripe charged {amount_in_cents} cents"

# Target interface: what your new code expects
class PaymentProcessor(Protocol):
    def pay(self, amount_dollars: float, currency: str) -> str: ...

# Adapter: translates between the two interfaces, using DELEGATION as its internal mechanism
class StripeAdapter:
    def __init__(self, legacy_client: LegacyStripeClient):
        self._legacy_client = legacy_client   # composition

    def pay(self, amount_dollars: float, currency: str) -> str:
        if currency != "USD":
            raise ValueError("Legacy Stripe only supports USD")
        cents = int(amount_dollars * 100)
        return self._legacy_client.charge(cents)   # delegate call

# New code doesn't need to know anything about LegacyStripeClient
def checkout(processor: PaymentProcessor, amount: float):
    print(processor.pay(amount, "USD"))

legacy = LegacyStripeClient()
adapter = StripeAdapter(legacy)
checkout(adapter, 49.99)   # Legacy Stripe charged 4999 cents</code></pre>
      </div>

      <div class="callout">
        <p>
          If <code>PaymentProcessor.pay()</code> and <code>LegacyStripeClient.charge()</code> already shared the same signature,
          you <b>wouldn't need an Adapter</b> — just delegate directly, like the <code>Car</code>/<code>Engine</code> example above.
          An Adapter only earns its keep when there's a real interface gap that actually needs translating.
        </p>
      </div>
    </section>

    <!-- SECTION 3: COMPARISON -->
    <section id="comparison">
      <span class="step-tag">SIDE BY SIDE</span>
      <h2>Delegation vs Adapter, Side by Side</h2>
      <table>
        <thead>
          <tr><th>Criterion</th><th>Delegation</th><th>Adapter Pattern</th></tr>
        </thead>
        <tbody>
          <tr><td>Nature</td><td>Low-level composition mechanism</td><td>High-level design pattern, with intent</td></tr>
          <tr><td>Purpose</td><td>Reuse another object's behavior</td><td>Translate an incompatible interface into the one you need</td></tr>
          <tr><td>Interface</td><td>May match or differ — doesn't matter</td><td>Must differ — that's the whole reason it exists</td></tr>
          <tr><td>Scope</td><td>The foundation for nearly every kind of object composition</td><td>One specific situation: integrating legacy code / external libraries</td></tr>
          <tr><td>Adds new logic?</td><td>Maybe, maybe not — up to you</td><td>No — only translates the signal, adds no business logic</td></tr>
          <tr><td>Self-check question</td><td>"Am I asking another object to do the work for me?"</td><td>"Am I making two APIs that couldn't talk to each other, talk to each other?"</td></tr>
        </tbody>
      </table>
    </section>

    <!-- SECTION 4: FAMILY TREE -->
    <section id="family">
      <span class="step-tag">ZOOMING OUT</span>
      <h2>Delegation Is the "Root" of Many Other Patterns</h2>
      <p>
        Once you see delegation as the underlying mechanism, you'll notice: Adapter is just <b>one of many</b> patterns
        that share this mechanism, each pattern attaching a different <i>intent</i> to it.
      </p>

      <div class="tree">
        <div class="tree-root">Delegation<span>object A holds a reference to B and forwards calls</span></div>
        <div class="tree-children">
          <div class="tree-card highlight">
            <b>Adapter</b>
            <p>Changes the interface — so two otherwise-incompatible sides can talk to each other.</p>
          </div>
          <div class="tree-card">
            <b>Decorator</b>
            <p>Keeps the interface unchanged, adds new behavior around the original call.</p>
          </div>
          <div class="tree-card">
            <b>Proxy</b>
            <p>Keeps the interface unchanged, controls or defers access.</p>
          </div>
          <div class="tree-card">
            <b>State</b>
            <p>Delegates behavior to an object representing the current state.</p>
          </div>
          <div class="tree-card">
            <b>Strategy</b>
            <p>Delegates behavior to an algorithm chosen at runtime.</p>
          </div>
          <div class="tree-card">
            <b>Composite</b>
            <p>Delegates the same call to multiple children at once.</p>
          </div>
        </div>
      </div>

      <div class="callout">
        <p>
          The subtlest distinction is between <b>Adapter</b> and <b>Decorator</b>: both use delegation,
          but Decorator keeps the interface <i>unchanged</i> (only adds behavior), while Adapter <i>must change</i> the interface (adds no new behavior, only translates).
        </p>
      </div>
    </section>

    <!-- SECTION 4.5: HYDRA SCENE/RENDER DELEGATE -->
    <section id="hydra">
      <span class="step-tag amber">REAL-WORLD EXAMPLE — OPENUSD / HYDRA</span>
      <h2>Scene Delegate &amp; Render Delegate: When the Name "Delegate" Is Actually Playing Adapter</h2>
      <p>
        <b>Hydra</b> is the render architecture behind OpenUSD (and Omniverse Kit): it separates the "core render logic"
        from both the scene data source and the specific renderer backend. Hydra's two central classes —
        <code>HdSceneDelegate</code> and <code>HdRenderDelegate</code> — literally have the word <b>"Delegate"</b> in their name,
        but look closely and their actual behavior is much closer to the Adapter this article just walked through.
      </p>

      <div class="definition amber">
        <span class="label">Insight</span>
        <p>
          <code>HdSceneDelegate</code> and <code>HdRenderDelegate</code> are two abstract <b>target interfaces</b> that the Hydra Engine uses to
          talk to the outside world, without needing to know where the data comes from (a USD stage, some other DCC...)
          or what it's rendered with (Storm/OpenGL, RenderMan, RTX...). The classes that actually implement these two interfaces —
          for example <code>UsdImagingDelegate</code> on the scene side, or the RTX render plugin on the render side — are exactly <b>Adapters</b>:
          they wrap a data source or render backend with a completely different API, then translate it into the exact shape the Hydra core needs.
        </p>
      </div>

      <div class="diagram">
        <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HydraEngine delegates to SceneDelegate and RenderDelegate, each delegate wrapping its own adaptee">
          <rect x="210" y="10" width="200" height="52" rx="8" fill="#16273F" stroke="#8CA0B8" stroke-width="1.3"/>
          <text x="310" y="34" fill="#E8EEF5" font-family="Space Grotesk" font-weight="600" font-size="13" text-anchor="middle">HydraEngine</text>
          <text x="310" y="50" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="9" text-anchor="middle">only knows two abstract interfaces</text>

          <line x1="260" y1="62" x2="150" y2="100" stroke="#54D6CC" stroke-width="1.5" marker-end="url(#arrowH1)"/>
          <line x1="360" y1="62" x2="470" y2="100" stroke="#54D6CC" stroke-width="1.5" marker-end="url(#arrowH2)"/>

          <rect x="40" y="100" width="180" height="60" rx="8" fill="#1C3049" stroke="#F0A85F" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="130" y="122" fill="#F0A85F" font-family="Space Grotesk" font-weight="700" font-size="12.5" text-anchor="middle">UsdSceneDelegate</text>
          <text x="130" y="138" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="8.5" text-anchor="middle">implements HdSceneDelegate</text>
          <text x="130" y="152" fill="#F0A85F" font-family="IBM Plex Mono" font-size="8.5" text-anchor="middle">(ADAPTER)</text>

          <rect x="400" y="100" width="180" height="60" rx="8" fill="#1C3049" stroke="#F0A85F" stroke-width="1.5" stroke-dasharray="5 3"/>
          <text x="490" y="122" fill="#F0A85F" font-family="Space Grotesk" font-weight="700" font-size="12.5" text-anchor="middle">RtxRenderDelegate</text>
          <text x="490" y="138" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="8.5" text-anchor="middle">implements HdRenderDelegate</text>
          <text x="490" y="152" fill="#F0A85F" font-family="IBM Plex Mono" font-size="8.5" text-anchor="middle">(ADAPTER)</text>

          <line x1="130" y1="160" x2="130" y2="200" stroke="#F0736A" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#arrowH3)"/>
          <line x1="490" y1="160" x2="490" y2="200" stroke="#F0736A" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#arrowH4)"/>

          <rect x="40" y="200" width="180" height="50" rx="6" fill="#16273F" stroke="#F0736A" stroke-width="1.3"/>
          <text x="130" y="222" fill="#F0736A" font-family="Space Grotesk" font-weight="600" font-size="12" text-anchor="middle">UsdStage</text>
          <text x="130" y="238" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="8.5" text-anchor="middle">adaptee — raw USD data</text>

          <rect x="400" y="200" width="180" height="50" rx="6" fill="#16273F" stroke="#F0736A" stroke-width="1.3"/>
          <text x="490" y="222" fill="#F0736A" font-family="Space Grotesk" font-weight="600" font-size="12" text-anchor="middle">RtxNativeEngine</text>
          <text x="490" y="238" fill="#8CA0B8" font-family="IBM Plex Mono" font-size="8.5" text-anchor="middle">adaptee — native render API</text>

          <defs>
            <marker id="arrowH1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#54D6CC"/></marker>
            <marker id="arrowH2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#54D6CC"/></marker>
            <marker id="arrowH3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#F0736A"/></marker>
            <marker id="arrowH4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#F0736A"/></marker>
          </defs>
        </svg>
      </div>

      <div class="code-frame frame amber">
        <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
        <div class="code-label"><span>hydra_scene_render_delegate.py</span><span class="dot">●</span></div>
        <pre><code class="language-python">from typing import Protocol

# ---------- Scene side ----------
# Target interface that the Hydra Engine core expects - knows nothing about USD
class HdSceneDelegate(Protocol):
    def get_mesh_points(self, prim_path: str): ...
    def get_transform(self, prim_path: str): ...

# Adaptee: USD Stage has its own API/data model, doesn't match Hydra directly
class UsdStage:
    def get_attribute(self, path: str, attr: str):
        if attr == "points":
            return [(0, 0, 0), (1, 0, 0), (1, 1, 0)]
        if attr == "xformOp:transform":
            return [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

# Adapter (in real USD this is called UsdImagingDelegate)
# implements HdSceneDelegate, delegates every query down to UsdStage
class UsdSceneDelegate:
    def __init__(self, stage: UsdStage):
        self._stage = stage   # composition = delegation

    def get_mesh_points(self, prim_path: str):
        return self._stage.get_attribute(prim_path, "points")

    def get_transform(self, prim_path: str):
        return self._stage.get_attribute(prim_path, "xformOp:transform")


# ---------- Render side ----------
# Target interface that the Hydra Engine core expects from any render backend
class HdRenderDelegate(Protocol):
    def draw_mesh(self, points, transform) -> None: ...

# Adaptee: a real render engine (e.g. the RTX renderer in Omniverse Kit),
# has its own API, completely unrelated to Hydra
class RtxNativeEngine:
    def submit_triangles(self, vertex_buffer, model_matrix):
        print(f"[RTX] submit {len(vertex_buffer)} verts, matrix={model_matrix[0]}")

# Adapter (in reality the HdRtxRenderDelegate plugin)
# translates Hydra's commands into native RTX renderer calls
class RtxRenderDelegate:
    def __init__(self, engine: RtxNativeEngine):
        self._engine = engine

    def draw_mesh(self, points, transform):
        self._engine.submit_triangles(vertex_buffer=points, model_matrix=transform)


# ---------- Hydra Engine: only knows how to talk to the two interfaces above ----------
class HydraEngine:
    def __init__(self, scene_delegate: HdSceneDelegate, render_delegate: HdRenderDelegate):
        self._scene = scene_delegate      # DELEGATE #1
        self._render = render_delegate    # DELEGATE #2

    def render_prim(self, prim_path: str):
        points = self._scene.get_mesh_points(prim_path)
        transform = self._scene.get_transform(prim_path)
        self._render.draw_mesh(points, transform)


engine = HydraEngine(
    scene_delegate=UsdSceneDelegate(UsdStage()),
    render_delegate=RtxRenderDelegate(RtxNativeEngine()),
)
engine.render_prim("/World/Mesh1")
# [RTX] submit 3 verts, matrix=[1, 0, 0, 0]</code></pre>
      </div>

      <div class="callout">
        <p>
          A class with "Delegate" in its name doesn't guarantee it's plain delegation.
          <code>HydraEngine</code> delegates work to <code>SceneDelegate</code>/<code>RenderDelegate</code>
          (delegation at the orchestration layer) — but those two delegates themselves are playing the role of <b>Adapter</b>
          when they translate <code>UsdStage</code> / <code>RtxNativeEngine</code> into exactly the interface the Hydra core needs.
          Two conceptual layers stack inside the same class, exactly as this article's opening insight put it:
          <b>Adapter = Delegation + a specific purpose</b>.
        </p>
      </div>
    </section>

    <!-- SECTION 5: DECISION -->
    <section id="decision">
      <span class="step-tag amber">APPLYING IT</span>
      <h2>When Do You Just Delegate By Hand, and When Do You Need a Real Adapter?</h2>

      <div class="decision">
        <div class="decision-q">? Does the existing object's interface already match the interface you need?</div>

        <div class="decision-branch yes">
          <span class="tag">YES</span>
          <p>You don't need any pattern at all — just call the object directly, or delegate plainly like the <code>Car</code>/<code>Engine</code> example.</p>
          <div class="decision-result">→ Plain delegation is enough</div>
        </div>

        <div class="decision-branch no">
          <span class="tag">NO</span>
          <p>The interfaces don't line up. Next question: are you allowed to modify that object's source code?</p>

          <div class="decision-branch yes" style="margin-top:16px;">
            <span class="tag">CAN MODIFY</span>
            <p>Change that object's signature directly to match. No intermediary class needed.</p>
            <div class="decision-result">→ Refactor directly</div>
          </div>

          <div class="decision-branch no">
            <span class="tag">CAN'T MODIFY</span>
            <p>A third-party library, a legacy system, an API you don't maintain... This is exactly the problem Adapter was created to solve.</p>
            <div class="decision-result">→ Write an Adapter class</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TLDR -->
    <section id="tldr">
      <span class="step-tag">TL;DR</span>
      <div class="tldr" style="margin-top:16px;">
        <h3>One Sentence</h3>
        <p>
          <b>Delegation answers the HOW question</b> — how objects collaborate with each other (composition instead of inheritance).
          <b>The Adapter Pattern answers the WHY question</b> — in the specific situation where two interfaces don't match, why you need an intermediary object standing between them to translate.
        </p>
        <div class="split">
          <div class="col">
            <span class="k">Delegation</span>
            <p>Mechanism. Used everywhere in OOP. Doesn't care whether interfaces match. The foundation of Adapter, Decorator, Proxy, State, Strategy, Composite.</p>
          </div>
          <div class="col">
            <span class="k">Adapter</span>
            <p>Pattern. A deliberate way of using delegation, for exactly one problem: bridging two incompatible interfaces when you can't modify either side.</p>
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <div class="divider" style="margin-bottom:24px"></div>
    <p class="tag">First principles recap</p>
    <p>Delegation is the mechanism — object A holds a reference to B and forwards the call, no opinion on whether interfaces match. Adapter is one deliberate use of that mechanism, with a name and an intent: bridge two interfaces that don't match, without touching either side. Decorator, Proxy, State, Strategy, and Composite all delegate too — what tells them apart is never the mechanism, always the intent stacked on top of it.</p>
  </footer>
</div>
`;

export const script = `
// Scroll-reveal cho từng section
  const sections = document.querySelectorAll('section');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(s => io.observe(s));
  } else {
    sections.forEach(s => s.classList.add('is-visible'));
  }

  // Syntax highlighting toi gian cho Python, single-pass de tranh double-match
  function highlightPython(raw) {
    let code = raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const pattern = /(#.*$)|("""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')|\\b(def|class|return|self|import|from|if|else|elif|for|while|try|except|raise|with|as|pass|in|is|not|and|or|None|True|False|lambda|yield|assert|del)\\b|\\b(int|str|float|bool|list|dict|tuple|set|Protocol)\\b|(@\\w+)/gm;

    return code.replace(pattern, (match, comment, string, keyword, type_, decorator) => {
      if (comment) return '<span class="tok-comment">' + comment + '</span>';
      if (string) return '<span class="tok-string">' + string + '</span>';
      if (keyword) return '<span class="tok-keyword">' + keyword + '</span>';
      if (type_) return '<span class="tok-type">' + type_ + '</span>';
      if (decorator) return '<span class="tok-decorator">' + decorator + '</span>';
      return match;
    });
  }

  document.querySelectorAll('pre code.language-python, .code-frame pre code').forEach(block => {
    block.innerHTML = highlightPython(block.textContent);
  });
`;
