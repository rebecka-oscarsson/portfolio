<template> 

<div class="subpage__body">
  <section>
  <h2>Contact me</h2>
  <ul>
    <li>E-mail: <a :href="'mailto:'+ {rebecka}">{{ rebecka}}</a></li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/rebecka-oscarsson" target ="new">Rebecka Oscarsson</a></li>
    <li>Github: <a href="https://github.com/rebecka-oscarsson" target ="new">rebecka-oscarsson</a></li>
  </ul>
</section>
</div>
</template>

<script setup>
import { ref } from "vue";
let rebecka = ref("\u0072\u0065\u0062\u0065\u0063\u006b\u0061\u002e\u006f\u0073\u0063\u0061\u0072\u0073\u0073\u006f\u006e\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d")
</script>