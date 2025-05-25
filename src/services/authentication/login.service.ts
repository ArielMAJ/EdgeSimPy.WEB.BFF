import Token from "graphql/resolvers/Auth/types/objects/Token";
import config from "../../config";
import AxiosInstance from "../../utils/axios-instance";
import keysToCamelCase from "../../utils/response-parser";

export async function requestToken(
  email: string,
  password: string
): Promise<Token> {
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
  );

  const camelCaseData = keysToCamelCase(response.data);
  const { accessToken, tokenType, expiresAt } = camelCaseData;
  return {
    accessToken,
    tokenType,
    expiresAt: new Date(expiresAt),
  };
}
