import joi from "joi";

export default joi
  .object({
    PORT: joi.string().default("5000"),
    EDGE_SIM_PY_ORCHESTRATOR_URL: joi
      .string()
      .default("http://localhost:3002")
      .uri()
      .description("URL of the EdgeSimPy orchestrator service"),
    ARTA_SSO_URL: joi
      .string()
      .default("http://localhost:3001")
      .uri()
      .description("URL of the ARTA SSO service"),
  })
  .unknown();
