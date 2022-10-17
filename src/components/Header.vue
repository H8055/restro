<template>
    <div class="header">
      <a href="">Home</a>
      <a href="">Add Restaurant</a>
      <a @click="logout" href="">Logout</a>

    </div>
</template>
<script>
    export default{
        name:'HeaderComp',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'loginPage'})
            }
        }
    }
</script>

<style>
    .header{
        background-color: #333;
        overflow: hidden;
    }
    .header a{
        float: left;
        color: #f2f2f2;
        padding: 14px 16px;
        text-decoration: none;
        text-align: center;
        font-size: 17px;
        margin-right: 5px;
    }
    .header a:hover{
        background: #ddd;
        color: #333;
    }
</style>