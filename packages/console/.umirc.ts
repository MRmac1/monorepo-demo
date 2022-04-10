import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    // exclude: ['gateway']
  },
  routes: [
    { path: '/', component: '@/pages/home' },
  ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: true,
  },
});
