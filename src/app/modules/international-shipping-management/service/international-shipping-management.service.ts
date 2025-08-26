import { I_PaginationResponse } from "../../../../interface/common.interface";
import AppError from "../../../../errors/appError";
import { HttpStatusCode } from "axios";
import { internationalShippingRepository } from "../repository/international-shipping-management.repository";
import {
  T_NewInternationalShipping,
  T_UpdateInternationalShipping,
} from "../types/international-shipping-management.types";
import { InternationalShipping } from "@prisma/client";

// ** getAll internationalShipping
const getAllInternationalShipping = async (query?: Record<string, any>) => {
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = Number(page - 1) * limit || 0;

  // get total count of contact us
  const totalCount =
    await internationalShippingRepository.getInternationalShippingCount();

  // calculate total page for pagination
  const totalPages = Math.ceil(totalCount / limit);

  const result =
    await internationalShippingRepository.getAllInternationalShipping(
      limit,
      skip,
      query!,
    );

  const paginationSchema: I_PaginationResponse<InternationalShipping[]> = {
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

// ** get internationalShipping by id
const getSingleInternationalShipping = async (id: string) => {
  const internationalShipping =
    await internationalShippingRepository.getSingleInternationalShipping(id);

  if (!internationalShipping) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "International Shipping not found",
    );
  }

  return internationalShipping;
};

// ** create new internationalShipping
const createNewInternationalShipping = async (
  payload: T_NewInternationalShipping,
) => {
  const internationalShipping =
    await internationalShippingRepository.createNewInternationalShipping(
      payload,
    );

  return internationalShipping;
};

// ** create new international Shipping
const updateInternationalShipping = async (
  id: string,
  payload: T_UpdateInternationalShipping,
) => {
  const internationalShippingExist =
    await internationalShippingRepository.getSingleInternationalShipping(id);

  if (!internationalShippingExist) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "International Shipping  not found",
    );
  }

  const internationalShipping =
    await internationalShippingRepository.updateInternationalShipping(
      id,
      payload,
    );

  return internationalShipping;
};

// ** delete international Shipping
const deleteInternationalShipping = async (id: string) => {
  const internationalShippingExist =
    await internationalShippingRepository.getSingleInternationalShipping(id);

  if (!internationalShippingExist) {
    throw new AppError(
      HttpStatusCode.NotFound,
      "International Shipping  not found",
    );
  }

  return await internationalShippingRepository.deleteInternationalShipping(id);
};

export const internationalShippingService = {
  getAllInternationalShipping,
  getSingleInternationalShipping,
  updateInternationalShipping,
  createNewInternationalShipping,
  deleteInternationalShipping,
};
