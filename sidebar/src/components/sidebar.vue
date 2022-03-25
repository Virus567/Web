<template>
<div class="sb-con">
  <button class="menu-btn" v-on:click="openNavbarPanel">
      <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_101_2)">
        <rect width="40" height="32" fill="#F5F5F5"/>
        <rect y="1" width="40" height="6" rx="3" fill="#67748E"/>
        <rect y="13" width="40" height="6" rx="3" fill="#67748E"/>
        <rect y="25" width="30" height="6" rx="3" fill="#67748E"/>
        </g>
        <defs>
        <clipPath id="clip0_101_2">
        <rect width="50" height="32" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </button>
  <div class="sidebar-block">
    <div class="logo-block">
      <img src="../assets/logo.svg" alt="logo">
      <h1>PixelShop</h1>
      <button class="ExitBtn" v-on:click="exitNavbarPanel">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L21 21M21 1L1 21" stroke="#FF0000"/>
        </svg>
      </button>
    </div>
    <div class="list">
      <button class="list-btn">
        <img src="../assets/dashboard.svg" alt="dashboard">
        <h3 style="color:#FFC42A">Dashboard</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/products.svg" alt="products">
        <h3>Products</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/customers.svg" alt="customers">
        <h3>Customers</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/orders.svg" alt="orders">
        <h3>Orders</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/shipments.svg" alt="shipments">
        <h3>Shipments</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/transactions.svg" alt="transctions">
        <h3>Transactions</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/Setting.svg" alt="settings">
        <h3>Settings</h3>
      </button>
      <button class="list-btn">
        <img src="../assets/logout.svg" alt="logout">
        <h3>Logout</h3>
      </button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

const Dashboard = document.getElementById('Dashboard');
const Tables = document.getElementById('Tables');
const Billing = document.getElementById('Billing');
const RTL = document.getElementById('RTL');
const CurrentCheck = Dashboard;
export default {
  methods: {
    clickSideBar(e) {
      console.log(e.target.class);
    },
    openNavbarPanel() {
      const NavbarPanel :HTMLDivElement = document.querySelector('.sidebar-block');
      const btn :HTMLButtonElement = document.querySelector('.menu-btn');
      const sidebar :HTMLDivElement = document.querySelector('.sidebar-block');
      NavbarPanel.style.transform = 'translateX(0%)';
      NavbarPanel.style.opacity = '1';
      btn.style.display = 'none';
      sidebar.style.margin = '0';
    },
    exitNavbarPanel() {
      const NavbarPanel :HTMLDivElement = document.querySelector('.sidebar-block');
      const btn :HTMLButtonElement = document.querySelector('.menu-btn');
      const sidebar :HTMLDivElement = document.querySelector('.sidebar-block');
      NavbarPanel.style.transform = 'translateX(-100%)';
      NavbarPanel.style.opacity = '0';
      btn.style.display = 'block';
      sidebar.style.margin = '40px';
    },
  },
};
</script>
<style scoped>
 .menu-btn{
    display: none;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
    background-color: #F5F5F5;
    border: none;
  }
  .ExitBtn{
    display: none;
    border: none;
    background-color: #F5F5F5;
    margin-left: 20%;
  }
  .sidebar-block{
    display: block;
    justify-content: center;
    margin: 40px;
    background-color: #ffffff;
  }
  .logo-block{
    display: flex;
    justify-content: center;
  }
  h1{
    margin:4px 0 0 10px;
    color: #535353;
  }
  h3{
    margin:6px 0 0 8px;
    color: #CDCDCD;
  }
  .list{
    margin-top:75px;
    margin-left: 45px;
    display: block;
    justify-content: center;

  }
  .list-btn{
    margin-top:35px;
    background-color: #ffffff;
    display: flex;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 420px)
  {
    .sb-con{
      background-color: #F3F3F3;
    }
    .logo-block{
      margin-left: 2%;
      margin-top: 14px;
      padding-left: 5%;
    }
    .list{
      padding-left: 5%;
    }
    .list button{
    padding: 5px;
    margin: 20px;
    }
    .menu-btn{
      display: block;
    }
    .sidebar-block{
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      z-index: 9;
      transition: transform 0.2s, opacity 0.2s;
      transform: translateX(-100%); /*убираем меню в сторону */
      opacity: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .ExitBtn{
      display: block;
    }
  }

</style>
