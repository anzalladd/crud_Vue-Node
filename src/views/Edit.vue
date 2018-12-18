<template>
   <div class="form">
       <h1>Edit Post</h1>
       <b-form-input type="text" placeholder="Enter title of Song" class="input" v-model="title"></b-form-input>
       <b-form-input type="text" placeholder="Enter the band" class="input" v-model="band"></b-form-input>
       <span>
       <b-button variant="primary" size="lg" class="btn" @click="updatePost">Submit</b-button>
       <router-link to="/">
       <b-button variant="success" size="lg" class="btn">Back</b-button>
       </router-link>
       </span>
   </div>
</template>

<script>
import PostService from '../services/PostService.js'
export default {
    name: 'edit',
     data () {
    return {
      title: '',
      band: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.band = response.data.band
    },
    async updatePost () {
      await PostService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        band: this.band
      })
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>

.form{
    text-align: center;
    padding: 20px;
}
.form .input{
    margin-top: 20px;
    width: 50%;
    transform: translate(50%);
}
.form .btn{
    margin:40px;
    padding: 10px 40px 10px 40px !important;
}

</style>

