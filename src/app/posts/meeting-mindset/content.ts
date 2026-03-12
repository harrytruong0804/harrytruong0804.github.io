export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&display=swap');

  .artifact-scope {
    --bg: #0f1117;
    --surface: #161b27;
    --surface2: #1e2535;
    --border: #2a3347;
    --accent: #f5a623;
    --accent2: #4fc3f7;
    --accent3: #81c784;
    --red: #ef5350;
    --text: #e2e8f0;
    --muted:  #8892a4; 
    --tag-bg: #1e2a3a;
  }

  .artifact-scope, .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.7;
    font-size: 16px;
  }

  .artifact-scope .topbar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 12px 0;
    text-align: center;
  }
  .artifact-scope .topbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 780px;
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
    max-width: 780px;
    margin: 0 auto;
    padding: 56px 24px 0;
  }

  .artifact-scope .issue-line {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .artifact-scope .issue-line::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .artifact-scope h1 {
    font-family: 'Fraunces', serif;
    font-size: clamp(28px, 5vw, 44px);
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
    max-width: 620px;
    margin-bottom: 32px;
    border-left: 3px solid var(--accent);
    padding-left: 16px;
    line-height: 1.6;
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
    max-width: 780px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  .artifact-scope .diagram {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 28px;
    margin: 40px 0;
    position: relative;
    overflow: hidden;
  }
  .artifact-scope .diagram::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3));
  }
  .artifact-scope .diagram-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .artifact-scope .flow {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .artifact-scope .flow-row {
    display: flex;
    align-items: stretch;
    gap: 0;
  }
  .artifact-scope .flow-node {
    flex: 1;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 14px 16px;
    position: relative;
  }
  .artifact-scope .flow-node .node-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
  }
  .artifact-scope .flow-node .node-text {
    font-size: 13px;
    color: var(--text);
    line-height: 1.5;
  }
  .artifact-scope .flow-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    color: var(--muted);
    font-size: 18px;
  }

  .artifact-scope .compare-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin: 20px 0;
  }
  .artifact-scope .compare-table th {
    background: var(--surface2);
    color: var(--accent);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 12px 16px;
    text-align: left;
    border: 1px solid var(--border);
  }
  .artifact-scope .compare-table td {
    padding: 11px 16px;
    border: 1px solid var(--border);
    color: var(--text);
    vertical-align: top;
    line-height: 1.5;
  }
  .artifact-scope .compare-table tr:hover td {
    background: var(--surface2);
  }
  .artifact-scope .tag-bad { color: var(--red); font-size: 12px; font-family: monospace; }
  .artifact-scope .tag-good { color: var(--accent3); font-size: 12px; font-family: monospace; }

  .artifact-scope .callout {
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    background: var(--surface);
    padding: 18px 20px;
    border-radius: 0 6px 6px 0;
    margin: 28px 0;
    font-size: 15px;
  }
  .artifact-scope .callout.blue { border-left-color: var(--accent2); }
  .artifact-scope .callout.green { border-left-color: var(--accent3); }
  .artifact-scope .callout-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .artifact-scope .callout-label.yellow { color: var(--accent); }
  .artifact-scope .callout-label.blue { color: var(--accent2); }
  .artifact-scope .callout-label.green { color: var(--accent3); }

  .artifact-scope .steps { margin: 28px 0; }
  .artifact-scope .step {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 16px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
  }
  .artifact-scope .step:last-child { border-bottom: none; }
  .artifact-scope .step-num {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 2px solid var(--accent);
    display: flex; align-items: center; justify-content: center;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    font-size: 14px;
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 2px;
  }
  .artifact-scope .step-content h4 {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 6px;
  }
  .artifact-scope .step-content p { font-size: 14px; color: var(--muted); }
  .artifact-scope .step-content .example {
    margin-top: 10px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent2);
    padding: 10px 14px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--accent2);
    line-height: 1.6;
    border-radius: 0 4px 4px 0;
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
  .artifact-scope h3 {
    font-size: 17px;
    font-weight: 600;
    color: var(--text);
    margin: 28px 0 10px;
  }
  .artifact-scope p {
    color: var(--muted);
    margin-bottom: 16px;
    font-size: 15px;
  }
  .artifact-scope strong { color: var(--text); font-weight: 600; }

  .artifact-scope .q-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 20px 0;
  }
  @media (max-width: 600px) { .artifact-scope .q-grid { grid-template-columns: 1fr; } }
  .artifact-scope .q-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 16px;
    position: relative;
    overflow: hidden;
  }
  .artifact-scope .q-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: var(--accent);
    opacity: 0.4;
  }
  .artifact-scope .q-card.blue::after { background: var(--accent2); }
  .artifact-scope .q-card.green::after { background: var(--accent3); }
  .artifact-scope .q-card.red::after { background: var(--red); }
  .artifact-scope .q-type {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }
  .artifact-scope .q-card.blue .q-type { color: var(--accent2); }
  .artifact-scope .q-card.green .q-type { color: var(--accent3); }
  .artifact-scope .q-card.red .q-type { color: var(--red); }
  .artifact-scope .q-text {
    font-size: 13px;
    color: var(--text);
    line-height: 1.55;
    font-style: italic;
  }

  .artifact-scope .summary-box {
    background: var(--surface);
    border: 1px solid var(--accent);
    border-radius: 8px;
    padding: 28px;
    margin: 48px 0 0;
  }
  .artifact-scope .summary-box h3 {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    color: var(--accent);
    text-transform: uppercase;
    margin: 0 0 16px;
  }
  .artifact-scope .summary-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--muted);
  }
  .artifact-scope .summary-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    margin-top: 7px;
  }

  .artifact-scope .keyword-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }
  .artifact-scope .keyword-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--muted);
    width: 20px;
    flex-shrink: 0;
  }
  .artifact-scope .keyword-label {
    font-size: 13px;
    color: var(--muted);
  }
  .artifact-scope .keyword-arrow {
    color: var(--muted);
    font-size: 12px;
  }
  .artifact-scope .keyword-word {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
    background: var(--surface2);
    border: 1px solid var(--border);
    padding: 2px 10px;
    border-radius: 4px;
  }

  .artifact-scope .qlist-section {
    margin: 28px 0;
  }
  .artifact-scope .qlist-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 18px 20px;
    margin-bottom: 12px;
  }
  .artifact-scope .qlist-header {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .artifact-scope .qlist-header .qh-num { color: var(--muted); }
  .artifact-scope .qlist-header .qh-name { color: var(--accent); }
  .artifact-scope .qlist-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .artifact-scope .qlist-items li {
    font-size: 13px;
    color: var(--text);
    padding: 5px 0;
    padding-left: 16px;
    position: relative;
    line-height: 1.5;
  }
  .artifact-scope .qlist-items li::before {
    content: '>';
    position: absolute;
    left: 0;
    color: var(--accent2);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
  }

  .artifact-scope .footnote {
    margin-top: 60px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
    font-size: 12px;
    color: var(--muted);
    font-family: 'IBM Plex Mono', monospace;
  }
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">SOFT SKILLS × ENGINEERING</span>
  </div>
</div>

<div class="hero">
  <div class="issue-line">Career Growth</div>
  <h1>How to Extract <em>Maximum Value</em> from Any Tech Talk</h1>
  <p class="subtitle">You sit through a 45-minute sharing session and leave with nothing. Here's why — and the ancient questioning method that fixes it.</p>
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

  <p>You know the scenario. A senior engineer shares a deep-dive on a system you've never touched. You nod along. You understand maybe 30% of the words. The session ends. You open Slack and... nothing. No note taken, no question asked, no clarity gained.</p>

  <p>This is one of the most common — and costly — failures of early-career engineers. Not a lack of intelligence, but a lack of <strong>mental framework</strong> for how to process unfamiliar technical content in real time.</p>

  <div class="callout">
    <div class="callout-label yellow">&#9889; The Core Problem</div>
    When you don't understand something, your brain goes <strong>passive</strong>. It stops seeking structure and starts waiting for a familiar pattern that never comes. The result: 45 minutes of input, zero bits of retained output.
  </div>

  <div class="section-label">Section 01</div>
  <h2>Why You Leave with Nothing</h2>

  <p>The problem isn't the presenter. The problem is your <strong>listening mode</strong>. Most engineers attend talks as a <em>consumer</em>: sit, absorb, hope it makes sense. This mode breaks completely when the content is outside your current mental model.</p>

  <div class="diagram">
    <div class="diagram-title">// Two Listening Modes</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div style="background:#1a1f2e;border:1px solid #2a3347;border-top:3px solid #ef5350;border-radius:6px;padding:16px;">
        <div style="font-family:monospace;font-size:10px;color:#ef5350;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;">PASSIVE MODE &#10007;</div>
        <div style="font-size:13px;color:#8892a4;line-height:1.7;">
          &#8594; Wait to understand<br>
          &#8594; Avoid questions (fear of looking dumb)<br>
          &#8594; Store raw audio in short-term memory<br>
          &#8594; No hooks = no retention<br>
          &#8594; Leave with 0 takeaways
        </div>
      </div>
      <div style="background:#1a1f2e;border:1px solid #2a3347;border-top:3px solid #81c784;border-radius:6px;padding:16px;">
        <div style="font-family:monospace;font-size:10px;color:#81c784;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;">ACTIVE MODE &#10003;</div>
        <div style="font-size:13px;color:#8892a4;line-height:1.7;">
          &#8594; Hunt for structure<br>
          &#8594; Ask to clarify, not impress<br>
          &#8594; Build a mental map in real time<br>
          &#8594; Questions create memory hooks<br>
          &#8594; Leave with 3–5 concrete insights
        </div>
      </div>
    </div>
  </div>

  <div class="section-label">Section 02</div>
  <h2>The Socratic Method — Applied to Engineering Talks</h2>

  <p>Socrates never lectured. He <em>asked questions</em>. Not to show off — but to surface hidden assumptions, build shared understanding, and force clarity from vagueness. His method: start from what you <em>don't</em> know and use questions to construct what you <em>do</em>.</p>

  <p>Applied to a tech sharing session, this becomes a <strong>3-phase questioning system</strong>:</p>

  <div class="flow">
    <div class="flow-row">
      <div class="flow-node">
        <div class="node-label">Phase 1 · Before</div>
        <div class="node-text">Ground yourself. What's the topic? What do you already know? What's your biggest unknown?</div>
      </div>
    </div>
    <div class="flow-arrow">&#8595;</div>
    <div class="flow-row">
      <div class="flow-node">
        <div class="node-label">Phase 2 · During</div>
        <div class="node-text">Hunt for the WHY. Ask Socratic questions to expose reasoning, tradeoffs, and decision points.</div>
      </div>
    </div>
    <div class="flow-arrow">&#8595;</div>
    <div class="flow-row">
      <div class="flow-node">
        <div class="node-label">Phase 3 · After</div>
        <div class="node-text">Synthesize. Write 3 sentences: What was built? Why this approach? What would you ask next time?</div>
      </div>
    </div>
  </div>

  <div class="section-label">Section 03</div>
  <h2>The 5 Socratic Question Templates</h2>

  <p>Here are the five question types Socrates used — and how they translate into questions that <strong>benefit both you and the presenter</strong>:</p>

  <div class="q-grid">
    <div class="q-card">
      <div class="q-type">&#9312; Clarification</div>
      <div class="q-text">"When you say X, do you mean [your interpretation]? Or is it more like Y?"</div>
    </div>
    <div class="q-card blue">
      <div class="q-type">&#9313; Assumption Probe</div>
      <div class="q-text">"What assumption does this design rely on? What breaks if that assumption is false?"</div>
    </div>
    <div class="q-card green">
      <div class="q-type">&#9314; Evidence / Tradeoff</div>
      <div class="q-text">"What made you choose this over [alternative]? Was there a benchmark or incident that drove it?"</div>
    </div>
    <div class="q-card red">
      <div class="q-type">&#9315; Implication</div>
      <div class="q-text">"If this system grows 10×, which part breaks first?"</div>
    </div>
    <div class="q-card blue" style="grid-column:span 2;">
      <div class="q-type">&#9316; Counter-perspective</div>
      <div class="q-text">"Is there a scenario where the opposite design decision would be better?"</div>
    </div>
  </div>

  <h3>In One Word</h3>
  <p>If you could distill each question type to a single word, here's what they become:</p>

  <div class="diagram">
    <div class="diagram-title">// One Word Per Question Type</div>
    <div class="keyword-row"><span class="keyword-num">&#9312;</span> <span class="keyword-label">Clarification</span> <span class="keyword-arrow">&#8594;</span> <span class="keyword-word">Define</span></div>
    <div class="keyword-row"><span class="keyword-num">&#9313;</span> <span class="keyword-label">Assumption Probe</span> <span class="keyword-arrow">&#8594;</span> <span class="keyword-word">Foundation</span></div>
    <div class="keyword-row"><span class="keyword-num">&#9314;</span> <span class="keyword-label">Evidence / Tradeoff</span> <span class="keyword-arrow">&#8594;</span> <span class="keyword-word">Why</span></div>
    <div class="keyword-row"><span class="keyword-num">&#9315;</span> <span class="keyword-label">Implication</span> <span class="keyword-arrow">&#8594;</span> <span class="keyword-word">Boundary</span></div>
    <div class="keyword-row"><span class="keyword-num">&#9316;</span> <span class="keyword-label">Counter-perspective</span> <span class="keyword-arrow">&#8594;</span> <span class="keyword-word">Exception</span></div>
  </div>

  <h3>5 Typical Questions for Each Type</h3>

  <div class="qlist-section">
    <div class="qlist-block">
      <div class="qlist-header"><span class="qh-num">&#9312;</span> <span class="qh-name">Define</span></div>
      <ul class="qlist-items">
        <li>"What do you mean by that exactly?"</li>
        <li>"Can you give me a concrete example?"</li>
        <li>"How would you define X in one sentence?"</li>
        <li>"Is X the same as Y, or are they different?"</li>
        <li>"When you say X, what does that look like in practice?"</li>
      </ul>
    </div>

    <div class="qlist-block">
      <div class="qlist-header"><span class="qh-num">&#9313;</span> <span class="qh-name">Foundation</span></div>
      <ul class="qlist-items">
        <li>"What has to be true for this to work?"</li>
        <li>"What are you taking for granted here?"</li>
        <li>"Does this only apply under certain conditions?"</li>
        <li>"What would break this approach?"</li>
        <li>"Who is this designed for — and who does it not apply to?"</li>
      </ul>
    </div>

    <div class="qlist-block">
      <div class="qlist-header"><span class="qh-num">&#9314;</span> <span class="qh-name">Why</span></div>
      <ul class="qlist-items">
        <li>"Why this over the alternative?"</li>
        <li>"What was the moment that made you decide this?"</li>
        <li>"What did you try first before landing here?"</li>
        <li>"What would have to change for you to choose differently?"</li>
        <li>"What's the cost of this choice that you accepted?"</li>
      </ul>
    </div>

    <div class="qlist-block">
      <div class="qlist-header"><span class="qh-num">&#9315;</span> <span class="qh-name">Boundary</span></div>
      <ul class="qlist-items">
        <li>"What happens if you take this to the extreme?"</li>
        <li>"At what point does this stop working?"</li>
        <li>"What's the worst case if this assumption is wrong?"</li>
        <li>"Does this still hold when the situation changes?"</li>
        <li>"What's the one condition that would break this entirely?"</li>
      </ul>
    </div>

    <div class="qlist-block">
      <div class="qlist-header"><span class="qh-num">&#9316;</span> <span class="qh-name">Exception</span></div>
      <ul class="qlist-items">
        <li>"When would the opposite be true?"</li>
        <li>"Is there a case where this rule does not apply?"</li>
        <li>"Who would strongly disagree with this — and why?"</li>
        <li>"What context would make this advice harmful?"</li>
        <li>"If you had to argue against your own point, what would you say?"</li>
      </ul>
    </div>
  </div>

  <div class="callout blue">
    <div class="callout-label blue">&#128161; Why These Questions Work for the Presenter Too</div>
    A good Socratic question forces the presenter to <strong>articulate their reasoning out loud</strong> — which often surfaces nuance they hadn't consciously examined. They leave feeling understood. You leave with the mental model, not just the surface story.
  </div>

  <div class="section-label">Section 04</div>
  <h2>The Before-During-After Playbook</h2>

  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-content">
        <h4>Before: Write your "Known / Unknown / Curious" list</h4>
        <p>Spend 2 minutes before the session. What do you already know about this topic? What's your biggest gap? What outcome would make this 45 minutes worth it?</p>
        <div class="example">
// Example — before a "How we built our RAG pipeline" talk<br>
Known: "I know what RAG is. I've used vector search before."<br>
Unknown: "How do they handle document freshness? What eval do they use?"<br>
Goal: "I want to understand one thing I can apply to my pipeline."
        </div>
      </div>
    </div>

    <div class="step">
      <div class="step-num">2</div>
      <div class="step-content">
        <h4>During: Map the "What / Why / How" triangle</h4>
        <p>Every system has three layers. Most talks only cover "What." Socratic questions unlock the other two.</p>
        <div class="example">
WHAT  &#8594; "We use a bi-encoder for retrieval"<br>
WHY   &#8594; Ask: "Why not cross-encoder? Too slow at query time?"<br>
HOW   &#8594; Ask: "How does your chunk size affect recall in practice?"
        </div>
      </div>
    </div>

    <div class="step">
      <div class="step-num">3</div>
      <div class="step-content">
        <h4>During: Use the "Confused but Curious" framing</h4>
        <p>The fear of asking questions comes from not wanting to sound dumb. Reframe it: being confused about a specific thing is evidence you were paying attention.</p>
        <div class="example">
&#10007; Bad: "I don't understand this part."<br>
&#10003; Good: "I follow the retrieval step, but I'm not clear on how<br>
         the reranker gets scores. Is it a separate model call?"
        </div>
      </div>
    </div>

    <div class="step">
      <div class="step-num">4</div>
      <div class="step-content">
        <h4>After: The 3-Sentence Synthesis Rule</h4>
        <p>Within 10 minutes of the session ending, write exactly 3 sentences: (1) What was built. (2) Why this approach over alternatives. (3) The most interesting tradeoff you heard.</p>
        <div class="example">
"They built a hybrid RAG system using BM25 + dense retrieval.<br>
 They chose this because pure dense search missed keyword-heavy<br>
 queries. The interesting tradeoff: latency vs. recall at p99."
        </div>
      </div>
    </div>
  </div>

  <div class="section-label">Section 05</div>
  <h2>Question Anti-Patterns to Avoid</h2>

  <div class="diagram">
    <div class="diagram-title">// Bad Questions vs. Socratic Questions</div>
    <table class="compare-table">
      <thead>
        <tr>
          <th>Anti-Pattern</th>
          <th>Why It Fails</th>
          <th>Socratic Alternative</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="tag-bad">&#10007;</span> "Can you explain everything again from the start?"</td>
          <td>Too broad, burns everyone's time</td>
          <td>"What's the most counterintuitive decision you made in this design?"</td>
        </tr>
        <tr>
          <td><span class="tag-bad">&#10007;</span> "Did you consider using [tool I heard of]?"</td>
          <td>Sounds like a challenge, not curiosity</td>
          <td>"What would need to be true for a different approach to work better here?"</td>
        </tr>
        <tr>
          <td><span class="tag-bad">&#10007;</span> "How long did this take?"</td>
          <td>Provides zero insight</td>
          <td>"What was the hardest problem to get right — and what finally cracked it?"</td>
        </tr>
        <tr>
          <td><span class="tag-bad">&#10007;</span> Asking nothing</td>
          <td>You leave with a passive receiver's output: near zero</td>
          <td>Prepare one question before the session starts, no matter what</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Section 06</div>
  <h2>The Mindset Shift That Changes Everything</h2>

  <p>Here's the deepest reframe: <strong>you are not there to understand everything</strong>. You are there to extract <em>one transferable insight</em> — a mental model, a tradeoff, a pattern you can apply somewhere else.</p>

  <p>Socrates was never the smartest person in the room. He was the most <em>honestly curious</em> one. That is what made conversations with him stick for 2,500 years.</p>

  <div class="callout green">
    <div class="callout-label green">&#128208; The Rule</div>
    One good question asked sincerely is worth more than 45 minutes of passive listening. A question is not a sign of ignorance — it is the <strong>mechanism by which understanding is constructed</strong>.
  </div>

  <div class="summary-box">
    <h3>// TL;DR — The Full System</h3>
    <div class="summary-row">
      <div class="summary-dot"></div>
      <span>Before: Write your Known / Unknown / Goal in 2 minutes</span>
    </div>
    <div class="summary-row">
      <div class="summary-dot"></div>
      <span>During: Map every claim to What / Why / How — ask when Why or How is missing</span>
    </div>
    <div class="summary-row">
      <div class="summary-dot"></div>
      <span>Use the 5 Socratic types: Clarify &#8594; Assumption &#8594; Evidence &#8594; Implication &#8594; Counter</span>
    </div>
    <div class="summary-row">
      <div class="summary-dot"></div>
      <span>Frame questions as "Confused but Curious," not as challenges</span>
    </div>
    <div class="summary-row">
      <div class="summary-dot"></div>
      <span>After: Write 3 sentences — What, Why, Best Tradeoff — within 10 minutes</span>
    </div>
    <div class="summary-row">
      <div class="summary-dot"></div>
      <span>Goal: not full understanding — one transferable insight per session</span>
    </div>
  </div>

  <div class="footnote">
    harrytruong · Career Growth Series<br>
    "The question is not a sign of ignorance. It is the mechanism by which understanding is built." — adapted from Socrates
  </div>

</div>
`;

export const script = "";
