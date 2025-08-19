import { Profile, User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import AppError from "../../../../errors/appError";
import { I_PaginationResponse } from "../../../../interface/common.interface";
import { generateMemberId } from "../../../../lib/utils/gen-member-id";
import { userRepository } from "../repository/user.repository";
import { T_ChangeRole, T_UserSchema } from "../types/user.types";

// ** Create user into db
const createUserIntoDb = async (payload: T_UserSchema["body"]) => {
  // generate the memberId
  const generatedMemberId = generateMemberId(payload.profile.firstName);
  const result = await userRepository.createUser({
    payload,
    memberId: generatedMemberId,
  });
  return result;
};

// ** Get all user from db ~ Only admin can see
const getAllUsersFromDb = async (
  query?: Record<string, any>,
): Promise<I_PaginationResponse<Omit<User, "password">[]>> => {
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = Number(page - 1) * limit || 0;

  // Get the total count of orders (not limited by pagination)
  const totalCount = await userRepository.getUsersCount();

  // Calculate totalPages for pagination
  const totalPages = Math.ceil(totalCount / limit);

  // getting only the verified users
  const result = await userRepository.getPaginatedUsers(limit, skip, query!);

  // pagination return data schema
  const paginationSchema: I_PaginationResponse<Omit<User, "password">[]> = {
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

// ** Retrieve single user information by its id
const getSingeUserFromDb = async (id: string) => {
  // id is missing in params
  if (!id) {
    throw new AppError(StatusCodes.NOT_FOUND, "User id is required!");
  }

  const result = await userRepository.getUserById(id);

  // if there is now user exist by the id
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, "User doesn't exist by this id!");
  }
  return result;
};

// ** Retrieve single user information by its email
const getSingeUserByEmailFromDb = async (email: string) => {
  // email is missing in params
  if (!email) {
    throw new AppError(StatusCodes.NOT_FOUND, "User email is required!");
  }

  const result = await userRepository.getUserByMail({ email });

  // if there is now user exist by the id
  if (!result) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      "User doesn't exist by this email!",
    );
  }
  return result;
};

// ** Retrieve single user information by its id
const getUserByEmailFromDb = async (email: string) => {
  // email is missing in params
  if (!email) {
    throw new AppError(StatusCodes.NOT_FOUND, "User email is required!");
  }

  const result = await userRepository.getUserByMail({ email });

  // if there is now user exist by the email
  if (!result) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      "User doesn't exist by this email!",
    );
  }
  return result;
};

// ** Delete user
const deleteUserInfoFromDb = async (id: string, payload: Partial<User>) => {
  // email is missing in params
  if (!id) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      "Id is missing in order to update information!",
    );
  }

  const isUserExist = await userRepository.getUserById(id);

  // if there is now user exist by the email
  if (!isUserExist) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      "User doesn't exist by this email!",
    );
  }

  const deleteUser = await userRepository.deleteUserById(id);
  return deleteUser;
};

// ** Change role
const changeUserRoleFromDb = async (payload: T_ChangeRole["body"]) => {
  const isUserExist = await userRepository.getUserByMail({
    email: payload.email,
  });

  // if there is now user exist by the email
  if (!isUserExist) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      "User doesn't exist by this email!",
    );
  }

  // If user already have the role that comes from the payload then no need to change the role
  if (isUserExist.role === payload.role) {
    throw new AppError(StatusCodes.BAD_REQUEST, "User already have this role!");
  }

  const updateUserRole = await userRepository.changeUserRole(payload);
  return updateUserRole;
};

// Update user profile
// ** Update only user information
const updateUserProfileFromDb = async (
  id: string,
  payload: Partial<Profile>,
) => {
  // email is missing in params
  if (!id) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      "Id is missing in order to update information!",
    );
  }

  // getting user information by id to check if user exist or not
  const isUserExist = await userRepository.getUserById(id);

  // if there is now user exist by the email
  if (!isUserExist) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      "User doesn't exist by this email!",
    );
  }

  const updateUserInfo = await userRepository.updateUserProfile(id, payload);

  return updateUserInfo;
};
export const userServices = {
  getAllUsersFromDb,
  createUserIntoDb,
  getSingeUserFromDb,
  updateUserProfileFromDb,
  getUserByEmailFromDb,
  deleteUserInfoFromDb,
  getSingeUserByEmailFromDb,
  changeUserRoleFromDb,
};
