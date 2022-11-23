import { rest } from "msw";

export const handlers = [
  rest.get("/success", (req, res, ctx) => {
    const params = new URL(req.url).searchParams;
    const delay = Number(params.get("delay")) || 200;
    return res(
      ctx.delay(delay),
      ctx.json({
        payload: `Success response in ${delay.toString()}!`,
      })
    );
  }),

  rest.get("/error", (req, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: "Not authorized",
      })
    );
  }),
];
