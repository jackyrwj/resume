# 本地启动项目指南

## 前置条件

- Node.js 12+ 版本
- npm 或 pnpm 包管理器
- Git

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/jackyrwj/resume.git
cd resume
```

### 2. 安装依赖

使用 pnpm（推荐）：
```bash
pnpm install
```

或使用 npm：
```bash
npm install
```

### 3. 启动开发服务器

```bash
npm start
```

或使用 pnpm：
```bash
pnpm start
```

服务器会自动启动，通常在 `http://localhost:8000` 或 `http://localhost:8001`

## 常用命令

### 开发模式
```bash
npm start
# 或
pnpm start
```
- 启动开发服务器
- 支持热重载（修改代码自动刷新）
- 访问 `http://localhost:8000`

### 构建生产版本
```bash
npm run build
# 或
pnpm build
```
- 生成优化后的静态文件到 `public` 目录
- 用于部署到 Cloudflare Pages

### 清理缓存
```bash
npm run clean
# 或
pnpm clean
```
- 删除 Gatsby 缓存
- 如果遇到奇怪的问题，可以尝试这个命令

### 格式化代码
```bash
npm run format
# 或
pnpm format
```
- 使用 Prettier 格式化所有代码文件

## 编辑模式

### 查看简历
访问 `http://localhost:8000` 查看简历

### 编辑简历
访问 `http://localhost:8000/?mode=edit` 进入编辑模式

在编辑模式下，你可以：
- 编辑个人信息
- 上传头像（支持本地上传和 URL）
- 修改教育背景、工作经历等
- 切换简历模板（template1/2/3）
- 选择主题颜色

### 查看不同模板
- `http://localhost:8000/?template=template1` - 模板 1
- `http://localhost:8000/?template=template2` - 模板 2
- `http://localhost:8000/?template=template3` - 模板 3

## 端口已被占用

如果 8000 端口已被占用，Gatsby 会自动询问是否使用其他端口（如 8001、8002 等）

## 故障排除

### 依赖安装失败

如果 `npm install` 失败，尝试：

```bash
# 清理 npm 缓存
npm cache clean --force

# 重新安装
npm install
```

或使用 pnpm：
```bash
pnpm install
```

### 构建失败

如果 `npm run build` 失败：

```bash
# 清理缓存后重试
npm run clean
npm run build
```

### 开发服务器无法启动

```bash
# 检查是否有进程占用端口
# Windows:
netstat -ano | findstr :8000

# 如果有进程占用，可以杀死它或使用其他端口
npm start -- -p 3000
```

## 项目结构

```
resume/
├── src/
│   ├── components/        # React 组件
│   ├── pages/            # 页面
│   ├── data/             # 默认数据
│   ├── helpers/          # 辅助函数
│   ├── i18n/             # 国际化文件
│   └── layout/           # 布局组件
├── public/               # 构建输出目录
├── gatsby-config.js      # Gatsby 配置
├── package.json          # 项目配置
└── README.md             # 项目说明
```

## 下一步

1. 启动开发服务器：`npm start`
2. 访问 `http://localhost:8000/?mode=edit` 编辑简历
3. 修改内容后自动保存到浏览器本地存储
4. 准备好后运行 `npm run build` 构建生产版本
5. 推送到 GitHub，Cloudflare 会自动部署

## 需要帮助？

- 查看 [README.md](./README.md) 了解更多信息
- 查看 [CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md) 了解部署方式

