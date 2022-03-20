<template>
<div class="container">
  <button type="button" v-on:click="GetList">Сформировать список</button>
  <loader v-if="loading"/>
  <table v-else class="table_block">
    <tr><th>id</th><th>ФИО</th><th>Возраст</th><th>Почта</th></tr>
    <tr v-on:click="FindById(item.id)" v-for="(item) in list" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.fio }}</td>
      <td>{{ item.age }}</td>
      <td>{{ item.email }}</td>
    </tr>
  </table>
</div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data: () => ({
    loading: true,
    list: [],
    element: {},
  }),
  methods: {
    GetList() {
      const config = {
        url: 'https://80b603bf-d22f-4c72-9130-52004b6307c5.mock.pstmn.io',
      };
      axios.get(config.url)
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
        url: 'https://80b603bf-d22f-4c72-9130-52004b6307c5.mock.pstmn.io/',
      };
      axios.get(config.url + i)
        .then((response) => {
          console.log(response.data);
          this.element = response.data;
          const str = 'ID: ' + (this.element.id) + '\nФИО: ' + (this.element.fio) + '\nВозраст: ' + (this.element.age) + '\nEmail: ' + (this.element.email);
          alert(str);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
    display: block;
    justify-content: center;
  }
  .table_block {
margin: 0px auto;
width: 60%;
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

</style>
