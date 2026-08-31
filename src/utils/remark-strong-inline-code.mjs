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

export default function remarkStrongInlineCode() {
  return (tree) => wrapInlineCodeInStrong(tree);
}
