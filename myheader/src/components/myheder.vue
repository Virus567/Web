<template>
<div class ="header-block">
  <h1>Overview</h1>
  <input type="text" placeholder="Search…" class="input-block">
  <div class="navBar">
    <button class="NavBtn">
      <img src="../assets/points.svg" alt="points">
    </button>
    <button class="NavBtn">
      <img src="../assets/kolokol.svg" alt="kolokol">
    </button>
    <button class="NavBtnKent">
      <img src="../assets/kent.svg" alt="kent" class="kent_img">
    </button>
  </div>
</div>
</template>

<script lang="ts">
export default {
};
</script>
<style scoped>
  h1{
    color: #535353;
    margin:3px 0px 0px 38px;
  }
 .header-block{
   margin:40px 0 0 0;
   display: flex;
   justify-content: space-between;
   background-color: #F3F3F3;
 }
 .kent_img{
   width: 40px;
   height: 40px;
 }
 .input-block{
    width: 350px;
    height: 30px;
    margin-top: 6px;
    border-radius: 6px;
    border-width: 1px;
    background: url(../assets/search.png) no-repeat;
    background-size: auto 50%;
    background-position-y: 7px;
    background-position-x: 4px;
    padding-left: 30px;
    border:none;
    background-color: #ffffff;
  }
  .navBar{
    display: flex;
    margin-right: 20px;
  }
  .NavBtn{
    height: 30px;
    background-color: #F3F3F3;
    margin-top: 12px;
    margin-right: 20px;
    border: none;
    cursor: pointer;
  }
  .NavBtnKent{
    height: 30px;
    background-color: #F3F3F3;
    margin-top: 5px;
    border: none;
    cursor: pointer;
  }
   @media (max-width: 420px){
     h1{
       display: none;
     }
     .input-block{
       width: 100px;
       height: 40px;
     }
     .header-block{
       margin:0;
     }
  }
</style>
