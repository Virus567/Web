<template>
<div class="container">
  <div class="logo">
    <img src="../assets/reg.png" alt="logo" class="biglogo-img">
    <img src="../assets/slogo.png" alt="logo" class="logo-img">
  </div>
  <div class="registration_block">
    <h1 class="title">Регистрация</h1>
    <div>
      <div class="input-block">
        <p>Email</p>
        <input type="text" id="email" placeholder="Логин">
      </div>
      <div class="input-block">
        <p>Логин</p>
        <input type="text" id="reg_login" placeholder="Логин">
      </div>
      <div class="input-block">
        <p>Пароль</p>
        <input type="password" id="reg_password"  placeholder="Пароль">
      </div>
      <div class="input-block">
        <p>Повторите пароль</p>
        <input type="password" id="reg_password2" placeholder="Повторите пароль">
      </div>
    </div>
    <div>
      <button type="button" class="Enter-btn" v-on:click="IsValidLogin">Зарегестрироваться</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  methods: {
    IsValidLogin() {
      const login :HTMLInputElement = document.getElementById('reg_login') as HTMLInputElement;
      const password :HTMLInputElement = document.getElementById('reg_password') as HTMLInputElement;
      const password2 :HTMLInputElement = document.getElementById('reg_password2') as HTMLInputElement;
      const email :HTMLInputElement = document.getElementById('email') as HTMLInputElement;
      const config = {
        url: 'https://c09d3d8f-ad12-4bba-bc83-d39555f2e942.mock.pstmn.io/auth/check',
      };
      const data = {
        login: login.value,
      };
      if (email.value === '') {
        alert('Введите почту!');
        return;
      }
      if (login.value === '') {
        alert('Введите логин!');
        return;
      }
      if (password.value === '') {
        alert('Введите пароль!');
        return;
      }
      if (password.value !== password2.value) {
        alert('Пароли не совпадают!');
        return;
      }
      axios.post(config.url, data, { headers: { 'x-mock-match-request-body': true } })
        .then((response) => {
          console.log(response.data.isValid);
          if (response.data.isValid) {
            alert('Логин занят');
          }
        })
        .catch((error) => {
          console.log(error);
          alert('Логин свободен');
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
  .input-block input::placeholder{
    color: white;
  }
  @media (max-width:600px){
  element.style {
    display: block;
  }
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
     .input-block input::placeholder{
      color: grey;
    }
    .input-block p{
      display: none;
    }
  }
    @media (max-width:260px){
      .input-mobil input{
        width: 180px;
    }
    }
</style>
