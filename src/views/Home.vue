<template>
  <main class="">
    <Header />
    <div class="page-container page-container-margin-fix">
      <div class="row">
        <div class="col">
          <Statistics />
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Statistics from "@/components/Statistics.vue"
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
export default defineComponent({
  name: "Home",
  components: {
    Statistics,
    Footer,
    Header
  }
})
</script>

<!-- The below styles are not added as bootstrap classes eventhough 
they could. Due to their hackish nature (as the are solely there to 
compensate for PL short comings) I thought it best to seperate them into
isolated CSS classes. -->
<style scoped>
.page-container-margin-fix {
  margin: 20px 0 60px 0;
}
</style>
