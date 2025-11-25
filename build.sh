#!/bin/bash

# 优化的构建脚本
set -e

echo "🚀 开始构建..."

# 清理缓存
echo "🧹 清理缓存..."
rm -rf .cache node_modules/.cache

# 安装依赖（使用 pnpm 更快）
echo "📦 安装依赖..."
if command -v pnpm &> /dev/null; then
  pnpm install --frozen-lockfile
else
  npm ci
fi

# 构建
echo "🔨 构建项目..."
npm run build

echo "✅ 构建完成！"

