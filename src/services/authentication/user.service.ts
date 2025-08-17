import { ApolloError, UserInputError } from "apollo-server-express";
import RegisterResponse from "graphql/resolvers/Auth/types/objects/RegisterResponse";
import config from "../../config";
import CurrentUserResponse from "../../graphql/resolvers/Auth/types/objects/CurrentUserResponse";
import AxiosInstance from "../../utils/axios-instance";
import keysToCamelCase from "../../utils/response-parser";

export async function getCurrentUser(
  bearerToken: string
): Promise<CurrentUserResponse> {
  const response = await AxiosInstance.get(`${config.ARTA_SSO_URL}/user/me`, {
    headers: {
      Authorization: bearerToken,
    },
  });

  const camelCaseData = keysToCamelCase(response.data);
  const { id, name, email, createdAt, updatedAt } = camelCaseData;
  return {
    id,
    name,
    email,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
}

export async function registerNewUser(
  fullName: string,
  email: string,
  password: string
): Promise<RegisterResponse> {
  console.info(
    `[RegisterNewUser] Sending registration request for email: ${email}`
  );
  const response = await AxiosInstance.post(
    `${config.ARTA_SSO_URL}/user/register`,
    {
      name: fullName,
      email,
      password,
    }
  ).catch((error: any) => {
    console.error(`[RegisterNewUser] Error during registration: ${error};`);
    if (error?.response?.data?.detail?.[0]) {
      throw new UserInputError("An error occurred during registration.", {
        externalError: error,
      });
    }
    throw new ApolloError("An error occurred during registration.", "", {
      externalError: error,
    });
  });
  console.info(`[RegisterNewUser] Registration successful for email: ${email}`);
  const camelCaseData = keysToCamelCase(response.data);
  const { name, ...rest } = camelCaseData as any;
  return {
    fullName: name,
    ...rest,
  };
}
