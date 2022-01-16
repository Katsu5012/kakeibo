import type { NextApiRequest as Req, NextApiResponse as Res } from "next";
import { setCookie } from "nookies";
import { firebaseAdmin } from "../../firebaseAdmin";

const sessionApi = async (req: Req, res: Res) => {
  if (req.method !== "POST") return res.status(404).send("Not Found");

  const auth = firebaseAdmin.auth();

  const idToken = (JSON.parse(req.body).idToken || "").toString();
  const idTokenExpiresIn = 10 * 60 * 1000;

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: idTokenExpiresIn,
  });

  const refreshToken = (JSON.parse(req.body).refreshToken || "").toString();
  const refreshTokenExpiresIn = 60 * 60 * 24 * 30;

  const options = {
    maxAge: idTokenExpiresIn,
    httpOnly: true,
    secure: true,
    path: "/",
  };

  const refreshTokenOptions = {
    maxAge: refreshTokenExpiresIn,
    httpOnly: false,
    secure: true,
    path: "/",
  };

  setCookie({ res }, "idToken", sessionCookie, options);
  setCookie({ res }, "refreshToken", refreshToken, refreshTokenOptions);

  res.send(JSON.stringify({ status: "success" }));
};

export default sessionApi;
