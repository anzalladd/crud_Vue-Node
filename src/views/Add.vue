<template>
   <div class="form">
       <h1>Add Post</h1>
       <b-form-input type="text" placeholder="Enter title of Song" class="input" v-model="title"></b-form-input>
       <b-form-input type="text" placeholder="Enter the band" class="input" v-model="band"></b-form-input>
       <span>
       <b-button variant="primary" size="lg" class="btn" @click="addPost">Submit</b-button>
       <router-link to="/">
       <b-button variant="success" size="lg" class="btn">Back</b-button>
       </router-link>
       </span>
   </div>
</template>

<script>
import PostService from '../services/PostService.js'
export default {
    name: 'add',
    data(){
        return{
        title: '',
        band: ''    
        }
    },
    methods:{
        async addPost(){
            await PostService.addPost({
                title: this.title,
                band: this.band
            })
            this.$router.push({name:'home'})
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

