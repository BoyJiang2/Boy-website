export interface NoteSource {
  id: string;
  filePath?: string;
}

export function getNoteLocation(entry: NoteSource) {
  const source = entry.filePath?.replaceAll('\\', '/') ?? entry.id;
  const relativePath = source.split('/notes/').at(-1) ?? entry.id;
  const folders = relativePath.split('/').slice(0, -1);

  return {
    category: folders[0] ?? '其他',
    series: folders[1] ?? '独立笔记',
    slug: entry.id.split('/').at(-1) ?? entry.id,
  };
}
