# xget-Web 部署到 Cloudflare Workers 指南


[xget-web](https://github.com/912988434/xget-web.git)是[**xget**](https://github.com/xixu-me/Xget)服务的的url转换的WEB UI ，可以省去自己手动根据规则生成加速url，实现输入url后自动转换为加速地址
<img width="2196" height="2818" alt="image" src="https://github.com/user-attachments/assets/00d65e26-d25a-4d0f-8ad1-c08f17d71804" />

## 📋 部署前准备

### 1. 环境要求
- Node.js 16+ 
- npm 或 yarn
- Cloudflare 账户
- 提前部署好[**xget**](https://github.com/xixu-me/Xget)服务


## 🚀 部署步骤


1. **注册 Cloudflare 账户**：访问 [Cloudflare Workers](https://workers.cloudflare.com/) 并注册账户

2. **安装 Wrangler CLI**：

   ```bash
   npm install -g wrangler
   wrangler login
   ```

3. **克隆项目**：

   ```bash
   git clone https://github.com/912988434/xget-web.git
   cd xget-web
   npm install
   ```
4、**修改配置**
> [!IMPORTANT]
>
> **部署到不同环境需要修改对应的wrangler.toml文件中的不同环境的配置，请根据需要选择并修改**


主要是修改 route 中地址 和 BASE_URL




### 方法一：一键部署（推荐）
```bash

# 部署到默认环境,使用wrangler.toml文件中顶层配置
npm run deploy

# 部署到dev环境，使用wrangler.toml文件中dev配置
npm run deploy:dev

# 部署到生产环境，使用wrangler.toml文件中production配置
npm run deploy:production

# 或者部署到测试环境,用wrangler.toml文件中staging配置
npm run deploy:staging
```

### 方法二：使用 Wrangler 命令
```bash
# 部署到默认环境,使用wrangler.toml文件中顶层配置
wrangler deploy 或者 wrangler deploy --env ""

# 部署到dev环境，使用wrangler.toml文件中dev配置
wrangler deploy --env dev

# 部署到production环境，使用wrangler.toml文件中production配置
wrangler deploy --env production

# 或者部署到staging环境,用wrangler.toml文件中staging配置
wrangler deploy --env staging
```

## 🌐 访问部署的应用

部署成功后，可以通过两种地址访问
- route中定义的域名
workers.dev域名：
- Worker 域名：`your-worker-name.your-subdomain.workers.dev`


## ⚙️ 配置说明

### wrangler.toml 配置
```toml
name = "xget-web"                    # Worker 名称
main = "worker.js"                   # 入口文件
compatibility_date = "2024-01-01"    # 兼容性日期

[env.production]
name = "xget-web-prod"               # 生产环境名称

[env.staging]
name = "xget-web-staging"            # 测试环境名称
```

### 自定义配置
如需修改配置，请编辑 `wrangler.toml` 文件：

1. **修改 Worker 名称**：
   ```toml
   name = "your-custom-name"
   ```

2. **添加环境变量**：
   ```toml
   [vars]
   ENVIRONMENT = "production"
   ```

3. **绑定自定义域名**：
   ```toml
   route = { pattern = "xxx.domian.com", custom_domain = true }
   ```


## 🔧 本地开发

### 启动开发服务器
```bash
# 启动本地开发服务器
npm run dev

# 或使用 wrangler 直接启动
wrangler dev
```

访问 `http://localhost:8787` 查看本地版本。

### 实时日志查看
```bash
# 查看生产环境日志
npm run tail

# 或使用 wrangler 命令
wrangler tail
```

## 📁 项目结构

```
xget-web/
├── worker.js              # Cloudflare Workers 入口文件
├── wrangler.toml          # Wrangler 配置文件
├── package.json           # 项目配置
├── src/
│   ├── handler.js         # 请求处理器
│   └── static.js          # 静态文件内容
└── README.md              # 部署说明文档
```

## 🛠️ 高级配置

### 1. 添加自定义域名

在 Cloudflare 控制台中：
1. 进入 Workers & Pages
2. 选择您的 Worker
3. 点击 "Custom domains"
4. 添加您的域名

或在 `wrangler.toml` 中配置：
```toml
route = { pattern = "xxxx.domain.com", custom_domain = true }
```



### 2. 缓存配置

默认已配置适当的缓存策略：
- HTML: 1小时缓存
- CSS/JS: 24小时缓存
- 静态资源: 长期缓存

## 🔍 故障排除

### 常见问题

1. **部署失败**
   ```bash
   # 检查 Wrangler 版本
   wrangler --version
   
   # 重新登录
   wrangler logout
   wrangler login
   ```

2. **域名访问问题**
   - 确认域名已正确配置
   - 检查 DNS 设置
   - 等待 DNS 传播（最多24小时）

3. **静态文件加载问题**
   - 检查 `src/static-files.js` 中的文件内容
   - 确认文件路径正确

### 调试命令

```bash
# 查看 Worker 详细信息
wrangler whoami

# 查看部署状态
wrangler deployments list

# 查看实时日志
wrangler tail --format pretty
```

## 📊 性能优化

### 1. 缓存策略
- 静态资源使用长期缓存
- HTML 使用短期缓存以便更新
- 利用 Cloudflare 边缘缓存

### 2. 压缩优化
- CSS/JS 已经过优化
- 启用 Gzip 压缩
- 使用 Cloudflare 的自动压缩

### 3. 全球分发
- 利用 Cloudflare 的全球 CDN
- 边缘计算降低延迟
- 自动故障转移

## 🔒 安全配置

默认已配置的安全头：
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## 📈 监控和分析

### Cloudflare Analytics
在 Cloudflare 控制台中查看：
- 请求数量和响应时间
- 错误率和状态码分布
- 地理位置分析
- 缓存命中率

### 自定义监控
可以添加自定义指标：
```javascript
// 在 worker.js 中添加
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
  
  // 记录自定义指标
  event.waitUntil(
    logMetrics(event.request)
  );
});
```

## 🎯 下一步

1. **自定义样式**：修改 `src/static-files.js` 中的 CSS
2. **添加功能**：扩展 JavaScript 功能
3. **集成分析**：添加 Google Analytics 或其他分析工具
4. **SEO 优化**：添加 meta 标签和结构化数据
5. **PWA 支持**：添加 Service Worker 和 manifest.json

## 📞 支持

如果遇到问题：
1. 查看 [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
2. 检查 [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
3. 查看项目的 GitHub Issues

---

🎉 **恭喜！您的 Xget URL 转换器现在已经部署到 Cloudflare Workers 上了！**
