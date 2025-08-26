import { ServiceManagement } from "@prisma/client";
import prisma from "../../../../lib/utils/prisma.utils";
import {
  T_CreateServiceManagement,
  T_UpdateServiceManagement,
} from "../types/service-management.types";

// ** get all service management
const getAllServiceManagements = async (
  limit: number,
  skip: number,
  query?: Record<string, any>,
) => {
  return await prisma.serviceManagement.findMany({
    take: limit,
    skip,
  });
};

// ** get service management by id
const getSingleServiceManagement = async (id: string) => {
  return await prisma.serviceManagement.findFirst({
    where: { id },
  });
};

// ** create service management
const createNewServiceManagement = async (
  payload: T_CreateServiceManagement,
) => {
  return await prisma.serviceManagement.create({
    data: payload,
  });
};

// ** update service management
const updateServiceManagement = async (
  id: string,
  payload: T_UpdateServiceManagement,
) => {
  return await prisma.serviceManagement.update({
    where: { id },
    data: payload,
  });
};

// ** get blog count
const getServiceManagementCount = async () => {
  return await prisma.serviceManagement.count();
};

// ** delete service management
const deleteServiceManagement = async (id: string) => {
  return await prisma.serviceManagement.delete({
    where: { id },
  });
};

export const serviceManagementRepository = {
  getAllServiceManagements,
  getServiceManagementCount,
  getSingleServiceManagement,
  createNewServiceManagement,
  updateServiceManagement,
  deleteServiceManagement,
};
