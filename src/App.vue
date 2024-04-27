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
    <a-button type="primary">Primary Button</a-button>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
  </div>
</template>
