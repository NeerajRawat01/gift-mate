import axios from "axios";
import { localStorageService } from "../localStorageServices";

const apiUrl = import.meta.env.VITE_API_URL;
const authToken = localStorageService.getAuthToken();
class ContributionService {
  static getInstance(): ContributionService {
    return new ContributionService();
  }

  public async createContribution(data: { amount: number; event_id: number }) {
    const response = await axios.post(
      `${apiUrl}/contribution/${data.event_id}/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  }

  public async fetchContributions(
    type: "my_contributions" | "received_contributions"
  ) {
    if (type === "my_contributions") {
      const response = await axios.get(`${apiUrl}/contribution/my`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } else {
      const response = await axios.get(`${apiUrl}/contribution/list`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    }
  }
}

export const contributionService = ContributionService.getInstance();
