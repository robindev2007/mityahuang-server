import { I_PaginationResponse } from "../../../../interface/common.interface";
import { warehouseRepository } from "../repository/warehouse-management.repository";
import {
  T_NewWareHouseBody,
  T_updateStorage,
} from "../types/warehouse-management.types";
import AppError from "../../../../errors/appError";
import { HttpStatusCode } from "axios";

// ** get all warehouse
const getAllWarehouse = async (query?: Record<string, any>) => {
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = Number(page - 1) * limit || 0;

  // get total count of contact us
  const totalCount = await warehouseRepository.getWareHouseCount();

  // calculate total page for pagination
  const totalPages = Math.ceil(totalCount / limit);

  const warehouses = await warehouseRepository.getAllWarehouse(limit, skip);

  // map into clean shape
  const result = warehouses.map((w) => ({
    id: w.id,
    name: w.name,
    status: w.status,
    numberOfShelves: w.shelves.length,
    storagePerShelf: w.shelves[0]?._count?.storages || 0,
  }));

  const paginationSchema: I_PaginationResponse<any[]> = {
    meta: {
      totalCount,
      totalPages,
      page,
      limit,
    },
    result,
  };

  return paginationSchema;
};

// ** get single warehouse
const getSingleWarehouse = async (name: string) => {
  const warehouse = await warehouseRepository.getSingleWarehouse(name);

  if (!warehouse) {
    throw new AppError(HttpStatusCode.NotFound, "No ware house found");
  }
  return warehouse;
};

// ** create new warehouse
const createNewWarehouse = async (payload: T_NewWareHouseBody) => {
  const warehouseExist = await warehouseRepository.getSingleWarehouse(
    payload.name,
  );

  if (warehouseExist) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "Warehouse with this name already exist",
    );
  }

  // 1. Create warehouse
  const warehouse = await warehouseRepository.createNewWarehouse({
    name: payload.name,
    status: payload.status,
  });

  // 2. Create shelves (bulk insert)
  const shelvesData = Array.from({ length: payload.numberOfShelves }).map(
    () => ({
      warehouseId: warehouse.id,
    }),
  );

  await warehouseRepository.createShelves(shelvesData);

  // 3. Fetch shelves with their IDs
  const shelves = await warehouseRepository.getShelvesByWarehouseId(
    warehouse.id,
  );

  // 4. Create storages for each shelf
  for (const shelf of shelves) {
    const storagesData = Array.from({
      length: payload.storagePerShelf,
    }).map(() => ({
      shelfId: shelf.id,
      isFree: true,
    }));

    await warehouseRepository.createStorages(storagesData);
  }

  return { warehouse, shelves };
};

// ** update Storage status
const updateStorage = async (id: string, payload: T_updateStorage) => {
  const storageExist = await warehouseRepository.getSingleStorage(id);

  if (!storageExist) {
    throw new AppError(HttpStatusCode.NotFound, "Storage not found");
  }

  return await warehouseRepository.updateStorage(id, payload);
};

export const wareHouseService = {
  createNewWarehouse,
  getAllWarehouse,
  getSingleWarehouse,
  updateStorage,
};
