<template>
<div class="container">
  <button type="button" v-on:click="GetList">Сформировать список</button>
  <loader v-if="loading"/>
  <table v-else class="table_block">
    <tr><th>gender</th><th>id</th><th>ФИО</th><th>Возраст</th><th>Почта</th></tr>
    <tr v-on:click="FindById(item.id)" v-for="(item) in list" :key="item.id">
      <td>
        <font-awesome-icon icon="mars" v-if="item.gender == 1"/>
        <font-awesome-icon icon="venus" v-else/>
      </td>
      <td>{{ item.id }}</td>
      <td>{{ item.fio }}</td>
      <td>{{ item.age }}</td>
      <td>
          {{ item.email }}
          <font-awesome-icon icon="check" class="verif" v-if="item.isVerif"/>
          <font-awesome-icon icon="ban" class="verif" v-else/>
      </td>
    </tr>
  </table>
  <div id="openModal" class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Подробная информация</h3>
        <a v-on:click="CloseModal" class="close">×</a>
      </div>
      <div class="modal-body">
        <p>ID: {{element.id}}</p>
        <p>ФИО: {{element.fio}}</p>
        <p>Возраст: {{element.age}}</p>
        <p>Email: {{element.email}}</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script lang="ts">
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMars, faVenus, faCheck, faBan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const headers = {
  'Content-Type': 'application/json',
};

library.add(faMars, faVenus, faCheck, faBan);
export default {
  data: () => ({
    loading: true,
    list: [],
    element: {},
  }),
  components: {
    FontAwesomeIcon,
  },
  methods: {
    GetList() {
      const config = {
        url: 'api/getstudent',
      };
      axios.get(config.url, { headers })
        .then((response) => {
          console.log(response.data);
          this.list = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FindById(i) {
      const config = {
        url: 'api/getstudent?id=',
      };
      axios.get(config.url + i, { headers })
        .then((response) => {
          console.log(response.data);
          this.element = response.data;
          const modal :HTMLDivElement = document.querySelector('#openModal');
          modal.style.opacity = '1';
          modal.style.pointerEvents = 'auto';
          modal.style.overflowY = 'auto';
        })
        .catch((error) => {
          console.log(error);
        });
    },
    CloseModal() {
      const modal :HTMLDivElement = document.querySelector('#openModal');
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
    },
  },
};
</script>
<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  .table_block {
margin: 20px auto;
width: 60%;
}

.verif{
  margin-bottom: 10px;
}

.table_block tr {
    cursor: pointer;
}

.table_block th,
.table_block td {
padding: 5px;
text-align: left;
}

.table_block tr:hover:not(:first-child),
.table_block th {
background-color: #EEEEEE;
transition: all 0.5s;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1050;
    opacity: 0;
    -webkit-transition: opacity 200ms ease-in;
    -moz-transition: opacity 200ms ease-in;
    transition: opacity 200ms ease-in;
    pointer-events: none;
    margin: 0;
    padding: 0;
}
.modal:target {
    opacity: 1;
    pointer-events: auto;
    overflow-y: auto;
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
@media (min-width: 576px) {
  .modal-dialog {
      max-width: 500px;
      margin: 30px auto;
  }
}
.modal-content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}
@media (min-width: 768px) {
  .modal-content {
      -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.5);
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
  }
}
.modal-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eceeef;
}
.modal-title {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 500;
}
.close {
    float: right;
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
    text-decoration: none;
}
.close:focus, .close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .75;
}
.modal-body {
  margin-left: 10px;
  text-align: left;
}
</style>
