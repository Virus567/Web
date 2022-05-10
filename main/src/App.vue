<template>
  <div>
    <Factorial/>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Factorial from '../../factorial/src/components/factorial.vue';

export default Vue.extend({
  name: 'App',
  props: {
    results: [],
  },
  components: {
    Factorial,
  },
});
</script>

<style scoped>

</style>
