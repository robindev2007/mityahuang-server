import { Response } from "express";
import sendResponse from "../../../../lib/utils/sendResponse";
import { taobaoErrorMap } from "./taobaoErrorMap";

export const sendTaobaoResponse = (res: Response, taobaoData: any) => {
  // Handle empty/no-data responses (like invalid num_iid)
  if (!taobaoData || taobaoData.error_code === "2000") {
    console.log("🚀 ~ sendTaobaoResponse ~ taobaoData:", taobaoData);
    return sendResponse(res, {
      success: false,
      statusCode: 404, // Changed from 204 to 404 for better semantics
      message: "Product not found",
      error: taobaoData.error,
      errorCode: taobaoData.error_code,
      reason: taobaoData.reason,
      extraInfo: "Check the query parameter",
      data: null,
    });
  }

  // Handle other Taobao errors
  const mapping = taobaoErrorMap[taobaoData.error_code] || {
    statusCode: 500,
    extraInfo: "Unknown Taobao error",
  };

  if (mapping.statusCode !== 200) {
    return sendResponse(res, {
      success: false,
      statusCode: mapping.statusCode,
      message: taobaoData.error || "Taobao API error",
      error: taobaoData.error,
      errorCode: taobaoData.error_code,
      reason: taobaoData.reason,
      extraInfo: mapping.extraInfo,
      data: null,
    });
  }

  // Successful response
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product data retrieved successfully",
    data: taobaoData.item || taobaoData, // Extract .item if exists
  });
};
