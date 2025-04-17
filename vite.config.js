import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import viteLegacyPlugin from '@vitejs/plugin-legacy';
import inputFiles from './vite.inputs.js';

export default defineConfig({
  define: {
    'global': 'window',
  },

  plugins: [
    laravel({
      input: [
        //core
        'resources/js/bundle.js',

        // JS global
        'resources/js/app.js',
        'resources/js/dashboard/dashboard-app.js',
        'resources/js/dashboard/dashboard-app-vue.js',


        // CSS
        'resources/sass/app.scss',
        'resources/sass/dashboard/dashboard-app.scss',
        'resources/sass/dashboard/core/datatable.scss',

        //JS crud
        'resources/js/dashboard/crud/article/index.js',
        'resources/js/dashboard/crud/article/main.js',
        'resources/js/dashboard/crud/profile/main.js',
        'resources/js/dashboard/crud/user/index.js',
        'resources/js/dashboard/crud/user/main.js',
      ],
      refresh: true,
    }),

    viteLegacyPlugin({
      targets: ['defaults', 'not IE 11'],
    }),

    vue({
      reactivityTransform: true,
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': '/resources/js',
      '@core': '/resources/js/core',
      '@plugins': '/resources/js/plugins',
      '@sass': '/resources/sass',
    },
  },

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 2000,

    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});

