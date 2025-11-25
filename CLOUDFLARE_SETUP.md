# Cloudflare Pages 部署指南

## 最简单的部署方式：直接连接 GitHub

### 步骤 1：登录 Cloudflare

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 登录你的账户

### 步骤 2：创建 Pages 项目

1. 进入 **Pages**
2. 点击 **Create a project**
3. 选择 **Connect to Git**

### 步骤 3：授权 GitHub

1. 点击 **GitHub** 按钮
2. 授权 Cloudflare 访问你的 GitHub 账户
3. 选择 `jackyrwj/resume` 仓库

### 步骤 4：配置构建设置

在 "Set up builds and deployments" 页面，配置以下内容：

- **Framework preset**: None
- **Build command**: `npm run build`
- **Build output directory**: `public`
- **Root directory**: `/` (默认)

### 步骤 5：部署

1. 点击 **Save and Deploy**
2. Cloudflare 会自动构建并部署你的项目
3. 部署完成后，你会获得一个 URL，例如：`https://resume.pages.dev`

## 自动更新

配置完成后，每次你推送代码到 `master` 分支时，Cloudflare 会自动：

1. 检测到新的推送
2. 自动构建项目
3. 自动部署更新

## 自定义域名（可选）

如果你有自己的域名，可以在 Cloudflare Pages 项目设置中配置自定义域名。

## 就这么简单！

不需要 API Token，不需要 GitHub Actions，直接连接就可以了。🚀

