import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";

export const CreateProduct = async (app: FastifyInstance) => {
  app.post("/products", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(201).send([
      { id: 1, name: "bola" },
      { id: 2, name: "boneco" },
    ]);
  });
};
