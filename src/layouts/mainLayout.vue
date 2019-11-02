<template>
  <q-layout view="lHr LpR lFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          CASE BUILDER
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="right" :width="300" side="right" bordered>
      <!-- drawer content -->
          <q-card style="height:100ovh !important">
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="products" style="padding:0px !important">
                <productTabs />
              </q-tab-panel>
              <q-tab-panel name="photo">
                <photoPanel />
              </q-tab-panel>
            </q-tab-panels>
            <q-separator />
            <q-tabs
              v-model="tab"
              dense
              class="bg-grey-3"
              align="justify"
              narrow-indicator
            >
              <q-tab name="products" label="Productos" />
              <q-tab name="photo" label="Fotos" />
            </q-tabs>
          </q-card>
          <div class="text-center text-h6 q-pa-lg q-mt-lg">
            <q-btn @click.native="capture" color="primary" icon="save" label="Guardar tu diseño" style="width:100%" />
            <p class="text-center text-subtitle2 q-mt-sm">Envios gratis ha todo el mundo.</p>
          </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import productTabs from '../components/layout/productTabs.vue'
import photoPanel from '../components/layout/photoPanel.vue'

export default {
  components: {
    productTabs,
    photoPanel
  },
  data () {
    return {
      right: false,
      tab: 'products'
    }
  },
  methods: {
    capture () {
      let c = document.getElementById('captureItem')
      console.log(c.getContent())
    }
  }
}
</script>
<style>
width-500{
  max-width: 600px;
}
</style>
