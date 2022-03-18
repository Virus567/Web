<template>
<div class="sidebar-block">
  <div class="logo-block">
    <img src="../assets/logo.svg" alt="logo">
    <h1>PixelShop</h1>
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
</template>

<script lang="ts">
export default {
};
</script>
<style scoped>
  .sidebar-block{
    display: block;
    justify-content: center;
    margin: 40px;
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

</style>
