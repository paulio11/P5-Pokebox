import { rest } from "msw";

const baseURL = "https://project-5-backend.herokuapp.com/";

export const handlers = [
  // Intercept login GET, return mock data.
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "testuser",
        profile_id: 1,
        profile_image: "profile_avatar_image",
      })
    );
  }),

  // Intercept logout POST, return response 200.
  rest.post(`${baseURL}dj-rest-auth/logout`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
