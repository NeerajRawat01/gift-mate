import axios from "axios";
import { AuthLoginActionPayloadType } from "../../store/actions/auth.action";
import { localStorageService } from "../localStorageServices";

const apiUrl = import.meta.env.VITE_API_URL;
const authToken = localStorageService.getAuthToken();
class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }

  public async loginUser(userData: AuthLoginActionPayloadType) {
    const response = await axios.post(`${apiUrl}/user/login`, userData);
    return response.data;
  }

  public async fetchMe() {
    const response = await axios.get(`${apiUrl}/user/me`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  }
}

export const authService = AuthService.getInstance();
