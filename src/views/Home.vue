<template>
  <div class="home">
    <div class="one" v-for="(item, index) in DXYAreaList" :key="index">
      klalallalalalla
      <div>{{ item.continentName }}</div>
      {{ item.updateTime }}
      <p>{{ item.curedCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DXYArea',
  data() {
    return {
      DXYAreaList: [],
    }
  },
  created() {
    this.axios.get('/api/DXYArea').then(res => {
      this.DXYAreaList = res.data.data.results
    })
  },
}
</script>
