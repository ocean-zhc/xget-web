// 静态文件存储 - 全新版本

const files = {};

// HTML 文件
files['index.html'] = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> URL 转换器</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="title"> URL 转换器</h1>
            <p class="subtitle">将支持平台的 URL 转换为加速后的 URL</p>
        </header>

        <main class="main">
            <div class="converter-card">
                <div class="input-section">
                    <label for="url-input" class="input-label">原始 URL</label>
                    <div class="input-wrapper">
                        <input 
                            type="url" 
                            id="url-input" 
                            class="url-input" 
                            placeholder="在此粘贴支持平台的 URL"
                            autocomplete="off"
                        >
                        <div class="status" id="status">🔍 将自动检测平台</div>
                    </div>
                </div>

                <div class="result-section" id="result-section" style="display: none;">
                    <label class="input-label">转换后的加速 URL</label>
                    <div class="result-wrapper">
                        <input type="text" id="result-input" class="result-input" readonly>
                        <button class="copy-btn" id="copy-btn">复制</button>
                    </div>
                </div>
            </div>

            <div class="platforms">
                <h3>支持的平台</h3>
                <div class="platform-grid">
                    <div class="platform-category">
                        <h4>代码仓库</h4>
                        <div class="tags">
                            <span class="tag">GitHub</span>
                            <span class="tag">GitLab</span>
                            <span class="tag">Gitea</span>
                            <span class="tag">Codeberg</span>
                            <span class="tag">SourceForge</span>
                            <span class="tag">AOSP</span>
                        </div>
                    </div>
                    <div class="platform-category">
                        <h4>包管理器</h4>
                        <div class="tags">
                            <span class="tag">npm</span>
                            <span class="tag">PyPI</span>
                            <span class="tag">conda</span>
                            <span class="tag">Maven</span>
                            <span class="tag">Apache</span>
                            <span class="tag">Gradle</span>
                            <span class="tag">Homebrew</span>
                            <span class="tag">RubyGems</span>
                            <span class="tag">CRAN</span>
                            <span class="tag">CPAN</span>
                            <span class="tag">CTAN</span>
                            <span class="tag">Go</span>
                            <span class="tag">NuGet</span>
                            <span class="tag">Rust</span>
                            <span class="tag">Packagist</span>
                            <span class="tag">Jenkins</span>
                        </div>
                    </div>
                    <div class="platform-category">
                        <h4>Linux 发行版</h4>
                        <div class="tags">
                            <span class="tag">Debian</span>
                            <span class="tag">Ubuntu</span>
                            <span class="tag">Fedora</span>
                            <span class="tag">Rocky Linux</span>
                            <span class="tag">openSUSE</span>
                            <span class="tag">Arch Linux</span>
                        </div>
                    </div>
                    <div class="platform-category">
                        <h4>容器镜像</h4>
                        <div class="tags">
                            <span class="tag">Quay.io</span>
                            <span class="tag">Google Container Registry</span>
                            <span class="tag">Microsoft Container Registry</span>
                            <span class="tag">Amazon ECR</span>
                            <span class="tag">GitHub Container Registry</span>
                            <span class="tag">GitLab Container Registry</span>
                            <span class="tag">Red Hat Registry</span>
                            <span class="tag">Oracle Container Registry</span>
                            <span class="tag">Cloudsmith</span>
                            <span class="tag">DigitalOcean Registry</span>
                            <span class="tag">VMware Registry</span>
                            <span class="tag">Kubernetes Registry</span>
                            <span class="tag">Heroku Registry</span>
                            <span class="tag">SUSE Registry</span>
                            <span class="tag">openSUSE Registry</span>
                            <span class="tag">Gitpod Registry</span>
                        </div>
                    </div>
                    <div class="platform-category">
                        <h4>AI 模型和 API</h4>
                        <div class="tags">
                            <span class="tag">Hugging Face</span>
                            <span class="tag">Civitai</span>
                            <span class="tag">OpenAI</span>
                            <span class="tag">Anthropic</span>
                            <span class="tag">Gemini</span>
                            <span class="tag">Vertex AI</span>
                            <span class="tag">Cohere</span>
                            <span class="tag">Mistral AI</span>
                            <span class="tag">xAI</span>
                            <span class="tag">GitHub 模型</span>
                            <span class="tag">NVIDIA API</span>
                            <span class="tag">Perplexity</span>
                            <span class="tag">Groq</span>
                            <span class="tag">Cerebras</span>
                            <span class="tag">SambaNova</span>
                            <span class="tag">HF Inference</span>
                            <span class="tag">Together</span>
                            <span class="tag">Replicate</span>
                            <span class="tag">Fireworks</span>
                            <span class="tag">Nebius</span>
                            <span class="tag">Jina</span>
                            <span class="tag">Voyage AI</span>
                            <span class="tag">Fal AI</span>
                            <span class="tag">Novita</span>
                            <span class="tag">Burncloud</span>
                            <span class="tag">OpenRouter</span>
                            <span class="tag">Poe</span>
                            <span class="tag">Featherless AI</span>
                            <span class="tag">Hyperbolic</span>
                        </div>
                    </div>
                    <div class="platform-category">
                        <h4>其他平台</h4>
                        <div class="tags">
                            <span class="tag">arXiv</span>
                            <span class="tag">F-Droid</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        

    </div>
    <footer class="footer">
        <div class="footer-content">
            <p class="footer-main">
                由 <a href="https://github.com/912988434/xget-web" 
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link"
                >
                xget-web
                </a> 
                提供web页面支持
            </p>
            <p class="footer-sub">
                开源项目基于 
                <a href="https://github.com/xixu-me/Xget" 
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link"
                >
                Xget
                </a> 
                ,让网络加速更简单
            </p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;

// CSS 文件
files['style.css'] = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f5f7fa;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.header {
    text-align: center;
    margin-bottom: 3rem;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4f46e5;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    color: #6b7280;
}

.converter-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.input-section {
    margin-bottom: 1.5rem;
}

.input-label {
    display: block;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
}

.input-wrapper {
    position: relative;
}

.url-input {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
}

.url-input:focus {
    outline: none;
    border-color: #4f46e5;
}

.status {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
}

.status.success {
    color: #059669;
}

.status.error {
    color: #dc2626;
}

.status.warning {
    color: #d97706;
}

.result-section {
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.result-wrapper {
    display: flex;
    gap: 0.5rem;
}

.result-input {
    flex: 1;
    padding: 1rem;
    border: 2px solid #10b981;
    border-radius: 8px;
    background: #f0fdf4;
    font-family: monospace;
    font-size: 0.9rem;
}

.copy-btn {
    padding: 1rem 1.5rem;
    background: #10b981;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.copy-btn:hover {
    background: #059669;
}

.platforms {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.platforms h3 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #374151;
}

.platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.platform-category h4 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    color: #4b5563;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    .title {
        font-size: 2rem;
    }
    
    .converter-card, .platforms {
        padding: 1.5rem;
    }
    
    .result-wrapper {
        flex-direction: column;
    }
    
    .platform-grid {
        grid-template-columns: 1fr;
    }
}

/* 页脚样式 */
.footer {
    text-align: center;
    padding: 0 rem 0;
}


.footer-content {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
}

.footer-main {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 0.3 rem;
}

.footer-link {
    // color: white;
    text-decoration: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    transition: border-color 0.2s;
}

.footer-link:hover {
    border-color: white;
}

.footer-sub {
    font-size: 0.9rem;
    opacity: 0.4;
}`;

// JavaScript 文件
files['script.js'] = `// 加速 URL 转换器 - 全新版本

// DOM 元素
const urlInput = document.getElementById('url-input');
const status = document.getElementById('status');
const resultSection = document.getElementById('result-section');
const resultInput = document.getElementById('result-input');
const copyBtn = document.getElementById('copy-btn');

// 支持的平台配置
const platforms = {
  // 代码托管平台
  "github.com": { name: "GitHub", prefix: "gh" },
  "raw.githubusercontent.com": { name: "GitHub Raw", prefix: "gh-raw" },
  "gist.github.com": { name: "GitHub Gist", prefix: "gist" },
  "gist.githubusercontent.com": { name: "GitHub Gist Raw", prefix: "gist-raw" },
  "gitlab.com": { name: "GitLab", prefix: "gl" },
  "gitea.com": { name: "Gitea", prefix: "gitea" },
  "codeberg.org": { name: "Codeberg", prefix: "codeberg" },
  "sourceforge.net": { name: "SourceForge", prefix: "sf" },
  "android.googlesource.com": { name: "AOSP", prefix: "aosp" },
  
  // 包管理平台
  "registry.npmjs.org": { name: "npm", prefix: "npm" },
  "pypi.org": { name: "PyPI", prefix: "pypi" },
  "files.pythonhosted.org": { name: "PyPI Files", prefix: "pypi-files" },
  "repo.anaconda.com": { name: "Conda", prefix: "conda" },
  "conda.anaconda.org": { name: "Conda Community", prefix: "conda/community" },
  "repo1.maven.org": { name: "Maven Central", prefix: "maven" },
  "downloads.apache.org": { name: "Apache", prefix: "apache" },
  "plugins.gradle.org": { name: "Gradle", prefix: "gradle" },
  "github.com/Homebrew": { name: "Homebrew", prefix: "homebrew" },
  "formulae.brew.sh": { name: "Homebrew API", prefix: "homebrew/api" },
  "ghcr.io/v2/homebrew": { name: "Homebrew Bottles", prefix: "homebrew/bottles" },
  "rubygems.org": { name: "RubyGems", prefix: "rubygems" },
  "cran.r-project.org": { name: "CRAN", prefix: "cran" },
  "www.cpan.org": { name: "CPAN", prefix: "cpan" },
  "tug.ctan.org": { name: "CTAN", prefix: "ctan" },
  "proxy.golang.org": { name: "Go Proxy", prefix: "golang" },
  "api.nuget.org": { name: "NuGet", prefix: "nuget" },
  "crates.io": { name: "Rust Crates", prefix: "crates" },
  "repo.packagist.org": { name: "Packagist", prefix: "packagist" },
  "deb.debian.org": { name: "Debian", prefix: "debian" },
  "archive.ubuntu.com": { name: "Ubuntu", prefix: "ubuntu" },
  "dl.fedoraproject.org": { name: "Fedora", prefix: "fedora" },
  "download.rockylinux.org": { name: "Rocky Linux", prefix: "rocky" },
  "download.opensuse.org": { name: "openSUSE", prefix: "opensuse" },
  "geo.mirror.pkgbuild.com": { name: "Arch Linux", prefix: "arch" },
  "updates.jenkins.io": { name: "Jenkins", prefix: "jenkins" },
  
  // AI 模型和 API
  "huggingface.co": { name: "Hugging Face", prefix: "hf" },
  "civitai.com": { name: "Civitai", prefix: "civitai" },
  "api.openai.com": { name: "OpenAI API", prefix: "ip/openai" },
  "api.anthropic.com": { name: "Anthropic API", prefix: "ip/anthropic" },
  "generativelanguage.googleapis.com": { name: "Gemini API", prefix: "ip/gemini" },
  "aiplatform.googleapis.com": { name: "Vertex AI", prefix: "ip/vertexai" },
  "api.cohere.ai": { name: "Cohere AI", prefix: "ip/cohere" },
  "api.mistral.ai": { name: "Mistral AI", prefix: "ip/mistralai" },
  "api.x.ai": { name: "xAI", prefix: "ip/xai" },
  "models.github.ai": { name: "GitHub 模型", prefix: "ip/githubmodels" },
  "integrate.api.nvidia.com": { name: "NVIDIA API", prefix: "ip/nvidiaapi" },
  "api.perplexity.ai": { name: "Perplexity", prefix: "ip/perplexity" },
  "api.groq.com": { name: "Groq", prefix: "ip/groq" },
  "api.cerebras.ai": { name: "Cerebras", prefix: "ip/cerebras" },
  "api.sambanova.ai": { name: "SambaNova", prefix: "ip/sambanova" },
  "router.huggingface.co": { name: "HF Inference", prefix: "ip/huggingface" },
  "api.together.xyz": { name: "Together", prefix: "ip/together" },
  "api.replicate.com": { name: "Replicate", prefix: "ip/replicate" },
  "api.fireworks.ai": { name: "Fireworks", prefix: "ip/fireworks" },
  "api.studio.nebius.ai": { name: "Nebius", prefix: "ip/nebius" },
  "api.jina.ai": { name: "Jina", prefix: "ip/jina" },
  "api.voyageai.com": { name: "Voyage AI", prefix: "ip/voyageai" },
  "fal.run": { name: "Fal AI", prefix: "ip/falai" },
  "api.novita.ai": { name: "Novita", prefix: "ip/novita" },
  "ai.burncloud.com": { name: "Burncloud", prefix: "ip/burncloud" },
  "openrouter.ai": { name: "OpenRouter", prefix: "ip/openrouter" },
  "api.poe.com": { name: "Poe", prefix: "ip/poe" },
  "api.featherless.ai": { name: "Featherless AI", prefix: "ip/featherlessai" },
  "api.hyperbolic.xyz": { name: "Hyperbolic", prefix: "ip/hyperbolic" },
  
  // 容器镜像
  "quay.io": { name: "Quay.io", prefix: "cr/quay" },
  "gcr.io": { name: "Google Container Registry", prefix: "cr/gcr" },
  "mcr.microsoft.com": { name: "Microsoft Container Registry", prefix: "cr/mcr" },
  "public.ecr.aws": { name: "Amazon ECR", prefix: "cr/ecr" },
  "ghcr.io": { name: "GitHub Container Registry", prefix: "cr/ghcr" },
  "registry.gitlab.com": { name: "GitLab Container Registry", prefix: "cr/gitlab" },
  "registry.redhat.io": { name: "Red Hat Registry", prefix: "cr/redhat" },
  "container-registry.oracle.com": { name: "Oracle Container Registry", prefix: "cr/oracle" },
  "docker.cloudsmith.io": { name: "Cloudsmith", prefix: "cr/cloudsmith" },
  "registry.digitalocean.com": { name: "DigitalOcean Registry", prefix: "cr/digitalocean" },
  "projects.registry.vmware.com": { name: "VMware Registry", prefix: "cr/vmware" },
  "registry.k8s.io": { name: "Kubernetes Registry", prefix: "cr/k8s" },
  "registry.heroku.com": { name: "Heroku Registry", prefix: "cr/heroku" },
  "registry.suse.com": { name: "SUSE Registry", prefix: "cr/suse" },
  "registry.opensuse.org": { name: "openSUSE Registry", prefix: "cr/opensuse" },
  "registry.gitpod.io": { name: "Gitpod Registry", prefix: "cr/gitpod" },
  
  // 其他平台
  "arxiv.org": { name: "arXiv", prefix: "arxiv" },
  "f-droid.org": { name: "F-Droid", prefix: "fdroid" }
};

// 检测平台
function detectPlatform(url) {
    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.replace('www.', '');
        
        for (const domain in platforms) {
            if (hostname.includes(domain)) {
                return platforms[domain];
            }
        }
        return null;
    } catch (e) {
        return null;
    }
}

// 转换 URL
function convertUrl(originalUrl) {
    try {
        const urlObj = new URL(originalUrl);
        const hostname = urlObj.hostname.replace('www.', '');
        
        for (const domain in platforms) {
            if (hostname.includes(domain)) {
                const platform = platforms[domain];
                const path = urlObj.pathname + urlObj.search + urlObj.hash;
                const cleanPath = path.replace(/^\\//, '');
                return BASE_URL + '/' + platform.prefix + '/' + cleanPath;
            }
        }
        throw new Error('不支持的平台');
    } catch (e) {
        throw new Error('转换失败');
    }
}

// 更新状态
function updateStatus(message, type = 'info') {
    status.textContent = message;
    status.className = 'status ' + type;
}

// 显示结果
function showResult(url) {
    resultInput.value = url;
    resultSection.style.display = 'block';
}

// 隐藏结果
function hideResult() {
    resultSection.style.display = 'none';
}

// 处理输入
function handleInput() {
    const url = urlInput.value.trim();
    
    if (!url) {
        updateStatus('🔍 将自动检测平台');
        hideResult();
        return;
    }
    
    // 验证 URL
    let urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        updateStatus('❌ 无效的 URL 格式', 'error');
        hideResult();
        return;
    }
    
    // 检测平台
    const platform = detectPlatform(url);
    if (!platform) {
        updateStatus('⚠️ 不支持的平台', 'warning');
        hideResult();
        return;
    }
    
    // 转换 URL
    try {
        const proxyUrl = convertUrl(url);
        updateStatus('✅ 已检测到 ' + platform.name, 'success');
        showResult(proxyUrl);
    } catch (e) {
        updateStatus('❌ 转换失败', 'error');
        hideResult();
    }
}

// 复制功能
function copyResult() {
    const text = resultInput.value;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '已复制!';
            copyBtn.style.background = '#059669';
            setTimeout(function() {
                copyBtn.textContent = originalText;
                copyBtn.style.background = '#10b981';
            }, 2000);
        }).catch(function() {
            fallbackCopy();
        });
    } else {
        fallbackCopy();
    }
}

function fallbackCopy() {
    resultInput.select();
    try {
        document.execCommand('copy');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '已复制!';
        setTimeout(function() {
            copyBtn.textContent = originalText;
        }, 2000);
    } catch (e) {
        alert('复制失败，请手动复制');
    }
}

// 事件监听
let timeout;
urlInput.addEventListener('input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(handleInput, 300);
});

urlInput.addEventListener('paste', function() {
    setTimeout(handleInput, 100);
});

copyBtn.addEventListener('click', copyResult);

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    handleInput();
});`;

export function getStaticFile(filename, env) {
    return files[filename] || null;
}