# Boy's Website

我的个人网站，用来放博客、项目和学习笔记。

Astro + Markdown/MDX，内容保存在 `src/content/`。站内支持统一搜索、四种主题、KaTeX 公式和分级目录。

## 本地运行

```bash
npm install
npm run dev
```

构建静态页面：

```bash
npm run build
```

## 写内容

```text
src/content/
├─ blog/       # 博客
├─ projects/   # 项目
└─ notes/      # 课程、论文和技术笔记
```

复制同目录中的 `.md` 文件，修改 frontmatter 和正文即可。

- 博客按 `category → 文章` 组织。
- 笔记按 `type → series → 文章` 组织，`order` 控制系列内顺序。
- 正文中的 `## / ### / ####` 会自动生成文章目录。
- 公式、代码、引用、表格和图片示例见 `src/content/notes/markdown-capabilities-demo.md`。

图片和附件放在 `public/uploads/`：

```md
![图片说明](/uploads/example.png)
[下载 PDF](/uploads/example.pdf)
```

## 在线编辑

仓库中的 `.pages.yml` 已配置 [Pages CMS](https://app.pagescms.org/)：

1. 使用 GitHub 登录 Pages CMS。
2. 授权 `BoyJiang2/Boy-s-notes-website`。
3. 选择 `main` 分支。
4. 新建或修改博客、项目和笔记。

保存后，内容和附件会直接提交到 GitHub。

## 部署

- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js：20+

可部署到 Cloudflare Pages 或 Vercel。正式上线前请修改 `astro.config.mjs` 中的 `site`。
