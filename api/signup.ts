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

    console.log(signUpResult);

    /** databaseにユーザー登録 */
    const user = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        uid: signUpResult.user.uid,
      }),
    });

    console.log(user);

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
