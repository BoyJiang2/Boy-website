import { execFileSync } from 'node:child_process';

const cjkCharacter = /[\u3400-\u9fff]/g;
const latinWord = /[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g;
const gitDateCache = new Map<string, { published?: Date; updated?: Date }>();

export function getArticleWordCount(body: string) {
  const prose = body.replace(/```[\s\S]*?```/g, '');
  const cjkCount = (prose.match(cjkCharacter) ?? []).length;
  const latinCount = (prose.replace(cjkCharacter, ' ').match(latinWord) ?? []).length;
  return cjkCount + latinCount;
}

export function getArticleGitDates(filePath?: string) {
  if (!filePath) return {};

  const normalizedPath = filePath.replaceAll('\\', '/');
  const cached = gitDateCache.get(normalizedPath);
  if (cached) return cached;

  try {
    const output = execFileSync(
      'git',
      ['log', '--follow', '--format=%cI', '--', normalizedPath],
      { cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim();
    const dates = output
      .split(/\r?\n/)
      .filter(Boolean)
      .map((value) => new Date(value))
      .filter((value) => !Number.isNaN(value.getTime()));

    if (dates.length === 0) return {};

    const published = dates.at(-1);
    const latest = dates[0];
    const result = {
      published,
      updated: published && formatArticleDate(published) !== formatArticleDate(latest) ? latest : undefined,
    };
    gitDateCache.set(normalizedPath, result);
    return result;
  } catch {
    return {};
  }
}

export function formatArticleDate(date: Date) {
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${date.getUTCFullYear()}-${month}-${day}`;
}
