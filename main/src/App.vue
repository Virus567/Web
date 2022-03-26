<template>
  <div>
    <div id="mainContainer">
      <Verification class="email"/>
      <Registration class="register"/>
      <Successfully class ="successfully"/>
    </div>
    <CustomButton class="btnStart"/>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Registration from '../../registration/src/components/registration.vue';
import Verification from '../../verification_email/src/components/verification_email.vue';
import Successfully from '../../successfully/src/components/successfully.vue';
import CustomButton from '../../custom_button/src/components/custom_button.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Registration,
    Verification,
    Successfully,
    CustomButton,
  },
  methods: {
    toggleStyleLogin() {
      const login :HTMLDivElement = document.querySelector('.login');
      const register :HTMLDivElement = document.querySelector('.email');
      login.style.display = 'flex';
      register.style.display = 'none';
    },
    toggleStyleRegister() {
      const login :HTMLDivElement = document.querySelector('.login');
      const register :HTMLDivElement = document.querySelector('.email');
      login.style.display = 'none';
      register.style.display = 'flex';
    },
    toggleStyleEmail() {
      const login :HTMLDivElement = document.querySelector('.email');
      const register :HTMLDivElement = document.querySelector('.register');
      login.style.display = 'flex';
      register.style.display = 'none';
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
#mainContainer{
    pointer-events: none;
    position: absolute;
    width:100%;
    height:100%;
    background:#000;
    opacity:0.5;
  }
.btnStart
  {
    position: fixed;
    z-index: 100;
    margin-top: 0%;
    margin-left: 25%;
    overflow-y: auto;
    overflow-x: hidden;
    backdrop-filter: blur(4rem);
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
