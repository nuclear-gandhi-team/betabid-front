import axiosInstance from "@/api/axios-wrapper";
import { RegistrationCredentials } from "@/api/types/registrationCredentials";

export class Registration {
  static postRegistrationCredentials = async (
    data: RegistrationCredentials,
  ) => {
    const response = await axiosInstance.post("/users/register", data);
    return response.data;
  };
}
