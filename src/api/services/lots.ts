import axiosInstance from "@/api/axios-wrapper";

export class Lots {
  static getAllLots = async ({ ...rest }) => {
    const response = await axiosInstance.get("/lots/get-all", {
      params: { ...rest },
    });
    return response.data;
  };

  static getTags = async ({ ...rest }) => {
    const response = await axiosInstance.get("/lots/tags", {
      params: { ...rest },
    });
    return response.data;
  };

  static getStatuses = async ({ ...rest }) => {
    const response = await axiosInstance.get("/lots/statuses", {
      params: { ...rest },
    });
    return response.data;
  };
}
