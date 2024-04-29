import { procedure, router } from "./trpc";

export const appRouter = router({
  getHello: procedure.query(async () => {
    return { msg: "Hello World" };
  }),
});

export type AppRouter = typeof appRouter;
