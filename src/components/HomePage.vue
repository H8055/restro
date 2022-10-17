<template>
    <Header/>
    <h1>welocome to Home</h1>
</template>
<script>
import Header from './Header.vue';
    export default{
    name: "HomePage",
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    },
    components: { Header }
}
</script>