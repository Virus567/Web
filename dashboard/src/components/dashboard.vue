<template>
<div class="dashboard-block">
  <div class="banners">
      <div class="banner w-70">
        <div>
          <div class="header">
            <div>
              <h2 style="color:#A7A7A7">Total Revenue</h2>
              <h1>$980,273.00</h1>
            </div>
            <button class="header-btn">
              <p class="btn-p">THIS YEAR</p>
              <img src="../assets/treug.svg" alt="t">
            </button>
          </div>
          <div class="img-block">
            <img src="../assets/grafik.svg" style="width:100%" alt="grafik">
          </div>
        </div>      
      </div>
      <div class="banner w-30">
        <div>
          <div class="small_header">
            <div class="name">
              <h2>Customers</h2>
              <p class="fs-14" style="margin:0">Information About your Customers</p>
            </div>
            <button class="img-btn">
              <img src="../assets/customers-settings.svg" alt="settings">
            </button>
          </div>
          <div class="statistic">
            <div class="diagram">
              <img class="circle" src="../assets/purple85.svg" alt="85">
              <p class="fs-14">Current Customers</p>
            </div>
             <div class="diagram">
              <img class="circle" src="../assets/yllow66.svg" alt="66">
              <p class="fs-14">New Customers</p>
            </div>
          </div>
          <div class="statistic">
            <div class="diagram">
              <img class="circle" src="../assets/orange90.svg" alt="90">
              <p class="fs-14">Target Customers</p>
            </div>
             <div class="diagram">
              <img class="circle" style="margin-left:18px" src="../assets//pink30.svg" alt="30">
              <p class="fs-14" style="margin-left:8px">Retarget Customers</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
};
</script>
<style scoped>
  .dashboard-block{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #F3F3F3;
  }
  .header{
    display: flex;
    justify-content: space-between;
  }
  h1{
    margin: 0px;
  }
  h2{
    margin: 0;
  }
  .circle{
    width: 112px;
    height: 112px;
  }
  .img-block{
    margin-top: 20px;
  }
  .banners{
    display: flex;
    justify-content: space-between;
    margin: 24px 20px 0 38px;
    width: 100%;
  }
  .fs-14{
    color: #A7A7A7;
    font-size: 14px;
  }
  .banner{
    padding: 30px;
    background: #FFFFFF;
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
  }
  .w-70{
    width: 60%;
  }
  .w-30{
    width: 26%;
  }
  .btn-p{
    font-size: 12px;
    color:#FFC029;
    margin: 0;
  }
  .header-btn{
    display:flex;
    justify-items: center;
    background-color: #FFF8E5;
    width: 91px;
    height: 35px;
    align-items: center;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  .img-btn{
    border: none;
    background-color: #ffffff;
  }
  .small_header{
    display:flex;
    justify-content: space-between;
  }
  .name{
    display: block;
  }
  .statistic{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .diagram{
    display: block;
  }

</style>
