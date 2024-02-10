import axiosInstance from "@/api/axios-wrapper";

export class Lots {
  static getAllLots = async ({ ...rest }) => {
    const response = await axiosInstance.get("/lots/get-all", {
      params: { ...rest },
    });
    return response.data;
  };
}
