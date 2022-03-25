<template>
  <div class="container">
    <SideBar class="sidebar"/>
    <div class="main-block">
      <MyHeader/>
      <Dashboard/>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import MyHeader from '../../myheader/src/components/myheder.vue';
import SideBar from '../../sidebar/src/components/sidebar.vue';
import Dashboard from '../../dashboard/src/components/dashboard.vue';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    MyHeader,
    SideBar,
    Dashboard,
  },
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
</style>
