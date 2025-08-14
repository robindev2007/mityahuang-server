import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { convertZodToFastifySchema } from "../../../../lib/utils/zod-to-json-schema";
import { authGuard } from "../../../middleware/auth";
import sanitizeInputsViaZod from "../../../middleware/sanitizeClientDataViaZod";
import { createExchangeRateSchema } from "../validation/exchange-rate.validation";

export async function exchangeRoutes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  const fastifySchema = convertZodToFastifySchema(createExchangeRateSchema);

  fastify.post(
    "/create",
    {
      preHandler: [
        authGuard("SUPER_ADMIN", "ADMIN"),
        sanitizeInputsViaZod(createExchangeRateSchema),
      ],
      schema: {
        body: fastifySchema,
        response: {
          201: fastifySchema,
        },
      },
    },
    async (req: FastifyRequest, rep: FastifyReply) => {
      console.log(req);
    },
  );
}
