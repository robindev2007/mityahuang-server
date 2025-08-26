import { Router } from "express";
import { wareHouseController } from "../controller/warehouse-management.controller";
import sanitizeInputData from "../../../middleware/sanitizeClientDataViaZod";
import { wareHouseValidation } from "../validation/warehouse-management.validation";

const router = Router();

// ** get all warehouses
router.route("/").get(wareHouseController.getAllWarehouse);

// ** get single warehouse
router.route("/:name").get(wareHouseController.getSingleWarehouse);

// ** crete new warehouse
router
  .route("/")
  .post(
    sanitizeInputData(wareHouseValidation.newWarehouseSchema),
    wareHouseController.createNewWarehouse,
  );

// ** update storage
router
  .route("/storage/:id")
  .post(
    sanitizeInputData(wareHouseValidation.updateStorageSchema),
    wareHouseController.updateStorage,
  );

export const WarehouseRoutes = router;
