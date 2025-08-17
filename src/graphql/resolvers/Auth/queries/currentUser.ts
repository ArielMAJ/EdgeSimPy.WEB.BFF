import { ApolloError, AuthenticationError } from "apollo-server-express";
import { Ctx, Query, Resolver } from "type-graphql";
import { getCurrentUser } from "../../../../services/authentication/user.service";
import CurrentUserResponse from "../types/objects/CurrentUserResponse";

@Resolver()
export default class GetCurrentUserResolver {
  @Query(() => CurrentUserResponse, { description: "Current user data" })
  async currentUser(
    @Ctx() context: { req: { headers: { authorization?: string } } }
  ): Promise<CurrentUserResponse> {
    console.log("[GetCurrentUserResolver] Resolver called");
    const authHeader = context.req.headers.authorization || "";
    return getCurrentUser(authHeader).catch((error) => {
      console.error("Error fetching current user:", error);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        throw new AuthenticationError(
          "Authentication failed: Invalid or expired credentials.",
          {
            externalError: error,
          }
        );
      }
      throw new ApolloError(
        `Failed to fetch current user.`,
        "FETCH_USER_ERROR",
        {
          externalError: error,
        }
      );
    });
  }
}
