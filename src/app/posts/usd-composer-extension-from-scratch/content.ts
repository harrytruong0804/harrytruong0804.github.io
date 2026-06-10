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
    Running example: a USD scene query tool &mdash; search prims by name / type / schema,
    highlight matches in the viewport, frame the camera on click. Referred to below as
    <code>acme.usd_query_tool</code>.
  </div>
</header>

<div class="toc">
  <b>Contents</b>
  <ol>
    <li><a href="#principles">First principles &mdash; what an extension actually is</a></li>
    <li><a href="#reference">The running example: a scene query tool at a glance</a></li>
    <li><a href="#anatomy">Anatomy: the folder contract</a></li>
    <li><a href="#manifest">The manifest &mdash; extension.toml</a></li>
    <li><a href="#lifecycle">Lifecycle &mdash; IExt, startup, shutdown</a></li>
    <li><a href="#ui">UI from first principles &mdash; omni.ui</a></li>
    <li><a href="#architecture">Logic architecture &mdash; layered MVVM</a></li>
    <li><a href="#kit-services">Talking to Kit &mdash; stage, events, viewport, commands</a></li>
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
<h2 id="reference"><span class="num">2.</span>The running example: a scene query tool at a glance</h2>

<p>The query tool is a complete, real example of "window + logic" done properly.
What it does: search prims on the open stage by name / type / API schema / custom property
(form-based or a typed query string with <code>AND</code>/<code>OR</code>), list results,
highlight them in the viewport, and frame the camera on click.</p>

<div class="flow">USER                    UI LAYER                 VIEWMODEL LAYER             CORE / SERVICES
 &#9474;                       &#9474;                          &#9474;                            &#9474;
 &#9474; clicks Search &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9654; QueryToolWindow            &#9474;                            &#9474;
 &#9474;                       &#9474; _on_basic_search() &#9472;&#9472;&#9472;&#9472;&#9654; SearchViewModel              &#9474;
 &#9474;                       &#9474;                          &#9474; execute_basic_search() &#9472;&#9472;&#9654; QueryBuilder.build_tree(criteria)
 &#9474;                       &#9474;                          &#9474;                            QueryEngine._execute_search(stage,&hellip;)
 &#9474;                       &#9474;                          &#9474;                            &#9474;  iterate prims, evaluate AND/OR tree
 &#9474;                       &#9474;                          &#9474; &#9664;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; SearchResultSet &#9472;&#9472;&#9496;
 &#9474;                       &#9474; &#9664;&#9472;&#9472; results_callback &#9472;&#9472;&#9472;&#9472;&#9474; results.set_results(&hellip;)
 &#9474; sees result list      &#9474; ResultsPanel.set_results &#9474; HighlightManager.highlight_results(paths)
 &#9474; clicks a row &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9654; &#9474; _on_result_selected &#9472;&#9472;&#9472;&#9654; &#9474; select_result(i) &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9654; FramePrimsCommand (camera focus)</div>

<p>Where it lives and how it reaches the app (three hops &mdash; each explained in
<a href="#wiring">&sect;9</a>):</p>

<div class="flow">git submodule                 link / junction                      app manifest
externals/acme.usd_query_tool &#9472;&#9472;&#9654; source/extensions/acme.usd_query_tool &#9472;&#9472;&#9654; my_app.kit
(its own git repo)            (Kit build scans this folder)        "acme.usd_query_tool" = {}</div>

<!-- ================================================================ -->
<h2 id="anatomy"><span class="num">3.</span>Anatomy: the folder contract</h2>

<p>The full layout of the example. The top half (config / data / docs / premake) is the
<em>extension contract</em>; the bottom half (the Python package) is <em>your architecture
choice</em> &mdash; Kit doesn't care how you organize it.</p>

<div class="tree">acme.usd_query_tool/
&#9500;&#9472;&#9472; config/
&#9474;   &#9492;&#9472;&#9472; extension.toml            <span class="n">&larr; THE manifest. Identity, deps, entry module (&sect;4)</span>
&#9500;&#9472;&#9472; data/
&#9474;   &#9500;&#9472;&#9472; icon.svg                  <span class="n">&larr; shown in the Extension Manager</span>
&#9474;   &#9492;&#9472;&#9472; preview.svg
&#9500;&#9472;&#9472; docs/
&#9474;   &#9500;&#9472;&#9472; README.md                 <span class="n">&larr; user-facing docs (rendered in Extension Manager)</span>
&#9474;   &#9492;&#9472;&#9472; CHANGELOG.md
&#9500;&#9472;&#9472; premake5.lua                  <span class="n">&larr; 10 lines: link folders into the build output (&sect;9)</span>
&#9492;&#9472;&#9472; acme/                         <span class="n">&larr; Python namespace package</span>
    &#9492;&#9472;&#9472; usd_query_tool/           <span class="n">&larr; the module named in [[python.module]]</span>
        &#9500;&#9472;&#9472; __init__.py           <span class="n">&larr; re-exports the IExt class</span>
        &#9500;&#9472;&#9472; extension.py          <span class="n">&larr; lifecycle: on_startup / on_shutdown (&sect;5)</span>
        &#9500;&#9472;&#9472; <span class="d">models/</span>               <span class="n">&larr; pure data: FilterCriteria, SearchResult, QueryCondition</span>
        &#9500;&#9472;&#9472; <span class="d">core/</span>                 <span class="n">&larr; logic: query_engine, query_parser, query_builder,</span>
        &#9474;                         <span class="n">  stage_collector, highlight_manager, filter_matchers</span>
        &#9500;&#9472;&#9472; <span class="d">services/</span>             <span class="n">&larr; Kit adapters: stage_service, clipboard_service, event_service</span>
        &#9500;&#9472;&#9472; <span class="d">viewmodel/</span>            <span class="n">&larr; state + orchestration: search_viewmodel, filter_state,</span>
        &#9474;                         <span class="n">  results_viewmodel, ui_state_manager</span>
        &#9500;&#9472;&#9472; <span class="d">ui/</span>                   <span class="n">&larr; omni.ui code: query_tool_window, panels/, widgets/, styles/</span>
        &#9500;&#9472;&#9472; <span class="d">utils/</span>                <span class="n">&larr; usd_helpers, string_utils, constants</span>
        &#9492;&#9472;&#9472; <span class="d">tests/</span>                <span class="n">&larr; pytest-style tests, runnable inside Kit (&sect;10)</span></div>

<div class="box info">
<b>Naming convention.</b> The folder name <b>is</b> the extension id:
<code>acme.usd_query_tool</code>. The Python package path must mirror it with dots &rarr; folders:
<code>acme/usd_query_tool/</code>. Get this wrong and Kit can't import your module.
</div>

<!-- ================================================================ -->
<h2 id="manifest"><span class="num">4.</span>The manifest &mdash; extension.toml</h2>

<p>This file is what makes the folder an extension. The example manifest, abridged
to the parts that matter:</p>

<span class="file">acme.usd_query_tool/config/extension.toml</span>
<pre><code>[package]
title = <span class="str">"USD Scene Query Tool"</span>
version = <span class="str">"0.1.0"</span>
description = <span class="str">"A USD Scene Query Tool for searching prims by name, type, schema..."</span>
category = <span class="str">"Query"</span>
icon = <span class="str">"data/icon.svg"</span>

[dependencies]                          <span class="comment"># other EXTENSIONS, loaded before yours</span>
<span class="str">"omni.kit.uiapp"</span> = {}                   <span class="comment"># base UI application stack</span>
<span class="str">"omni.kit.menu.utils"</span> = {}              <span class="comment"># add entries to the menu bar</span>
<span class="str">"omni.ui"</span> = {}                          <span class="comment"># the widget toolkit (&sect;6)</span>
<span class="str">"omni.usd"</span> = {}                         <span class="comment"># UsdContext: stage access + stage events (&sect;8)</span>
<span class="str">"omni.kit.viewport.utility"</span> = {}        <span class="comment"># active viewport / camera</span>
<span class="str">"omni.kit.clipboard"</span> = {}               <span class="comment"># copy-to-clipboard</span>
<span class="str">"omni.kit.notification_manager"</span> = {}    <span class="comment"># toast notifications</span>
<span class="str">"omni.kit.commands"</span> = {}                <span class="comment"># execute undoable commands (FramePrims&hellip;)</span>

[[python.module]]
name = <span class="str">"acme.usd_query_tool"</span>            <span class="comment"># Kit imports THIS package on load</span>

[[test]]
dependencies = [<span class="str">"omni.kit.test"</span>, <span class="str">"omni.kit.ui_test"</span>]
args = [<span class="str">"--no-window"</span>, <span class="str">"--/app/fastShutdown=1"</span>, ...]   <span class="comment"># headless test run flags</span></code></pre>

<p><b>The rule for [dependencies]:</b> every <code>import omni.something</code> in your code
should have a matching line here. It works without the line <em>if something else already
loaded that extension</em> &mdash; and then breaks the day the app config changes. Declare what you
import.</p>

<!-- ================================================================ -->
<h2 id="lifecycle"><span class="num">5.</span>Lifecycle &mdash; IExt, startup, shutdown</h2>

<p>Kit imports your module and looks for a class implementing <code>omni.ext.IExt</code>.
Two methods are the whole lifecycle:</p>

<span class="file">acme/usd_query_tool/extension.py (abridged)</span>
<pre><code><span class="kw">import</span> omni.ext
<span class="kw">import</span> omni.kit.menu.utils <span class="kw">as</span> menu_utils
<span class="kw">from</span> .ui.query_tool_window <span class="kw">import</span> <span class="cls">QueryToolWindow</span>
<span class="kw">from</span> .viewmodel.search_viewmodel <span class="kw">import</span> <span class="cls">SearchViewModel</span>

<span class="kw">class</span> <span class="cls">UsdQueryToolExtension</span>(omni.ext.<span class="cls">IExt</span>):
    WINDOW_NAME = <span class="str">"USD Scene Query Tool"</span>

    <span class="kw">def</span> <span class="fn">on_startup</span>(self, ext_id: str):
        self._viewmodel = <span class="cls">SearchViewModel</span>()           <span class="comment"># logic first&hellip;</span>
        self._menu_entry = menu_utils.add_menu_items([  <span class="comment"># &hellip;then a menu entry.</span>
            menu_utils.<span class="cls">MenuItemDescription</span>(
                name=<span class="str">"USD Query Tool"</span>,
                onclick_fn=self._on_menu_click)
        ], <span class="str">"Window"</span>)                                  <span class="comment"># &rarr; Window &#9656; USD Query Tool</span>
        self._viewmodel.initialize()                    <span class="comment"># subscribe to stage events, auto-load</span>

    <span class="kw">def</span> <span class="fn">on_shutdown</span>(self):                            <span class="comment"># undo EVERYTHING from startup</span>
        menu_utils.remove_menu_items(self._menu_entry, <span class="str">"Window"</span>)
        self._viewmodel.shutdown()                      <span class="comment"># unsubscribe events, clear highlights</span>
        <span class="kw">if</span> self._window:
            self._window.destroy()

    <span class="kw">def</span> <span class="fn">_on_menu_click</span>(self):                          <span class="comment"># LAZY window creation</span>
        <span class="kw">if</span> self._window <span class="kw">is</span> <span class="kw">None</span>:
            self._window = <span class="cls">QueryToolWindow</span>(self.WINDOW_NAME)
            self._window.set_viewmodel(self._viewmodel)
        <span class="kw">else</span>:
            self._window.visible = <span class="kw">True</span>
            self._window.focus()</code></pre>

<p>Three deliberate decisions worth copying:</p>
<ul>
  <li><b>Lazy window.</b> Startup registers a menu item only; the window (and all its widgets)
      is built on first click. Keeps app boot fast, and the extension works headless.</li>
  <li><b>ViewModel is created at startup, window later.</b> Logic lifetime &ne; UI lifetime.
      The viewmodel subscribes to stage events immediately, so dropdowns are pre-populated
      before the user ever opens the window.</li>
  <li><b>Symmetric shutdown.</b> Everything <code>on_startup</code> registers (menu entry,
      event subscriptions, window) is explicitly torn down. Kit hot-reloads extensions during
      development &mdash; a leaked subscription or menu item means duplicate callbacks
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
  <tr><td><code>ui.CollapsableFrame</code>, <code>ui.ScrollingFrame</code></td><td>Expandable group panel; scroll container. The query tool's accordion is two CollapsableFrames whose expand events collapse each other.</td></tr>
</table>

<span class="file">the shape of every omni.ui build method</span>
<pre><code><span class="kw">def</span> <span class="fn">_build_ui</span>(self):
    <span class="kw">with</span> self.frame:                          <span class="comment"># window content root</span>
        <span class="kw">with</span> ui.<span class="cls">ScrollingFrame</span>():
            <span class="kw">with</span> ui.<span class="cls">VStack</span>(spacing=8, height=0):
                ui.<span class="cls">Label</span>(<span class="str">"USD Scene Query Tool"</span>, name=<span class="str">"title"</span>)
                ui.<span class="cls">Line</span>(height=2)
                self._search_panel.build()    <span class="comment"># panels are plain classes with .build()</span>
                self._results_panel.build()
                self._status_label = ui.<span class="cls">Label</span>(<span class="str">"Ready"</span>, name=<span class="str">"status"</span>)</code></pre>

<h3>6.2 Widgets bind to models, not values</h3>
<p>Input widgets don't hold their value &mdash; a <b>model object</b> does
(<code>SimpleStringModel</code>, <code>SimpleBoolModel</code>, <code>SimpleFloatModel</code>&hellip;).
You subscribe to the model, and read/write through it. This is the single most important
omni.ui idiom:</p>

<span class="file">ui/widgets/name_filter_widget.py (the actual pattern in the example)</span>
<pre><code><span class="kw">def</span> <span class="fn">build</span>(self):
    <span class="kw">with</span> ui.<span class="cls">HStack</span>(height=24, spacing=5):
        ui.<span class="cls">Label</span>(<span class="str">"Name:"</span>, width=100, name=<span class="str">"label"</span>)

        self._value_model = ui.<span class="cls">SimpleStringModel</span>(<span class="str">""</span>)          <span class="comment"># the value lives HERE</span>
        self._text_field = ui.<span class="cls">StringField</span>(model=self._value_model)
        self._value_model.add_value_changed_fn(self._on_changed) <span class="comment"># subscribe to the model</span>

        self._exact_model = ui.<span class="cls">SimpleBoolModel</span>(<span class="kw">True</span>)
        ui.<span class="cls">CheckBox</span>(model=self._exact_model, width=18)

<span class="kw">@property</span>
<span class="kw">def</span> <span class="fn">value</span>(self) -&gt; str:                                       <span class="comment"># widgets expose typed properties,</span>
    <span class="kw">return</span> self._value_model.get_value_as_string()           <span class="comment"># callers never touch ui internals</span></code></pre>

<h3>6.3 Styling &mdash; one dict, CSS-like selectors</h3>
<p>Style is a nested dict applied once at the window root with
<code>self.frame.set_style(WINDOW_STYLE)</code>. Selectors are
<code>"Type::name"</code> (the <code>name=</code> you give a widget) and
<code>":state"</code> pseudo-classes. Colors are <code>0xAABBGGRR</code> ints
(<b>ARGB with channels reversed vs web hex</b> &mdash; a classic first-week trap).</p>

<span class="file">ui/styles/style_constants.py (excerpt)</span>
<pre><code>WINDOW_STYLE = {
    <span class="str">"Window"</span>:            {<span class="str">"background_color"</span>: 0xFF1F1F1F},
    <span class="str">"Label::title"</span>:      {<span class="str">"font_size"</span>: 18, <span class="str">"color"</span>: 0xFFFFFFFF},   <span class="comment"># ui.Label(..., name="title")</span>
    <span class="str">"Button::primary"</span>:   {<span class="str">"background_color"</span>: 0xFF3A7D44},
    <span class="str">"Button::primary:hovered"</span>: {<span class="str">"background_color"</span>: 0xFF4A8D54},   <span class="comment"># pseudo-state</span>
    <span class="str">"StringField:focused"</span>:     {<span class="str">"border_color"</span>:     0xFF3A7D44},
}</code></pre>

<p>Centralizing every color/spacing in <code>style_constants.py</code> (as the example does
with its <code>COLORS</code> / <code>SPACING</code> dicts) is what keeps a 15-widget UI
consistent. Copy that file as your starting point.</p>

<h3>6.4 Composing: widgets &rarr; panels &rarr; window</h3>
<p>The example splits UI into three grain sizes, each a plain Python class
(only the window subclasses an omni.ui type):</p>
<ul>
  <li><b>Widget</b> (<code>ui/widgets/</code>) &mdash; one input concern: <code>NameFilterWidget</code>,
      <code>ObjectTypeWidget</code>, <code>CollapsibleGroup</code>. Owns its models; exposes
      <code>value</code>, <code>clear()</code>, <code>set_enabled()</code>.</li>
  <li><b>Panel</b> (<code>ui/panels/</code>) &mdash; a functional region composed of widgets:
      <code>SearchCriteriaPanel</code>, <code>QueryStringPanel</code>, <code>ResultsPanel</code>.
      Takes callbacks in its constructor (<code>on_search=&hellip;</code>, <code>on_clear=&hellip;</code>).</li>
  <li><b>Window</b> (<code>ui/query_tool_window.py</code>) &mdash; extends <code>ui.Window</code>;
      assembles panels, routes their callbacks to the viewmodel, and pushes viewmodel
      callbacks back into panels. <em>It contains zero business logic.</em></li>
</ul>

<!-- ================================================================ -->
<h2 id="architecture"><span class="num">7.</span>Logic architecture &mdash; layered MVVM</h2>

<p>The dependency rule: <b>arrows point one way</b>. UI knows the viewmodel; the viewmodel knows
core + services; core knows only models. Nothing below the UI imports <code>omni.ui</code>.</p>

<div class="flow">&#9484;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; ui/ &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9488;   omni.ui only. Dumb. Callbacks in, display out.
&#9474; window &rarr; panels &rarr; widgets      &#9474;
&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;
                &#9660;
&#9484;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472; viewmodel/ &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9488;   State + orchestration. No omni.ui imports.
&#9474; SearchViewModel  (orchestrator)&#9474;   FilterState / ResultsViewModel / UIStateManager
&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;   notify the UI through registered callbacks.
       &#9660;                  &#9660;
&#9484;&#9472;&#9472;&#9472;&#9472; core/ &#9472;&#9472;&#9472;&#9472;&#9472;&#9488;  &#9484;&#9472; services/ &#9472;&#9472;&#9488;   core  = pure-ish domain logic (parser, engine,
&#9474; query_engine   &#9474;  &#9474; stage_service&#9474;           builder, matchers, highlight)
&#9474; query_parser   &#9474;  &#9474; event_service&#9474;   services = thin adapters over Kit APIs
&#9474; stage_collector&#9474;  &#9474; clipboard    &#9474;           (omni.usd context, event stream, clipboard)
&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;  &#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9516;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;
       &#9660;                   &#9660;
&#9484;&#9472;&#9472;&#9472;&#9472; models/ &#9472;&#9472;&#9472;&#9488;   &#9484;&#9472; Kit / pxr &#9472;&#9488;   models = dataclasses only: FilterCriteria,
&#9474; pure dataclasses&#9474;  &#9474; omni.*, Usd &#9474;           SearchResult(Set), QueryNode tree
&#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;   &#9492;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9496;</div>

<h3>Why each layer exists</h3>
<table>
  <tr><th>Layer</th><th>Reason it's separate</th><th>Example</th></tr>
  <tr><td><code>models/</code></td><td>Searchable state is data, not behavior. Dataclasses can be built and asserted in tests with zero setup.</td><td><code>FilterCriteria</code>, <code>SearchResultSet</code>, <code>QueryNode</code>/<code>ConditionNode</code>/<code>BinaryOpNode</code></td></tr>
  <tr><td><code>core/</code></td><td>The actual algorithms. Depends on <code>pxr.Usd</code> but not on the UI, so it's unit-testable on an in-memory stage.</td><td><code>QueryEngine</code> walks prims and evaluates the AND/OR tree with short-circuiting; <code>QueryParser</code> turns a string into that tree</td></tr>
  <tr><td><code>services/</code></td><td>Quarantines Kit globals. Only services call <code>omni.usd.get_context()</code> &mdash; everything above receives a <code>Usd.Stage</code> as an argument.</td><td><code>StageService</code> (stage access + event subscription), <code>ClipboardService</code>, <code>EventService</code> (internal pub/sub)</td></tr>
  <tr><td><code>viewmodel/</code></td><td>One place where "what the user did" becomes "what the system does". Holds state the UI renders; UI stays stateless.</td><td><code>SearchViewModel.execute_basic_search()</code>: guard &rarr; loading flag &rarr; engine &rarr; results &rarr; highlights &rarr; event &rarr; clear loading</td></tr>
</table>

<h3>The testability trick: optional omni imports</h3>
<p>Every file that touches Kit wraps the import &mdash; so <code>core/</code> and
<code>services/</code> degrade gracefully and the test suite can run outside Kit:</p>

<span class="file">services/stage_service.py &middot; core/highlight_manager.py (same pattern in both)</span>
<pre><code><span class="kw">try</span>:
    <span class="kw">import</span> omni.usd
    <span class="kw">import</span> omni.kit.commands
    HAS_OMNI = <span class="kw">True</span>
<span class="kw">except</span> <span class="cls">ImportError</span>:
    HAS_OMNI = <span class="kw">False</span>          <span class="comment"># pure pytest run: methods become safe no-ops</span></code></pre>

<h3>Callback plumbing (how data flows without coupling)</h3>
<p>No signals framework &mdash; just <code>add_*_callback(fn)</code> lists, fired in plain loops.
The window registers with the viewmodel on <code>set_viewmodel()</code>:</p>

<span class="file">ui/query_tool_window.py</span>
<pre><code><span class="kw">def</span> <span class="fn">_connect_viewmodel</span>(self):
    self._viewmodel.ui_state.add_expansion_callback(self._on_expansion_changed)
    self._viewmodel.ui_state.add_loading_callback(self._on_loading_changed)
    self._viewmodel.results.add_results_callback(self._on_results_changed)</code></pre>

<p>&hellip;and symmetrically <b>removes</b> them in <code>destroy()</code>. Forgetting the removal is
the #1 source of "callback fired twice after reload" bugs.</p>

<!-- ================================================================ -->
<h2 id="kit-services"><span class="num">8.</span>Talking to Kit &mdash; stage, events, viewport, commands</h2>

<p>Five integration points cover ~90% of what a Composer tool needs.</p>

<h3>8.1 Get the stage</h3>
<pre><code><span class="kw">import</span> omni.usd
stage = omni.usd.get_context().get_stage()      <span class="comment"># pxr.Usd.Stage or None &mdash; ALWAYS check None</span></code></pre>

<h3>8.2 React to stage events (file opened, assets loaded)</h3>
<span class="file">services/stage_service.py</span>
<pre><code>self._sub = omni.usd.get_context().get_stage_event_stream() \\
    .create_subscription_to_pop(self._on_stage_event, name=<span class="str">"MyTool.StageService"</span>)

<span class="kw">def</span> <span class="fn">_on_stage_event</span>(self, event):
    <span class="kw">if</span> event.type == int(omni.usd.<span class="cls">StageEventType</span>.OPENED):        <span class="comment"># new file &rarr; reload dropdowns</span>
        ...
    <span class="kw">elif</span> event.type == int(omni.usd.<span class="cls">StageEventType</span>.ASSETS_LOADED): <span class="comment"># payloads done &rarr; safe to scan</span>
        ...

<span class="comment"># Lifetime = subscription object. To unsubscribe: self._sub = None.</span></code></pre>

<h3>8.3 Select / highlight prims</h3>
<span class="file">core/highlight_manager.py</span>
<pre><code>ctx = omni.usd.get_context()
ctx.get_selection().set_selected_prim_paths(prim_paths, <span class="kw">False</span>)  <span class="comment"># highlight = selection</span>
ctx.get_selection().clear_selected_prim_paths()</code></pre>
<div class="box warn">
<b>Honest caveat:</b> using <em>selection</em> as "highlighting" is a
shortcut &mdash; it stomps whatever the user had selected. The example's code comments this
explicitly. A production alternative is a session-layer override (e.g. display color / outline)
that doesn't touch selection.
</div>

<h3>8.4 Move the camera (undoable commands)</h3>
<span class="file">core/highlight_manager.py</span>
<pre><code><span class="kw">import</span> omni.kit.commands
<span class="kw">import</span> omni.kit.viewport.utility <span class="kw">as</span> vp

camera_path = vp.get_active_viewport().camera_path
omni.kit.commands.execute(<span class="str">"FramePrimsCommand"</span>,
                          prim_to_move=camera_path,
                          prims_to_frame=[prim_path])</code></pre>
<p>Anything that mutates the stage or camera should go through
<code>omni.kit.commands.execute(...)</code> &mdash; that's what makes it undoable (Ctrl+Z) and
consistent with the rest of Composer.</p>

<h3>8.5 Menu bar entry</h3>
<pre><code><span class="kw">import</span> omni.kit.menu.utils <span class="kw">as</span> menu_utils
entry = menu_utils.add_menu_items(
    [menu_utils.<span class="cls">MenuItemDescription</span>(name=<span class="str">"My Tool"</span>, onclick_fn=show_window)],
    <span class="str">"Window"</span>)                                  <span class="comment"># parent menu</span>
menu_utils.remove_menu_items(entry, <span class="str">"Window"</span>)  <span class="comment"># in on_shutdown</span></code></pre>

<!-- ================================================================ -->
<h2 id="wiring"><span class="num">9.</span>Wiring it into the app &mdash; build &amp; registration</h2>

<p>This is the part no tutorial covers. Four pieces, in dependency order, for a Kit app
built from NVIDIA's app template (the <code>repo.bat</code> / premake toolchain).</p>

<h3>9.1 The extension's own premake5.lua (10 lines, copy verbatim)</h3>
<span class="file">acme.usd_query_tool/premake5.lua &mdash; the COMPLETE file</span>
<pre><code><span class="comment">-- Use folder name to build extension name and tag.</span>
<span class="kw">local</span> ext = get_current_extension_info()
project_ext(ext)

<span class="comment">-- Link only these folders into the extension target directory</span>
repo_build.prebuild_link {
    { <span class="str">"data"</span>,  ext.target_dir..<span class="str">"/data"</span> },
    { <span class="str">"docs"</span>,  ext.target_dir..<span class="str">"/docs"</span> },
    { <span class="str">"acme"</span>,  ext.target_dir..<span class="str">"/acme"</span> },
}</code></pre>
<p>No compilation. It <b>symlinks</b> your source folders into
<code>_build/&lt;platform&gt;/release/exts/acme.usd_query_tool/</code>. Because they're links,
edits to source are live &mdash; restart the app (or toggle the extension in the Extension Manager
to hot-reload) and you're running new code.</p>

<h3>9.2 Repo placement: submodule + link</h3>
<p>The extension can be its <b>own git repo</b>, mounted as a submodule, then
linked (an NTFS junction on Windows) into the folder the Kit build actually scans:</p>
<pre><code><span class="comment"># .gitmodules</span>
[submodule <span class="str">"externals/acme.usd_query_tool"</span>]
    path = externals/acme.usd_query_tool
    url  = https://example.com/acme.usd_query_tool.git

<span class="comment"># link (source/extensions/ is what premake's kit.setup_all() scans)</span>
source/extensions/acme.usd_query_tool  &#9472;&#9472;&#9654;  externals/acme.usd_query_tool</code></pre>
<div class="box info">
<b>Simpler option for a new tool:</b> skip the submodule entirely and create the folder
directly under <code>source/extensions/acme.my_tool/</code>. The submodule+link dance only
buys you a separately-versioned repo &mdash; useful when one extension is shared between
several Kit apps. Start simple; extract to a submodule later if needed.
</div>

<h3>9.3 Register in the app manifest</h3>
<span class="file">source/apps/my_app.kit</span>
<pre><code>############ your extensions
<span class="str">"acme.setup_ext"</span>      = { order = 1000 }   <span class="comment"># order controls startup sequence</span>
<span class="str">"acme.usd_query_tool"</span> = {}                 <span class="comment"># &larr; one line. That's the registration.</span></code></pre>

<h3>9.4 Build &amp; run</h3>
<pre><code>cd &lt;your-kit-app-repo&gt;
.\\repo.bat build          <span class="comment"># generates _build, links extensions (fast &mdash; no compile for python)</span>
.\\repo.bat launch         <span class="comment"># launches my_app.kit (some templates ship a run.bat instead)</span>
<span class="comment"># dev loop after that: edit .py &rarr; restart app, or Extension Manager &rarr; disable/enable to hot-reload</span></code></pre>

<!-- ================================================================ -->
<h2 id="testing"><span class="num">10.</span>Testing</h2>

<p>Two tiers, both present in the example:</p>
<ul>
  <li><b>Pure logic tests</b> (<code>tests/test_query_parser.py</code>,
      <code>test_query_engine.py</code>, <code>test_filter_matchers.py</code>&hellip;) &mdash; run against
      in-memory stages (<code>Usd.Stage.CreateInMemory()</code>). The <code>HAS_OMNI</code>
      guard (&sect;7) is what makes these runnable under plain pytest.</li>
  <li><b>In-Kit tests</b> &mdash; the <code>[[test]]</code> block in <code>extension.toml</code> declares
      <code>omni.kit.test</code> + <code>omni.kit.ui_test</code> and headless flags
      (<code>--no-window</code>). Run via <code>.\\repo.bat test</code>; Kit boots a minimal app,
      loads your extension, and executes tests inside it &mdash; this is where you can drive actual
      omni.ui widgets.</li>
</ul>

<!-- ================================================================ -->
<h2 id="checklist"><span class="num">11.</span>From-scratch checklist &amp; gotchas</h2>

<h3>Build order for a new extension</h3>
<ol>
  <li>Create <code>source/extensions/acme.my_tool/</code> with <code>config/extension.toml</code>,
      <code>premake5.lua</code> (copy &sect;9.1), <code>data/icon.svg</code>, <code>docs/README.md</code>,
      and the package skeleton <code>acme/my_tool/__init__.py</code> + <code>extension.py</code>.</li>
  <li>Write the minimal <code>IExt</code>: <code>on_startup</code> adds a menu item that opens a
      window containing one <code>ui.Label("hello")</code>; <code>on_shutdown</code> removes it.
      <b>Get this running before writing any logic.</b></li>
  <li>Add <code>"acme.my_tool" = {}</code> to your <code>.kit</code> file; build; launch; verify
      the menu entry appears.</li>
  <li>Grow inward, layer by layer: <code>models/</code> &rarr;
      <code>core/</code> (+ pytest on in-memory stages) &rarr; <code>services/</code> &rarr;
      <code>viewmodel/</code> &rarr; <code>ui/</code> widgets &rarr; panels &rarr; window wiring.</li>
  <li>Style pass last: one <code>style_constants.py</code>, applied at the window root.</li>
</ol>

<h3>Gotchas (each one cost somebody an afternoon)</h3>
<table>
  <tr><th>Gotcha</th><th>Detail</th></tr>
  <tr><td>Folder name = extension id = python path</td><td><code>acme.my_tool</code> must contain <code>acme/my_tool/</code> and <code>[[python.module]] name = "acme.my_tool"</code>. Any mismatch &rarr; silent load failure (check the console log).</td></tr>
  <tr><td>Colors are 0xAABBGGRR</td><td>omni.ui style colors put <b>blue before red</b>. Web <code>#3A7D44</code> (green) becomes <code>0xFF447D3A</code>.</td></tr>
  <tr><td>Stage can be <code>None</code></td><td>Composer can run with no stage open. Every entry path in the example guards <code>has_stage()</code> first.</td></tr>
  <tr><td>Subscriptions live as objects</td><td><code>create_subscription_to_pop()</code> returns a handle; if you don't store it, it's garbage-collected and your events silently stop. To unsubscribe, drop the reference.</td></tr>
  <tr><td>Hot reload doubles leaks</td><td>Anything not undone in <code>on_shutdown()</code> (menus, callbacks, subscriptions) duplicates on every extension reload during dev.</td></tr>
  <tr><td>Don't iterate prototypes</td><td>When walking the stage, skip instancing prototypes (the example filters with <code>include_prototypes=False</code>) or you'll match prims a user can't select.</td></tr>
  <tr><td>Heavy work blocks the render loop</td><td>Kit UI and Python run on the main thread. The example keeps a progress callback (<code>set_progress_callback</code>) and a loading flag; for big stages, chunk work or use <code>asyncio</code> with <code>omni.kit.app.get_app().next_update_async()</code>.</td></tr>
  <tr><td>Selection-as-highlight stomps user selection</td><td>&sect;8.3 &mdash; fine for a v1, replace with a non-selection highlight for production.</td></tr>
</table>

<h3>Where to look in the example when stuck</h3>
<table>
  <tr><th>"How do I&hellip;"</th><th>Read this file</th></tr>
  <tr><td>structure startup/shutdown, menus, lazy windows</td><td><code>extension.py</code></td></tr>
  <tr><td>build a form row (label + field + checkbox)</td><td><code>ui/widgets/name_filter_widget.py</code></td></tr>
  <tr><td>build an accordion of collapsible panels</td><td><code>ui/query_tool_window.py</code> (+ <code>ui/widgets/collapsible_group.py</code>)</td></tr>
  <tr><td>theme everything consistently</td><td><code>ui/styles/style_constants.py</code></td></tr>
  <tr><td>react to file-open / assets-loaded</td><td><code>services/stage_service.py</code></td></tr>
  <tr><td>walk the stage and filter prims</td><td><code>core/query_engine.py</code>, <code>core/stage_collector.py</code>, <code>utils/usd_helpers.py</code></td></tr>
  <tr><td>select prims and frame the camera</td><td><code>core/highlight_manager.py</code></td></tr>
  <tr><td>keep UI and logic decoupled</td><td><code>viewmodel/search_viewmodel.py</code></td></tr>
</table>

<footer>
  <span class="tag">graphics &middot; usd &middot; omniverse &middot; kit</span><br>
  Distilled from building a real stage-query extension for a USD Composer&ndash;based Kit app.
  Extension and app names are genericized.
</footer>

</div>
`;

export const script = ``;
