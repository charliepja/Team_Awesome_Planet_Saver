<template lang="html">
  <div>
<div id="bar">
<one-bar :pages="pages"/>
</div>
  </div>
</template>

<script>
import OneBar from './oneBar.vue'
import LearningService from '@/services/ModulesLearningService.js'
export default {
  name: 'progress-bar',
  data () {
    return {
      pages: null
    }
  },
  components: {
    'one-bar': OneBar
  },
  mounted () {
    this.getTotalPages()
  },
  methods: {
    getTotalPages () {
      const getURL = document.URL
      const arrayURL = getURL.split('/')
      LearningService.getTotalPages(arrayURL[5])
        .then(result => {
          this.pages = result
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="css" scoped>
#bar {
display: flex;
margin-left: 50px;
margin-right: 50px;
}
</style>
