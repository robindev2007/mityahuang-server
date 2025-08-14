import { StatusCodes } from "http-status-codes";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { taobaoServices } from "../service/taobao.service";

// get single item by its id
const item_get = asyncHandler(async (req, res) => {
  try {
    // Forward all query parameters to Taobao API
    const product = await taobaoServices.getSingleItemFromTaobao(req.query);

    // If Taobao API returns an error in its response (like the 4010 error you showed)
    if (product.data && product.data.error) {
      return sendResponse(res, {
        statuscode: StatusCodes.BAD_REQUEST,
        success: false,
        message: product.data.error,
        data: {
          error: product.data.error,
          reason: product.data.reason,
          error_code: product.data.error_code,
        },
      });
    }

    // Successful response
    sendResponse(res, {
      statuscode: StatusCodes.OK,
      success: true,
      message: "Data retrieved from Taobao successful.",
      data: product,
    });
  } catch (error: any) {
    console.log("Taobao API error:", error);

    // Handle axios error with response from Taobao API
    if (error.response) {
      return sendResponse(res, {
        statuscode: error.response.status || StatusCodes.BAD_GATEWAY,
        success: false,
        message:
          error.response.data?.error || "Failed to fetch product from Taobao",
        data: {
          error: error.response.data?.error,
          reason: error.response.data?.reason,
          error_code: error.response.data?.error_code,
          details: error.message,
        },
      });
    }

    // Handle other types of errors
    sendResponse(res, {
      statuscode: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to fetch product",
      data: {
        error: "Internal Server Error",
        details: error.message,
      },
    });
  }
});

export const taobaoController = {
  item_get,
};
