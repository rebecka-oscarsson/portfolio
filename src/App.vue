<template>
  <div class="index">
    <div class="container">
      <PageHeader @menu-clicked="changeMenu" />
      <NavPlant :menuOpen="menuOpen" @menu-clicked="changeMenu"/>
      <!-- <router-link to="/portfolio">Portfolio</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link> |
            <router-link to="/skills">Skills</router-link> -->

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavPlant from '@/components/NavPlant.vue';
import PageHeader from '@/components/PageHeader.vue';
import router from '@/router';
const menuOpen = ref(true);
function changeMenu() { menuOpen.value = !menuOpen.value }
router.beforeEach(() => {if(menuOpen.value) {menuOpen.value=false}
})
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>