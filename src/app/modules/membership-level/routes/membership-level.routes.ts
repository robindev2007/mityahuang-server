import { Router } from "express";
import { memberShipLevelController } from "../controller/membership-level.controller";
import sanitizeInputData from "../../../middleware/sanitizeClientDataViaZod";
import { membershipLevelValidation } from "../validation/membership-level.validation";

const router = Router();

// ** get all Membership Levels
router.route("/").get(memberShipLevelController.getAllMembershipLevels);

// ** get membership level by id
router.route("/:id").get(memberShipLevelController.getSingleMembershipLevel);

// ** create membership level
router
  .route("/")
  .post(
    sanitizeInputData(membershipLevelValidation.createNewInternshipLevelSchema),
    memberShipLevelController.createNewMembershipLevel,
  );

// ** update membership level
router
  .route("/:id")
  .patch(
    sanitizeInputData(membershipLevelValidation.updateInternshipLevelSchema),
    memberShipLevelController.updateMembershipLevel,
  );

// ** delete membership level
router.route("/:id").delete(memberShipLevelController.deleteMembershipLevel);

export const MembershipLevelRoutes = router;
