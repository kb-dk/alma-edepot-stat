<template>
  <SystemError v-if="systemError" />
  <stats-inputs v-on:new-stat-query="handleNewStatQuery"></stats-inputs>
  <h3>
    Statistik for {{ currentYear === "" ? defaultYear : currentYear }} -
    {{ getMonthLabel() }}
  </h3>
  <div class="table-responsive">
    <div v-if="statsResult">
      <table class="table table-hover">
        <thead>
          <tr>
            <th
              scope="col"
              v-for="(head, index) in statsResult.headLine"
              :key="index"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dataRow, index) in statsResult.tableData" :key="index">
            <td v-for="(dataRowItem, indexY) in dataRow" :key="indexY">
              {{ dataRowItem }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { EDepotStatistics } from "@/types/EDepotStatistics"
import { MonthLabels } from "@/types/MonthLabels"
import { defineComponent } from "vue"
import { statsService } from "@/api/stats-service"
import { QueryData } from "@/types/QueryData"
import StatsInputs from "@/components/StatsInputs.vue"
import SystemError from "@/components/SystemError.vue"

export default defineComponent({
  name: "Statistics",
  data: () => {
    return {
      statsResult: {} as EDepotStatistics | undefined,
      defaultYear: new Date().getFullYear().toString(),
      defaultMonth: "",
      defaultDetails: false,
      systemError: false,
      currentYear: "",
      currentMonth: ""
    }
  },
  components: {
    StatsInputs,
    SystemError
  },
  methods: {
    async getStatistics(
      year: string,
      month: string | null,
      details: boolean
    ): Promise<void> {
      if (month === "0") {
        month = null
      }
      this.systemError = false
      const [error, responseData] = await statsService.getStats(
        year,
        month,
        details
      )
      if (error) {
        this.systemError = true
      } else {
        this.statsResult = responseData
      }
    },

    handleNewStatQuery(val: QueryData) {
      this.currentYear = val.year
      this.currentMonth = val.month
      this.getStatistics(val.year, val.month, val.details)
    },

    getMonthLabel() {
      const months = {
        1: "Januar",
        2: "Februar",
        3: "Marts",
        4: "April",
        5: "Maj",
        6: "Juni",
        7: "Juli",
        8: "August",
        9: "September",
        10: "Oktober",
        11: "November",
        12: "December"
      } as MonthLabels

      if (
        (this.currentMonth === "" && this.defaultMonth === "") ||
        this.currentMonth === "0" ||
        this.defaultMonth === "0"
      ) {
        return "Hele året"
      } else if (this.currentMonth !== "") {
        return months[this.currentMonth]
      } else if (this.defaultMonth !== "") {
        return months[this.defaultMonth]
      }
    }
  },

  mounted() {
    this.getStatistics(this.defaultYear, this.defaultMonth, this.defaultDetails)
  }
})
</script>
