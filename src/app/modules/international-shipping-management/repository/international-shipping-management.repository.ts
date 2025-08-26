import prisma from "../../../../lib/utils/prisma.utils";
import {
  T_NewInternationalShipping,
  T_UpdateInternationalShipping,
} from "../types/international-shipping-management.types";

// ** get all international Shipping
const getAllInternationalShipping = async (
  limit: number,
  skip: number,
  query?: Record<string, any>,
) => {
  return await prisma.internationalShipping.findMany({
    take: limit,
    skip,
  });
};

// ** get international Shipping  by id
const getSingleInternationalShipping = async (id: string) => {
  return await prisma.internationalShipping.findFirst({
    where: { id },
  });
};

// ** create new international Shipping
const createNewInternationalShipping = async (
  payload: T_NewInternationalShipping,
) => {
  return await prisma.internationalShipping.create({
    data: payload,
  });
};

// ** update international Shipping
const updateInternationalShipping = async (
  id: string,
  payload: T_UpdateInternationalShipping,
) => {
  return await prisma.internationalShipping.update({
    where: { id },
    data: payload as any,
  });
};

// ** delete international Shipping
const deleteInternationalShipping = async (id: string) => {
  return await prisma.internationalShipping.delete({
    where: { id },
  });
};

// ** get international Shipping  count
const getInternationalShippingCount = async () => {
  return await prisma.internationalShipping.count();
};

export const internationalShippingRepository = {
  getAllInternationalShipping,
  getInternationalShippingCount,
  getSingleInternationalShipping,
  createNewInternationalShipping,
  updateInternationalShipping,
  deleteInternationalShipping,
};
