// 请求处理器 - 全新版本
import { getStaticFile } from './static.js';
import platforms from './platforms.js';

export async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 处理根路径
  if (pathname === '/') {
    const html = getStaticFile('index.html');
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // 处理静态文件
  if (pathname === '/style.css') {
    const css = getStaticFile('style.css');
    return new Response(css, {
      headers: {
        'Content-Type': 'text/css; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  if (pathname === '/script.js') {
    const js = getStaticFile('script.js');
    return new Response(js, {
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  // 404 处理
  return new Response('Not Found', { status: 404 });
}