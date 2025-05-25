import Token from "../../graphql/resolvers/Auth/types/objects/Token";
import config from "../../config";
import AxiosInstance from "../../utils/axios-instance";
import keysToCamelCase from "../../utils/response-parser";
import { AuthenticationError } from "apollo-server-express";

export async function requestToken(
  email: string,
  password: string
): Promise<Token> {
  console.info(`[LoginRequestResolver] Sending request to SSO: ${email}`);
  const response = await AxiosInstance.post(
    `${config.ARTA_SSO_URL}/auth/token`,
    {
      username: email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).catch((error: any) => {
    console.error(
      `[LoginRequestResolver] Error while requesting token: ${error.message}`
    );
    if (error.response && error.response.status === 401) {
      throw new AuthenticationError("Invalid email or password.");
    }
    throw Error("An error occurred while logging in.");
  });
  const camelCaseData = keysToCamelCase(response.data);
  const { accessToken, tokenType, expiresAt } = camelCaseData;
  return {
    accessToken,
    tokenType,
    expiresAt: new Date(expiresAt),
  };
}
