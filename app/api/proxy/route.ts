import hp from "http-proxy"
import { NextRequest, NextResponse } from "next/server"
const httpProxy = hp.createProxyServer()
export function GET(req: NextRequest) {
  NextResponse.json({ message: "Not working" })
  // httpProxy.web(req, NextResponse, { target: "https://res.cloudinary.com/dimnm3eea/raw/upload/v1714203761/obznkkaxim6iqjcqmirr.html" })
}