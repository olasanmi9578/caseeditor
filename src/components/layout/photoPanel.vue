<template>
  <div style="padding: 0px">
    <q-tabs v-model="tabsPhoto" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
      <q-tab name="subir" label="Subir" />
      <q-tab name="social" label="Sociales" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tabsPhoto" animated style="padding:0px">
      <q-tab-panel name="subir">
        <div class="text-center text-h6 q-pa-lt">Imágenes Cargadas</div>
        <uploadImage />
      </q-tab-panel>
      <q-tab-panel name="social">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { domain } from '../../api/data'
import uploadImage from './uploadImage'

export default {
  // name: 'ComponentName',
  components: {
    uploadImage
  },
  computed: {
    userPhotos () {
      return this.$store.getters['models/userphotos']
    }
  },
  data () {
    return {
      url: domain,
      tabsPhoto: 'subir'
    }
  }
}
</script>
