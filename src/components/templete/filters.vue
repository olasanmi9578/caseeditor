<template>
  <div>
    <iphone7 v-if="modelEdit == 1 && formatEdit == 1" />
    <iphone7single v-if="modelEdit == 1 && formatEdit == 2" />
  </div>
</template>

<script>
import iphone7 from './iphone/iphone7'
import iphone7single from './iphone/iphone7single'

export default {
  // name: 'ComponentName',
  components: {
    iphone7,
    iphone7single
  },
  computed: {
    modelEdit () {
      return this.$store.getters['models/modelToEdit']
    },
    formatEdit () {
      return this.$store.getters['models/formatToEdit']
    }
  },
  data () {
    return {}
  }
}
</script>
