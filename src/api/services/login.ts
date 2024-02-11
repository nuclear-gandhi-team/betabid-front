import axiosInstance from "@/api/axios-wrapper";
import { LoginCredentials } from "@/api/types/loginCredentials";

export class Login {
  static postLoginCredentials = async (data: LoginCredentials) => {
    const response = await axiosInstance.post("/users/login", data);
    return response.data;
  };
}
