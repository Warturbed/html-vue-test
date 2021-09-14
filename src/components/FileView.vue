<template>
  <li class="file-item" v-for="file, index in files_data" :key="index">
    <img src="../img/file.png" alt="">
    <span class="file-item__name">{{file.name}}</span>
  </li>
</template>

<script>
export default {
  name: 'FileView',
  props: {
    files_data: {
      type: Array
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
</style>
