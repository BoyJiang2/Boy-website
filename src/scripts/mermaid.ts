const darkThemes = new Set(['professional-dark', 'dark-neon', 'pure-black']);

const configureMermaid = (mermaid: Awaited<ReturnType<typeof importMermaid>>) => {
  const theme = document.documentElement.dataset.theme ?? 'pure-white';
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: darkThemes.has(theme) ? 'dark' : 'neutral',
    fontFamily: getComputedStyle(document.body).fontFamily,
    flowchart: { useMaxWidth: true, htmlLabels: true },
  });
};

const importMermaid = async () => (await import('mermaid')).default;

const collectDiagrams = () => {
  document.querySelectorAll<HTMLElement>("pre[data-language='mermaid'] > code, pre > code.language-mermaid").forEach((code) => {
    const pre = code.parentElement;
    if (!pre) return;

    const diagram = document.createElement('div');
    diagram.className = 'mermaid';
    diagram.dataset.mermaidSource = code.textContent?.trim() ?? '';
    pre.replaceWith(diagram);
  });

  return [...document.querySelectorAll<HTMLElement>('.mermaid[data-mermaid-source]')];
};

let rendering = false;
const renderMermaid = async () => {
  if (rendering) return;
  const diagrams = collectDiagrams();
  if (!diagrams.length) return;

  rendering = true;
  const mermaid = await importMermaid();
  configureMermaid(mermaid);
  diagrams.forEach((diagram) => {
    diagram.textContent = diagram.dataset.mermaidSource ?? '';
    diagram.removeAttribute('data-processed');
  });

  try {
    await mermaid.run({ nodes: diagrams, suppressErrors: true });
  } finally {
    rendering = false;
  }
};

const renderWhenReady = () => { void renderMermaid(); };
if (document.readyState === 'complete') renderWhenReady();
else window.addEventListener('load', renderWhenReady, { once: true });

document.addEventListener('astro:page-load', renderWhenReady);
document.addEventListener('boy-jiang:theme-change', renderWhenReady);
