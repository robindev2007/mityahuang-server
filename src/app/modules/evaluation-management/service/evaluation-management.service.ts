import { EvaluationManagement } from "@prisma/client";
import { I_PaginationResponse } from "../../../../interface/common.interface";
import { evaluationManagementRepository } from "../repository/evaluation-management.repository";
import AppError from "../../../../errors/appError";
import { HttpStatusCode } from "axios";
import {
  T_NewEvaluationManagement,
  T_UpdateEvaluationManagement,
} from "../types/evaluation-management.types";

// ** get all Evaluation Management
const getAllEvaluationManagement = async (query?: Record<string, any>) => {
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = Number(page - 1) * limit || 0;

  // get total count of contact us
  const totalCount =
    await evaluationManagementRepository.getEvaluationManagementCount();

  // calculate total page for pagination
  const totalPages = Math.ceil(totalCount / limit);

  const result =
    await evaluationManagementRepository.getAllEvaluatingManagement(
      limit,
      skip,
      query!,
    );

  const paginationSchema: I_PaginationResponse<EvaluationManagement[]> = {
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

// ** get Evaluation Management by id
const getSingleEvaluationManagement = async (id: string) => {
  const EvaluationManagement =
    await evaluationManagementRepository.getSingleEvaluatingManagement(id);

  if (!EvaluationManagement) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "EvaluationManagement not found",
    );
  }

  return EvaluationManagement;
};

// ** create new Evaluation Management
const createNewEvaluationManagement = async (
  payload: T_NewEvaluationManagement,
) => {
  return await evaluationManagementRepository.createNewEvaluationManagement(
    payload,
  );
};

// ** update Evaluation Management
const updateEvaluationManagement = async (
  id: string,
  payload: T_UpdateEvaluationManagement,
) => {
  const EvaluationManagement =
    await evaluationManagementRepository.getSingleEvaluatingManagement(id);

  if (!EvaluationManagement) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "Evaluation Management not found",
    );
  }

  return await evaluationManagementRepository.updateEvaluationManagement(
    id,
    payload,
  );
};

// ** delete Evaluation Management
const deleteEvaluationManagement = async (id: string) => {
  const EvaluationManagement =
    await evaluationManagementRepository.getSingleEvaluatingManagement(id);

  if (!EvaluationManagement) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "Evaluation Management not found",
    );
  }

  return await evaluationManagementRepository.deleteEvaluationManagement(id);
};

export const evaluationManagementService = {
  getAllEvaluationManagement,
  getSingleEvaluationManagement,
  createNewEvaluationManagement,
  updateEvaluationManagement,
  deleteEvaluationManagement,
};
