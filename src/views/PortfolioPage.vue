<template>
  <div class="subpage__body">
    <h2>Portfolio</h2>
    <section class="subpage__section-portfolio">

      <figure><a href="https://glittery-mousse-4ca3b5.netlify.app/" target="_blank">
          <div class="overlay">
            <div class="imageText">A site using Headless CMS (React, Strapi)</div>
          </div>
          <img src="@/assets/strapi.png" alt="Website with an image of Stockholm">
        </a>
        <figcaption>A site using Headless CMS (React, Strapi)</figcaption>
      </figure>

      <figure v-if="!isMobile"><a href="https://rebecka-oscarsson.github.io/deep/" target="_blank">
          <div class="overlay">
            <div class="imageText">Chat (Node, React, socket.io)</div>
          </div>
          <img src="@/assets/jelly.png" alt="Jellyfish with a speech bubble">
        </a>
        <figcaption>Chat (Node, React, socket.io)</figcaption>
      </figure>

      <figure v-else><a href="https://blackholechat.onrender.com/" target="_blank">
          <div class="overlay">
            <div class="imageText">Chat (Node, socket.io)</div>
          </div>
          <img src="@/assets/chat.png" alt="Two colorful chat bubbles with text in them">
        </a>
        <figcaption>Chat (Node, socket.io)</figcaption>
      </figure>

      <figure><a href="https://63761a7bd03fb9756e1f6634--ornate-cat-06350f.netlify.app/" target="_blank">
          <div class="overlay">
            <div class="imageText">Weirdopedia (React, API)</div>
          </div>
          <img src="@/assets/weirdopedia.jpg" alt="Deformed-looking polarbear">
        </a>
        <figcaption>Weirdopedia (React)</figcaption>
      </figure>

      <figure v-if="!isMobile"><a href="https://rebecka-oscarsson.github.io/kiwi/" target="_blank">
          <div class="overlay">
            <div class="imageText">Kiwi game (Javascript)</div>
          </div>
          <img src="@/assets/kiwi.png" alt="Blue kiwibird standing between two palmtrees">
        </a>
        <figcaption>Kiwi game (Javascript)</figcaption>
      </figure>

      <figure v-else>
        <div class="overlay">
          <div class="imageText">Kiwi game (Javascript)</div>
        </div>
        <img src="@/assets/kiwi.png" alt="Blue kiwibird standing between two palmtrees">
        <figcaption>Sorry, doesn't work on mobile</figcaption>
      </figure>
      
      <figure><a href="https://rebecka-oscarsson.github.io/StarWars/" target="_blank">
          <div class="overlay">
            <div class="imageText">Starwars (Javascript, API)</div>
          </div>
          <img src="@/assets/starwars.jpg" alt="Website containing loads of StarWars trivia">
        </a>
        <figcaption>Starwars (Javascript, API)</figcaption>
      </figure>

      <figure><a href="https://rcode21.github.io/" target="_blank">
          <div class="overlay">
            <div class="imageText">Creatures: art project by Arci Taube (Javascript, SVG)</div>
          </div>
          <img src="@/assets/creatures.png" alt="Platypus drawn with black lines in a drawing program">
        </a>
        <figcaption>Creatures: art project by Arci Taube (Javascript, SVG)</figcaption>
      </figure>

      <figure><a href="https://rebecka-oscarsson.github.io/tv-room/" target="_blank">
          <div class="overlay">
            <div class="imageText">Tv-room: videos by me (Css)</div>
          </div>
          <img src="@/assets/fjurp.jpg" alt="Tv showing a nature program">
        </a>
        <figcaption>Tv-room (Css, videos by me)</figcaption>
      </figure>

    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
const isMobile = computed(() => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
});
</script>
