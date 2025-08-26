import { HttpStatusCode } from "axios";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { membershipService } from "../service/membership-level.service";

// ** get all membership level
const getAllMembershipLevels = asyncHandler(async (req, res) => {
  const results = await membershipService.getAllMembershipLevels(req.query);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Getting all membership level success",
    data: results,
  });
});

// ** get memberShipLevel by id
const getSingleMembershipLevel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const memberShipLevel = await membershipService.getSingleMembershipLevel(id);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Getting single MemberShip level success",
    data: memberShipLevel,
  });
});

// ** create new memberShipLevel
const createNewMembershipLevel = asyncHandler(async (req, res) => {
  const memberShipLevel = await membershipService.createNewMembershipLevel(
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Creating new MemberShip level success",
    data: memberShipLevel,
  });
});

// ** update memberShipLevel
const updateMembershipLevel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const memberShipLevel = await membershipService.updateMembershipLevel(
    id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Updating MemberShip level success",
    data: memberShipLevel,
  });
});

// ** get memberShipLevel by id
const deleteMembershipLevel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const memberShipLevel = await membershipService.deleteMembershipLevel(id);

  sendResponse(res, {
    success: true,
    statusCode: HttpStatusCode.Ok,
    message: "Deleting MemberShip level success",
    data: null,
  });
});

export const memberShipLevelController = {
  getAllMembershipLevels,
  getSingleMembershipLevel,
  createNewMembershipLevel,
  updateMembershipLevel,
  deleteMembershipLevel,
};
