import axios from "axios";
import { localStorageService } from "../localStorageServices";

const apiUrl = import.meta.env.VITE_API_URL;
const authToken = localStorageService.getAuthToken();
class InvitationService {
  static getInstance(): InvitationService {
    return new InvitationService();
  }

  public async sendInvite(data: {
    email: string;
    message: string;
    eventId: number;
  }) {
    const response = await axios.post(
      `${apiUrl}/invitation/${data.eventId}/send`,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  }

  public async fetchInvitation() {
    const response = await axios.get(`${apiUrl}/invitation/list`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  }
}

export const invitationService = InvitationService.getInstance();
