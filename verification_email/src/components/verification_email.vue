<template>
<div class="container">
  <div class="logo">
    <img src="../assets/reg.png" alt="logo" class="biglogo-img">
    <img src="../assets/slogo.png" alt="logo" class="logo-img">
  </div>
  <div class="email_block">
    <h1 class="title">Регистрация</h1>
    <div class="input_desctop">
      <div class="input-block">
        <p>Email</p>
        <input type="text" class="email_input">
      </div>
    </div>
    <div class="input-mobil">
      <input type="text" class ="email_input" placeholder="Email">
    </div>
    <div>
      <button type="button" class="Enter-btn" v-on:click="SwapReg">Далее</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    SwapReg() {
      const emailBlock :HTMLDivElement = document.querySelector('.email');
      const registrationBlock :HTMLDivElement = document.querySelector('.register');
      emailBlock.style.display = 'none';
      registrationBlock.style.display = 'flex';
      const enterEmail = (document.querySelector('.email_input') as HTMLInputElement).value;
      const regEmail :HTMLInputElement = document.querySelector('.reg_email');
      regEmail.value = enterEmail;
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
    margin: 14px 0px;
    padding: 14px 26px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
  .input-mobil{
    display: none;
    flex-direction: column;
  }
  .input-block p{
      margin-bottom: 0px;
  }
  .input-block input{
    font-size: 20px;
    text-decoration: none;
    padding: 2px 1px;
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
    .input_desctop{
      display: none;
    }
    .input-mobil{
      display: flex;
    }
    .input-mobil input{
      margin-top: 10px;
    }
    .input-mobil input{
    font-size: 20px;
    text-decoration: none;
    padding: 2px 1px;
    }
  }
    @media (max-width:260px){
      .input-mobil input{
        width: 180px;
    }
    }
</style>
