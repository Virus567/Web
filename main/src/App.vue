<template>
  <div class="container">
    <!-- <Fio lastName="Бессонов" firstName="Иван" middleName="Анатольевич"/>
    <Vyatsu :results="results"/>
    <div class="buttons">
      <button v-on:click="toggleStyleLogin" class="login-btn">Войти</button>
      <button v-on:click="toggleStyleRegister" class="register-btn">Зарегестрироваться</button>
    </div>    
    <Login class="login"/>
    <Registration class="register"/> -->
    <SideBar class="sidebar"/>
    <div class="main-block">
      <MyHeader/>
      <Dashboard/>
    </div>
    
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import axios from 'axios';
import Fio from '../../fio/src/components/Fio.vue';
import Vyatsu from '../../vyatsu/src/components/Vyatsu.vue';
import Login from '../../login/src/components/login.vue';
import Registration from '../../registration/src/components/registration.vue';
import MyHeader from '../../myheader/src/components/myheder.vue'
import SideBar from '../../sidebar/src/components/sidebar.vue'
import Dashboard from '../../dashboard/src/components/dashboard.vue'


const url = 'http://localhost:8080/admission/';

export default  Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Fio,
    Vyatsu,
    Login,
    Registration,
    MyHeader,
    SideBar,
    Dashboard,
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.results = response.data;
      })
      .catch((error: any) => console.log(error));
  },
  // methods: {
  //   toggleStyleLogin() {
  //     const login :HTMLDivElement = document.querySelector('.login');
  //     const register :HTMLDivElement = document.querySelector('.register');
  //     login.style.display = 'flex';
  //     register.style.display = 'none';
  //   },
  //   toggleStyleRegister() {
  //     const login :HTMLDivElement = document.querySelector('.login');
  //     const register :HTMLDivElement = document.querySelector('.register');
  //     login.style.display = 'none';
  //     register.style.display = 'flex';
  //   },
  // },
});
</script>

<style scoped>
.container{
  display:flex;
  font-family: 'Roboto', sans-serif;
}
.sidebar{
  width: 20%;
}
.main-block{
  width: 80%;
  background-color: #F3F3F3;
}
/* .main {
width: 100%;
}
.register {
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
} */
</style>

