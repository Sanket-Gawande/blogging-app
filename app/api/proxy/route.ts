import hp from "http-proxy";
import { NextRequest, NextResponse } from "next/server";
const httpProxy = hp.createProxyServer();
export function GET(req: NextRequest) {
  NextResponse.json({ message: "Not working" });
}
