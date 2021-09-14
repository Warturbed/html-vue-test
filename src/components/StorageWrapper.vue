<template>
    <nav class="navbar">
        <button class="navbar__btn" v-if="HISTORY.length > 1" @click="toPreviosFolder"></button>
        <span class="navbar__text">{{DATA.name}}</span>
    </nav>
    <main class="storage">
        <div class="folder" v-if="DATA.folders.length">
          <ul class="folder__list">
            <FolderView :data="DATA"/>
          </ul>
        </div>
        <div class="file">
          <ul class="file__list storage__file-list">
            <FileView :files_data="DATA.files"/>
          </ul>
        </div>
    </main>
</template>

<script>
import FolderView from './FolderView.vue';
import FileView from "./FileView";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'StorageWrapper',
  components: {
    FolderView,
    FileView,
  },
  computed: {
    ...mapGetters([
      'DATA',
      'HISTORY'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_DATA_FROM_API',
      'CHANGE_PAST_DATA'
    ]),
    // К предыдущей папке
    toPreviosFolder() {
        this.CHANGE_PAST_DATA()
    }
  },
  // Получение списка перед загрузкой страницы
  beforeMount() {
    this.GET_DATA_FROM_API()
  }
}
</script>

<style lang="scss">
</style>