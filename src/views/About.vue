<template>
  <main class="">
    <Header />
    <div class="page-container" style="margin: 40px 0 60px 0">
      <div class="row">
        <div class="col">
          <h2>Om E-Depot-statistik</h2>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
export default defineComponent({
  name: "Home",
  components: {
    Footer,
    Header
  }
})
</script>
