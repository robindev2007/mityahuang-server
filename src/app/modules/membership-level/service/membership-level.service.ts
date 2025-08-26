import { MemberShipLevel } from "@prisma/client";
import { I_PaginationResponse } from "../../../../interface/common.interface";
import { membershipLevelRepository } from "../repository/membership-level.repository";
import AppError from "../../../../errors/appError";
import { HttpStatusCode } from "axios";
import {
  T_MembershipLevel,
  T_UpdateMembershipLevel,
} from "../types/membership-level.types";

// ** get all membership levels
const getAllMembershipLevels = async (query?: Record<string, any>) => {
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = Number(page - 1) * limit || 0;

  // get total count of contact us
  const totalCount = await membershipLevelRepository.getMembershipLevelCount();

  // calculate total page for pagination
  const totalPages = Math.ceil(totalCount / limit);

  const result = await membershipLevelRepository.getAllMembershipLevels(
    limit,
    skip,
    query!,
  );

  const paginationSchema: I_PaginationResponse<MemberShipLevel[]> = {
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

// ** get membership level by id
const getSingleMembershipLevel = async (id: string) => {
  const blogExist =
    await membershipLevelRepository.getSingleMembershipLevel(id);

  if (!blogExist) {
    throw new AppError(HttpStatusCode.NotFound, "Membership level not found");
  }

  return blogExist;
};

// ** create new membership level
const createNewMembershipLevel = async (payload: T_MembershipLevel) => {
  return await membershipLevelRepository.createNewMembershipLevel({
    ...payload,
  });
};

// ** update membership level
const updateMembershipLevel = async (
  id: string,
  payload: T_UpdateMembershipLevel,
) => {
  const blogExist =
    await membershipLevelRepository.getSingleMembershipLevel(id);

  if (!blogExist) {
    throw new AppError(HttpStatusCode.NotFound, "Membership level not found");
  }

  return await membershipLevelRepository.updateMembershipLevel(id, {
    ...payload,
  });
};

// ** delete membership level
const deleteMembershipLevel = async (id: string) => {
  const blogExist =
    await membershipLevelRepository.getSingleMembershipLevel(id);

  if (!blogExist) {
    throw new AppError(HttpStatusCode.NotFound, "Membership level not found");
  }

  return await membershipLevelRepository.deleteMembershipLevel(id);
};

export const membershipService = {
  getAllMembershipLevels,
  getSingleMembershipLevel,
  createNewMembershipLevel,
  updateMembershipLevel,
  deleteMembershipLevel,
};
