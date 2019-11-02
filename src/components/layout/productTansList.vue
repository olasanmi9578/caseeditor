<template>
  <div style="width:100%; padding:0px">
    <q-scroll-area style="height: 360px; max-width: 300px;">
      <q-list>

        <q-item v-for = "(models, idx) in allDeviceModels" :key="idx" clickable v-ripple @click.native="filterModel(models.id)">
          <q-item-section avatar>
            <img alt="iphone logo" style="width:80px" src="~assets/iphone.png">
          </q-item-section>
          <q-item-section>{{ models.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  computed: {
    allDeviceModels () {
      return this.$store.getters['models/deviceModels']
    }
  },
  data () {
    return {}
  },
  methods: {
    getCases () {
      this.$store.dispatch('models/showAll')
        .then((resp) => {
          if (resp.data !== 401) {
            this.modelTypeDevice = false
            this.modelsInDevice = true
            this.circularLoading = false
          }
        })
        .catch(err => console.log(err))
    },
    filterModel (id) {
      this.$store.dispatch('models/filterModel', id)
        .then((resp) => {
          if (resp.data !== 401) {
            this.modelTypeDevice = false
            this.modelsInDevice = true
            this.circularLoading = false
            this.$store.dispatch('models/updateModelEdit', id)
          }
        })
        .catch(err => console.log(err))
    }
  },
  beforeMount () {
    this.getCases()
  }
}
</script>
