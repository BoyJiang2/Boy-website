const cjkCharacter = /[\u3400-\u9fff]/g;
const latinWord = /[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g;

export function getArticleWordCount(body?: string) {
  const prose = (body ?? '').replace(/```[\s\S]*?```/g, '');
  const cjkCount = (prose.match(cjkCharacter) ?? []).length;
  const latinCount = (prose.replace(cjkCharacter, ' ').match(latinWord) ?? []).length;
  return cjkCount + latinCount;
}
