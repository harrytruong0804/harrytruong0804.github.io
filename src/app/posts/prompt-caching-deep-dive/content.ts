export const styles = `
  .artifact-scope {
    --max-w: 760px;
    --gutter: 24px;

    font-size: 17px;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  .artifact-scope * { margin: 0; padding: 0; box-sizing: border-box; }

  .artifact-scope .page { max-width: var(--max-w); margin: 0 auto; padding: 0 var(--gutter); }

  .artifact-scope .hero {
    padding: 80px 0 60px;
    border-bottom: 1px solid var(--at-line);
    margin-bottom: 48px;
  }

  .artifact-scope .hero-eyebrow {
    font-family: var(--at-font-mono);
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--at-accent);
    margin-bottom: 16px;
  }

  .artifact-scope .hero h1 {
    font-family: var(--at-font-display);
    font-size: clamp(36px, 6vw, 54px);
    line-height: 1.1;
    font-weight: 400;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
  }

  .artifact-scope .hero-subtitle {
    font-size: 19px;
    color: var(--at-muted);
    max-width: 600px;
    line-height: 1.6;
  }

  .artifact-scope .hero-meta {
    margin-top: 28px;
    display: flex;
    gap: 24px;
    font-size: 13px;
    color: var(--at-faint);
    font-family: var(--at-font-mono);
  }

  .artifact-scope .toc {
    background: var(--at-surface);
    border-radius: 12px;
    padding: 28px 32px;
    margin-bottom: 56px;
  }

  .artifact-scope .toc-title {
    font-family: var(--at-font-mono);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--at-faint);
    margin-bottom: 16px;
  }

  .artifact-scope .toc ol { list-style: none; counter-reset: toc; }

  .artifact-scope .toc ol li { counter-increment: toc; margin-bottom: 8px; }

  .artifact-scope .toc ol li a {
    color: var(--at-muted);
    text-decoration: none;
    font-size: 15px;
    transition: color 0.2s;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .artifact-scope .toc ol li a::before {
    content: counter(toc, decimal-leading-zero);
    font-family: var(--at-font-mono);
    font-size: 12px;
    color: var(--at-accent);
    min-width: 24px;
  }

  .artifact-scope .toc ol li a:hover { color: var(--at-accent); }

  .artifact-scope section { margin-bottom: 64px; }

  .artifact-scope h2 {
    font-family: var(--at-font-display);
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 24px;
    padding-top: 12px;
    letter-spacing: -0.3px;
  }

  .artifact-scope h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 12px;
  }

  .artifact-scope p { margin-bottom: 20px; }

  .artifact-scope a { color: var(--at-accent); text-decoration: underline; text-underline-offset: 3px; }

  .artifact-scope .callout {
    border-radius: 10px;
    padding: 20px 24px;
    margin: 28px 0;
    font-size: 15px;
    line-height: 1.65;
  }

  .artifact-scope .callout-label {
    font-family: var(--at-font-mono);
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .artifact-scope .callout.insight { background: var(--at-violet-soft); border-left: 3px solid var(--at-violet); }
  .artifact-scope .callout.insight .callout-label { color: var(--at-violet); }
  .artifact-scope .callout.tip { background: var(--at-green-soft); border-left: 3px solid var(--at-green); }
  .artifact-scope .callout.tip .callout-label { color: var(--at-green); }
  .artifact-scope .callout.warning { background: var(--at-amber-soft); border-left: 3px solid var(--at-amber); }
  .artifact-scope .callout.warning .callout-label { color: var(--at-amber); }
  .artifact-scope .callout.danger { background: var(--at-accent-soft); border-left: 3px solid var(--at-accent); }
  .artifact-scope .callout.danger .callout-label { color: var(--at-accent); }

  .artifact-scope pre {
    background: var(--at-inset);
    color: var(--at-text);
    border-radius: 10px;
    padding: 20px 24px;
    overflow-x: auto;
    font-family: var(--at-font-mono);
    font-size: 13.5px;
    line-height: 1.7;
    margin: 24px 0;
  }

  .artifact-scope code {
    font-family: var(--at-font-mono);
    font-size: 0.88em;
    background: var(--at-surface);
    padding: 2px 6px;
    border-radius: 4px;
  }

  .artifact-scope pre code { background: none; padding: 0; font-size: inherit; }

  .artifact-scope .kw { color: var(--at-accent); }
  .artifact-scope .str { color: var(--at-green); }
  .artifact-scope .cm { color: var(--at-faint); font-style: italic; }
  .artifact-scope .fn { color: var(--at-blue); }
  .artifact-scope .num { color: var(--at-amber); }
  .artifact-scope .op { color: var(--at-violet); }

  .artifact-scope .ref {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-blue);
    text-decoration: none;
    border: 1px solid var(--at-blue);
    border-radius: 4px;
    padding: 1px 6px;
    vertical-align: super;
    margin-left: 2px;
    transition: all 0.2s;
  }
  .artifact-scope .ref:hover { background: var(--at-blue-soft); }

  .artifact-scope .diagram-container {
    border: 1px solid var(--at-line);
    border-radius: 12px;
    overflow: hidden;
    margin: 32px 0;
  }

  .artifact-scope .diagram-header {
    background: var(--at-surface);
    padding: 12px 20px;
    font-family: var(--at-font-mono);
    font-size: 12px;
    color: var(--at-faint);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--at-line);
  }

  .artifact-scope .diagram-body { padding: 24px; }

  .artifact-scope .diagram-controls {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .artifact-scope .diagram-controls button {
    font-family: var(--at-font-mono);
    font-size: 12px;
    padding: 6px 14px;
    border: 1px solid var(--at-line);
    border-radius: 6px;
    background: var(--at-bg);
    color: var(--at-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .artifact-scope .diagram-controls button:hover { border-color: var(--at-accent); color: var(--at-accent); }
  .artifact-scope .diagram-controls button.active { background: var(--at-accent-soft); border-color: var(--at-accent); color: var(--at-accent); font-weight: 600; }

  .artifact-scope .compare-table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
  }

  .artifact-scope .compare-table th {
    background: var(--at-surface);
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    font-size: 13px;
    border-bottom: 2px solid var(--at-line);
  }

  .artifact-scope .compare-table td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--at-line);
    vertical-align: top;
  }

  .artifact-scope .compare-table tr:last-child td { border-bottom: none; }

  .artifact-scope .metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 28px 0;
  }

  .artifact-scope .metric {
    background: var(--at-surface);
    border-radius: 10px;
    padding: 18px 20px;
  }

  .artifact-scope .metric-label {
    font-size: 12px;
    color: var(--at-faint);
    font-family: var(--at-font-mono);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .artifact-scope .metric-value {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  }

  .artifact-scope .metric-value.teal { color: var(--at-green); }
  .artifact-scope .metric-value.accent { color: var(--at-accent); }
  .artifact-scope .metric-value.purple { color: var(--at-violet); }

  .artifact-scope .kv-diagram { position: relative; min-height: 320px; }

  .artifact-scope .kv-row { display: flex; gap: 4px; margin-bottom: 8px; align-items: center; }

  .artifact-scope .kv-label {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-faint);
    min-width: 70px;
    text-align: right;
    padding-right: 10px;
  }

  .artifact-scope .kv-token {
    height: 28px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-bg);
    flex: 1;
    max-width: 80px;
    transition: all 0.3s;
    opacity: 0;
    transform: translateY(4px);
  }

  .artifact-scope .kv-token.cached { background: var(--at-green); }
  .artifact-scope .kv-token.new { background: var(--at-accent); }
  .artifact-scope .kv-token.skip { background: var(--at-surface); color: var(--at-faint); border: 1px dashed var(--at-line); }
  .artifact-scope .kv-token.visible { opacity: 1; transform: translateY(0); }

  .artifact-scope .route-viz { display: flex; flex-direction: column; gap: 16px; }

  .artifact-scope .route-tier { display: flex; gap: 12px; align-items: center; }

  .artifact-scope .route-tier-label {
    font-family: var(--at-font-mono);
    font-size: 11px;
    color: var(--at-faint);
    min-width: 90px;
    text-align: right;
  }

  .artifact-scope .server-box {
    flex: 1;
    max-width: 140px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--at-line);
    text-align: center;
    font-size: 12px;
    transition: all 0.3s;
  }

  .artifact-scope .server-box.hit { border-color: var(--at-green); background: var(--at-green-soft); }
  .artifact-scope .server-box.miss { border-color: var(--at-accent); background: var(--at-accent-soft); }
  .artifact-scope .server-box.idle { opacity: 0.4; }

  .artifact-scope .server-name { font-weight: 600; margin-bottom: 4px; }
  .artifact-scope .server-status { font-family: var(--at-font-mono); font-size: 11px; color: var(--at-faint); }

  .artifact-scope .flow-arrow {
    width: 2px;
    height: 40px;
    background: repeating-linear-gradient(to bottom, var(--at-accent) 0, var(--at-accent) 8px, transparent 8px, transparent 16px);
    margin: 0 auto;
    animation: flowDown 1s linear infinite;
  }

  @keyframes flowDown {
    from { background-position: 0 0; }
    to { background-position: 0 16px; }
  }

  .artifact-scope .price-table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
  }

  .artifact-scope .price-table th {
    background: var(--at-surface);
    padding: 10px 14px;
    text-align: right;
    font-weight: 600;
    font-family: var(--at-font-mono);
    font-size: 12px;
  }

  .artifact-scope .price-table th:first-child { text-align: left; }

  .artifact-scope .price-table td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--at-line);
    text-align: right;
    font-family: var(--at-font-mono);
    font-size: 13px;
  }

  .artifact-scope .price-table td:first-child { text-align: left; font-family: var(--at-font-body); font-size: 14px; }

  .artifact-scope .discount { color: var(--at-green); font-weight: 600; }

  .artifact-scope .blog-footer {
    border-top: 1px solid var(--at-line);
    padding: 48px 0 80px;
    margin-top: 64px;
  }

  .artifact-scope .references { font-size: 14px; color: var(--at-muted); }
  .artifact-scope .references h3 { font-size: 16px; margin-bottom: 16px; }
  .artifact-scope .references ol { padding-left: 24px; }
  .artifact-scope .references li { margin-bottom: 10px; line-height: 1.5; }
  .artifact-scope .references li a { font-size: 13px; }

  .artifact-scope .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .artifact-scope .fade-in.visible { opacity: 1; transform: translateY(0); }

  .artifact-scope .sdk-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
  }

  @media (max-width: 600px) {
    .artifact-scope .sdk-comparison { grid-template-columns: 1fr; }
    .artifact-scope .hero h1 { font-size: 32px; }
  }

  .artifact-scope .sdk-card {
    border-radius: 10px;
    padding: 20px;
    border: 1px solid var(--at-line);
  }

  .artifact-scope .sdk-card h4 {
    font-family: var(--at-font-mono);
    font-size: 13px;
    margin-bottom: 12px;
  }

  .artifact-scope .sdk-card ul { list-style: none; font-size: 14px; }

  .artifact-scope .sdk-card li { margin-bottom: 6px; padding-left: 18px; position: relative; }
  .artifact-scope .sdk-card li::before { content: ''; position: absolute; left: 0; top: 8px; width: 8px; height: 8px; border-radius: 50%; }
  .artifact-scope .sdk-card.yes li::before { background: var(--at-green); }
  .artifact-scope .sdk-card.no li::before { background: var(--at-accent); }

  .artifact-scope strong { font-weight: 600; }
  .artifact-scope em { font-style: italic; }
`;

export const html = `
<div class="page">

<!-- HERO -->
<header class="hero">
  <div class="hero-eyebrow">Deep Dive</div>
  <h1>OpenAI Prompt Caching: <br><em>From KV Tensors to Production Optimization</em></h1>
  <p class="hero-subtitle">A comprehensive guide to how prompt caching works under the hood, how to measure it, and a tactical playbook for maximizing cache hits — including Agents SDK integration.</p>
  <div class="hero-meta">
    <span>April 2026</span>
    <span>~18 min read</span>
  </div>
</header>

<!-- TOC -->
<nav class="toc">
  <div class="toc-title">Contents</div>
  <ol>
    <li><a href="#why-it-matters">Why prompt caching matters</a></li>
    <li><a href="#under-the-hood">Under the hood: KV tensors &amp; the prefill phase</a></li>
    <li><a href="#routing">How routing works without a cache key</a></li>
    <li><a href="#prompt-cache-key">The <code>prompt_cache_key</code> parameter</a></li>
    <li><a href="#retention">In-memory vs extended retention</a></li>
    <li><a href="#playbook">Tactical playbook: 6 optimizations</a></li>
    <li><a href="#agents-sdk">Setting it up in the Agents SDK</a></li>
    <li><a href="#troubleshooting">Troubleshooting &amp; cache busters</a></li>
  </ol>
</nav>

<!-- SECTION 1 -->
<section id="why-it-matters" class="fade-in">
<h2>1. Why prompt caching matters</h2>

<p>Every API request to an LLM starts with a <strong>prefill phase</strong> — the model processes all your input tokens through every transformer layer to generate the internal representations it needs before producing the first output token. For a 150K-token conversation, this prefill is the dominant cost in both latency and compute.</p>

<p>Prompt caching lets the system skip this prefill for tokens it has already processed. When a request starts with the same prefix as a recent request, OpenAI routes it to a server that already computed those tokens and reuses the stored result. <a href="https://developers.openai.com/api/docs/guides/prompt-caching" class="ref">docs</a></p>

<div class="metrics">
  <div class="metric">
    <div class="metric-label">TTFT reduction</div>
    <div class="metric-value teal">Up to 80%</div>
  </div>
  <div class="metric">
    <div class="metric-label">Input cost savings</div>
    <div class="metric-value accent">Up to 90%</div>
  </div>
  <div class="metric">
    <div class="metric-label">Min prefix to cache</div>
    <div class="metric-value purple">1,024 tokens</div>
  </div>
</div>

<p>The cost savings vary by model family. Newer models offer steeper discounts as OpenAI's inference stack has become more efficient:</p>

<table class="price-table">
  <thead>
    <tr><th>Model</th><th>Input / 1M tokens</th><th>Cached / 1M tokens</th><th>Discount</th></tr>
  </thead>
  <tbody>
    <tr><td>GPT-4o</td><td>$2.50</td><td>$1.25</td><td class="discount">50%</td></tr>
    <tr><td>gpt-4.1</td><td>$2.00</td><td>$0.50</td><td class="discount">75%</td></tr>
    <tr><td>gpt-5-mini</td><td>$0.25</td><td>$0.025</td><td class="discount">90%</td></tr>
    <tr><td>gpt-5-nano</td><td>$0.05</td><td>$0.005</td><td class="discount">90%</td></tr>
    <tr><td>gpt-5.2</td><td>$1.75</td><td>$0.175</td><td class="discount">90%</td></tr>
    <tr><td>gpt-5.1-codex-mini</td><td>$1.50</td><td>$0.15</td><td class="discount">90%</td></tr>
    <tr><td>gpt-realtime (audio)</td><td>$32.00</td><td>$0.40</td><td class="discount">98.75%</td></tr>
  </tbody>
</table>

<p>The latency impact scales with prefix length. For short prompts (~1,024 tokens), cached requests are ~7% faster. At 150K+ tokens, caching delivers ~67% faster time-to-first-token. <a href="https://developers.openai.com/cookbook/examples/prompt_caching_201" class="ref">cookbook</a></p>

</section>

<!-- SECTION 2 -->
<section id="under-the-hood" class="fade-in">
<h2>2. Under the hood: KV tensors &amp; the prefill phase</h2>

<p>To understand caching, you need to understand what the model computes during prefill and what gets stored.</p>

<p>At each of the model's ~100+ attention layers, every input token gets projected into two vectors:</p>

<ul style="margin: 16px 0 24px 24px; line-height: 2;">
  <li><strong>Key (K)</strong> — represents "what information this token offers"</li>
  <li><strong>Value (V)</strong> — represents "what content this token contributes"</li>
</ul>

<p>These projections happen per attention head (e.g. 96 heads) per layer (e.g. 96 layers). For a 2,000-token prompt, that's roughly:</p>

<pre><code><span class="cm">// Approximate KV cache size calculation</span>
<span class="num">2000</span> tokens × <span class="num">96</span> layers × <span class="num">96</span> heads × <span class="num">128</span> dims × <span class="num">2</span> (K+V) × <span class="num">2</span> bytes (fp16)
≈ <span class="num">9 GB</span> <span class="kw">of tensor data in GPU VRAM</span></code></pre>

<p>These KV tensors are <em>not</em> your prompt text. They are pure floating-point numbers — intermediate representations internal to the model. No raw text or multimodal inputs are ever stored in the cache, regardless of retention policy. <a href="https://developers.openai.com/api/docs/guides/prompt-caching" class="ref">docs</a></p>

<div class="callout insight">
  <div class="callout-label">Key insight</div>
  When a second request arrives with the same prefix, the model doesn't need to recompute how tokens relate to each other — the attention "groundwork" has already been encoded into those cached K and V tensors. The model simply builds on top of the existing attention state for the new tokens at the end.
</div>

<!-- Interactive: Prefill vs Cached stepper -->
<div class="diagram-container">
  <div class="diagram-header">
    <span>Prefill: first request vs cached follow-up</span>
  </div>
  <div class="diagram-body">
    <div style="margin-bottom:20px;">
      <div style="font-family:var(--at-font-mono);font-size:11px;color:var(--at-faint);margin-bottom:6px;">REQUEST 1 — Full prefill (3,000 tokens)</div>
      <div style="display:flex;gap:0;border-radius:6px;overflow:hidden;">
        <div style="flex:1;height:32px;background:var(--at-accent);display:flex;align-items:center;justify-content:center;color:var(--at-bg);font-size:12px;font-family:var(--at-font-mono);">Computing all 3,000 tokens — slow TTFT</div>
      </div>
    </div>
    <div style="font-family:var(--at-font-mono);font-size:11px;color:var(--at-faint);text-align:center;margin:8px 0;">↓ KV tensors cached in GPU VRAM ↓</div>
    <div style="margin-bottom:20px;">
      <div style="font-family:var(--at-font-mono);font-size:11px;color:var(--at-faint);margin-bottom:6px;">REQUEST 2 — Cache hit (3,200 tokens total, 2,816 cached)</div>
      <div style="display:flex;gap:2px;border-radius:6px;overflow:hidden;">
        <div style="flex:88;height:32px;background:var(--at-green);display:flex;align-items:center;justify-content:center;color:var(--at-bg);font-size:12px;font-family:var(--at-font-mono);">Cached: 2,816 tokens — skipped</div>
        <div style="flex:12;height:32px;background:var(--at-accent);display:flex;align-items:center;justify-content:center;color:var(--at-bg);font-size:12px;font-family:var(--at-font-mono);">New: 384</div>
      </div>
    </div>
    <pre style="margin:12px 0 0;font-size:12px;"><code><span class="str">"usage"</span>: {
  <span class="str">"prompt_tokens"</span>: <span class="num">3200</span>,
  <span class="str">"prompt_tokens_details"</span>: {
    <span class="str">"cached_tokens"</span>: <span class="num">2816</span>  <span class="cm">// 88% cache hit — only 384 tokens need prefill</span>
  }
}</code></pre>
  </div>
</div>

</section>

<!-- SECTION 3 -->
<section id="routing" class="fade-in">
<h2>3. How routing works without a cache key</h2>

<p>The question that matters: with hundreds of GPU servers, how does OpenAI know which one has the cached KV tensors for your prefix?</p>

<p>The answer is <strong>consistent hashing on the first ~256 tokens</strong>. <a href="https://developers.openai.com/api/docs/guides/prompt-caching" class="ref">docs</a></p>

<h3>The routing algorithm</h3>

<p>When your request arrives at the load balancer:</p>

<ol style="margin: 16px 0 24px 24px; line-height: 2.2;">
  <li><strong>Extract prefix</strong> — tokenize the prompt and grab the first ~256 tokens</li>
  <li><strong>Compute hash</strong> — hash those token IDs into a fixed digest (e.g. <code>hash(token_ids[0:256]) → 0x7A3F</code>)</li>
  <li><strong>Consistent hash routing</strong> — map the hash to a specific GPU server in the fleet (same concept as DynamoDB or Cassandra partition routing)</li>
  <li><strong>Cache lookup</strong> — on that server, check if KV tensors exist for this prefix. Hit → reuse. Miss → full compute, then cache.</li>
</ol>

<p>Two requests with byte-identical first 256 tokens always produce the same hash, so they always route to the same server. One character difference in those first 256 tokens = completely different hash = different server = cache miss.</p>

<div class="callout warning">
  <div class="callout-label">Why this is "best-effort"</div>
  <strong>Collision:</strong> Different prompts can hash to the same server, competing for VRAM space and evicting each other's caches.<br>
  <strong>Fleet changes:</strong> Server rebalancing under load can shift which server a hash maps to.<br>
  <strong>Ambiguity:</strong> If many different agents share similar first 256 tokens (common system prompt prefix), the load balancer can't distinguish them — they all route identically, causing VRAM contention.
</div>

</section>

<!-- SECTION 4 -->
<section id="prompt-cache-key" class="fade-in">
<h2>4. The <code>prompt_cache_key</code> parameter</h2>

<p>This is where you take control. The <code>prompt_cache_key</code> is an optional string you send with your API request. It gets combined with the 256-token prefix hash to create a composite routing key:</p>

<pre><code><span class="cm">// Without cache key (default)</span>
routing_key = <span class="fn">hash</span>(first_256_tokens)

<span class="cm">// With cache key</span>
routing_key = <span class="fn">hash</span>(first_256_tokens, prompt_cache_key)</code></pre>

<p>The analogy from the OpenAI cookbook is precise: <strong>think of it as a database shard key</strong>. The same tradeoffs apply. <a href="https://developers.openai.com/cookbook/examples/prompt_caching_201" class="ref">cookbook</a></p>

<!-- Interactive routing diagram -->
<div class="diagram-container">
  <div class="diagram-header">
    <span>Interactive: Routing comparison</span>
    <span>Click scenarios</span>
  </div>
  <div class="diagram-body">
    <div class="diagram-controls">
      <button class="active" onclick="setRouteScenario('none', this)">No cache key</button>
      <button onclick="setRouteScenario('good', this)">With cache key</button>
      <button onclick="setRouteScenario('overflow', this)">Overflow (&gt;15 RPM)</button>
    </div>
    <svg id="route-svg" width="100%" viewBox="0 0 600 300" style="display:block;"></svg>
    <p id="route-explanation" style="font-size:13px;color:var(--at-muted);margin-top:16px;font-family:var(--at-font-mono);"></p>
  </div>
</div>

<h3>Granularity: the Goldilocks problem</h3>

<table class="compare-table">
  <thead>
    <tr><th>Strategy</th><th>Key granularity</th><th>Effect</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Too coarse</strong></td>
      <td>One key for entire app</td>
      <td>All traffic funnels to one server. Exceeds ~15 RPM → overflow to cold machines. Cache thrashing.</td>
    </tr>
    <tr>
      <td><strong>Too fine</strong></td>
      <td>Unique key per request</td>
      <td>Same as no key at all. Traffic scatters uniformly, zero cache reuse.</td>
    </tr>
    <tr>
      <td style="color:var(--at-green);font-weight:600;">Just right</td>
      <td>Per-conversation or user-bucket</td>
      <td>~15 RPM per key. Server builds KV cache once, subsequent requests reuse it. One customer went from 60% → 87% hit rate.</td>
    </tr>
  </tbody>
</table>

<div class="callout tip">
  <div class="callout-label">Practical bucketing algorithm</div>
  For multi-tenant apps: <code>cache_key = f"agent-{hash(user_id) % num_buckets}"</code> where you pick <code>num_buckets</code> so each bucket sees ~15 RPM. For single-user conversational agents: per-conversation keys work well.
</div>

</section>

<!-- SECTION 5 -->
<section id="retention" class="fade-in">
<h2>5. In-memory vs extended retention</h2>

<p>"In-memory" refers to <strong>GPU VRAM</strong>, not your application's memory. The KV tensors live in volatile memory on the specific GPU that processed your request.</p>

<div class="sdk-comparison">
  <div class="sdk-card yes">
    <h4 style="color:var(--at-green);">in_memory (default)</h4>
    <ul>
      <li>KV tensors live only in GPU VRAM</li>
      <li>TTL: 5–10 min idle, max 1 hour</li>
      <li>Evicted when VRAM is needed</li>
      <li>No disk writes — ZDR compatible</li>
      <li>Automatic, no config needed</li>
    </ul>
  </div>
  <div class="sdk-card no" style="border-color:var(--at-amber);">
    <h4 style="color:var(--at-amber);">24h (extended)</h4>
    <ul style="list-style:none;">
      <li style="padding-left:18px;position:relative;">
        <span style="position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:50%;background:var(--at-amber);"></span>
        VRAM + overflow to GPU-local SSD
      </li>
      <li style="padding-left:18px;position:relative;">
        <span style="position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:50%;background:var(--at-amber);"></span>
        TTL: up to 24 hours
      </li>
      <li style="padding-left:18px;position:relative;">
        <span style="position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:50%;background:var(--at-amber);"></span>
        Survives VRAM pressure
      </li>
      <li style="padding-left:18px;position:relative;">
        <span style="position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:50%;background:var(--at-accent);"></span>
        KV tensors written to disk — not ZDR-eligible
      </li>
      <li style="padding-left:18px;position:relative;">
        <span style="position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:50%;background:var(--at-amber);"></span>
        Opt-in: <code>prompt_cache_retention="24h"</code>
      </li>
    </ul>
  </div>
</div>

<p>In both modes, only numerical KV tensors are cached — never raw prompt text or multimodal inputs. Even with extended retention, the original content exists only in volatile memory during the request. <a href="https://developers.openai.com/api/docs/guides/prompt-caching" class="ref">docs</a></p>

</section>

<!-- SECTION 6 -->
<section id="playbook" class="fade-in">
<h2>6. Tactical playbook: 6 optimizations</h2>

<h3>① Exceed 1,024 tokens</h3>
<p>Counterintuitively, padding your prompt past the 1,024-token threshold can <em>save</em> money. A 900-token prompt never caches. A 1,100-token prompt with a 50% cache rate saves 33% on token costs. At 70% cache rate, you save 55%.</p>

<h3>② Stabilize the prefix</h3>
<p>Put static content first: instructions → tool definitions → schemas → examples → reference docs. Dynamic content (user input, timestamps, new conversation turns) goes at the end. A common mistake: including a timestamp or request ID early in the prompt for debugging — move that to the <code>metadata</code> parameter instead. <a href="https://developers.openai.com/cookbook/examples/prompt_caching_201" class="ref">cookbook</a></p>

<h3>③ Keep tools and schemas identical</h3>
<p>Tools get injected <em>before</em> developer instructions in the prefix. Any change to tool order, schema keys, or instructions invalidates the cache. Use <code>allowed_tools</code> to restrict per-request without changing the <code>tools</code> array:</p>

<pre><code><span class="cm"># Static tools array stays in the cached prefix</span>
tools = [get_weather_def, get_location_def, calendar_def, ...]

<span class="cm"># Per-call restriction — doesn't touch the prefix</span>
allowed_tools = {<span class="str">"mode"</span>: <span class="str">"auto"</span>, <span class="str">"tools"</span>: [<span class="str">"get_weather"</span>, <span class="str">"get_location"</span>]}</code></pre>

<h3>④ Use <code>prompt_cache_key</code> for routing stickiness</h3>
<p>As covered in section 4. Keep each prefix + key combination below ~15 RPM. Hash user IDs into buckets to hit that target. <a href="https://developers.openai.com/api/docs/guides/prompt-caching" class="ref">docs</a></p>

<h3>⑤ Use Responses API over Chat Completions</h3>
<p>OpenAI's internal benchmarks show 40–80% better cache utilization with the Responses API compared to Chat Completions. The reason: the Responses API persists chain-of-thought tokens between turns via <code>previous_response_id</code>. Chat Completions drops reasoning tokens entirely, losing cache continuity. <a href="https://developers.openai.com/cookbook/examples/responses_api/reasoning_items#caching" class="ref">guide</a></p>

<h3>⑥ Be thoughtful with context engineering</h3>
<p>Compaction, summarization, and truncation all mutate the prefix — breaking the cache. Use evals to find the right compaction threshold that balances intelligence gains against cache cost savings. For agents using native compaction: <a href="https://developers.openai.com/api/docs/guides/compaction" class="ref">docs</a></p>

<pre><code>response = client.responses.create(
    model=<span class="str">"gpt-5.2-codex"</span>,
    input=conversation,
    store=<span class="kw">False</span>,
    context_management=[{<span class="str">"type"</span>: <span class="str">"compaction"</span>, <span class="str">"compact_threshold"</span>: <span class="num">100000</span>}],
)</code></pre>

</section>

<!-- SECTION 7 -->
<section id="agents-sdk" class="fade-in">
<h2>7. Setting it up in the Agents SDK</h2>

<p>The OpenAI Agents SDK's <code>ModelSettings</code> dataclass is where you configure caching. Here's what the source code reveals: <a href="https://openai.github.io/openai-agents-python/ref/model_settings/" class="ref">SDK ref</a></p>

<div class="callout warning">
  <div class="callout-label">Important: No defaults set</div>
  The Agents SDK does <strong>not</strong> set default values for <code>prompt_cache_key</code> or <code>prompt_cache_retention</code>. The default <code>ModelSettings</code> only configures <code>reasoning</code> and <code>verbosity</code>. You must explicitly opt in to caching optimizations.
</div>

<h3><code>prompt_cache_retention</code> — first-class field</h3>
<p>Directly available on <code>ModelSettings</code>. Set it to <code>"24h"</code> for extended caching:</p>

<pre><code><span class="kw">from</span> agents <span class="kw">import</span> Agent, ModelSettings

agent = Agent(
    name=<span class="str">"Energy Agent"</span>,
    instructions=LONG_SYSTEM_PROMPT,
    model=<span class="str">"gpt-5.1"</span>,
    model_settings=ModelSettings(
        prompt_cache_retention=<span class="str">"24h"</span>,  <span class="cm"># First-class field</span>
        store=<span class="kw">True</span>,
    ),
)</code></pre>

<h3><code>prompt_cache_key</code> — via <code>extra_args</code></h3>
<p>Not yet a first-class field. Use <code>extra_args</code> to pass it through to the API: <a href="https://openai.github.io/openai-agents-python/models/" class="ref">SDK models</a></p>

<pre><code>agent = Agent(
    name=<span class="str">"Energy Agent"</span>,
    instructions=LONG_SYSTEM_PROMPT,
    model=<span class="str">"gpt-5.1"</span>,
    model_settings=ModelSettings(
        prompt_cache_retention=<span class="str">"24h"</span>,
        store=<span class="kw">True</span>,
        extra_args={
            <span class="str">"prompt_cache_key"</span>: <span class="str">f"energy-{conversation_id}"</span>,
        },
    ),
)</code></pre>

<h3>Dynamic cache keys with <code>clone()</code></h3>
<p>For multi-agent architectures where you want per-conversation cache keys:</p>

<pre><code><span class="cm"># Define base agent once (static tools + instructions)</span>
base_agent = Agent(
    name=<span class="str">"Energy Agent"</span>,
    instructions=SYSTEM_PROMPT,  <span class="cm"># 1024+ tokens, static</span>
    tools=[query_sensors, get_report, analyze_consumption],
    model=<span class="str">"gpt-5.1"</span>,
    model_settings=ModelSettings(
        prompt_cache_retention=<span class="str">"24h"</span>,
        store=<span class="kw">True</span>,
    ),
)

<span class="cm"># Per conversation: clone with specific cache key</span>
<span class="kw">async def</span> <span class="fn">run_query</span>(conv_id: <span class="kw">str</span>, user_input: <span class="kw">str</span>):
    agent = base_agent.clone(
        model_settings=ModelSettings(
            prompt_cache_retention=<span class="str">"24h"</span>,
            store=<span class="kw">True</span>,
            extra_args={<span class="str">"prompt_cache_key"</span>: <span class="str">f"energy-{conv_id}"</span>},
        ),
    )
    result = <span class="kw">await</span> Runner.run(agent, user_input)
    <span class="kw">return</span> result.final_output</code></pre>

<h3>Direct Responses API (without Agents SDK)</h3>

<pre><code><span class="kw">from</span> openai <span class="kw">import</span> OpenAI
client = OpenAI()

response = client.responses.create(
    model=<span class="str">"gpt-5.1"</span>,
    prompt_cache_key=<span class="str">"conversation-abc123"</span>,
    prompt_cache_retention=<span class="str">"24h"</span>,
    input=[
        {<span class="str">"role"</span>: <span class="str">"developer"</span>, <span class="str">"content"</span>: SYSTEM_PROMPT},
        {<span class="str">"role"</span>: <span class="str">"user"</span>, <span class="str">"content"</span>: <span class="str">"What is the energy consumption?"</span>}
    ]
)

<span class="cm"># Check cache performance</span>
usage = response.usage
<span class="fn">print</span>(<span class="str">f"Cached: {usage.prompt_tokens_details.cached_tokens}"</span>)
<span class="fn">print</span>(<span class="str">f"Total:  {usage.prompt_tokens}"</span>)</code></pre>

</section>

<!-- SECTION 8 -->
<section id="troubleshooting" class="fade-in">
<h2>8. Troubleshooting &amp; cache busters</h2>

<p>If your <code>cached_tokens</code> is consistently zero, check these common causes:</p>

<table class="compare-table">
  <thead>
    <tr><th>Cache buster</th><th>Why it breaks</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Prompt under 1,024 tokens</td>
      <td>Below the minimum threshold</td>
      <td>Pad with additional instructions or examples</td>
    </tr>
    <tr>
      <td>Timestamp in system prompt</td>
      <td>Changes every request, breaks prefix match</td>
      <td>Move to <code>metadata</code> parameter</td>
    </tr>
    <tr>
      <td>Tool/schema reordering</td>
      <td>Tools are injected before instructions in prefix</td>
      <td>Keep <code>tools</code> array identical; use <code>allowed_tools</code></td>
    </tr>
    <tr>
      <td>Compaction/summarization</td>
      <td>Mutates earlier conversation turns</td>
      <td>Tune compaction threshold with evals</td>
    </tr>
    <tr>
      <td>Changing <code>reasoning</code> effort</td>
      <td>Reasoning config is part of system prompt</td>
      <td>Keep reasoning effort consistent per agent</td>
    </tr>
    <tr>
      <td>Chat Completions + reasoning</td>
      <td>Drops chain-of-thought tokens between turns</td>
      <td>Switch to Responses API with <code>previous_response_id</code></td>
    </tr>
    <tr>
      <td>Cache expiration</td>
      <td>Too much time between requests</td>
      <td>Use <code>prompt_cache_retention="24h"</code></td>
    </tr>
    <tr>
      <td>&gt;15 RPM per key</td>
      <td>Overflow to additional cold machines</td>
      <td>Bucket users: <code>hash(user_id) % N</code></td>
    </tr>
  </tbody>
</table>

<div class="callout tip">
  <div class="callout-label">Monitoring</div>
  Track <code>cached_tokens</code> in every response's <code>usage.prompt_tokens_details</code> field, or use the <a href="https://platform.openai.com/usage">OpenAI Usage Dashboard</a> to filter by cached vs uncached tokens over time.
</div>

</section>

<!-- FOOTER / REFERENCES -->
<footer class="blog-footer">
  <div class="references">
    <h3>References</h3>
    <ol>
      <li>OpenAI — <a href="https://developers.openai.com/api/docs/guides/prompt-caching">Prompt Caching Guide</a> — Official API documentation on caching mechanics, retention policies, and best practices.</li>
      <li>OpenAI — <a href="https://developers.openai.com/cookbook/examples/prompt_caching_201">Prompt Caching 201 Cookbook</a> — Advanced optimization guide including <code>prompt_cache_key</code>, Flex processing, and Realtime API caching.</li>
      <li>OpenAI — <a href="https://developers.openai.com/cookbook/examples/prompt_caching101">Prompt Caching 101 Cookbook</a> — Introduction to caching with code examples for tools and images.</li>
      <li>OpenAI — <a href="https://openai.github.io/openai-agents-python/models/">Agents SDK — Models documentation</a> — <code>ModelSettings</code> configuration including <code>prompt_cache_retention</code> and <code>extra_args</code>.</li>
      <li>OpenAI — <a href="https://openai.github.io/openai-agents-python/ref/model_settings/">Agents SDK — ModelSettings API reference</a> — Full field reference for agent model configuration.</li>
      <li>OpenAI — <a href="https://developers.openai.com/api/docs/guides/compaction">Compaction Guide</a> — Context management and its interaction with caching.</li>
      <li>OpenAI — <a href="https://developers.openai.com/cookbook/examples/responses_api/reasoning_items#caching">Reasoning Items &amp; Caching</a> — Why Responses API achieves better cache utilization than Chat Completions.</li>
      <li>OpenAI — <a href="https://openai.com/api/pricing/">API Pricing</a> — Current pricing including cached token discounts.</li>
      <li>OpenAI — <a href="https://github.com/openai/openai-agents-python/blob/main/src/agents/models/default_models.py">Agents SDK source: default_models.py</a> — Source code confirming no default caching settings.</li>
    </ol>
  </div>
</footer>

</div>
`;

export const script = `
// Scroll fade-in
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.artifact-scope .fade-in').forEach(function(el) { observer.observe(el); });

// Routing diagram
var routeScenarios = {
  none: {
    requests: [
      {label: 'A1', color: '--at-violet', x: 30},
      {label: 'A2', color: '--at-violet', x: 110},
      {label: 'B1', color: '--at-green', x: 190},
      {label: 'B2', color: '--at-green', x: 270}
    ],
    servers: [
      {name: 'GPU 1', status: 'A1+B1 KV', cls: 'miss', x: 60},
      {name: 'GPU 2', status: 'A2+B2 KV', cls: 'miss', x: 250},
      {name: 'GPU 3', status: 'empty', cls: 'idle', x: 440}
    ],
    lines: [
      {from: 0, to: 0, color: '--at-violet', dash: false},
      {from: 1, to: 1, color: '--at-violet', dash: false},
      {from: 2, to: 0, color: '--at-green', dash: false},
      {from: 3, to: 1, color: '--at-green', dash: false}
    ],
    explanation: 'Round-robin routing scatters requests across servers. Each GPU gets a mix of prefix A and B. No KV reuse — every request computes from scratch. ~0% cache hit rate.'
  },
  good: {
    requests: [
      {label: 'A1', color: '--at-violet', x: 30},
      {label: 'A2', color: '--at-violet', x: 110},
      {label: 'B1', color: '--at-green', x: 190},
      {label: 'B2', color: '--at-green', x: 270}
    ],
    servers: [
      {name: 'GPU 1', status: 'A KV (reused!)', cls: 'hit', x: 60},
      {name: 'GPU 2', status: 'B KV (reused!)', cls: 'hit', x: 250},
      {name: 'GPU 3', status: 'empty', cls: 'idle', x: 440}
    ],
    lines: [
      {from: 0, to: 0, color: '--at-violet', dash: false},
      {from: 1, to: 0, color: '--at-violet', dash: false},
      {from: 2, to: 1, color: '--at-green', dash: false},
      {from: 3, to: 1, color: '--at-green', dash: false}
    ],
    explanation: "prompt_cache_key groups same-prefix traffic to the same server. GPU 1 reuses prefix A's KV cache for both A1 and A2. High hit rate. One customer: 60% to 87%."
  },
  overflow: {
    requests: [
      {label: 'A1', color: '--at-violet', x: 30},
      {label: 'A2', color: '--at-violet', x: 110},
      {label: 'A3', color: '--at-accent', x: 190},
      {label: 'B1', color: '--at-green', x: 270}
    ],
    servers: [
      {name: 'GPU 1', status: 'A KV (reused)', cls: 'hit', x: 60},
      {name: 'GPU 2', status: 'B KV', cls: 'hit', x: 250},
      {name: 'GPU 3', status: 'A KV (cold!)', cls: 'miss', x: 440}
    ],
    lines: [
      {from: 0, to: 0, color: '--at-violet', dash: false},
      {from: 1, to: 0, color: '--at-violet', dash: false},
      {from: 2, to: 2, color: '--at-accent', dash: true},
      {from: 3, to: 1, color: '--at-green', dash: false}
    ],
    explanation: 'Over ~15 RPM per prefix+key, A3 spills to GPU 3 — cold start, cache miss. The dashed line shows the overflow. Fix: hash user IDs into buckets to stay near 15 RPM.'
  }
};

function setRouteScenario(name, btn) {
  document.querySelectorAll('.artifact-scope .diagram-controls button').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  var s = routeScenarios[name];
  var svg = document.getElementById('route-svg');
  var cs = getComputedStyle(document.querySelector('.artifact-scope'));
  function tok(n) { return cs.getPropertyValue(n).trim(); }
  var textColor = tok('--at-text');
  var mutedColor = tok('--at-muted');
  var borderColor = tok('--at-line');
  var hitBg = tok('--at-green-soft');
  var hitBorder = tok('--at-green');
  var missBg = tok('--at-accent-soft');
  var missBorder = tok('--at-accent');

  var html = '';
  var reqY = 44;
  var reqH = 32;
  var reqW = 60;
  var srvY = 200;
  var srvH = 56;
  var srvW = 140;

  html += '<text x="10" y="30" fill="' + mutedColor + '" font-family="monospace" font-size="11">Requests</text>';
  html += '<text x="10" y="220" fill="' + mutedColor + '" font-family="monospace" font-size="11">Servers</text>';

  s.requests.forEach(function(r, i) {
    var x = 80 + i * 80;
    r._cx = x + reqW / 2;
    r._by = reqY + reqH;
    html += '<rect x="' + x + '" y="' + reqY + '" width="' + reqW + '" height="' + reqH + '" rx="6" fill="' + tok(r.color) + '"/>';
    html += '<text x="' + (x + reqW / 2) + '" y="' + (reqY + reqH / 2 + 1) + '" text-anchor="middle" dominant-baseline="central" fill="' + tok('--at-bg') + '" font-family="monospace" font-size="12" font-weight="600">' + r.label + '</text>';
  });

  s.servers.forEach(function(srv, i) {
    var x = 20 + i * 190;
    srv._cx = x + srvW / 2;
    srv._ty = srvY;
    var bg, border;
    if (srv.cls === 'hit') { bg = hitBg; border = hitBorder; }
    else if (srv.cls === 'miss') { bg = missBg; border = missBorder; }
    else { bg = 'transparent'; border = borderColor; }
    var opAttr = srv.cls === 'idle' ? ' opacity="0.4"' : '';
    html += '<rect x="' + x + '" y="' + srvY + '" width="' + srvW + '" height="' + srvH + '" rx="8" fill="' + bg + '" stroke="' + border + '" stroke-width="1.5"' + opAttr + '/>';
    html += '<text x="' + (x + srvW / 2) + '" y="' + (srvY + 22) + '" text-anchor="middle" dominant-baseline="central" fill="' + textColor + '" font-family="sans-serif" font-size="13" font-weight="600">' + srv.name + '</text>';
    html += '<text x="' + (x + srvW / 2) + '" y="' + (srvY + 40) + '" text-anchor="middle" dominant-baseline="central" fill="' + mutedColor + '" font-family="monospace" font-size="10">' + srv.status + '</text>';
  });

  s.lines.forEach(function(line) {
    var req = s.requests[line.from];
    var srv = s.servers[line.to];
    var x1 = req._cx;
    var y1 = req._by + 2;
    var x2 = srv._cx;
    var y2 = srv._ty - 2;
    var mid = (y1 + y2) / 2;
    var dashAttr = line.dash ? ' stroke-dasharray="6 4"' : '';
    html += '<path d="M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + mid + ', ' + x2 + ' ' + mid + ', ' + x2 + ' ' + y2 + '" fill="none" stroke="' + tok(line.color) + '" stroke-width="2"' + dashAttr + ' opacity="0.7"/>';
    html += '<polygon points="' + (x2 - 4) + ',' + (y2 - 8) + ' ' + (x2 + 4) + ',' + (y2 - 8) + ' ' + x2 + ',' + y2 + '" fill="' + tok(line.color) + '" opacity="0.7"/>';
  });

  svg.innerHTML = html;
  document.getElementById('route-explanation').textContent = s.explanation;
}

setRouteScenario('none', document.querySelector('.artifact-scope .diagram-controls button'));
`;
