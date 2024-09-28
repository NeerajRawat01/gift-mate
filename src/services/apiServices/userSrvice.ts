import axios from "axios";
import { createUser } from "../../store/actions/user.action";

const apiUrl = import.meta.env.VITE_API_URL;
class UserService {
  static getInstance(): UserService {
    return new UserService();
  }

  public async createUser(userData: createUser) {
    const response = await axios.post(`${apiUrl}/user/create`, userData);
    return response;
  }
}

export const userService = UserService.getInstance();
