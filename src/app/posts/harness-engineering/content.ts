export const styles = `
  .artifact-scope {
    font-size: 17px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    position: relative;
    z-index: 51;
  }

  .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope .page-wrapper {
    max-width: 820px;
    margin: 0 auto;
    padding: 48px 24px 100px;
  }

  .artifact-scope .hero {
    text-align: center;
    padding: 60px 0 48px;
    position: relative;
  }
  .artifact-scope .hero::before {
    content: '';
    position: absolute;
    top: -80px; left: 50%; transform: translateX(-50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, var(--at-accent-soft) 0%, transparent 70%);
    pointer-events: none;
  }
  .artifact-scope .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--at-accent-soft);
    color: var(--at-accent);
    font-family: var(--at-font-mono);
    font-size: 12px; font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 100px;
    border: 1px solid var(--at-accent-soft);
    margin-bottom: 28px;
  }
  .artifact-scope .hero-badge::before {
    content: '';
    width: 6px; height: 6px;
    background: var(--at-accent);
    border-radius: 50%;
    animation: harness-pulse-dot 2s ease-in-out infinite;
  }
  @keyframes harness-pulse-dot {
    0%,100% { opacity:1; } 50% { opacity:0.3; }
  }
  .artifact-scope .hero h1 {
    font-family: var(--at-font-display);
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--at-text);
    margin-bottom: 20px;
  }
  .artifact-scope .hero h1 span {
    background: linear-gradient(135deg, var(--at-accent), var(--at-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .artifact-scope .hero-sub {
    font-size: 19px;
    color: var(--at-muted);
    max-width: 560px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .artifact-scope .section-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--at-font-mono);
    font-size: 12px; font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .artifact-scope .section-label::before {
    content: '';
    width: 24px; height: 2px;
    border-radius: 1px;
  }
  .artifact-scope .section-label.orange { color: var(--at-accent); }
  .artifact-scope .section-label.orange::before { background: var(--at-accent); }
  .artifact-scope .section-label.teal { color: var(--at-green); }
  .artifact-scope .section-label.teal::before { background: var(--at-green); }
  .artifact-scope .section-label.purple { color: var(--at-violet); }
  .artifact-scope .section-label.purple::before { background: var(--at-violet); }
  .artifact-scope .section-label.coral { color: var(--at-accent); }
  .artifact-scope .section-label.coral::before { background: var(--at-accent); }
  .artifact-scope .section-label.blue { color: var(--at-blue); }
  .artifact-scope .section-label.blue::before { background: var(--at-blue); }
  .artifact-scope .section-label.amber { color: var(--at-amber); }
  .artifact-scope .section-label.amber::before { background: var(--at-amber); }

  .artifact-scope h2 {
    font-family: var(--at-font-display);
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: var(--at-text);
    margin-bottom: 20px;
    line-height: 1.25;
  }

  .artifact-scope section { margin-top: 64px; }

  .artifact-scope p { margin-bottom: 20px; }
  .artifact-scope p + p { margin-top: 0; }

  .artifact-scope strong { color: var(--at-text); font-weight: 600; }

  .artifact-scope .equation-card {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    margin: 32px 0;
    position: relative;
    overflow: hidden;
  }
  .artifact-scope .equation-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--at-accent), var(--at-green), var(--at-violet));
  }
  .artifact-scope .equation {
    font-family: var(--at-font-display);
    font-size: 36px;
    font-weight: 700;
    color: var(--at-text);
    letter-spacing: -0.01em;
  }
  .artifact-scope .equation .eq-model { color: var(--at-violet); }
  .artifact-scope .equation .eq-plus { color: var(--at-faint); margin: 0 12px; font-weight: 300; }
  .artifact-scope .equation .eq-harness { color: var(--at-green); }
  .artifact-scope .equation-caption {
    font-size: 14px;
    color: var(--at-muted);
    margin-top: 16px;
    font-style: italic;
    font-family: var(--at-font-display);
  }

  .artifact-scope .diagram-card {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 16px;
    padding: 32px 24px;
    margin: 32px 0;
    overflow-x: auto;
  }
  .artifact-scope .diagram-card svg { display: block; margin: 0 auto; }

  .artifact-scope .timeline {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin: 32px 0;
  }
  @media (max-width: 640px) {
    .artifact-scope .timeline { grid-template-columns: 1fr; }
  }
  .artifact-scope .timeline-item {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 14px;
    padding: 24px;
    position: relative;
    transition: border-color 0.25s;
  }
  .artifact-scope .timeline-item:hover { border-color: var(--at-line-strong); }
  .artifact-scope .timeline-item::before {
    content: '';
    position: absolute;
    top: 0; left: 24px; right: 24px;
    height: 2px;
    border-radius: 1px;
  }
  .artifact-scope .timeline-item.era-1::before { background: var(--at-faint); }
  .artifact-scope .timeline-item.era-2::before { background: var(--at-violet); }
  .artifact-scope .timeline-item.era-3::before { background: var(--at-accent); }
  .artifact-scope .timeline-era {
    font-family: var(--at-font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .artifact-scope .era-1 .timeline-era { color: var(--at-faint); }
  .artifact-scope .era-2 .timeline-era { color: var(--at-violet); }
  .artifact-scope .era-3 .timeline-era { color: var(--at-accent); }
  .artifact-scope .timeline-title {
    font-family: var(--at-font-display);
    font-weight: 500;
    font-size: 20px;
    color: var(--at-text);
    margin-bottom: 4px;
  }
  .artifact-scope .timeline-verb {
    font-size: 14px;
    color: var(--at-muted);
    font-style: italic;
    font-family: var(--at-font-display);
    margin-bottom: 10px;
  }
  .artifact-scope .timeline-desc {
    font-size: 14px;
    color: var(--at-muted);
    line-height: 1.55;
  }

  .artifact-scope .split-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 32px 0;
  }
  @media (max-width: 640px) {
    .artifact-scope .split-grid { grid-template-columns: 1fr; }
  }
  .artifact-scope .split-card {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 14px;
    padding: 28px;
    position: relative;
  }
  .artifact-scope .split-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 3px;
    border-radius: 3px 0 0 3px;
  }
  .artifact-scope .split-card.guide::before { background: var(--at-green); }
  .artifact-scope .split-card.sensor::before { background: var(--at-violet); }
  .artifact-scope .split-card-title {
    font-family: var(--at-font-display);
    font-weight: 500;
    font-size: 20px;
    color: var(--at-text);
    margin-bottom: 4px;
  }
  .artifact-scope .split-card-sub {
    font-family: var(--at-font-mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 16px;
  }
  .artifact-scope .guide .split-card-sub { color: var(--at-green); }
  .artifact-scope .sensor .split-card-sub { color: var(--at-violet); }
  .artifact-scope .split-card ul { list-style: none; padding: 0; }
  .artifact-scope .split-card li {
    font-size: 15px;
    color: var(--at-muted);
    padding: 6px 0 6px 20px;
    position: relative;
    line-height: 1.5;
  }
  .artifact-scope .split-card li::before {
    content: '';
    position: absolute;
    left: 0; top: 14px;
    width: 8px; height: 8px;
    border-radius: 50%;
  }
  .artifact-scope .guide li::before { background: var(--at-green-soft); border: 1.5px solid var(--at-green); }
  .artifact-scope .sensor li::before { background: var(--at-violet-soft); border: 1.5px solid var(--at-violet); }

  .artifact-scope .car-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
  }
  @media (max-width: 640px) {
    .artifact-scope .car-grid { grid-template-columns: 1fr; }
  }
  .artifact-scope .car-card {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 14px;
    padding: 24px;
    text-align: center;
  }
  .artifact-scope .car-letter {
    font-family: var(--at-font-display);
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 4px;
  }
  .artifact-scope .car-card:nth-child(1) .car-letter { color: var(--at-green); }
  .artifact-scope .car-card:nth-child(2) .car-letter { color: var(--at-violet); }
  .artifact-scope .car-card:nth-child(3) .car-letter { color: var(--at-accent); }
  .artifact-scope .car-name {
    font-family: var(--at-font-display);
    font-size: 18px;
    font-weight: 500;
    color: var(--at-text);
    margin-bottom: 4px;
  }
  .artifact-scope .car-desc {
    font-size: 13px;
    color: var(--at-muted);
    line-height: 1.5;
  }
  .artifact-scope .car-items {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
  }
  .artifact-scope .car-tag {
    font-family: var(--at-font-mono);
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid var(--at-line);
    color: var(--at-muted);
    background: var(--at-inset);
  }

  .artifact-scope .crosscut {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 14px;
    padding: 24px 28px;
    margin: 16px 0;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .artifact-scope .crosscut-icon {
    flex-shrink: 0;
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .artifact-scope .crosscut.context .crosscut-icon { background: var(--at-amber-soft); color: var(--at-amber); }
  .artifact-scope .crosscut.state .crosscut-icon { background: var(--at-blue-soft); color: var(--at-blue); }
  .artifact-scope .crosscut-title {
    font-family: var(--at-font-display);
    font-weight: 500;
    font-size: 17px;
    color: var(--at-text);
    margin-bottom: 2px;
  }
  .artifact-scope .crosscut-body {
    font-size: 14px;
    color: var(--at-muted);
    line-height: 1.55;
  }
  .artifact-scope .crosscut-tags {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin-top: 10px;
  }
  .artifact-scope .crosscut-tags span {
    font-family: var(--at-font-mono);
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 5px;
    border: 1px solid var(--at-line);
    color: var(--at-muted);
  }

  .artifact-scope .callout {
    background: var(--at-surface);
    border-left: 3px solid var(--at-accent);
    border-radius: 0 12px 12px 0;
    padding: 20px 24px;
    margin: 28px 0;
    font-size: 16px;
    color: var(--at-muted);
    line-height: 1.65;
    font-style: italic;
    font-family: var(--at-font-display);
  }
  .artifact-scope .callout-source {
    font-style: normal;
    font-size: 12px;
    font-family: var(--at-font-mono);
    color: var(--at-faint);
    margin-top: 10px;
  }

  .artifact-scope .stat-row {
    display: flex;
    gap: 16px;
    margin: 28px 0;
    flex-wrap: wrap;
  }
  .artifact-scope .stat-pill {
    flex: 1;
    min-width: 180px;
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
  }
  .artifact-scope .stat-number {
    font-family: var(--at-font-display);
    font-size: 32px;
    font-weight: 700;
    color: var(--at-accent);
    line-height: 1;
  }
  .artifact-scope .stat-label {
    font-size: 13px;
    color: var(--at-muted);
    margin-top: 6px;
  }

  .artifact-scope .codex-flow {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 16px;
    padding: 32px 28px;
    margin: 32px 0;
  }
  .artifact-scope .codex-flow-title {
    font-family: var(--at-font-display);
    font-weight: 500;
    font-size: 18px;
    color: var(--at-text);
    margin-bottom: 20px;
    text-align: center;
  }
  .artifact-scope .codex-steps {
    display: flex;
    align-items: stretch;
    gap: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  .artifact-scope .codex-step {
    flex: 1;
    min-width: 140px;
    max-width: 200px;
    text-align: center;
    padding: 16px 12px;
    position: relative;
  }
  .artifact-scope .codex-step:not(:last-child)::after {
    content: '\\2192';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--at-faint);
    font-size: 20px;
  }
  .artifact-scope .codex-step-num {
    width: 32px; height: 32px;
    border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--at-font-mono);
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .artifact-scope .codex-step:nth-child(1) .codex-step-num { background: var(--at-green-soft); color: var(--at-green); border: 1px solid var(--at-green-soft); }
  .artifact-scope .codex-step:nth-child(2) .codex-step-num { background: var(--at-violet-soft); color: var(--at-violet); border: 1px solid var(--at-violet-soft); }
  .artifact-scope .codex-step:nth-child(3) .codex-step-num { background: var(--at-amber-soft); color: var(--at-amber); border: 1px solid var(--at-amber-soft); }
  .artifact-scope .codex-step:nth-child(4) .codex-step-num { background: var(--at-accent-soft); color: var(--at-accent); border: 1px solid var(--at-accent-soft); }
  .artifact-scope .codex-step-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--at-text);
    margin-bottom: 4px;
  }
  .artifact-scope .codex-step-desc {
    font-size: 12px;
    color: var(--at-muted);
    line-height: 1.45;
  }

  .artifact-scope .rot-visual {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 16px;
    padding: 28px;
    margin: 32px 0;
  }
  .artifact-scope .rot-bar-group { margin-top: 16px; }
  .artifact-scope .rot-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }
  .artifact-scope .rot-bar-label {
    font-family: var(--at-font-mono);
    font-size: 12px;
    color: var(--at-muted);
    width: 100px;
    text-align: right;
    flex-shrink: 0;
  }
  .artifact-scope .rot-bar-track {
    flex: 1;
    height: 24px;
    background: var(--at-inset);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }
  .artifact-scope .rot-bar-fill {
    height: 100%;
    border-radius: 6px;
    transition: width 0.6s ease;
  }
  .artifact-scope .rot-bar-value {
    font-family: var(--at-font-mono);
    font-size: 12px;
    color: var(--at-muted);
    width: 44px;
    flex-shrink: 0;
  }

  .artifact-scope .insight-box {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 14px;
    padding: 24px 28px;
    margin: 24px 0;
    position: relative;
    overflow: hidden;
  }
  .artifact-scope .insight-box::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--at-green), var(--at-blue));
  }
  .artifact-scope .insight-box-label {
    font-family: var(--at-font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--at-green);
    margin-bottom: 8px;
  }
  .artifact-scope .insight-box p {
    font-size: 16px;
    color: var(--at-text);
    margin-bottom: 0;
  }

  .artifact-scope code {
    font-family: var(--at-font-mono);
    font-size: 0.88em;
    background: var(--at-inset);
    padding: 2px 7px;
    border-radius: 5px;
    color: var(--at-green);
    border: 1px solid var(--at-line);
  }

  .artifact-scope .footer {
    margin-top: 80px;
    padding-top: 32px;
    border-top: 1px solid var(--at-line);
    text-align: center;
  }
  .artifact-scope .footer-text {
    font-size: 13px;
    color: var(--at-faint);
    font-family: var(--at-font-mono);
  }

  .artifact-scope .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .artifact-scope .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .artifact-scope .comparison-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 24px 0;
    font-size: 14px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--at-line);
  }
  .artifact-scope .comparison-table th {
    background: var(--at-inset);
    color: var(--at-text);
    font-family: var(--at-font-display);
    font-weight: 500;
    font-size: 14px;
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid var(--at-line);
  }
  .artifact-scope .comparison-table td {
    background: var(--at-surface);
    color: var(--at-muted);
    padding: 12px 16px;
    border-bottom: 1px solid var(--at-line);
    line-height: 1.45;
  }
  .artifact-scope .comparison-table tr:last-child td { border-bottom: none; }
`;

export const html = `
<div class="page-wrapper">

  <header class="hero reveal">
    <div class="hero-badge">Deep Dive — April 2026</div>
    <h1>What is <span>Harness Engineering</span> for AI Agents?</h1>
    <p class="hero-sub">The model is the horse. The harness is the reins, the saddle, and the road. Here's the new discipline that makes AI agents actually work in production.</p>
  </header>

  <section class="reveal">
    <div class="section-label orange">The core idea</div>
    <h2>One equation to rule them all</h2>
    <p>Every conversation about harness engineering starts with the same formula. It's deceptively simple — and it reshapes how you think about building agents:</p>

    <div class="equation-card">
      <div class="equation">
        Agent <span class="eq-plus">=</span> <span class="eq-model">Model</span> <span class="eq-plus">+</span> <span class="eq-harness">Harness</span>
      </div>
      <div class="equation-caption">"If you're not the model, you're the harness." — LangChain</div>
    </div>

    <p>A <strong>harness</strong> is every piece of code, configuration, and execution logic that isn't the model itself. A raw LLM is not an agent. It becomes one when a harness gives it tools, state, feedback loops, and enforceable constraints.</p>
    <p>The metaphor borrows from horsemanship: the AI model is the horse — powerful and fast, but without reins and a saddle, it goes wherever it pleases. The harness channels that power productively. The engineer is the rider who provides direction.</p>

    <div class="stat-row">
      <div class="stat-pill">
        <div class="stat-number">52.8%</div>
        <div class="stat-label">LangChain agent before<br>harness optimization</div>
      </div>
      <div class="stat-pill">
        <div class="stat-number" style="color:var(--at-green)">66.5%</div>
        <div class="stat-label">Same agent, same model<br>new harness only</div>
      </div>
      <div class="stat-pill">
        <div class="stat-number" style="color:var(--at-violet)">Top 5</div>
        <div class="stat-label">Terminal Bench 2.0<br>jumped from #30</div>
      </div>
    </div>

    <p>The uncomfortable truth: <strong>the model matters less than the system around it.</strong> LangChain proved this by improving their coding agent from rank #30 to #5 on Terminal Bench 2.0 by changing nothing about the model — only the harness.</p>
  </section>

  <section class="reveal">
    <div class="section-label purple">The evolution</div>
    <h2>Three eras of AI interaction</h2>
    <p>Harness engineering didn't appear overnight. It's the third generation of how we shape AI behavior — each era building on and encompassing the last:</p>

    <div class="timeline">
      <div class="timeline-item era-1">
        <div class="timeline-era">2022 — 2023</div>
        <div class="timeline-title">Prompt engineering</div>
        <div class="timeline-verb">"What to ask"</div>
        <div class="timeline-desc">Crafting the right input words to get the right output. Single-call, single-response. The skill that launched a thousand tutorials.</div>
      </div>
      <div class="timeline-item era-2">
        <div class="timeline-era">2024 — 2025</div>
        <div class="timeline-title">Context engineering</div>
        <div class="timeline-verb">"What to send"</div>
        <div class="timeline-desc">Managing the context window: what info to include, when to inject RAG results, how to structure multi-turn interactions for optimal reasoning.</div>
      </div>
      <div class="timeline-item era-3">
        <div class="timeline-era">2026+</div>
        <div class="timeline-title">Harness engineering</div>
        <div class="timeline-verb">"How it all operates"</div>
        <div class="timeline-desc">The full operating system: tools, permissions, state, feedback loops, guardrails, observability, retries, and multi-session coordination.</div>
      </div>
    </div>

    <p>The key relationship: <strong>context engineering lives inside harness engineering</strong> — it's a critical component, but not the whole picture. If prompt engineering is the command "turn right," harness engineering is the road, the guardrails, the signs, and the traffic system that allows ten vehicles to navigate safely at once.</p>
  </section>

  <section class="reveal">
    <div class="section-label teal">Control theory</div>
    <h2>Guides vs. Sensors</h2>
    <p>Martin Fowler's key framework from Thoughtworks splits harness controls into two families — borrowed directly from control systems engineering:</p>

    <div class="split-grid">
      <div class="split-card guide">
        <div class="split-card-title">Guides</div>
        <div class="split-card-sub">Feedforward controls</div>
        <p style="font-size:14px;color:var(--at-muted);margin-bottom:14px">Steer the agent <strong>before</strong> it acts. Increase the probability of good results on the first attempt.</p>
        <ul>
          <li><strong>Computational:</strong> <code>AGENTS.md</code>, architecture rules, dependency constraints</li>
          <li><strong>Inferential:</strong> AI code review, LLM-as-judge pre-checks</li>
        </ul>
      </div>
      <div class="split-card sensor">
        <div class="split-card-title">Sensors</div>
        <div class="split-card-sub">Feedback controls</div>
        <p style="font-size:14px;color:var(--at-muted);margin-bottom:14px">Observe <strong>after</strong> the agent acts. Enable self-correction before issues reach human eyes.</p>
        <ul>
          <li><strong>Computational:</strong> Linters, type checkers, test suites, CI validation</li>
          <li><strong>Inferential:</strong> AI evaluators, semantic diff checks</li>
        </ul>
      </div>
    </div>

    <div class="insight-box">
      <div class="insight-box-label">Key insight</div>
      <p>You need <strong>both</strong>. Feedback-only gives you an agent that repeats the same mistakes. Feedforward-only gives you encoded rules with no way to verify they worked. The magic is in the closed loop — and the human iterates on the harness whenever issues recur.</p>
    </div>

    <p>Each control type comes in two flavors: <strong>computational</strong> (deterministic, fast, cheap — runs on CPU) and <strong>inferential</strong> (LLM-powered, non-deterministic, expensive — runs on GPU). Computational sensors like linters are cheap enough to run on every change. Inferential sensors like AI code reviewers are reserved for higher-stakes checkpoints.</p>
  </section>

  <section class="reveal">
    <div class="section-label coral">Architecture</div>
    <h2>Inside the harness: the CAR framework</h2>
    <p>What actually goes into a production harness? The CAR framework (Control, Agency, Runtime) provides a clean decomposition:</p>

    <div class="car-grid">
      <div class="car-card">
        <div class="car-letter">C</div>
        <div class="car-name">Control</div>
        <div class="car-desc">Constraints + specifications. What the agent is <em>allowed</em> to do.</div>
        <div class="car-items">
          <span class="car-tag">AGENTS.md</span>
          <span class="car-tag">Arch rules</span>
          <span class="car-tag">Linters</span>
          <span class="car-tag">CI checks</span>
        </div>
      </div>
      <div class="car-card">
        <div class="car-letter">A</div>
        <div class="car-name">Agency</div>
        <div class="car-desc">Tools + interfaces. What the agent <em>can reach</em>.</div>
        <div class="car-items">
          <span class="car-tag">MCP servers</span>
          <span class="car-tag">Sub-agents</span>
          <span class="car-tag">File system</span>
          <span class="car-tag">APIs</span>
        </div>
      </div>
      <div class="car-card">
        <div class="car-letter">R</div>
        <div class="car-name">Runtime</div>
        <div class="car-desc">Execution + recovery. How work <em>unfolds over time</em>.</div>
        <div class="car-items">
          <span class="car-tag">Hooks</span>
          <span class="car-tag">Retries</span>
          <span class="car-tag">Rollback</span>
          <span class="car-tag">Observability</span>
        </div>
      </div>
    </div>

    <p>Beneath these three pillars sit two critical cross-cutting concerns:</p>

    <div class="crosscut context">
      <div class="crosscut-icon">⚡</div>
      <div>
        <div class="crosscut-title">Context management — the scarce resource</div>
        <div class="crosscut-body">Deciding what information to include or exclude at each model call. The harness manages context isolation (keeping subtasks separate), context reduction (compressing irrelevant info), and context retrieval (injecting fresh docs at the right time).</div>
        <div class="crosscut-tags">
          <span>Compaction</span>
          <span>Context isolation</span>
          <span>Progressive disclosure</span>
          <span>RAG injection</span>
        </div>
      </div>
    </div>

    <div class="crosscut state">
      <div class="crosscut-icon">💾</div>
      <div>
        <div class="crosscut-title">State + memory — bridging the amnesia gap</div>
        <div class="crosscut-body">Each new context window starts with zero memory. The harness externalizes memory into artifacts: progress logs, feature checklists, git commits, and structured documentation that persist across sessions.</div>
        <div class="crosscut-tags">
          <span>Progress logs</span>
          <span>Feature checklists</span>
          <span>Git commits</span>
          <span>docs/ directory</span>
        </div>
      </div>
    </div>
  </section>

  <section class="reveal">
    <div class="section-label amber">Case study</div>
    <h2>How OpenAI's Codex built 1M+ lines with zero human code</h2>
    <p>OpenAI's Codex team built a production application entirely through agent-generated code. No human typed a single line. The engineers didn't write code — they designed the <em>system</em> that let AI write code reliably. Here's their harness pattern:</p>

    <div class="codex-flow">
      <div class="codex-flow-title">The Codex harness loop</div>
      <div class="codex-steps">
        <div class="codex-step">
          <div class="codex-step-num">1</div>
          <div class="codex-step-title">Human prompts</div>
          <div class="codex-step-desc">Engineer describes a task. That's the only human input.</div>
        </div>
        <div class="codex-step">
          <div class="codex-step-num">2</div>
          <div class="codex-step-title">Agent executes</div>
          <div class="codex-step-desc">Codex reads repo context, writes code, opens a PR.</div>
        </div>
        <div class="codex-step">
          <div class="codex-step-num">3</div>
          <div class="codex-step-title">Harness validates</div>
          <div class="codex-step-desc">Linters, CI, agent reviewers check the output.</div>
        </div>
        <div class="codex-step">
          <div class="codex-step-num">4</div>
          <div class="codex-step-desc">Iterate until all reviewers are satisfied, then merge.</div>
          <div class="codex-step-title">Self-correct</div>
        </div>
      </div>
    </div>

    <p>A critical design decision: <code>AGENTS.md</code> is the <strong>table of contents, not the encyclopedia</strong>. It stays around 100 lines and points to deeper sources of truth in a structured <code>docs/</code> directory. Why?</p>

    <table class="comparison-table">
      <thead><tr><th>Problem with monolithic instructions</th><th>Codex solution</th></tr></thead>
      <tbody>
        <tr><td>Too much context crowds out the actual task</td><td>Short AGENTS.md + deep docs/ directory</td></tr>
        <tr><td>Stale rules become "attractive nuisances"</td><td>Doc-gardening agent scans for staleness</td></tr>
        <tr><td>Hard to verify coverage or freshness</td><td>Linters + CI validate doc structure</td></tr>
        <tr><td>Agent pattern-matches locally, not intentionally</td><td>"Golden principles" enforce consistency</td></tr>
      </tbody>
    </table>

    <div class="callout">
      "From the agent's perspective, anything it can't access in-context doesn't exist. Knowledge that lives in Google Docs, chat threads, or people's heads is invisible to the system."
      <div class="callout-source">— OpenAI Codex team</div>
    </div>
  </section>

  <section class="reveal">
    <div class="section-label coral">The silent killer</div>
    <h2>Context rot: why agents get dumber over time</h2>
    <p>As the context window fills with tool outputs, past conversations, and intermediate results, models become measurably worse at reasoning. This is <strong>context rot</strong> — and it's the invisible enemy of every long-running agent.</p>

    <div class="rot-visual">
      <div style="font-size:14px;color:var(--at-muted);margin-bottom:4px;font-family:var(--at-font-display);font-weight:500;color:var(--at-text);">Agent reasoning quality vs. context usage</div>
      <div class="rot-bar-group">
        <div class="rot-bar-row">
          <div class="rot-bar-label">10% used</div>
          <div class="rot-bar-track"><div class="rot-bar-fill" style="width:95%;background:linear-gradient(90deg,var(--at-green),var(--at-green))"></div></div>
          <div class="rot-bar-value" style="color:var(--at-green)">95%</div>
        </div>
        <div class="rot-bar-row">
          <div class="rot-bar-label">40% used</div>
          <div class="rot-bar-track"><div class="rot-bar-fill" style="width:78%;background:linear-gradient(90deg,var(--at-green),var(--at-amber))"></div></div>
          <div class="rot-bar-value" style="color:var(--at-amber)">78%</div>
        </div>
        <div class="rot-bar-row">
          <div class="rot-bar-label">70% used</div>
          <div class="rot-bar-track"><div class="rot-bar-fill" style="width:52%;background:linear-gradient(90deg,var(--at-amber),var(--at-accent))"></div></div>
          <div class="rot-bar-value" style="color:var(--at-accent)">52%</div>
        </div>
        <div class="rot-bar-row">
          <div class="rot-bar-label">95% used</div>
          <div class="rot-bar-track"><div class="rot-bar-fill" style="width:28%;background:linear-gradient(90deg,var(--at-accent),var(--at-accent))"></div></div>
          <div class="rot-bar-value" style="color:var(--at-accent)">28%</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--at-faint);margin-top:12px;text-align:center;font-style:italic;font-family:var(--at-font-display)">Illustrative — quality degrades as irrelevant context accumulates</div>
    </div>

    <p>A cautionary tale: one team had their agent run the full test suite after every change. 4,000 lines of passing test output flooded the context window. The agent lost track of its actual task and started hallucinating about test files it had just read.</p>

    <p>The harness engineering fix: <strong>success is silent, only failures produce verbose output.</strong> Sub-agents act as "context firewalls" — they run discrete tasks in isolated context windows, and only the clean summary returns to the parent agent. The intermediate noise never accumulates.</p>
  </section>

  <section class="reveal">
    <div class="section-label blue">How it fits</div>
    <h2>Harness engineering vs. related disciplines</h2>

    <table class="comparison-table">
      <thead>
        <tr><th>Discipline</th><th>Focus</th><th>Relationship to harness eng.</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Prompt engineering</strong></td>
          <td>Crafting effective inputs for a single model call</td>
          <td>One component <em>within</em> the harness</td>
        </tr>
        <tr>
          <td><strong>Context engineering</strong></td>
          <td>Managing what info the model sees</td>
          <td>A critical layer <em>within</em> the harness</td>
        </tr>
        <tr>
          <td><strong>MLOps</strong></td>
          <td>Model lifecycle: train, deploy, monitor, retrain</td>
          <td>Overlap in observability; MLOps = model performance over time, harness eng. = agent behavior in real-time</td>
        </tr>
        <tr>
          <td><strong>DevOps</strong></td>
          <td>Software delivery: CI/CD, IaC, deployment</td>
          <td>Provides the infrastructure harnesses run on; harness eng. adds agent-specific orchestration on top</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="reveal">
    <div class="section-label orange">Takeaways</div>
    <h2>The bottom line</h2>
    <p>Once the model is capable enough, the bottleneck stops being "can it generate code?" and becomes "can I make it behave reliably inside a real system?" That's the entire thesis of harness engineering — and it's where the real engineering leverage lives in 2026.</p>

    <div class="insight-box">
      <div class="insight-box-label">The harness engineering mindset</div>
      <p>Every time the agent makes a mistake, don't just hope it does better next time. <strong>Engineer the environment so it can't make that specific mistake the same way again.</strong> That's the feedback loop that compounds — and it's what separates a demo from a production system.</p>
    </div>

    <p>As models get more capable, some harness responsibilities will get absorbed into the model itself. Models will get better at planning, self-verification, and long-horizon coherence natively. But just as prompt engineering continues to be valuable today, harness engineering will continue to be the lever that turns raw model intelligence into reliable, useful work.</p>
  </section>

  <footer class="footer">
    <div class="footer-text">Notes on harness engineering · April 2026</div>
  </footer>

</div>
`;

export const script = `
var reveals = document.querySelectorAll('.artifact-scope .reveal');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(function(el) { observer.observe(el); });
`;
