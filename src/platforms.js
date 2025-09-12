// 完整的平台支持列表
// 用于 Xget URL 转换器

const platforms = {
  // 代码托管平台
  "github.com": { name: "GitHub", prefix: "gh" },
  "raw.githubusercontent.com": { name: "GitHub Raw", prefix: "gh-raw" },
  "gist.github.com": { name: "GitHub Gist", prefix: "gist" },
  "gist.githubusercontent.com": { name: "GitHub Gist Raw", prefix: "gist-raw" },
  "gitlab.com": { name: "GitLab", prefix: "gl" },
  "gitee.com": { name: "Gitee", prefix: "gitee" },
  "bitbucket.org": { name: "Bitbucket", prefix: "bb" },
  "codeberg.org": { name: "Codeberg", prefix: "cb" },
  "sourceforge.net": { name: "SourceForge", prefix: "sf" },
  "code.google.com": { name: "Google Code", prefix: "gc" },
  
  // 包管理平台
  "registry.npmjs.org": { name: "npm", prefix: "npm" },
  "pypi.org": { name: "PyPI", prefix: "pypi" },
  "files.pythonhosted.org": { name: "PyPI Files", prefix: "pypi-files" },
  "repo1.maven.org": { name: "Maven Central", prefix: "maven" },
  "repo.maven.apache.org": { name: "Apache Maven", prefix: "maven-apache" },
  "dl.bintray.com": { name: "JCenter", prefix: "jcenter" },
  "plugins.gradle.org": { name: "Gradle Plugins", prefix: "gradle" },
  "rubygems.org": { name: "RubyGems", prefix: "gem" },
  "crates.io": { name: "Rust Crates", prefix: "crates" },
  "static.crates.io": { name: "Rust Crates Static", prefix: "crates-static" },
  "pkg.go.dev": { name: "Go Packages", prefix: "go" },
  "proxy.golang.org": { name: "Go Proxy", prefix: "go-proxy" },
  "packagist.org": { name: "Packagist", prefix: "packagist" },
  "repo.packagist.org": { name: "Packagist Repo", prefix: "packagist-repo" },
  "nuget.org": { name: "NuGet", prefix: "nuget" },
  "api.nuget.org": { name: "NuGet API", prefix: "nuget-api" },
  "cdn.cocoapods.org": { name: "CocoaPods", prefix: "cocoapods" },
  "pub.dev": { name: "Dart Pub", prefix: "pub" },
  "pub.dartlang.org": { name: "Dart Pub Legacy", prefix: "pub-legacy" },
  
  // AI 模型和 API
  "huggingface.co": { name: "Hugging Face", prefix: "hf" },
  "cdn-lfs.huggingface.co": { name: "Hugging Face LFS", prefix: "hf-lfs" },
  "api.openai.com": { name: "OpenAI API", prefix: "openai" },
  "api.anthropic.com": { name: "Anthropic API", prefix: "anthropic" },
  "api.groq.com": { name: "Groq API", prefix: "groq" },
  "api.stability.ai": { name: "Stability AI", prefix: "stability" },
  "api.replicate.com": { name: "Replicate", prefix: "replicate" },
  "generativelanguage.googleapis.com": { name: "Google AI", prefix: "google-ai" },
  "api.cohere.ai": { name: "Cohere AI", prefix: "cohere" },
  "api.together.xyz": { name: "Together AI", prefix: "together" },
  
  // 容器镜像
  "registry.hub.docker.com": { name: "Docker Hub", prefix: "docker" },
  "registry-1.docker.io": { name: "Docker Registry", prefix: "docker-reg" },
  "ghcr.io": { name: "GitHub Container Registry", prefix: "ghcr" },
  "quay.io": { name: "Quay.io", prefix: "quay" },
  "gcr.io": { name: "Google Container Registry", prefix: "gcr" },
  "mcr.microsoft.com": { name: "Microsoft Container Registry", prefix: "mcr" },
  "registry.k8s.io": { name: "Kubernetes Registry", prefix: "k8s" },
  "registry.gitlab.com": { name: "GitLab Container Registry", prefix: "gl-reg" },
  
  // CDN 和静态资源
  "cdn.jsdelivr.net": { name: "jsDelivr", prefix: "jsdelivr" },
  "unpkg.com": { name: "UNPKG", prefix: "unpkg" },
  "cdnjs.cloudflare.com": { name: "CDNJS", prefix: "cdnjs" },
  "fonts.googleapis.com": { name: "Google Fonts", prefix: "gfonts" },
  "fonts.gstatic.com": { name: "Google Fonts Static", prefix: "gfonts-static" },
  "ajax.googleapis.com": { name: "Google AJAX", prefix: "gajax" },
  "code.jquery.com": { name: "jQuery CDN", prefix: "jquery" },
  "cdn.bootcdn.net": { name: "BootCDN", prefix: "bootcdn" },
  "cdn.bootcss.com": { name: "BootCSS", prefix: "bootcss" },
  
  // Linux 发行版
  "mirrors.edge.kernel.org": { name: "Kernel.org", prefix: "kernel" },
  "archive.ubuntu.com": { name: "Ubuntu Archive", prefix: "ubuntu" },
  "security.ubuntu.com": { name: "Ubuntu Security", prefix: "ubuntu-sec" },
  "packages.debian.org": { name: "Debian Packages", prefix: "debian-pkg" },
  "deb.debian.org": { name: "Debian Repository", prefix: "debian" },
  "security.debian.org": { name: "Debian Security", prefix: "debian-sec" },
  "download.fedoraproject.org": { name: "Fedora", prefix: "fedora" },
  "dl.fedoraproject.org": { name: "Fedora Downloads", prefix: "fedora-dl" },
  "repo.almalinux.org": { name: "AlmaLinux", prefix: "alma" },
  "mirrors.rockylinux.org": { name: "Rocky Linux", prefix: "rocky" },
  "download.opensuse.org": { name: "openSUSE", prefix: "suse" },
  "archlinux.org": { name: "Arch Linux", prefix: "arch" },
  "mirror.archlinux.org": { name: "Arch Linux Mirror", prefix: "arch-mirror" },
  "dl.archlinux.org": { name: "Arch Linux Downloads", prefix: "arch-dl" },
  "repo.manjaro.org": { name: "Manjaro", prefix: "manjaro" },
  
  // 云服务和存储
  "storage.googleapis.com": { name: "Google Cloud Storage", prefix: "gcs" },
  "s3.amazonaws.com": { name: "Amazon S3", prefix: "s3" },
  "objects.githubusercontent.com": { name: "GitHub Objects", prefix: "gh-obj" },
  "azureedge.net": { name: "Azure CDN", prefix: "azure-cdn" },
  "blob.core.windows.net": { name: "Azure Blob Storage", prefix: "azure-blob" },
  "cdn.cloudflare.net": { name: "Cloudflare CDN", prefix: "cf-cdn" },
  
  // 其他常用平台
  "releases.hashicorp.com": { name: "HashiCorp", prefix: "hashicorp" },
  "download.jetbrains.com": { name: "JetBrains", prefix: "jetbrains" },
  "download.visualstudio.microsoft.com": { name: "Visual Studio", prefix: "vs" },
  "download.microsoft.com": { name: "Microsoft Downloads", prefix: "ms-dl" },
  "dl.google.com": { name: "Google Downloads", prefix: "google-dl" },
  "download.oracle.com": { name: "Oracle Downloads", prefix: "oracle" },
  "ftp.gnu.org": { name: "GNU FTP", prefix: "gnu" },
  "ftp.mozilla.org": { name: "Mozilla FTP", prefix: "mozilla" },
  "download.eclipse.org": { name: "Eclipse", prefix: "eclipse" },
  "archive.apache.org": { name: "Apache Archive", prefix: "apache" },
  "dist.apache.org": { name: "Apache Dist", prefix: "apache-dist" },
  "downloads.sourceforge.net": { name: "SourceForge Downloads", prefix: "sf-dl" },
  "ftp.vim.org": { name: "Vim FTP", prefix: "vim" },
  "download.pytorch.org": { name: "PyTorch", prefix: "pytorch" },
  "download.tensorflow.org": { name: "TensorFlow", prefix: "tensorflow" },
  "anaconda.org": { name: "Anaconda", prefix: "anaconda" },
  "repo.anaconda.com": { name: "Anaconda Repository", prefix: "anaconda-repo" },
  "conda.anaconda.org": { name: "Conda", prefix: "conda" }
};

export default platforms;