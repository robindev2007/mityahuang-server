import { FastifyReply, FastifyRequest } from "fastify";
import { exchangeRateService } from "../service/exchange-rate.service";
import { T_CreateExchangeRateInput } from "../validation/exchange-rate.validation";

const createExchangeRateController = async (
  req: FastifyRequest<{ Body: T_CreateExchangeRateInput }>,
  reply: FastifyReply,
) => {
  const exchangeRate = await exchangeRateService.createExchangeRateService(
    req.body,
  );
  reply.code(201).send(exchangeRate);
};
export const exchangeRateControllers = {
  create: createExchangeRateController,
};
