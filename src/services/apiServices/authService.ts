import axios from "axios";
import { AuthLoginActionPayloadType } from "../../store/actions/auth.action";

const apiUrl = import.meta.env.VITE_API_URL;
class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }

  public async loginUser(userData: AuthLoginActionPayloadType) {
    const response = await axios.post(`${apiUrl}/user/login`, userData);
    return response.data;
  }
}

export const authService = AuthService.getInstance();
