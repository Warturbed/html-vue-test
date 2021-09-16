<template>
  <li class="file-item" @click="toggleTypeList">
    <img src="../img/file.png" alt="" />
    <span class="file-item__name">{{ file_data.name }}</span>
    <ul class="file-item__list" v-if="isTypeListVisible">
      <li class="file-item__type">Type: {{ file_data.type }}</li>
      <li class="file-item__type">Size: {{ file_data.length }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FileView",
  props: {
    file_data: {
      type: Object,
    },
  },
  data() {
    return {
      isTypeListVisible: false,
    };
  },
  methods: {
    toggleTypeList() {
      this.isTypeListVisible = !this.isTypeListVisible;
    },
  },
  watch: {
    file_data: function () {
      this.isTypeListVisible = false;
    },
  },
};
</script>

<style lang="scss">
</style>
