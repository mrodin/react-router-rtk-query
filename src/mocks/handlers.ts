import { rest } from "msw";

export const handlers = [
  rest.get("/projects", (req, res, ctx) => {
    const params = new URL(req.url).searchParams;
    const delay = Number(params.get("delay")) || 200;

    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `/projects successfully responded in ${delay.toString()}ms!`,
      })
    );
  }),
  rest.get("/dashboard", (req, res, ctx) => {
    const params = new URL(req.url).searchParams;
    const delay = Number(params.get("delay")) || 200;

    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `/dashboard successfully responded in ${delay.toString()}ms!`,
      })
    );
  }),
  rest.get("/comments", (req, res, ctx) => {
    const params = new URL(req.url).searchParams;
    const delay = Number(params.get("delay")) || 200;

    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `/comments successfully responded in ${delay.toString()}ms!`,
      })
    );
  }),
  rest.get("/replies", (req, res, ctx) => {
    const params = new URL(req.url).searchParams;
    const delay = Number(params.get("delay")) || 200;

    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `/replies successfully responded in ${delay.toString()}ms!`,
      })
    );
  }),
];
