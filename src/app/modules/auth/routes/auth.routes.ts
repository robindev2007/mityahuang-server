import { Router } from "express";
import { authControllers } from "../controller/auth.controller";

const authRouter: Router = Router();

// ** Login authentication
authRouter.route("/login").post(authControllers.login);

export const authRoutes = authRouter;
