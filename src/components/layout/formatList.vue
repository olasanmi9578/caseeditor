<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
      <q-item v-ripple @click.native="filterFormat(1)" style="cursor:pointer">
        <q-item-section avatar>
          <img alt="iphone logo" style="width:80px" :src="url + '/images/format/layout_icon_rand.png'">
        </q-item-section>
        </q-item>
    </div>
    <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
      <q-item v-ripple @click.native="filterFormat(2)" style="cursor:pointer">
        <q-item-section avatar>
          <img alt="iphone logo" style="width:80px" :src="url + '/images/format/layout_icon_single.png'">
        </q-item-section>
        </q-item>
    </div>
  </div>
</template>

<script>
import { domain } from '../../api/data'

export default {
  // name: 'ComponentName',
  data () {
    return {
      url: domain
    }
  },
  methods: {
    filterFormat (id) {
      this.$store.dispatch('models/updateFormatEdit', id)
    }
  }
}
</script>
