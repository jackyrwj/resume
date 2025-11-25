# Cloudflare Pages 部署指南

本项目已配置为自动部署到 Cloudflare Pages。

## 前置条件

1. 拥有 Cloudflare 账户
2. 在 Cloudflare 中创建一个 Pages 项目
3. 获取 Cloudflare API Token 和 Account ID

## 设置步骤

### 1. 获取 Cloudflare 凭证

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Account Settings** → **API Tokens**
3. 创建一个新的 API Token，权限设置为：
   - **Permissions**: `Cloudflare Pages - Edit`
   - **Account Resources**: 选择你的账户
4. 复制生成的 Token

### 2. 获取 Account ID

1. 在 Cloudflare Dashboard 中，进入 **Account Settings**
2. 在右侧找到 **Account ID**，复制它

### 3. 配置 GitHub Secrets

1. 进入你的 GitHub 仓库
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 添加以下 secrets：
   - `CLOUDFLARE_API_TOKEN`: 你的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Cloudflare Account ID

### 4. 在 Cloudflare 创建 Pages 项目

1. 登录 Cloudflare Dashboard
2. 进入 **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权 GitHub 访问
6. 选择你的 `resume` 仓库
7. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `public`
8. 点击 **Save and Deploy**

## 自动部署

配置完成后，每次你推送代码到 `master` 分支时，GitHub Actions 会自动：

1. 检出代码
2. 安装依赖
3. 构建项目
4. 部署到 Cloudflare Pages

## 访问你的网站

部署完成后，你可以通过以下 URL 访问你的网站：

- `https://<project-name>.<your-domain>.pages.dev`
- 或者你配置的自定义域名

## 故障排除

### 部署失败

1. 检查 GitHub Actions 日志：进入仓库 → **Actions** → 查看失败的工作流
2. 确保 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID` 正确配置
3. 确保 Cloudflare Pages 项目名称为 `resume`

### 构建失败

1. 确保本地构建成功：`npm run build`
2. 检查 `public` 目录是否生成
3. 查看 GitHub Actions 日志中的构建错误信息

## 本地测试

在推送前，你可以本地测试构建：

```bash
npm run build
```

这会生成 `public` 目录，其中包含所有静态文件。

