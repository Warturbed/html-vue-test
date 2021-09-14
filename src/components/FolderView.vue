<template>
  <li class="folder-item"
    v-for="folder, index in data.folders"
    :key="index"
    @click="newData(folder)"
    >
    <div class="folder-item__icon"></div>
    <span class="folder-item__name">{{folder.name}}</span>
  </li>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'FolderView',
  props: {
    data:Object,
  },
  methods: {
    ...mapActions([
      'GET_DATA_FROM_API',
      'CHANGE_STATE'
    ]),
    // Новый список даты отправляется в стор
    newData(data) {
      this.CHANGE_STATE(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
