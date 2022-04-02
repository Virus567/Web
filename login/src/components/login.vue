<template>
<div class="container">
  <div class="logo">
    <img src="../assets/reg.png" alt="logo" class="biglogo-img">
    <img src="../assets/slogo.png" alt="logo" class="logo-img">
  </div>
  <div class="registration_block">
    <h1 class="title">Авторизация</h1>
    <div>
      <div class="input-block">
        <p>Логин</p>
        <input type="text" id="login"  placeholder="Логин">
      </div>
      <div class="input-block">
        <p>Пароль</p>
        <input type="password" id="password" placeholder="Пароль">
      </div>
    </div>
    <div class="save">
      <input type="checkbox">
      <h3 class="save-text">Сохранить</h3>
    </div>
    <div>
      <button type="button" class="Enter-btn" v-on:click="GetLogin">Авторизоваться</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  methods: {
    GetLogin() {
      const login :HTMLInputElement = document.getElementById('login') as HTMLInputElement;
      const password :HTMLInputElement = document.getElementById('password') as HTMLInputElement;
      const config = {
        url: 'api/auth/login',
      };
      const data = {
        login: login.value,
        pass: password.value,
      };
      axios.post(config.url, data, { headers: { 'x-mock-match-request-body': true } })
        .then((response) => {
          console.log(response.data.completed);
          if (response.data.completed) {
            alert('Логин и пароль верные');
          } else alert('Введены неверные данные');
        })
        .catch((error) => {
          console.log(error);
        });
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
