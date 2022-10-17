<template>
    <img src="../assets/logo.png" alt="">
    <h1>Login</h1>
    <div class="register">
        <input type="text" name="" placeholder="Enter Email" v-model="email" >
        <input type="password" name="" placeholder="enter Password" v-model="password">
        <button class="btn" @click="login" >Login</button>
        <p><router-link to="/SignUp">SignUp</router-link></p>
        
    </div>

</template>

<script>
import axios from 'axios';

    export default{
        name:'LoginPage',
        data(){
            return{
                email:'',
                password:'',
            }
        },
        methods:{
           async login(){
                let result = await axios.get(`http://localhost:3000/posts?email=${this.email}&password=${this.password}`);
                if(result.status==200 && result.data.length>0){
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'HomePage'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomePage'})
            }
        }

    }
</script>