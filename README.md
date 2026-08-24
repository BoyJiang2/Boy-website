# Boy's Notes Website

明亮、简洁的个人网站，包含博客、项目、笔记与关于四个栏目。使用 Astro 构建，内容存放为 Markdown/MDX，不需要数据库。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 内容放在哪里

```text
src/content/
├─ blog/       # 所思所想、随笔与观点
├─ projects/   # 项目介绍与复盘
└─ notes/      # 课程、论文、技术、工具笔记
```

新增内容时，可以复制同目录中的现有 `.md` 文件，修改顶部 frontmatter 和正文。课程与论文不再是独立栏目，通过笔记的 `type` 和 `series` 字段组织。

图片、PDF 和其他附件放入 `public/uploads/`，在 Markdown 中使用：

```md
![图片说明](/uploads/example.png)
[下载 PDF](/uploads/example.pdf)
```

## 在浏览器中写作和上传附件

仓库根目录提供了 `.pages.yml`，可直接连接 Pages CMS：

1. 打开 <https://app.pagescms.org/> 并使用 GitHub 登录。
2. 为 `BoyJiang2/Boy-s-notes-website` 安装 Pages CMS GitHub App。
3. 选择仓库与 `main` 分支。
4. 在“博客 / 项目 / 笔记”中使用可视化编辑器新建内容。
5. 图片与附件会保存到 `public/uploads/`；保存时直接提交到 GitHub。

Pages CMS 只是 GitHub 文件的编辑界面，内容仍保存在本仓库中。部署平台连接 GitHub 后，每次保存都会自动触发重新构建。

## 部署

Cloudflare Pages 或 Vercel 均可：

- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js：20 或更高版本

部署前将 `astro.config.mjs` 中的 `site` 改成正式域名。
