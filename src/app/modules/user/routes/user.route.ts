import { Router } from "express";
import sanitizeInputData from "../../../middleware/sanitizeClientDataViaZod";
import { userControllers } from "../controller/user.controller";
import { userReqDataValidation } from "../validation/user.validation";

const router = Router();

// ** Retrieve all the user from db
router.route("/").get(
  //authGuard("SUPER_ADMIN", "MEMBER"),
  userControllers.getAllUsers,
);

// ** Create a user
router
  .route("/create")
  .post(
    sanitizeInputData(userReqDataValidation.create),
    userControllers.createUser,
  );

// ** Update user info
router
  .route("/update-role")
  .patch(
    sanitizeInputData(userReqDataValidation.roleUpdate),
    userControllers.changeRole,
  );

// ** delete user
router.route("/:userId/delete").delete(userControllers.deleteUser);

/////////////////////////////////////////////////
/*  Dynamic routes */
/////////////////////////////////////////////////
// ** Retrieve user by its email
router.route("/email/:email").get(
  //authGuard("SUPER_ADMIN", "ADMIN"),
  userControllers.getSingleUserByMail,
);

// ** Retrieve single users by its id
router.route("/:id").get(
  //authGuard("SUPER_ADMIN", "ADMIN"),
  userControllers.getSingleUser,
);

export const UserRoutes = router;
