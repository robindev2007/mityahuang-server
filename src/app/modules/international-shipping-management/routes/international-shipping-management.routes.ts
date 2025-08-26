import { Router } from "express";
import { internationalShippingController } from "../controller/international-shipping-management.controller";
import sanitizeInputData from "../../../middleware/sanitizeClientDataViaZod";
import { internationalShipping } from "../validation/international-shipping-management.validation";

const router = Router();

// ** get all international shippings
router
  .route("/")
  .get(internationalShippingController.getAllInternationalShipping);

// ** get single international shipping
router
  .route("/:id")
  .get(internationalShippingController.getSingleInternationalShipping);

// ** create international shipping
router
  .route("/create")
  .post(
    sanitizeInputData(internationalShipping.createNewInternationalShipping),
    internationalShippingController.createNewInternationalShipping,
  );

// ** update international shipping
router
  .route("/:id/update")
  .patch(
    sanitizeInputData(internationalShipping.updateInternationalShipping),
    internationalShippingController.updateInternationalShipping,
  );

// ** delete international shipping
router
  .route("/:id")
  .delete(internationalShippingController.deleteInternationalShipping);

export const InternationalShippingRoutes = router;
