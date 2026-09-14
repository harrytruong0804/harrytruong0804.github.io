export const styles = `
.artifact-scope * {box-sizing:border-box; margin:0; padding:0;}
.artifact-scope {line-height:1.65; -webkit-font-smoothing:antialiased;}
.artifact-scope a {color:var(--at-accent);}
.artifact-scope ::selection {background:var(--at-accent); color:var(--at-bg);}
.artifact-scope .wrap {max-width:760px; margin:0 auto; padding:0 24px;}

.artifact-scope .hero {padding:70px 0 56px; border-bottom:1px solid var(--at-line);}
.artifact-scope .eyebrow {
  font-family:var(--at-font-mono); font-size:12.5px; letter-spacing:.14em;
  color:var(--at-accent); text-transform:uppercase; display:flex; align-items:center; gap:10px;
}
.artifact-scope .eyebrow::before {content:''; width:22px; height:1px; background:var(--at-accent);}
.artifact-scope h1.title {
  font-family:var(--at-font-display); font-weight:700;
  font-size:clamp(2.1rem, 6vw, 3.3rem); line-height:1.06; margin-top:18px; letter-spacing:-0.01em;
}
.artifact-scope h1.title .vs {color:var(--at-muted); font-weight:500;}
.artifact-scope .subhead {margin-top:18px; font-size:clamp(1rem,2.4vw,1.15rem); color:var(--at-muted); max-width:58ch;}
.artifact-scope .subhead b {color:var(--at-text); font-weight:600;}

.artifact-scope .article {padding:64px 0 40px;}
.artifact-scope section {margin-bottom:80px; opacity:0; transform:translateY(14px); transition:opacity .6s ease, transform .6s ease;}
.artifact-scope section.is-visible {opacity:1; transform:none;}
@media (prefers-reduced-motion:reduce) {
  .artifact-scope section {opacity:1; transform:none; transition:none;}
}
.artifact-scope .step-tag {
  font-family:var(--at-font-mono); font-size:12px; color:var(--at-blue);
  background:var(--at-blue-soft); border:1px solid var(--at-blue);
  display:inline-block; padding:3px 10px; border-radius:100px; letter-spacing:.04em;
}
.artifact-scope .step-tag.amber {color:var(--at-amber); background:var(--at-amber-soft); border-color:var(--at-amber);}
.artifact-scope .step-tag.violet {color:var(--at-violet); background:var(--at-violet-soft); border-color:var(--at-violet);}
.artifact-scope .step-tag.green {color:var(--at-green); background:var(--at-green-soft); border-color:var(--at-green);}
.artifact-scope h2 {font-family:var(--at-font-display); font-weight:600; font-size:clamp(1.45rem,3.6vw,1.95rem); margin-top:14px; letter-spacing:-0.01em;}
.artifact-scope p {color:var(--at-muted); margin-top:14px; max-width:64ch;}
.artifact-scope p b, .artifact-scope li b, .artifact-scope td b {color:var(--at-text); font-weight:600;}
.artifact-scope code {
  font-family:var(--at-font-mono); font-size:.86em; background:var(--at-inset);
  padding:2px 6px; border-radius:4px; color:var(--at-blue); border:1px solid var(--at-line);
}
.artifact-scope ul.plain {margin:14px 0 0 20px; color:var(--at-muted); max-width:62ch;}
.artifact-scope ul.plain li {margin-top:6px;}

.artifact-scope .definition {
  margin-top:24px; padding:18px 22px; border-left:2px solid var(--at-accent);
  background:linear-gradient(90deg, var(--at-accent-soft), transparent 70%); border-radius:0 8px 8px 0;
}
.artifact-scope .definition .label {
  display:block; font-family:var(--at-font-mono); font-size:11.5px; letter-spacing:.1em;
  color:var(--at-accent); text-transform:uppercase; margin-bottom:6px;
}
.artifact-scope .definition p {color:var(--at-text); margin-top:0; max-width:none; font-size:1.08rem;}

.artifact-scope .diagram {margin:30px 0 6px; overflow-x:auto;}
.artifact-scope .diagram svg {display:block; margin:0 auto; width:100%; min-width:560px; height:auto;}
.artifact-scope .diagram svg text {font-family:var(--at-font-mono);}
.artifact-scope .caption {font-family:var(--at-font-mono); font-size:12px; color:var(--at-faint); text-align:center; margin-top:8px;}

.artifact-scope .callout {
  margin-top:22px; padding:16px 18px; border:1px dashed var(--at-line-strong);
  border-radius:8px; font-size:.95rem; color:var(--at-muted);
}
.artifact-scope .callout b {color:var(--at-text);}

.artifact-scope .code {
  margin-top:20px; background:var(--at-inset); border:1px solid var(--at-line); border-radius:8px;
  padding:16px 18px; overflow-x:auto;
}
.artifact-scope .code pre {font-family:var(--at-font-mono); font-size:13px; line-height:1.65; white-space:pre; color:var(--at-text);}
.artifact-scope .code code {background:none; border:0; padding:0; color:inherit; font-size:inherit;}
.artifact-scope .code .k {color:var(--at-accent);}
.artifact-scope .code .f {color:var(--at-blue);}
.artifact-scope .code .c {color:var(--at-faint); font-style:italic;}

.artifact-scope .table-wrap {margin-top:24px; overflow-x:auto; border:1px solid var(--at-line); border-radius:8px;}
.artifact-scope table {width:100%; border-collapse:collapse; font-size:.93rem; min-width:520px;}
.artifact-scope th, .artifact-scope td {padding:10px 14px; text-align:left; border-bottom:1px solid var(--at-line); vertical-align:top;}
.artifact-scope th {font-family:var(--at-font-mono); font-size:11.5px; letter-spacing:.08em; text-transform:uppercase; color:var(--at-faint); background:var(--at-surface);}
.artifact-scope td {color:var(--at-muted);}
.artifact-scope td:first-child {color:var(--at-text); font-weight:600;}
.artifact-scope tr:last-child td {border-bottom:0;}

.artifact-scope .rules {display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:26px;}
@media (max-width:620px) {.artifact-scope .rules {grid-template-columns:1fr;}}
.artifact-scope .rule {border:1px solid var(--at-line); border-radius:10px; padding:20px; background:var(--at-surface); border-top:3px solid var(--at-blue);}
.artifact-scope .rule.dsh {border-top-color:var(--at-violet);}
.artifact-scope .rule .q {font-family:var(--at-font-mono); font-size:12px; color:var(--at-faint); letter-spacing:.04em;}
.artifact-scope .rule .ask {font-family:var(--at-font-display); font-size:1.25rem; color:var(--at-text); margin-top:6px; line-height:1.3;}
.artifact-scope .rule .ask em {color:var(--at-accent); font-style:normal;}
.artifact-scope .rule .pick {margin-top:14px; font-family:var(--at-font-mono); font-size:13px; color:var(--at-blue);}
.artifact-scope .rule.dsh .pick {color:var(--at-violet);}
.artifact-scope .rule p {margin-top:8px; font-size:.93rem;}

.artifact-scope .sources {border-top:1px solid var(--at-line); padding-top:22px; font-size:.88rem;}
.artifact-scope .sources h3 {font-family:var(--at-font-mono); font-size:11.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--at-faint); font-weight:500;}
.artifact-scope .sources ul {margin:10px 0 0 18px; color:var(--at-muted);}
.artifact-scope .sources li {margin-top:4px;}
`;

export const html = `
<header class="hero">
  <div class="wrap">
    <div class="eyebrow">Agent harnesses</div>
    <h1 class="title">Pi <span class="vs">vs</span> DeepSeek Harness</h1>
    <p class="subhead">Both are called "highly customizable". They mean different things.
      <b>Pi lets you hook around a loop it owns. DeepSeek Harness doesn't own a loop at all</b>. The loop is one plugin among many.</p>

    <div class="diagram">
      <svg viewBox="0 0 720 300" role="img" aria-label="Pi: a core containing the loop, with extensions attached around it. DeepSeek Harness: a small kernel with interchangeable plugins, one of which is the loop.">
        <!-- Pi -->
        <text x="170" y="22" text-anchor="middle" font-size="13" fill="var(--at-blue)" font-weight="600">PI</text>
        <rect x="70" y="60" width="200" height="150" rx="10" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
        <text x="170" y="84" text-anchor="middle" font-size="11" fill="var(--at-blue)">privileged core</text>
        <rect x="95" y="96" width="150" height="30" rx="5" fill="var(--at-surface)" stroke="var(--at-accent)" stroke-width="1.5"/>
        <text x="170" y="115" text-anchor="middle" font-size="12" fill="var(--at-text)">agent loop</text>
        <text x="170" y="148" text-anchor="middle" font-size="11" fill="var(--at-muted)">AgentSession</text>
        <text x="170" y="166" text-anchor="middle" font-size="11" fill="var(--at-muted)">session tree</text>
        <text x="170" y="184" text-anchor="middle" font-size="11" fill="var(--at-muted)">compaction</text>
        <g stroke="var(--at-line-strong)" stroke-dasharray="3 3">
          <line x1="70" y1="100" x2="30" y2="80"/><line x1="70" y1="180" x2="30" y2="220"/>
          <line x1="270" y1="100" x2="310" y2="80"/><line x1="270" y1="180" x2="310" y2="220"/>
        </g>
        <g font-size="10.5" fill="var(--at-muted)" text-anchor="middle">
          <text x="30" y="72">tools</text><text x="30" y="236">hooks</text>
          <text x="310" y="72">commands</text><text x="310" y="236">UI</text>
        </g>
        <text x="170" y="270" text-anchor="middle" font-size="11" fill="var(--at-faint)">extensions attach to the core</text>

        <line x1="360" y1="30" x2="360" y2="280" stroke="var(--at-line)"/>

        <!-- DSH -->
        <text x="550" y="22" text-anchor="middle" font-size="13" fill="var(--at-violet)" font-weight="600">DEEPSEEK HARNESS</text>
        <g stroke="var(--at-line-strong)">
          <line x1="550" y1="145" x2="450" y2="70"/><line x1="550" y1="145" x2="550" y2="62"/><line x1="550" y1="145" x2="650" y2="70"/>
          <line x1="550" y1="145" x2="430" y2="145"/><line x1="550" y1="145" x2="670" y2="145"/>
          <line x1="550" y1="145" x2="450" y2="220"/><line x1="550" y1="145" x2="550" y2="228"/><line x1="550" y1="145" x2="650" y2="220"/>
        </g>
        <circle cx="550" cy="145" r="30" fill="var(--at-bg)"/>
        <circle cx="550" cy="145" r="30" fill="var(--at-violet-soft)" stroke="var(--at-violet)" stroke-width="1.5"/>
        <text x="550" y="149" text-anchor="middle" font-size="11" fill="var(--at-violet)">Cordis</text>
        <g font-size="10.5" text-anchor="middle" fill="var(--at-text)">
          <rect x="412" y="56" width="76" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="450" y="72">model</text>
          <rect x="512" y="48" width="76" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-accent)" stroke-width="1.5"/><text x="550" y="64">loop</text>
          <rect x="612" y="56" width="76" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="650" y="72">tools</text>
          <rect x="385" y="133" width="80" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="425" y="149">session log</text>
          <rect x="635" y="133" width="80" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="675" y="149">persistence</text>
          <rect x="412" y="208" width="76" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="450" y="224">sandbox</text>
          <rect x="512" y="216" width="76" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="550" y="232">scheduler</text>
          <rect x="612" y="208" width="76" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="650" y="224">UI</text>
        </g>
        <text x="550" y="270" text-anchor="middle" font-size="11" fill="var(--at-faint)">every capability is a plugin, loop included</text>
      </svg>
    </div>
  </div>
</header>

<div class="article">
  <div class="wrap">

    <section>
      <span class="step-tag">01 · The job</span>
      <h2>What any harness has to own</h2>
      <p>A model is a function: context in, output out. The <a href="/posts/harness-engineering/">harness</a> is everything that turns that function into an agent. It has to answer five questions, over and over:</p>
      <ul class="plain">
        <li><b>Context</b>: what does the model see this turn?</li>
        <li><b>Tools</b>: what is it allowed to do?</li>
        <li><b>State</b>: what has already happened?</li>
        <li><b>Loop</b>: should it keep going?</li>
        <li><b>Persistence</b>: what survives a crash?</li>
      </ul>
      <p>Skills, MCP, memory, subagents and planning are all implementations of those five. Pi and DeepSeek Harness (dsh) answer the same questions. They disagree on <b>which answers are fixed and which are swappable</b>.</p>
    </section>

    <section>
      <span class="step-tag amber">02 · The boundary</span>
      <h2>Where the core ends</h2>
      <p><b>Pi</b> has a real core. <code>pi-agent-core</code> runs the interaction loop, and <code>AgentSession</code> owns lifecycle, history, model state, compaction and streaming. Extensions can register tools, intercept events, rewrite the context before a provider request, and add commands or UI. All of that happens around a loop Pi owns.</p>
      <p><b>dsh</b> puts nothing in that position. Its architecture doc says <i>"There is no privileged core to patch"</i>. Cordis, a small composition kernel, provides services, typed events and lifecycle. The model adapter, tool registry, session log and agent loop are all plugins, and any of them can be replaced from configuration.</p>
      <div class="definition">
        <span class="label">The difference</span>
        <p>Pi is an extensible agent. dsh is a system for composing agents.</p>
      </div>
      <p>Pi is shaped like an application with a plugin API. dsh is shaped like a microkernel with loadable services.</p>
    </section>

    <section>
      <span class="step-tag violet">03 · The loop</span>
      <h2>Changing how the agent thinks</h2>
      <p>Suppose plain call-tool-observe isn't enough. You want the agent to form three hypotheses, run tools in parallel, pass the results to a critic, update a belief state, and only then act.</p>
      <div class="diagram">
        <svg viewBox="0 0 720 250" role="img" aria-label="In Pi, custom orchestration wraps around the existing loop via hooks. In dsh, the default loop plugin is removed and a new one mounted in the same slot, while other services stay unchanged.">
          <text x="170" y="22" text-anchor="middle" font-size="12" fill="var(--at-blue)" font-weight="600">PI · bend the loop</text>
          <rect x="30" y="40" width="280" height="180" rx="10" fill="none" stroke="var(--at-amber)" stroke-dasharray="5 4" stroke-width="1.5"/>
          <text x="170" y="60" text-anchor="middle" font-size="10.5" fill="var(--at-amber)">your orchestration layer</text>
          <rect x="95" y="100" width="150" height="60" rx="8" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
          <text x="170" y="135" text-anchor="middle" font-size="12" fill="var(--at-text)">Pi loop</text>
          <g font-size="10" fill="var(--at-muted)">
            <text x="45" y="92">intercept</text><text x="250" y="92">tools</text>
            <text x="45" y="185">context edits</text><text x="245" y="185">events</text>
          </g>
          <text x="170" y="240" text-anchor="middle" font-size="10.5" fill="var(--at-faint)">the old loop still runs underneath</text>

          <line x1="360" y1="20" x2="360" y2="240" stroke="var(--at-line)"/>

          <text x="550" y="22" text-anchor="middle" font-size="12" fill="var(--at-violet)" font-weight="600">DSH · swap the loop</text>
          <rect x="470" y="46" width="160" height="30" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)" stroke-dasharray="4 3"/>
          <text x="550" y="65" text-anchor="middle" font-size="11" fill="var(--at-faint)" text-decoration="line-through">default loop</text>
          <path d="M550 80 L550 96" stroke="var(--at-faint)"/>
          <rect x="470" y="100" width="160" height="34" rx="5" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/>
          <text x="550" y="122" text-anchor="middle" font-size="11.5" fill="var(--at-text)">belief-loop plugin</text>
          <text x="550" y="152" text-anchor="middle" font-size="10" fill="var(--at-violet)">mounted as ctx.agentLoop</text>
          <g font-size="10" text-anchor="middle" fill="var(--at-muted)">
            <rect x="395" y="172" width="70" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line)"/><text x="430" y="188">model</text>
            <rect x="475" y="172" width="70" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line)"/><text x="510" y="188">tools</text>
            <rect x="555" y="172" width="70" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line)"/><text x="590" y="188">session</text>
            <rect x="635" y="172" width="70" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line)"/><text x="670" y="188">UI</text>
          </g>
          <text x="550" y="222" text-anchor="middle" font-size="10.5" fill="var(--at-faint)">everything else unchanged</text>
        </svg>
      </div>
      <p>In Pi you <b>bend</b> the loop: intercept events, rewrite context, add tools. Once that stops being enough, you build orchestration around the loop. In dsh you <b>swap</b> it: unmount the default loop plugin and mount yours. Model, tools, session and UI stay as they were, because the loop was only ever a service.</p>
      <p>If you want a different way of thinking, dsh fits better. If you want a simple loop with custom tools, context and memory, Pi wins because there's less to learn.</p>
    </section>

    <section>
      <span class="step-tag green">04 · State</span>
      <h2>A conversation tree vs an event log</h2>
      <div class="diagram">
        <svg viewBox="0 0 720 240" role="img" aria-label="Pi stores a tree of messages with id and parentId, allowing branches. dsh stores an append-only event log from which conversation, schedule state, UI and LLM context are projected.">
          <text x="150" y="22" text-anchor="middle" font-size="12" fill="var(--at-blue)" font-weight="600">PI · session tree</text>
          <g stroke="var(--at-blue)" stroke-width="1.5">
            <line x1="60" y1="120" x2="130" y2="80"/><line x1="60" y1="120" x2="130" y2="160"/>
            <line x1="130" y1="80" x2="210" y2="80"/><line x1="130" y1="160" x2="210" y2="160"/>
          </g>
          <g font-size="11" text-anchor="middle" fill="var(--at-text)">
            <circle cx="60" cy="120" r="16" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/><text x="60" y="124">A</text>
            <circle cx="130" cy="80" r="16" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/><text x="130" y="84">B</text>
            <circle cx="210" cy="80" r="16" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/><text x="210" y="84">C</text>
            <circle cx="130" cy="160" r="16" fill="var(--at-blue-soft)" stroke="var(--at-blue)"/><text x="130" y="164">D</text>
            <circle cx="210" cy="160" r="16" fill="var(--at-accent-soft)" stroke="var(--at-accent)"/><text x="210" y="164">E</text>
          </g>
          <text x="150" y="210" text-anchor="middle" font-size="10.5" fill="var(--at-muted)">JSONL entries: id + parentId</text>
          <text x="150" y="228" text-anchor="middle" font-size="10.5" fill="var(--at-faint)">branch, fork, compact</text>

          <line x1="300" y1="20" x2="300" y2="230" stroke="var(--at-line)"/>

          <text x="510" y="22" text-anchor="middle" font-size="12" fill="var(--at-violet)" font-weight="600">DSH · event log + projections</text>
          <g font-size="9.5" fill="var(--at-text)">
            <rect x="330" y="40" width="130" height="180" rx="6" fill="var(--at-inset)" stroke="var(--at-line-strong)"/>
            <text x="342" y="62">turn/start</text>
            <text x="342" y="82">prompt/injected</text>
            <text x="342" y="102">llm/request</text>
            <text x="342" y="122">tool/call</text>
            <text x="342" y="142">tool/result</text>
            <text x="342" y="162">subagent/scheduled</text>
            <text x="342" y="182">schedule/change</text>
            <text x="342" y="206" fill="var(--at-faint)">… append-only</text>
          </g>
          <g stroke="var(--at-violet)" fill="none">
            <path d="M462 130 L560 58"/><path d="M462 130 L560 104"/><path d="M462 130 L560 150"/><path d="M462 130 L560 196"/>
          </g>
          <g font-size="10.5" text-anchor="middle">
            <rect x="562" y="46" width="140" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="632" y="62" fill="var(--at-text)">conversation</text>
            <rect x="562" y="92" width="140" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="632" y="108" fill="var(--at-text)">schedule state</text>
            <rect x="562" y="138" width="140" height="24" rx="4" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="632" y="154" fill="var(--at-text)">UI</text>
            <rect x="562" y="184" width="140" height="24" rx="4" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/><text x="632" y="200" fill="var(--at-text)">LLM context</text>
          </g>
        </svg>
      </div>
      <p><b>Pi</b> stores a session as a JSONL tree. Each entry has an <code>id</code> and a <code>parentId</code>, so you can branch in place, fork and compact. Compaction is lossy for the model, but the full history stays in the file. That's the right shape for a coding assistant.</p>
      <p><b>dsh</b> stores an append-only event log, and the log is the source of truth. The conversation, schedule state, UI and the model's context are all <i>projections</i> computed from it. The rule is explicit: <i>"model-visible means logged"</i>. Resume, fork and replay all read the same stream. This is event sourcing.</p>
      <div class="callout"><b>What happened ≠ what the model sees.</b> A long-lived agent's history can reach gigabytes while its context stays at a few tens of thousands of tokens. Pi separates the two through compaction. In dsh the separation is part of the data model: canonical log, then a projection, then the context.</div>
      <p>This matters once an agent does more than chat. Take "book maintenance, wait eight hours for a manager's approval, then submit". Keeping that in a <code>messages[]</code> array means tracking approval status, pending actions and recovery state by hand. As events (<code>work-order/proposed</code>, <code>approval/granted</code>, <code>work-order/submitted</code>), the state can be rebuilt by replaying the log.</p>
    </section>

    <section>
      <span class="step-tag amber">05 · Failure</span>
      <h2>The crash in the middle of a tool call</h2>
      <p>Every production agent has to answer one question: the model says <i>transfer $100</i>, the tool runs, and the process dies before the result is written. After a restart, did the transfer happen?</p>
      <div class="diagram">
        <svg viewBox="0 0 720 150" role="img" aria-label="Timeline: append tool call, flush as durability barrier, execute, crash before result is appended. On restart the log shows a call with no result.">
          <line x1="40" y1="70" x2="680" y2="70" stroke="var(--at-line-strong)" stroke-width="1.5"/>
          <g font-size="11" text-anchor="middle">
            <circle cx="100" cy="70" r="7" fill="var(--at-violet)"/><text x="100" y="48" fill="var(--at-text)">append tool/call</text>
            <rect x="230" y="50" width="8" height="40" fill="var(--at-green)"/><text x="234" y="112" fill="var(--at-green)">flush()</text><text x="234" y="128" fill="var(--at-faint)" font-size="10">durability barrier</text>
            <circle cx="380" cy="70" r="7" fill="var(--at-amber)"/><text x="380" y="48" fill="var(--at-text)">execute transfer</text>
            <text x="500" y="76" fill="var(--at-accent)" font-size="20">✕</text><text x="500" y="48" fill="var(--at-accent)">crash</text>
            <circle cx="620" cy="70" r="7" fill="none" stroke="var(--at-faint)" stroke-dasharray="2 2"/><text x="620" y="48" fill="var(--at-faint)">tool/result</text><text x="620" y="112" fill="var(--at-faint)" font-size="10">never written</text>
          </g>
        </svg>
      </div>
      <p>In dsh, <code>append()</code> may buffer and <code>flush()</code> is the real durability barrier. After a crash, the persistence layer throws away only the torn tail, and the agent loop reads the valid prefix. It sees a call with no result and repairs from there, instead of guessing. Pi's session model is local JSONL built for coding sessions. It recovers, but durable production execution isn't what its core is built for.</p>
      <div class="callout"><b>Event sourcing isn't a workflow engine.</b> A clean log tells you the call was <i>made</i>. It can't tell you whether the bank processed it. Payments, work orders and emails still need idempotency keys, an outbox and a retry policy, and sometimes a durable runtime such as Temporal, Restate or DBOS. dsh gives you better seams for these. Neither harness solves distributed systems for you.</div>
    </section>

    <section>
      <span class="step-tag">06 · Cost</span>
      <h2>The complexity budget</h2>
      <p>An abstraction is worth adding only if it pays for what it costs to understand. Pi sets that bar very high: <b>if the OS can already do it, the harness shouldn't</b>. Its README lists what's missing on purpose:</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Need</th><th>Pi's answer</th></tr></thead>
          <tbody>
            <tr><td>Subagents</td><td>spawn another <code>pi</code> process, or an extension</td></tr>
            <tr><td>Background jobs</td><td><code>tmux</code></td></tr>
            <tr><td>Permissions</td><td>run it in a container, or write a gate extension</td></tr>
            <tr><td>MCP</td><td>a CLI tool with a README, or an extension</td></tr>
            <tr><td>Plan mode, todos</td><td>an extension or package</td></tr>
          </tbody>
        </table>
      </div>
      <p>The model already knows the shell, so <code>psql</code>, <code>gh</code> or a Slack CLI is a tool with zero framework code. Debugging comes down to "does the command work?". Embedding Pi takes two calls:</p>
      <div class="code"><pre><code><span class="k">const</span> { session } = <span class="k">await</span> <span class="f">createAgentSession</span>({ sessionManager, modelRuntime });
<span class="k">await</span> session.<span class="f">prompt</span>(<span class="c">/* ... */</span>);</code></pre></div>
      <p>dsh optimizes for something else: can any capability be recomposed consistently? To get there you need to understand contexts, services, effects, typed events, plugin lifecycle and projections. Its architecture doc tells you to read the Cordis primer before touching <code>packages/</code>.</p>
      <div class="definition">
        <span class="label">Watch the word "minimal"</span>
        <p>A small feature surface isn't a small architecture. You can configure dsh down to a shell and an editor, and the plugin graph still runs underneath. Pi is small in its architecture, not just its features.</p>
      </div>
    </section>

    <section>
      <span class="step-tag violet">07 · Gravity</span>
      <h2>Pi, one year in</h2>
      <p>Start on Pi and grow a platform on it. Along the way you add custom persistence, then a scheduler, a subagent manager, a sandbox manager, a context compiler, a tool registry, an event bus and a way to declare plugin dependencies.</p>
      <div class="diagram">
        <svg viewBox="0 0 720 210" role="img" aria-label="Layers stacked on top of a Pi loop over time, forming a platform layer that resembles dsh.">
          <rect x="220" y="160" width="280" height="36" rx="6" fill="var(--at-blue-soft)" stroke="var(--at-blue)" stroke-width="1.5"/>
          <text x="360" y="183" text-anchor="middle" font-size="12" fill="var(--at-text)">Pi loop</text>
          <g font-size="10.5" text-anchor="middle" fill="var(--at-text)">
            <rect x="160" y="112" width="120" height="32" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="220" y="132">persistence</text>
            <rect x="300" y="112" width="120" height="32" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="360" y="132">scheduler</text>
            <rect x="440" y="112" width="120" height="32" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="500" y="132">subagents</text>
            <rect x="160" y="68" width="120" height="32" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="220" y="88">context compiler</text>
            <rect x="300" y="68" width="120" height="32" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="360" y="88">tool registry</text>
            <rect x="440" y="68" width="120" height="32" rx="5" fill="var(--at-surface)" stroke="var(--at-line-strong)"/><text x="500" y="88">event bus</text>
          </g>
          <rect x="140" y="20" width="440" height="36" rx="6" fill="var(--at-accent-soft)" stroke="var(--at-accent)" stroke-width="1.5"/>
          <text x="360" y="43" text-anchor="middle" font-size="12" fill="var(--at-text)">your platform ≈ a dsh-shaped layer</text>
          <text x="620" y="110" font-size="10.5" fill="var(--at-faint)">+ months</text>
          <path d="M610 180 L610 30" stroke="var(--at-faint)" marker-end="url(#pvd-arrow)"/>
          <defs><marker id="pvd-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--at-faint)"/></marker></defs>
        </svg>
      </div>
      <p>At that point you've built your own dsh on top of Pi, just less deliberately. That's the real question to ask early. It isn't "which is better" but <b>will my system keep one loop, or become a place where many agents run?</b></p>
    </section>

    <section>
      <span class="step-tag green">08 · Side by side</span>
      <h2>The trade, compressed</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th></th><th>Pi</th><th>DeepSeek Harness</th></tr></thead>
          <tbody>
            <tr><td>Core abstraction</td><td>Agent loop</td><td>Plugin / service graph</td></tr>
            <tr><td>Agent loop</td><td>Privileged core</td><td>Replaceable plugin</td></tr>
            <tr><td>Extensions</td><td>Hooks around the core</td><td>The capabilities themselves</td></tr>
            <tr><td>Session</td><td>Conversation tree (JSONL)</td><td>Append-only event log</td></tr>
            <tr><td>Context</td><td>Messages + compaction</td><td>Projection of the log</td></tr>
            <tr><td>Subagents, scheduling</td><td>External, by design</td><td>First-class plugins</td></tr>
            <tr><td>Traceability</td><td>Events + session export</td><td>Everything model-visible is logged</td></tr>
            <tr><td>Complexity</td><td><b>Low</b></td><td>High</td></tr>
            <tr><td>Replaceability</td><td>High</td><td><b>Extremely high</b></td></tr>
            <tr><td>API stability</td><td><b>Stable</b></td><td>Developer preview, breaking changes announced</td></tr>
          </tbody>
        </table>
      </div>
      <p>Pi maximizes <b>power per unit of complexity</b>. dsh maximizes <b>composability × replaceability × traceability</b>, and pays for it with a bigger system.</p>
    </section>

    <section>
      <span class="step-tag amber">09 · The rule</span>
      <h2>Which question are you asking?</h2>
      <div class="rules">
        <div class="rule">
          <div class="q">if you want to customize</div>
          <div class="ask"><em>what</em> the agent can do</div>
          <div class="pick">→ Pi</div>
          <p>One product agent: request, reason, a few tool calls, answer. A context compiler and event projections would be dead weight.</p>
        </div>
        <div class="rule dsh">
          <div class="q">if you want to customize</div>
          <div class="ask"><em>what an agent is</em></div>
          <div class="pick">→ DeepSeek Harness</div>
          <p>A platform where several kinds of agent run for months, with schedules, approvals and specialist subagents. Weigh this against the preview-stage API.</p>
        </div>
      </div>
      <div class="definition">
        <span class="label">Takeaway</span>
        <p>Pi customizes behavior. DeepSeek Harness customizes architecture.</p>
      </div>
    </section>

    <div class="sources">
      <h3>Sources</h3>
      <ul>
        <li><a href="https://github.com/earendil-works/pi/blob/main/packages/coding-agent/README.md" rel="noopener">Pi coding-agent README</a>: philosophy, sessions, compaction, extensions, SDK</li>
        <li><a href="https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md" rel="noopener">DeepSeek Harness architecture</a>: Cordis, plugins, no privileged core</li>
        <li><a href="https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/subsystems/persistence.md" rel="noopener">DeepSeek Harness persistence</a>: append vs flush, torn-tail recovery</li>
      </ul>
    </div>

  </div>
</div>
`;

export const script = `
  const root = document.querySelector('.artifact-scope');
  const sections = root ? root.querySelectorAll('section') : [];
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
`;
