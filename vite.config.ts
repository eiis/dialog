import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions:{
      output:{
        manualChunks(id, { getModuleInfo }){
          // console.log(id, getModuleInfo(id));
          const reg = /(.*)\/src\/components\/(.*)/
          if (reg.test(id)) {
            // console.log(getModuleInfo(id)?.importers.length,'getModuleInfo(id)?.importers.length');
              
            const importersLen = getModuleInfo(id)?.importers.length ?? 0
            // 被多处引用
            if (importersLen > 1) return 'common'
          }
          if (id.includes('node_modules')) return 'vendor'
        },
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'assets/[name]-[hash].[ext]' // 资源文件像 字体，图片等
      }
    }
  }
})
