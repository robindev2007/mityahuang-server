import prisma from "../../../../lib/utils/prisma.utils";
import {
  T_NewSelf,
  T_NewStorage,
  T_NewWarehouse,
  T_updateStorage,
} from "../types/warehouse-management.types";

// ** get all ware house
const getAllWarehouse = async (limit: number, skip: number) => {
  return prisma.warehouse.findMany({
    take: limit,
    skip,
    select: {
      id: true,
      name: true,
      status: true,
      shelves: {
        select: {
          id: true,
          _count: {
            select: { storages: true },
          },
        },
      },
    },
  });
};

// ** get single warehouse
const getSingleWarehouse = async (name: string) => {
  return await prisma.warehouse.findUnique({
    where: { name },
    include: {
      shelves: {
        include: {
          storages: true,
        },
      },
    },
  });
};

// ** update Storage status
const updateStorage = async (id: string, payload: T_updateStorage) => {
  return await prisma.storage.update({
    where: { id },
    data: payload,
  });
};

// ** update Storage status
const getSingleStorage = async (id: string) => {
  return await prisma.storage.findUnique({
    where: { id },
  });
};

// ** create new warehouse
const createNewWarehouse = async (payload: T_NewWarehouse) => {
  return await prisma.warehouse.create({
    data: payload,
  });
};

// ** get warehouse count
const getWareHouseCount = async () => {
  return await prisma.warehouse.count();
};

// ** get shelves
const getShelvesByWarehouseId = async (warehouseId: string) => {
  return await prisma.shelf.findMany({
    where: { warehouseId },
  });
};

// ** create shelves
const createShelves = async (payload: T_NewSelf[]) => {
  return await prisma.shelf.createMany({
    data: payload,
  });
};

// ** create storages
const createStorages = async (payload: T_NewStorage[]) => {
  return await prisma.storage.createMany({
    data: payload,
  });
};

export const warehouseRepository = {
  createNewWarehouse,
  createShelves,
  createStorages,
  getShelvesByWarehouseId,
  getAllWarehouse,
  getWareHouseCount,
  getSingleWarehouse,
  updateStorage,
  getSingleStorage,
};
