import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { UserServices } from "../service/user.service";

// ** Crate a user
const createUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await UserServices.createUserIntoDb(req.body);

  sendResponse(res, {
    statuscode: StatusCodes.CREATED,
    message: "User created successfully",
    success: true,
    data: result,
  });
});

// ** retrieve all the users from db
const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDb(req.query);

  sendResponse(res, {
    statuscode: StatusCodes.OK,
    message: "All users retrieved successfully",
    success: true,
    data: result,
  });
});

// ** retrieve single user from db
const getSingleUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserServices.getSingeUserFromDb(id);

  sendResponse(res, {
    statuscode: StatusCodes.OK,
    message: "User retrieved successfully",
    success: true,
    data: result,
  });
});

// ** retrieve single user from db by mail
const getSingleUserByMail = asyncHandler(
  async (req: Request, res: Response) => {
    const email = req.params.email;
    const result = await UserServices.getSingeUserByEmailFromDb(email);

    sendResponse(res, {
      statuscode: StatusCodes.OK,
      message: "User retrieved successfully",
      success: true,
      data: result,
    });
  },
);

// ** Update user information
const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.id; // which user information need to be updated
  const result = await UserServices.updateUserInfoFromDb(userId, req.body);

  sendResponse(res, {
    statuscode: StatusCodes.OK,
    message: "User information updated successfully",
    success: true,
    data: result,
  });
});

// ** Delete users
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const result = await UserServices.deleteUserInfoFromDb(userId, req.body);

  sendResponse(res, {
    statuscode: StatusCodes.OK,
    message: "User deleted successfully!",
    success: true,
    data: result,
  });
});

// ** Change users role
const changeRole = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body as typeof req.body & {
    email: string;
    role: string;
  };
  const result = await UserServices.changeUserRoleFromDb(body);

  sendResponse(res, {
    statuscode: StatusCodes.OK,
    message: "User deleted successfully!",
    success: true,
    data: result,
  });
});

export const userControllers = {
  createUser,
  updateUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  getSingleUserByMail,
  changeRole,
};
