<template>
  <div class="home">
    <div class="isi">
      <h1>Table Lagu dan Band</h1>
      <table>
        <tr>
          <th>Judul</th>
          <th>Nama Band</th>
        </tr>
        <tr v-for="post in posts">
          <td>{{post.title}}</td>
          <td>{{post.band}}</td>
        </tr>
      </table>
    </div>
    <div class="add">
      <router-link to="/add">
      <b-button variant="primary" size="lg">Add a Post</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import PostService from '../services/PostService.js'
export default {
  name: 'home',
  data(){
    return{
      posts:[]
    }
  },
  mounted(){
    this.getPosts()
  },
  methods:{
    async getPosts(){
      const response = await PostService.fetchPost()
      this.posts = response.data.posts
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.isi h1{
  padding: 50px;
  text-align: center;
}
table{
  width: 50%;
  transform: translate(50%);
  border-collapse: collapse;

}
table td{
  border: 3px solid white;
  text-transform: capitalize;
  padding: 10px;
}
table th{
  background-color:steelblue;
  border: 3px solid white;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  font-size: 30px;
}
table tr:nth-child(odd){
  background-color:dodgerblue;
  color:white;
}
.add{
  margin-top: 50px;
  text-align: center;
}
</style>
