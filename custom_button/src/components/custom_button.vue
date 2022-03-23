<template>
<div class="custom_button" v-on:click="BlockAll">
  <h1>СТАРТ</h1>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    BlockAll() {
      const aaa = 'aaa';
    },
  },
};
</script>
<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .custom_button{
    display: block;
    border: 5px;
    background: red;
    cursor: pointer;
    border-radius: 100%;
    width: 500px;
    height: 500px;
  }
  .custom_button h1{
    text-align: center;
    margin: auto;
  }
</style>
