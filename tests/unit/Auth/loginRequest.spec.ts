// import { createTestClient } from "apollo-server-testing";
// import { loginRequestMutation } from "./__gql__/mutations";
// import { createTestServer } from "../../utils";

// beforeAll(async () => {});

// beforeEach(async () => {});

// afterAll(async () => {});

// describe("User Login", () => {
//   it("should log in a user with valid credentials", async () => {
//     jest
//       .spyOn(
//         require("../../../src/services/authentication/login.service"),
//         "requestToken"
//       )
//       .mockResolvedValue({
//         accessToken: "some-valid-access-token",
//         tokenType: "bearer",
//         expiresAt: "2025-05-25T16:36:24.076Z",
//       });

//     const loginInput = ˜;

//     const apolloServer = await createTestServer();
//     const { mutate } = createTestClient(apolloServer);

//     const res = await mutate({
//       mutation: loginRequestMutation,
//       variables: loginInput,
//     });
//     expect(res).toMatchSnapshot("User login");
//   });
// });
