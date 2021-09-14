<template>
  <div class="container">
      <StorageWrapper />
    </div>
</template>

<script>
import StorageWrapper from './components/StorageWrapper.vue'

export default {
  name: 'App',
  components: {
    StorageWrapper
  },
}
</script>

<style lang="scss">
@import '@/styles/style.scss';
</style>
