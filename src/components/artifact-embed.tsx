"use client";

import { useEffect, useRef } from "react";

export default function ArtifactEmbed({
  styles,
  html,
  script,
}: {
  styles: string;
  html: string;
  script: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!script || !ref.current) return;

    // Track event listeners for cleanup
    const listeners: Array<[string, EventListener]> = [];
    const origAdd = document.addEventListener.bind(document);
    document.addEventListener = ((
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ) => {
      listeners.push([type, listener as EventListener]);
      origAdd(type, listener, options);
    }) as typeof document.addEventListener;

    // Extract top-level function names so we can expose them globally
    // (needed for inline onclick handlers in the HTML)
    const fnNames: string[] = [];
    const fnRegex = /^function\s+(\w+)\s*\(/gm;
    let match;
    while ((match = fnRegex.exec(script)) !== null) {
      fnNames.push(match[1]);
    }

    // Also capture top-level const/let/var declarations to avoid redeclaration
    // Wrap in IIFE but hoist functions to window
    const expose = fnNames.map((n) => `window.${n} = ${n};`).join("\n");
    const wrapped = `(function(){${script}\n${expose}})();`;

    const el = document.createElement("script");
    el.textContent = wrapped;
    ref.current.appendChild(el);

    document.addEventListener = origAdd;

    return () => {
      el.remove();
      for (const [type, listener] of listeners) {
        document.removeEventListener(type, listener);
      }
      // Clean up global functions
      for (const n of fnNames) {
        delete (window as unknown as Record<string, unknown>)[n];
      }
    };
  }, [script]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div
        ref={ref}
        className="artifact-scope"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
