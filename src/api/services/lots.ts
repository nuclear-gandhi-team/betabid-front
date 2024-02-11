import axiosInstance from "@/api/axios-wrapper";
import { AllLots } from "@/api/types/all-lot";
interface AllLotsQueryParams {
  onSuccessCallback?: (data: AllLots) => void;
  NameStartsWith?: string;
  PriceOrder?: 0 | 1;
  Tags?: string[];
  Status?: 0 | 1 | 2;
  Page?: number;
  PageCount?: number;
}
export class Lots {
  static createLot = async (data: FormData) => {
    const response = await axiosInstance.post("/lots/create", data);
    return response.data;
  };

  static getLot = async (id: string) => {
    const response = await axiosInstance.get(`/lots/get/${id}`);
    return response.data;
  };

  static getAllLots = async (params: AllLotsQueryParams) => {
    const response = await axiosInstance.get("/lots/get-all", {
      params,
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
