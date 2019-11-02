<template>
  <div class="row" style="padding: 0px">
     <q-chip v-if="userPhotos.length == 0" color="red" text-color="white" icon="warning" label="No has Gregado imagenes aun" />
    <div class="col-xs-12 col-md-12 col-sm-12 col-lg-12">
      <q-expansion-item v-model="expanded" icon="cloud_upload" label="Subir imagenes">
        <q-card>
          <q-card-section>
            <q-uploader :factory="uploadFile" @uploaded="finish" url="a" label="Imagenes" accept="image/*" style="width:100%">
              <template v-slot:list="scope">
                <q-list separator>
                  <q-item v-for="file in scope.files" :key="file.name">
                    <q-item-section v-if="file.__img" thumbnail class="gt-xs">
                      <img :src="file.__img.src">
                    </q-item-section>
                    <q-item-section top side>
                      <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="scope.removeFile(file)"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>
            </q-uploader>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
import { domain } from '../../api/data'

export default {
  // name: 'ComponentName',
  computed: {
    userPhotos () {
      return this.$store.getters['models/userphotos']
    }
  },
  data () {
    return {
      expanded: true,
      url: domain,
      onUploadProgress: 0,
      formData: {}
    }
  },
  methods: {
    uploadFile (file) {
      this.formData = new FormData()
      this.formData.append('file', file[0])
      this.$store.dispatch('models/uploadImage', this.formData)
        .then((resp) => {
          if (resp.data !== 401) {
          }
        })
        .catch(err => console.log(err))
    },
    finish () {
      alert('finish')
    }
  },
  beforeMount () {
  }
}
</script>
<style lang="stylus">
.img-upload-preview
  width:100px;
  height:100px;
  border-radius: 10px;
</style>
