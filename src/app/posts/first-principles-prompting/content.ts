export const styles = `
  .artifact-scope, .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope {
    line-height: 1.7;
    font-size: 15px;
  }

  .artifact-scope .hero {
    max-width: 820px;
    margin: 0 auto;
    padding: 56px 24px 0;
  }

  .artifact-scope .issue-line {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-accent);
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
    background: var(--at-accent);
  }

  .artifact-scope h1 {
    font-family: var(--at-font-display);
    font-size: clamp(28px, 5vw, 36px);
    font-weight: 300;
    line-height: 1.2;
    color: var(--at-text);
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }
  .artifact-scope h1 em {
    color: var(--at-accent);
    font-style: italic;
  }

  .artifact-scope .subtitle {
    font-size: 17px;
    color: var(--at-muted);
    font-weight: 300;
    max-width: 640px;
    line-height: 1.6;
    margin-bottom: 28px;
    border-left: 3px solid var(--at-accent);
    padding-left: 16px;
  }

  .artifact-scope .author-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 0 40px;
    border-top: 1px solid var(--at-line);
    border-bottom: 1px solid var(--at-line);
  }
  .artifact-scope .avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--at-accent);
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 14px; color: var(--at-bg);
    flex-shrink: 0;
  }
  .artifact-scope .author-info { font-size: 13px; }
  .artifact-scope .author-name { color: var(--at-text); font-weight: 500; }
  .artifact-scope .author-date { color: var(--at-muted); }
  .artifact-scope .read-time {
    margin-left: auto;
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-muted);
    background: var(--at-inset);
    padding: 4px 10px;
    border-radius: 3px;
    border: 1px solid var(--at-line);
  }

  .artifact-scope .content {
    max-width: 820px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  .artifact-scope .callout {
    background: var(--at-surface);
    border-left: 3px solid var(--at-accent);
    padding: 20px 24px;
    border-radius: 0 6px 6px 0;
    margin: 36px 0;
  }
  .artifact-scope .callout-title {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .artifact-scope .callout p { font-size: 14px; color: var(--at-text); margin-bottom: 0; }
  .artifact-scope .callout.insight { border-left-color: var(--at-blue); }
  .artifact-scope .callout.insight .callout-title { color: var(--at-blue); }

  .artifact-scope .diagram-box {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
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
    background: linear-gradient(90deg, var(--at-accent), var(--at-blue), var(--at-green));
  }
  .artifact-scope .diagram-title {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .artifact-scope .diagram-title::before {
    content: '\\25B6';
    color: var(--at-blue);
    font-size: 10px;
  }

  .artifact-scope .framework-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    background: var(--at-line);
    border-radius: 6px;
    overflow: hidden;
  }
  .artifact-scope .framework-cell {
    background: var(--at-inset);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .artifact-scope .cell-phase {
    font-family: var(--at-font-mono);
    font-size: 10px;
    color: var(--at-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .artifact-scope .cell-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--at-text);
  }
  .artifact-scope .cell-desc {
    font-size: 12px;
    color: var(--at-muted);
    line-height: 1.5;
  }

  .artifact-scope .section-label {
    font-family: var(--at-font-mono);
    font-size: 10px;
    color: var(--at-accent);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin: 52px 0 8px;
  }
  .artifact-scope h2 {
    font-family: var(--at-font-display);
    font-size: clamp(22px, 3.5vw, 30px);
    font-weight: 300;
    color: var(--at-text);
    margin-bottom: 16px;
    line-height: 1.25;
  }
  .artifact-scope p {
    color: var(--at-muted);
    margin-bottom: 14px;
    font-size: 15px;
  }
  .artifact-scope strong { color: var(--at-text); font-weight: 600; }
  .artifact-scope em { color: var(--at-text); }

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
  .artifact-scope .phase-icon-deconstruct { background: var(--at-amber-soft); }
  .artifact-scope .phase-icon-question { background: var(--at-blue-soft); }
  .artifact-scope .phase-icon-rebuild { background: var(--at-green-soft); }
  .artifact-scope .phase-icon-stress { background: var(--at-accent-soft); }
  .artifact-scope .phase-icon-scale { background: var(--at-violet-soft); }

  .artifact-scope .phase-meta { display: flex; flex-direction: column; gap: 3px; }
  .artifact-scope .phase-name {
    font-weight: 700;
    font-size: 17px;
    color: var(--at-text);
  }
  .artifact-scope .phase-desc {
    font-size: 12px;
    color: var(--at-muted);
    font-family: var(--at-font-mono);
  }

  .artifact-scope .prompt-list { display: flex; flex-direction: column; gap: 20px; margin: 28px 0; }

  .artifact-scope .prompt-card {
    background: var(--at-surface);
    border: 1px solid var(--at-line);
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .artifact-scope .prompt-card:hover { border-color: var(--at-blue); }

  .artifact-scope .prompt-header {
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid var(--at-line);
  }
  .artifact-scope .prompt-num {
    font-family: var(--at-font-mono);
    font-size: 12px;
    font-weight: 600;
    color: var(--at-bg);
    background: var(--at-blue);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    min-width: 44px;
    justify-content: center;
  }
  .artifact-scope .prompt-category {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-right: 1px solid var(--at-line);
    background: var(--at-inset);
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
    color: var(--at-muted);
    margin-bottom: 14px;
    font-style: italic;
  }

  .artifact-scope .prompt-block {
    background: var(--at-inset);
    border: 1px solid var(--at-line);
    border-radius: 6px;
    padding: 14px 16px;
    margin-bottom: 12px;
  }
  .artifact-scope .prompt-block-label {
    font-family: var(--at-font-mono);
    font-size: 10px;
    color: var(--at-accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .artifact-scope .prompt-text {
    font-family: var(--at-font-mono);
    font-size: 13px;
    color: var(--at-text);
    line-height: 1.6;
  }
  .artifact-scope .prompt-example {
    font-family: var(--at-font-mono);
    font-size: 12px;
    color: var(--at-green);
    line-height: 1.6;
  }

  .artifact-scope .output-note {
    font-size: 12px;
    color: var(--at-muted);
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 10px;
  }
  .artifact-scope .output-note::before { content: '\\2192'; color: var(--at-blue); flex-shrink: 0; }

  .artifact-scope .badge {
    display: inline-block;
    font-family: var(--at-font-mono);
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .artifact-scope .badge-deconstruct { background: var(--at-amber-soft); color: var(--at-amber); }
  .artifact-scope .badge-question { background: var(--at-blue-soft); color: var(--at-blue); }
  .artifact-scope .badge-rebuild { background: var(--at-green-soft); color: var(--at-green); }
  .artifact-scope .badge-stress { background: var(--at-accent-soft); color: var(--at-accent); }
  .artifact-scope .badge-scale { background: var(--at-violet-soft); color: var(--at-violet); }

  .artifact-scope .master-prompt {
    background: var(--at-surface);
    border: 1px solid var(--at-accent);
    border-radius: 8px;
    padding: 28px;
    margin: 40px 0;
  }
  .artifact-scope .master-prompt .prompt-block-label { margin-bottom: 14px; font-size: 11px; }
  .artifact-scope .master-prompt .prompt-text {
    font-size: 14px;
    line-height: 1.8;
    color: var(--at-text);
  }

  .artifact-scope .summary-table {
    width: 100%;
    border-collapse: collapse;
    margin: 28px 0;
    font-size: 13px;
  }
  .artifact-scope .summary-table th {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    text-align: left;
    padding: 10px 14px;
    border-bottom: 2px solid var(--at-line-strong);
    background: var(--at-surface);
  }
  .artifact-scope .summary-table td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--at-line);
    color: var(--at-muted);
    vertical-align: top;
  }
  .artifact-scope .summary-table td:first-child { color: var(--at-text); font-weight: 500; }
  .artifact-scope .summary-table tr:hover td { background: var(--at-inset); }

  .artifact-scope .footnote {
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--at-line);
    font-size: 12px;
    color: var(--at-muted);
    font-family: var(--at-font-mono);
  }

  @media (max-width: 600px) {
    .artifact-scope h1 { font-size: 26px; }
    .artifact-scope .framework-grid { grid-template-columns: 1fr; }
    .artifact-scope .prompt-category { display: none; }
  }
`;

export const html = `
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
    harrytruong &middot; The takeaway<br>
    Sharper questions beat a smarter model &mdash; the answer is only as good as the problem you hand it.
  </div>

</div>
`;

export const script = "";
