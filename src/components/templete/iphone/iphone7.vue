<template>
<div>
  <div class="design-template" style="position: absolute; z-index:2; top: 0; left:0">
    <div id="div1" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable biggest-grid" data-tpid="0" style="top:26px; left:21px; border-radius: 30px 0px 0px 0px; width: 167px; height: 187px;background:"></div>
    <div id="div2" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable normal-grid" data-tpid="1" style="top:26px; left:189px; width:67px;height:78px;border-radius: 0px 30px 0px 0px;background:"></div>
    <div id="div3" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable normal-grid" data-tpid="2" style="top:105px; left:189px; background:;width:67px;height:107px;border-radius: 0px 0px 0px 0px;"></div>
    <div id="div4" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable big-grid" data-tpid="3" style="top:210px; left:21px; background:;width:118px; height:142px;border-radius: 0px 0px 0px 0px;"></div>
    <div id="div5" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable big-grid" data-tpid="4" style="top:210px; left:140px; background:;width:118px;height:142px;border-radius: 0px 0px 0px 0px;"></div>
    <div id="div6" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable normal-grid" data-tpid="5" style="top:350px; left:21px;background:;width:70px;height:105px;border-radius: 0px 0px 0px 0px;"></div>
    <div id="div7" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable normal-grid" data-tpid="6" style="top:455px; left:21px;background:;width:70px;height:73px;border-radius: 0px 0px 0px 30px;"></div>
    <div id="div8" v-on:drop="drop($event)" v-on:dragover="allowDrop($event)" class="placeholder grabbable biggest-grid" data-tpid="7" style="top:350px; left:92px;background:; width:166px; height:177px;border-radius: 0px 0px 30px 0px;"></div>
  </div>
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

  div.design-template .biggest-grid
    width: 164px;
    height: 184px;

  div.design-template .normal-grid
    width: 93px;
    height: 107px;
  div.design-template .big-grid
    width: 142px;
    height: 142px;
</style>
