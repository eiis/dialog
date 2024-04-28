<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { dialog } from './utils/dialog';
import EventEmitter from './utils/bus'

const ee = new EventEmitter()
const showModal = () => {
  const unmount = dialog(HelloWorld,{
    msg: 'Hello Vue3'
  },{
    onOk: () => {
      unmount();
    }
  })
};
//dev分支的代码

ee.on('showModal',()=>{
  showModal()
})

const click=()=>{
  ee.emit('showModal')
}

</script>

<template>
  <div>
    <p class="test8">8px</p>
    <p class="test10">10px</p>
    <p class="test12">12px</p>
    <a-button type="primary" @click="click">Open Button</a-button>
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
