import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { userServices } from "../service/user.service";
import { T_UserSchema } from "../types/user.types";

// ** Crate a user
const createUser = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body as T_UserSchema["body"];
  const result = await userServices.createUserIntoDb(body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "User created successfully",
    success: true,
    data: result,
  });
});

// ** retrieve all the users from db
const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const result = await userServices.getAllUsersFromDb(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "All users retrieved successfully",
    success: true,
    data: result,
  });
});

// ** retrieve single user from db
const getSingleUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userServices.getSingeUserFromDb(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User retrieved successfully",
    success: true,
    data: result,
  });
});

// ** retrieve single user from db by mail
const getSingleUserByMail = asyncHandler(
  async (req: Request, res: Response) => {
    const email = req.params.email;
    const result = await userServices.getSingeUserByEmailFromDb(email);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: "User retrieved successfully",
      success: true,
      data: result,
    });
  },
);

// ** Update profile information
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId; // which user information need to be updated
  const body = req.body;
  const result = await userServices.updateUserProfileFromDb(userId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User information updated successfully",
    success: true,
    data: result,
  });
});

// ** Delete users
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const result = await userServices.deleteUserInfoFromDb(userId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User deleted successfully!",
    success: true,
    data: result,
  });
});

// ** Change users role
const changeRole = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body as {
    email: string;
    role: string;
  };
  const result = await userServices.changeUserRoleFromDb(body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "User deleted successfully!",
    success: true,
    data: result,
  });
});

export const userControllers = {
  createUser,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  deleteUser,
  getSingleUserByMail,
  changeRole,
};
