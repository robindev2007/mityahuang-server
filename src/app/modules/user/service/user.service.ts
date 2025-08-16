import { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import AppError from "../../../../errors/appError";
import { I_PaginationResponse } from "../../../../interface/common.interface";
import { userRepository } from "../repository/user.repository";
import { T_UserSchema } from "../types/user.types";
import { T_ChangeRole } from "../validation/user.validation";

// ** Create user into db
const createUserIntoDb = async (payload: T_UserSchema) => {
  const result = await userRepository.createUser(payload);
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
  const paginationSchema = {
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

// ** Update user information
const updateUserInfoFromDb = async (id: string, payload: Partial<User>) => {
  // email is missing in params
  if (!id) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
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

  // update the user information
  const { role, ...rest } = payload;

  if (role && Object.keys(payload).includes(role)) {
    // A user can't change any role
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      "You can't change role by yourself!",
    );
  }
  const updateUserInfo = await userRepository.updateUser(id, rest);
  return updateUserInfo;
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

  const updateUserRole = await userRepository.changeUserRole(payload);
  return updateUserRole;
};

export const userServices = {
  getAllUsersFromDb,
  createUserIntoDb,
  getSingeUserFromDb,
  updateUserInfoFromDb,
  getUserByEmailFromDb,
  deleteUserInfoFromDb,
  getSingeUserByEmailFromDb,
  changeUserRoleFromDb,
};
