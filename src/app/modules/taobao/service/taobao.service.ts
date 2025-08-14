import { TAOBAO_API } from "../../../../config/taobaoConfig";
import apiClient from "../../../../lib/api-client";

const getSingleItemFromTaobao = async (params: any) => {
  const response = await apiClient.get(`/taobao/${TAOBAO_API.ITEM.ITEM_GET}`, {
    params: {
      ...params,
    },
  });
  return response.data;
};

export const taobaoServices = {
  getSingleItemFromTaobao,
};
