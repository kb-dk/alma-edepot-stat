<template>
  <footer class="global-footer">
    <nav class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-3" aria-labelledby="header-1605708628">
          <h3 id="header-1605708628">Genveje</h3>
          <ul>
            <li><router-link to="/about">Om denne side</router-link></li>
          </ul>
        </div>
        <div
          class="col-sm-6 col-lg-3"
          aria-labelledby="header-1898266350"
        ></div>
        <div
          class="col-sm-6 col-lg-3"
          aria-labelledby="header-1656349951"
        ></div>
        <div class="col-sm-6 col-lg-3" aria-labelledby="header-979782604">
          <div class="logo logo-inverted">
            <span class="sr-only">Kontaktinformationer</span>
          </div>
          <div aria-label="Hosted by">
            <p>Det Kgl. Bibliotek</p>
          </div>
          <div aria-label="E-post adresse">
            <p><a href="mailto:kb@kb.dk">kb@kb.dk</a></p>
          </div>
          <div class="some-icons">
            <a
              href="#"
              class="some-link"
              aria-label="Følg os på Facebook"
              title="Følg os på Facebook"
              target="_blank"
            >
              <i class="rdl-icons" aria-hidden="true">rdl_facebook</i>
              <span class="sr-only"></span>
            </a>
            <a
              href="#"
              class="some-link"
              aria-label="Følg os på Twitter"
              title="Følg os på Twitter"
              target="_blank"
            >
              <i class="rdl-icons" aria-hidden="true">rdl_twitter</i>
              <span class="sr-only"></span>
            </a>
            <a
              href="#"
              class="some-link"
              aria-label="Følg os på LinkedIn"
              title="Følg os på LinkedIn"
              target="_blank"
            >
              <i class="rdl-icons" aria-hidden="true">rdl_linkedin</i>
              <span class="sr-only"></span>
            </a>
            <a
              href="#"
              class="some-link"
              aria-label="Følg os på Instagram"
              title="Følg os på Instagram"
              target="_blank"
            >
              <i class="rdl-icons" aria-hidden="true">rdl_instagram</i>
              <span class="sr-only"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Footer"
})
</script>
