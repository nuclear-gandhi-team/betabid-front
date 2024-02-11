import axiosInstance from "@/api/axios-wrapper";

export class Lots {
  static createLot = async (data: FormData) => {
    const response = await axiosInstance.post("/lots/create", data);
    return response.data;
  };

  static getLot = async (id: string) => {
    const response = await axiosInstance.get(`/lots/get/${id}`);
    return response.data;
  };

  static getAllLots = async ({ ...rest }) => {
    const response = await axiosInstance.get("/lots/get-all", {
      params: { ...rest },
    });
    return response.data;
  };

  static getTags = async () => {
    const response = await axiosInstance.get("/lots/tags");
    return response.data;
  };

  static getStatuses = async () => {
    const response = await axiosInstance.get("/lots/statuses");
    return response.data;
  };

  static deleteLot = async (id: string) => {
    const response = await axiosInstance.delete(`/lots/delete/${id}`);
    return response.data;
  };
}
