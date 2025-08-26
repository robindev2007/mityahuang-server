import { MemberShipLevel } from "@prisma/client";
import prisma from "../../../../lib/utils/prisma.utils";
import {
  T_MembershipLevel,
  T_UpdateMembershipLevel,
} from "../types/membership-level.types";

// ** get all membership levels
const getAllMembershipLevels = async (
  limit: number,
  skip: number,
  query?: Record<string, any>,
) => {
  return await prisma.memberShipLevel.findMany({
    take: limit,
    skip,
  });
};

// ** get single membership level
const getSingleMembershipLevel = async (id: string) => {
  return await prisma.memberShipLevel.findFirst({
    where: { id },
  });
};

// ** create new membership Level
const createNewMembershipLevel = async (payload: T_MembershipLevel) => {
  return await prisma.memberShipLevel.create({
    data: payload,
  });
};

// ** update membership Level
const updateMembershipLevel = async (
  id: string,
  payload: T_UpdateMembershipLevel,
) => {
  return await prisma.memberShipLevel.update({
    where: { id },
    data: payload,
  });
};

// ** get membership Level count
const getMembershipLevelCount = async () => {
  return await prisma.memberShipLevel.count();
};

// ** delete membership Level
const deleteMembershipLevel = async (id: string) => {
  return await prisma.memberShipLevel.delete({
    where: { id },
  });
};

export const membershipLevelRepository = {
  getAllMembershipLevels,
  getSingleMembershipLevel,
  getMembershipLevelCount,
  createNewMembershipLevel,
  updateMembershipLevel,
  deleteMembershipLevel,
};
