import { rest } from "msw";

export const handlers = [
  rest.get("/projects", (req, res, ctx) => {
    const delay = 2000;
    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `Success response in ${delay.toString()}ms!`,
      })
    );
  }),
  rest.get("/dashboard", (req, res, ctx) => {
    const delay = 1000;
    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `Success response in ${delay.toString()}ms!`,
      })
    );
  }),
  rest.get("/comments", (req, res, ctx) => {
    const delay = 1500;
    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `Success response in ${delay.toString()}ms!`,
      })
    );
  }),
  rest.get("/replies", (req, res, ctx) => {
    const delay = 2500;
    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `Success response in ${delay.toString()}ms!`,
      })
    );
  }),
];
