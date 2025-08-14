import asyncHandler from "../../../../lib/utils/async-handler";
import { taobaoServices } from "../service/taobao.service";
import { sendTaobaoResponse } from "../utils/sendTaobaoResponse";

// get single item by its id
const item_get = asyncHandler(async (req, res) => {
  const taobaoData = await taobaoServices.getSingleItemFromTaobao(req.query);
  sendTaobaoResponse(res, taobaoData);
});
export const taobaoController = {
  item_get,
};
