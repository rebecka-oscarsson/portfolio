<template>
  <header>
    <h1><span class="rotate">Resumé</span>Rebecka Oscarsson</h1>
    <a href="javascript:void(0)" class="menu-icon" @click="$emit('menuClicked')"><i
        class="fas fa-seedling"></i>menu</a>
  </header>
</template>

<script setup>
import { defineEmits } from 'vue';
defineEmits(['menuClicked'])
</script>