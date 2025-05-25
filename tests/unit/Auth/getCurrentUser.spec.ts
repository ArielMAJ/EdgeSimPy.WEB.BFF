// import { createTestClient } from "apollo-server-testing";
// import { getCurrentUserQuery } from "./__gql__/queries";
// import { createTestServer } from "../../utils";
// import * as userService from "../../../src/services/authentication/user.service";

// beforeAll(async () => {});

// beforeEach(async () => {});

// afterAll(async () => {});

// describe("Get Current User", () => {
//   it("should return object with registered user", async () => {
//     jest.spyOn(userService, "getCurrentUser").mockResolvedValue({
//       id: 1,
//       name: "John Doe",
//       email: "user@example.com",
//       createdAt: new Date("2025-05-25T14:28:15.785Z"),
//       updatedAt: new Date("2025-05-25T14:28:15.785Z"),
//     });

//     const apolloServer = await createTestServer({
//       req: {
//         headers: {
//           authorization: "Bearer valid-token",
//         },
//       },
//     });
//     const { query } = createTestClient(apolloServer);

//     const res = await query({
//       query: getCurrentUserQuery,
//     });
//     expect(res).toMatchSnapshot("Example valid current user");
//   });

//   it("return null if no valid user is found", async () => {
//     jest.spyOn(userService, "getCurrentUser").mockResolvedValue(null);
//     const apolloServer = await createTestServer({
//       req: {
//         headers: {
//           authorization: "Bearer valid-token",
//         },
//       },
//     });
//     const { query } = createTestClient(apolloServer);

//     const res = await query({
//       query: getCurrentUserQuery,
//     });
//     expect(res).toMatchSnapshot("Example invalid current user");
//   });
// });
