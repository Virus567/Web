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
  <div class="banners">
    <div class="banner w-70">
        <div class="btns">
          <button class="info-btn">
            <img src="../assets/total-visits.svg" alt="visits">
            <div class="info">
              <p>Total Visits</p>
              <p>10.8m</p>
            </div>
          </button>
          <button class="info-btn">
            <img src="../assets/tatal-sales.svg" alt="sales">
            <div class="info">
              <p>Total Sales</p>
              <p>100,345</p>
            </div>
          </button>
          <button class="info-btn">
            <img src="../assets/total-made.svg" alt="made">
            <div class="info">
              <p>Total Made</p>
              <p>$200k</p>
            </div>
          </button>
          <button class="info-btn-last">
            <img src="../assets/orders-completed.svg" alt="orders">
            <div class="info">
              <p style="font-size:10px">Orders Completed</p>
              <p>98,771</p>
            </div>
          </button>
        </div>
        <h2 style="margin-top:35px">Top Products</h2>
        <div class="tovar">
          <div class="info-phone">
            <img src="../assets/pinkPhone.png" alt="pink">
            <div class="tovar-info">
              <p>Samsung S20 128 GB</p>
              <p>Pink - 50 orders</p>
            </div>
          </div>
          <div class ="options">
            <div class="info-t">
              <p class="tovar-h">Inventory</p>
              <p class="tovar-p">700</p>
            </div>
            <div class="info-t">
              <p class="tovar-h">Sale</p>
              <p class="tovar-p">$1,000.60</p>
            </div>
            <div class="info-t">
              <p class="tovar-h">Price</p>
              <p class="tovar-p">$1,300.92</p>
            </div>
            <div class="info-t">
              <p class="tovar-h">Today</p>
              <p class="tovar-p">$17,000.92</p>
            </div>
          </div>
        </div>
        <div class="tovar">
          <div class="info-phone">
            <img src="../assets/blackPhone.png" alt="black">
            <div class="tovar-info">
              <p>Samsung S21 256 GB</p>
              <p>Black - 25 orders</p>
            </div>
          </div>
          <div class ="options">
            <div class="info-t">
              <p class="tovar-h">Inventory</p>
              <p class="tovar-p">200</p>
            </div>
            <div class="info-t">
              <p class="tovar-h">Sale</p>
              <p class="tovar-p">$1,200.60</p>
            </div>
            <div class="info-t">
              <p class="tovar-h">Price</p>
              <p class="tovar-p">$1,500.92</p>
            </div>
            <div class="info-t">
              <p class="tovar-h">Today</p>
              <p class="tovar-p">$12,000.82</p>
            </div>
          </div>
        </div>
    </div>
    <div class="banner w-30">
        <div>
          <div class="small_header">
            <div class="name">
              <h2>Stats Overview</h2>
              <p class="fs-14" style="margin:0">Information about store visits</p>
            </div>
            <button class="img-btn">
              <img src="../assets/customers-settings.svg" alt="settings">
            </button>
          </div>
          <div class="list-gender">
            <div class="list-element">
              <p>Women</p>
              <img src="../assets/women.svg" alt="women">
            </div>
            <div class="list-element">
              <p>Men</p>
              <img src="../assets/men.svg" alt="men">
            </div>
            <div class="list-element">
              <p>Kids</p>
              <img src="../assets/kids.svg" alt="kids">
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
    display: block;
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
    width: 94%;
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
  .btns{
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(4, 22%);
    margin: 10px 30px;
    gap: 0 5px;

  }
  .info-btn{
    display: flex;
    border: none;
    padding: 15px 8px;
    border-radius: 16px;
  }
  .info-btn-last{
    display: flex;
    border: none;
    padding: 15px 8px;
    border-radius: 16px;
  }
  .info-phone{
    display: flex;
    border: none;
    width: 39%;
    }
    .info-phone p{
    color:#7B7878;
    font-size:15px;
    margin:0 0 0 7px;
  }
  .info-btn p{
    color:#7B7878;
    font-size:13px;
    margin:0 0 0 7px;
  }
  .info-btn-last p{
    color:#7B7878;
    font-size:13px;
    margin:0 0 0 3px;
  }
  .info{
    display: block;
  }
  .info-t{
    display: block;
    text-align: center;
  }
  .tovar-info{
    display: block;
    width: 73%;
    margin-left: 10px;
  }
  .tovar{
    display: flex;
    justify-content: space-between;
    background-color: #EEEEEE;
    padding: 15px 13px;
    border-radius: 16px;
    max-height: 50px;
    margin-top: 10px;
  }
  .tovar p{
    margin: 3px;
  }
  .tovar-h{
    font-size: 18px;
    color: #7B7878;
  }
  .tovar-p{
    font-weight: 500;
    font-size: 14px;
  }
  .options{
    display: grid;
    grid-template-columns: repeat(4, 25%);
    width: 61%;
  }
  .list-gender{
    display: block;
  }
  .list-element{
    margin-top:34px;
  }
  .list-element img{
        width: 97%;
        height: 97%;
  }
  .list-element p{
    margin: 2;
    color:#535353;
    font-weight: 600;
    font-size: 14px;
  }

</style>
