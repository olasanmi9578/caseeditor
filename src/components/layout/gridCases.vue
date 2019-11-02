<template>
  <div>
    {{ cases }}
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  computed: {
    cases () {
      return this.$store.getters['models/getCaseOfDeviceModels']
    }
  },
  data () {
    return {}
  }
}
</script>
