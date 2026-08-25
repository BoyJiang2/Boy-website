---
title: Markdown 能力演示：公式、代码与图文混排
summary: 一篇用于检查公式、代码块、引用、表格、图片和链接是否正常渲染的示例笔记。
tags: [Markdown, 写作, Demo]
---

这是一篇可以放心修改、复制和删除的演示笔记。它把常用的写作元素放在同一页，方便检查网站的 Markdown 渲染能力。

> 好的工具不应该打断思路。写下 Markdown，剩下的交给网站。

## 公式

行内公式适合嵌在句子中，例如质能方程 $E = mc^2$，或者注意力缩放项 $1 / \sqrt{d_k}$。

块级公式适合单独展示推导：

$$
\operatorname{Attention}(Q,K,V)
= \operatorname{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

也可以书写带编号直觉的损失函数：

$$
\mathcal{L}(\theta) = -\frac{1}{N}\sum_{i=1}^{N}\log p_\theta(y_i \mid x_i)
$$

## 代码块

指定语言后，Astro 会自动进行语法高亮：

```ts
type Note = {
  title: string;
  summary: string;
  tags: string[];
};

const describe = (note: Note) => `${note.title} · ${note.tags.join(' / ')}`;
```

行内代码也可以正常使用，例如 `npm run build` 或 `src/content/notes/`。

## 引用块

> “写下来”不是学习的收尾，而是把模糊理解变成可以检查的对象。
>
> 引用块可以包含多段内容，也适合放提醒、定义和摘录。

## 表格

| 元素 | Markdown 写法 | 当前状态 |
| --- | --- | --- |
| 公式 | `$E = mc^2$` | 可用 |
| 代码 | 三个反引号加语言名 | 可用 |
| 引用 | 行首使用 `>` | 可用 |
| 表格 | 使用竖线分隔列 | 可用 |
| 图片 | `![说明](路径)` | 可用 |

## 图片

下面这张 SVG 存放在 `public/uploads/`，与通过在线编辑器上传图片后的引用方式一致：

![一篇笔记从 Markdown 到网页的流程图](/uploads/demo-note-diagram.svg)

图片前后的正文、标题和目录可以自然排列。替换图片时，只需要把文件上传到附件目录，然后复制生成的路径。

## 链接与列表

- [返回全部笔记](/notes/)
- [查看 Astro Markdown 官方文档](https://docs.astro.build/en/guides/markdown-content/)
- 使用有序列表记录步骤：
  1. 新建笔记；
  2. 上传图片；
  3. 保存并等待自动部署。

至此，公式、代码块、引用、表格、图片、链接和多级标题已经全部出现在同一篇笔记里。
