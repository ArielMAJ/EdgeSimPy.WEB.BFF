import { Resolver, Query, Ctx } from "type-graphql";
import CurrentUser from "../types/objects/CurrentUser";
import { getCurrentUser } from "../../../../services/authentication/user.service";
import { AuthenticationError } from "apollo-server-express";

@Resolver()
export default class GetCurrentUserResolver {
  @Query(() => CurrentUser, { description: "Current user data" })
  async currentUser(
    @Ctx() context: { req: { headers: { authorization?: string } } }
  ): Promise<CurrentUser> {
    console.log("[GetCurrentUserResolver] Resolver called");
    const authHeader = context.req.headers.authorization || "";
    return getCurrentUser(authHeader).catch((error) => {
      console.error("Error fetching current user:", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        throw new AuthenticationError(
          "Authentication failed: Invalid or expired credentials."
        );
      }
      throw new Error(
        `Failed to fetch current user.`
      );
    });
  }
}
