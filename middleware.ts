import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isMobile = /iPhone|Android|Mobile|iPad/.test(userAgent);
  const hasVisited = request.cookies.get("hasVisited");
  const isWelcomePage = request.nextUrl.pathname === "/welcome";

  if (isMobile && !hasVisited && !isWelcomePage) {
    const url = request.nextUrl.clone();
    url.pathname = "/welcome";

    const response = NextResponse.redirect(url);

    response.cookies.set("hasVisited", "true", {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
