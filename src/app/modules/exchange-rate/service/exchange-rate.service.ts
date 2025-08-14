import { StatusCodes } from "http-status-codes";
import AppError from "../../../../errors/appError";
import prisma from "../../../../lib/utils/prisma.utils";
import { exchangeRateRepository } from "../repository/exchange-rate.repository";
import { T_CreateExchangeRateInput } from "../validation/exchange-rate.validation";

const createExchangeRateService = async (
  payload: T_CreateExchangeRateInput,
) => {
  // ** check exchange is exist or not
  const isExchangeRateExist = await prisma.exchangeRate.findFirst();
  if (isExchangeRateExist) {
    throw new AppError(
      StatusCodes.NOT_ACCEPTABLE,
      "Exchange rate exists! Please update it instead of creating a new one",
    );
  }

  // create the one. It will only be allowed for first time
  const createExRate = await exchangeRateRepository.createExchangeRate(payload);

  return createExRate;
};

// const updateExchangeRateService = async (
//   id: number,
//   input: UpdateExchangeRateInput,
// ) => {
//   const rate = await getExchangeRateById(id);
//   if (!rate) {
//     throw new HttpException(404, "Exchange rate not found");
//   }

//   return updateExchangeRate(id, input);
// };

// const getExchangeRateService = async (from: string, to: string) => {
//   const rate = await getExchangeRate(from, to);
//   if (!rate) {
//     throw new HttpException(404, "Exchange rate not found");
//   }

//   return rate;
// };

export const exchangeRateService = {
  createExchangeRateService,
  //   updateExchangeRateService,
  //   getExchangeRateService,
};
