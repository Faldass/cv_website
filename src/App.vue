<template>
  <headerNav/>
  <diplomasValid/>
  <footerContact/>
  <!-- HomeView -->
  <!-- <router-view/> -->
  <!-- footer -->
</template>

<script>
  import headerNav from '@/components/Header.vue'
  import footerContact from '@/components/Footer.vue'
  import diplomasValid from '@/components/Diplomas.vue'
  export default {
    components:{
      headerNav,
      footerContact,
      diplomasValid
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
