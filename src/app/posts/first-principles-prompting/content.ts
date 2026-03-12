export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&display=swap');

  .artifact-scope {
    --bg: #0f1117;
    --surface: #1a1d27;
    --surface2: #222636;
    --border: #2e3347;
    --accent: #f59e0b;
    --accent2: #3b82f6;
    --accent3: #10b981;
    --red: #ef5350;
    --text: #e2e8f0;
    --muted: #8892a4;
    --tag-bg: #1e2a3a;
    --purple: #a78bfa;
  }

  .artifact-scope, .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.7;
    font-size: 15px;
  }

  .artifact-scope .topbar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 12px 0;
  }
  .artifact-scope .topbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 820px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .artifact-scope .logo {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.05em;
  }
  .artifact-scope .logo a {
    color: inherit;
    text-decoration: none;
  }
  .artifact-scope .logo a:hover {
    opacity: 0.8;
  }
  .artifact-scope .meta-tag {
    background: var(--tag-bg);
    border: 1px solid var(--border);
    color: var(--accent2);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 3px;
    letter-spacing: 0.08em;
  }

  .artifact-scope .hero {
    max-width: 820px;
    margin: 0 auto;
    padding: 56px 24px 0;
  }

  .artifact-scope .issue-line {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }
  .artifact-scope .issue-line::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background: var(--accent);
  }

  .artifact-scope h1 {
    font-family: 'Fraunces', serif;
    font-size: clamp(28px, 5vw, 36px);
    font-weight: 300;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }
  .artifact-scope h1 em {
    color: var(--accent);
    font-style: italic;
  }

  .artifact-scope .subtitle {
    font-size: 17px;
    color: var(--muted);
    font-weight: 300;
    max-width: 640px;
    line-height: 1.6;
    margin-bottom: 28px;
    border-left: 3px solid var(--accent);
    padding-left: 16px;
  }

  .artifact-scope .author-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 0 40px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .artifact-scope .avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), #e06b00);
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 14px; color: #000;
    flex-shrink: 0;
  }
  .artifact-scope .author-info { font-size: 13px; }
  .artifact-scope .author-name { color: var(--text); font-weight: 500; }
  .artifact-scope .author-date { color: var(--muted); }
  .artifact-scope .read-time {
    margin-left: auto;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    background: var(--surface2);
    padding: 4px 10px;
    border-radius: 3px;
    border: 1px solid var(--border);
  }

  .artifact-scope .content {
    max-width: 820px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  .artifact-scope .callout {
    background: var(--surface);
    border-left: 3px solid var(--accent);
    padding: 20px 24px;
    border-radius: 0 6px 6px 0;
    margin: 36px 0;
  }
  .artifact-scope .callout-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .artifact-scope .callout p { font-size: 14px; color: var(--text); margin-bottom: 0; }
  .artifact-scope .callout.insight { border-left-color: var(--accent2); }
  .artifact-scope .callout.insight .callout-title { color: var(--accent2); }

  .artifact-scope .diagram-box {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 28px;
    margin: 36px 0;
    position: relative;
    overflow: hidden;
  }
  .artifact-scope .diagram-box::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3));
  }
  .artifact-scope .diagram-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .artifact-scope .diagram-title::before {
    content: '\\25B6';
    color: var(--accent2);
    font-size: 10px;
  }

  .artifact-scope .framework-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .artifact-scope .framework-cell {
    background: var(--surface2);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .artifact-scope .cell-phase {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .artifact-scope .cell-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }
  .artifact-scope .cell-desc {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.5;
  }

  .artifact-scope .section-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--accent);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin: 52px 0 8px;
  }
  .artifact-scope h2 {
    font-family: 'Fraunces', serif;
    font-size: clamp(22px, 3.5vw, 30px);
    font-weight: 300;
    color: #fff;
    margin-bottom: 16px;
    line-height: 1.25;
  }
  .artifact-scope p {
    color: var(--muted);
    margin-bottom: 14px;
    font-size: 15px;
  }
  .artifact-scope strong { color: var(--text); font-weight: 600; }
  .artifact-scope em { color: var(--text); }

  .artifact-scope .phase-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 40px 0 20px;
  }
  .artifact-scope .phase-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }
  .artifact-scope .phase-icon-deconstruct { background: rgba(245,158,11,0.15); }
  .artifact-scope .phase-icon-question { background: rgba(59,130,246,0.15); }
  .artifact-scope .phase-icon-rebuild { background: rgba(16,185,129,0.15); }
  .artifact-scope .phase-icon-stress { background: rgba(239,68,68,0.15); }
  .artifact-scope .phase-icon-scale { background: rgba(167,139,250,0.15); }

  .artifact-scope .phase-meta { display: flex; flex-direction: column; gap: 3px; }
  .artifact-scope .phase-name {
    font-weight: 700;
    font-size: 17px;
    color: #fff;
  }
  .artifact-scope .phase-desc {
    font-size: 12px;
    color: var(--muted);
    font-family: 'IBM Plex Mono', monospace;
  }

  .artifact-scope .prompt-list { display: flex; flex-direction: column; gap: 20px; margin: 28px 0; }

  .artifact-scope .prompt-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .artifact-scope .prompt-card:hover { border-color: var(--accent2); }

  .artifact-scope .prompt-header {
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid var(--border);
  }
  .artifact-scope .prompt-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    font-weight: 600;
    color: var(--bg);
    background: var(--accent2);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    min-width: 44px;
    justify-content: center;
  }
  .artifact-scope .prompt-category {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-right: 1px solid var(--border);
    background: var(--surface2);
  }
  .artifact-scope .prompt-title-bar {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    flex: 1;
  }

  .artifact-scope .prompt-body { padding: 16px 18px; }

  .artifact-scope .prompt-insight {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 14px;
    font-style: italic;
  }

  .artifact-scope .prompt-block {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 14px 16px;
    margin-bottom: 12px;
  }
  .artifact-scope .prompt-block-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .artifact-scope .prompt-text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    color: #c9d1d9;
    line-height: 1.6;
  }
  .artifact-scope .prompt-example {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--accent3);
    line-height: 1.6;
  }

  .artifact-scope .output-note {
    font-size: 12px;
    color: var(--muted);
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 10px;
  }
  .artifact-scope .output-note::before { content: '\\2192'; color: var(--accent2); flex-shrink: 0; }

  .artifact-scope .badge {
    display: inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .artifact-scope .badge-deconstruct { background: rgba(245,158,11,0.15); color: var(--accent); }
  .artifact-scope .badge-question { background: rgba(59,130,246,0.15); color: var(--accent2); }
  .artifact-scope .badge-rebuild { background: rgba(16,185,129,0.15); color: var(--accent3); }
  .artifact-scope .badge-stress { background: rgba(239,68,68,0.15); color: #f87171; }
  .artifact-scope .badge-scale { background: rgba(167,139,250,0.15); color: var(--purple); }

  .artifact-scope .master-prompt {
    background: var(--surface);
    border: 1px solid var(--accent);
    border-radius: 8px;
    padding: 28px;
    margin: 40px 0;
  }
  .artifact-scope .master-prompt .prompt-block-label { margin-bottom: 14px; font-size: 11px; }
  .artifact-scope .master-prompt .prompt-text {
    font-size: 14px;
    line-height: 1.8;
    color: var(--text);
  }

  .artifact-scope .summary-table {
    width: 100%;
    border-collapse: collapse;
    margin: 28px 0;
    font-size: 13px;
  }
  .artifact-scope .summary-table th {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-align: left;
    padding: 10px 14px;
    border-bottom: 2px solid var(--border);
    background: var(--surface);
  }
  .artifact-scope .summary-table td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    color: var(--muted);
    vertical-align: top;
  }
  .artifact-scope .summary-table td:first-child { color: var(--text); font-weight: 500; }
  .artifact-scope .summary-table tr:hover td { background: var(--surface2); }

  .artifact-scope .footnote {
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    font-size: 12px;
    color: var(--muted);
    font-family: 'IBM Plex Mono', monospace;
  }

  @media (max-width: 600px) {
    .artifact-scope h1 { font-size: 26px; }
    .artifact-scope .framework-grid { grid-template-columns: 1fr; }
    .artifact-scope .prompt-category { display: none; }
  }
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">AI PROMPTING</span>
  </div>
</div>

<div class="hero">
  <div class="issue-line">AI Prompting</div>
  <h1>First Principles Prompting:<br><em>15 Prompts</em> That Rebuild Your Thinking</h1>
  <p class="subtitle">Elon Musk doesn't brainstorm. He decomposes. Here's how to borrow that mental model and run it through an LLM &mdash; turning vague problems into structured solutions.</p>
  <div class="author-row">
    <div class="avatar">H</div>
    <div class="author-info">
      <div class="author-name">Harry Truong</div>
      <div class="author-date">March 2026</div>
    </div>
    <div class="read-time">8 min read</div>
  </div>
</div>

<div class="content">

  <div class="callout">
    <div class="callout-title">TL;DR</div>
    <p>First principles thinking strips a problem down to its irreducible truths, then rebuilds from scratch. These 15 prompts apply that framework to AI &mdash; letting you use Claude/GPT as a reasoning engine, not just an answer machine.</p>
  </div>

  <!-- FRAMEWORK OVERVIEW DIAGRAM -->
  <div class="diagram-box">
    <div class="diagram-title">The 5-Phase First Principles Framework</div>
    <div class="framework-grid">
      <div class="framework-cell">
        <span class="cell-phase">Phase 1</span>
        <span class="cell-label">&#128300; Deconstruct</span>
        <span class="cell-desc">Strip to physics. Identify real constraints vs. assumed ones.</span>
      </div>
      <div class="framework-cell">
        <span class="cell-phase">Phase 2</span>
        <span class="cell-label">&#10067; Question</span>
        <span class="cell-desc">Challenge assumptions. Remove invisible cages.</span>
      </div>
      <div class="framework-cell">
        <span class="cell-phase">Phase 3</span>
        <span class="cell-label">&#127959;&#65039; Rebuild</span>
        <span class="cell-desc">Design from truth up. Ignore industry norms.</span>
      </div>
      <div class="framework-cell">
        <span class="cell-phase">Phase 4</span>
        <span class="cell-label">&#9888;&#65039; Stress Test</span>
        <span class="cell-desc">Simulate failure modes. Find the real bottlenecks.</span>
      </div>
      <div class="framework-cell">
        <span class="cell-phase">Phase 5</span>
        <span class="cell-label">&#128200; Scale</span>
        <span class="cell-desc">Force 10x thinking. Find leverage points early.</span>
      </div>
    </div>
  </div>

  <!-- PHASE 1 -->
  <div class="phase-header">
    <div class="phase-icon phase-icon-deconstruct">&#128300;</div>
    <div class="phase-meta">
      <span class="phase-name">Phase 1 &mdash; Deconstruct</span>
      <span class="phase-desc">Strip the problem to objective reality</span>
    </div>
  </div>

  <div class="prompt-list">
    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">01</span>
        <span class="prompt-category">Physics</span>
        <span class="prompt-title-bar">What are the physics of this problem?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk doesn't brainstorm &mdash; he audits. Before solving, he identifies what's <em>actually</em> true vs. what's assumed to be true.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What are the physics of [your problem]?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I'm struggling to grow my newsletter. What are the physics of this problem?"</div>
        </div>
        <div class="output-note">AI reveals hard constraints, real forces, and non-negotiable bottlenecks &mdash; not opinions.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">02</span>
        <span class="prompt-category">Assumptions</span>
        <span class="prompt-title-bar">What are the fundamental components?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk breaks problems into atoms. Complex issues become solvable when decomposed into their smallest true parts.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What are the fundamental components of [problem]?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"My business is plateauing. What are the fundamental components of this problem?"</div>
        </div>
        <div class="output-note">AI decomposes your challenge into atomic parts that can actually be addressed individually.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">03</span>
        <span class="prompt-category">Constraints</span>
        <span class="prompt-title-bar">What hidden constraints am I not questioning?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Most problems have fake walls. Self-imposed limits disguise themselves as objective constraints.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What hidden constraints am I not questioning about [situation]?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"My agency is stuck at 20 clients. What hidden constraints am I not questioning?"</div>
        </div>
        <div class="output-note">AI surfaces self-imposed ceilings and distinguishes them from actual physical limits.</div>
      </div>
    </div>
  </div>

  <!-- PHASE 2 -->
  <div class="phase-header">
    <div class="phase-icon phase-icon-question">&#10067;</div>
    <div class="phase-meta">
      <span class="phase-name">Phase 2 &mdash; Question Assumptions</span>
      <span class="phase-desc">Remove invisible cages. Separate physics from fear.</span>
    </div>
  </div>

  <div class="prompt-list">
    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">04</span>
        <span class="prompt-category">Zero-Base</span>
        <span class="prompt-title-bar">If I couldn't rely on existing assumptions, how would I solve this?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Assumptions are invisible cages. Most pricing models, product structures, and strategies are copied &mdash; not derived.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"If I couldn't rely on existing assumptions, how would I solve [problem]?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"My pricing model copies competitors. If I removed all assumptions, how would I solve this?"</div>
        </div>
        <div class="output-note">AI breaks the mental autopilot and generates paths you'd never reach by iterating on existing models.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">05</span>
        <span class="prompt-category">Fear vs Physics</span>
        <span class="prompt-title-bar">What part of this is actually impossible vs. just feeling impossible?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Most limits are emotional. Only a tiny fraction of "impossible" things are physically impossible.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What part of [situation] is actually impossible vs. just feels impossible?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I'm considering a pivot. What part of this feels impossible instead of being impossible?"</div>
        </div>
        <div class="output-note">AI separates physics from psychology &mdash; giving you an accurate map of your actual obstacle surface.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">06</span>
        <span class="prompt-category">Norms</span>
        <span class="prompt-title-bar">What would this look like if I ignored industry norms?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk bypasses entire industries by refusing to copy them. SpaceX didn't improve existing rockets &mdash; it rethought launch economics entirely.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What would [solution] look like if I ignored industry norms entirely?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I'm starting a consulting business. What would it look like if I ignored all industry norms?"</div>
        </div>
        <div class="output-note">AI generates the non-obvious path &mdash; the one competitors can't copy because they're too anchored to existing patterns.</div>
      </div>
    </div>
  </div>

  <!-- PHASE 3 -->
  <div class="phase-header">
    <div class="phase-icon phase-icon-rebuild">&#127959;&#65039;</div>
    <div class="phase-meta">
      <span class="phase-name">Phase 3 &mdash; Rebuild from Truth</span>
      <span class="phase-desc">Design the ideal. Work backward from optimal.</span>
    </div>
  </div>

  <div class="prompt-list">
    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">07</span>
        <span class="prompt-category">Ideal State</span>
        <span class="prompt-title-bar">What would the optimal solution look like if cost didn't exist?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Constraints ruin creativity too early. Define ideal first, then introduce constraints &mdash; not the reverse.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What would the optimal solution look like if cost didn't exist for [problem]?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I need to redesign onboarding. What's optimal if cost is irrelevant?"</div>
        </div>
        <div class="output-note">AI generates the ideal version first, then you can work backward to a constrained implementation.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">08</span>
        <span class="prompt-category">Clean Slate</span>
        <span class="prompt-title-bar">If I restarted this today with full hindsight, what would I build?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Most products are evolutionary accidents. Clean-slate thinking reveals the elegant version buried inside the bloated one.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"If I restarted [project] today knowing what I know now, what would I build?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"My SaaS evolved randomly over 3 years. If I restarted today, what would I build?"</div>
        </div>
        <div class="output-note">AI reveals the clean architecture &mdash; and surfaces the debt between where you are and where you should be.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">09</span>
        <span class="prompt-category">Physics Only</span>
        <span class="prompt-title-bar">How would I solve this if I only cared about physics, not politics?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk removes social friction from problem solving. Get the uncompromised version first &mdash; then soften it for human reality.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"How would I solve [problem] if I only cared about physics, not politics or social constraints?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I need to restructure my team. What's the physics-only solution?"</div>
        </div>
        <div class="output-note">AI gives the structurally correct answer. You decide how much organizational reality to reintroduce.</div>
      </div>
    </div>
  </div>

  <!-- PHASE 4 -->
  <div class="phase-header">
    <div class="phase-icon phase-icon-stress">&#9888;&#65039;</div>
    <div class="phase-meta">
      <span class="phase-name">Phase 4 &mdash; Stress Test</span>
      <span class="phase-desc">Simulate failure. Find fragility before it finds you.</span>
    </div>
  </div>

  <div class="prompt-list">
    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">10</span>
        <span class="prompt-category">Pre-Mortem</span>
        <span class="prompt-title-bar">If this failed completely, what would be the root cause?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk starts with failure scenarios to engineer success. A pre-mortem surfaces failure modes before they materialize.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"If [project] failed completely, what would be the root cause?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I'm launching a new product. If it failed in 12 months, what would be the root cause?"</div>
        </div>
        <div class="output-note">AI predicts exact failure modes in advance &mdash; letting you engineer against them before launch.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">11</span>
        <span class="prompt-category">Pruning</span>
        <span class="prompt-title-bar">If I had to cut 90% of this, what would remain?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Brutal prioritization. Everything is 90% waste until proven otherwise. This prompt forces you to defend every item.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"If I had to cut 90% of [list/plan/roadmap], what would remain?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"My product roadmap has 50 items. If I had to cut 90%, what stays?"</div>
        </div>
        <div class="output-note">AI applies elimination logic to force clarity on your actual core value.</div>
      </div>
    </div>
  </div>

  <!-- PHASE 5 -->
  <div class="phase-header">
    <div class="phase-icon phase-icon-scale">&#128200;</div>
    <div class="phase-meta">
      <span class="phase-name">Phase 5 &mdash; Scale &amp; Leverage</span>
      <span class="phase-desc">Think in orders of magnitude. Find the multiplier.</span>
    </div>
  </div>

  <div class="prompt-list">
    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">12</span>
        <span class="prompt-category">10x Speed</span>
        <span class="prompt-title-bar">If I had to achieve this 10&times; faster, what would I do differently?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Extreme deadlines force extreme creativity. A 10&times; time constraint doesn't compress effort &mdash; it forces a completely different approach.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"If I had to achieve [goal] 10&times; faster, what would I do differently?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I'm planning a 6-month launch. If I had to ship in 3 weeks, what changes?"</div>
        </div>
        <div class="output-note">AI re-engineers your process for speed &mdash; surfacing assumptions about what "necessary" work actually is.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">13</span>
        <span class="prompt-category">Scale</span>
        <span class="prompt-title-bar">What would this look like if it had to serve millions?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk thinks in orders of magnitude from day one. Failure points at scale are usually invisible at small scale &mdash; until they aren't.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What would [solution] look like if it had to scale to millions of users/customers?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I'm creating a small online course. What would it look like at 1M students?"</div>
        </div>
        <div class="output-note">AI finds architectural failure points and growth opportunities that only appear when you zoom out.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">14</span>
        <span class="prompt-category">Leverage</span>
        <span class="prompt-title-bar">What is the minimum viable breakthrough?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Not minimum viable product. Minimum viable <em>breakthrough</em>. The one action that changes the physics of everything downstream.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"What is the minimum viable breakthrough for [goal]?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"I want to grow a YouTube channel from 0. What's the minimum viable breakthrough?"</div>
        </div>
        <div class="output-note">AI identifies the foundational unlock &mdash; the single thing that makes all other growth possible.</div>
      </div>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <span class="prompt-num">15</span>
        <span class="prompt-category">Multiplier</span>
        <span class="prompt-title-bar">Which part of this solution creates the most leverage?</span>
      </div>
      <div class="prompt-body">
        <p class="prompt-insight">Musk always builds the part that changes everything. Not the flashiest &mdash; the most structurally important.</p>
        <div class="prompt-block">
          <div class="prompt-block-label">Prompt Template</div>
          <div class="prompt-text">"Which part of [strategy/plan] creates the most leverage?"</div>
        </div>
        <div class="prompt-block">
          <div class="prompt-block-label">Example</div>
          <div class="prompt-example">"My marketing strategy feels scattered. Which element creates the most leverage?"</div>
        </div>
        <div class="output-note">AI reveals the multiplier &mdash; the one node in your system that amplifies every other action.</div>
      </div>
    </div>
  </div>

  <!-- MASTER PROMPT -->
  <div class="section-label">Compound</div>
  <h2>The Compound Prompt</h2>
  <p>Stack all five phases into a single meta-prompt when you need a full first-principles teardown:</p>

  <div class="master-prompt">
    <div class="prompt-block-label">&#9889; Master First Principles Prompt</div>
    <div class="prompt-text">
      "Break my problem into fundamental truths. Strip all assumptions. Find the optimal solution assuming no constraints. Identify hidden assumptions I'm not questioning. Then rebuild the idea from first principles and identify the highest-leverage action I should take first.
      <br><br>
      Problem: [your problem here]"
    </div>
  </div>

  <!-- SUMMARY TABLE -->
  <div class="section-label">Reference</div>
  <h2>Quick Reference</h2>
  <p>All 15 prompts mapped by phase and use case:</p>

  <table class="summary-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Phase</th>
        <th>Prompt Pattern</th>
        <th>Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>01</td><td><span class="badge badge-deconstruct">Deconstruct</span></td><td>Physics of the problem?</td><td>Understanding real constraints</td></tr>
      <tr><td>02</td><td><span class="badge badge-deconstruct">Deconstruct</span></td><td>Fundamental components?</td><td>Breaking complex problems apart</td></tr>
      <tr><td>03</td><td><span class="badge badge-deconstruct">Deconstruct</span></td><td>Hidden constraints?</td><td>Exposing self-imposed limits</td></tr>
      <tr><td>04</td><td><span class="badge badge-question">Question</span></td><td>Without assumptions?</td><td>Escaping inherited models</td></tr>
      <tr><td>05</td><td><span class="badge badge-question">Question</span></td><td>Actually vs. feels impossible?</td><td>Separating fear from fact</td></tr>
      <tr><td>06</td><td><span class="badge badge-question">Question</span></td><td>Ignoring industry norms?</td><td>Non-obvious differentiation</td></tr>
      <tr><td>07</td><td><span class="badge badge-rebuild">Rebuild</span></td><td>If cost didn't exist?</td><td>Designing the ideal first</td></tr>
      <tr><td>08</td><td><span class="badge badge-rebuild">Rebuild</span></td><td>Clean slate restart?</td><td>Refactoring bloated systems</td></tr>
      <tr><td>09</td><td><span class="badge badge-rebuild">Rebuild</span></td><td>Physics not politics?</td><td>Uncompromised structural design</td></tr>
      <tr><td>10</td><td><span class="badge badge-stress">Stress Test</span></td><td>Root cause of failure?</td><td>Pre-mortem planning</td></tr>
      <tr><td>11</td><td><span class="badge badge-stress">Stress Test</span></td><td>Cut 90%?</td><td>Brutal prioritization</td></tr>
      <tr><td>12</td><td><span class="badge badge-scale">Scale</span></td><td>10&times; faster?</td><td>Forcing process reinvention</td></tr>
      <tr><td>13</td><td><span class="badge badge-scale">Scale</span></td><td>Scale to millions?</td><td>Architectural foresight</td></tr>
      <tr><td>14</td><td><span class="badge badge-scale">Scale</span></td><td>Minimum viable breakthrough?</td><td>Finding the unlock</td></tr>
      <tr><td>15</td><td><span class="badge badge-scale">Scale</span></td><td>Most leverage?</td><td>Identifying the multiplier</td></tr>
    </tbody>
  </table>

  <div class="callout insight">
    <div class="callout-title">Key Insight</div>
    <p>These prompts don't make the AI smarter. They make <em>you</em> ask better questions. The output quality is bounded by how precisely you can state the actual problem &mdash; not by the model's capability.</p>
  </div>

  <div class="footnote">
    harrytruong &middot; AI Prompting Series<br>
    Inspired by first principles thinking &mdash; applied to AI prompting.
  </div>

</div>
`;

export const script = "";
