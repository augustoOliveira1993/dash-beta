import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/helpers";

const publicRoutes = ["/", "/auth"];

export default function middleware(request: NextRequest) {
  "use server";
  const token = request.cookies.get("nextauth.token")?.value;
  const routerName = request.nextUrl.pathname;
  if (publicRoutes.includes(routerName)) {
    return NextResponse.next();
  }

  if (routerName.includes("/auth") && token) {
    return NextResponse.redirect(new URL(getUrl("/")));
  }

  if (routerName !== "/auth/signin" && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth/signin")));
  }
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
