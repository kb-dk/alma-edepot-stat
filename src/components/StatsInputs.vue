<template>
  <div class="search-tools">
    <form v-on:submit.prevent="onSubmit" novalidate>
      <div class="form-row">
        <div class="col col-sm-1 year-margin-hack">
          <div class="form-input">
            <select
              v-model="queryDataInputs.year"
              title="Vælg"
              class="selectpicker"
              style=""
              name="year"
            >
              <option v-for="year in validYears" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
        <div class="col col-sm-1 month-margin-fix">
          <div class="form-input">
            <select
              v-model="queryDataInputs.month"
              title="Vælg"
              class="selectpicker"
              style=""
              name="month"
            >
              <option value="0">Hele Året</option>
              <option value="1">Januar</option>
              <option value="2">Februar</option>
              <option value="3">Marts</option>
              <option value="4">April</option>
              <option value="5">Maj</option>
              <option value="6">Juni</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <div class="col col-sm-1">
          <div class="form-check form-check-margin-fix">
            <input
              type="checkbox"
              id="stats_detail"
              name="details"
              v-model="queryDataInputs.details"
            />
            <label for="stats_detail" role="checkbox">
              <span>Detaljer</span>
            </label>
          </div>
        </div>
        <div class="col col-sm-1">
          <button
            class="btn btn-primary btn-slim submit-btn-padding-fix"
            type="submit"
          >
            Hent data
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue"
import { QueryData } from "@/types/QueryData"

export default defineComponent({
  name: "StatsInputs",
  setup() {
    onBeforeMount(calculateYearRange)
    const validYears = ref([] as Array<number>)
    const startYear = 2021
    function calculateYearRange() {
      const yearRange = new Date().getFullYear() - startYear + 1
      for (let i = 0; i < yearRange; i++) {
        validYears.value.push(startYear + i)
      }
    }
    return {
      validYears
    }
  },
  data: () => {
    return {
      queryDataInputs: {
        year: new Date().getFullYear().toString(),
        month: "0",
        details: false
      } as QueryData
    }
  },
  methods: {
    onSubmit: function () {
      this.$emit("new-stat-query", this.queryDataInputs)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- The below styles are not added as bootstrap classes eventhough 
they could. Due to their hackish nature (as the are solely there to 
compensate for PL short comings) I thought it best to seperate them into
isolated CSS classes. -->
<style scoped>
.search-tools {
  margin: 3rem 0 1rem 0;
}

.year-margin-hack {
  margin-right: -35px;
}

.month-margin-fix {
  margin-right: 10px;
}

.form-check-margin-fix {
  margin-top: 3px;
}

.submit-btn-padding-fix {
  padding: 4px 12px;
}
</style>
