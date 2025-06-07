import { NextResponse } from "next/server"
import { auth } from "./auth"
import { headers } from "next/headers"

import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (session && request.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (!session && request.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
