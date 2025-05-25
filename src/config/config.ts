import Joi from "joi";

const loadConfig = (schema: Joi.ObjectSchema, envs: NodeJS.ProcessEnv) => {
  const { error, value: envVars } = schema.validate(envs, {
    abortEarly: true,
  });

  if (error) {
    throw new Error(`Environment variables validation error: ${error.message}`);
  }

  return {
    PORT: envVars.PORT,
    ARTA_SSO_URL: envVars.ARTA_SSO_URL,
    EDGE_SIM_PY_ORCHESTRATOR_URL: envVars.EDGE_SIM_PY_ORCHESTRATOR_URL,
  };
};

export default loadConfig;
