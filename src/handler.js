// 请求处理器 - 全新版本
import { getStaticFile } from './static.js';
import platforms from './platforms.js';

export async function handleRequest(request, env) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 处理根路径
  if (pathname === '/') {
    const html = getStaticFile('index.html', env);
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // 处理静态文件
  if (pathname === '/style.css') {
    const css = getStaticFile('style.css', env);
    return new Response(css, {
      headers: {
        'Content-Type': 'text/css; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  if (pathname === '/script.js') {
    const js = getStaticFile('script.js', env);
    
    // 在 JavaScript 文件开头注入 BASE_URL 变量
    const jsWithBaseUrl = `// 从环境变量注入的基础 URL
const BASE_URL = "${env.BASE_URL}";

${js}`;
    return new Response(jsWithBaseUrl, {
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  // 404 处理
  return new Response('Not Found', { status: 404 });
}