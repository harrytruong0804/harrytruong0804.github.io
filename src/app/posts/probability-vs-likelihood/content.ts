export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  .artifact-scope {
    --bg: #FDFAF6;
    --text: #1a1a1a;
    --text-muted: #5a5a5a;
    --accent: #C0392B;
    --accent-soft: #E74C3C;
    --blue: #2471A3;
    --blue-soft: #AED6F1;
    --green: #1E8449;
    --card-bg: #FFFFFF;
    --card-border: #E8E0D5;
    --code-bg: #F4F0EB;
    --highlight-prob: #FDF2E9;
    --highlight-like: #EBF5FB;
    --divider: #D5C9BB;
  }

  .artifact-scope, .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope a { color: inherit; text-decoration: none; }

  .artifact-scope .topbar {
    background: var(--card-bg);
    border-bottom: 1px solid var(--card-border);
    padding: 12px 0;
  }
  .artifact-scope .topbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 720px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .artifact-scope .logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.05em;
  }
  .artifact-scope .logo a:hover {
    opacity: 0.7;
  }
  .artifact-scope .meta-tag {
    background: rgba(192, 57, 43, 0.08);
    border: 1px solid var(--card-border);
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 3px;
    letter-spacing: 1px;
  }

  .artifact-scope {
    background: var(--bg);
    color: var(--text);
    font-family: 'Source Sans 3', sans-serif;
    font-size: 18px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
  }

  .artifact-scope .noise {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 0;
  }

  .artifact-scope .container {
    position: relative; z-index: 1;
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 24px 100px;
  }

  /* Header */
  .artifact-scope .header {
    margin-bottom: 56px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--divider);
  }

  .artifact-scope .tag {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--accent);
    background: rgba(192, 57, 43, 0.08);
    padding: 4px 12px;
    border-radius: 3px;
    margin-bottom: 20px;
  }

  .artifact-scope h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 700;
    line-height: 1.15;
    color: var(--text);
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }

  .artifact-scope .subtitle {
    font-size: 20px;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.6;
  }

  .artifact-scope .meta {
    margin-top: 24px;
    font-size: 14px;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
  }

  /* Prose */
  .artifact-scope h2 {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 700;
    margin-top: 56px;
    margin-bottom: 16px;
    color: var(--text);
  }

  .artifact-scope h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 36px;
    margin-bottom: 12px;
    color: var(--text);
  }

  .artifact-scope p { margin-bottom: 20px; }

  .artifact-scope strong { font-weight: 700; }

  .artifact-scope em { font-family: 'Playfair Display', serif; font-style: italic; }

  /* Callout Cards */
  .artifact-scope .callout {
    border-radius: 8px;
    padding: 28px 28px 24px;
    margin: 32px 0;
    border-left: 4px solid;
    position: relative;
  }

  .artifact-scope .callout-prob {
    background: var(--highlight-prob);
    border-color: var(--accent);
  }

  .artifact-scope .callout-like {
    background: var(--highlight-like);
    border-color: var(--blue);
  }

  .artifact-scope .callout-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .artifact-scope .callout-prob .callout-label { color: var(--accent); }
  .artifact-scope .callout-like .callout-label { color: var(--blue); }

  .artifact-scope .callout .question {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 0;
  }

  /* Math blocks */
  .artifact-scope .math-block {
    background: var(--code-bg);
    border: 1px solid var(--card-border);
    border-radius: 6px;
    padding: 20px 24px;
    margin: 24px 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    line-height: 1.8;
    overflow-x: auto;
  }

  .artifact-scope .math-block .step {
    display: block;
    margin-bottom: 4px;
  }

  .artifact-scope .math-block .result {
    color: var(--accent);
    font-weight: 500;
  }

  .artifact-scope .math-block .result-blue {
    color: var(--blue);
    font-weight: 500;
  }

  /* Comparison Table */
  .artifact-scope .comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 36px 0;
  }

  .artifact-scope .comp-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 24px;
    border-top: 3px solid;
  }

  .artifact-scope .comp-card.prob { border-top-color: var(--accent); }
  .artifact-scope .comp-card.like { border-top-color: var(--blue); }

  .artifact-scope .comp-card h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .artifact-scope .comp-card.prob h4 { color: var(--accent); }
  .artifact-scope .comp-card.like h4 { color: var(--blue); }

  .artifact-scope .comp-card p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  .artifact-scope .comp-card p:last-child { margin-bottom: 0; }

  /* Visual diagram */
  .artifact-scope .diagram-wrapper {
    margin: 40px 0;
    text-align: center;
  }

  .artifact-scope .diagram-wrapper svg {
    width: 100%;
    max-width: 600px;
  }

  /* Coin animation */
  .artifact-scope .coin-row {
    display: flex;
    gap: 6px;
    justify-content: center;
    margin: 28px 0;
    flex-wrap: wrap;
  }

  .artifact-scope .coin {
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    animation: coinDrop 0.4s ease-out both;
  }

  .artifact-scope .coin.heads {
    background: var(--accent);
    color: #fff;
  }

  .artifact-scope .coin.tails {
    background: var(--card-border);
    color: var(--text-muted);
  }

  @keyframes coinDrop {
    from { opacity: 0; transform: translateY(-16px) scale(0.8); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .artifact-scope .coin:nth-child(1) { animation-delay: 0.05s; }
  .artifact-scope .coin:nth-child(2) { animation-delay: 0.1s; }
  .artifact-scope .coin:nth-child(3) { animation-delay: 0.15s; }
  .artifact-scope .coin:nth-child(4) { animation-delay: 0.2s; }
  .artifact-scope .coin:nth-child(5) { animation-delay: 0.25s; }
  .artifact-scope .coin:nth-child(6) { animation-delay: 0.3s; }
  .artifact-scope .coin:nth-child(7) { animation-delay: 0.35s; }
  .artifact-scope .coin:nth-child(8) { animation-delay: 0.4s; }
  .artifact-scope .coin:nth-child(9) { animation-delay: 0.45s; }
  .artifact-scope .coin:nth-child(10) { animation-delay: 0.5s; }

  /* Key insight box */
  .artifact-scope .insight {
    background: var(--text);
    color: #fff;
    border-radius: 8px;
    padding: 32px;
    margin: 40px 0;
    position: relative;
    overflow: hidden;
  }

  .artifact-scope .insight::before {
    content: '\\2726';
    position: absolute;
    top: -10px; right: 20px;
    font-size: 80px;
    opacity: 0.06;
  }

  .artifact-scope .insight p {
    color: rgba(255,255,255,0.88);
    margin-bottom: 12px;
    font-size: 17px;
  }

  .artifact-scope .insight p:last-child { margin-bottom: 0; }

  .artifact-scope .insight strong { color: #fff; }

  /* Blockquote */
  .artifact-scope blockquote {
    border-left: 3px solid var(--divider);
    padding-left: 20px;
    margin: 28px 0;
    color: var(--text-muted);
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 19px;
    line-height: 1.6;
  }

  /* Footer */
  .artifact-scope .footer {
    margin-top: 64px;
    padding-top: 32px;
    border-top: 1px solid var(--divider);
    font-size: 14px;
    color: var(--text-muted);
    text-align: center;
  }

  .artifact-scope code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    background: var(--code-bg);
    padding: 2px 6px;
    border-radius: 3px;
  }

  /* Responsive */
  @media (max-width: 600px) {
    .artifact-scope .comparison { grid-template-columns: 1fr; }
    .artifact-scope .container { padding: 36px 16px 60px; }
    .artifact-scope .callout { padding: 20px; }
  }
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">STATISTICS</span>
  </div>
</div>
<div class="noise"></div>
<div class="container">

  <header class="header">
    <span class="tag">Statistics · Intuition</span>
    <h1>Probability vs. Likelihood:<br>A Coin Flip Story</h1>
    <p class="subtitle">Two questions that look identical but think in opposite directions — explained with 10 coin flips.</p>
    <p class="meta">5 min read</p>
  </header>

  <!-- Setup -->
  <h2>The Setup</h2>
  <p>
    You flip a coin 10 times. Here's what you observe:
  </p>

  <div class="coin-row">
    <div class="coin heads">H</div>
    <div class="coin heads">H</div>
    <div class="coin tails">T</div>
    <div class="coin heads">H</div>
    <div class="coin heads">H</div>
    <div class="coin heads">H</div>
    <div class="coin tails">T</div>
    <div class="coin heads">H</div>
    <div class="coin heads">H</div>
    <div class="coin heads">H</div>
  </div>

  <p>
    <strong>8 heads out of 10 flips.</strong> That's a lot of heads. Now, two very different questions arise from this same data — and understanding how they differ is one of the most important foundations in statistics.
  </p>

  <!-- Question 1 -->
  <h2>Question 1: Probability</h2>

  <div class="callout callout-prob">
    <div class="callout-label">Probability asks</div>
    <p class="question">"If the coin is fair (50/50), how likely is it to get 8 heads out of 10 flips?"</p>
  </div>

  <p>
    Probability starts with a <strong>known hypothesis</strong> — the coin is fair — and asks how likely a particular outcome is. The parameter is fixed; we're computing over possible data.
  </p>

  <h3>The Math</h3>
  <p>
    This is a textbook binomial probability problem. We need to count <em>how many ways</em> 8 heads can land in 10 flips, then multiply by the chance of each specific sequence:
  </p>

  <div class="math-block">
    <span class="step">P(8 heads | p = 0.5)</span>
    <span class="step">= C(10, 8) × 0.5⁸ × 0.5²</span>
    <span class="step">= 45 × (1/1024)</span>
    <span class="step result">= 45/1024 ≈ 0.044 → 4.4%</span>
  </div>

  <p>
    The <code>C(10, 8) = 45</code> term counts the <strong>combinations</strong> — the number of ways to choose which 8 of the 10 flips land heads. Without it, we'd only calculate the probability of one specific sequence (e.g., HHHHHHHHTT), ignoring all other arrangements.
  </p>

  <p>
    The result: under a fair coin assumption, seeing 8 heads in 10 flips happens <strong>only ~4.4% of the time</strong>. That's pretty rare — and it should make us suspicious that the coin might not be fair.
  </p>

  <!-- Question 2 -->
  <h2>Question 2: Likelihood</h2>

  <div class="callout callout-like">
    <div class="callout-label">Likelihood asks</div>
    <p class="question">"Given that we observed 8 heads, what bias of the coin makes this data most plausible?"</p>
  </div>

  <p>
    Likelihood flips the script. The <strong>data is fixed</strong> — we already saw 8 heads. Now we're scanning across different possible coin biases (p = 0.1, 0.2, … 0.9, 1.0) and asking: which one makes our observation most probable?
  </p>

  <h3>The Math</h3>
  <p>
    We use <strong>Maximum Likelihood Estimation (MLE)</strong>. The likelihood function looks exactly like the probability formula, but now <em>p</em> is the variable:
  </p>

  <div class="math-block">
    <span class="step">L(p) = C(10, 8) × p⁸ × (1−p)²</span>
    <span class="step"></span>
    <span class="step">Take the log-likelihood:</span>
    <span class="step">ln L = const + 8·ln(p) + 2·ln(1−p)</span>
    <span class="step"></span>
    <span class="step">Set derivative to zero:</span>
    <span class="step">8/p − 2/(1−p) = 0</span>
    <span class="step">8(1−p) = 2p → 10p = 8</span>
    <span class="step result-blue">p̂ = 0.8 → 80%</span>
  </div>

  <p>
    The MLE estimate is simply the <strong>observed proportion</strong>: 8/10 = 80%. The coin bias that best explains our data is <em>p</em> = 0.8. Beautifully intuitive.
  </p>

  <!-- Core Distinction -->
  <h2>The Core Distinction</h2>

  <div class="comparison">
    <div class="comp-card prob">
      <h4>Probability</h4>
      <p><strong>Fixed:</strong> Hypothesis (p = 0.5)</p>
      <p><strong>Variable:</strong> Data (outcomes)</p>
      <p><strong>Asks:</strong> How surprising is this data?</p>
      <p><strong>Direction:</strong> Hypothesis → Data</p>
    </div>
    <div class="comp-card like">
      <h4>Likelihood</h4>
      <p><strong>Fixed:</strong> Data (8 heads)</p>
      <p><strong>Variable:</strong> Hypothesis (p = ?)</p>
      <p><strong>Asks:</strong> What explains this data best?</p>
      <p><strong>Direction:</strong> Data → Hypothesis</p>
    </div>
  </div>

  <div class="insight">
    <p><strong>Probability</strong> says: "Assuming my model is true, how likely is the evidence?"</p>
    <p><strong>Likelihood</strong> says: "Given the evidence, which model fits best?"</p>
    <p>Same formula. Same math. <strong>Completely different question.</strong></p>
  </div>

  <!-- Why It Matters -->
  <h2>Why It Matters</h2>
  <p>
    This distinction is the backbone of modern statistics and machine learning. Every time you train a model, you're doing some form of likelihood maximization — adjusting parameters to best explain observed data. Every time you run a hypothesis test, you're computing probabilities under a fixed model.
  </p>
  <p>
    Confusing the two leads to one of the most common statistical mistakes: interpreting a p-value (probability) as if it tells you how likely a hypothesis is (likelihood). A p-value of 4.4% tells you the data is rare <em>under the null hypothesis</em>, not that there's a 4.4% chance the coin is fair.
  </p>

  <blockquote>
    "The probability of the data given the hypothesis is not the probability of the hypothesis given the data."
  </blockquote>

  <p>
    Next time you see a coin land heads eight times, pause. Ask yourself: am I reasoning from hypothesis to data, or from data to hypothesis? The answer determines whether you're doing probability or likelihood — and getting that right is half of statistics.
  </p>

  <div class="footer">
    Written with a fair coin and an unfair amount of curiosity.
  </div>

</div>
`;

export const script = ``;
