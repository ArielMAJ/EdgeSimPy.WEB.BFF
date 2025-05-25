import CurrentUser from "../../graphql/resolvers/Auth/types/objects/CurrentUser";
import config from "../../config";
import AxiosInstance from "../../utils/axios-instance";
import keysToCamelCase from "../../utils/response-parser";

export async function getCurrentUser(
  bearerToken: string
): Promise<CurrentUser> {
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
