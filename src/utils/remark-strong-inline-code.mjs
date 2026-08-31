function wrapInlineCodeInStrong(node) {
  if (!Array.isArray(node.children)) return;

  for (let index = 1; index < node.children.length - 1; index += 1) {
    const previous = node.children[index - 1];
    const current = node.children[index];
    const next = node.children[index + 1];

    if (
      previous?.type === 'text' && previous.value.endsWith('**') &&
      current?.type === 'inlineCode' &&
      next?.type === 'text' && next.value.startsWith('**')
    ) {
      previous.value = previous.value.slice(0, -2);
      next.value = next.value.slice(2);
      node.children[index] = { type: 'strong', children: [current] };
    }
  }

  node.children.forEach(wrapInlineCodeInStrong);
}

function wrapTextInStrong(node) {
  if (!Array.isArray(node.children)) return;

  node.children = node.children.flatMap((child) => {
    if (child.type !== 'text' || !child.value.includes('**')) return [child];

    return child.value
      .split(/(\*\*[^*\n]+?\*\*)/g)
      .filter(Boolean)
      .map((part) => {
        const match = /^\*\*([^*\n]+)\*\*$/.exec(part);
        return match
          ? { type: 'strong', children: [{ type: 'text', value: match[1] }] }
          : { type: 'text', value: part };
      });
  });

  node.children.forEach(wrapTextInStrong);
}

export default function remarkStrongInlineCode() {
  return (tree) => {
    wrapInlineCodeInStrong(tree);
    wrapTextInStrong(tree);
  };
}
