import { AxiosInstance } from "axios"
import { EDepotStatistics } from "@/types/EDepotStatistics"

//Would like to find a more DRY way to implement all the
//nearly identical API response types
export type APIResponseStats = [null, EDepotStatistics] | [unknown]

export class StatsServiceClient {
  constructor(private httpClient: AxiosInstance) {}
  async getStats(
    year: string,
    month: string | null,
    details: boolean
  ): Promise<APIResponseStats> {
    const query = month
      ? `year=${year}&month=${month}&details=${details}`
      : `year=${year}&details=${details}`
    try {
      const response = await this.httpClient.get(`/?${query}`)
      return [null, response.data as EDepotStatistics]
    } catch (err) {
      return [err]
    }
  }
}
