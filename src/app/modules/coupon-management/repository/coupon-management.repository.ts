import { CouponManagement } from "@prisma/client";
import prisma from "../../../../lib/utils/prisma.utils";
import { T_NewCoupon, T_UpdateCoupon } from "../types/coupon-management.types";

// ** get all coupon management
const getAllCoupon = async (
  limit: number,
  skip: number,
  query?: Record<string, any>,
) => {
  return await prisma.couponManagement.findMany({
    take: limit,
    skip,
  });
};

// ** get single Coupon
const getSingleCoupon = async (id: string) => {
  return await prisma.couponManagement.findFirst({
    where: { id },
  });
};

// ** create new Coupon
const createNewCoupon = async (payload: T_NewCoupon) => {
  return await prisma.couponManagement.create({
    data: payload,
  });
};

// ** update Coupon
const updateCoupon = async (id: string, payload: T_UpdateCoupon) => {
  return await prisma.couponManagement.update({
    where: { id },
    data: payload,
  });
};

// ** get Coupon count
const getCouponCount = async () => {
  return await prisma.couponManagement.count();
};

// ** delete coupon
const deleteCoupon = async (id: string) => {
  return await prisma.couponManagement.delete({
    where: { id },
  });
};

export const couponRepository = {
  getAllCoupon,
  getSingleCoupon,
  getCouponCount,
  createNewCoupon,
  updateCoupon,
  deleteCoupon,
};
