import { HttpStatusCode } from "axios";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { internationalShippingService } from "../service/international-shipping-management.service";

// ** get all international shipping management
const getAllInternationalShipping = asyncHandler(async (req, res) => {
  const results =
    await internationalShippingService.getAllInternationalShipping(req.query);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Getting international shipping management success",
    data: results,
  });
});

// ** get single international shipping management
const getSingleInternationalShipping = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result =
    await internationalShippingService.getSingleInternationalShipping(id);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Getting single international shipping management success",
    data: result,
  });
});

// ** create new international shipping management
const createNewInternationalShipping = asyncHandler(async (req, res) => {
  const result =
    await internationalShippingService.createNewInternationalShipping(req.body);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Creating new international shipping management success",
    data: result,
  });
});

// ** update international shipping management
const updateInternationalShipping = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await internationalShippingService.updateInternationalShipping(
    id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Update international shipping management success",
    data: result,
  });
});

// ** delete international shipping management
const deleteInternationalShipping = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result =
    await internationalShippingService.deleteInternationalShipping(id);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Delete international shipping management success",
    data: null,
  });
});

export const internationalShippingController = {
  getAllInternationalShipping,
  getSingleInternationalShipping,
  createNewInternationalShipping,
  updateInternationalShipping,
  deleteInternationalShipping,
};
