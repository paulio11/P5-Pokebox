import { rest } from "msw";

const baseURL = "https://project-5-backend.herokuapp.com/";

export const handers = [
  // Intercept test user request, return JSON data.
  rest.get(`${baseURL}dj-rest-auth/user/`, (request, response, context) => {
    return response(
      context.json({
        pk: 1,
        username: "paulio11",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_avatar:
          "https://res.cloudinary.com/dpmcfhiw1/image/upload/v1/project-5/media/avatars/IMG_0371_kowepw",
      })
    );
  }),

  // Intercept test logout request, return response 200.
  rest.post(`${baseURL}dj-rest-auth/logout/`, (request, response, context) => {
    return response(context.status(200));
  }),
];
