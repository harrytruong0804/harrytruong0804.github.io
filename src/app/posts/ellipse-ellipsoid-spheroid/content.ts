export const styles = `
  .artifact-scope{
    --bg:#fbfbfd; --surface:#ffffff; --ink:#15171a; --ink-soft:#3a4252;
    --muted:#6b7785; --line:#e3e6eb; --line-soft:#eef0f3;
    --accent:#2563eb; --accent-soft:#eff6ff;
    --good:#16a34a; --good-soft:#f0fdf4;
    --bad:#dc2626; --bad-soft:#fef2f2;
    --warn:#d97706; --warn-soft:#fffbeb;
    --purple:#7c3aed; --purple-soft:#f5f3ff;
    background:var(--bg);color:var(--ink);
    font:17px/1.7 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .artifact-scope *{box-sizing:border-box}

  /* ====== Standard topbar (matches site) ====== */
  .artifact-scope .topbar{
    border-bottom:1px solid var(--line);padding:14px 0;
    background:rgba(251,251,253,0.92);backdrop-filter:blur(8px);
    position:sticky;top:0;z-index:10}
  .artifact-scope .topbar-inner{
    display:flex;justify-content:space-between;align-items:center;
    max-width:880px;margin:0 auto;padding:0 24px}
  .artifact-scope .logo{
    font-family:"SF Mono",Menlo,Consolas,monospace;font-weight:600;font-size:14px;
    letter-spacing:.05em;color:var(--accent)}
  .artifact-scope .logo a{color:inherit;text-decoration:none;border:none}
  .artifact-scope .logo a:hover{opacity:.7}
  .artifact-scope .meta-tag{
    background:var(--accent-soft);border:1px solid #c7dafe;border-radius:999px;
    padding:3px 12px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:11px;
    letter-spacing:.1em;text-transform:uppercase;color:var(--accent)}

  .artifact-scope article{max-width:880px;margin:0 auto;padding:56px 24px 96px}
  .artifact-scope header.post-head{border-bottom:1px solid var(--line);padding-bottom:32px;margin-bottom:8px}
  .artifact-scope .eyebrow{color:var(--accent);font-size:13px;letter-spacing:1.5px;text-transform:uppercase;
    font-weight:700;margin-bottom:14px}
  .artifact-scope h1{font-size:38px;line-height:1.2;letter-spacing:-.5px;margin:0 0 16px;font-weight:800}
  .artifact-scope .lead{font-size:20px;line-height:1.55;color:var(--ink-soft);margin:0;font-weight:400}
  .artifact-scope .byline{color:var(--muted);font-size:14px;margin-top:18px}
  .artifact-scope h2{font-size:26px;margin:64px 0 14px;font-weight:800;letter-spacing:-.3px;
    display:flex;align-items:center;gap:14px}
  .artifact-scope h2 .step{flex:0 0 36px;height:36px;background:var(--accent);color:#fff;border-radius:10px;
    display:grid;place-items:center;font-size:15px;font-weight:700}
  .artifact-scope h3{font-size:19px;margin:32px 0 8px;font-weight:700;color:var(--ink)}
  .artifact-scope p{margin:14px 0;color:var(--ink-soft)}
  .artifact-scope p strong, .artifact-scope li strong{color:var(--ink);font-weight:700}
  .artifact-scope code{background:#f1f3f5;color:#14213d;padding:2px 6px;border-radius:4px;
    font-size:.92em;font-family:"SF Mono",Menlo,Consolas,monospace}
  .artifact-scope pre{background:#0f172a;color:#e2e8f0;padding:18px 22px;border-radius:10px;overflow-x:auto;
    font-family:"SF Mono",Menlo,Consolas,monospace;font-size:13.5px;line-height:1.6;margin:18px 0}
  .artifact-scope .figure{background:var(--surface);border:1px solid var(--line);border-radius:14px;
    padding:28px;margin:24px 0}
  .artifact-scope .figure-caption{color:var(--muted);font-size:13.5px;text-align:center;margin-top:16px;
    font-style:italic}
  .artifact-scope .callout{padding:16px 20px;border-radius:8px;margin:22px 0;
    background:var(--accent-soft);border:1px solid #c7dafe;border-left:4px solid var(--accent)}
  .artifact-scope .callout.warn{background:var(--warn-soft);border-color:#fcd34d;border-left-color:var(--warn)}
  .artifact-scope .callout.good{background:var(--good-soft);border-color:#bbf7d0;border-left-color:var(--good)}
  .artifact-scope .callout.bad{background:var(--bad-soft);border-color:#fecaca;border-left-color:var(--bad)}
  .artifact-scope .callout p:first-child{margin-top:0}
  .artifact-scope .callout p:last-child{margin-bottom:0}
  .artifact-scope .callout .title{display:block;color:var(--ink);font-weight:700;margin-bottom:6px;font-size:15px}
  .artifact-scope .grid{display:grid;gap:14px;margin:18px 0}
  .artifact-scope .g2{grid-template-columns:1fr 1fr}
  .artifact-scope .g3{grid-template-columns:1fr 1fr 1fr}
  .artifact-scope .g4{grid-template-columns:1fr 1fr 1fr 1fr}
  @media(max-width:720px){.artifact-scope .g2,.artifact-scope .g3,.artifact-scope .g4{grid-template-columns:1fr}}
  .artifact-scope .box{background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:18px}
  .artifact-scope .box h4{margin:0 0 8px;font-size:15px;color:var(--ink);font-weight:700}
  .artifact-scope .box p{margin:0;font-size:14.5px;line-height:1.55}
  .artifact-scope .box .icon{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;
    color:#fff;font-weight:800;font-size:14px;margin-bottom:10px}
  .artifact-scope .box .icon.blue{background:var(--accent)}
  .artifact-scope .box .icon.green{background:var(--good)}
  .artifact-scope .box .icon.red{background:var(--bad)}
  .artifact-scope .box .icon.amber{background:var(--warn)}
  .artifact-scope .box .icon.purple{background:var(--purple)}
  .artifact-scope .tag{display:inline-block;font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;
    letter-spacing:.5px}
  .artifact-scope .tag.good{background:var(--good-soft);color:var(--good);border:1px solid #bbf7d0}
  .artifact-scope .tag.bad{background:var(--bad-soft);color:var(--bad);border:1px solid #fecaca}
  .artifact-scope .tag.warn{background:var(--warn-soft);color:var(--warn);border:1px solid #fcd34d}
  .artifact-scope .tag.muted{background:#f1f3f5;color:var(--muted);border:1px solid var(--line)}
  .artifact-scope table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}
  .artifact-scope th,.artifact-scope td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top}
  .artifact-scope th{background:#f9fafb;color:var(--ink);font-weight:700;font-size:12px;letter-spacing:.4px;
    text-transform:uppercase}
  .artifact-scope td:first-child{font-weight:600;color:var(--ink)}
  .artifact-scope svg.diagram{width:100%;height:auto;display:block}
  .artifact-scope .toc{background:var(--surface);border:1px solid var(--line);border-radius:10px;
    padding:22px 26px;margin:32px 0}
  .artifact-scope .toc h3{margin:0 0 12px;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;
    color:var(--muted);font-weight:700}
  .artifact-scope .toc ol{margin:0;padding-left:22px;color:var(--ink-soft);line-height:1.9}
  .artifact-scope .toc a{color:var(--ink);text-decoration:none;border-bottom:1px solid transparent}
  .artifact-scope .toc a:hover{color:var(--accent);border-bottom-color:var(--accent)}
  .artifact-scope .mono{font-family:"SF Mono",Menlo,Consolas,monospace}
  .artifact-scope .kbd{background:#f9fafb;border:1px solid var(--line);border-radius:5px;padding:1px 6px;
    font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.85em;color:var(--ink)}
  .artifact-scope ul.clean{list-style:none;padding:0;margin:14px 0}
  .artifact-scope ul.clean li{padding:10px 0;border-bottom:1px solid var(--line-soft);color:var(--ink-soft)}
  .artifact-scope ul.clean li:last-child{border-bottom:none}
  .artifact-scope ul.clean li strong{color:var(--ink)}
  .artifact-scope .kicker{font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);
    font-weight:700;margin-bottom:6px}
  .artifact-scope .ascii{background:#f9fafb;border:1px solid var(--line);border-radius:10px;
    font-family:"SF Mono",Menlo,Consolas,monospace;font-size:13px;line-height:1.55;
    color:var(--ink);padding:18px 22px;white-space:pre;overflow-x:auto}
  .artifact-scope .ascii .c-acc{color:var(--accent);font-weight:700}
  .artifact-scope .ascii .c-muted{color:var(--muted)}
  .artifact-scope .ascii .c-good{color:var(--good);font-weight:700}
  .artifact-scope .ascii .c-bad{color:var(--bad);font-weight:700}

  /* ====== Footer (matches site) ====== */
  .artifact-scope .footer{max-width:880px;margin:64px auto 0;padding:24px;
    border-top:1px solid var(--line);color:var(--muted);font-size:13px;text-align:center}
  .artifact-scope .footer p{color:var(--muted);margin:0}
  .artifact-scope .footer .ornament{font-size:22px;color:var(--accent);margin-bottom:10px}
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">FIRST PRINCIPLES &mdash; GEODESY</span>
  </div>
</div>

<article>

<header class="post-head">
  <div class="eyebrow">First Principles &middot; H&igrave;nh học &amp; Trắc địa</div>
  <h1>Ellipse, Ellipsoid, Spheroid &mdash; v&agrave; v&igrave; sao WGS84 lại l&agrave; &ldquo;ellipsoid&rdquo;?</h1>
  <p class="lead">Ba c&aacute;i t&ecirc;n gần giống nhau, rất dễ lẫn. Nhưng chỉ cần một &yacute; tưởng gốc &mdash; <strong>th&ecirc;m một chiều</strong> v&agrave; <strong>đếm số b&aacute;n trục độc lập</strong> &mdash; l&agrave; ph&acirc;n biệt được sạch sẽ cả ba, v&agrave; hiểu lu&ocirc;n v&igrave; sao d&acirc;n GIS gọi Tr&aacute;i Đất l&agrave; &ldquo;WGS84 ellipsoid&rdquo; chứ kh&ocirc;ng phải &ldquo;spheroid&rdquo;.</p>
  <p class="byline">First Principles &middot; ~7 ph&uacute;t đọc</p>
</header>

<div class="toc">
  <h3>Nội dung b&agrave;i n&agrave;y</h3>
  <ol>
    <li><a href="#dimension">Ellipse vs Ellipsoid: 2D so với 3D</a></li>
    <li><a href="#create">C&aacute;ch tạo một ellipsoid: quay một ellipse</a></li>
    <li><a href="#sphere">Sphere &mdash; trường hợp đặc biệt nhất</a></li>
    <li><a href="#equation">Phương tr&igrave;nh: chỉ l&agrave; th&ecirc;m một số hạng</a></li>
    <li><a href="#nesting">Sphere &sub; Spheroid &sub; Ellipsoid</a></li>
    <li><a href="#wgs84">WGS84 l&agrave; ellipsoid hay spheroid?</a></li>
    <li><a href="#why">V&igrave; sao gọi l&agrave; &ldquo;ellipsoid&rdquo; chứ kh&ocirc;ng phải &ldquo;spheroid&rdquo;?</a></li>
  </ol>
</div>

<!-- ───────────────────────── 1. DIMENSION ───────────────────────── -->
<h2 id="dimension"><span class="step">1</span>Ellipse vs Ellipsoid: 2D so với 3D</h2>

<p>Khởi đầu từ first principle, sự kh&aacute;c nhau gốc rễ chỉ l&agrave; <strong>số chiều</strong>.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">2D</div>
    <h4>Ellipse (h&igrave;nh elip)</h4>
    <p>L&agrave; một <strong>đường cong</strong> nằm gọn tr&ecirc;n một mặt phẳng. Giống h&igrave;nh oval vẽ tr&ecirc;n giấy. N&oacute; chỉ c&oacute; hai trục: <strong>trục lớn</strong> (major axis) v&agrave; <strong>trục nhỏ</strong> (minor axis).</p>
  </div>
  <div class="box">
    <div class="icon purple">3D</div>
    <h4>Ellipsoid (khối elip)</h4>
    <p>L&agrave; phi&ecirc;n bản <strong>kh&ocirc;ng gian</strong> của ellipse &mdash; một <strong>khối đặc</strong> 3D. H&atilde;y nghĩ &ldquo;quả trứng&rdquo; hoặc &ldquo;quả địa cầu bị b&oacute;p dẹt&rdquo;. N&oacute; c&oacute; tới ba b&aacute;n trục.</p>
  </div>
</div>

<div class="figure">
  <svg class="diagram" viewBox="0 0 760 240" role="img" aria-label="Ellipse 2D versus ellipsoid 3D">
    <!-- ellipse -->
    <text x="120" y="34" fill="#2563eb" font-family="SF Mono,monospace" font-size="13" font-weight="700" text-anchor="middle">ELLIPSE &mdash; 2D</text>
    <ellipse cx="150" cy="130" rx="110" ry="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <line x1="40" y1="130" x2="260" y2="130" stroke="#2563eb" stroke-dasharray="4" stroke-width="1.5"/>
    <line x1="150" y1="70" x2="150" y2="190" stroke="#2563eb" stroke-dasharray="4" stroke-width="1.5"/>
    <text x="205" y="123" fill="#15171a" font-family="SF Mono,monospace" font-size="12">a = 10</text>
    <text x="158" y="92" fill="#15171a" font-family="SF Mono,monospace" font-size="12">b = 5</text>
    <text x="150" y="222" fill="#6b7785" font-size="12" text-anchor="middle">một đường cong tr&ecirc;n mặt phẳng</text>

    <!-- arrow -->
    <text x="385" y="135" fill="#7c3aed" font-size="13" text-anchor="middle">quay quanh trục</text>
    <path d="M330 150 H440" stroke="#7c3aed" stroke-width="2" marker-end="url(#ar1)"/>
    <defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#7c3aed"/></marker></defs>

    <!-- ellipsoid -->
    <text x="610" y="34" fill="#7c3aed" font-family="SF Mono,monospace" font-size="13" font-weight="700" text-anchor="middle">ELLIPSOID &mdash; 3D</text>
    <ellipse cx="610" cy="130" rx="110" ry="62" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
    <ellipse cx="610" cy="130" rx="110" ry="20" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3" opacity="0.55"/>
    <ellipse cx="610" cy="130" rx="38" ry="62" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3" opacity="0.55"/>
    <text x="610" y="222" fill="#6b7785" font-size="12" text-anchor="middle">một khối đặc trong kh&ocirc;ng gian</text>
  </svg>
  <p class="figure-caption">Ellipse l&agrave; đường cong 2D; ellipsoid l&agrave; khối 3D sinh ra từ ellipse. Mọi thứ c&ograve;n lại chỉ l&agrave; hệ quả của việc th&ecirc;m một chiều.</p>
</div>

<!-- ───────────────────────── 2. CREATE ───────────────────────── -->
<h2 id="create"><span class="step">2</span>C&aacute;ch tạo một ellipsoid: quay một ellipse</h2>

<p>Mẹo dựng h&igrave;nh kinh điển: lấy một h&igrave;nh phẳng rồi <strong>quay quanh một trục</strong>. Cấu tr&uacute;c sinh ra l&agrave; một khối tr&ograve;n xoay.</p>

<table>
  <tr><th>Quay h&igrave;nh n&agrave;y...</th><th>...quanh một trục, ta được</th></tr>
  <tr><td>H&igrave;nh chữ nhật</td><td>H&igrave;nh trụ (cylinder)</td></tr>
  <tr><td>Nửa đường tr&ograve;n</td><td>H&igrave;nh cầu (sphere)</td></tr>
  <tr><td><strong>Ellipse</strong></td><td><strong>Ellipsoid</strong></td></tr>
</table>

<div class="callout">
  <span class="title">First principle</span>
  <p>Quay ellipse quanh trục của n&oacute; sinh ra ellipsoid. Nhưng h&atilde;y để &yacute;: khi quay như vậy, mặt cắt vu&ocirc;ng g&oacute;c với trục quay lu&ocirc;n l&agrave; một <strong>h&igrave;nh tr&ograve;n</strong>. Điều đ&oacute; b&oacute; buộc <em>hai</em> trong ba b&aacute;n trục phải bằng nhau. Đ&acirc;y ch&iacute;nh l&agrave; mầm mống để ph&acirc;n biệt &ldquo;spheroid&rdquo; với &ldquo;ellipsoid tổng qu&aacute;t&rdquo; ở phần 5.</p>
</div>

<!-- ───────────────────────── 3. SPHERE ───────────────────────── -->
<h2 id="sphere"><span class="step">3</span>Sphere &mdash; trường hợp đặc biệt nhất</h2>

<p>Sphere (h&igrave;nh cầu) thực ra chỉ l&agrave; một ellipsoid đặc biệt: khi <strong>cả ba b&aacute;n trục bằng nhau</strong>.</p>

<pre>ellipsoid c&oacute;  a, b, c  bất kỳ
        &darr;  &eacute;p cho  a = b = c
sphere   c&oacute;  b&aacute;n k&iacute;nh r duy nhất

        x&sup2; + y&sup2; + z&sup2; = r&sup2;</pre>

<p>N&oacute;i c&aacute;ch kh&aacute;c: c&agrave;ng &ldquo;đặc biệt&rdquo; th&igrave; c&agrave;ng &iacute;t con số tự do để m&ocirc; tả. Sphere chỉ cần <strong>1 số</strong> (b&aacute;n k&iacute;nh). Đ&acirc;y l&agrave; manh mối cho c&aacute;ch ph&acirc;n loại gọn g&agrave;ng sắp tới.</p>

<!-- ───────────────────────── 4. EQUATION ───────────────────────── -->
<h2 id="equation"><span class="step">4</span>Phương tr&igrave;nh: chỉ l&agrave; th&ecirc;m một số hạng</h2>

<p>Vẻ đẹp của first principle nằm ở đ&acirc;y &mdash; từ ellipse l&ecirc;n ellipsoid chỉ l&agrave; <strong>cộng th&ecirc;m một chiều z</strong> v&agrave;o đ&uacute;ng c&ocirc;ng thức cũ.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">2D</div>
    <h4>Ellipse (trong mặt phẳng)</h4>
    <pre style="margin:6px 0 0">x&sup2;     y&sup2;
&mdash;&mdash;  +  &mdash;&mdash;  =  1
a&sup2;     b&sup2;</pre>
  </div>
  <div class="box">
    <div class="icon purple">3D</div>
    <h4>Ellipsoid (trong kh&ocirc;ng gian)</h4>
    <pre style="margin:6px 0 0">x&sup2;     y&sup2;     z&sup2;
&mdash;&mdash;  +  &mdash;&mdash;  +  &mdash;&mdash;  =  1
a&sup2;     b&sup2;     c&sup2;</pre>
  </div>
</div>

<p>Th&ecirc;m số hạng <code>z&sup2;/c&sup2;</code> l&agrave; xong. <code>a</code>, <code>b</code>, <code>c</code> ch&iacute;nh l&agrave; ba b&aacute;n trục theo ba chiều. Mọi định nghĩa b&ecirc;n dưới chỉ kh&aacute;c nhau ở <strong>điều kiện đặt l&ecirc;n ba con số n&agrave;y</strong>.</p>

<!-- ───────────────────────── 5. NESTING ───────────────────────── -->
<h2 id="nesting"><span class="step">5</span>Sphere &sub; Spheroid &sub; Ellipsoid</h2>

<p>Đ&acirc;y l&agrave; chỗ rất nhiều người l&agrave;m GIS cũng lẫn lộn: <strong>mọi spheroid đều l&agrave; ellipsoid, nhưng kh&ocirc;ng phải ellipsoid n&agrave;o cũng l&agrave; spheroid.</strong> C&aacute;ch nhớ gọn nhất l&agrave; một sơ đồ bao h&agrave;m, ph&acirc;n loại theo <em>số b&aacute;n trục độc lập</em>.</p>

<div class="figure">
  <svg class="diagram" viewBox="0 0 720 300" role="img" aria-label="Nesting of sphere inside spheroid inside ellipsoid">
    <!-- outer: ellipsoid -->
    <rect x="20" y="20" width="680" height="260" rx="16" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
    <text x="40" y="48" fill="#7c3aed" font-family="SF Mono,monospace" font-size="14" font-weight="700">ELLIPSOID</text>
    <text x="40" y="70" fill="#6b7785" font-size="12.5">3 b&aacute;n trục &mdash; a, b, c c&oacute; thể kh&aacute;c nhau ho&agrave;n to&agrave;n</text>
    <!-- middle: spheroid -->
    <rect x="60" y="88" width="600" height="172" rx="14" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="80" y="116" fill="#2563eb" font-family="SF Mono,monospace" font-size="14" font-weight="700">SPHEROID</text>
    <text x="80" y="138" fill="#6b7785" font-size="12.5">2 b&aacute;n trục độc lập &mdash; lu&ocirc;n c&oacute; hai b&aacute;n trục bằng nhau (a = b &ne; c)</text>
    <!-- inner: sphere -->
    <rect x="100" y="156" width="520" height="92" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="120" y="186" fill="#16a34a" font-family="SF Mono,monospace" font-size="14" font-weight="700">SPHERE</text>
    <text x="120" y="208" fill="#6b7785" font-size="12.5">1 b&aacute;n k&iacute;nh &mdash; a = b = c</text>
    <text x="120" y="230" fill="#6b7785" font-size="12.5">trường hợp ho&agrave;n hảo nhất</text>
  </svg>
  <p class="figure-caption">C&agrave;ng v&agrave;o trong c&agrave;ng nhiều r&agrave;ng buộc, c&agrave;ng &iacute;t b&aacute;n trục tự do. Spheroid l&agrave; ellipsoid c&oacute; tr&iacute;ch đối xứng tr&ograve;n quanh một trục; sphere l&agrave; spheroid ho&agrave;n hảo.</p>
</div>

<table>
  <tr><th>H&igrave;nh</th><th>Số b&aacute;n trục độc lập</th><th>Điều kiện</th></tr>
  <tr><td>Sphere</td><td>1</td><td><code>a = b = c</code></td></tr>
  <tr><td>Spheroid</td><td>2</td><td>hai b&aacute;n trục bằng nhau (<code>a = b &ne; c</code>)</td></tr>
  <tr><td>Ellipsoid</td><td>3</td><td>kh&ocirc;ng y&ecirc;u cầu b&aacute;n trục n&agrave;o bằng nhau</td></tr>
</table>

<div class="callout good">
  <span class="title">Một c&acirc;u chốt</span>
  <p><strong>Ellipsoid</strong> l&agrave; kh&aacute;i niệm tổng qu&aacute;t. <strong>Spheroid</strong> l&agrave; ellipsoid c&oacute; t&iacute;nh đối xứng tr&ograve;n quanh một trục (sinh ra bằng c&aacute;ch quay ellipse). <strong>Sphere</strong> l&agrave; spheroid ho&agrave;n hảo với mọi b&aacute;n k&iacute;nh bằng nhau.</p>
</div>

<!-- ───────────────────────── 6. WGS84 ───────────────────────── -->
<h2 id="wgs84"><span class="step">6</span>WGS84 l&agrave; ellipsoid hay spheroid?</h2>

<p>Tr&aacute;i Đất quay quanh trục của ch&iacute;nh n&oacute;, n&ecirc;n n&oacute; ph&igrave;nh ở x&iacute;ch đạo v&agrave; dẹt ở hai cực. V&igrave; gần đối xứng quanh trục quay, ta chỉ cần <strong>hai b&aacute;n k&iacute;nh</strong> để m&ocirc; tả:</p>

<pre>Equatorial radius  a = 6&nbsp;378&nbsp;137 m   (x&iacute;ch đạo, ph&igrave;nh ra)
Polar radius       b = 6&nbsp;356&nbsp;752 m   (hai cực, dẹt l&agrave;m)

a = b  (quanh trục quay)   &ne;   c  (theo trục cực)</pre>

<div class="figure">
  <svg class="diagram" viewBox="0 0 620 300" role="img" aria-label="WGS84 oblate spheroid Earth">
    <ellipse cx="310" cy="150" rx="150" ry="120" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <!-- equator -->
    <line x1="160" y1="150" x2="460" y2="150" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="310" y1="150" x2="460" y2="150" stroke="#dc2626" stroke-width="2.5"/>
    <text x="372" y="142" fill="#dc2626" font-family="SF Mono,monospace" font-size="12" font-weight="700">a (x&iacute;ch đạo)</text>
    <!-- polar -->
    <line x1="310" y1="30" x2="310" y2="270" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5"/>
    <line x1="310" y1="150" x2="310" y2="30" stroke="#16a34a" stroke-width="2.5"/>
    <text x="318" y="78" fill="#16a34a" font-family="SF Mono,monospace" font-size="12" font-weight="700">b (cực)</text>
    <circle cx="310" cy="150" r="4" fill="#15171a"/>
    <text x="310" y="294" fill="#6b7785" font-size="12.5" text-anchor="middle">Oblate spheroid &mdash; ph&igrave;nh x&iacute;ch đạo, dẹt hai cực (đ&atilde; ph&oacute;ng đại độ dẹt)</text>
  </svg>
  <p class="figure-caption">Độ dẹt thật của Tr&aacute;i Đất rất nhỏ: a v&agrave; b chỉ lệch khoảng 21 km tr&ecirc;n b&aacute;n k&iacute;nh ~6&nbsp;378 km. H&igrave;nh tr&ecirc;n ph&oacute;ng đại để dễ thấy.</p>
</div>

<p>Đối chiếu với bảng ở phần 5: WGS84 c&oacute; <code>a = b &ne; c</code> &rArr; đ&uacute;ng định nghĩa <strong>spheroid</strong>. Cụ thể hơn, v&igrave; n&oacute; dẹt ở cực n&ecirc;n l&agrave; một <strong>oblate spheroid</strong> (spheroid dẹt). V&agrave; v&igrave; mọi spheroid đều l&agrave; ellipsoid, n&ecirc;n n&oacute;i WGS84 l&agrave; ellipsoid cũng kh&ocirc;ng sai.</p>

<div class="callout">
  <span class="title">Li&ecirc;n hệ với loạt b&agrave;i Geospatial 3D</span>
  <p>Trong b&agrave;i <a href="/posts/cesium-on-omniverse">Cesium tr&ecirc;n Omniverse</a>, ta đ&atilde; gặp &ldquo;WGS84 ellipsoid&rdquo; như m&ocirc; h&igrave;nh to&aacute;n học chuẩn để chuyển đổi giữa <em>lat/lon/height</em> v&agrave; <em>ECEF</em>. B&acirc;y giờ đ&atilde; r&otilde; tại sao: bề mặt tham chiếu đ&oacute; ch&iacute;nh l&agrave; một oblate spheroid.</p>
</div>

<!-- ───────────────────────── 7. WHY ───────────────────────── -->
<h2 id="why"><span class="step">7</span>V&igrave; sao gọi l&agrave; &ldquo;ellipsoid&rdquo; chứ kh&ocirc;ng phải &ldquo;spheroid&rdquo;?</h2>

<p>Về h&igrave;nh học, WGS84 đ&uacute;ng l&agrave; một oblate spheroid. Nhưng trong GIS/geodesy người ta gần như lu&ocirc;n gọi l&agrave; <strong>reference ellipsoid</strong>. L&yacute; do nằm ở first principles v&agrave; lịch sử ng&agrave;nh.</p>

<div class="grid g2">
  <div class="box">
    <div class="icon blue">1</div>
    <h4>&ldquo;Ellipsoid&rdquo; mới l&agrave; thứ quan trọng</h4>
    <p>Geodesy kh&ocirc;ng quan t&acirc;m &ldquo;n&oacute; sinh ra từ quay ellipse hay kh&ocirc;ng&rdquo;, m&agrave; quan t&acirc;m: <strong>đ&acirc;y l&agrave; bề mặt to&aacute;n học tham chiếu để định nghĩa tọa độ</strong> (lat, lon, height). &ldquo;Ellipsoid&rdquo; l&agrave; thuật ngữ chuẩn cho bề mặt ấy.</p>
  </div>
  <div class="box">
    <div class="icon purple">2</div>
    <h4>WGS84 kh&ocirc;ng chỉ l&agrave; h&igrave;nh dạng</h4>
    <p>N&oacute; c&ograve;n gồm: gốc tọa độ tại t&acirc;m khối lượng Tr&aacute;i Đất, hướng c&aacute;c trục, k&iacute;ch thước ellipsoid v&agrave; nhiều tham số geodetic kh&aacute;c. &ldquo;WGS84 Ellipsoid&rdquo; nhấn mạnh <em>bề mặt tham chiếu của hệ WGS84</em>, kh&ocirc;ng chỉ m&ocirc; tả h&igrave;nh.</p>
  </div>
  <div class="box">
    <div class="icon amber">3</div>
    <h4>&ldquo;Spheroid&rdquo; qu&aacute; hẹp</h4>
    <p>Spheroid b&oacute; buộc <code>a = b &ne; c</code>. Geodesy l&agrave;m việc với nhiều bề mặt tham chiếu, n&ecirc;n th&iacute;ch d&ugrave;ng kh&aacute;i niệm tổng qu&aacute;t hơn &mdash; <strong>ellipsoid</strong> &mdash; ngay cả khi n&oacute; t&igrave;nh cờ l&agrave; một spheroid.</p>
  </div>
  <div class="box">
    <div class="icon green">4</div>
    <h4>Lịch sử ng&agrave;nh</h4>
    <p>Từ thế kỷ 18&ndash;19, geodesy đ&atilde; d&ugrave;ng &ldquo;reference ellipsoid&rdquo; &mdash; Clarke 1866, International 1924, GRS80, rồi WGS84. Đ&oacute; đ&atilde; th&agrave;nh ng&ocirc;n ngữ chuẩn rất l&acirc;u trước khi WGS84 ra đời.</p>
  </div>
</div>

<div class="callout warn">
  <span class="title">Điều th&uacute; vị: &ldquo;ellipsoid&rdquo; l&agrave; thuật ngữ bền hơn</span>
  <p>Nếu một ng&agrave;y người ta t&igrave;m được m&ocirc; h&igrave;nh Tr&aacute;i Đất tốt hơn m&agrave; <strong>kh&ocirc;ng c&ograve;n</strong> <code>a = b</code> (ba b&aacute;n trục kh&aacute;c nhau), th&igrave; n&oacute; vẫn l&agrave; một <em>reference ellipsoid</em> &mdash; nhưng sẽ kh&ocirc;ng c&ograve;n l&agrave; spheroid nữa. Do đ&oacute; gọi &ldquo;ellipsoid&rdquo; vừa đ&uacute;ng về to&aacute;n học, vừa an to&agrave;n cho tương lai.</p>
</div>

<p>So s&aacute;nh cho dễ h&igrave;nh dung: một chiếc Tesla l&agrave; một chiếc xe điện, nhưng khi n&oacute;i chuyện giao th&ocirc;ng người ta thường gọi l&agrave; &ldquo;xe&rdquo; (car) hơn l&agrave; &ldquo;electric vehicle&rdquo; &mdash; d&ugrave; cả hai đều đ&uacute;ng. &ldquo;Ellipsoid&rdquo; với spheroid cũng vậy: kh&aacute;i niệm rộng hơn được d&ugrave;ng l&agrave;m chuẩn.</p>

<!-- ───────────────────────── TL;DR ───────────────────────── -->
<h2><span class="step">&#8718;</span>Mẹo nhớ &amp; TL;DR</h2>

<ul class="clean">
  <li><strong>Ellipse</strong> &rarr; 2D &rarr; h&igrave;nh elip tr&ecirc;n giấy (đường cong).</li>
  <li><strong>Ellipsoid</strong> &rarr; 3D &rarr; &ldquo;quả trứng&rdquo; / &ldquo;quả địa cầu bị b&oacute;p dẹt&rdquo; (khối đặc, th&ecirc;m chiều z).</li>
  <li>Ph&acirc;n loại theo số b&aacute;n trục độc lập: <strong>Sphere (1) &sub; Spheroid (2) &sub; Ellipsoid (3)</strong>.</li>
  <li><strong>WGS84 = oblate spheroid</strong> (a = b &ne; c) &mdash; v&agrave; do đ&oacute; cũng l&agrave; một ellipsoid.</li>
  <li>GIS gọi &ldquo;WGS84 ellipsoid&rdquo; v&igrave; <strong>ellipsoid l&agrave; thuật ngữ tham chiếu tổng qu&aacute;t, chuẩn v&agrave; bền vững</strong> trong geodesy.</li>
</ul>

</article>

<div class="footer">
  <div class="ornament">&#10086;</div>
  <p>harrytruong &middot; First Principles &middot; Th&aacute;ng 6, 2026</p>
  <p style="margin-top:8px"><a href="/posts/cesium-on-omniverse">Li&ecirc;n quan &rarr; How Cesium Puts a 3D Scene on Planet Earth</a></p>
</div>
`;

export const script = ``;
