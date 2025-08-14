import { Router } from "express";
import { taobaoController } from "../controller/taobao.controller";

const router = Router();

router.route("/item_get").get(taobaoController.item_get);
export const taobaoRoutes = router;
