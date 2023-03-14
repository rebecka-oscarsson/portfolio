<script setup>console.log(process.env.NODE_ENV);</script>
<template>
  <nav>
    <img src="@/assets/plant.svg">
    <!-- <object data="@/assets/plant.svg" type="image/svg+xml"> -->
        <!-- <div class = "ie-nav-fallback">
        <a href="about.html" target="iframe">about me</a>
        <a href="skills.html" target="iframe">skills</a>
        <a href="portfolio.html" target="iframe">portfolio</a>
        <a href="contact.html" target="iframe">contact</a>
        </div> -->
      <!-- </object> -->
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/skills">Skills</router-link>
    </nav>
  <router-view />
</template>

<!-- <body class="index">

  <div class="container">

    <nav>
      <object data="plant.svg" type="image/svg+xml">
        <div class = "ie-nav-fallback">
        <a href="about.html" target="iframe">about me</a>
        <a href="skills.html" target="iframe">skills</a>
        <a href="portfolio.html" target="iframe">portfolio</a>
        <a href="contact.html" target="iframe">contact</a>
        </div>
      </object>
    </nav>
    <header>
      <a href=""><h1><span class="rotate">Resumé</span>Rebecka Oscarsson</h1></a>
    </header>
    <main>
      <a href="javascript:void(0)" class="main__link-back hidden" aria-label="Go back"><i class="fas fa-seedling"></i>menu</a>
      <iframe name="iframe" title="main content"></iframe>
    </main>

  </div>

</body> -->