import { createUserWithEmailAndPassword } from "@firebase/auth";
import { getFirebaseAuth } from "./FirebaseAuth";

export const signUpAPI = async (
  name: string,
  email: string,
  password: string
) => {
  const auth = getFirebaseAuth();

  try {
    /** Firebaseにユーザー登録 */
    const signUpResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    /** databaseにユーザー登録 */
    const user = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        firebase_uid: signUpResult.user.uid,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const idToken = await signUpResult.user.getIdToken();
    const refreshToken = signUpResult.user.refreshToken;

    /** sessionをcookieに保管する処理 */
    await fetch("/api/session", {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
        refreshToken: refreshToken,
      }),
    });
  } catch (e) {
    return e.message;
  }
};
