export const styles = `
  .artifact-scope{
    --bg: #16181d;
    --panel: #1e2128;
    --panel2: #242832;
    --border: #353b47;
    --text: #d7dce3;
    --dim: #8b93a1;
    --accent: #6cb86c;
    --accent2: #76b9ed;
    --warn: #e0a458;
    --code-bg: #14161b;
    --kbd: #2d323d;
    background: var(--bg); color: var(--text);
    font-family: "Segoe UI", system-ui, sans-serif;
    font-size: 15px; line-height: 1.65;
  }
  .artifact-scope *, .artifact-scope *::before, .artifact-scope *::after { box-sizing: border-box; }

  /* ---- topbar (site nav, dark theme) ---- */
  .artifact-scope .topbar{
    border-bottom: 1px solid var(--border); padding: 14px 0;
    background: var(--bg); position: sticky; top: 0; z-index: 10;
  }
  .artifact-scope .topbar-inner{
    display: flex; justify-content: space-between; align-items: center;
    max-width: 980px; margin: 0 auto; padding: 0 28px;
  }
  .artifact-scope .topbar .logo{
    font-family: Consolas, monospace; font-weight: 700; font-size: 13px;
    letter-spacing: .05em; color: var(--accent2);
  }
  .artifact-scope .topbar .logo a{color: inherit; text-decoration: none;}
  .artifact-scope .topbar .logo a:hover{opacity: .7;}
  .artifact-scope .topbar .meta-tag{
    font-family: Consolas, monospace; font-size: 11px; letter-spacing: .18em;
    text-transform: uppercase; color: var(--warn); font-weight: 700;
  }

  .artifact-scope .wrap { max-width: 980px; margin: 0 auto; padding: 32px 28px 80px; }
  .artifact-scope header.post { border-bottom: 1px solid var(--border); padding-bottom: 18px; margin-bottom: 28px; }
  .artifact-scope h1 { font-size: 27px; margin: 0 0 6px; color: #fff; }
  .artifact-scope .meta { color: var(--dim); font-size: 13px; }
  .artifact-scope .meta code { font-size: 12px; }
  .artifact-scope h2 {
    font-size: 21px; color: var(--accent2); margin-top: 46px;
    border-bottom: 1px solid var(--border); padding-bottom: 6px;
  }
  .artifact-scope h2 .num { color: var(--dim); margin-right: 8px; }
  .artifact-scope h3 { font-size: 16.5px; color: #e8ebf0; margin-top: 28px; }
  .artifact-scope a { color: var(--accent2); text-decoration: none; }
  .artifact-scope a:hover { text-decoration: underline; }
  .artifact-scope code {
    font-family: "Cascadia Code", Consolas, monospace;
    font-size: 13px; background: var(--kbd);
    padding: 1px 5px; border-radius: 4px; color: #e3e8ef;
  }
  .artifact-scope pre {
    background: var(--code-bg); border: 1px solid var(--border);
    border-radius: 8px; padding: 14px 16px; overflow-x: auto;
    line-height: 1.5;
  }
  .artifact-scope pre code { background: none; padding: 0; font-size: 12.5px; }
  .artifact-scope .file {
    display: block; font-size: 11.5px; color: var(--dim);
    margin-bottom: -8px; margin-top: 16px;
    font-family: Consolas, monospace;
  }
  .artifact-scope .comment { color: #6a9955; }
  .artifact-scope .kw { color: #c586c0; }
  .artifact-scope .str { color: #ce9178; }
  .artifact-scope .fn { color: #dcdcaa; }
  .artifact-scope .cls { color: #4ec9b0; }
  .artifact-scope table { border-collapse: collapse; width: 100%; margin: 14px 0; font-size: 13.5px; }
  .artifact-scope th, .artifact-scope td { border: 1px solid var(--border); padding: 7px 11px; text-align: left; vertical-align: top; }
  .artifact-scope th { background: var(--panel2); color: #fff; }
  .artifact-scope td code { white-space: nowrap; }
  .artifact-scope .box {
    background: var(--panel); border: 1px solid var(--border);
    border-left: 4px solid var(--accent); border-radius: 6px;
    padding: 12px 16px; margin: 18px 0;
  }
  .artifact-scope .box.warn { border-left-color: var(--warn); }
  .artifact-scope .box.info { border-left-color: var(--accent2); }
  .artifact-scope .box b:first-child { color: #fff; }
  .artifact-scope .toc { background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 16px 24px; }
  .artifact-scope .toc ol { margin: 6px 0; padding-left: 22px; }
  .artifact-scope .toc li { margin: 3px 0; }
  .artifact-scope .tree {
    font-family: Consolas, monospace; font-size: 12.5px;
    background: var(--code-bg); border: 1px solid var(--border);
    border-radius: 8px; padding: 14px 16px; white-space: pre; overflow-x: auto;
    line-height: 1.45;
  }
  .artifact-scope .tree .d { color: var(--accent2); }
  .artifact-scope .tree .n { color: var(--dim); }
  .artifact-scope .flow {
    font-family: Consolas, monospace; font-size: 12.5px; white-space: pre;
    background: var(--code-bg); border: 1px solid var(--border);
    border-radius: 8px; padding: 14px 16px; overflow-x: auto; line-height: 1.5;
  }
  .artifact-scope .pill {
    display: inline-block; background: var(--kbd); border: 1px solid var(--border);
    border-radius: 99px; font-size: 11.5px; padding: 1px 10px; color: var(--dim);
    margin-right: 6px;
  }
  .artifact-scope footer {
    margin-top: 40px; color: var(--dim); font-size: 12.5px;
    border-top: 1px solid var(--border); padding-top: 14px;
  }
  .artifact-scope footer .tag {
    font-family: Consolas, monospace; font-size: 11px; letter-spacing: .12em;
    text-transform: uppercase; color: var(--warn);
  }
  .artifact-scope ::selection { background: var(--accent2); color: #14161b; }
`;

export const html = `
<div class="topbar">
  <div class="topbar-inner">
    <span class="logo"><a href="/">&#9664; harrytruong</a></span>
    <span class="meta-tag">OMNIVERSE KIT &mdash; FIRST PRINCIPLES</span>
  </div>
</div>

<div class="wrap">

<header class="post">
  <h1>Writing a USD Composer Extension From Scratch</h1>
  <div class="meta">
    First-principles guide: UI + logic, end to end.<br>
    Running example: a geo-integration tool &mdash; compute a model's ground footprint and
    assign it as a Cesium tileset's clipping boundary, so the world tiles are cut away
    where the model sits. Referred to below as <code>acme.geo_integration</code>.
  </div>
</header>

<div class="toc">
  <b>Contents</b>
  <ol>
    <li><a href="#principles">First principles &mdash; what an extension actually is</a></li>
    <li><a href="#reference">The running example: a geo clipping tool at a glance</a></li>
    <li><a href="#anatomy">Anatomy: the folder contract</a></li>
    <li><a href="#manifest">The manifest &mdash; extension.toml</a></li>
    <li><a href="#lifecycle">Lifecycle &mdash; IExt, startup, shutdown</a></li>
    <li><a href="#ui">UI from first principles &mdash; omni.ui</a></li>
    <li><a href="#architecture">Logic architecture &mdash; the UI / core split</a></li>
    <li><a href="#kit-services">Talking to Kit &mdash; stage, selection, events, notifications</a></li>
    <li><a href="#wiring">Wiring it into the app &mdash; build &amp; registration</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#checklist">From-scratch checklist &amp; gotchas</a></li>
  </ol>
</div>

<!-- ================================================================ -->
<h2 id="principles"><span class="num">1.</span>First principles &mdash; what an extension actually is</h2>

<p>USD Composer is not a monolithic application. It is an instance of <b>Omniverse Kit</b>:
a tiny C++ core that does almost nothing by itself except <em>load extensions</em>.
Everything you see &mdash; the viewport, the stage tree, the property panel, the menu bar &mdash;
is an extension. Your tool will be a peer of those, not a plugin bolted on top.</p>

<p>Reduced to essentials, an extension is:</p>

<div class="box">
<b>An extension = a folder</b> containing
<code>config/extension.toml</code> (the manifest: identity, dependencies, entry point)
and, for Python extensions, <b>a Python package</b> exposing a class that implements
<code>omni.ext.IExt</code>. Kit finds the folder, reads the manifest, resolves
dependencies, imports the module, and calls <code>on_startup()</code>. That is the
entire contract.
</div>

<p>Three consequences follow from this, and they shape everything below:</p>
<ul>
  <li><b>No compile step for Python.</b> The "build" only symlinks your source folder into
      Kit's extension search path. Edit &rarr; restart (or hot-reload) &rarr; see the change.</li>
  <li><b>Dependencies are other extensions.</b> You don't import a "Composer SDK" &mdash; you declare
      <code>"omni.ui" = {}</code>, <code>"omni.usd" = {}</code> in the manifest, and Kit guarantees
      those are loaded before yours starts.</li>
  <li><b>The app is just a <code>.kit</code> file.</b> Your app manifest (e.g.
      <code>my_app.kit</code>) is a TOML file listing extensions. Adding your tool to the app
      is one line in it.</li>
</ul>

<!-- ================================================================ -->
<h2 id="reference"><span class="num">2.</span>The running example: a geo clipping tool at a glance</h2>

<p>The example is a complete, real "window + logic" extension, small enough to read in one
sitting. The problem it solves: you place a building model on a Cesium globe (photoreal world
tiles), and the streamed terrain pokes through your model. The fix is a <em>clipping
boundary</em> &mdash; a polygon, bound to the tileset, inside which the world tiles are cut away
so the model sits in a clean hole.</p>

<p>The tool's window has three inputs and one button: a model prim path (typed, or grabbed
from the viewport selection), a tileset picker, a margin in meters &mdash; then
<b>Calculate &amp; Assign Boundary</b>. One click computes the model's ground footprint
(bounding-box corners &rarr; world space &rarr; 2D convex hull &rarr; expand by margin) and
authors it as a Cesium cartographic polygon bound to the tileset:</p>

<div class="flow">USER                      UI LAYER (geo_window.py)         CORE (boundary.py &mdash; pure USD)
 &#9474;                         &#9474;                                &#9474;
 &#9474; clicks Use Selection &#9472;&#9472;&#9654; _on_use_selection()             &#9474;
 &#9474;                         &#9474;  reads viewport selection       &#9474;
 &#9474; clicks Refresh &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9654; _refresh_tilesets() &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9654; find_tilesets(stage)
 &#9474;                         &#9474;  rebuilds ComboBox items        &#9474;  traverse, match tileset prims
 &#9474; clicks Calculate &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9654; _on_assign_boundary()           &#9474;
 &#9474;                         &#9474;  guard stage/path/tileset &#9472;&#9472;&#9472;&#9472;&#9654; compute_footprint(stage, path, margin)
 &#9474;                         &#9474;                                &#9474;  bbox corners &rarr; world &rarr; hull &rarr; +margin
 &#9474;                         &#9474;                          &#9472;&#9472;&#9472;&#9472;&#9472;&#9654; assign_boundary(stage, tileset, footprint)
 &#9474;                         &#9474;                                &#9474;  find/create overlay + polygon, author curve
 &#9474; sees status + toast &#9664;&#9472;&#9472; _set_status() / _notify() &#9664;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;</div>

<p>On the stage, the result is a small pipeline of prims and relationships (this mirrors
exactly what Cesium for Omniverse's own UI authors):</p>

<div class="flow">CesiumTilesetPrim
  rel cesium:rasterOverlayBinding &#9472;&#9472;&#9654; CesiumPolygonRasterOverlayPrim   (child of the tileset)
        rel cesium:cartographicPolygonBinding &#9472;&#9472;&#9654; BasisCurves polygon prim
                                                  (CesiumGlobeAnchorSchemaAPI applied)</div>

<p>Where it lives and how it reaches the app (explained in <a href="#wiring">&sect;9</a>):</p>

<div class="flow">extension folder                            app manifest
source/extensions/acme.geo_integration &#9472;&#9472;&#9654; my_app.kit
(Kit build scans this folder)               "acme.geo_integration" = {}</div>

<!-- ================================================================ -->
<h2 id="anatomy"><span class="num">3.</span>Anatomy: the folder contract</h2>

<p>The full layout of the example. The top half (config / premake / README) is the
<em>extension contract</em>; the bottom half (the Python package) is <em>your architecture
choice</em> &mdash; Kit doesn't care how you organize it.</p>

<div class="tree">acme.geo_integration/
&#9500;&#9472;&#9472; config/
&#9474;   &#9492;&#9472;&#9472; extension.toml            <span class="n">&larr; THE manifest. Identity, deps, entry module (&sect;4)</span>
&#9500;&#9472;&#9472; premake5.lua                  <span class="n">&larr; ~10 lines: link folders into the build output (&sect;9)</span>
&#9500;&#9472;&#9472; README.md                     <span class="n">&larr; user-facing docs (rendered in the Extension Manager)</span>
&#9492;&#9472;&#9472; acme/                         <span class="n">&larr; Python namespace package</span>
    &#9492;&#9472;&#9472; geo_integration/          <span class="n">&larr; the module named in [[python.module]]</span>
        &#9500;&#9472;&#9472; __init__.py           <span class="n">&larr; re-exports the IExt class, with an ImportError guard (&sect;7)</span>
        &#9500;&#9472;&#9472; extension.py          <span class="n">&larr; lifecycle: on_startup / on_shutdown (&sect;5)</span>
        &#9500;&#9472;&#9472; <span class="d">core/</span>
        &#9474;   &#9492;&#9472;&#9472; boundary.py       <span class="n">&larr; pure USD logic: footprint math + prim authoring. Zero omni imports.</span>
        &#9492;&#9472;&#9472; <span class="d">ui/</span>
            &#9492;&#9472;&#9472; geo_window.py     <span class="n">&larr; ALL omni.ui code: the window, style dict, callbacks</span></div>

<div class="box info">
<b>Naming convention.</b> The folder name <b>is</b> the extension id:
<code>acme.geo_integration</code>. The Python package path must mirror it with dots &rarr; folders:
<code>acme/geo_integration/</code>. Get this wrong and Kit can't import your module.
</div>

<p>Optional but conventional: <code>data/icon.svg</code> + <code>data/preview.svg</code>
(shown in the Extension Manager) and <code>docs/CHANGELOG.md</code>. The example skips them;
a tool you ship to others shouldn't.</p>

<!-- ================================================================ -->
<h2 id="manifest"><span class="num">4.</span>The manifest &mdash; extension.toml</h2>

<p>This file is what makes the folder an extension. The example's manifest, nearly complete:</p>

<span class="file">acme.geo_integration/config/extension.toml</span>
<pre><code>[package]
title = <span class="str">"Geo Integration"</span>
version = <span class="str">"0.1.0"</span>
description = <span class="str">"Calculate a model's ground footprint and assign it as a Cesium tileset clipping boundary."</span>
category = <span class="str">"Geo"</span>
keywords = [<span class="str">"kit"</span>, <span class="str">"cesium"</span>, <span class="str">"georeference"</span>, <span class="str">"boundary"</span>, <span class="str">"clipping"</span>]

[dependencies]                          <span class="comment"># other EXTENSIONS, loaded before yours</span>
<span class="str">"omni.kit.uiapp"</span> = {}                   <span class="comment"># base UI application stack</span>
<span class="str">"omni.kit.menu.utils"</span> = {}              <span class="comment"># add entries to the menu bar (&sect;8)</span>
<span class="str">"omni.ui"</span> = {}                          <span class="comment"># the widget toolkit (&sect;6)</span>
<span class="str">"omni.usd"</span> = {}                         <span class="comment"># UsdContext: stage access + selection (&sect;8)</span>
<span class="str">"omni.kit.notification_manager"</span> = {}    <span class="comment"># toast notifications (&sect;8)</span>

[[python.module]]
name = <span class="str">"acme.geo_integration"</span>           <span class="comment"># Kit imports THIS package on load</span>

[documentation]
pages = [<span class="str">"README.md"</span>]

[[test]]
dependencies = [<span class="str">"omni.kit.test"</span>]
args = [<span class="str">"--no-window"</span>, <span class="str">"--/app/fastShutdown=1"</span>,
        <span class="str">"--/app/file/ignoreUnsavedOnExit=true"</span>]   <span class="comment"># headless test run flags (&sect;10)</span></code></pre>

<p><b>The rule for [dependencies]:</b> every <code>import omni.something</code> in your code
should have a matching line here. It works without the line <em>if something else already
loaded that extension</em> &mdash; and then breaks the day the app config changes. Declare what you
import. Note there is no Cesium dependency: the tool only <em>authors USD</em>; Cesium picks
the prims up if it's loaded, and the authoring still works headless without it.</p>

<!-- ================================================================ -->
<h2 id="lifecycle"><span class="num">5.</span>Lifecycle &mdash; IExt, startup, shutdown</h2>

<p>Kit imports your module and looks for a class implementing <code>omni.ext.IExt</code>.
Two methods are the whole lifecycle. This is the example's <em>entire</em> entry point:</p>

<span class="file">acme/geo_integration/extension.py</span>
<pre><code><span class="kw">import</span> omni.ext
<span class="kw">import</span> omni.kit.menu.utils <span class="kw">as</span> menu_utils

<span class="kw">from</span> .ui.geo_window <span class="kw">import</span> <span class="cls">GeoWindow</span>

<span class="kw">class</span> <span class="cls">GeoIntegrationExtension</span>(omni.ext.<span class="cls">IExt</span>):
    WINDOW_NAME = <span class="str">"Geo Integration"</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        super().__init__()
        self._window = <span class="kw">None</span>
        self._menu_entry = <span class="kw">None</span>

    <span class="kw">def</span> <span class="fn">on_startup</span>(self, ext_id: str):
        self._menu_entry = menu_utils.add_menu_items([
            menu_utils.<span class="cls">MenuItemDescription</span>(
                name=<span class="str">"Geo Integration"</span>,
                onclick_fn=self._on_menu_click,
                appear_after=<span class="str">"Window"</span>)
        ], <span class="str">"Window"</span>)                                  <span class="comment"># &rarr; Window &#9656; Geo Integration</span>

    <span class="kw">def</span> <span class="fn">on_shutdown</span>(self):                            <span class="comment"># undo EVERYTHING from startup</span>
        <span class="kw">if</span> self._menu_entry:
            menu_utils.remove_menu_items(self._menu_entry, <span class="str">"Window"</span>)
            self._menu_entry = <span class="kw">None</span>
        <span class="kw">if</span> self._window:
            self._window.destroy()
            self._window = <span class="kw">None</span>

    <span class="kw">def</span> <span class="fn">_on_menu_click</span>(self):                          <span class="comment"># LAZY window creation</span>
        <span class="kw">if</span> self._window <span class="kw">is</span> <span class="kw">None</span>:
            self._window = <span class="cls">GeoWindow</span>(self.WINDOW_NAME)
        <span class="kw">else</span>:
            self._window.visible = <span class="kw">True</span>
            self._window.focus()</code></pre>

<p>Three deliberate decisions worth copying:</p>
<ul>
  <li><b>Startup is just a menu item.</b> The extension costs nothing until someone uses it.
      No stage access, no widgets, no subscriptions at boot &mdash; the app starts fast and the
      extension loads cleanly even headless.</li>
  <li><b>Lazy window.</b> The window (and every widget in it) is built on first click; after
      that, the same instance is re-shown and focused instead of rebuilt.</li>
  <li><b>Symmetric shutdown.</b> Everything <code>on_startup</code> registers (here: a menu
      entry, plus the window if it was ever created) is explicitly torn down. Kit hot-reloads
      extensions during development &mdash; a leaked menu item or callback means duplicates
      after every reload.</li>
</ul>

<!-- ================================================================ -->
<h2 id="ui"><span class="num">6.</span>UI from first principles &mdash; omni.ui</h2>

<h3>6.1 The mental model</h3>
<p><code>omni.ui</code> is a <b>retained-mode</b>, GPU-drawn widget toolkit (it renders inside
Kit's own swapchain &mdash; it is not Qt, not HTML). You build a widget tree once inside
<code>with</code> blocks; the tree persists and re-renders every frame. Three primitives cover
most layouts:</p>

<table>
  <tr><th>Primitive</th><th>Role</th></tr>
  <tr><td><code>ui.Window</code></td><td>A dockable top-level window. Has a <code>.frame</code> you build content into; <code>.visible</code>, <code>.focus()</code>, <code>.destroy()</code>.</td></tr>
  <tr><td><code>ui.VStack</code> / <code>ui.HStack</code></td><td>Vertical / horizontal containers. <b>Layout is nesting + spacing + Spacer</b>, nothing else. <code>height=0</code> on a VStack means "shrink to content".</td></tr>
  <tr><td><code>ui.CollapsableFrame</code>, <code>ui.ScrollingFrame</code></td><td>Expandable group panel; scroll container. The example doesn't need them yet &mdash; reach for them when a form outgrows one screen.</td></tr>
</table>

<p>The example's whole window is a <code>VStack</code> of <code>HStack</code> rows
(label + field + button), built in the constructor of a <code>ui.Window</code> subclass:</p>

<span class="file">acme/geo_integration/ui/geo_window.py (abridged)</span>
<pre><code><span class="kw">class</span> <span class="cls">GeoWindow</span>(ui.<span class="cls">Window</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, title: str, **kwargs):
        super().__init__(title, width=460, height=240, **kwargs)
        self._model_path_model = ui.<span class="cls">SimpleStringModel</span>(<span class="str">""</span>)
        self._margin_model = ui.<span class="cls">SimpleFloatModel</span>(5.0)
        self.frame.set_style(WINDOW_STYLE)        <span class="comment"># style once, at the root (&sect;6.3)</span>
        <span class="kw">with</span> self.frame:                          <span class="comment"># window content root</span>
            self._build_ui()
        self._refresh_tilesets()                  <span class="comment"># populate the combo immediately</span>

    <span class="kw">def</span> <span class="fn">_build_ui</span>(self):
        <span class="kw">with</span> ui.<span class="cls">VStack</span>(spacing=8, height=0):
            <span class="kw">with</span> ui.<span class="cls">HStack</span>(height=24, spacing=5):
                ui.<span class="cls">Label</span>(<span class="str">"Model Prim:"</span>, width=110, name=<span class="str">"label"</span>)
                ui.<span class="cls">StringField</span>(model=self._model_path_model)
                ui.<span class="cls">Button</span>(<span class="str">"Use Selection"</span>, width=100, clicked_fn=self._on_use_selection)

            <span class="kw">with</span> ui.<span class="cls">HStack</span>(height=24, spacing=5):
                ui.<span class="cls">Label</span>(<span class="str">"Tileset:"</span>, width=110, name=<span class="str">"label"</span>)
                self._tileset_combo = ui.<span class="cls">ComboBox</span>(0)
                ui.<span class="cls">Button</span>(<span class="str">"Refresh"</span>, width=100, clicked_fn=self._refresh_tilesets)

            <span class="kw">with</span> ui.<span class="cls">HStack</span>(height=24, spacing=5):
                ui.<span class="cls">Label</span>(<span class="str">"Margin (m):"</span>, width=110, name=<span class="str">"label"</span>)
                ui.<span class="cls">FloatField</span>(model=self._margin_model, width=80)
                ui.<span class="cls">Spacer</span>()

            ui.<span class="cls">Button</span>(<span class="str">"Calculate &amp; Assign Boundary"</span>, height=32,
                      name=<span class="str">"primary"</span>, clicked_fn=self._on_assign_boundary)
            self._status_label = ui.<span class="cls">Label</span>(<span class="str">"Ready"</span>, name=<span class="str">"status"</span>, height=18)</code></pre>

<h3>6.2 Widgets bind to models, not values</h3>
<p>Input widgets don't hold their value &mdash; a <b>model object</b> does
(<code>SimpleStringModel</code>, <code>SimpleBoolModel</code>, <code>SimpleFloatModel</code>&hellip;).
You read and write through the model; the widget is just a view of it. This is the single most
important omni.ui idiom. In the example, the button handler reads both fields through their
models:</p>

<pre><code>model_path = self._model_path_model.get_value_as_string().strip()
margin = self._margin_model.get_value_as_float()
...
self._model_path_model.set_value(paths[0])   <span class="comment"># writing updates the StringField on screen</span></code></pre>

<p>Composite widgets expose a model <em>tree</em>. The example's tileset
<code>ComboBox</code> is repopulated by editing its item children, and read by asking for the
selected index:</p>

<pre><code><span class="comment"># rebuild the dropdown items after a stage scan</span>
items_model = self._tileset_combo.model
<span class="kw">for</span> item <span class="kw">in</span> items_model.get_item_children():
    items_model.remove_item(item)
<span class="kw">for</span> path <span class="kw">in</span> self._tileset_paths:
    items_model.append_child_item(<span class="kw">None</span>, ui.<span class="cls">SimpleStringModel</span>(path))

<span class="comment"># read the current selection (an index into the same list)</span>
index = self._tileset_combo.model.get_item_value_model().get_value_as_int()</code></pre>

<h3>6.3 Styling &mdash; one dict, CSS-like selectors</h3>
<p>Style is a nested dict applied once at the window root with
<code>self.frame.set_style(WINDOW_STYLE)</code>. Selectors are
<code>"Type::name"</code> (the <code>name=</code> you give a widget) and
<code>":state"</code> pseudo-classes. Colors are <code>0xAABBGGRR</code> ints
(<b>ARGB with channels reversed vs web hex</b> &mdash; a classic first-week trap).
The example's complete style dict:</p>

<span class="file">acme/geo_integration/ui/geo_window.py</span>
<pre><code>WINDOW_STYLE = {
    <span class="str">"Window"</span>:          {<span class="str">"background_color"</span>: 0xFF1F1F1F},
    <span class="str">"Label::label"</span>:    {<span class="str">"font_size"</span>: 12, <span class="str">"color"</span>: 0xFFAAAAAA},  <span class="comment"># ui.Label(..., name="label")</span>
    <span class="str">"Label::status"</span>:   {<span class="str">"font_size"</span>: 11, <span class="str">"color"</span>: 0xFFAAAAAA},
    <span class="str">"Button::primary"</span>: {<span class="str">"background_color"</span>: 0xFF447D3A, <span class="str">"border_radius"</span>: 3},
    <span class="str">"Button::primary:hovered"</span>: {<span class="str">"background_color"</span>: 0xFF548D4A},  <span class="comment"># pseudo-state</span>
    <span class="str">"StringField"</span>:     {<span class="str">"background_color"</span>: 0xFF333333, <span class="str">"border_radius"</span>: 3},
    <span class="str">"FloatField"</span>:      {<span class="str">"background_color"</span>: 0xFF333333, <span class="str">"border_radius"</span>: 3},
    <span class="str">"ComboBox"</span>:        {<span class="str">"background_color"</span>: 0xFF333333, <span class="str">"border_radius"</span>: 3},
}</code></pre>

<p>Note <code>0xFF447D3A</code>: that's web green <code>#3A7D44</code> with the channels
reversed. As the style dict grows, move it to its own <code>styles.py</code> with shared
<code>COLORS</code> / <code>SPACING</code> constants &mdash; one source of truth is what keeps a
15-widget UI consistent.</p>

<h3>6.4 One window class is fine &mdash; until it isn't</h3>
<p>The example keeps the entire UI in one class because it fits on one screen: a handful of
rows, four callbacks, a status label. That's the right call at this size. The growth path,
when a tool gets bigger, is to split by grain: <b>widgets</b> (one input concern, owns its
models, exposes <code>value</code> / <code>clear()</code>) &rarr; <b>panels</b> (a functional
region composed of widgets, takes callbacks in its constructor) &rarr; the <b>window</b>
(assembles panels, routes callbacks &mdash; zero business logic). Refactor when the window class
stops fitting in your head, not before.</p>

<!-- ================================================================ -->
<h2 id="architecture"><span class="num">7.</span>Logic architecture &mdash; the UI / core split</h2>

<p>The example draws exactly one architectural line, and it's the one worth being strict
about from day one: <b>the core never imports omni</b>. Not <code>omni.ui</code>, not
<code>omni.usd</code> &mdash; nothing. It works purely on <code>pxr</code> types and receives the
stage as an argument.</p>

<div class="flow">&#9484;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; ui/ &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9488;   omni.ui + omni.usd. Reads widgets, guards input,
&#9474; geo_window.py            &#9474;   calls core, reports status. No USD authoring here.
&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;
              &#9660;  plain function calls; the stage is passed in
&#9484;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; core/ &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9488;   pure pxr (Gf, Sdf, Usd, UsdGeom). Zero omni imports.
&#9474; boundary.py              &#9474;   compute_footprint() &middot; find_tilesets() &middot; assign_boundary()
&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;
              &#9660;
        &#9484;&#9472; pxr / USD &#9472;&#9488;</div>

<p>What that buys, concretely:</p>
<ul>
  <li><b>Testability.</b> <code>boundary.py</code> runs under plain pytest with just the
      <code>pxr</code> Python module and an in-memory stage
      (<code>Usd.Stage.CreateInMemory()</code>) &mdash; no Kit process, no GPU, CI-friendly.
      Its docstring states this as a design goal.</li>
  <li><b>One Kit chokepoint.</b> Only the UI layer calls
      <code>omni.usd.get_context()</code>. Core functions take <code>stage</code> as a
      parameter &mdash; which is also what makes them reusable from a headless script.</li>
  <li><b>A typed contract between layers.</b> The two sides exchange a tiny dataclass,
      not widget state:</li>
</ul>

<span class="file">acme/geo_integration/core/boundary.py</span>
<pre><code><span class="kw">from</span> dataclasses <span class="kw">import</span> dataclass
<span class="kw">from</span> pxr <span class="kw">import</span> Gf, Sdf, Usd, UsdGeom      <span class="comment"># the ONLY imports. No omni.</span>

<span class="kw">@dataclass</span>
<span class="kw">class</span> <span class="cls">Footprint</span>:
    <span class="str">"""Ground footprint polygon in stage world XY (Z-up stage), CCW order."""</span>
    corners: <span class="cls">List</span>[Gf.<span class="cls">Vec2d</span>]

<span class="kw">def</span> <span class="fn">compute_footprint</span>(stage: Usd.<span class="cls">Stage</span>, prim_path: str, margin: float = 0.0) -&gt; <span class="cls">Footprint</span>: ...
<span class="kw">def</span> <span class="fn">find_tilesets</span>(stage: Usd.<span class="cls">Stage</span>) -&gt; <span class="cls">List</span>[str]: ...
<span class="kw">def</span> <span class="fn">assign_boundary</span>(stage: Usd.<span class="cls">Stage</span>, tileset_path: str, footprint: <span class="cls">Footprint</span>) -&gt; str: ...</code></pre>

<h3>The supporting trick: optional omni imports</h3>
<p>Anything that <em>does</em> touch Kit, but isn't essential, is imported defensively &mdash;
so the package stays importable in a plain Python environment. The example does this twice:</p>

<span class="file">acme/geo_integration/ui/geo_window.py</span>
<pre><code><span class="kw">try</span>:
    <span class="kw">import</span> omni.kit.notification_manager <span class="kw">as</span> nm
    HAS_NOTIFICATIONS = <span class="kw">True</span>
<span class="kw">except</span> <span class="cls">ImportError</span>:
    HAS_NOTIFICATIONS = <span class="kw">False</span>     <span class="comment"># toasts become safe no-ops</span></code></pre>

<span class="file">acme/geo_integration/__init__.py</span>
<pre><code><span class="kw">try</span>:
    <span class="kw">from</span> .extension <span class="kw">import</span> <span class="cls">GeoIntegrationExtension</span>
    __all__ = [<span class="str">"GeoIntegrationExtension"</span>]
<span class="kw">except</span> <span class="cls">ImportError</span>:
    <span class="comment"># Outside Kit (plain pxr environment): core stays importable for tests.</span>
    __all__ = []</code></pre>

<p>For a bigger tool, the next layers to add are a <b>viewmodel</b> (state + orchestration
between UI and core, notifying the UI through registered callbacks) and <b>services</b>
(thin adapters that quarantine Kit globals like the stage context and event streams). The
dependency rule stays the same: arrows point one way, and nothing below the UI imports
<code>omni.ui</code>.</p>

<!-- ================================================================ -->
<h2 id="kit-services"><span class="num">8.</span>Talking to Kit &mdash; stage, selection, events, notifications</h2>

<p>Five integration points cover ~90% of what a Composer tool needs. The first four appear
in the example; the fifth is the pattern you'll want next.</p>

<h3>8.1 Get the stage</h3>
<pre><code><span class="kw">import</span> omni.usd
stage = omni.usd.get_context().get_stage()      <span class="comment"># pxr.Usd.Stage or None &mdash; ALWAYS check None</span></code></pre>
<p>Every action in the example starts with this guard &mdash; Composer can run with no stage
open, and <code>get_stage()</code> returns <code>None</code> then.</p>

<h3>8.2 Read the viewport selection</h3>
<span class="file">ui/geo_window.py &mdash; the "Use Selection" button</span>
<pre><code><span class="kw">def</span> <span class="fn">_on_use_selection</span>(self):
    paths = omni.usd.get_context().get_selection().get_selected_prim_paths()
    <span class="kw">if</span> paths:
        self._model_path_model.set_value(paths[0])   <span class="comment"># selection &rarr; model &rarr; StringField updates</span>
    <span class="kw">else</span>:
        self._set_status(<span class="str">"Nothing selected in the viewport"</span>)</code></pre>
<p>A "Use Selection" button next to a path field is a tiny touch that makes a stage tool feel
native &mdash; nobody wants to type <code>/World/Factory</code> by hand.</p>

<h3>8.3 Toast notifications</h3>
<span class="file">ui/geo_window.py</span>
<pre><code><span class="kw">def</span> <span class="fn">_notify</span>(self, message: str, error: bool = <span class="kw">False</span>):
    <span class="kw">if</span> <span class="kw">not</span> HAS_NOTIFICATIONS:      <span class="comment"># the optional import from &sect;7</span>
        <span class="kw">return</span>
    status = nm.<span class="cls">NotificationStatus</span>.WARNING <span class="kw">if</span> error <span class="kw">else</span> nm.<span class="cls">NotificationStatus</span>.INFO
    nm.post_notification(message, status=status)</code></pre>
<p>The example reports every outcome twice: a persistent in-window status label
(<code>self._status_label.text = message</code>) plus a transient toast. Cheap, and it means
the user never wonders whether the click did anything.</p>

<h3>8.4 Menu bar entry</h3>
<pre><code><span class="kw">import</span> omni.kit.menu.utils <span class="kw">as</span> menu_utils
entry = menu_utils.add_menu_items(
    [menu_utils.<span class="cls">MenuItemDescription</span>(name=<span class="str">"Geo Integration"</span>,
                                    onclick_fn=show_window,
                                    appear_after=<span class="str">"Window"</span>)],   <span class="comment"># position within the menu</span>
    <span class="str">"Window"</span>)                                  <span class="comment"># parent menu</span>
menu_utils.remove_menu_items(entry, <span class="str">"Window"</span>)  <span class="comment"># in on_shutdown</span></code></pre>

<h3>8.5 React to stage events (the pattern you'll want next)</h3>
<p>The example rescans tilesets on a manual Refresh click. The upgrade is to subscribe to
stage events and refresh automatically when a file opens or finishes loading:</p>
<pre><code>self._sub = omni.usd.get_context().get_stage_event_stream() \\
    .create_subscription_to_pop(self._on_stage_event, name=<span class="str">"MyTool.StageWatch"</span>)

<span class="kw">def</span> <span class="fn">_on_stage_event</span>(self, event):
    <span class="kw">if</span> event.type == int(omni.usd.<span class="cls">StageEventType</span>.OPENED):        <span class="comment"># new file &rarr; rescan</span>
        ...
    <span class="kw">elif</span> event.type == int(omni.usd.<span class="cls">StageEventType</span>.ASSETS_LOADED): <span class="comment"># payloads done &rarr; safe to scan</span>
        ...

<span class="comment"># Lifetime = the subscription object. To unsubscribe: self._sub = None.</span></code></pre>

<div class="box warn">
<b>Undo caveat.</b> The example's core authors USD directly through <code>pxr</code>
(<code>stage.DefinePrim</code>, <code>CreateRelationship</code>, attribute sets) &mdash; which means
<b>Ctrl+Z does not undo it</b>. Fine for a v1 utility. For production polish, route stage
mutations through <code>omni.kit.commands</code> / <code>omni.kit.undo</code> so your tool's
edits behave like every other edit in Composer.
</div>

<!-- ================================================================ -->
<h2 id="wiring"><span class="num">9.</span>Wiring it into the app &mdash; build &amp; registration</h2>

<p>This is the part no tutorial covers. Three pieces, in dependency order, for a Kit app
built from NVIDIA's app template (the <code>repo.bat</code> / premake toolchain).</p>

<h3>9.1 The extension's own premake5.lua (the COMPLETE file)</h3>
<span class="file">acme.geo_integration/premake5.lua</span>
<pre><code><span class="comment">-- Use folder name to build extension name and tag.</span>
<span class="kw">local</span> ext = get_current_extension_info()
project_ext(ext)

<span class="comment">-- Link only these folders into the extension target directory</span>
repo_build.prebuild_link {
    { <span class="str">"acme"</span>, ext.target_dir..<span class="str">"/acme"</span> },
}

repo_build.prebuild_copy {
    { <span class="str">"README.md"</span>, ext.target_dir..<span class="str">"/README.md"</span> },
}</code></pre>
<p>No compilation. It <b>symlinks</b> your source package into
<code>_build/&lt;platform&gt;/release/exts/acme.geo_integration/</code>. Because it's a link,
edits to source are live &mdash; restart the app (or toggle the extension in the Extension Manager
to hot-reload) and you're running new code.</p>

<h3>9.2 Repo placement</h3>
<p>Simplest: create the folder directly under <code>source/extensions/acme.geo_integration/</code>
&mdash; that's the directory the Kit build (premake's <code>kit.setup_all()</code>) scans. If the
extension needs its own life (separate versioning, shared between several Kit apps), make it
its own git repo under <code>externals/</code>, mounted as a submodule, and link it into
<code>source/extensions/</code> (an NTFS junction on Windows, a symlink elsewhere). Start
simple; extract to a submodule later if needed.</p>

<h3>9.3 Register in the app manifest</h3>
<span class="file">source/apps/my_app.kit</span>
<pre><code>############ your extensions
<span class="str">"acme.setup_ext"</span>        = { order = 1000 }   <span class="comment"># order controls startup sequence</span>
<span class="str">"acme.geo_integration"</span>  = {}                 <span class="comment"># &larr; one line. That's the registration.</span></code></pre>

<h3>9.4 Build &amp; run</h3>
<pre><code>cd &lt;your-kit-app-repo&gt;
.\\repo.bat build          <span class="comment"># generates _build, links extensions (fast &mdash; no compile for python)</span>
.\\repo.bat launch         <span class="comment"># launches my_app.kit (some templates ship a run.bat instead)</span>
<span class="comment"># dev loop after that: edit .py &rarr; restart app, or Extension Manager &rarr; disable/enable to hot-reload</span></code></pre>

<!-- ================================================================ -->
<h2 id="testing"><span class="num">10.</span>Testing</h2>

<p>The architecture from &sect;7 is what makes testing cheap. Two tiers:</p>
<ul>
  <li><b>Pure logic tests, outside Kit.</b> Because <code>core/boundary.py</code> imports only
      <code>pxr</code>, it runs under plain pytest against in-memory stages
      (<code>Usd.Stage.CreateInMemory()</code>): build a prim with a known bounding box, call
      <code>compute_footprint()</code>, assert on the hull corners; call
      <code>assign_boundary()</code> twice and assert the polygon is updated in place rather
      than duplicated. The <code>ImportError</code> guard in <code>__init__.py</code> is what
      keeps the package importable in that environment.</li>
  <li><b>In-Kit tests.</b> The <code>[[test]]</code> block in <code>extension.toml</code> declares
      <code>omni.kit.test</code> and headless flags (<code>--no-window</code>,
      <code>--/app/fastShutdown=1</code>). Run via <code>.\\repo.bat test</code>; Kit boots a
      minimal app, loads your extension, and executes tests inside it &mdash; this is where you
      verify startup/shutdown and (with <code>omni.kit.ui_test</code>) drive actual widgets.</li>
</ul>

<!-- ================================================================ -->
<h2 id="checklist"><span class="num">11.</span>From-scratch checklist &amp; gotchas</h2>

<h3>Build order for a new extension</h3>
<ol>
  <li>Create <code>source/extensions/acme.my_tool/</code> with <code>config/extension.toml</code>,
      <code>premake5.lua</code> (copy &sect;9.1), <code>README.md</code>,
      and the package skeleton <code>acme/my_tool/__init__.py</code> + <code>extension.py</code>.</li>
  <li>Write the minimal <code>IExt</code>: <code>on_startup</code> adds a menu item that opens a
      window containing one <code>ui.Label("hello")</code>; <code>on_shutdown</code> removes it.
      <b>Get this running before writing any logic.</b></li>
  <li>Add <code>"acme.my_tool" = {}</code> to your <code>.kit</code> file; build; launch; verify
      the menu entry appears.</li>
  <li>Grow inward: <code>core/</code> functions that take a stage and return data
      (+ pytest outside Kit) &rarr; the window's rows and models &rarr; callbacks that glue them.
      Keep USD authoring out of the window class.</li>
  <li>Style pass last: one style dict at the window root; extract to a constants module
      as it grows.</li>
</ol>

<h3>Gotchas (each one cost somebody an afternoon)</h3>
<table>
  <tr><th>Gotcha</th><th>Detail</th></tr>
  <tr><td>Folder name = extension id = python path</td><td><code>acme.geo_integration</code> must contain <code>acme/geo_integration/</code> and <code>[[python.module]] name = "acme.geo_integration"</code>. Any mismatch &rarr; silent load failure (check the console log).</td></tr>
  <tr><td>Colors are 0xAABBGGRR</td><td>omni.ui style colors put <b>blue before red</b>. Web <code>#3A7D44</code> (green) becomes <code>0xFF447D3A</code> &mdash; exactly the value in the example's style dict.</td></tr>
  <tr><td>Stage can be <code>None</code></td><td>Composer can run with no stage open. Every action in the example guards the stage (and shows a status message) before doing anything.</td></tr>
  <tr><td>Validate stage conventions early</td><td>The footprint math assumes a Z-up stage; <code>compute_footprint()</code> checks <code>UsdGeom.GetStageUpAxis()</code> and raises a clear <code>ValueError</code> instead of silently producing a sideways polygon.</td></tr>
  <tr><td>Direct USD edits aren't undoable</td><td>Authoring via raw <code>pxr</code> bypasses Composer's undo stack (&sect;8). Wrap mutations in <code>omni.kit.commands</code> for Ctrl+Z support.</td></tr>
  <tr><td>Subscriptions live as objects</td><td><code>create_subscription_to_pop()</code> returns a handle; if you don't store it, it's garbage-collected and your events silently stop. To unsubscribe, drop the reference.</td></tr>
  <tr><td>Hot reload doubles leaks</td><td>Anything not undone in <code>on_shutdown()</code> (menus, callbacks, subscriptions) duplicates on every extension reload during dev.</td></tr>
  <tr><td>Heavy work blocks the render loop</td><td>Kit UI and Python run on the main thread. A full-stage traversal on a huge scene freezes the viewport; chunk work or use <code>asyncio</code> with <code>omni.kit.app.get_app().next_update_async()</code>.</td></tr>
</table>

<h3>Where to look in the example when stuck</h3>
<table>
  <tr><th>"How do I&hellip;"</th><th>Read this file</th></tr>
  <tr><td>structure startup/shutdown, menus, lazy windows</td><td><code>extension.py</code></td></tr>
  <tr><td>build form rows, bind models, drive a ComboBox</td><td><code>ui/geo_window.py</code></td></tr>
  <tr><td>theme everything consistently</td><td><code>ui/geo_window.py</code> (<code>WINDOW_STYLE</code>)</td></tr>
  <tr><td>read the viewport selection</td><td><code>ui/geo_window.py</code> (<code>_on_use_selection</code>)</td></tr>
  <tr><td>show toasts without a hard dependency</td><td><code>ui/geo_window.py</code> (<code>_notify</code> + import guard)</td></tr>
  <tr><td>compute bounds / hulls from prims</td><td><code>core/boundary.py</code> (<code>compute_footprint</code>)</td></tr>
  <tr><td>create prims, apply schemas, author relationships</td><td><code>core/boundary.py</code> (<code>assign_boundary</code> internals)</td></tr>
  <tr><td>keep logic testable outside Kit</td><td><code>core/boundary.py</code> (pure pxr) + <code>__init__.py</code> (import guard)</td></tr>
</table>

<footer>
  <span class="tag">graphics &middot; usd &middot; omniverse &middot; kit</span><br>
  Distilled from building a real geo-integration extension for a USD Composer&ndash;based Kit app.
  Extension and app names are genericized.
</footer>

</div>
`;

export const script = ``;
