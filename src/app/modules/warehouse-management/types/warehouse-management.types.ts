import { z } from "zod";
import { wareHouseValidation } from "../validation/warehouse-management.validation";
import { Shelf, Warehouse, Storage } from "@prisma/client";

export type T_NewWarehouse = Omit<Warehouse, "createdAt" | "updatedAt" | "id">;

export type T_NewWareHouseBody = z.infer<
  typeof wareHouseValidation.newWarehouseSchema
>["body"];

export type T_UpdateWareHouseBody = z.infer<
  typeof wareHouseValidation.newWarehouseSchema
>["body"];

export type T_WareHouseBody = z.infer<
  typeof wareHouseValidation.newWarehouseSchema
>;

export type T_updateStorage = z.infer<
  typeof wareHouseValidation.updateStorageSchema
>["body"];

export type T_UpdateWarehouse = Partial<
  Omit<Warehouse, "createdAt" | "updatedAt" | "id">
>;

export type T_NewSelf = Omit<Shelf, "id">;
export type T_NewStorage = Omit<Storage, "id">;
