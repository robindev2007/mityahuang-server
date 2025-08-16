import { User, UserRole } from "@prisma/client";
import prisma from "../../../../lib/utils/prisma.utils";
import { T_UserSchema } from "../types/user.types";
import { T_ChangeRole } from "../validation/user.validation";

// ** Get the user by mail address
const getUserByMail = async (payload: { email: string; omitPwd?: boolean }) => {
  const result = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    omit: {
      password: payload.omitPwd ?? true,
    },
  });
  return result;
};

// ** Get the user by mail address and role
const getUserByMailAndRole = async (payload: {
  email: string;
  role: UserRole;
}) => {
  return await prisma.user.findUnique({
    where: {
      email: payload.email,
      role: payload.role,
    },
    omit: {
      password: true,
    },
  });
};

// ** Get the user by useId
const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    omit: {
      password: true,
    },
  });
};

// ** get specific user by id with password
const getUserByIdFromDB = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

// ** Get the user total count
const getUsersCount = async () => {
  return await prisma.user.count();
};

// ** Get all users with pagination
const getPaginatedUsers = async (
  limit: number,
  skip: number,
  query: Record<string, any>,
) => {
  return await prisma.user.findMany({
    take: limit,
    skip,
    where: query,
    omit: {
      password: true,
    },
  });
};

/**
 * Creating a user.
 * @payload - contain all user information. ``
 * @role {enum} - by default every created user is `MEMBER`
 */
const createUser = async (payload: T_UserSchema) => {
  return await prisma.user.create({
    data: {
      ...payload,
      role: UserRole.MEMBER,
    },
    omit: {
      password: true,
    },
  });
};

// ** Update the user info
const updateUser = async (id: string, payload: Partial<User>) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: payload,
    omit: {
      password: true,
    },
  });
};

// ** Update the user role
const updateUserRole = async (email: string, role: UserRole) => {
  return await prisma.user.update({
    where: {
      email,
    },
    data: {
      role: role,
    },
    omit: {
      password: true,
    },
  });
};

// ** Delete the user by userId
const deleteUserById = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};

// ** Change role by email
const changeUserRole = async (payload: T_ChangeRole["body"]) => {
  return await prisma.user.update({
    where: {
      email: payload.email,
    },
    data: {
      role: payload.role as UserRole,
    },
  });
};

export const userRepository = {
  createUser,
  updateUser,
  getUserByMail,
  getUserByMailAndRole,
  updateUserRole,
  getUserById,
  deleteUserById,
  getUsersCount,
  getPaginatedUsers,
  getUserByIdFromDB,
  changeUserRole,
};
