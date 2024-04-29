import dbConnect from "@/server/db/mongoose";
import { appRouter } from "@/server/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => {
      await dbConnect();
      return {};
    },
  });

export const GET = handler;
export const POST = handler;
