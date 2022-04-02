<template>
  <div>
    <div class="buttons">
      <button v-on:click="toggleStyleLogin" class="login-btn">Войти</button>
      <button v-on:click="toggleStyleRegister" class="register-btn">Зарегестрироваться</button>
    </div>
    <Login class="login"/>
    <Registration class="register"/>
    <MyTable/>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Login from '../../login/src/components/login.vue';
import Registration from '../../registration/src/components/registration.vue';
import MyTable from '../../table/src/components/table.vue';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Login,
    Registration,
    MyTable,
  },
  methods: {
    toggleStyleLogin() {
      const login :HTMLDivElement = document.querySelector('.login');
      const register :HTMLDivElement = document.querySelector('.register');
      login.style.display = 'flex';
      register.style.display = 'none';
    },
    toggleStyleRegister() {
      const login :HTMLDivElement = document.querySelector('.login');
      const register :HTMLDivElement = document.querySelector('.register');
      login.style.display = 'none';
      register.style.display = 'flex';
    },
  },
});
</script>

<style scoped>
.main {
width: 100%;
}
.register {
display: none;
}
.successfully{
  display: none;
}
.buttons {
display: flex;
justify-content: center;
width: 100%;
margin: 10px 0;
}
.login-btn {
background-color: green;
margin-right: 10px;
padding: 10px 100px;
color: white;
}
.register-btn {
background-color: green;
margin-left: 10px;
padding: 10px 55px;
color: white;
}
@media (max-width:600px){
  .buttons {
  display: block;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  }
  .login-btn {
    background-color: green;
    padding: 10px 100px;
    color: white;
  }
.register-btn {
background-color: green;
padding: 10px 55px;
color: white;
}
}
</style>
