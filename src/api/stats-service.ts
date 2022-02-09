import axios from "axios"
import { StatsServiceClient } from "./StatsAPI"

const axiosStatsInstance = axios.create({
  baseURL: "/edepot-api/stats"
})

export const statsService = new StatsServiceClient(axiosStatsInstance)
