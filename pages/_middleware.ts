import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  // Only rewrite requests to `/`, as _middleware on the `/pages` root will be executed in every request of the app.
  if (req.url !== "/sign-in" || "/sign-up") {
    // Parse the cookie
    const idToken = JSON.parse(req.cookies["idToken"]);
    console.log(idToken);
    const authUser = await fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: { Authorization: "Bearer " + idToken },
    });
    if (authUser.status !== 200) {
      NextResponse.redirect("/login");
    }
  }
};
