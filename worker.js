// Cloudflare Workers 入口文件 - 全新版本
import { handleRequest } from './src/handler.js';

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  },
};