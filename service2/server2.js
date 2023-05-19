"use strict";

const fastify = require("fastify")({
  logger: true,
});

fastify.get("/call-service-1", async () => {
  const res = await fetch("http://service1:3000/hello");
  return res.json();
});

fastify.get("/hello", () => {
  return { hello: "service1" };
});

fastify.listen({ port: 3000, host: "0.0.0.0" });
