import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { isAuth } from "../../hooks/useGetUserInfo";
import "./styles.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
export const Auth = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };


  const {isAuth} = useGetUserInfo()
  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  return (
    <div className="login-page">
      <p>Sign In With Google To Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};
