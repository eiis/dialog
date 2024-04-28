<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { dialog } from './utils/dialog';
const showModal = () => {
  const unmount = dialog(HelloWorld,{
    msg: 'Hello Vue3'
  },{
    onOk: () => {
      unmount();
    }
  })
};

</script>

<template>
  <div>
    <p class="test8">8px</p>
    <p class="test10">10px</p>
    <p class="test12">12px</p>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
  </div>
</template>

<style scoped>
.test8 {
  font-size: 8px;
  margin-bottom: 10px;
}
.test10 {
  font-size: 10px;
  margin-bottom: 10px;
}
.test12 {
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
