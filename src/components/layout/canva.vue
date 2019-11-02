<template>
  <div class="container" style="max-width:900px; margin:0px auto">
    <div class="row q-pa-lg">
      <div class="col-md-12 col-sm-12 col-xs-12 col-lg-8" id="captureItem">
        <div style="position: absolute;" v-if="model" class="absolute-center">
          <img  v-if="model.base_path" :src="url + '/' + model.overlay_path" style="position: absolute;top:0; left:0; z-index:0"/>
          <img v-if="model.overlay_path" :src="url + '/' + model.base_path" style="position:relative; z-index:1" />
          <!--component aqui-->
          <filters />
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6" v-for="(img, idx) in userPhotos" :key="idx">
          <img :src="url + '/images/userUpload/' + img.path" class="img-upload-preview" :id="'idx' + idx" draggable="true" v-on:dragstart="drag($event)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { domain } from '../../api/data'
import filters from '../templete/filters'

export default {
  components: {
    filters
  },
  computed: {
    model () {
      return this.$store.getters['models/getModel']
    },
    userPhotos () {
      return this.$store.getters['models/userphotos']
    }
  },
  data () {
    return {
      radius: '17px',
      url: domain
    }
  },
  methods: {
    drag (ev) {
      ev.dataTransfer.setData('text', ev.target.id)
      this.$store.dispatch('models/setImgDrawing', ev.target)
    }
  }
}
</script>
