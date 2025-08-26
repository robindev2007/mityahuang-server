import { HttpStatusCode } from "axios";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { wareHouseService } from "../service/warehouse-management.service";

// ** get all warehouse
const getAllWarehouse = asyncHandler(async (req, res) => {
  const warehouses = await wareHouseService.getAllWarehouse(req.query);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Warehouse created successfully",
    data: warehouses,
  });
});

// ** get single warehouse
const getSingleWarehouse = asyncHandler(async (req, res) => {
  const { name } = req.params;
  const warehouses = await wareHouseService.getSingleWarehouse(name);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Getting single warehouse successfully",
    data: warehouses,
  });
});

// ** create new warehouse
const createNewWarehouse = asyncHandler(async (req, res) => {
  const wareHouseData = await wareHouseService.createNewWarehouse(req.body);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Warehouse created successfully",
    data: wareHouseData,
  });
});

// ** update new warehouse
const updateStorage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const wareHouseData = await wareHouseService.updateStorage(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Warehouse created successfully",
    data: wareHouseData,
  });
});

export const wareHouseController = {
  createNewWarehouse,
  getAllWarehouse,
  getSingleWarehouse,
  updateStorage,
};
