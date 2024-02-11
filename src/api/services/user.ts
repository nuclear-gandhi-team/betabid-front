import axiosInstance from "@/api/axios-wrapper";
import { Bet } from "@/api/types/bet";
import { LoginCredentials } from "@/api/types/login-credentials";
import { RegistrationCredentials } from "@/api/types/registration-credentials";

export class User {
  static postRegistrationCredentials = async (
    data: RegistrationCredentials,
  ) => {
    const response = await axiosInstance.post("/users/register", data);
    return response.data;
  };

  static postLoginCredentials = async (data: LoginCredentials) => {
    const response = await axiosInstance.post("/users/login", data);
    return response.data;
  };

  static postBet = async (data: Bet) => {
    const response = await axiosInstance.post("/users/bet", data);
    return response.data;
  };
}
