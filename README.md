# Notes Atlas

一个面向课程、论文与个人展示的 Astro 静态网站原型。内容放在 Markdown/MDX 文件中，不需要数据库。

## 本地运行

```bash
npm install
npm run dev
```

打开终端显示的本地地址。生产构建使用：

```bash
npm run build
```

构建产物位于 `dist/`，可直接部署到 Cloudflare Pages、Vercel 或 GitHub Pages。

## 写一篇新笔记

在下列目录新增 `.md` 或 `.mdx` 文件即可：

- `src/content/courses/`：课程专题
- `src/content/papers/`：论文阅读

每份文件顶部有 frontmatter（标题、标签、时间等字段），可复制现有示例再修改。首页和索引页会自动读取并展示它们。

## 上线到 Cloudflare Pages

1. 把本目录推送到 GitHub 仓库。
2. 在 Cloudflare Pages 新建项目并连接该仓库。
3. 构建命令填写 `npm run build`，输出目录填写 `dist`。
4. 首次部署成功后绑定自己的域名。

`astro.config.mjs` 中的 `site` 请改成正式域名，以获得正确的 sitemap、canonical URL 等站点元信息。
