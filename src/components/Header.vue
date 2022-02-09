<template>
  <header id="mainHeader" class="global-header" role="banner">
    <div class="header-bg-wrapper theme-bg">
      <div class="container" style="margin: 0 0 0 20px">
        <div class="row justify-content-between">
          <div class="col logo-col">
            <router-link to="/" class="logo">
              <span class="sr-only"></span>
            </router-link>
            <router-link to="/" class="subsite-logo"
              ><h1>Statistik for ALMA e-depot</h1>
              <span class="sr-only"></span
            ></router-link>
          </div>
          <div class="row rdl-system-messages-wrapper">
            <div class="header-edge d-inline-block d-lg-none"></div>
          </div>
          <div class="dropdown-edge d-lg-none"></div>
        </div>
      </div>
    </div>
    <div class="header-edge d-none d-lg-inline-block"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Header"
})
</script>
