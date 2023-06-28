<template>
  <NavBarComp/>
  <BannerComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBar-Comp.vue';
import BannerComp from './components/Banner-Comp.vue';
import FooterComp from './components/Footer-Comp.vue';
export default {
  components: {NavBarComp, FooterComp, BannerComp}
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
*{
  padding: 0;
  margin: 0;
}








</style>
