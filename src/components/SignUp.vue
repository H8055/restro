<template>
    <img src="../assets/logo.png" alt="">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text"  placeholder="Enter Name" v-model="name" >
        <input type="text" name="" placeholder="Enter Email" v-model="email" >
        <input type="password" name="" placeholder="enter Password" v-model="password">
        <button class="btn" @click="signup" >Sign Up</button>
        <p><router-link to="/LoginPage">Login</router-link></p>
        
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name:'SignUp',
        data(){
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
           async signup(){
                let result = await axios.post('http://localhost:3000/posts',{email:this.email,name:this.name,password:this.password});
                if(result.status==201){
                    // alert("signup done")
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name:'HomePage'})
                }

            },
            
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomePage'})
            }
        }
    }
</script>
<style>
    .register input {
    width: 300px;
    height: 40px;
    padding-left: 30px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.btn{
    width: 320px;
    height: 40px;
    padding-left: 30px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-color: rgb(72, 212, 72);
    color: white;
    cursor: pointer;
}
</style>