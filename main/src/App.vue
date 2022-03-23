<template>
  <div>
    <CustomButton/>
    <Verification class="email"/>
    <Registration class="register"/>
    <Successfully class ="successfully"/>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import axios from 'axios';
import Registration from '../../registration/src/components/registration.vue';
import Verification from '../../verification_email/src/components/verification_email.vue';
import Successfully from '../../successfully/src/components/successfully.vue';
import CustomButton from '../../custom_button/src/components/custom_button.vue';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Registration,
    Verification,
    Successfully,
    CustomButton,
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
