<template>
<div class="container">
  <span id="result"></span>
  <input id="input" type="number">
   <button id="send" v-on:click="Calculate">Расчитать</button>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    Calculate() {
      if ('WebAssembly' in window) {
         WebAssembly.instantiateStreaming(fetch("functions.wasm"))
            .then(result => {
         const input : HTMLInputElement = document.getElementById("input") as HTMLInputElement;
               const sendBtn = document.getElementById("send");
               const resultText = document.getElementById("result")
               setTimeout(() => {
                  sendBtn.addEventListener('click', () => {
                     const number = input.value;
                     const results = result.instance.exports.factorial(number);
                     resultText.innerHTML = results;
                  })
               }, 3000)
            }).catch(console.error)
      }
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
  .logo{
    margin-right: 10px;
  }
  .biglogo-img{
    height: 280px;
  }
  .logo-img{
    display: none;
  }
  .registration_block{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .title{
    margin-top: 0;
    margin-bottom: 10px;
  }
  .Enter-btn{
    background-color: green;
  }
  .save{
    display: flex;
    margin: 20px 0px 10px 0px;
  }
  .save-text{
    margin: 0 auto;
    margin-left: -1px;
  }
  .save input{
    cursor: pointer;
  }
  .Enter-btn{
    padding: 14px 26px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
  .input-block p{
      margin-bottom: 0px;
  }
  .input-block input{
    font-size: 20px;
    text-decoration: none;
    padding: 2px 1px;
    }
    .input-block input::placeholder{
      color: white;
    }
  @media (max-width:600px){
    .container{
      display: block;
    }
    .biglogo-img{
      display: none;
    }
    .logo-img{
      display: block;
      margin: 0 auto;
      height: 100px;
    }
     .input-block input::placeholder{
      color: grey;
    }
    .input-block p{
      display: none;
    }
  }
    @media (max-width:260px){
    .input-block input::placeholder{
      color: grey;
    }
    }
</style>
