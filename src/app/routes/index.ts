import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import env from "../../config/clean-env";
import sendResponse from "../../lib/utils/sendResponse";
import { authRoutes } from "../modules/auth/routes/auth.routes";
import { taobaoRoutes } from "../modules/taobao/routes/taobao.routes";
import { UserRoutes } from "../modules/user/routes/user.route";

const routes = Router();

type TRouteModules = { path: string; routes: Router };

const routesModule: TRouteModules[] = [
  {
    path: "/users",
    routes: UserRoutes,
  },
  {
    path: "/auth",
    routes: authRoutes,
  },
  {
    path: "/taobao",
    routes: taobaoRoutes,
  },

  // Extra but
  {
    path: "/route-lists",
    routes: routes.get("/", async (req, res) => {
      sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Route Lists",
        data: routesModule.map(
          (item: TRouteModules) =>
            `${env.isDev ? env.LOCAL_API_URL : env.PROD_API_URL}/api/v1/${item.path}`,
        ),
      });
    }),
  },
];

// TODO: Implement routes here
routesModule.forEach((item: TRouteModules) =>
  routes.use(item.path, item.routes),
);

export default routes;
