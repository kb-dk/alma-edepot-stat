<template>
  <div id="sys-msg-1" class="container-fluid collapse show" role="status">
    <div class="rdl-system-message rdl-system-message-error">
      <div class="container">
        <div class="row">
          <div class="col">
            <i class="material-icons" aria-hidden="true">report_problem</i>
            <p>Der skete fejl - prøv venligst igen senere</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "SystemError"
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Had to add the rdl-system-message styles here as they are no 
where to be found in this version of the design system... -->
<style scoped>
.rdl-system-message {
  margin: 5px 0 0 0;
}

.rdl-system-message-accept {
  background-color: #26d466;
}
.rdl-system-message-warning {
  background-color: #f4b664;
}
.rdl-system-message-info {
  background-color: white;
  color: #002e70;
}
.rdl-system-message-error {
  background-color: #b30018;
  color: white;
}
.rdl-system-message .col {
  display: flex;
  padding: 10px 12px;
}
.rdl-system-message p {
  font-family: noway, sans-serif;
  margin-bottom: 0;
  display: inline;
  margin-left: 18px;
}
.rdl-system-message i {
  font-size: 2.375rem;
}
</style>
