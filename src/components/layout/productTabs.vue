<template>
  <q-card>
    <q-tabs
    v-model="tabProducts"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
    >
      <q-tab name="models" label="Modelo" />
      <q-tab name="format" label="Formato" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tabProducts" animated>
      <q-tab-panel name="models">
      <!--aki vista de los dispositivos-->
      <div>
        <productTansList />
      </div>
      </q-tab-panel>
      <q-tab-panel name="fund">
        <div class="text-center text-h6 q-pa-lt">Selecciona el tipo de funda</div>
        <gridCases />
      </q-tab-panel>
      <q-tab-panel name="format">
        <div class="text-h6 text-center">Formatos</div>
        <formatList />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>

import productTansList from './productTansList.vue'
import gridCases from './gridCases.vue'
import formatList from './formatList.vue'

export default {
  // name: 'ComponentName',
  components: {
    productTansList,
    gridCases,
    formatList
  },
  computed: {
    allDeviceModels () {
      return this.$store.getters['models/deviceModels']
    },
    cases () {
      return this.$store.getters['models/getCaseOfDeviceModels']
    }
  },
  data () {
    return {
      tabProducts: 'models',
      modelTypeDevice: true,
      models: [],
      modelsInDevice: false,
      circularLoading: false
    }
  },
  methods: {
    // get models by type device
    filterModels (keyss) {
      this.circularLoading = true
      this.$store.dispatch('models/getModels', keyss)
        .then((resp) => {
          if (resp.data !== 401) {
            this.modelTypeDevice = false
            this.modelsInDevice = true
            this.circularLoading = false
          }
        })
        .catch(err => console.log(err))
    },
    toggleVisible () {
      this.modelTypeDevice = true
      this.modelsInDevice = false
    }
  }
}
</script>
