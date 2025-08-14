import { ExchangeRate } from "@prisma/client";
import prisma from "../../../../lib/utils/prisma.utils";
import { T_CreateExchangeRateInput } from "../validation/exchange-rate.validation";

// ** Creating a exchange rate for the first time
const createExchangeRate = async (payload: T_CreateExchangeRateInput) => {
  return prisma.exchangeRate.create({
    data: payload,
  });
};

// ** Updating the exchange rate
const updateExchangeRate = async (
  id: string,
  payload: Partial<ExchangeRate>,
) => {
  return prisma.exchangeRate.update({
    where: { id },
    data: payload,
  });
};

// ** Retrieve all exchange rate
const getExchangeRate = async (from: string, to: string) => {
  return prisma.exchangeRate.findFirst({
    where: { from, to },
  });
};

// ** Retrieve single exchange rate by its id
const getExchangeRateById = async (id: string) => {
  return prisma.exchangeRate.findUnique({
    where: { id },
  });
};

export const exchangeRateRepository = {
  createExchangeRate,
  updateExchangeRate,
  getExchangeRate,
  getExchangeRateById,
};
