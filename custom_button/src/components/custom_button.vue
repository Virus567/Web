<template>
<div v-on:click="BtnStart" class="btnStart">
  <h1>СТАРТ</h1>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    BtnStart() {
      const btnStart :HTMLDivElement = document.querySelector('.btnStart');
      const bgdiv :HTMLDivElement = document.querySelector('#mainContainer');
      btnStart.style.display = 'none';
      bgdiv.style.pointerEvents = 'auto';
      bgdiv.style.userSelect = 'auto';
      bgdiv.style.background = '#fff';
      bgdiv.style.opacity = '1';
    },
  },
};
</script>
<style scoped>
div {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 48%;
  height: 96%;
  background-color: red;
  border-radius: 100%;
  border: 3px solid;
  cursor: pointer;
  overflow-y: auto;
  overflow-x: hidden;
  backdrop-filter: blur(4rem);
}
div:hover {
  background-color: rgb(248, 51, 51);
}
div:active {
  background-color: rgb(245, 125, 109);
}
div h1 {
  font-size: 100px;
  font-family: arial;
  margin-top: 35%;
  color: #ffff;
  user-select: none;
}
</style>
