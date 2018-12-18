import Api from './Api'

export default{
    fetchPost(){
        return Api().get('posts')
    },
    addPost(params){
        return Api().post('posts',params)
    }
}