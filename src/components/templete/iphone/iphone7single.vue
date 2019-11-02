<template>
  <div class="design-template" data-tpl="iphone6-single" style="position: absolute; z-index:2; top: 0; left:0">
    <div class="placeholder grabbable" data-tpid="0" id="div1" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" style="border-radius:26px 26px 26px 26px; width:230px;top:25px; left:25px;height:502px; width:"></div>
    <img :src="url + '/images/cases/iphone7/camara.png'" style="top:28px !important; left:27px; z-index:3 ;position:absolute"/>
  </div>
</template>

<script>
import { domain } from '../../../api/data'

export default {
  // name: 'ComponentName',
  computed: {
    imgDrawing () {
      return this.$store.getters['models/getTheDrawingImg']
    }
  },
  data () {
    return {
      url: domain,
      widthImgInCanva: 0,
      heightImgInCanva: 0,
      imgDrawings: this.imgDrawing
    }
  },
  methods: {
    allowDrop (ev) {
      ev.preventDefault()
    },
    drop (ev) {
      console.log(this.imgDrawing.id)
      ev.preventDefault()
      this.widthImgInCanva = ev.target.style.width
      this.heightImgInCanva = ev.target.style.height
      this.radius = ev.target.style.borderRadius
      this.imgDrawing.setAttribute('style', 'width:' + this.widthImgInCanva + '!important; height: ' + this.heightImgInCanva + '!important; border-radius:' + this.radius + '!important')
      var data = ev.dataTransfer.getData('text')
      ev.target.appendChild(document.getElementById(data))
    }
  }
}
</script>
<style lang="stylus">
  .design-template > div.placeholder
    position: absolute;
    background-color:rgba(255, 255, 255, 0.11);
    border: 1px solidrgba(255, 255, 255, 0.11);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition-property: opacity, border, background;
    -moz-transition-duration: 0.5s;
    -webkit-transition-property: opacity, border, background;
    -webkit-transition-duration: 0.5s;
    transition-property: opacity, border, background;
    transition-duration: 0.5s;
    margin-left: -1px;
    margin-top: -1px;
</style>
